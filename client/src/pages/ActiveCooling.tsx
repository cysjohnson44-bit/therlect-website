import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wind, Droplets, Gauge } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/hooks/useLanguage";

export default function ActiveCooling() {
  const { t, currentLanguage } = useLanguage();
  const isEn = currentLanguage === 'en';

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
            {t('activeCoolingPage.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-5 fade-in duration-700 delay-100">
            {t('activeCoolingPage.subtitle')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 relative">
        <div className="container">
          {/* Hero Image */}
          <div className="mb-20 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/tech-active-cooling-hero-edJrWg36WUc8rEPeeo82ws.webp" 
              alt="Active Cooling Technology" 
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
              style={{ contentVisibility: 'auto' }}
            />
          </div>

          {/* Technical Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h2 className="font-display font-bold text-3xl md:text-4xl">{t('activeCoolingPage.principleTitle')}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('activeCoolingPage.principleDesc')}
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-purple-500/20 text-purple-400">
                      <Wind className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{isEn ? 'Air Cooling System' : '風冷系統'}</h3>
                    <p className="text-muted-foreground">{isEn ? 'Forced convection via fans to remove heat. Low cost and widely applicable.' : '利用風扇強制對流，將熱量帶走。成本低，應用廣汎。'}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-purple-500/20 text-purple-400">
                      <Droplets className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{isEn ? 'Liquid Cooling System' : '液冷系統'}</h3>
                    <p className="text-muted-foreground">{isEn ? 'Liquid circulation for maximum heat dissipation efficiency, suitable for ultra-high power applications.' : '利用液體循環帶走熱量，散熱效率最高，適合超高功率應用。'}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-purple-500/20 text-purple-400">
                      <Gauge className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{isEn ? 'Intelligent Control' : '智能控制'}</h3>
                    <p className="text-muted-foreground">{isEn ? 'Automatically adjusts cooling intensity based on temperature, optimizing energy consumption and noise.' : '根據溫度自動調節散熱強度，優化能耗和噪音。'}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="font-display font-bold text-3xl md:text-4xl">{t('activeCoolingPage.advantagesTitle')}</h2>
              <div className="space-y-4">
                <div className="bg-card/30 border border-white/5 p-6 rounded-xl hover:bg-card/50 transition-colors">
                  <h3 className="font-bold text-purple-400 mb-2">{isEn ? 'Ultra-High Thermal Power' : '超高散熱功率'}</h3>
                  <p className="text-muted-foreground text-sm">{isEn ? 'Handles over 500W of thermal power, suitable for high-performance equipment.' : '可處理 500W 以上的散熱功率，適合高性能設備。'}</p>
                </div>
                <div className="bg-card/30 border border-white/5 p-6 rounded-xl hover:bg-card/50 transition-colors">
                  <h3 className="font-bold text-purple-400 mb-2">{isEn ? 'Precise Temperature Control' : '溫度精確控制'}</h3>
                  <p className="text-muted-foreground text-sm">{isEn ? 'Precise temperature management through sensors and controllers.' : '通過傳感器和控制器，實現精確的溫度管理。'}</p>
                </div>
                <div className="bg-card/30 border border-white/5 p-6 rounded-xl hover:bg-card/50 transition-colors">
                  <h3 className="font-bold text-purple-400 mb-2">{isEn ? 'Flexible Design Solutions' : '靈活的設計方案'}</h3>
                  <p className="text-muted-foreground text-sm">{isEn ? 'Customizable air or liquid cooling solutions based on application needs.' : '可根據應用需求定制風冷或液冷方案。'}</p>
                </div>
                <div className="bg-card/30 border border-white/5 p-6 rounded-xl hover:bg-card/50 transition-colors">
                  <h3 className="font-bold text-purple-400 mb-2">{isEn ? 'Energy Efficiency' : '能源效率'}</h3>
                  <p className="text-muted-foreground text-sm">{isEn ? 'Intelligent control system optimizes energy consumption and reduces operating costs.' : '智能控制系統優化能耗，降低運營成本。'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cooling Technologies */}
          <section className="py-20 border-t border-white/10">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-12 text-center">{isEn ? 'Cooling Technology Comparison' : '冷卻技術對比'}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="font-display font-bold text-2xl text-purple-400">{isEn ? 'Air Cooling System' : '風冷系統'}</h3>
                <div className="bg-card/30 border border-white/5 p-8 rounded-xl">
                  <h4 className="font-bold mb-4">{isEn ? 'Technical Features' : '技術特點'}</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• {isEn ? 'Forced convection via fans' : '利用風扇強制對流散熱'}</li>
                    <li>• {isEn ? 'Relatively low cost' : '成本相對較低'}</li>
                    <li>• {isEn ? 'Relatively simple maintenance' : '維護相對簡單'}</li>
                    <li>• {isEn ? 'Suitable for 50W - 1000W power range' : '適合 50W - 1000W 功率範圍'}</li>
                    <li>• {isEn ? 'Generates some noise' : '會產生一定的噪音'}</li>
                  </ul>
                </div>
                <div className="bg-card/30 border border-white/5 p-8 rounded-xl">
                  <h4 className="font-bold mb-4">{isEn ? 'Applications' : '應用場景'}</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• {isEn ? 'Servers and data centers' : '伺服器和數據中心'}</li>
                    <li>• {isEn ? 'Industrial control equipment' : '工業控制設備'}</li>
                    <li>• {isEn ? 'High-performance computers' : '高性能計算機'}</li>
                    <li>• {isEn ? 'Power supply equipment' : '電源設備'}</li>
                    <li>• {isEn ? 'Communication base stations' : '通訊基地台'}</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-display font-bold text-2xl text-purple-400">{isEn ? 'Liquid Cooling System' : '液冷系統'}</h3>
                <div className="bg-card/30 border border-white/5 p-8 rounded-xl">
                  <h4 className="font-bold mb-4">{isEn ? 'Technical Features' : '技術特點'}</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• {isEn ? 'Liquid circulation for heat dissipation' : '利用液體循環散熱'}</li>
                    <li>• {isEn ? 'Highest thermal efficiency' : '散熱效率最高'}</li>
                    <li>• {isEn ? 'Suitable for ultra-high power applications' : '適合超高功率應用'}</li>
                    <li>• {isEn ? 'Suitable for 500W - 10000W+ power range' : '適合 500W - 10000W+ 功率範圍'}</li>
                    <li>• {isEn ? 'Relatively quiet operation' : '運行相對安靜'}</li>
                  </ul>
                </div>
                <div className="bg-card/30 border border-white/5 p-8 rounded-xl">
                  <h4 className="font-bold mb-4">{isEn ? 'Applications' : '應用場景'}</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• {isEn ? 'EV battery systems' : '電動車電池系統'}</li>
                    <li>• {isEn ? 'Supercomputers' : '超級計算機'}</li>
                    <li>• {isEn ? 'High-power LED systems' : '高功率 LED 系統'}</li>
                    <li>• {isEn ? 'Industrial laser equipment' : '工業激光設備'}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Applications */}
          <section className="py-20 border-t border-white/10">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-12 text-center">{t('activeCoolingPage.applicationsTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card/30 border border-white/5 p-8 rounded-xl hover:bg-card/50 transition-colors">
                <h3 className="font-bold text-xl mb-4 text-purple-400">{isEn ? 'Servers & Data Centers' : '伺服器與數據中心'}</h3>
                <p className="text-muted-foreground mb-4">{isEn ? 'High-density servers require powerful air cooling systems for 24/7 stable operation.' : '高密度伺服器需要強大的風冷系統，確保 24/7 穩定運行。'}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {isEn ? 'Rack servers' : '機架式伺服器'}</li>
                  <li>• {isEn ? 'Data center cooling' : '數據中心冷卻'}</li>
                  <li>• {isEn ? 'HPC clusters' : '高性能計算集群'}</li>
                </ul>
              </div>

              <div className="bg-card/30 border border-white/5 p-8 rounded-xl hover:bg-card/50 transition-colors">
                <h3 className="font-bold text-xl mb-4 text-purple-400">{isEn ? 'EV Batteries' : '電動車電池'}</h3>
                <p className="text-muted-foreground mb-4">{isEn ? 'High-power batteries require liquid cooling systems for safety and performance.' : '高功率電池需要液冷系統，確保電池安全和性能。'}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {isEn ? 'Battery temperature management' : '電池溫度管理'}</li>
                  <li>• {isEn ? 'Fast charging cooling' : '快速充電冷卻'}</li>
                  <li>• {isEn ? 'Extreme condition protection' : '極限工況保護'}</li>
                </ul>
              </div>

              <div className="bg-card/30 border border-white/5 p-8 rounded-xl hover:bg-card/50 transition-colors">
                <h3 className="font-bold text-xl mb-4 text-purple-400">{isEn ? 'High-Power LED Systems' : '高功率 LED 系統'}</h3>
                <p className="text-muted-foreground mb-4">{isEn ? 'High-power LED floodlights and stage lights require effective cooling.' : '大功率 LED 投光燈和舞台燈需要有效的冷卻。'}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {isEn ? 'Floodlight cooling' : '投光燈冷卻'}</li>
                  <li>• {isEn ? 'Stage lighting systems' : '舞台燈光系統'}</li>
                  <li>• {isEn ? 'Industrial lighting' : '工業照明'}</li>
                </ul>
              </div>

              <div className="bg-card/30 border border-white/5 p-8 rounded-xl hover:bg-card/50 transition-colors">
                <h3 className="font-bold text-xl mb-4 text-purple-400">{isEn ? '5G Base Stations' : '5G 基地台'}</h3>
                <p className="text-muted-foreground mb-4">{isEn ? 'High-power RF equipment requires powerful cooling systems.' : '高功率射頻設備需要強大的冷卻系統。'}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {isEn ? 'RF power amplifiers' : '射頻功率放大器'}</li>
                  <li>• {isEn ? 'Baseband processors' : '基帶處理器'}</li>
                  <li>• {isEn ? 'Power modules' : '電源模組'}</li>
                </ul>
              </div>

              <div className="bg-card/30 border border-white/5 p-8 rounded-xl hover:bg-card/50 transition-colors">
                <h3 className="font-bold text-xl mb-4 text-purple-400">{isEn ? 'Industrial Laser Equipment' : '工業激光設備'}</h3>
                <p className="text-muted-foreground mb-4">{isEn ? 'High-power lasers require precise temperature control.' : '高功率激光器需要精確的溫度控制。'}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {isEn ? 'Laser cooling' : '激光器冷卻'}</li>
                  <li>• {isEn ? 'Optical component temperature control' : '光學元件溫控'}</li>
                  <li>• {isEn ? 'Power supply cooling' : '電源冷卻'}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Case Studies */}
          <section className="py-20 border-t border-white/10">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-12 text-center">{isEn ? 'Case Studies' : '成功案例'}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-card/30 border border-white/5 p-8 rounded-xl">
                <h3 className="font-bold text-xl mb-4 text-purple-400">{isEn ? 'High-Density Server Cooling' : '高密度伺服器冷卻'}</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>{isEn ? 'Challenge:' : '挑戰：'}</strong> {isEn ? 'Data center servers with high density, 3000W per unit, requiring efficient air cooling.' : '數據中心伺服器密度高，單機功耗 3000W，需要高效的風冷系統。'}</p>
                  <p><strong>{isEn ? 'Solution:' : '方案：'}</strong> {isEn ? 'Designed multi-layer airflow channels with optimized fan configuration for efficient cooling.' : '設計多層風道和優化的風扇配置，實現高效冷卻。'}</p>
                  <p><strong>{isEn ? 'Result:' : '成果：'}</strong> {isEn ? 'Temperature reduced by 20°C, 15% energy savings, 30% reliability improvement.' : '溫度降低 20°C，能耗降低 15%，可靠性提升 30%。'}</p>
                </div>
              </div>

              <div className="bg-card/30 border border-white/5 p-8 rounded-xl">
                <h3 className="font-bold text-xl mb-4 text-purple-400">{isEn ? 'EV Battery Liquid Cooling System' : '電動車電池液冷系統'}</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>{isEn ? 'Challenge:' : '挑戰：'}</strong> {isEn ? 'EV batteries generate significant heat during fast charging, requiring liquid cooling.' : '電動車電池在快速充電時產生大量熱量，需要液冷系統。'}</p>
                  <p><strong>{isEn ? 'Solution:' : '方案：'}</strong> {isEn ? 'Designed efficient liquid cooling loop with precise battery temperature control.' : '設計高效液冷迴路，精確控制電池溫度。'}</p>
                  <p><strong>{isEn ? 'Result:' : '成果：'}</strong> {isEn ? 'Temperature controlled at 35°C during fast charging, 40% battery lifespan improvement.' : '快速充電時溫度控制在 35°C，電池壽命提升 40%。'}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Specifications */}
          <section className="py-20 border-t border-white/10">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-12 text-center">{isEn ? 'Technical Specifications' : '技術規格'}</h2>
            <div className="bg-card/30 border border-white/5 p-8 rounded-xl overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-purple-400 font-bold">{isEn ? 'Parameter' : '參數'}</th>
                    <th className="text-left py-4 px-4 text-purple-400 font-bold">{isEn ? 'Air Cooling' : '風冷系統'}</th>
                    <th className="text-left py-4 px-4 text-purple-400 font-bold">{isEn ? 'Liquid Cooling' : '液冷系統'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">{isEn ? 'Thermal Power' : '散熱功率'}</td>
                    <td className="py-4 px-4">50W - 1000W</td>
                    <td className="py-4 px-4">500W - 10000W+</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">{isEn ? 'Thermal Resistance' : '熱阻'}</td>
                    <td className="py-4 px-4">0.01 - 0.1 K/W</td>
                    <td className="py-4 px-4">0.001 - 0.01 K/W</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">{isEn ? 'Operating Temperature' : '工作溫度'}</td>
                    <td className="py-4 px-4">-10°C - 60°C</td>
                    <td className="py-4 px-4">-20°C - 80°C</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">{isEn ? 'Noise Level' : '噪音水平'}</td>
                    <td className="py-4 px-4">40 - 80 dB</td>
                    <td className="py-4 px-4">30 - 50 dB</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">{isEn ? 'Reliability' : '可靠性'}</td>
                    <td className="py-4 px-4">{isEn ? 'MTBF > 30000 hours' : 'MTBF > 30000 小時'}</td>
                    <td className="py-4 px-4">{isEn ? 'MTBF > 50000 hours' : 'MTBF > 50000 小時'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center border-t border-white/10">
        <div className="container max-w-3xl">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">{isEn ? 'Need an Active Cooling Solution?' : '需要主動冷卻解決方案？'}</h2>
          <p className="text-muted-foreground text-lg mb-8">
            {isEn ? 'Our engineering team can design and manufacture the most suitable active cooling system for your application needs.' : '我們的工程團隊可以根據您的應用需求，設計和製造最適合的主動冷卻系統。'}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8">
              {isEn ? 'Contact Us' : '聯繫我們'} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
