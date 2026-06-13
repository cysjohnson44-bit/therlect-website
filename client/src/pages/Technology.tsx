import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Wind, Layers, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Technology() {
  const [passiveExpanded, setPassiveExpanded] = useState(false);
  const [activeExpanded, setActiveExpanded] = useState(false);

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
            核心技術
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-5 fade-in duration-700 delay-100">
            Therlect 結合深厚的熱力學理論與創新的應用技術，為客戶解決最棘手的熱管理難題。
          </p>
        </div>
      </section>

      {/* Thermodynamic Engineering Section */}
      <section className="py-20 relative">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="/assets/thermal_analysis.jpg" 
                  alt="Thermodynamic Engineering" 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  style={{ contentVisibility: 'auto', willChange: 'transform' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

              </div>
            </div>
            
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                  <Cpu className="w-6 h-6 text-cyan-400" />
                </div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-cyan-400">熱力學工程</h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                我們的熱力學工程團隊專注於熱能的產生、轉換、傳遞與利用。透過先進的模擬分析工具與豐富的實務經驗，我們能精準預測產品在真實環境中的熱表現，並提供最優化的散熱設計。
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="bg-card/30 border border-white/5 p-5 rounded-xl hover:bg-card/50 transition-colors">
                  <Wind className="w-8 h-8 text-cyan-400 mb-3" />
                  <h3 className="font-bold text-lg mb-2">熱流體動力學分析</h3>
                  <p className="text-sm text-muted-foreground">運用尖端 CFD 軟體進行精準的熱流模擬，優化氣流場與溫度分佈。</p>
                </div>
                
                <div className="bg-card/30 border border-white/5 p-5 rounded-xl hover:bg-card/50 transition-colors">
                  <Layers className="w-8 h-8 text-cyan-400 mb-3" />
                  <h3 className="font-bold text-lg mb-2">散熱模組設計</h3>
                  <p className="text-sm text-muted-foreground">針對不同產品需求，設計高效、低成本且結構緊湊的客製化散熱模組。</p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>



      {/* Core Technologies Section */}
      <section className="py-20 relative">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl mb-4">核心散熱技術</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">我們提供多種散熱解決方案，從被動散熱到主動冷卻，滿足不同應用需求。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Passive Cooling */}
            <div className="bg-card/30 border border-white/5 p-8 rounded-xl hover:bg-card/50 transition-colors">
              <Link href="/technology/passive-cooling">
                <button
                  onClick={() => setPassiveExpanded(!passiveExpanded)}
                  className="w-full flex items-center justify-between mb-4 hover:text-cyan-300 transition-colors"
                >
                  <h3 className="font-display font-bold text-2xl text-cyan-400">被動散熱</h3>
                  <ChevronDown className={`w-6 h-6 text-cyan-400 transition-transform duration-300 ${passiveExpanded ? 'rotate-180' : ''}`} />
                </button>
              </Link>
              <p className="text-muted-foreground mb-4">無需主動能源驅動的高效散熱方案</p>
              {passiveExpanded && (
                <div className="mt-6 space-y-4 pt-6 border-t border-white/10 animate-in fade-in duration-300">
                  <div className="space-y-3">
                    <h4 className="font-bold text-cyan-300">技術特點：</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 無需風扇或液冷系統，完全無聲運行</li>
                      <li>• 利用自然對流和熱傳導原理</li>
                      <li>• 適用於低功率和對噪音敏感的應用</li>
                      <li>• 散熱片設計和材料選擇至關重要</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-cyan-300">應用場景：</h4>
                    <p className="text-sm text-muted-foreground">LED 照明、小功率電源、音頻設備、醫療儀器等對噪音要求高的應用。</p>
                  </div>
                </div>
              )}
            </div>

            {/* Active Cooling */}
            <div className="bg-card/30 border border-white/5 p-8 rounded-xl hover:bg-card/50 transition-colors">
              <Link href="/technology/active-cooling">
                <button
                  onClick={() => setActiveExpanded(!activeExpanded)}
                  className="w-full flex items-center justify-between mb-4 hover:text-purple-300 transition-colors"
                >
                  <h3 className="font-display font-bold text-2xl text-purple-400">主動冷卻</h3>
                  <ChevronDown className={`w-6 h-6 text-purple-400 transition-transform duration-300 ${activeExpanded ? 'rotate-180' : ''}`} />
                </button>
              </Link>
              <p className="text-muted-foreground mb-4">主動驅動的高效能散熱解決方案</p>
              {activeExpanded && (
                <div className="mt-6 space-y-4 pt-6 border-t border-white/10 animate-in fade-in duration-300">
                  <div className="space-y-3">
                    <h4 className="font-bold text-purple-300">技術特點：</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 風冷系統：利用風扇強制對流，散熱效率高</li>
                      <li>• 液冷系統：水或其他液體循環，適合超高功率應用</li>
                      <li>• 可根據溫度自動調節散熱強度</li>
                      <li>• 適用於高功率和高性能設備</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-purple-300">應用場景：</h4>
                    <p className="text-sm text-muted-foreground">伺服器、高性能計算、電動車電池、工業設備、5G 基地台等高功率應用。</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container max-w-3xl">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">想了解更多技術細節？</h2>
          <p className="text-muted-foreground text-lg mb-8">
            我們的工程團隊隨時準備為您解答技術疑問，並提供專業的諮詢服務。
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8">
              聯繫技術專家 <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
