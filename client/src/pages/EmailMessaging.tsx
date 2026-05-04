import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, MessageSquare, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

export default function EmailMessaging() {
  const [activeTab, setActiveTab] = useState<"new" | "history">("new");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [conversationId, setConversationId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { data: conversations } = trpc.email.getConversations.useQuery(
    { limit: 50, offset: 0 },
    { enabled: activeTab === "history" }
  );

  const { data: currentConversation } = trpc.email.getConversation.useQuery(
    { conversationId: conversationId! },
    { enabled: !!conversationId && activeTab === "history" }
  );

  const handleStartConversation = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/trpc/email.startConversation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          json: {
            visitorName: formData.name,
            visitorEmail: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
        }),
        credentials: "include",
      });

      if (response.ok) {
        const result = await response.json();
        setIsSubmitting(false);
        toast.success("您的詢問已發送！我們將在 24 小時內與您聯繫。");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setConversationId(result.result.data.conversationId);
        setActiveTab("history");
      } else {
        setIsSubmitting(false);
        toast.error("發送失敗，請稍後重試。");
      }
    } catch (error) {
      setIsSubmitting(false);
      toast.error("發送失敗，請稍後重試。");
      console.error("Form submission error:", error);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!conversationId) return;

    setIsSubmitting(true);

    try {
      const messageInput = (e.target as HTMLFormElement).querySelector(
        "textarea"
      ) as HTMLTextAreaElement;
      const message = messageInput.value;

      const response = await fetch("/api/trpc/email.sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          json: {
            conversationId,
            senderName: formData.name,
            senderEmail: formData.email,
            message,
          },
        }),
        credentials: "include",
      });

      if (response.ok) {
        setIsSubmitting(false);
        toast.success("訊息已發送！");
        messageInput.value = "";
      } else {
        setIsSubmitting(false);
        toast.error("發送失敗，請稍後重試。");
      }
    } catch (error) {
      setIsSubmitting(false);
      toast.error("發送失敗，請稍後重試。");
      console.error("Message submission error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-5" />
        </div>

        <div className="container relative z-10 text-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6 animate-in slide-in-from-bottom-5 fade-in duration-700">
            客服詢問與訊息互動
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-5 fade-in duration-700 delay-100">
            與我們的客服團隊進行實時互動，獲得專業的技術支援和解決方案諮詢。
          </p>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container">
          {/* Tabs */}
          <div className="flex gap-4 mb-12 border-b border-white/10">
            <button
              onClick={() => setActiveTab("new")}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === "new"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                新建詢問
              </div>
            </button>
            <button
              onClick={() => setActiveTab("history")}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === "history"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                對話歷史
              </div>
            </button>
          </div>

          {/* New Conversation Tab */}
          {activeTab === "new" && (
            <div className="max-w-2xl mx-auto">
              <div className="bg-card border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[50px] -z-10" />

                <h2 className="font-display font-bold text-3xl mb-8">開始新的詢問</h2>

                <form onSubmit={handleStartConversation} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                        姓名
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="您的姓名"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="bg-background/50 border-white/10 focus:border-primary/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                        電子郵件
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="bg-background/50 border-white/10 focus:border-primary/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">
                      主旨
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      placeholder="您感興趣的服務或產品"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="bg-background/50 border-white/10 focus:border-primary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                      訊息內容
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="請詳細描述您的需求..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="min-h-[200px] bg-background/50 border-white/10 focus:border-primary/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">發送中...</span>
                    ) : (
                      <span className="flex items-center gap-2">
                        發送詢問 <Send className="w-4 h-4" />
                      </span>
                    )}
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">回應時間</h3>
                      <p className="text-muted-foreground text-sm">
                        我們的客服團隊通常在 24 小時內回覆您的詢問。如有緊急事項，請撥打 +886-2-2999-5596 與我們聯繫。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Conversation History Tab */}
          {activeTab === "history" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Conversations List */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-white/10 rounded-2xl p-6 shadow-xl">
                  <h3 className="font-display font-bold text-xl mb-6">對話列表</h3>

                  <div className="space-y-3 max-h-[600px] overflow-y-auto">
                    {conversations && conversations.length > 0 ? (
                      conversations.map((conv) => (
                        <button
                          key={conv.id}
                          onClick={() => setConversationId(conv.id)}
                          className={`w-full text-left p-4 rounded-lg transition-colors ${
                            conversationId === conv.id
                              ? "bg-primary/20 border border-primary/50"
                              : "bg-background/50 border border-white/5 hover:bg-background/70"
                          }`}
                        >
                          <div className="font-medium text-sm mb-1 truncate">
                            {conv.subject}
                          </div>
                          <div className="text-xs text-muted-foreground truncate">
                            {conv.visitorName}
                          </div>
                          <div className="text-xs text-muted-foreground mt-2">
                            {new Date(conv.updatedAt).toLocaleDateString("zh-TW")}
                          </div>
                          <div className="mt-2">
                            <span
                              className={`text-xs px-2 py-1 rounded ${
                                conv.status === "open"
                                  ? "bg-yellow-500/20 text-yellow-400"
                                  : conv.status === "replied"
                                  ? "bg-blue-500/20 text-blue-400"
                                  : "bg-green-500/20 text-green-400"
                              }`}
                            >
                              {conv.status === "open"
                                ? "開啟"
                                : conv.status === "replied"
                                ? "已回覆"
                                : "已關閉"}
                            </span>
                          </div>
                        </button>
                      ))
                    ) : (
                      <p className="text-muted-foreground text-sm text-center py-8">
                        暫無對話記錄
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Conversation Detail */}
              <div className="lg:col-span-2">
                {currentConversation ? (
                  <div className="bg-card border border-white/10 rounded-2xl p-8 shadow-xl">
                    <div className="mb-8 pb-8 border-b border-white/10">
                      <h3 className="font-display font-bold text-2xl mb-2">
                        {currentConversation.conversation.subject}
                      </h3>
                      <p className="text-muted-foreground">
                        {currentConversation.conversation.visitorName} (
                        {currentConversation.conversation.visitorEmail})
                      </p>
                    </div>

                    {/* Messages */}
                    <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto">
                      {currentConversation.messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${
                            msg.sender === "customer" ? "justify-end" : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-xs lg:max-w-md px-6 py-4 rounded-lg ${
                              msg.sender === "customer"
                                ? "bg-primary/20 border border-primary/50"
                                : "bg-background/50 border border-white/10"
                            }`}
                          >
                            <p className="text-sm font-medium mb-2">
                              {msg.senderName}
                            </p>
                            <p className="text-sm text-foreground mb-2">
                              {msg.message}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {new Date(msg.createdAt).toLocaleString("zh-TW")}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Send Message Form */}
                    <form onSubmit={handleSendMessage} className="space-y-4">
                      <Textarea
                        placeholder="輸入您的回覆..."
                        className="min-h-[100px] bg-background/50 border-white/10 focus:border-primary/50 resize-none"
                      />
                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "發送中..."
                        ) : (
                          <span className="flex items-center gap-2">
                            發送回覆 <Send className="w-4 h-4" />
                          </span>
                        )}
                      </Button>
                    </form>
                  </div>
                ) : (
                  <div className="bg-card border border-white/10 rounded-2xl p-12 shadow-xl text-center">
                    <MessageSquare className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      選擇一個對話以查看詳情
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
