import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Zap, Wind, Layers, Activity, Thermometer, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Technology() {
  const [cfdExpanded, setCfdExpanded] = useState(false);

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
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/50 backdrop-blur-md border border-white/10 mb-2">
                    <Activity className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono text-cyan-400">CFD SIMULATION</span>
                  </div>
                </div>
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

              {/* Learn More Button */}
              <button
                onClick={() => setCfdExpanded(!cfdExpanded)}
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-500/60 text-cyan-400 hover:text-cyan-300 transition-all duration-300"
              >
                <span className="font-semibold">了解更多 CFD 分析服務</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${cfdExpanded ? 'rotate-180' : ''}`} />
              </button>

              {/* CFD Expanded Content */}
              {cfdExpanded && (
                <div className="mt-8 space-y-8 pt-8 border-t border-white/10 animate-in fade-in duration-300">
                  {/* CFD Hero */}
                  <div className="space-y-4">
                    <h3 className="font-display font-bold text-2xl text-cyan-400">熱流體動力學分析 (CFD Analysis)</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      在產品投入模具製造前，我們就能看見熱能的流動。汎海科技運用先進的數值模擬技術，將看不見的氣流與溫度視覺化。我們不只發現過熱點，更為您找出最佳的散熱路徑，大幅縮短研發週期，降低試錯成本。
                    </p>
                  </div>

                  {/* CFD Services */}
                  <div className="space-y-4">
                    <h4 className="font-bold text-lg text-cyan-300">核心服務內容</h4>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-cyan-500/5 border border-cyan-500/20 p-5 rounded-xl">
                        <h5 className="font-bold text-cyan-300 mb-2">虛擬驗證，精準模擬</h5>
                        <p className="text-sm text-muted-foreground">採用業界頂尖的 Ansys 與 Flotherm 分析軟體，針對產品結構進行全方位的熱流場模擬。無論是自然對流、強制氣冷或液冷系統，我們都能在虛擬環境中精確運算，確保模擬結果高度貼近真實物理狀況。</p>
                      </div>
                      <div className="bg-cyan-500/5 border border-cyan-500/20 p-5 rounded-xl">
                        <h5 className="font-bold text-cyan-300 mb-2">預判問題，防患未然</h5>
                        <p className="text-sm text-muted-foreground">別等到量產才發現散熱瓶頸。我們的分析服務能在設計初期識別潛在的熱堆積區域（Hot Spots）與氣流死角，讓工程團隊能即時調整機構佈局與散熱片設計，從源頭解決熱管理難題。</p>
                      </div>
                      <div className="bg-cyan-500/5 border border-cyan-500/20 p-5 rounded-xl">
                        <h5 className="font-bold text-cyan-300 mb-2">優化設計，提升效能</h5>
                        <p className="text-sm text-muted-foreground">這不僅是除錯，更是升級。透過迭代分析，我們協助您權衡散熱效能、噪音與體積限制，計算出最佳的鰭片密度、風扇選型與流道設計，讓您的產品在效能與穩定性之間取得完美平衡。</p>
                      </div>
                    </div>
                  </div>

                  {/* CFD Applications */}
                  <div className="space-y-4">
                    <h4 className="font-bold text-lg text-cyan-300">應用領域</h4>
                    <p className="text-sm text-muted-foreground">我們的分析經驗涵蓋高發熱量與精密電子領域：</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "伺服器與資料中心 (HPC)",
                        "5G/6G 通訊基地台",
                        "車用電子與電動載具 (EV)",
                        "工業電腦與自動化設備"
                      ].map((app, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-cyan-400" />
                          {app}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CFD Advantages */}
                  <div className="space-y-4">
                    <h4 className="font-bold text-lg text-cyan-300">我們的優勢</h4>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-cyan-500/5 border border-cyan-500/20 p-5 rounded-xl">
                        <h5 className="font-bold text-cyan-300 mb-2">理論與實務結合</h5>
                        <p className="text-sm text-muted-foreground">我們不僅提供軟體數據，更擁有豐富的實體熱管/均溫板 (VC) 製造經驗，確保模擬方案具備「可製造性」。</p>
                      </div>
                      <div className="bg-cyan-500/5 border border-cyan-500/20 p-5 rounded-xl">
                        <h5 className="font-bold text-cyan-300 mb-2">快速回應</h5>
                        <p className="text-sm text-muted-foreground">高效率的運算與報告產出，配合您的專案時程，加速產品上市時間 (Time-to-Market)。</p>
                      </div>
                    </div>
                  </div>

                  {/* CFD CTA */}
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-muted-foreground mb-4">讓數據說話，打造更冷靜的強大效能。</p>
                    <Link href="/contact">
                      <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-sm px-8 group">
                        聯繫我們的熱工程專家
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Far-Infrared Technology Section */}
      <section className="py-20 relative bg-secondary/5">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="container">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="/assets/far_infrared_tech.jpg" 
                  alt="Far-Infrared Technology" 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/50 backdrop-blur-md border border-white/10 mb-2">
                    <Zap className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-mono text-purple-400">ENERGY TRANSFER</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <Thermometer className="w-6 h-6 text-purple-400" />
                </div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-purple-400">遠紅外線技術</h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Therlect 是遠紅外線技術的先驅，我們將這種具有獨特生物效應的光波應用於多元產業。遠紅外線能夠以非接觸的方式傳遞熱能，並與物質分子產生共振，達到高效加熱與生物活化效果。
              </p>
              
              <div className="space-y-4 pt-4">
                {[
                  { title: "高效節能", desc: "熱效率高達 95%，直接轉換為目標物體內能" },
                  { title: "均勻加熱", desc: "能量穿透物體表面，實現內外均勻加熱，避免局部過熱" },
                  { title: "健康效益", desc: "特定波長促進血液循環，緩解肌肉疲勞，應用於醫療保健" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 mt-1">
                      <span className="w-2 h-2 rounded-full bg-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
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
