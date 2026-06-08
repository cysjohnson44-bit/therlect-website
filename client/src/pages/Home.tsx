import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Thermometer, Zap, Activity, Layers, Globe } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";

/**
 * All content in this page are only for example, replace with your own feature implementation
 * When building pages, remember your instructions in Frontend Workflow, Frontend Best Practices, Design Guide and Common Pitfalls
 */
export default function Home() {
  const { t } = useLanguage();
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // 預加載關鍵圖片
    const criticalImages = [
      '/manus-storage/rocket_launch_hero_f51d3cd5.png',
      '/manus-storage/wearable-cooling_46f219b9.jpg',
    ];
    
    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
    
    // 標記圖片已加載
    setImagesLoaded(true);
  }, []);

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
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        </div>

        {/* Main Hero Content */}
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-8" style={{ animation: 'slide-in-from-left 1s ease-out both' }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono text-primary tracking-wider">{t('hero.badge')}</span>
            </div>
            
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-tight">
              {t('hero.title')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
                {t('hero.titleHighlight')}
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed border-l-2 border-primary/30 pl-6">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/solutions">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 group">
                  {t('hero.exploreSolutions')}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 hover:text-primary rounded-sm px-8">
                  {t('hero.contactUs')}
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative hidden lg:block" style={{ animation: 'zoom-in-95 1s ease-out 0.3s both' }}>
            <div className="relative w-full max-w-[640px] mx-auto">
              {/* Rocket Launch Hero Image */}
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/eSiuoTiHRLUScVgB.webp" 
                alt="Thermal Management Analysis" 
                className="relative z-10 w-full h-auto object-contain drop-shadow-[0_0_50px_rgba(255,100,0,0.3)] rounded-2xl border border-primary/30"
                loading="lazy"
                decoding="async"
                style={{ contentVisibility: 'auto', willChange: 'opacity' }}
              />
              
              {/* Floating Data Cards */}
              <div className="absolute -bottom-8 -left-8 bg-card/80 backdrop-blur-md border border-primary/30 rounded-lg p-4 shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <Thermometer className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">{t('stats.temperatureControl')}</p>
                    <p className="text-sm font-semibold">{t('stats.temperatureControlValue')}</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-8 -right-8 bg-card/80 backdrop-blur-md border border-primary/30 rounded-lg p-4 shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">{t('stats.performanceImprovement')}</p>
                    <p className="text-sm font-semibold">{t('stats.performanceImprovementValue')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section - DigitalOcean Style */}
        <div className="container relative z-10 w-full mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group relative bg-white/5 backdrop-blur-sm border border-primary/30 rounded-lg p-12 hover:border-primary/60 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
              <div className="relative text-center">
                <p className="text-5xl md:text-6xl font-bold text-primary mb-4">{t('stats.yearsOfExperienceValue')}</p>
                <p className="text-base text-muted-foreground">{t('stats.yearsOfExperience')}</p>
              </div>
            </div>
            <div className="group relative bg-white/5 backdrop-blur-sm border border-primary/30 rounded-lg p-12 hover:border-primary/60 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
              <div className="relative text-center">
                <p className="text-5xl md:text-6xl font-bold text-primary mb-4">{t('stats.globalClientsValue')}</p>
                <p className="text-base text-muted-foreground">{t('stats.globalClients')}</p>
              </div>
            </div>
            <div className="group relative bg-white/5 backdrop-blur-sm border border-primary/30 rounded-lg p-12 hover:border-primary/60 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
              <div className="relative text-center">
                <p className="text-5xl md:text-6xl font-bold text-primary mb-4">{t('stats.successfulProjectsValue')}</p>
                <p className="text-base text-muted-foreground">{t('stats.successfulProjects')}</p>
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
                icon: <Cpu className="w-12 h-12" />,
                title: "被動散熱",
                description: "高效能散熱片和導熱材料，無需額外電力消耗"
              },
              {
                icon: <Activity className="w-12 h-12" />,
                title: "主動冷卻",
                description: "風扇和液冷系統，為高功率設備提供強大冷卻能力"
              },
              {
                icon: <Layers className="w-12 h-12" />,
                title: "熱介面材料",
                description: "導熱膏、墊片和相變材料，優化熱傳導效率"
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: "系統集成",
                description: "完整的熱管理系統設計和集成解決方案"
              },
              {
                icon: <Thermometer className="w-12 h-12" />,
                title: "溫度監測",
                description: "實時溫度監測和智能控制系統"
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "能效優化",
                description: "降低能耗，提高系統效能和可靠性"
              }
            ].map((solution, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-primary/30 rounded-lg p-10 hover:border-primary/60 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 overflow-hidden"
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
                
                {/* Top Border Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative">
                  <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <h3 className="font-semibold text-lg md:text-xl mb-4 text-white">{solution.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed line-clamp-3">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Thermal Solutions Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background/90 via-background to-background/95">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-white">全方位散熱解決方案</h2>
            <p className="text-muted-foreground text-lg">從消費電子到工業應用，為各行業提供專業的熱管理方案</p>
          </div>

          <div className="space-y-16" style={{ contentVisibility: 'auto' }}>
            {/* Wearable Cooling Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="font-display font-bold text-3xl mb-4 text-white">穿戴式產品散熱</h3>
                <p className="text-muted-foreground text-base mb-6 leading-relaxed">為智慧手錶、AR/VR眼鏡和健康監測設備提供輕量化、高效能的散熱解決方案。我們的設計確保設備在長時間運行中保持最佳溫度，同時不影響產品的輕薄設計。</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">智慧手錶散熱模組 - 超薄設計，溫度控制精準</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">AR/VR眼鏡冷卻系統 - 長時間佩戴舒適體驗</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">健康監測設備 - 精密溫度控制，數據準確</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 group">
                    了解更多
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="/manus-storage/wearable-cooling_46f219b9.jpg"
                  alt="穿戴式產品散熱解決方案"
                  className="w-full h-auto rounded-lg shadow-lg border border-primary/30"
                  loading="lazy"
                  decoding="async"
                  style={{ contentVisibility: 'auto' }}
                />
              </div>
            </div>

            {/* Industrial Cooling Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="/manus-storage/industrial-cooling_e89db104.webp"
                  alt="工業用散熱解決方案"
                  className="w-full h-auto rounded-lg shadow-lg border border-primary/30"
                  loading="lazy"
                  decoding="async"
                  style={{ contentVisibility: 'auto' }}
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-3xl mb-4 text-white">工業應用散熱</h3>
                <p className="text-muted-foreground text-base mb-6 leading-relaxed">為工業製造、測試設備和精密儀器提供可靠的散熱解決方案。我們的產品經過嚴格測試，能在惡劣環境中保持穩定性能。</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">CNC機械散熱 - 高精度溫度控制</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">測試設備冷卻 - 24/7連續運行支持</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">精密儀器散熱 - 環境適應性強</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 group">
                    了解更多
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Automotive Cooling Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="font-display font-bold text-3xl mb-4 text-white">車用散熱系統</h3>
                <p className="text-muted-foreground text-base mb-6 leading-relaxed">為電動車電池、動力系統和車載電子提供高可靠性散熱方案。我們的設計符合汽車工業標準，確保在各種駕駛條件下的最佳性能。</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">電池管理系統 - 安全可靠的溫度控制</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">動力電子散熱 - 高效能功率轉換</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">車載電子冷卻 - 極端環境適應</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 group">
                    了解更多
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="/manus-storage/automotive-cooling_d99afd10.webp"
                  alt="車用散熱解決方案"
                  className="w-full h-auto rounded-lg shadow-lg border border-primary/30"
                  loading="lazy"
                  decoding="async"
                  style={{ contentVisibility: 'auto' }}
                />
              </div>
            </div>

            {/* Server Cooling Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="/manus-storage/server-cooling_74a01cac.webp"
                  alt="服務器散熱解決方案"
                  className="w-full h-auto rounded-lg shadow-lg border border-primary/30"
                  loading="lazy"
                  decoding="async"
                  style={{ contentVisibility: 'auto' }}
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-3xl mb-4 text-white">數據中心散熱</h3>
                <p className="text-muted-foreground text-base mb-6 leading-relaxed">為伺服器、交換機和高功率電源提供企業級散熱解決方案。我們的系統設計能有效降低數據中心能耗，提高整體效率。</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">伺服器CPU散熱 - 低噪音高效能</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">機櫃熱管理 - 整體溫度均衡</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">電源模組冷卻 - 可靠性和效率並行</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 group">
                    了解更多
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Network Communication Cooling Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="font-display font-bold text-3xl mb-4 text-white">網路通訊散熱</h3>
                <p className="text-muted-foreground text-base mb-6 leading-relaxed">為5G基地台、網路交換機和通訊設備提供專業散熱方案。我們的設計確保在高溫環境中保持穩定的網路連接。</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">5G基地台散熱 - 高功率密度冷卻</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">交換機散熱模組 - 可靠連接保障</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">通訊電源散熱 - 長期穩定運行</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 group">
                    了解更多
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="/manus-storage/network-cooling_584b7519.jpg"
                  alt="網路通訊散熱解決方案"
                  className="w-full h-auto rounded-lg shadow-lg border border-primary/30"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#0d1117' }}>
        <div className="container py-12 mb-0">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-white text-center">值得信賴的合作夥伴</h2>
          <p className="text-gray-300 text-lg text-center">與全球領先企業合作，提供頂級熱管理解決方案</p>
        </div>
        
        {/* Full-width partner logos background with hover zoom effect */}
        <div className="w-full overflow-hidden" style={{ backgroundColor: '#0d1117', minHeight: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
          <img
            src="/manus-storage/partner-logos-combined_f0d673fd.jpg"
            alt="Trusted Partners Logos"
            className="transition-transform duration-500 ease-out hover:scale-105"
            style={{
              imageRendering: 'crisp-edges',
              display: 'block',
              width: '56%',
              height: 'auto',
              maxWidth: '100%',
              objectFit: 'contain',
            }}
            loading="lazy"
            decoding="async"
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
