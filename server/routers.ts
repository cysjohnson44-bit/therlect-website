import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createBooking, getBookings, saveChatMessage, getChatHistory } from "./db";
import { invokeLLM } from "./_core/llm";

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
});

export type AppRouter = typeof appRouter;
