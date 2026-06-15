import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, TrendingUp, Server, Radio, Cpu, Cog } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/hooks/useLanguage";

export default function CFDAnalysis() {
  const { currentLanguage } = useLanguage();
  const isEn = currentLanguage === 'en';

  const services = [
    {
      title: isEn ? "Virtual Verification, Precise Simulation" : "虛擬驗證，精準模擬",
      description: isEn ? "Using industry-leading Ansys and Flotherm analysis software, we perform comprehensive thermal-fluid simulation on product structures. Whether natural convection, forced air cooling, or liquid cooling systems, we can accurately compute in virtual environments to ensure simulation results closely match real physical conditions." : "採用業界頂尖的 Ansys 與 Flotherm 分析軟體，針對產品結構進行全方位的熱流場模擬。無論是自然對流、強制氣冷或液冷系統，我們都能在虛擬環境中精確運算，確保模擬結果高度貼近真實物理狀況。",
      icon: Target,
    },
    {
      title: isEn ? "Predict Issues, Prevent Problems" : "預判問題，防患未然",
      description: isEn ? "Don't wait until mass production to discover thermal bottlenecks. Our analysis services can identify potential hot spots and airflow dead zones in the early design stage, allowing engineering teams to adjust mechanical layouts and heat sink designs promptly, solving thermal management challenges at the source." : "別等到量產才發現散熱瓶頸。我們的分析服務能在設計初期識別潛在的熱堆積區域（Hot Spots）與氣流死角，讓工程團隊能即時調整機構佈局與散熱片設計，從源頭解決熱管理難題。",
      icon: Zap,
    },
    {
      title: isEn ? "Optimize Design, Enhance Performance" : "優化設計，提升效能",
      description: isEn ? "This is not just debugging, it's an upgrade. Through iterative analysis, we help you balance thermal performance, noise, and volume constraints, calculating optimal fin density, fan selection, and flow channel design, achieving perfect balance between performance and stability." : "這不僅是除錯，更是升級。透過迭代分析，我們協助您權衡散熱效能、噪音與體積限制，計算出最佳的鰭片密度、風扇選型與流道設計，讓您的產品在效能與穩定性之間取得完美平衡。",
      icon: TrendingUp,
    },
  ];

  const applications = [
    { name: isEn ? "Servers & Data Centers (HPC)" : "伺服器與資料中心 (HPC)", icon: Server },
    { name: isEn ? "5G/6G Communication Base Stations" : "5G/6G 通訊基地台", icon: Radio },
    { name: isEn ? "Automotive Electronics & EVs" : "車用電子與電動載具 (EV)", icon: Cpu },
    { name: isEn ? "Industrial PCs & Automation" : "工業電腦與自動化設備", icon: Cog },
  ];

  const advantages = [
    {
      title: isEn ? "Theory Meets Practice" : "理論與實務結合",
      description: isEn ? "We don't just provide software data — we also have extensive experience in manufacturing heat pipes and vapor chambers (VC), ensuring simulation solutions are 'manufacturable'." : "我們不僅提供軟體數據，更擁有豐富的實體熱管/均溫板 (VC) 製造經驗，確保模擬方案具備「可製造性」。",
    },
    {
      title: isEn ? "Rapid Response" : "快速回應",
      description: isEn ? "Efficient computation and report generation, aligned with your project timeline, accelerating time-to-market." : "高效率的運算與報告產出，配合您的專案時程，加速產品上市時間 (Time-to-Market)。",
    },
  ];

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
              <span className="text-xs font-mono text-primary tracking-wider">{isEn ? "CFD ANALYSIS SERVICES" : "CFD 分析服務"}</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight">
                {isEn ? "Precisely Predict" : "精準預測"} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
                  {isEn ? "Thermal Trajectories" : "熱能軌跡"}
                </span>
              </h1>
              <p className="text-xl text-primary font-semibold">{isEn ? "Implanting Efficient Thermal Genes into Your Products" : "為產品植入高效散熱基因"}</p>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed border-l-2 border-primary/30 pl-6">
              {isEn ? "Before your product enters mold manufacturing, we can already see the flow of thermal energy. Therlect uses advanced numerical simulation technology to visualize invisible airflow and temperature. We don't just find hot spots — we identify the optimal thermal dissipation paths, significantly shortening R&D cycles and reducing trial-and-error costs." : "在產品投入模具製造前，我們就能看見熱能的流動。汎海科技運用先進的數值模擬技術，將看不見的氣流與溫度視覺化。我們不只發現過熱點，更為您找出最佳的散熱路徑，大幅縮短研發週期，降低試錯成本。"}
            </p>

            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 group">
                {isEn ? "Contact Our Thermal Engineers" : "聯繫我們的熱工程專家"}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="relative hidden lg:block animate-in zoom-in-95 duration-1000 delay-300 fade-in">
            <div className="relative w-full aspect-square max-w-[600px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-full blur-[100px] animate-pulse-slow" />
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/DlTAnllrDsxXproZ.jpg"
                alt={isEn ? "CFD Thermal Flow Analysis Visualization" : "CFD 熱流分析可視化"}
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_50px_rgba(0,240,255,0.3)] rounded-2xl border border-white/10"
              loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                {isEn ? "Core Services" : "核心服務內容"}
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {isEn ? "Comprehensive thermal-fluid dynamics solutions from virtual verification to design optimization" : "從虛擬驗證到設計優化，全方位的熱流體動力學解決方案"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative p-8 rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
                  <div className="relative z-10 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-xl">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/ZCnqXtkKHPtJvXfJ.jpg"
            alt={isEn ? "Heat Sink Applications" : "散熱片應用"}
            className="w-full h-full object-cover opacity-20"
          loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background" />
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                {isEn ? "Application Fields" : "應用領域"}
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {isEn ? "Our analysis experience covers high heat generation and precision electronics" : "我們的分析經驗涵蓋高發熱量與精密電子領域"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => {
              const Icon = app.icon;
              return (
                <div
                  key={index}
                  className="group relative p-6 rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 text-center"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-semibold text-sm leading-tight">{app.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                {isEn ? "Our Advantages" : "我們的優勢"}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
                <div className="relative z-10 space-y-4">
                  <h3 className="font-display font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heat Pipe Visualization Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-[500px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-full blur-[100px] animate-pulse-slow" />
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/JwluzuxbkzvhpLvB.jpg"
                  alt={isEn ? "Heat Pipe Thermal Application" : "熱管散熱應用"}
                  className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_50px_rgba(0,240,255,0.3)] rounded-2xl border border-white/10"
                loading="lazy" decoding="async" />
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-4xl md:text-5xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                    {isEn ? "From Data to Reality" : "從數據到現實"}
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {isEn ? "Our CFD analysis doesn't just stay in the virtual world. Every simulation result corresponds to an actually manufacturable thermal solution. From heat pipe design, vapor chamber layout to airflow optimization, we ensure your product performs excellently not only in simulation but also withstands the test of the market." : "我們的 CFD 分析不只停留在虛擬世界。每一個模擬結果都對應著實際可製造的散熱方案。從熱管設計、均溫板佈局到風道優化，我們確保您的產品不僅在模擬中表現卓越，在市場上也能經受考驗。"}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-display font-bold text-2xl">{isEn ? "Rapid Iteration, Faster Time-to-Market" : "快速迭代，加速上市"}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {isEn ? "Traditional trial-and-error methods require multiple rounds of sample production and testing. Our CFD analysis lets you foresee problems and optimize solutions at the design stage, significantly shortening R&D cycles and getting your product to market faster." : "傳統的試錯法需要多輪樣品製作和測試。我們的 CFD 分析讓您在設計階段就能預見問題、優化方案，大幅縮短研發週期，讓您的產品更快搶佔市場。"}
                </p>
              </div>

              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-sm px-8 group">
                  {isEn ? "Start Your CFD Analysis Journey" : "開始您的 CFD 分析之旅"}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
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
              {isEn ? "Let Data Speak" : "讓數據說話"}
            </span>
            <br />
            {isEn ? "Build Cooler, More Powerful Performance" : "打造更冷靜的強大效能"}
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {isEn ? "Want to know where your product's thermal limits are? We're ready to use the most advanced analysis tools and rich engineering experience to safeguard your product design." : "想了解您的產品散熱極限在哪裡？我們準備好用最先進的分析工具和豐富的工程經驗，為您的產品設計保駕護航。"}
          </p>

          <Link href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-sm px-12 group mx-auto">
              {isEn ? "Contact Our Thermal Engineers" : "聯繫我們的熱工程專家"}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
