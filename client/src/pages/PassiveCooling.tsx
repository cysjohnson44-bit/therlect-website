import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Layers, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/hooks/useLanguage";

export default function PassiveCooling() {
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
            {t('passiveCoolingPage.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-5 fade-in duration-700 delay-100">
            {t('passiveCoolingPage.subtitle')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 relative">
        <div className="container">
          {/* Hero Image */}
          <div className="mb-20 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/tech-passive-cooling-hero-BZu5BzPbdFDcmfNxq47WV3.webp" 
              alt="Passive Cooling Technology" 
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
              style={{ contentVisibility: 'auto' }}
            />
          </div>

          {/* Technical Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h2 className="font-display font-bold text-3xl md:text-4xl">{t('passiveCoolingPage.principleTitle')}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('passiveCoolingPage.principleDesc')}
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-cyan-500/20 text-cyan-400">
                      <Layers className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{isEn ? 'Multi-Layer Heat Sink Design' : '多層散熱設計'}</h3>
                    <p className="text-muted-foreground">{isEn ? 'Multi-layer heat sink structure maximizes thermal conduction area and improves dissipation efficiency.' : '採用多層散熱片結構，最大化熱傳導面積，提升散熱效率。'}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-cyan-500/20 text-cyan-400">
                      <Zap className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{isEn ? 'High-Performance Materials' : '高效能材料'}</h3>
                    <p className="text-muted-foreground">{isEn ? 'Using high thermal conductivity materials such as copper and aluminum alloys for optimal heat transfer.' : '選用高導熱係數的銅、鋁合金等材料，確保最佳熱傳導效能。'}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-cyan-500/20 text-cyan-400">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{isEn ? 'Natural Convection' : '自然對流'}</h3>
                    <p className="text-muted-foreground">{isEn ? 'Utilizing the natural principle of hot air rising for continuous heat dissipation.' : '利用熱空氣上升的自然規律，實現持續的熱量散發。'}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="font-display font-bold text-3xl md:text-4xl">{t('passiveCoolingPage.advantagesTitle')}</h2>
              <div className="space-y-4">
                <div className="bg-card/30 border border-white/5 p-6 rounded-xl hover:bg-card/50 transition-colors">
                  <h3 className="font-bold text-cyan-400 mb-2">{t('passiveCoolingPage.advantage1Title')}</h3>
                  <p className="text-muted-foreground text-sm">{t('passiveCoolingPage.advantage1Desc')}</p>
                </div>
                <div className="bg-card/30 border border-white/5 p-6 rounded-xl hover:bg-card/50 transition-colors">
                  <h3 className="font-bold text-cyan-400 mb-2">{t('passiveCoolingPage.advantage2Title')}</h3>
                  <p className="text-muted-foreground text-sm">{t('passiveCoolingPage.advantage2Desc')}</p>
                </div>
                <div className="bg-card/30 border border-white/5 p-6 rounded-xl hover:bg-card/50 transition-colors">
                  <h3 className="font-bold text-cyan-400 mb-2">{isEn ? 'Low Cost' : '低成本'}</h3>
                  <p className="text-muted-foreground text-sm">{isEn ? 'Simple structure, low manufacturing cost, suitable for large-scale applications.' : '結構簡單，製造成本低，適合大規模應用。'}</p>
                </div>
                <div className="bg-card/30 border border-white/5 p-6 rounded-xl hover:bg-card/50 transition-colors">
                  <h3 className="font-bold text-cyan-400 mb-2">{t('passiveCoolingPage.advantage4Title')}</h3>
                  <p className="text-muted-foreground text-sm">{t('passiveCoolingPage.advantage4Desc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Applications */}
          <section className="py-20 border-t border-white/10">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-12 text-center">{t('passiveCoolingPage.applicationsTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card/30 border border-white/5 p-8 rounded-xl hover:bg-card/50 transition-colors">
                <h3 className="font-bold text-xl mb-4 text-cyan-400">{isEn ? 'LED Lighting' : 'LED 照明'}</h3>
                <p className="text-muted-foreground mb-4">{isEn ? 'High-power LED fixtures require effective heat dissipation to ensure light efficiency and lifespan. Passive cooling provides silent, reliable temperature management.' : '高功率 LED 燈具需要有效的散熱以保證光效和壽命。被動散熱方案提供靜音、可靠的溫度管理。'}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {isEn ? 'Indoor lighting systems' : '室內照明系統'}</li>
                  <li>• {isEn ? 'Outdoor floodlights' : '戶外投光燈'}</li>
                  <li>• {isEn ? 'Stage lighting equipment' : '舞台燈光設備'}</li>
                </ul>
              </div>

              <div className="bg-card/30 border border-white/5 p-8 rounded-xl hover:bg-card/50 transition-colors">
                <h3 className="font-bold text-xl mb-4 text-cyan-400">{isEn ? 'Audio Equipment' : '音頻設備'}</h3>
                <p className="text-muted-foreground mb-4">{isEn ? 'Power amplifiers and audio processors require extremely quiet cooling, making passive cooling the preferred solution.' : '功率放大器、音頻處理器等設備對散熱的靜音性要求極高，被動散熱是首選方案。'}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {isEn ? 'Power amplifiers' : '功率放大器'}</li>
                  <li>• {isEn ? 'Audio processors' : '音頻處理器'}</li>
                  <li>• {isEn ? 'Professional audio systems' : '專業音響系統'}</li>
                </ul>
              </div>

              <div className="bg-card/30 border border-white/5 p-8 rounded-xl hover:bg-card/50 transition-colors">
                <h3 className="font-bold text-xl mb-4 text-cyan-400">{isEn ? 'Medical Instruments' : '醫療儀器'}</h3>
                <p className="text-muted-foreground mb-4">{isEn ? 'Medical equipment has strict noise and reliability requirements, which passive cooling fully meets.' : '醫療設備對噪音和可靠性要求嚴格，被動散熱方案完全滿足這些需求。'}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {isEn ? 'Ultrasound diagnostic equipment' : '超聲波診斷儀'}</li>
                  <li>• {isEn ? 'Operating room equipment' : '手術室設備'}</li>
                  <li>• {isEn ? 'Monitoring instruments' : '監測儀器'}</li>
                </ul>
              </div>

              <div className="bg-card/30 border border-white/5 p-8 rounded-xl hover:bg-card/50 transition-colors">
                <h3 className="font-bold text-xl mb-4 text-cyan-400">{isEn ? 'Low-Power Supplies' : '小功率電源'}</h3>
                <p className="text-muted-foreground mb-4">{isEn ? 'Low-power supply equipment can use passive cooling for compact, reliable designs.' : '低功率電源設備可採用被動散熱，實現緊湊、可靠的設計。'}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {isEn ? 'Switching power supplies' : '開關電源'}</li>
                  <li>• {isEn ? 'Chargers' : '充電器'}</li>
                  <li>• {isEn ? 'Industrial control power supplies' : '工業控制電源'}</li>
                </ul>
              </div>

              <div className="bg-card/30 border border-white/5 p-8 rounded-xl hover:bg-card/50 transition-colors">
                <h3 className="font-bold text-xl mb-4 text-cyan-400">{isEn ? 'Consumer Electronics' : '消費電子'}</h3>
                <p className="text-muted-foreground mb-4">{isEn ? 'Some consumer electronics use passive cooling for a silent, elegant user experience.' : '部分消費電子產品採用被動散熱，提供靜音、優雅的用戶體驗。'}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {isEn ? 'Mini PCs' : '迷你電腦'}</li>
                  <li>• {isEn ? 'Network devices' : '網絡設備'}</li>
                  <li>• {isEn ? 'Home theater equipment' : '家庭影院設備'}</li>
                </ul>
              </div>

              <div className="bg-card/30 border border-white/5 p-8 rounded-xl hover:bg-card/50 transition-colors">
                <h3 className="font-bold text-xl mb-4 text-cyan-400">{isEn ? 'Industrial Applications' : '工業應用'}</h3>
                <p className="text-muted-foreground mb-4">{isEn ? 'Industrial environments with high reliability requirements benefit from passive cooling solutions.' : '工業環境中對可靠性要求高的應用，被動散熱提供最佳解決方案。'}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {isEn ? 'Industrial controllers' : '工業控制器'}</li>
                  <li>• {isEn ? 'Inverters' : '變頻器'}</li>
                  <li>• {isEn ? 'Power modules' : '電源模組'}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Case Studies */}
          <section className="py-20 border-t border-white/10">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-12 text-center">{isEn ? 'Case Studies' : '成功案例'}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-card/30 border border-white/5 p-8 rounded-xl">
                <h3 className="font-bold text-xl mb-4 text-cyan-400">{isEn ? 'High-Power LED Floodlight' : '高功率 LED 投光燈'}</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>{isEn ? 'Challenge:' : '挑戰：'}</strong> {isEn ? '1000W LED floodlight needs stable light efficiency in high-temperature environments with silent operation.' : '1000W LED 投光燈需要在高溫環境下保持穩定光效，同時要求無噪音運行。'}</p>
                  <p><strong>{isEn ? 'Solution:' : '方案：'}</strong> {isEn ? 'Multi-layer aluminum alloy heat sink design combined with high-performance thermal paste for passive cooling.' : '採用多層鋁合金散熱片設計，結合高效能導熱膏，實現被動散熱。'}</p>
                  <p><strong>{isEn ? 'Result:' : '成果：'}</strong> {isEn ? 'Temperature reduced by 25°C, completely silent operation, 40% longer lifespan.' : '溫度降低 25°C，運行完全無聲，使用壽命提升 40%。'}</p>
                </div>
              </div>

              <div className="bg-card/30 border border-white/5 p-8 rounded-xl">
                <h3 className="font-bold text-xl mb-4 text-cyan-400">{isEn ? 'Medical Ultrasound Diagnostic Equipment' : '醫療超聲診斷儀'}</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>{isEn ? 'Challenge:' : '挑戰：'}</strong> {isEn ? 'Diagnostic equipment power module requires long-term stable operation in a silent environment.' : '診斷儀電源模組需要在無噪音環境中長期穩定運行。'}</p>
                  <p><strong>{isEn ? 'Solution:' : '方案：'}</strong> {isEn ? 'Designed dedicated passive cooling module with copper heat sinks and thermal adhesive.' : '設計專用被動散熱模組，採用銅製散熱片和導熱膠。'}</p>
                  <p><strong>{isEn ? 'Result:' : '成果：'}</strong> {isEn ? 'Completely silent, 99.9% reliability, 60% reduction in maintenance costs.' : '完全無噪音，可靠性達到 99.9%，維護成本降低 60%。'}</p>
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
                    <th className="text-left py-4 px-4 text-cyan-400 font-bold">{isEn ? 'Parameter' : '參數'}</th>
                    <th className="text-left py-4 px-4 text-cyan-400 font-bold">{isEn ? 'Specification' : '規格'}</th>
                    <th className="text-left py-4 px-4 text-cyan-400 font-bold">{isEn ? 'Notes' : '備註'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">{isEn ? 'Thermal Power' : '散熱功率'}</td>
                    <td className="py-4 px-4">10W - 500W</td>
                    <td className="py-4 px-4 text-muted-foreground">{isEn ? 'Customized by design' : '根據設計定制'}</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">{isEn ? 'Thermal Resistance' : '熱阻'}</td>
                    <td className="py-4 px-4">0.05 - 0.5 K/W</td>
                    <td className="py-4 px-4 text-muted-foreground">{isEn ? 'Depends on heat sink design' : '取決於散熱片設計'}</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">{isEn ? 'Operating Temperature' : '工作溫度'}</td>
                    <td className="py-4 px-4">-40°C - 85°C</td>
                    <td className="py-4 px-4 text-muted-foreground">{isEn ? 'Standard range' : '標準範圍'}</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">{isEn ? 'Materials' : '材料'}</td>
                    <td className="py-4 px-4">{isEn ? 'Aluminum alloy, Copper' : '鋁合金、銅'}</td>
                    <td className="py-4 px-4 text-muted-foreground">{isEn ? 'High thermal conductivity' : '高導熱係數'}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">{isEn ? 'Reliability' : '可靠性'}</td>
                    <td className="py-4 px-4">{isEn ? 'MTBF > 50000 hours' : 'MTBF > 50000 小時'}</td>
                    <td className="py-4 px-4 text-muted-foreground">{isEn ? 'No moving parts' : '無活動部件'}</td>
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
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">{isEn ? 'Need a Passive Cooling Solution?' : '需要被動散熱解決方案？'}</h2>
          <p className="text-muted-foreground text-lg mb-8">
            {isEn ? 'Our engineering team can design and manufacture the most suitable passive cooling solution for your application needs.' : '我們的工程團隊可以根據您的應用需求，設計和製造最適合的被動散熱方案。'}
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
