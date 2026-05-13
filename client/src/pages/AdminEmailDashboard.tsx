import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Send, Inbox, Archive, Trash2, Reply, Clock, User, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLocation } from "wouter";

interface Conversation {
  id: number;
  visitorName: string;
  visitorEmail: string;
  subject: string;
  status: "open" | "replied" | "closed";
  createdAt: Date;
  updatedAt: Date;
}

interface Message {
  id: number;
  conversationId: number;
  sender: "customer" | "admin";
  senderEmail: string;
  senderName: string;
  subject: string | null;
  message: string;
  isRead: number;
  createdAt: Date;
}

export default function AdminEmailDashboard() {
  const { user, loading } = useAuth();
  const [, setLocation] = useLocation();
  const [selectedConversation, setSelectedConversation] = useState<number | null>(null);
  const [replyMessage, setReplyMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redirect if not admin
  useEffect(() => {
    if (!loading && (!user || user.role !== "admin")) {
      setLocation("/");
      toast.error("您沒有權限訪問此頁面");
    }
  }, [user, loading, setLocation]);

  const { data: conversations, refetch: refetchConversations } = trpc.email.getConversations.useQuery(
    { limit: 50, offset: 0 },
    { enabled: !!user && user.role === "admin" }
  );

  const { data: currentConversation, refetch: refetchCurrent } = trpc.email.getConversation.useQuery(
    { conversationId: selectedConversation! },
    { enabled: !!selectedConversation && !!user && user.role === "admin" }
  );

  const handleSendReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedConversation || !replyMessage.trim()) {
      toast.error("請輸入回覆內容");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/trpc/email.sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          json: {
            conversationId: selectedConversation,
            senderName: "Therlect 客服團隊",
            senderEmail: "jimmy.chen@therlect.com",
            message: replyMessage,
          },
        }),
        credentials: "include",
      });

      if (response.ok) {
        toast.success("回覆已發送！");
        setReplyMessage("");
        refetchCurrent();
        refetchConversations();
      } else {
        toast.error("發送失敗，請稍後重試。");
      }
    } catch (error) {
      toast.error("發送失敗，請稍後重試。");
      console.error("Error sending reply:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin mb-4">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <p className="text-muted-foreground">加載中...</p>
        </div>
      </div>
    );
  }

  if (!user || user.role !== "admin") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 mx-auto mb-4 text-destructive" />
          <p className="text-lg font-semibold">無權限訪問</p>
          <p className="text-muted-foreground mt-2">您需要管理員權限才能訪問此頁面</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">郵件管理中心</h1>
          <p className="text-muted-foreground">管理客戶詢問和郵件對話</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Conversations List */}
          <div className="lg:col-span-1">
            <Card className="p-4">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Inbox className="w-5 h-5" />
                對話列表
              </h2>

              <div className="space-y-2 max-h-96 overflow-y-auto">
                {conversations && conversations.length > 0 ? (
                  conversations.map((conv: Conversation) => (
                    <button
                      key={conv.id}
                      onClick={() => setSelectedConversation(conv.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedConversation === conv.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted hover:bg-muted/80"
                      }`}
                    >
                      <div className="font-medium truncate text-sm">{conv.visitorName}</div>
                      <div className="text-xs opacity-75 truncate">{conv.subject}</div>
                      <div className="text-xs opacity-50 mt-1">
                        {new Date(conv.createdAt).toLocaleDateString("zh-TW")}
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Mail className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">暫無對話</p>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Conversation Detail */}
          <div className="lg:col-span-3">
            {selectedConversation && currentConversation ? (
              <Card className="p-6">
                {/* Conversation Header */}
                <div className="mb-6 pb-4 border-b">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{currentConversation.conversation.subject}</h2>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {currentConversation.conversation.visitorName}
                        </div>
                        <div className="flex items-center gap-1">
                          <Mail className="w-4 h-4" />
                          {currentConversation.conversation.visitorEmail}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {new Date(currentConversation.conversation.createdAt).toLocaleString("zh-TW")}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        currentConversation.conversation.status === "open"
                          ? "bg-yellow-100 text-yellow-800"
                          : currentConversation.conversation.status === "replied"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-800"
                      }`}>
                        {currentConversation.conversation.status === "open"
                          ? "未回覆"
                          : currentConversation.conversation.status === "replied"
                          ? "已回覆"
                          : "已關閉"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="mb-6 space-y-4 max-h-96 overflow-y-auto">
                  {currentConversation.messages && currentConversation.messages.length > 0 ? (
                    currentConversation.messages.map((msg: Message) => (
                      <div
                        key={msg.id}
                        className={`p-4 rounded-lg ${
                          msg.sender === "admin"
                            ? "bg-primary/10 border border-primary/20 ml-8"
                            : "bg-muted mr-8"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-semibold text-sm">
                            {msg.sender === "admin" ? "客服回覆" : msg.senderName}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {new Date(msg.createdAt).toLocaleString("zh-TW")}
                          </div>
                        </div>
                        <p className="text-sm whitespace-pre-wrap">{msg.message}</p>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <AlertCircle className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">暫無訊息</p>
                    </div>
                  )}
                </div>

                {/* Reply Form */}
                <form onSubmit={handleSendReply} className="border-t pt-4">
                  <div className="mb-4">
                    <Textarea
                      placeholder="輸入您的回覆..."
                      value={replyMessage}
                      onChange={(e) => setReplyMessage(e.target.value)}
                      className="min-h-24"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting || !replyMessage.trim()}
                    className="w-full"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "發送中..." : "發送回覆"}
                  </Button>
                </form>
              </Card>
            ) : (
              <Card className="p-12 text-center">
                <Mail className="w-12 h-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                <p className="text-muted-foreground">選擇一個對話以查看詳情</p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
