import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Layers, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function PassiveCooling() {
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
            被動散熱
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-5 fade-in duration-700 delay-100">
            無需主動能源驅動的高效散熱方案，利用自然對流和熱傳導原理實現靜音、可靠的溫度管理。
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 relative">
        <div className="container">
          {/* Hero Image */}
          <div className="mb-20 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/passive-cooling-hero-image.webp" 
              alt="被動散熱技術可視化" 
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
              style={{ contentVisibility: 'auto' }}
            />
          </div>

          {/* Technical Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h2 className="font-display font-bold text-3xl md:text-4xl">技術原理</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                被動散熱利用物理學中的自然對流原理，通過精心設計的散熱片和高效能材料，將熱量從發熱源傳導到環境中。無需風扇或液冷系統，完全無聲運行，是對噪音敏感應用的理想選擇。
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-cyan-500/20 text-cyan-400">
                      <Layers className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">多層散熱設計</h3>
                    <p className="text-muted-foreground">採用多層散熱片結構，最大化熱傳導面積，提升散熱效率。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-cyan-500/20 text-cyan-400">
                      <Zap className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">高效能材料</h3>
                    <p className="text-muted-foreground">選用高導熱係數的銅、鋁合金等材料，確保最佳熱傳導效能。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-cyan-500/20 text-cyan-400">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">自然對流</h3>
                    <p className="text-muted-foreground">利用熱空氣上升的自然規律，實現持續的熱量散發。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="font-display font-bold text-3xl md:text-4xl">核心優勢</h2>
              <div className="space-y-4">
                <div className="bg-card/30 border border-white/5 p-6 rounded-xl hover:bg-card/50 transition-colors">
                  <h3 className="font-bold text-cyan-400 mb-2">完全無聲</h3>
                  <p className="text-muted-foreground text-sm">無需風扇或泵，運行完全無噪音，適合對聲音敏感的環境。</p>
                </div>
                <div className="bg-card/30 border border-white/5 p-6 rounded-xl hover:bg-card/50 transition-colors">
                  <h3 className="font-bold text-cyan-400 mb-2">高可靠性</h3>
                  <p className="text-muted-foreground text-sm">無活動部件，故障率極低，維護成本最小。</p>
                </div>
                <div className="bg-card/30 border border-white/5 p-6 rounded-xl hover:bg-card/50 transition-colors">
                  <h3 className="font-bold text-cyan-400 mb-2">低成本</h3>
                  <p className="text-muted-foreground text-sm">結構簡單，製造成本低，適合大規模應用。</p>
                </div>
                <div className="bg-card/30 border border-white/5 p-6 rounded-xl hover:bg-card/50 transition-colors">
                  <h3 className="font-bold text-cyan-400 mb-2">長壽命</h3>
                  <p className="text-muted-foreground text-sm">無易損件，使用壽命長，可靠性高。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Applications */}
          <section className="py-20 border-t border-white/10">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-12 text-center">應用領域</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card/30 border border-white/5 p-8 rounded-xl hover:bg-card/50 transition-colors">
                <h3 className="font-bold text-xl mb-4 text-cyan-400">LED 照明</h3>
                <p className="text-muted-foreground mb-4">高功率 LED 燈具需要有效的散熱以保證光效和壽命。被動散熱方案提供靜音、可靠的溫度管理。</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 室內照明系統</li>
                  <li>• 戶外投光燈</li>
                  <li>• 舞台燈光設備</li>
                </ul>
              </div>

              <div className="bg-card/30 border border-white/5 p-8 rounded-xl hover:bg-card/50 transition-colors">
                <h3 className="font-bold text-xl mb-4 text-cyan-400">音頻設備</h3>
                <p className="text-muted-foreground mb-4">功率放大器、音頻處理器等設備對散熱的靜音性要求極高，被動散熱是首選方案。</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 功率放大器</li>
                  <li>• 音頻處理器</li>
                  <li>• 專業音響系統</li>
                </ul>
              </div>

              <div className="bg-card/30 border border-white/5 p-8 rounded-xl hover:bg-card/50 transition-colors">
                <h3 className="font-bold text-xl mb-4 text-cyan-400">醫療儀器</h3>
                <p className="text-muted-foreground mb-4">醫療設備對噪音和可靠性要求嚴格，被動散熱方案完全滿足這些需求。</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 超聲波診斷儀</li>
                  <li>• 手術室設備</li>
                  <li>• 監測儀器</li>
                </ul>
              </div>

              <div className="bg-card/30 border border-white/5 p-8 rounded-xl hover:bg-card/50 transition-colors">
                <h3 className="font-bold text-xl mb-4 text-cyan-400">小功率電源</h3>
                <p className="text-muted-foreground mb-4">低功率電源設備可採用被動散熱，實現緊湊、可靠的設計。</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 開關電源</li>
                  <li>• 充電器</li>
                  <li>• 工業控制電源</li>
                </ul>
              </div>

              <div className="bg-card/30 border border-white/5 p-8 rounded-xl hover:bg-card/50 transition-colors">
                <h3 className="font-bold text-xl mb-4 text-cyan-400">消費電子</h3>
                <p className="text-muted-foreground mb-4">部分消費電子產品採用被動散熱，提供靜音、優雅的用戶體驗。</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 迷你電腦</li>
                  <li>• 網絡設備</li>
                  <li>• 家庭影院設備</li>
                </ul>
              </div>

              <div className="bg-card/30 border border-white/5 p-8 rounded-xl hover:bg-card/50 transition-colors">
                <h3 className="font-bold text-xl mb-4 text-cyan-400">工業應用</h3>
                <p className="text-muted-foreground mb-4">工業環境中對可靠性要求高的應用，被動散熱提供最佳解決方案。</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 工業控制器</li>
                  <li>• 變頻器</li>
                  <li>• 電源模組</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Case Studies */}
          <section className="py-20 border-t border-white/10">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-12 text-center">成功案例</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-card/30 border border-white/5 p-8 rounded-xl">
                <h3 className="font-bold text-xl mb-4 text-cyan-400">高功率 LED 投光燈</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>挑戰：</strong> 1000W LED 投光燈需要在高溫環境下保持穩定光效，同時要求無噪音運行。</p>
                  <p><strong>方案：</strong> 採用多層鋁合金散熱片設計，結合高效能導熱膏，實現被動散熱。</p>
                  <p><strong>成果：</strong> 溫度降低 25°C，運行完全無聲，使用壽命提升 40%。</p>
                </div>
              </div>

              <div className="bg-card/30 border border-white/5 p-8 rounded-xl">
                <h3 className="font-bold text-xl mb-4 text-cyan-400">醫療超聲診斷儀</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>挑戰：</strong> 診斷儀電源模組需要在無噪音環境中長期穩定運行。</p>
                  <p><strong>方案：</strong> 設計專用被動散熱模組，採用銅製散熱片和導熱膠。</p>
                  <p><strong>成果：</strong> 完全無噪音，可靠性達到 99.9%，維護成本降低 60%。</p>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Specifications */}
          <section className="py-20 border-t border-white/10">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-12 text-center">技術規格</h2>
            <div className="bg-card/30 border border-white/5 p-8 rounded-xl overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-cyan-400 font-bold">參數</th>
                    <th className="text-left py-4 px-4 text-cyan-400 font-bold">規格</th>
                    <th className="text-left py-4 px-4 text-cyan-400 font-bold">備註</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">散熱功率</td>
                    <td className="py-4 px-4">10W - 500W</td>
                    <td className="py-4 px-4 text-muted-foreground">根據設計定制</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">熱阻</td>
                    <td className="py-4 px-4">0.05 - 0.5 K/W</td>
                    <td className="py-4 px-4 text-muted-foreground">取決於散熱片設計</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">工作溫度</td>
                    <td className="py-4 px-4">-40°C - 85°C</td>
                    <td className="py-4 px-4 text-muted-foreground">標準範圍</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">材料</td>
                    <td className="py-4 px-4">鋁合金、銅</td>
                    <td className="py-4 px-4 text-muted-foreground">高導熱係數</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">可靠性</td>
                    <td className="py-4 px-4">MTBF &gt; 50000 小時</td>
                    <td className="py-4 px-4 text-muted-foreground">無活動部件</td>
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
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">需要被動散熱解決方案？</h2>
          <p className="text-muted-foreground text-lg mb-8">
            我們的工程團隊可以根據您的應用需求，設計和製造最適合的被動散熱方案。
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8">
              聯繫我們 <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
