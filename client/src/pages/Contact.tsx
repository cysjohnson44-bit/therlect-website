import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, Youtube } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useLanguage } from "@/hooks/useLanguage";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { currentLanguage } = useLanguage();
  const isEn = currentLanguage === 'en';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const company = formData.get('company') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    
    try {
      const response = await fetch('/api/trpc/contact.submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ json: { name, email, phone, company, subject, message } }),
        credentials: 'include',
      });
      
      if (response.ok) {
        setIsSubmitting(false);
        toast.success(isEn ? "Message sent successfully!" : "訊息已發送！");
        (e.target as HTMLFormElement).reset();
      } else {
        setIsSubmitting(false);
        toast.error(isEn ? "Failed to send. Please try again later." : "發送失敗，請稍後重試。");
      }
    } catch (error) {
      setIsSubmitting(false);
      toast.error(isEn ? "Failed to send. Please try again later." : "發送失敗，請稍後重試。");
      console.error('Form submission error:', error);
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
            {isEn ? "Contact Us" : "聯絡我們"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-5 fade-in duration-700 delay-100">
            {isEn ? "Whether it's project consultation, technical support, or partnership proposals, we look forward to hearing from you." : "無論是專案諮詢、技術支援還是合作提案，我們都期待聽到您的聲音。"}
          </p>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display font-bold text-3xl mb-6">{isEn ? "Contact Information" : "聯絡資訊"}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {isEn ? "You can reach us through the following methods, or fill out the form on the right. Our team will respond within 24 hours." : "您可以透過以下方式聯繫我們，或是填寫右側表單，我們的團隊將在 24 小時內回覆您。"}
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-card/30 border border-white/5 hover:bg-card/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{isEn ? "New Taipei Office" : "台北辦公室"}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {isEn ? "9F-3, No. 27, Lane 61, Sec. 1, Guangfu Rd., Sanchong Dist., New Taipei City 241557, Taiwan" : "241557 新北市三重區\n光復路一段61巷27號9樓之3"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-card/30 border border-white/5 hover:bg-card/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{isEn ? "Tainan Office" : "台南辦公室"}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {isEn ? "No. 49, Zhonghua Rd., Xinshi Dist., Tainan City, Taiwan" : "台南市新市區\n中華路49號"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-card/30 border border-white/5 hover:bg-card/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{isEn ? "Phone" : "電話"}</h3>
                    <p className="text-muted-foreground font-mono text-lg">+886-2-2999-5596</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-card/30 border border-white/5 hover:bg-card/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{isEn ? "Business Hours" : "營業時間"}</h3>
                    <p className="text-muted-foreground">
                      {isEn ? "Monday - Friday 09:00 - 18:00" : "週一至週五 09:00 - 18:00"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[50px] -z-10" />
              
              <h2 className="font-display font-bold text-3xl mb-8">{isEn ? "Send Message" : "發送訊息"}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-muted-foreground">{isEn ? "Name" : "姓名"}</label>
                    <Input id="name" name="name" required placeholder={isEn ? "Your name" : "您的姓名"} className="bg-background/50 border-white/10 focus:border-primary/50" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-muted-foreground">{isEn ? "Company" : "公司名稱"}</label>
                    <Input id="company" name="company" placeholder={isEn ? "Your company" : "您的公司"} className="bg-background/50 border-white/10 focus:border-primary/50" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground">{isEn ? "Email" : "電子郵件"}</label>
                    <Input id="email" name="email" type="email" required placeholder="name@example.com" className="bg-background/50 border-white/10 focus:border-primary/50" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-muted-foreground">{isEn ? "Phone" : "聯絡電話"}</label>
                    <Input id="phone" name="phone" type="tel" placeholder="+886 912 345 678" className="bg-background/50 border-white/10 focus:border-primary/50" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">{isEn ? "Subject" : "主旨"}</label>
                  <Input id="subject" name="subject" required placeholder={isEn ? "Service or product you're interested in" : "您感興趣的服務或產品"} className="bg-background/50 border-white/10 focus:border-primary/50" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-muted-foreground">{isEn ? "Message" : "訊息內容"}</label>
                  <Textarea id="message" name="message" required placeholder={isEn ? "Please describe your requirements in detail..." : "請詳細描述您的需求..."} className="min-h-[150px] bg-background/50 border-white/10 focus:border-primary/50 resize-none" />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">{isEn ? "Sending..." : "發送中..."}</span>
                  ) : (
                    <span className="flex items-center gap-2">{isEn ? "Send Message" : "發送訊息"} <Send className="w-4 h-4" /></span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-20 border-t border-white/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl mb-6">{isEn ? "Watch Our Technical Sharing" : "觀看我們的技術分享"}</h2>
            <p className="text-muted-foreground text-lg mb-8">{isEn ? "Learn more about Therlect's thermal management solutions and technical innovations" : "了解更多關於 Therlect 汎海科技的熱管理解決方案和技術創新"}</p>
            <a 
              href="https://www.youtube.com/watch?v=aigp6jhZZnQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors duration-300"
            >
              <Youtube className="w-6 h-6" />
              {isEn ? "Watch YouTube Channel" : "觀看 YouTube 頻道"}
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-card/30 border-t border-white/5">
        <div className="container">
          <h2 className="font-display font-bold text-3xl mb-12 text-center">{isEn ? "Office Locations" : "辦公室位置"}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">{isEn ? "New Taipei Office" : "台北辦公室"}</h3>
              <div className="h-[300px] w-full relative grayscale hover:grayscale-0 transition-all duration-700 rounded-xl overflow-hidden border border-white/5">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.467687926646!2d121.46966631500666!3d25.05212898396384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a870a133708f%3A0x6375628004216852!2zMjQx5paw5YyX5biC5LiJ6YeN5Y2A5YWJ5b6p6Lev5LiA5q61NjHlt7cyN-iZnw!5e0!3m2!1szh-TW!2stw!4v1645512345678!5m2!1szh-TW!2stw" 
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">{isEn ? "Tainan Office" : "台南辦公室"}</h3>
              <div className="h-[300px] w-full relative grayscale hover:grayscale-0 transition-all duration-700 rounded-xl overflow-hidden border border-white/5">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.8742842843897!2d120.29333!3d22.88333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e8c5c5c5c5c5d%3A0x5c5c5c5c5c5c5c5c!2z5Y2X5riv5biC5Y2X5riv5biC5Y2X5riv5biC5Y2X5riv5biC5Y2X5riv5biC5Y2X5riv5biC!5e0!3m2!1szh-TW!2stw!4v1645512345678!5m2!1szh-TW!2stw" 
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
