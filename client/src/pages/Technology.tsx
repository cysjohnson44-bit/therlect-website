import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Zap, Wind, Layers, Activity, Thermometer } from "lucide-react";
import { Link } from "wouter";

export default function Technology() {
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
