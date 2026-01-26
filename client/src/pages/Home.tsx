import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Thermometer, Zap, Activity, Layers, Globe, Calendar, MessageSquare } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", bookingData);
    setIsBookingOpen(false);
    setBookingData({ name: "", email: "", phone: "", date: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/background_1.jpg" 
            alt="Therlect Technology Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in slide-in-from-left-10 duration-1000 fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono text-primary tracking-wider">THERMAL MANAGEMENT EXPERTS</span>
            </div>
            
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-tight">
              釋放熱能的 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
                無限潛力
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed border-l-2 border-primary/30 pl-6">
              Therlect 汎海科技，憑藉超過十五年的熱管理專業經驗，致力於為全球客戶提供從理論分析到市場應用的全方位解決方案。
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/solutions">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 group">
                  探索解決方案
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/30 hover:bg-primary/10 hover:text-primary rounded-sm px-8"
                onClick={() => setIsBookingOpen(true)}
              >
                <Calendar className="mr-2 w-4 h-4" />
                預約洽談
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block animate-in zoom-in-95 duration-1000 delay-300 fade-in">
            <div className="relative w-full aspect-square max-w-[600px] mx-auto">
              {/* Abstract 3D Element or Product Visualization */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-full blur-[100px] animate-pulse-slow" />
              <img 
                src="/assets/thermal_analysis.jpg" 
                alt="Thermal Analysis Visualization" 
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_50px_rgba(0,240,255,0.3)] rounded-2xl border border-white/10"
              />
              
              {/* Floating Data Cards */}
              <div className="absolute -top-10 -right-10 bg-card/80 backdrop-blur-md border border-white/10 p-4 rounded-lg shadow-2xl animate-float delay-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/20 rounded-md">
                    <Activity className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-mono">EFFICIENCY</div>
                    <div className="text-lg font-bold font-display">98.5%</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-5 -left-5 bg-card/80 backdrop-blur-md border border-white/10 p-4 rounded-lg shadow-2xl animate-float delay-500">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-500/20 rounded-md">
                    <Thermometer className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-mono">TEMP CONTROL</div>
                    <div className="text-lg font-bold font-display">PRECISE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
          <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* Core Technologies Section */}
      <section className="py-24 relative bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-4xl md:text-5xl">核心技術領域</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
            <p className="text-muted-foreground text-lg">
              我們結合尖端熱力學工程與創新的遠紅外線技術，為產業帶來革命性的改變。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tech Card 1 */}
            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-card/50 hover:bg-card/80 transition-all duration-500 hover:border-primary/50">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/assets/thermal_module.jpg" 
                  alt="Thermodynamic Engineering" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
              <div className="p-8 relative z-10 -mt-20">
                <div className="w-12 h-12 bg-background border border-white/10 rounded-lg flex items-center justify-center mb-6 shadow-lg group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-3 group-hover:text-primary transition-colors">熱力學工程</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  專注於熱能的產生、轉換、傳遞與利用。透過先進的 CFD 模擬分析與實務經驗，提供最優化的散熱設計與熱管理方案。
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" /> 熱流體動力學分析 (CFD)
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" /> 散熱模組設計與優化
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" /> 材料熱特性分析
                  </li>
                </ul>
                <Button variant="link" className="p-0 text-primary hover:text-primary/80 group-hover:translate-x-2 transition-transform">
                  了解更多 <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Tech Card 2 */}
            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-card/50 hover:bg-card/80 transition-all duration-500 hover:border-purple-500/50">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/assets/far_infrared_tech.jpg" 
                  alt="Far-Infrared Technology" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
              <div className="p-8 relative z-10 -mt-20">
                <div className="w-12 h-12 bg-background border border-white/10 rounded-lg flex items-center justify-center mb-6 shadow-lg group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all">
                  <Zap className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-3 group-hover:text-purple-400 transition-colors">遠紅外線技術</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  將具有獨特生物效應的光波應用於多元產業。利用非接觸式熱傳遞與分子共振，實現高效加熱、乾燥與生物活化。
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> 高效節能加熱技術
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> 均勻穿透式加熱
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> 健康照護應用
                  </li>
                </ul>
                <Button variant="link" className="p-0 text-purple-400 hover:text-purple-300 group-hover:translate-x-2 transition-transform">
                  了解更多 <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Process Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/30" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2 space-y-8">
              <h2 className="font-display font-bold text-4xl md:text-5xl">全方位解決方案流程</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                從概念設計到大規模量產，我們提供一站式服務，確保您的產品在最短時間內以最高品質上市。
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "概念與設計", desc: "初步熱評估與方案規劃", icon: Layers },
                  { title: "模擬與分析", desc: "Ansys / Flotherm 專業熱模擬", icon: Activity },
                  { title: "原型製作", desc: "快速打樣與實機測試驗證", icon: Cpu },
                  { title: "生產與製造", desc: "高品質、高效率的量產服務", icon: Globe },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                      <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="/assets/innovation_concept.jpg" 
                  alt="Innovation Process" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-background/80 backdrop-blur-md p-6 rounded-xl border border-white/10">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm font-mono text-muted-foreground">PROJECT SUCCESS RATE</span>
                      <span className="text-3xl font-display font-bold text-primary">99.9%</span>
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 w-[99.9%]" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-[50px] -z-10" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-[50px] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-background border-t border-white/5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl mb-4">值得信賴的合作夥伴</h2>
            <p className="text-muted-foreground">我們有幸與眾多國際知名企業合作，共同創造價值</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-70">
            {/* Client Logos Placeholders - Using text for now as we don't have all logos */}
            {["FOXCONN", "AUO", "HP", "Cruise", "MYTEK", "FIH Mobile", "Arcadyan", "KENMEC", "Auden", "NTU", "Anli", "華宮"].map((client, i) => (
              <div key={i} className="h-16 flex items-center justify-center border border-white/5 rounded-lg bg-white/5 hover:bg-white/10 hover:opacity-100 transition-all cursor-default">
                <span className="font-display font-bold text-lg text-muted-foreground">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/assets/partnership_concept.jpg" 
            alt="Partnership" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">準備好優化您的產品熱管理了嗎？</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              無論您面臨什麼樣的散熱挑戰，Therlect 的專家團隊都隨時準備為您提供協助。讓我們一起打造更高效、更可靠的產品。
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 h-14 text-lg"
                onClick={() => setIsBookingOpen(true)}
              >
                <Calendar className="mr-2 w-4 h-4" />
                立即預約洽談
              </Button>
              <Link href="/about">
                <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/10 text-foreground rounded-sm px-8 h-14 text-lg">
                  了解更多關於我們
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Dialog */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>預約專家洽談</DialogTitle>
            <DialogDescription>
              請填寫您的基本資訊，我們的專家團隊將盡快與您聯絡。
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleBookingSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium">姓名 *</label>
              <Input
                value={bookingData.name}
                onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                placeholder="請輸入您的姓名"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium">電子郵件 *</label>
              <Input
                type="email"
                value={bookingData.email}
                onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium">電話 *</label>
              <Input
                value={bookingData.phone}
                onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                placeholder="+886-2-XXXX-XXXX"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium">預約日期 *</label>
              <Input
                type="date"
                value={bookingData.date}
                onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium">備註</label>
              <Textarea
                value={bookingData.message}
                onChange={(e) => setBookingData({ ...bookingData, message: e.target.value })}
                placeholder="請簡述您的需求..."
                rows={3}
              />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              提交預約
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* AI Chat Button - Floating */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-110 z-40"
        title="AI 助手"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* AI Chat Box */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-8 w-96 max-h-[600px] bg-card border border-white/10 rounded-xl shadow-2xl flex flex-col z-40">
          <div className="bg-primary text-white p-4 rounded-t-xl flex items-center justify-between">
            <h3 className="font-bold">Therlect AI 助手</h3>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-white/70 hover:text-white"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="bg-primary/10 rounded-lg p-3 max-w-xs">
              <p className="text-sm">
                您好！我是 Therlect 的 AI 助手。我可以幫助您了解我們的熱管理解決方案、遠紅外線技術，以及回答任何技術問題。有什麼我可以幫助您的嗎？
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 p-4 flex gap-2">
            <Input
              placeholder="輸入您的問題..."
              className="flex-1"
            />
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              發送
            </Button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
