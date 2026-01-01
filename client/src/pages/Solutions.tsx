import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Settings, PenTool, BarChart3, Box, Award } from "lucide-react";
import { Link } from "wouter";

export default function Solutions() {
  const processSteps = [
    {
      icon: PenTool,
      title: "概念與設計",
      desc: "根據客戶需求進行初步熱評估，提出多種可行的散熱方案。我們考量空間限制、成本預算與效能目標，為您規劃最佳路徑。",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      icon: BarChart3,
      title: "模擬與分析",
      desc: "運用 Ansys、Flotherm 等專業軟體進行詳細的熱模擬與結構分析。在開模前預測潛在問題，大幅降低試錯成本。",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20"
    },
    {
      icon: Box,
      title: "原型製作",
      desc: "快速製作功能原型，進行實機測試與驗證。確保模擬結果與實際表現一致，並進行必要的微調。",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20"
    },
    {
      icon: Settings,
      title: "生產與製造",
      desc: "整合供應鏈資源，提供高品質、高效率的量產服務。從模具開發到組裝測試，我們嚴格把控每一個環節。",
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20"
    },
    {
      icon: Award,
      title: "品質與優化",
      desc: "持續追蹤產品質量，並根據市場反饋進行設計優化。我們致力於追求卓越，確保產品在生命週期內維持最佳效能。",
      color: "text-green-400",
      bg: "bg-green-500/10",
      border: "border-green-500/20"
    }
  ];

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
            解決方案
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-5 fade-in duration-700 delay-100">
            從概念到量產，我們提供一站式的熱管理服務，助您縮短開發週期並提升產品競爭力。
          </p>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-20 relative">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l border-white/10 ml-6 md:ml-10 space-y-16">
              {processSteps.map((step, index) => (
                <div key={index} className="relative pl-12 md:pl-16 group">
                  {/* Timeline Dot */}
                  <div className={`absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full ${step.bg.replace('/10', '')} ring-4 ring-background transition-all duration-500 group-hover:scale-150`} />
                  
                  <div className="flex flex-col md:flex-row gap-6 items-start p-6 rounded-xl border border-white/5 bg-card/30 hover:bg-card/50 transition-all duration-500 hover:border-white/10 hover:shadow-lg hover:-translate-y-1">
                    <div className={`p-3 rounded-lg ${step.bg} ${step.border} border shrink-0`}>
                      <step.icon className={`w-6 h-6 ${step.color}`} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-2xl mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24 bg-secondary/5 border-y border-white/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl mb-4">多元應用領域</h2>
            <p className="text-muted-foreground text-lg">我們的技術廣泛應用於各行各業，為不同場景提供定制化解決方案</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "消費性電子",
                items: ["筆記型電腦散熱", "智慧型手機散熱", "遊戲主機冷卻", "穿戴式裝置熱管理"],
                image: "/assets/thermal_module.jpg"
              },
              {
                title: "工業與通訊",
                items: ["伺服器機櫃散熱", "5G 基地台散熱", "工業電腦無風扇設計", "大功率電源散熱"],
                image: "/assets/thermal_analysis.jpg"
              },
              {
                title: "健康與生活",
                items: ["遠紅外線治療儀", "智慧保暖衣物", "健康寢具應用", "節能建築材料"],
                image: "/assets/far_infrared_tech.jpg"
              }
            ].map((app, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl border border-white/10 bg-card/50 hover:bg-card/80 transition-all duration-500">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={app.image} 
                    alt={app.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  <h3 className="absolute bottom-4 left-6 font-display font-bold text-2xl text-white">{app.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {app.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container relative z-10 max-w-3xl">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">尋找客製化解決方案？</h2>
          <p className="text-muted-foreground text-lg mb-8">
            每個專案都是獨一無二的。告訴我們您的需求，我們將為您量身打造最適合的熱管理方案。
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8">
              開始您的專案 <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
