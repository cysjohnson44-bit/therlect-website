import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          json: { name, email, phone, company, subject, message },
        }),
        credentials: 'include',
      });
      
      if (response.ok) {
        setIsSubmitting(false);
        toast.success("訊息已發送！");
        (e.target as HTMLFormElement).reset();
      } else {
        setIsSubmitting(false);
        toast.error("發送失敗，請稍後重試。");
      }
    } catch (error) {
      setIsSubmitting(false);
      toast.error("發送失敗，請稍後重試。");
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
            聯絡我們
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-5 fade-in duration-700 delay-100">
            無論是專案諮詢、技術支援還是合作提案，我們都期待聽到您的聲音。
          </p>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display font-bold text-3xl mb-6">聯絡資訊</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  您可以透過以下方式聯繫我們，或是填寫右側表單，我們的團隊將在 24 小時內回覆您。
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-card/30 border border-white/5 hover:bg-card/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">台北辦公室</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      241557 新北市三重區<br />
                      光復路一段61巷27號9樓之3
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-card/30 border border-white/5 hover:bg-card/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">台南辦公室</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      台南市新市區<br />
                      中華路49號
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-card/30 border border-white/5 hover:bg-card/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">電話</h3>
                    <p className="text-muted-foreground font-mono text-lg">
                      +886-2-2999-5596
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-card/30 border border-white/5 hover:bg-card/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">電子郵件</h3>
                    <a href="mailto:jimmy.chen@therlect.com" className="text-muted-foreground hover:text-primary transition-colors font-mono text-lg">
                      jimmy.chen@therlect.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-card/30 border border-white/5 hover:bg-card/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">營業時間</h3>
                    <p className="text-muted-foreground">
                      週一至週五 09:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[50px] -z-10" />
              
              <h2 className="font-display font-bold text-3xl mb-8">發送訊息</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-muted-foreground">姓名</label>
                    <Input id="name" name="name" required placeholder="您的姓名" className="bg-background/50 border-white/10 focus:border-primary/50" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-muted-foreground">公司名稱</label>
                    <Input id="company" name="company" placeholder="您的公司" className="bg-background/50 border-white/10 focus:border-primary/50" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground">電子郵件</label>
                    <Input id="email" name="email" type="email" required placeholder="name@example.com" className="bg-background/50 border-white/10 focus:border-primary/50" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-muted-foreground">聯絡電話</label>
                    <Input id="phone" name="phone" type="tel" placeholder="+886 912 345 678" className="bg-background/50 border-white/10 focus:border-primary/50" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">主旨</label>
                  <Input id="subject" name="subject" required placeholder="您感興趣的服務或產品" className="bg-background/50 border-white/10 focus:border-primary/50" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-muted-foreground">訊息內容</label>
                  <Textarea id="message" name="message" required placeholder="請詳細描述您的需求..." className="min-h-[150px] bg-background/50 border-white/10 focus:border-primary/50 resize-none" />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">發送中...</span>
                  ) : (
                    <span className="flex items-center gap-2">發送訊息 <Send className="w-4 h-4" /></span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-card/30 border-t border-white/5">
        <div className="container">
          <h2 className="font-display font-bold text-3xl mb-12 text-center">辦公室位置</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Taipei Office Map */}
            <div>
              <h3 className="font-bold text-xl mb-4">台北辦公室</h3>
              <div className="h-[300px] w-full relative grayscale hover:grayscale-0 transition-all duration-700 rounded-xl overflow-hidden border border-white/5">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.467687926646!2d121.46966631500666!3d25.05212898396384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a870a133708f%3A0x6375628004216852!2zMjQx5paw5YyX5biC5LiJ6YeN5Y2A5YWJ5b6p6Lev5LiA5q61NjHlt7cyN-iZnw!5e0!3m2!1szh-TW!2stw!4v1645512345678!5m2!1szh-TW!2stw" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                />
              </div>
            </div>

            {/* Tainan Office Map */}
            <div>
              <h3 className="font-bold text-xl mb-4">台南辦公室</h3>
              <div className="h-[300px] w-full relative grayscale hover:grayscale-0 transition-all duration-700 rounded-xl overflow-hidden border border-white/5">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.8742842843897!2d120.29333!3d22.88333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e8c5c5c5c5c5d%3A0x5c5c5c5c5c5c5c5c!2z5Y2X5riv5biC5Y2X5riv5biC5Y2X5riv5biC5Y2X5riv5biC5Y2X5riv5biC5Y2X5riv5biC!5e0!3m2!1szh-TW!2stw!4v1645512345678!5m2!1szh-TW!2stw" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
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
