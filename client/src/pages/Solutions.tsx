import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Settings, PenTool, BarChart3, Box, Award, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import React from "react";

export default function Solutions() {
  const [expandedDomain, setExpandedDomain] = React.useState<string | null>(null);

  const processSteps = [
    {
      icon: PenTool,
      title: "概念與設計",
      shortDesc: "根據客戶需求進行初步熱評估，提出多種可行的散熱方案。",
      fullDesc: "在專案初期，我們深入分析您的產品特性、應用場景與性能需求。通過詳細的熱評估，識別潛在的熱管理瓶頸。我們考量空間限制、成本預算、製造工藝與效能目標，為您規劃多個可行方案。每個方案都經過初步驗證，確保技術可行性與經濟合理性。我們的設計團隊將與您密切合作，選定最優方案作為後續開發的基礎。",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/solution-concept-design-efapdzoNfAtZR5YiUiXEmp.webp",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      icon: BarChart3,
      title: "模擬與分析",
      shortDesc: "運用專業軟體進行詳細的熱模擬與結構分析，預測潛在問題。",
      fullDesc: "利用 Ansys、Flotherm 等業界領先的模擬軟體，我們進行多物理場耦合分析。通過三維熱流分析（CFD），精確預測溫度分佈、流場特性與熱應力。結合結構有限元分析（FEA），評估材料應力與變形。在開模前全面驗證設計，大幅降低試錯成本與開發週期。模擬結果包括詳細報告與可視化分析，為後續決策提供科學依據。",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/solution-simulation-analysis-Rn2foMtm5DEkjiLoAyqXC5.webp",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20"
    },
    {
      icon: Box,
      title: "原型製作",
      shortDesc: "快速製作功能原型，進行實機測試與驗證結果準確性。",
      fullDesc: "基於優化設計，我們快速製作功能原型進行實驗驗證。通過精密測試設備（紅外熱像儀、溫度傳感器陣列），採集真實工況下的溫度數據。對比模擬結果與實測數據，驗證模型準確性。若發現偏差，我們進行根因分析並優化模型參數。原型測試涵蓋常溫、高溫、低溫等多種工況，確保產品在全工作範圍內表現穩定。",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/solution-prototype-testing-78jHJTmMvZwbpHDXrPXccA.webp",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20"
    },
    {
      icon: Settings,
      title: "生產與製造",
      shortDesc: "整合供應鏈資源，提供高品質、高效率的量產服務。",
      fullDesc: "我們與全球優質供應商建立長期合作關係，確保原材料穩定供應。從精密模具開發、注塑成型、機械加工到組裝測試，每個環節都遵循嚴格的質量標準。採用先進的自動化設備與工藝，提高生產效率與產品一致性。建立完善的物流體系，確保及時交付。我們可根據訂單量提供靈活的生產方案，從小批量試產到大規模量產。",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/solution-production-manufacturing-9MjHz5Ehra55U55Wp959pL.webp",
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20"
    },
    {
      icon: Award,
      title: "品質與優化",
      shortDesc: "持續追蹤產品質量，根據市場反饋進行設計優化。",
      fullDesc: "產品上市後，我們建立完整的品質追蹤機制。通過客戶反饋、現場測試與長期可靠性驗證，識別改進空間。根據實際運行數據與市場需求變化，進行持續的設計優化。優化內容包括材料選擇、工藝改進、成本降低與性能提升。我們致力於追求卓越，確保產品在整個生命週期內維持最佳效能與競爭力。定期提供技術支援與升級方案。",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/solution-quality-optimization-nF48UjT7wHtG4mTN7CmQjh.webp",
      color: "text-green-400",
      bg: "bg-green-500/10",
      border: "border-green-500/20"
    }
  ];

  const applicationDomains = [
    {
      title: "消費性電子",
      description: "在消費性電子領域，我們專注於解決筆記型電腦、智慧型手機、遊戲主機和穿戴式裝置的散熱挑戰。隨著電子產品功能的不斷升級，發熱量也隨之增加。我們通過創新的散熱設計、高效能材料選擇和精密的熱流模擬，確保產品在高性能運行時保持最佳溫度。我們的解決方案不僅提升了產品的穩定性和壽命，還改善了用戶體驗。",
      detailedContent: "消費性電子產品對散熱效能要求日益嚴格。我們針對不同產品類型提供客製化方案：\n\n• 筆記型電腦：採用高效能散熱模組，確保長時間運行不降頻\n• 智慧型手機：超薄液冷設計，在有限空間內實現最大散熱效能\n• 遊戲主機：多層散熱架構，支持高性能遊戲長時間運行\n• 穿戴式裝置：輕量化散熱方案，兼顧舒適度與效能\n\n我們的解決方案已應用於全球知名消費電子品牌，幫助他們提升產品競爭力。",
      items: ["筆記型電腦散熱", "智慧型手機散熱", "遊戲主機冷卻", "穿戴式裝置熱管理"],
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/HDbcUTVMVfBSqLfR.png"
    },
    {
      title: "無人載具",
      description: "無人機、無人車等無人載具在高性能運行時產生大量熱量。我們提供專業的熱管理解決方案，確保無人載具在長時間飛行或行駛時保持穩定的性能。通過優化散熱設計和材料選擇，我們幫助客戶延長續航時間、提升安全性和可靠性。",
      detailedContent: "無人載具的熱管理直接影響續航能力和安全性。我們提供全面的解決方案：\n\n**無人機系列：**\n• 消費級無人機：輕量化散熱設計，最大化續航時間\n• 工業級無人機：高負載散熱方案，支持長時間作業\n• 無人直升機：複雜熱管理系統，適應多種工況\n\n**無人車系列：**\n• 自動駕駛車輛：高效能電池冷卻系統，確保長時間行駛\n• 物流配送車：穩定的動力系統溫控\n• 特種無人車：極端環境適應性\n\n**核心系統：**\n• 飛行控制系統：精密溫控，保證飛行穩定性\n• 動力電池：專業熱管理模組，延長電池壽命\n• 通訊模組：高可靠性散熱設計\n\n我們的技術已成功應用於多家無人載具製造商，顯著提升了產品性能和續航能力。",
      items: ["無人機散熱", "無人車電池冷卻", "飛行控制系統溫控", "動力電池熱管理"],
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/rQWAiVQhssZTmvbh.png"
    },
    {
      title: "穿戴式產品",
      description: "智慧眼鏡與 AR/VR 穿戴設備代表了下一代計算平台，對散熱技術提出了前所未有的挑戰。我們專門為智慧眼鏡開發了創新的散熱解決方案，在極限的空間限制下實現高效能散熱。通過先進的導熱材料與精密的熱管理設計，確保設備在長時間佩戴中保持舒適溫度，同時不影響產品的輕薄美觀外形。",
      detailedContent: "智慧眼鏡的散熱挑戰獨特而複雜。我們的專業解決方案包括：\n\n**AR/VR 眼鏡散熱系統：**\n• 隱形散熱設計：將散熱模組集成於眼鏡框架，保持產品美觀\n• 導熱路徑優化：利用眼鏡材料本身進行熱傳導，提高散熱效率\n• 低溫工作環境：確保眼鏡貼近皮膚時保持舒適溫度\n• 輕量化設計：散熱模組重量控制在克級，不增加佩戴負擔\n\n**核心技術特點：**\n• 精密的熱管理芯片，實時監測溫度分佈\n• 採用高導熱係數的複合材料\n• 創新的微流道散熱技術\n• 低功耗冷卻方案，不影響電池續航\n\n我們的創新技術已成功應用於多款商用 AR/VR 眼鏡，為用戶提供舒適的長時間佩戴體驗。",
      items: ["AR/VR 眼鏡散熱", "智慧眼鏡溫控", "穿戴式設備冷卻", "導熱模組設計"],
      images: ["https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/fxMQvLvpAagqRLpQ.png", "https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/KrFBaqwhQoUtisZY.png", "https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/FFaKfehtFLyjyDEE.png"],
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/fxMQvLvpAagqRLpQ.png"
    },
    {
      title: "工業與通訊",
      description: "工業與通訊領域對熱管理的要求最為嚴苛。伺服器機櫃、5G 基地台、工業電腦和大功率電源等設備需要在高溫、高濕、高塵環境下長期穩定運行。我們提供企業級的散熱解決方案，包括無風扇設計、液冷系統和模組化散熱器。這些方案不僅提高了設備的可靠性，還降低了運營成本和能耗。",
      detailedContent: "工業與通訊領域要求 24/7 不間斷運行，熱管理至關重要。我們的企業級解決方案包括：\n\n• 伺服器機櫃：高密度散熱設計，支持大規模部署\n• 5G 基地台：極端環境適應性，確保信號穩定\n• 工業電腦：無風扇設計，降低故障率與維護成本\n• 大功率電源：高效散熱，提升能源轉換效率\n\n我們的方案已應用於全球數據中心和通訊基礎設施。",
      items: ["伺服器機櫃散熱", "5G 基地台散熱", "工業電腦無風扇設計", "大功率電源散熱"],
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/LvFKRTfSfppXIELk.png"
    },

    {
      title: "汽車與航空",
      description: "汽車與航空領域的熱管理需求涉及極端條件。電動車電池散熱、航空發動機冷卻系統、飛行器電子設備溫控等應用對可靠性和性能要求極高。我們提供針對性的解決方案，包括高效能散熱模組、先進的材料應用和創新的設計理念。這些方案幫助客戶實現更高的效率、更長的使用壽命和更優的安全性能。",
      detailedContent: "汽車與航空領域對可靠性要求最高，熱管理直接關係安全性。我們的專業方案包括：\n\n• 電動車電池：高效散熱確保電池壽命與安全性\n• 航空發動機：極限條件下的冷卻系統設計\n• 飛行器電子設備：輕量化高效能溫控方案\n• 汽車電子：車規級可靠性認證\n\n我們的技術已通過汽車與航空業最嚴格的認證標準。",
      items: ["電動車電池散熱", "飛行器溫控系統", "汽車電子散熱"],
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/ysyjWvyCbWODpzzb.png"
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

      {/* Process Timeline Section with Images */}
      <section className="py-20 relative">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot and Line */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full ${step.bg.replace('/10', '')} ring-4 ring-background`} />
                    {index < processSteps.length - 1 && (
                      <div className="w-0.5 h-32 bg-gradient-to-b from-white/20 to-transparent mt-4" />
                    )}
                  </div>

                  {/* Content Card with Image */}
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center pl-16 md:pl-0`}>
                    {/* Text Content */}
                    <div className="flex-1">
                      <div className="p-6 rounded-xl border border-white/5 bg-card/30 hover:bg-card/50 transition-all duration-500 hover:border-white/10 hover:shadow-lg">
                        <div className={`inline-flex items-center justify-center p-3 rounded-lg ${step.bg} ${step.border} border mb-4`}>
                          <step.icon className={`w-6 h-6 ${step.color}`} />
                        </div>
                        <h3 className="font-display font-bold text-2xl mb-3 text-foreground">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{step.fullDesc}</p>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="flex-1">
                      <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                          style={{ contentVisibility: 'auto' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section - Enhanced with Images */}
      <section className="py-24 bg-secondary/5 border-y border-white/5">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-4xl mb-4">多元應用領域</h2>
            <p className="text-muted-foreground text-lg mb-4">我們的分析經驗涵蓋高發熱量與精密電子領域</p>
            <p className="text-muted-foreground text-base max-w-3xl mx-auto leading-relaxed">Therlect 汎海科技擁有超過7年的熱管理經驗，在消費性電子、工業通訊、健康與生活、汽車與航空等多個領域積累了豐富的技術知識與成功案例。我們的解決方案已廣汎應用於全球知名企業，幫助他們解決複雜的熱管理挑戰，提升產品性能與市場競爭力。</p>
          </div>

          <div className="space-y-24">
            {applicationDomains.map((app, i) => {
              const isExpanded = expandedDomain === app.title;
              return (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                {/* Text Content */}
                <div className="flex-1">
                  <div className="space-y-4">
                    <button
                      onClick={() => setExpandedDomain(isExpanded ? null : app.title)}
                      className="w-full text-left group hover:opacity-80 transition-opacity"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-display font-bold text-3xl text-foreground group-hover:text-primary transition-colors">{app.title}</h3>
                        <ChevronDown className={`w-6 h-6 text-primary transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                      </div>
                    </button>
                    <p className="text-muted-foreground leading-relaxed text-base">{app.description}</p>
                    
                    {/* Expandable Detailed Content */}
                    {isExpanded && app.detailedContent && (
                      <div className="mt-6 p-6 bg-primary/10 rounded-lg border border-primary/20 animate-in fade-in duration-300">
                        <p className="text-foreground leading-relaxed whitespace-pre-line">{app.detailedContent}</p>
                        <Link href="/contact">
                          <Button size="sm" className="mt-4 bg-primary hover:bg-primary/90 text-white rounded-sm">
                            了解更多 <ArrowRight className="ml-2 w-3 h-3" />
                          </Button>
                        </Link>
                      </div>
                    )}
                    
                    <div className="pt-4">
                      <h4 className="font-semibold text-foreground mb-3">主要應用領域：</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {app.items.map((item, j) => (
                          <div key={j} className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image or Images Gallery */}
                <div className="flex-1">
                  {app.images && app.images.length > 1 ? (
                    <div className="grid grid-cols-3 gap-4">
                      {app.images.map((imgSrc, imgIdx) => (
                        <div key={imgIdx} className="relative overflow-hidden rounded-xl border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 group">
                          <img 
                            src={imgSrc} 
                            alt={`${app.title} - ${imgIdx + 1}`}
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 aspect-square"
                            loading="lazy"
                            decoding="async"
                            style={{ contentVisibility: 'auto' }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                      <img 
                        src={app.image} 
                        alt={app.title}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                        style={{ contentVisibility: 'auto' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  )}
                </div>
              </div>
            );
            })}
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
