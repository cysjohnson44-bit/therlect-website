import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIPromotionWidget from "@/components/AIPromotionWidget";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Thermometer, Zap, Activity, Layers, Globe, Calendar, MessageSquare, TrendingUp, Zap as Lightning, Target, Award } from "lucide-react";
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

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/trpc/booking.create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          json: bookingData,
        }),
        credentials: 'include',
      });
      
      if (response.ok) {
        setIsBookingOpen(false);
        setBookingData({ name: "", email: "", phone: "", date: "", message: "" });
        // Show success message using toast if available
        console.log("Booking submitted successfully");
      } else {
        console.error("Booking submission failed");
      }
    } catch (error) {
      console.error('Booking submission error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      <AIPromotionWidget />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/BhxjNZzFIuldgDBi.jpg" 
            alt="Thermal Energy Art Visualization" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/80" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
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
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/NGmrNoMgksVRLaeP.jpg" 
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
              我們結合尖端熱力學工程與創新的遠紅外線技術，為產業帶來創新性的進步。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tech Card 1 */}
            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-card/50 hover:bg-card/80 transition-all duration-500 hover:border-primary/50">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/uXPLMlZtuJXslibQ.jpg" 
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
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/mTLZRcKWVrdWClOj.jpg" 
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
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/OMNIwysBbeoDdfrz.jpg" 
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

      {/* Core Services Section - Comprehensive Thermal Solutions */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        </div>

        <div className="container relative z-10">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-sm">
              <Cpu className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-primary tracking-wider">核心服務內容</span>
            </div>
            
            <h2 className="font-display font-bold text-5xl md:text-6xl leading-tight">
              從虛擬到驗證<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">設計最佳化</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              全方位的熱流體動力學解決方案。Therlect 汎海科技運用先進的 CFD 模擬技術、精密的實驗驗證和數據驅動的優化方法，為您的產品提供從概念到量產的完整熱管理解決方案。
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-20">
            {/* Service 1: Virtual Design */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <h3 className="font-display font-bold text-3xl">虛擬設計與 CFD 分析</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  利用業界領先的 ANSYS Fluent 和 FloTherm 軟體，我們進行精密的計算流體動力學（CFD）模擬。通過三維熱流分析，精確預測產品內部的溫度分佈、熱流路徑和冷卻效率。我們的模擬精度達到 ±2°C，確保設計方案的可靠性。
                </p>
                <ul className="space-y-3">
                  {[
                    "3D 熱流場模擬與可視化",
                    "多物理場耦合分析",
                    "材料熱特性評估",
                    "設計方案對比優化"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-cyan-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/XbNpKtOMlwAgKzVD.png" 
                    alt="Virtual Thermal Design" 
                    className="w-full h-auto hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Service 2: Verification Testing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/gpzbycWUjnkyoXgv.png" 
                    alt="Thermal Verification Lab" 
                    className="w-full h-auto hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="font-display font-bold text-3xl">實驗驗證與測試</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  我們擁有專業的熱驗證實驗室，配備最先進的測量設備。採用紅外熱成像、熱電偶陣列和實時數據採集系統，對設計方案進行全面的性能驗證。每個測試都遵循國際標準（IEC、ASTM），確保結果的準確性和可重複性。
                </p>
                <ul className="space-y-3">
                  {[
                    "紅外熱成像測量",
                    "實時溫度監測系統",
                    "環境模擬測試",
                    "性能數據驗證"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-purple-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service 3: Optimization Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <h3 className="font-display font-bold text-3xl">優化分析與改進</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  基於模擬和實驗結果，我們運用數據驅動的優化算法進行迭代改進。通過參數化設計、靈敏度分析和多目標優化，在保證散熱性能的同時，實現成本最小化和結構輕量化。平均散熱效率提升 45%，功耗降低 30%。
                </p>
                <ul className="space-y-3">
                  {[
                    "參數化設計優化",
                    "多目標優化算法",
                    "成本與性能平衡",
                    "可製造性評估"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-cyan-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/WxmbAGfNwNtyrkJt.png" 
                    alt="Optimization Analysis" 
                    className="w-full h-auto hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Service 4: Solution Delivery */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/zAEqrBajtpByqkxo.png" 
                    alt="Solution Delivery" 
                    className="w-full h-auto hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="font-display font-bold text-3xl">完整方案交付與實施</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  從 CAD 設計文件、製造規格、工藝指導到大規模量產支持，我們提供完整的交付方案。與製造合作夥伴緊密協作，確保設計意圖在生產中得到完美實現。提供技術培訓、品質檢測和持續支持，確保產品在市場中的長期表現。
                </p>
                <ul className="space-y-3">
                  {[
                    "完整的 CAD 設計交付",
                    "製造工藝指導",
                    "品質檢測方案",
                    "量產技術支持"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-purple-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-sm px-12 py-6 text-lg font-semibold group"
              onClick={() => setIsBookingOpen(true)}
            >
              開始您的熱管理優化之旅
              <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Let Data Speak Section - HIGH IMPACT */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        </div>

        <div className="container relative z-10">
          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-sm">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-primary tracking-wider">讓數據說話</span>
            </div>
            
            <h2 className="font-display font-bold text-5xl md:text-6xl leading-tight">
              變得更<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">精致、更有力</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              想了解您的新一代極限產品在哪裡？我們準備好用最先進的分析工具和豐富的工程經驗，為您的產品設計提供全面支持。Therlect 汎海科技以數據驅動的方式，為每個項目提供精準的熱管理解決方案，確保您的產品在市場中獲得領先地位。
            </p>
          </div>

          {/* Data Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-card/50 hover:bg-card/80 transition-all duration-500 p-8 space-y-4">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display font-bold text-2xl text-primary mb-2">熱分析精準度</h3>
                  <p className="text-muted-foreground">採用業界領先的 CFD 模擬技術</p>
                </div>
                <TrendingUp className="w-8 h-8 text-primary opacity-50" />
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-display font-bold">±2°C</div>
                <p className="text-sm text-muted-foreground">誤差控制精度，已被全球 500+ 企業驗證</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-card/50 hover:bg-card/80 transition-all duration-500 p-8 space-y-4">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display font-bold text-2xl text-purple-400 mb-2">性能優化成果</h3>
                  <p className="text-muted-foreground">平均提升散熱效率</p>
                </div>
                <Award className="w-8 h-8 text-purple-400 opacity-50" />
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-display font-bold">45%</div>
                <p className="text-sm text-muted-foreground">降低功耗 30%，延長產品壽命 60%</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-card/50 hover:bg-card/80 transition-all duration-500 p-8 space-y-4">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display font-bold text-2xl text-primary mb-2">工程卓越表現</h3>
                  <p className="text-muted-foreground">15 年技術積累</p>
                </div>
                <Target className="w-8 h-8 text-primary opacity-50" />
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-display font-bold">1000+</div>
                <p className="text-sm text-muted-foreground">成功案例，業界最高設計成功率</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-card/50 hover:bg-card/80 transition-all duration-500 p-8 space-y-4">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display font-bold text-2xl text-purple-400 mb-2">創新洞見分析</h3>
                  <p className="text-muted-foreground">AI 驅動的數據分析</p>
                </div>
                <Lightning className="w-8 h-8 text-purple-400 opacity-50" />
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-display font-bold">99.8%</div>
                <p className="text-sm text-muted-foreground">客戶滿意度，持續技術優勢</p>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { label: "成功案例", value: "1000+", icon: Award },
              { label: "行業經驗", value: "15年", icon: Target },
              { label: "效率提升", value: "45%", icon: TrendingUp },
              { label: "客戶滿意度", value: "99.8%", icon: Lightning },
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="relative p-8 rounded-xl border border-white/10 bg-card/50 group-hover:bg-card/80 transition-all duration-500 text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-display font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-sm px-12 py-6 text-lg font-semibold group"
              onClick={() => setIsBookingOpen(true)}
            >
              立即預約洽談
              <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-primary/10 border-t border-primary/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl mb-4 text-white">值得信賴的合作夥伴</h2>
            <p className="text-muted-foreground text-lg">我們有幸與眾多國際知名企業合作，共同創造價值</p>
          </div>
          
          {/* Logo Grid with Card Design */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Individual Logo Cards */}
              {[
                { name: 'Partner 1', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/CVOjCtBhTGXTTfes.png' },
                { name: 'Partner 2', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/AUrUuWtYeyjdpCFD.png' },
                { name: 'Partner 3', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/LOwLlxsLpjAsopvz.png' },
                { name: 'Partner 4', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/VhwtkkAdHzPSNYWl.png' },
                { name: 'Partner 5', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/hNEpRkVyISXiBlMx.png' },
                { name: 'Partner 6', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/eqWvXGyHWhRBxnIR.png' },
                { name: 'Partner 7', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/ktxPvytJrEuLmPgc.png' },
                { name: 'Partner 8', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/poyjVSTjORYgreMQ.png' },
                { name: 'Partner 9', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/OsZUFDMMYwbgvLmm.png' },
                { name: 'Partner 10', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/CGhhOueSToMVhBvu.png' },
                { name: 'Partner 11', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/AZTtczjVTEhqwlOw.png' },
                { name: 'Partner 12', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/zhLnIFUZuUEoYbuN.png' },
                { name: 'Partner 13', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/NFiQkiQVWuGUbpxH.png' },
                { name: 'Partner 14', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/uBBflJoqCNBOgxgu.png' },
                { name: 'Partner 15', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/hKtYAjZAwmEYSiFG.png' },
                { name: 'Partner 16', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/uhwRIsYZxetUhybJ.png' },
                { name: 'Partner 17', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/kxocUSxCUDwEVQiu.png' },
                { name: 'Partner 18', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/cMJebMoxhhoGAduk.png' },
                { name: 'Partner 19', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/RUIoVRuKAlAdtxpv.png' },
                { name: 'Partner 20', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/mKVqfiVpPpKOBYqu.png' },
                { name: 'Partner 21', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/oNnMhcJRdrvUczhy.png' },
                { name: 'Partner 22', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/xEjlBUXQJFqQbzTM.png' },
              ].map((logo, index) => (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-sm border border-primary/30 rounded-lg p-6 hover:border-primary/60 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
                  
                  {/* Logo Container */}
                  <div className="relative h-32 flex items-center justify-center overflow-hidden">
                    <img
                      src={logo.url}
                      alt={logo.name}
                      className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md group-hover:drop-shadow-lg"
                    />
                  </div>
                  
                  {/* Top Border Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/eSjbAICDHCXTVOZs.jpg" 
            alt="Partnership" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">準備好優化您的產品熱管理了嗎？</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              無論您面臨什麼樣的散熱挑戰，Therlect 的專家團隊都隨時準備為您提供協助。讓我們一起打造更高效、更可靠的產品。
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 group"
                onClick={() => setIsBookingOpen(true)}
              >
                立即預約洽談
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Link href="/solutions">
                <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 hover:text-primary rounded-sm px-8">
                  了解更多關於我們
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Dialog */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="sm:max-w-[500px] border-white/10 bg-card">
          <DialogHeader>
            <DialogTitle className="text-2xl">預約洽談</DialogTitle>
            <DialogDescription>
              填寫以下信息，我們的專家團隊將盡快與您聯繫
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleBookingSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">姓名</label>
              <Input 
                placeholder="您的姓名" 
                value={bookingData.name}
                onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                className="bg-background/50 border-white/10"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">電子郵件</label>
              <Input 
                type="email"
                placeholder="您的郵件地址" 
                value={bookingData.email}
                onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                className="bg-background/50 border-white/10"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">電話</label>
              <Input 
                placeholder="您的電話號碼" 
                value={bookingData.phone}
                onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                className="bg-background/50 border-white/10"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">預約日期</label>
              <Input 
                type="date"
                value={bookingData.date}
                onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                className="bg-background/50 border-white/10"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">備註</label>
              <Textarea 
                placeholder="請告訴我們您的需求..." 
                value={bookingData.message}
                onChange={(e) => setBookingData({...bookingData, message: e.target.value})}
                className="bg-background/50 border-white/10 min-h-24"
              />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              提交預約
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
