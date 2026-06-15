import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Layers, TrendingUp, Cpu, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";

export default function ThermalModuleDesign() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const { currentLanguage } = useLanguage();
  const isEn = currentLanguage === 'en';

  const advantages = [
    {
      title: isEn ? "Compact Structure Design" : "結構緊湊設計",
      subtitle: "Compact Design",
      description: isEn ? "For space-constrained products (such as AI servers, mobile devices), we use 3D stacking and heterogeneous material bonding technology to achieve maximum heat dissipation area in minimal volume, solving high-density heat flux problems." : "針對空間受限的產品（如 AI 伺服器、行動裝置），我們利用 3D 堆疊與異質材料結合技術，在極小體積內實現最大散熱面積，解決高密度熱通量問題。",
      icon: Layers,
    },
    {
      title: isEn ? "High-Efficiency Heat Transfer" : "高效熱傳導技術",
      subtitle: "High Efficiency",
      description: isEn ? "Integrating heat pipes, vapor chambers (VC) and other phase-change components, and using Ansys/Flotherm professional thermal-fluid software for CFD simulation to ensure optimal thermal performance before tooling." : "整合熱管 (Heat Pipe)、均溫板 (Vapor Chamber) 等相變化元件，並透過 Ansys/Flotherm 專業熱流軟體進行 CFD 模擬，確保在開模前即達到最佳散熱效能。",
      icon: Zap,
    },
    {
      title: isEn ? "Cost & Mass Production Optimization" : "成本與量產優化",
      subtitle: "Cost Optimization",
      description: isEn ? "Incorporating DFM (Design for Manufacturing) thinking from the early design stage, considering process feasibility and material costs to provide the most market-competitive and high-quality mass production solutions." : "導入 DFM (Design for Manufacturing) 設計思維，在設計初期即考量製程可行性與材料成本，提供最具市場競爭力且高品質的量產方案。",
      icon: TrendingUp,
    },
    {
      title: isEn ? "Highly Customized" : "高度客製化",
      subtitle: "Customization",
      description: isEn ? "Whether for consumer electronics, automotive electronics, or industrial equipment, we can provide flexible and precise thermal solutions based on your specific specifications and application scenarios." : "無論是消費性電子、車用電子或工業設備，我們均能根據您的特定規格與應用場景，提供靈活且精準的散熱解決方案。",
      icon: Cpu,
    },
  ];

  const thermalModules = [
    {
      id: 1,
      title: isEn ? "Compact Structure Design" : "結構緊湊設計",
      subtitle: "Compact Thermal Module Design",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/MyEwSFodKSUeNKCQ.png",
      description: isEn ? "Designing efficient, low-cost, and compact customized thermal modules for different product needs." : "針對不同產品需求，設計高效、低成本且結構緊湊的客製化散熱模組。",
      details: isEn ? "Our compact design solutions are specifically for space-constrained high-end applications. Through 3D stacking technology and heterogeneous material bonding, we maximize heat dissipation surface area while minimizing volume. Using advanced heat pipe and vapor chamber technology to ensure uniform heat distribution. Every design is verified through CFD simulation to ensure optimal performance before tooling. Our team has over 15 years of experience and has provided over 500+ successful cases for top global technology companies." : "我們的結構緊湊設計方案專門針對空間受限的高端應用。通過 3D 堆疊技術和異質材料結合，在最小化體積的同時最大化散熱表面積。採用先進的熱管 (Heat Pipe) 和均溫板 (Vapor Chamber) 技術，確保熱量均勻分佈。每個設計都經過 CFD 模擬驗證，在開模前即確保最佳效能。我們的團隊擁有超過 15 年的經驗，已為全球頂級科技企業提供超過 500+ 個成功案例。",
      applications: isEn ? ["AI Server Cooling", "Mobile Device Cooling", "High-Density Electronic Modules", "Edge Computing Devices"] : ["AI 伺服器散熱", "行動裝置冷卻", "高密度電子模組", "邊緣計算設備"],
    },
    {
      id: 2,
      title: isEn ? "Advanced Heat Transfer Technology" : "高效熱傳導技術",
      subtitle: "Advanced Heat Transfer Technology",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/zxdoYDAnpfMYXdUs.png",
      description: isEn ? "Using phase-change components and CFD simulation to achieve optimized heat transfer performance." : "利用相變化元件與 CFD 模擬，實現最優化的熱傳導效能。",
      details: isEn ? "Our advanced heat transfer technology integrates the industry's most cutting-edge phase-change components. Through heat pipe capillary action and vapor chamber phase-change mechanisms, we achieve ultra-high-efficiency heat conduction. Using Ansys, Flotherm and other professional software for multi-physics coupled analysis to precisely predict temperature distribution and flow field characteristics. Our CFD simulation accuracy exceeds 95%, significantly reducing trial-and-error costs. Each design solution includes detailed thermal analysis reports and visualization results to provide scientific basis for your decisions." : "我們的高效熱傳導技術整合了業界最先進的相變化元件。通過熱管 (Heat Pipe) 的毛細作用和均溫板 (Vapor Chamber) 的相變化機制，實現超高效的熱傳導。採用 Ansys、Flotherm 等專業軟體進行多物理場耦合分析，精確預測溫度分佈和流場特性。我們的 CFD 模擬準確度達 95% 以上，大幅降低試錯成本。每個設計方案都包含詳細的熱分析報告和可視化結果，為您的決策提供科學依據。",
      applications: isEn ? ["Heat Pipe Design Optimization", "Vapor Chamber Applications", "CFD Thermal Analysis", "Multi-Physics Coupled Analysis"] : ["熱管設計優化", "均溫板應用", "CFD 熱流分析", "多物理場耦合分析"],
    },
    {
      id: 3,
      title: isEn ? "Cost & Manufacturing Optimization" : "成本與量產優化",
      subtitle: "Manufacturing & Cost Optimization",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/AdrtsymfOIFqRAzp.png",
      description: isEn ? "Incorporating DFM thinking to ensure design manufacturability and cost-effectiveness." : "導入 DFM 思維，確保設計的製造可行性與成本效益。",
      details: isEn ? "Our cost and mass production optimization solution considers process feasibility from the early design stage. By incorporating DFM (Design for Manufacturing) thinking, we maximize cost-effectiveness while ensuring thermal performance. We have established long-term partnerships with premium global suppliers to ensure stable raw material supply. From precision mold development, injection molding, machining to assembly testing, every step follows strict quality standards. Using advanced automation equipment and processes to improve production efficiency and product consistency. We can provide flexible production plans based on order volume, from small-batch trial production to large-scale mass production." : "我們的成本與量產優化方案從設計初期就考慮製程可行性。導入 DFM (Design for Manufacturing) 設計思維，在保證散熱效能的同時，最大化成本效益。與全球優質供應商建立長期合作關係，確保原材料穩定供應。從精密模具開發、注塑成型、機械加工到組裝測試，每個環節都遵循嚴格的質量標準。採用先進的自動化設備與工藝，提高生產效率與產品一致性。我們可根據訂單量提供靈活的生產方案，從小批量試產到大規模量產。",
      applications: isEn ? ["Mold Development Design", "Process Feasibility Analysis", "Cost Reduction Solutions", "Mass Production Quality Control"] : ["模具開發設計", "製程可行性分析", "成本降低方案", "量產品質控制"],
    },
    {
      id: 4,
      title: isEn ? "Highly Customized Solutions" : "高度客製化解決方案",
      subtitle: "Customized Thermal Solutions",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/JnhWyeooMRsJwZCV.png",
      description: isEn ? "Providing flexible and precise customized thermal solutions based on your specific needs." : "根據您的特定需求，提供靈活且精準的客製化散熱解決方案。",
      details: isEn ? "We provide fully customized thermal solutions for the special needs of different fields including consumer electronics, automotive electronics, and industrial equipment. Each project is deeply analyzed by an experienced engineering team, considering your product characteristics, application scenarios, performance requirements, and cost budget. Our design solutions not only meet current needs but also reserve space for future upgrades. We provide complete technical documentation, design drawings, and manufacturing guides. Long-term technical support and upgrade plans ensure your product maintains optimal performance throughout its lifecycle." : "我們提供完全客製化的散熱解決方案，針對消費性電子、車用電子、工業設備等不同領域的特殊需求。每個項目都由經驗豐富的工程團隊進行深入分析，考慮您的產品特性、應用場景、性能需求和成本預算。我們的設計方案不僅滿足當前需求，還預留了未來升級空間。提供完整的技術文檔、設計圖紙和製造指南。長期技術支援和升級方案確保您的產品在整個生命週期內保持最佳效能。",
      applications: isEn ? ["Consumer Electronics", "Automotive Electronics", "Industrial Equipment"] : ["消費性電子", "車用電子", "工業設備"],
    },
  ];

  const processSteps = [
    { step: "01", title: isEn ? "Requirements Analysis & Assessment" : "需求分析與評估", description: isEn ? "In-depth understanding of your product characteristics, application scenarios, and thermal needs for initial thermal design assessment." : "深入了解您的產品特性、應用場景與散熱需求，進行初期的熱設計評估。" },
    { step: "02", title: isEn ? "Thermal Simulation & Optimization" : "熱模擬與優化", description: isEn ? "Using CFD analysis software for detailed thermal-fluid simulation and providing multiple design options." : "運用 CFD 分析軟體進行詳細的熱流場模擬，並提供多個設計方案供選擇。" },
    { step: "03", title: isEn ? "Design Verification & Improvement" : "設計驗證與改進", description: isEn ? "Optimizing design based on simulation results to ensure perfect balance between thermal performance and manufacturability." : "根據模擬結果進行設計優化，確保散熱效能與製造可行性的完美平衡。" },
    { step: "04", title: isEn ? "Prototype Production & Testing" : "樣品製作與測試", description: isEn ? "Creating prototypes and conducting actual thermal testing to verify design accuracy and reliability." : "製作樣品並進行實際熱測試，驗證設計的準確性與可靠性。" },
    { step: "05", title: isEn ? "Mass Production Preparation & Support" : "量產準備與支持", description: isEn ? "Assisting clients with mold development, process optimization, and quality control to ensure smooth mass production." : "協助客戶完成模具開發、製程優化與品質控制，確保量產順利進行。" },
  ];

  const industries = isEn
    ? ["AI Servers", "Automotive Electronics", "Industrial Equipment", "Semiconductor Equipment", "AI Chip Testing"]
    : ["AI 伺服器", "車用電子", "工業設備", "半導體設備", "AI 晶片測試"];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in slide-in-from-left-10 duration-1000 fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono text-primary tracking-wider">{isEn ? "THERMAL MODULE DESIGN SERVICES" : "散熱模組設計服務"}</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight">
                {isEn ? "High-Performance" : "高效能"} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
                  {isEn ? "Thermal Module Design" : "散熱模組設計"}
                </span>
              </h1>
              <p className="text-xl text-primary font-semibold">Advanced Thermal Module Design & Optimization</p>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed border-l-2 border-primary/30 pl-6">
              {isEn ? "Facing the trend of increasingly thin and high-performance electronic products, Therlect provides comprehensive services from thermal simulation analysis to module mass production. For different industry needs, we are committed to designing customized modules that balance thermal efficiency and cost advantages, helping clients break through thermal design bottlenecks." : "面對電子產品日益輕薄化與高效能化的趨勢，汎海科技提供從熱模擬分析到模組量產的全方位服務。針對不同產業需求，我們致力於設計出兼具散熱效率與成本優勢的客製化模組，協助客戶突破熱設計瓶頸。"}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 group">
                  {isEn ? "Book Thermal Consultation" : "預約熱管理諮詢"}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/solutions">
                <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 hover:text-primary rounded-sm px-8">
                  {isEn ? "View Success Cases" : "了解更多成功案例"}
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block animate-in zoom-in-95 duration-1000 delay-300 fade-in">
            <div className="relative w-full aspect-square max-w-[600px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-full blur-[100px] animate-pulse-slow" />
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/FcttGesqhzGlYqqY.jpg"
                alt={isEn ? "High-Performance Thermal Module Design" : "高效能散熱模組設計"}
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_50px_rgba(0,240,255,0.3)] rounded-2xl border border-white/10"
              loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* Thermal Module Design Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                {isEn ? "Thermal Module Solutions" : "散熱模組設計方案"}
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {isEn ? "Designing efficient, low-cost, and compact customized thermal modules for different product needs" : "針對不同產品需求，設計高效、低成本且結構緊湊的客製化散熱模組"}
            </p>
          </div>

          <div className="space-y-12">
            {thermalModules.map((module, index) => (
              <div key={module.id} className="group">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:grid-cols-2 lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative overflow-hidden rounded-lg border border-primary/20 group-hover:border-primary/50 transition-all duration-300">
                    <img src={module.image} alt={module.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" decoding="async" />
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <p className="text-sm text-primary font-mono tracking-wider uppercase">{module.subtitle}</p>
                      <h3 className="font-display font-bold text-3xl text-foreground">{module.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{module.description}</p>

                    <div className="space-y-4">
                      <button
                        onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                        className="flex items-center gap-2 text-primary hover:text-cyan-400 transition-colors font-semibold group/btn"
                      >
                        <span>{expandedModule === module.id ? (isEn ? "Collapse" : "收起詳細內容") : (isEn ? "Learn More" : "了解更多")}</span>
                        {expandedModule === module.id ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>

                      {expandedModule === module.id && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                          <p className="text-muted-foreground leading-relaxed border-l-2 border-primary/30 pl-4">{module.details}</p>
                          <div className="space-y-3">
                            <p className="text-sm font-semibold text-foreground">{isEn ? "Key Application Areas:" : "主要應用領域："}</p>
                            <div className="grid grid-cols-2 gap-3">
                              {module.applications.map((app, idx) => (
                                <div key={idx} className="flex items-center gap-2 p-3 rounded-lg bg-primary/5 border border-primary/20 hover:border-primary/50 transition-all">
                                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600" />
                                  <span className="text-sm text-foreground">{app}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <Link href="/contact">
                      <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-sm px-6 group/btn">
                        {isEn ? "Inquire About This Solution" : "諮詢此方案"}
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
                {index < thermalModules.length - 1 && (
                  <div className="mt-12 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Advantages Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                {isEn ? "Core Advantages" : "核心優勢"}
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {isEn ? "Comprehensive thermal module solutions from design optimization to mass production" : "從設計優化到量產實現，全方位的散熱模組解決方案"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div key={index} className="group relative p-8 rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 overflow-hidden">
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <h3 className="font-display font-bold text-xl">{advantage.title}</h3>
                        <p className="text-sm text-primary font-mono">{advantage.subtitle}</p>
                      </div>
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                {isEn ? "Complete Service Process" : "完整的服務流程"}
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {isEn ? "From initial consultation to mass production delivery, we provide full support" : "從初期諮詢到量產交付，我們提供全程支持"}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {processSteps.map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600">
                      <span className="text-white font-bold text-sm">{item.step}</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-display font-bold text-lg text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Industries Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                {isEn ? "Application Industries" : "應用產業"}
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {isEn ? "Our thermal module design experience covers multiple high-tech industries" : "我們的散熱模組設計經驗涵蓋多個高科技產業"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative p-6 rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 flex items-center justify-center min-h-[120px]">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/rvzHrwSXLQkRaKxO.jpg" alt="FOXCONN" className="max-h-16 max-w-full object-contain" loading="lazy" decoding="async" />
            </div>
            {industries.map((industry, index) => (
              <div key={index + 1} className="group relative p-6 rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 text-center">
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        </div>

        <div className="container relative z-10 text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-4xl md:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              {isEn ? "Ready to Break Through Thermal Design Bottlenecks?" : "準備好突破熱設計瓶頸嗎？"}
            </span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {isEn ? "No matter what thermal challenges your product faces, Therlect has an experienced engineering team ready to provide you with the most optimized solutions." : "無論您的產品面臨什麼散熱挑戰，汎海科技都有經驗豐富的工程團隊準備為您提供最優化的解決方案。"}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-sm px-8 group">
                {isEn ? "Book Thermal Consultation" : "預約熱管理諮詢"}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/solutions">
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 hover:text-primary rounded-sm px-8">
                {isEn ? "View Success Cases" : "了解更多成功案例"}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
