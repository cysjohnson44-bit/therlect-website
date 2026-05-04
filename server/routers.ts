import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createBooking, getBookings, saveChatMessage, getChatHistory, createEmailConversation, getEmailConversations, getEmailConversationById, getEmailMessages, saveEmailMessage, updateEmailConversationStatus } from "./db";
import { invokeLLM } from "./_core/llm";
import { sendEmail, generateBookingNotificationTemplate, generateBookingConfirmationTemplate, generateContactEmailTemplate, generateContactConfirmationTemplate } from "./_core/email";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Booking routes
  booking: router({
    create: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        email: z.string().email(),
        phone: z.string().min(1),
        date: z.string().min(1),
        message: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const booking = await createBooking({
          name: input.name,
          email: input.email,
          phone: input.phone,
          date: input.date,
          message: input.message || null,
          status: "pending",
        });

        // Send confirmation email to user
        await sendEmail({
          to: input.email,
          subject: "預約洽談確認 - Therlect 汎海科技",
          htmlContent: generateBookingConfirmationTemplate({
            name: input.name,
            date: input.date,
            message: input.message,
          }),
        });

        // Send notification email to admin
        await sendEmail({
          to: "jimmy.chen@therlect.com",
          subject: `新的預約洽談申請 - ${input.name}`,
          htmlContent: generateBookingNotificationTemplate({
            name: input.name,
            email: input.email,
            phone: input.phone,
            date: input.date,
            message: input.message,
          }),
        });

        return booking;
      }),
    list: publicProcedure
      .input(z.object({
        limit: z.number().default(50),
        offset: z.number().default(0),
      }))
      .query(async ({ input }) => {
        return getBookings(input.limit, input.offset);
      }),
  }),

  // Contact form routes
  contact: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        email: z.string().email(),
        phone: z.string().min(1),
        company: z.string().optional(),
        subject: z.string().min(1),
        message: z.string().min(1),
      }))
      .mutation(async ({ input }) => {
        // Send confirmation email to user
        await sendEmail({
          to: input.email,
          subject: `我們已收到您的訊息 - ${input.subject}`,
          htmlContent: generateContactConfirmationTemplate({
            name: input.name,
            subject: input.subject,
          }),
        });

        // Send contact form to admin
        await sendEmail({
          to: "jimmy.chen@therlect.com",
          subject: `新的聯絡表單提交 - ${input.subject} (來自 ${input.name})`,
          htmlContent: generateContactEmailTemplate({
            name: input.name,
            email: input.email,
            phone: input.phone,
            company: input.company,
            subject: input.subject,
            message: input.message,
          }),
        });

        return {
          success: true,
          message: "訊息已發送，我們將在 24 小時內與您聯繫。",
        };
      }),
  }),

  // AI Chat routes
  chat: router({
    send: publicProcedure
      .input(z.object({
        sessionId: z.string(),
        message: z.string().min(1),
      }))
      .mutation(async ({ input }) => {
        // Save user message
        await saveChatMessage({
          sessionId: input.sessionId,
          role: "user",
          content: input.message,
        });

        // Get chat history for context
        const history = await getChatHistory(input.sessionId);
        const messages = history.map(msg => ({
          role: msg.role as "user" | "assistant",
          content: msg.content,
        }));

        // Add current message
        messages.push({ role: "user", content: input.message });

        // Call LLM for response
        const response = await invokeLLM({
          messages: [
            {
              role: "system",
              content: `你是 Therlect 汎海科技的 AI 助手。你需要幫助客戶了解我們的熱管理解決方案和遠紅外線技術。
              
Therlect 汎海科技的核心服務包括：
1. 熱力學工程 - CFD 模擬分析、散熱模組設計與優化、材料熱特性分析
2. 遠紅外線技術 - 高效節能加熱技術、均勻穿透式加熱、健康照護應用
3. 完整解決方案 - 從概念設計到大規模量產

請用友善、專業的語氣回答客戶的問題，並在適當時推薦預約洽談。`,
            },
            ...messages.slice(-10), // Keep last 10 messages for context
          ],
        });

        const assistantContent = response.choices[0]?.message?.content;
        const assistantMessage = typeof assistantContent === 'string' ? assistantContent : '抱歉，我無法回應您的問題。';

        // Save assistant response
        await saveChatMessage({
          sessionId: input.sessionId,
          role: "assistant",
          content: assistantMessage,
        });

        return { message: assistantMessage };
      }),
    history: publicProcedure
      .input(z.object({
        sessionId: z.string(),
      }))
      .query(async ({ input }) => {
        return getChatHistory(input.sessionId);
      }),
  }),

  // Email messaging routes
  email: router({
    startConversation: publicProcedure
      .input(z.object({
        visitorName: z.string().min(1),
        visitorEmail: z.string().email(),
        subject: z.string().min(1),
        message: z.string().min(1),
      }))
      .mutation(async ({ input }) => {
        // Create conversation
        const conversation = await createEmailConversation({
          visitorName: input.visitorName,
          visitorEmail: input.visitorEmail,
          subject: input.subject,
          status: "open",
        });

        // Save initial message
        await saveEmailMessage({
          conversationId: conversation.id,
          sender: "customer",
          senderEmail: input.visitorEmail,
          senderName: input.visitorName,
          subject: input.subject,
          message: input.message,
          isRead: 0,
        });

        // Send notification email to admin
        await sendEmail({
          to: "jimmy.chen@therlect.com",
          subject: `新的客服詢問 - ${input.subject} (來自 ${input.visitorName})`,
          htmlContent: `
            <h2>新的客服詢問</h2>
            <p><strong>來自：</strong> ${input.visitorName} (${input.visitorEmail})</p>
            <p><strong>主旨：</strong> ${input.subject}</p>
            <p><strong>訊息：</strong></p>
            <p>${input.message.replace(/\n/g, '<br>')}</p>
          `,
        });

        // Send confirmation email to customer
        await sendEmail({
          to: input.visitorEmail,
          subject: `我們已收到您的詢問 - ${input.subject}`,
          htmlContent: `
            <h2>感謝您的詢問</h2>
            <p>親愛的 ${input.visitorName}，</p>
            <p>我們已收到您的詢問，我們的客服團隊將在 24 小時內與您聯繫。</p>
            <p><strong>您的詢問主旨：</strong> ${input.subject}</p>
            <p>如有任何急迫事項，請撥打 +886-2-2999-5596 與我們聯繫。</p>
            <p>謝謝！</p>
            <p>Therlect 汎海科技團隊</p>
          `,
        });

        return { conversationId: conversation.id, success: true };
      }),

    getConversations: publicProcedure
      .input(z.object({
        limit: z.number().default(50),
        offset: z.number().default(0),
      }))
      .query(async ({ input }) => {
        return getEmailConversations(input.limit, input.offset);
      }),

    getConversation: publicProcedure
      .input(z.object({
        conversationId: z.number(),
      }))
      .query(async ({ input }) => {
        const conversation = await getEmailConversationById(input.conversationId);
        if (!conversation) return null;

        const messages = await getEmailMessages(input.conversationId);
        return { conversation, messages };
      }),

    sendMessage: publicProcedure
      .input(z.object({
        conversationId: z.number(),
        senderName: z.string().min(1),
        senderEmail: z.string().email(),
        message: z.string().min(1),
      }))
      .mutation(async ({ input }) => {
        // Save message
        const savedMessage = await saveEmailMessage({
          conversationId: input.conversationId,
          sender: "customer",
          senderEmail: input.senderEmail,
          senderName: input.senderName,
          message: input.message,
          isRead: 0,
        });

        // Update conversation status
        await updateEmailConversationStatus(input.conversationId, "open");

        // Send notification email to admin
        const conversation = await getEmailConversationById(input.conversationId);
        if (conversation) {
          await sendEmail({
            to: "jimmy.chen@therlect.com",
            subject: `新的客服回覆 - ${conversation.subject}`,
            htmlContent: `
              <h2>客戶回覆</h2>
              <p><strong>來自：</strong> ${input.senderName} (${input.senderEmail})</p>
              <p><strong>訊息：</strong></p>
              <p>${input.message.replace(/\n/g, '<br>')}</p>
            `,
          });
        }

        return { success: true, messageId: savedMessage.id };
      }),
  }),
});

export type AppRouter = typeof appRouter;
