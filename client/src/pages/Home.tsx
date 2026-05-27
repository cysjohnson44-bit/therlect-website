import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Thermometer, Zap, Activity, Layers, Globe } from "lucide-react";
import { Link } from "wouter";

/**
 * All content in this page are only for example, replace with your own feature implementation
 * When building pages, remember your instructions in Frontend Workflow, Frontend Best Practices, Design Guide and Common Pitfalls
 */
export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-auto flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/background_1.jpg" 
            alt="Therlect Technology Background" 
            className="w-full h-full object-cover opacity-40"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        </div>

        {/* Main Hero Content */}
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
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
              Therlect 汎海科技，憑藉超過7年的熱管理專業經驗，致力於為全球客戶提供從理論分析到市場應用的全方位解決方案。
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/solutions">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 group">
                  探索解決方案
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 hover:text-primary rounded-sm px-8">
                  聯絡我們
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative hidden lg:block animate-in zoom-in-95 duration-1000 delay-300 fade-in">
            <div className="relative w-full aspect-square max-w-[600px] mx-auto">
              {/* Abstract 3D Element or Product Visualization */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-full blur-[100px] animate-pulse-slow" />
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/SkBOsMXCQUfIHLHm.png" 
                alt="Thermal Analysis Visualization" 
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_50px_rgba(0,240,255,0.3)] rounded-2xl border border-white/10"
                loading="lazy"
                decoding="async"
                style={{ opacity: 0.7 }}
              />
              
              {/* Floating Data Cards */}
              <div className="absolute -bottom-8 -left-8 bg-card/80 backdrop-blur-md border border-primary/30 rounded-lg p-4 shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <Thermometer className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">溫度控制</p>
                    <p className="text-sm font-semibold">±0.5°C</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-8 -right-8 bg-card/80 backdrop-blur-md border border-primary/30 rounded-lg p-4 shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">效能提升</p>
                    <p className="text-sm font-semibold">45%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section - DigitalOcean Style */}
        <div className="container relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group relative bg-white/5 backdrop-blur-sm border border-primary/30 rounded-lg p-8 hover:border-primary/60 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
              <div className="relative text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">7+</p>
                <p className="text-sm text-muted-foreground">年專業經驗</p>
              </div>
            </div>
            <div className="group relative bg-white/5 backdrop-blur-sm border border-primary/30 rounded-lg p-8 hover:border-primary/60 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
              <div className="relative text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">100+</p>
                <p className="text-sm text-muted-foreground">全球客戶</p>
              </div>
            </div>
            <div className="group relative bg-white/5 backdrop-blur-sm border border-primary/30 rounded-lg p-8 hover:border-primary/60 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
              <div className="relative text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</p>
                <p className="text-sm text-muted-foreground">成功項目</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background/90">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl mb-4 text-white">我們的解決方案</h2>
            <p className="text-muted-foreground text-lg">從被動散熱到主動冷卻，涵蓋全方位的熱管理需求</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "被動散熱",
                description: "高效能散熱片和導熱材料，無需額外電力消耗"
              },
              {
                icon: <Activity className="w-8 h-8" />,
                title: "主動冷卻",
                description: "風扇和液冷系統，為高功率設備提供強大冷卻能力"
              },
              {
                icon: <Layers className="w-8 h-8" />,
                title: "熱介面材料",
                description: "導熱膏、墊片和相變材料，優化熱傳導效率"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "系統集成",
                description: "完整的熱管理系統設計和集成解決方案"
              },
              {
                icon: <Thermometer className="w-8 h-8" />,
                title: "溫度監測",
                description: "實時溫度監測和智能控制系統"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "能效優化",
                description: "降低能耗，提高系統效能和可靠性"
              }
            ].map((solution, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-primary/30 rounded-lg p-8 hover:border-primary/60 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 overflow-hidden"
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
                
                {/* Top Border Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-white">{solution.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="w-full" style={{ backgroundColor: '#0f1729', padding: 0, margin: 0 }}>
        <div className="container py-12" style={{ backgroundColor: '#0f1729' }}>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-white text-center">值得信賴的合作夥伴</h2>
          <p className="text-gray-300 text-lg text-center">與全球領先企業合作，提供頂級熱管理解決方案</p>
        </div>
        
        <div style={{ width: '100%', backgroundColor: '#0f1729', padding: '40px 0' }}>
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/XYkTAEAdpiBSyhOK.png"
            alt="Trusted Partners Logos"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              maxWidth: '100%',
              objectFit: 'contain',
            }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background/90">
        <div className="absolute inset-0">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/eSjbAICDHCXTVOZs.jpg" 
            alt="Partnership" 
            className="w-full h-full object-cover opacity-20"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono text-primary tracking-wider">準備開始</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-white">
              準備好解決您的熱管理挑戰？
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              我們的專家團隊隨時準備為您的項目提供定制化的解決方案。無論您的需求有多複雜，我們都能找到最適合的方案。
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 group">
                開始您的項目
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
