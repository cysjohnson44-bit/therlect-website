import { useState, useEffect } from "react";
import { X, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { Streamdown } from "streamdown";
import { nanoid } from "nanoid";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function AIPromotionWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);
  const [sessionId] = useState(() => nanoid());

  const chatMutation = trpc.chat.send.useMutation();
  const bookingMutation = trpc.booking.create.useMutation();

  // 初始化時發送歡迎訊息
  useEffect(() => {
    if (isOpen && !hasInitialized) {
      setHasInitialized(true);
      const welcomeMessage: Message = {
        id: "welcome",
        role: "assistant",
        content:
          "👋 歡迎來到 Therlect 汎海科技！我是您的 AI 助手。\n\n我們專注於熱管理技術，為全球客戶提供從理論分析到市場應用的全方位散熱解決方案。\n\n請問有什麼我可以幫助您的嗎？或者您想了解我們的服務？",
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, hasInitialized]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // 添加用戶訊息
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      // 調用 AI 聊天 API
      const response = await chatMutation.mutateAsync({
        sessionId: sessionId,
        message: inputValue,
      });

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response.message,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "抱歉，我暫時無法回應。請稍後再試。",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBookingClick = async () => {
    try {
      // 觸發預約流程
      const today = new Date();
      const dateStr = today.toISOString().split('T')[0];
      
      const result = await bookingMutation.mutateAsync({
        name: "AI Widget Inquiry",
        email: "inquiry@therlect.com",
        phone: "+886-1234-5678",
        date: dateStr,
        message: "Customer initiated booking from AI widget",
      });

      const confirmMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `✅ 預約已提交！\n\n感謝您的興趣！我們的團隊將在 24 小時內與您聯絡。\n\n預約編號: ${result.id}\n\n如有任何問題，歡迎繼續提問。`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, confirmMessage]);
    } catch (error) {
      console.error("Booking error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "預約提交失敗，請稍後重試或直接聯絡我們。",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Open AI Chat"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
            1
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-h-[600px] bg-background rounded-2xl shadow-2xl border border-primary/20 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5" />
              <div>
                <h3 className="font-semibold">Therlect AI 助手</h3>
                <p className="text-xs opacity-90">即時推廣與洽談</p>
              </div>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                setHasInitialized(false);
              }}
              className="hover:bg-white/20 p-1 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-background to-background/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-lg ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-muted text-muted-foreground rounded-bl-none border border-primary/20"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <Streamdown>{msg.content}</Streamdown>
                  ) : (
                    <p className="text-sm">{msg.content}</p>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted text-muted-foreground px-4 py-3 rounded-lg rounded-bl-none border border-primary/20">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce delay-100" />
                    <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-primary/10 p-4 space-y-3 bg-background/50">
            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <Button
                onClick={handleBookingClick}
                size="sm"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-xs"
              >
                <Calendar className="w-3 h-3 mr-1" />
                立即預約
              </Button>
              <Button
                onClick={() => {
                  setInputValue("請介紹一下汎海科技的核心服務");
                }}
                variant="outline"
                size="sm"
                className="text-xs"
              >
                了解服務
              </Button>
            </div>

            {/* Input Field */}
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && !isLoading) {
                    handleSendMessage();
                  }
                }}
                placeholder="輸入您的問題..."
                className="flex-1 px-3 py-2 rounded-lg border border-primary/20 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                size="sm"
                className="bg-primary hover:bg-primary/90"
              >
                送出
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              💡 提示：點擊「立即預約」快速預約洽談
            </p>
          </div>
        </div>
      )}
    </>
  );
}
