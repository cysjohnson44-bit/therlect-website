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
  const { t, currentLanguage } = useLanguage();
  const isEn = currentLanguage === 'en';
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // 預加載關鍵圖片 (Hero 圖片)
    const criticalImages = [
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/eSiuoTiHRLUScVgB.webp',
    ];
    
    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
    
    setImagesLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-auto flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/40 via-background to-purple-950/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
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
            <h2 className="font-display font-bold text-4xl mb-4 text-white">{isEn ? 'Our Solutions' : '我們的解決方案'}</h2>
            <p className="text-muted-foreground text-lg">{isEn ? 'From passive cooling to active cooling, covering comprehensive thermal management needs' : '從被動散熱到主動冷卻，涵蓋全方位的熱管理需求'}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Cpu className="w-12 h-12" />,
                title: isEn ? 'Passive Cooling' : '被動散熱',
                description: isEn ? 'High-performance heat sinks and thermal materials, no additional power required' : '高效能散熱片和導熱材料，無需額外電力消耗'
              },
              {
                icon: <Activity className="w-12 h-12" />,
                title: isEn ? 'Active Cooling' : '主動冷卻',
                description: isEn ? 'Fan and liquid cooling systems for high-power equipment' : '風扇和液冷系統，為高功率設備提供強大冷卻能力'
              },
              {
                icon: <Layers className="w-12 h-12" />,
                title: isEn ? 'Thermal Interface Materials' : '熱介面材料',
                description: isEn ? 'Thermal paste, pads and phase-change materials for optimized heat transfer' : '導熱膏、墊片和相變材料，優化熱傳導效率'
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: isEn ? 'System Integration' : '系統集成',
                description: isEn ? 'Complete thermal management system design and integration solutions' : '完整的熱管理系統設計和集成解決方案'
              },
              {
                icon: <Thermometer className="w-12 h-12" />,
                title: isEn ? 'Temperature Monitoring' : '溫度監測',
                description: isEn ? 'Real-time temperature monitoring and intelligent control systems' : '實時溫度監測和智能控制系統'
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: isEn ? 'Energy Optimization' : '能效優化',
                description: isEn ? 'Reduce energy consumption, improve system performance and reliability' : '降低能耗，提高系統效能和可靠性'
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
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-white">{isEn ? 'Comprehensive Thermal Solutions' : '全方位散熱解決方案'}</h2>
            <p className="text-muted-foreground text-lg">{isEn ? 'From consumer electronics to industrial applications, providing professional thermal management for all industries' : '從消費電子到工業應用，為各行業提供專業的熱管理方案'}</p>
          </div>

          <div className="space-y-16" style={{ contentVisibility: 'auto' }}>
            {/* Wearable Cooling Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="font-display font-bold text-3xl mb-4 text-white">{isEn ? 'Wearable Device Cooling' : '穿戴式產品散熱'}</h3>
                <p className="text-muted-foreground text-base mb-6 leading-relaxed">{isEn ? 'Providing lightweight, high-performance thermal solutions for smartwatches, AR/VR glasses, and health monitoring devices. Our designs ensure optimal temperature during extended operation without compromising slim form factors.' : '為智慧手錶、AR/VR眼鏡和健康監測設備提供輕量化、高效能的散熱解決方案。我們的設計確保設備在長時間運行中保持最佳溫度，同時不影響產品的輕薄設計。'}</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">{isEn ? 'Smartwatch cooling module - Ultra-thin design, precise temperature control' : '智慧手錶散熱模組 - 超薄設計，溫度控制精準'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">{isEn ? 'AR/VR glasses cooling - Comfortable for extended wear' : 'AR/VR眼鏡冷卻系統 - 長時間佩戴舒適體驗'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">{isEn ? 'Health monitoring devices - Precision temperature control' : '健康監測設備 - 精密溫度控制，數據準確'}</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 group">
                    {isEn ? 'Learn More' : '了解更多'}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/bMYVToChYVwzSXGl.png"
                  alt={isEn ? 'Wearable product thermal solution - AR/VR glasses and thermal management chip' : '穿戴式產品散熱解決方案 - AR/VR眼鏡和熱管理芯片展示'}
                  className="w-full h-auto rounded-lg shadow-lg border border-primary/30"
                  loading="lazy"
                  decoding="async"
                  style={{ contentVisibility: 'auto' }}
                />
              </div>
            </div>

            {/* Robot Thermal Management Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-1 lg:order-1">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/GBUNjgOAzvnhvaSz.webp"
                  alt={isEn ? 'Robot thermal management - Industrial robotic arm with cooling system' : '機器人散熱解決方案 - 工業機械手臂散熱系統'}
                  className="w-full h-auto rounded-lg shadow-lg border border-primary/30"
                  loading="lazy"
                  decoding="async"
                  style={{ contentVisibility: 'auto' }}
                />
              </div>
              <div className="order-2 lg:order-2">
                <h3 className="font-display font-bold text-3xl mb-4 text-white">{isEn ? 'Robot Thermal Management' : '機器人散熱解決方案'}</h3>
                <p className="text-muted-foreground text-base mb-6 leading-relaxed">{isEn ? 'Robots under high-load operation face heat accumulation in motors, drivers, and control boards as the greatest threat to reliability. Therlect provides customized thermal designs for industrial robotic arms and service robots, ensuring long-duration continuous operation without performance degradation.' : '機器人在高負載運作下，馬達、驅動器、控制板的熱累積是可靠度的最大威脅。汎海科技提供工業機械手臂與服務型機器人的客製化散熱設計，確保長時間連續運作不降效。'}</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">{isEn ? 'Joint Motors - Long-duration high-torque heat generation' : '關節馬達 - 長時間高扭矩發熱'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">{isEn ? 'Servo Drivers - High power density, compact space' : '伺服驅動器 - 功率密度高、空間小'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">{isEn ? 'Main Control Board / AI Chips - Dense computation, high peak thermal throughput' : '主控板 / AI 晶片 - 運算密集、峰值熱通量高'}</span>
                  </li>
                </ul>
                <Link href="/solutions">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 group">
                    {isEn ? 'Learn More' : '了解更多'}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Industrial Cooling Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-1 lg:order-2">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/JTgoSLkzOXvCSjxg.webp"
                  alt={isEn ? 'Industrial cooling - Engineer conducting thermal management tests in laboratory' : '工業應用散熱 - 工程師在實驗室進行熱管理測試'}
                  className="w-full h-auto rounded-lg shadow-lg border border-primary/30"
                  loading="lazy"
                  decoding="async"
                  style={{ contentVisibility: 'auto' }}
                />
              </div>
              <div className="order-2 lg:order-1">
                <h3 className="font-display font-bold text-3xl mb-4 text-white">{isEn ? 'Industrial Cooling' : '工業應用散熱'}</h3>
                <p className="text-muted-foreground text-base mb-6 leading-relaxed">{isEn ? 'Providing reliable thermal solutions for industrial manufacturing, testing equipment, and precision instruments. Our products are rigorously tested to maintain stable performance in harsh environments.' : '為工業製造、測試設備和精密儀器提供可靠的散熱解決方案。我們的產品經過嚴格測試，能在惡劣環境中保持穩定性能。'}</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">{isEn ? 'CNC machinery cooling - High-precision temperature control' : 'CNC機械散熱 - 高精度溫度控制'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">{isEn ? 'Testing equipment cooling - 24/7 continuous operation' : '測試設備冷卻 - 24/7連續運行支持'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">{isEn ? 'Precision instrument cooling - Strong environmental adaptability' : '精密儀器散熱 - 環境適應性強'}</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 group">
                    {isEn ? 'Learn More' : '了解更多'}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Automotive & LEO Satellite Cooling Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-1 lg:order-1">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/ivncfsQipagKGpJE.webp"
                  alt={isEn ? 'LEO Satellite ground station thermal management' : '低軌衛星地面站散熱管理'}
                  className="w-full h-auto rounded-lg shadow-lg border border-primary/30"
                  loading="lazy"
                  decoding="async"
                  style={{ contentVisibility: 'auto' }}
                />
              </div>
              <div className="order-2 lg:order-2">
                <h3 className="font-display font-bold text-3xl mb-4 text-white">{isEn ? 'Automotive & Aerospace Cooling' : '汽車與航空散熱'}</h3>
                <p className="text-muted-foreground text-base mb-6 leading-relaxed">{isEn ? 'Providing high-reliability thermal solutions for EV batteries, powertrain systems, and aerospace electronics. Our designs meet automotive and aerospace standards, ensuring optimal performance under extreme conditions.' : '為電動車電池、動力系統和航空電子系統提供高可靠性散熱方案。我們的設計符合汽車工業與航空環境標準，確保在各種極端條件下的最佳性能。'}</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">{isEn ? 'Battery management system - Safe and reliable temperature control' : '電池管理系統 - 安全可靠的溫度控制'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">{isEn ? 'Aircraft electronics thermal control - High-altitude cooling management' : '飛行器電子溫控 - 高空環境散熱管理'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">{isEn ? 'In-vehicle electronics cooling - Extreme environment adaptability' : '車載電子冷卻 - 極端環境適應'}</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 group">
                    {isEn ? 'Learn More' : '了解更多'}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Server Cooling Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-1 lg:order-2">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/aBAtySdSYyTtZVQO.webp"
                  alt={isEn ? 'Data center cooling - Technician installing server cooling system' : '數據中心散熱 - 技術人员安裝伺服務器散熱系統'}
                  className="w-full h-auto rounded-lg shadow-lg border border-primary/30"
                  loading="lazy"
                  decoding="async"
                  style={{ contentVisibility: 'auto' }}
                />
              </div>
              <div className="order-2 lg:order-1">
                <h3 className="font-display font-bold text-3xl mb-4 text-white">{isEn ? 'Data Center Cooling' : '數據中心散熱'}</h3>
                <p className="text-muted-foreground text-base mb-6 leading-relaxed">{isEn ? 'Providing enterprise-grade thermal solutions for servers, switches, and high-power supplies. Our system designs effectively reduce data center energy consumption and improve overall efficiency.' : '為伺服器、交換機和高功率電源提供企業級散熱解決方案。我們的系統設計能有效降低數據中心能耗，提高整體效率。'}</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">{isEn ? 'Server CPU cooling - Low noise, high performance' : '伺服器CPU散熱 - 低噪音高效能'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">{isEn ? 'Rack thermal management - Overall temperature balance' : '機櫃熱管理 - 整體溫度均衡'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">{isEn ? 'Power module cooling - Reliability and efficiency combined' : '電源模組冷卻 - 可靠性和效率並行'}</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 group">
                    {isEn ? 'Learn More' : '了解更多'}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Network Communication Cooling Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-2">
                <h3 className="font-display font-bold text-3xl mb-4 text-white">{isEn ? 'Network & Telecom Cooling' : '網路通訊散熱'}</h3>
                <p className="text-muted-foreground text-base mb-6 leading-relaxed">{isEn ? 'Providing professional thermal solutions for 5G base stations, network switches, and telecom equipment. Our designs ensure stable network connectivity in high-temperature environments.' : '為5G基地台、網路交換機和通訊設備提供專業散熱方案。我們的設計確保在高溫環境中保持穩定的網路連接。'}</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">{isEn ? '5G base station cooling - High power density cooling' : '5G基地台散熱 - 高功率密度冷卻'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">{isEn ? 'Switch cooling module - Reliable connectivity assurance' : '交換機散熱模組 - 可靠連接保障'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-muted-foreground">{isEn ? 'Telecom power cooling - Long-term stable operation' : '通訊電源散熱 - 長期穩定運行'}</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 group">
                    {isEn ? 'Learn More' : '了解更多'}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="order-1 lg:order-1">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/ILJdYZdUCbVlACVv.jpg"
                  alt={isEn ? 'Network & Telecom cooling solution' : '網路通訊散熱解決方案'}
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
      <section className="relative overflow-hidden bg-background">
        <div className="container pt-12 pb-4">
          <p className="text-gray-300 text-lg text-center">{isEn ? 'Partnering with global leading enterprises to provide top-tier thermal management solutions' : '與全球領先企業合作，提供頂級熱管理解決方案'}</p>
        </div>
        {/* Full-width partner logos background */}
        <div className="w-full overflow-hidden bg-background" style={{ minHeight: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/VMkNfdgmSifoBxAf.png"
            alt={isEn ? 'Partner Logos' : '合作夥伴'}
            className="transition-transform duration-500 ease-out hover:scale-105"
            style={{
              imageRendering: 'crisp-edges',
              display: 'block',
              width: '80%',
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
              <span className="text-xs font-mono text-primary tracking-wider">{isEn ? 'GET STARTED' : '準備開始'}</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-white">
              {isEn ? 'Ready to Solve Your Thermal Challenges?' : '準備好解決您的熱管理挑戰？'}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {isEn ? 'Our expert team is ready to provide customized solutions for your project. No matter how complex your needs, we can find the best solution.' : '我們的專家團隊隨時準備為您的項目提供定制化的解決方案。無論您的需求有多複雜，我們都能找到最適合的方案。'}
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 group">
                {isEn ? 'Start Your Project' : '開始您的項目'}
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
