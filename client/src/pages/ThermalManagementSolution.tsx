import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Star, CheckCircle, DollarSign, Cpu, Server, Cog, Car, Heart, Radio } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function ThermalManagementSolution() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 via-blue-500/10 to-background" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        </div>

        <div className="container relative z-10 text-center space-y-8 max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono text-primary tracking-wider">THERMAL MANAGEMENT SOLUTIONS</span>
          </div>

          <h1 className="font-display font-bold text-5xl md:text-7xl leading-tight">
            熱管理<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              解決方案
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            為您的產品提供高效能的熱管理系統，從概念設計到大規模量產
          </p>

          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 group">
            了解更多
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* Overview Section with Image */}
      <section className="py-20 border-b border-primary/20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                完整的散熱<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  解決方案
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                汎海科技擁有多年的系統及品牌研發經驗，針對各種產品的散熱需求，提供量身訂製的高效率熱管理方案。
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                無論是消費電子、伺服器、工業設備或其他應用，我們都能提供最適合的解決方案。
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-2xl blur-3xl" />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/thermal-solution-overview-aHDkSumMgiJ9Hps5Zpzokp.webp"
                alt="熱管理解決方案"
                className="relative z-10 w-full rounded-2xl border border-primary/30 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-b border-primary/20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10">
              <span className="text-xs font-mono text-primary tracking-wider">核心優勢</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              為什麼選擇<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                汎海科技
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: "45%", label: "效能提升", icon: Zap, title: "高效能設計", desc: "採用最新的熱傳導技術，提升產品效能 45% 以上" },
              { stat: "99.8%", label: "客戶滿意度", icon: Star, title: "品質保證", desc: "嚴格的品質控制和測試，確保每個產品都符合標準" },
              { stat: "1000+", label: "成功案例", icon: CheckCircle, title: "豐富經驗", desc: "超過 1000 個成功的項目案例，涵蓋各個行業" },
              { stat: "30%", label: "成本節省", icon: DollarSign, title: "成本優化", desc: "通過優化設計，幫助客戶節省 30% 的製造成本" },
            ].map((feature, idx) => (
              <div key={idx} className="group relative p-6 rounded-lg border border-primary/20 bg-card/50 hover:border-primary/50 hover:bg-card/80 transition-all duration-300">
                <div className="mb-4">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-1">
                    {feature.stat}
                  </div>
                  <div className="text-xs text-muted-foreground">{feature.label}</div>
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center mb-4 group-hover:border-primary/50 transition-all">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Images */}
      <section className="py-20 border-b border-primary/20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10">
              <span className="text-xs font-mono text-primary tracking-wider">工作流程</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              我們的<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                工作流程
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              從初期諮詢到最終交付，我們提供全方位的支持
            </p>
          </div>

          <div className="space-y-12">
            {[
              { 
                step: "1", 
                title: "需求分析", 
                desc: "深入了解您的產品需求和應用場景，進行詳細的技術評估",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/process-step1-requirements-8yxRVC7MkfV4BeCvnBv48o.webp"
              },
              { 
                step: "2", 
                title: "方案設計", 
                desc: "根據需求設計最優的熱管理方案，包括 CFD 分析和模擬",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/process-step2-design-ETD297WAcnJGgj9jiBK4Jj.webp"
              },
              { 
                step: "3", 
                title: "原型製作", 
                desc: "製作原型並進行測試驗證，確保方案的可行性",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/process-step3-prototype-RM9BK92kLsF7c7VnQLvRXS.webp"
              },
              { 
                step: "4", 
                title: "量產支持", 
                desc: "提供完整的量產支持和技術指導，確保品質穩定",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/process-step4-production-WpMM2PcNuUyP4H7X2pkU3e.webp"
              },
              { 
                step: "5", 
                title: "售後服務", 
                desc: "持續的技術支持和改進建議，確保長期合作成功",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/process-step5-support-eTepo3WGqetGV6UB9KeC6S.webp"
              },
            ].map((process, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative p-6 rounded-lg border border-primary/20 bg-card/50 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full border-2 border-primary/50 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center font-bold text-white flex-shrink-0">
                        {process.step}
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold">{process.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-lg">{process.desc}</p>
                  </div>
                </div>
                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-2xl">
                    <img
                      src={process.image}
                      alt={process.title}
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section with Images */}
      <section className="py-20 border-b border-primary/20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10">
              <span className="text-xs font-mono text-primary tracking-wider">應用領域</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              適用於<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                多個產業領域
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              我們的解決方案已被廣泛應用於各個行業，為全球客戶提供卓越的熱管理服務
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                icon: Cpu, 
                title: "消費電子", 
                desc: "為筆記本電腦、手機、平板等消費電子產品提供高效散熱方案",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/app-consumer-electronics-jUBEXyDbSY2rKk97wDboaX.webp"
              },
              { 
                icon: Server, 
                title: "伺服器系統", 
                desc: "為數據中心和伺服器提供企業級的熱管理解決方案",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/app-server-systems-Uzs6rDBZ9XhvPgxUA2bUTB.webp"
              },
              { 
                icon: Cog, 
                title: "工業設備", 
                desc: "為工業設備和機械提供可靠的散熱系統設計",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/app-industrial-equipment-imKiarzufvMAmcxEW6E3zg.webp"
              },
              { 
                icon: Car, 
                title: "汽車電子", 
                desc: "為汽車電子控制系統提供高溫環境下的熱管理方案",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/app-automotive-electronics-mTw8Gm6sGFbBrEzGVKiNdq.webp"
              },
              { 
                icon: Heart, 
                title: "醫療設備", 
                desc: "為醫療設備提供精密的溫度控制和散熱解決方案",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/app-medical-devices-mssFVLsmsT22ivqNAbp8xY.webp"
              },
              { 
                icon: Radio, 
                title: "通訊設備", 
                desc: "為 5G 基站和通訊設備提供高效的熱管理系統",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/app-communication-equipment-7C6CmUoX8TjvdHcj5BTzkA.webp"
              },
            ].map((app, idx) => (
              <div key={idx} className="group rounded-lg border border-primary/20 bg-card/50 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:border-primary/50 transition-all">
                    <app.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{app.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{app.desc}</p>
                  <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                    <span>了解更多</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-b border-primary/20">
        <div className="container max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            準備好優化<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              您的熱管理方案
            </span>
            了嗎？
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            聯絡我們的專家團隊，為您的產品找到最完美的散熱解決方案
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 group">
            立即諮詢
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
