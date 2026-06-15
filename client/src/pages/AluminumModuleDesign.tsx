import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Layers, TrendingUp, Cpu, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AluminumModuleDesign() {
  const { language } = useLanguage();
  const t = (zh: string, en: string) => language === "en" ? en : zh;
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [expandedOption, setExpandedOption] = useState<number | null>(null);

  const advantages = [
    {
      title: t("精密工程設計", "Precision Engineering"),
      subtitle: "Precision Engineering",
      description: t(
        "採用高精度 CAD 設計與 FEA 應力分析，確保鋁合金模組的結構穩定性與散熱效能。",
        "Utilizing high-precision CAD design and FEA stress analysis to ensure structural stability and thermal performance of aluminum modules."
      ),
      icon: Layers,
    },
    {
      title: t("輕量化結構", "Lightweight Design"),
      subtitle: "Lightweight Design",
      description: t(
        "利用鋁合金的高導熱係數與低密度特性，實現輕量化且高效能的散熱模組。",
        "Leveraging aluminum alloy's high thermal conductivity and low density to achieve lightweight, high-performance heat dissipation modules."
      ),
      icon: Zap,
    },
    {
      title: t("成本優化", "Cost Efficiency"),
      subtitle: "Cost Efficiency",
      description: t(
        "導入先進製造工藝，降低生產成本同時保證品質，提供最具競爭力的解決方案。",
        "Implementing advanced manufacturing processes to reduce production costs while maintaining quality, delivering the most competitive solutions."
      ),
      icon: TrendingUp,
    },
    {
      title: t("客製化方案", "Customization"),
      subtitle: "Customization",
      description: t(
        "根據筆記本電腦的特定規格與散熱需求，提供完全客製化的鋁合金模組設計。",
        "Providing fully customized aluminum module designs based on specific laptop specifications and thermal requirements."
      ),
      icon: Cpu,
    },
  ];

  const designOptions = [
    {
      id: 1,
      title: t("鋁合金模組設計方案", "Aluminum Module Design Solution"),
      subtitle: "Aluminum Module Design Solution",
      description: t(
        "針對不同的產品需求，設計高效、滿足且結構緊湊的客製化筆記本模組。",
        "Designing efficient, compact, and customized laptop modules tailored to different product requirements."
      ),
      details: t(
        "我們的鋁合金模組設計方案是針對現代筆記本電腦散熱需求而開發的完整解決方案。從初期的熱分析評估、CAD 設計、FEA 應力分析，到最終的製造工藝指導與品質驗證，我們提供全流程的專業服務。每個設計方案都經過嚴格的 CFD 模擬與實驗驗證，確保在實際應用中達到預期的散熱效能。我們的設計團隊與全球頂級筆記本製造商合作，累積了超過 500+ 個成功案例。無論您需要超薄筆電、高性能遊戲本還是工作站級散熱方案，我們都能提供最優化的鋁合金模組設計。",
        "Our aluminum module design solution is a comprehensive solution developed for modern laptop thermal management needs. From initial thermal analysis evaluation, CAD design, FEA stress analysis, to final manufacturing process guidance and quality verification, we provide full-process professional services. Each design undergoes rigorous CFD simulation and experimental verification to ensure expected thermal performance in real applications. Our design team collaborates with top global laptop manufacturers, accumulating over 500+ successful cases. Whether you need ultra-thin laptops, high-performance gaming notebooks, or workstation-grade thermal solutions, we can provide the most optimized aluminum module design."
      ),
      highlights: language === "en" ? [
        "Precision CAD Design & FEA Analysis",
        "Industry-leading CFD Simulation",
        "Perfect Balance of Lightweight & Performance",
        "Fully Customized Solutions",
        "Rapid Prototyping & Verification",
        "Global Manufacturing Support"
      ] : [
        "精密 CAD 設計與 FEA 分析",
        "業界領先的 CFD 模擬技術",
        "輕量化與高效能完美平衡",
        "完全客製化解決方案",
        "快速原型製作與驗證",
        "全球製造工藝支援"
      ]
    }
  ];

  const aluminumModules = [
    {
      id: 1,
      title: t("精密工程設計", "Precision Engineering Design"),
      subtitle: "Precision Aluminum Module Design",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/aWh25CCAzOEVEA23UVSeIs/sandbox/x74W8yGhLIm4swOilNjPYT-img-1_1771158973000_na1fn_YWx1bWludW0tbW9kdWxlLXByZWNpc2lvbi1kZXNpZ24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYVdoMjVDQ0F6T0VWRUEyM1VWU2VJcy9zYW5kYm94L3g3NFc4eUdoTEltNHN3T2lsTmpQWVQtaW1nLTFfMTc3MTE1ODk3MzAwMF9uYTFmbl9ZV3gxYldsdWRXMHRiVzlrZFd4bExYQnlaV05wYzJsdmJpMWtaWE5wWjI0LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=FmjvuVMGV-sZ5uK~c7vjFV0gJobxqXwtERwX2uaUHxM-WnhrKbQda0t0G4-14JIL8mpeeRkx71RAXjF3deoDL-1tSPQGKaHn1reXPw2CPEEEmEx9INu0bIljvV8IfN5PinVJu-sSIoB96EiBQGHQbqgLR22KYXRX3ZtdexemZrbRRu26zXYzWrqYAa-5Vllcr7tkdKFD61G6qY58xpI9heeDHwsXttAqXgaXw~R7rAMOjA4fXsRPKNUSBz6Q1WsLs93-Ss61a1miWbjSFePb-LBiKpiCgZkGwetJaCk-F014gDUiyzynDvor0iOlNMy7Z0z0O8CYvYB3f6voxkC6aw__",
      description: t(
        "針對不同產品需求，設計高效、緊湊且結構優化的客製化筆記本鋁合金模組。",
        "Designing efficient, compact, and structurally optimized customized laptop aluminum modules for different product requirements."
      ),
      details: t(
        "我們的精密工程設計方案專門針對筆記本電腦的散熱需求。採用高精度 CAD 設計軟體進行三維建模，結合 FEA (有限元分析) 進行應力分析與熱流模擬。每個設計都經過多次迭代優化，確保在滿足散熱需求的同時，最小化模組厚度與重量。利用鋁合金 (如 Al 6063、Al 7075) 的優異導熱性能 (導熱係數 160-200 W/m·K)，實現超高效的熱傳導。我們的設計團隊擁有超過 500+ 個筆記本散熱模組的設計經驗，確保每個設計都符合業界最高標準。",
        "Our precision engineering design is specifically tailored for laptop thermal management. Using high-precision CAD software for 3D modeling, combined with FEA (Finite Element Analysis) for stress analysis and thermal simulation. Each design undergoes multiple iterations to minimize module thickness and weight while meeting thermal requirements. Leveraging aluminum alloys (Al 6063, Al 7075) with excellent thermal conductivity (160-200 W/m·K) for ultra-efficient heat conduction. Our design team has over 500+ laptop thermal module design experiences, ensuring each design meets the highest industry standards."
      ),
      applications: language === "en" ? ["Ultra-thin Laptop Design", "High-performance Gaming Notebook", "Workstation-grade Cooling", "Slim Business Laptop Module"] : ["超薄筆記本設計", "高性能遊戲本散熱", "工作站級筆電冷卻", "輕薄商務本模組"],
    },
    {
      id: 2,
      title: t("輕量化結構設計", "Lightweight Structure Design"),
      subtitle: "Lightweight Aluminum Structure",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/aWh25CCAzOEVEA23UVSeIs/sandbox/x74W8yGhLIm4swOilNjPYT-img-2_1771158980000_na1fn_YWx1bWludW0tbW9kdWxlLWNvbXBhY3Qtc3RydWN0dXJl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYVdoMjVDQ0F6T0VWRUEyM1VWU2VJcy9zYW5kYm94L3g3NFc4eUdoTEltNHN3T2lsTmpQWVQtaW1nLTJfMTc3MTE1ODk4MDAwMF9uYTFmbl9ZV3gxYldsdWRXMHRiVzlrZFd4bExXTnZiWEJoWTNRdGMzUnlkV04wZFhKbC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Kt-mzCZ38nXS7Be37VbVnO5b7V-6drBTgphyC6-KPwqtaRYdKv5uiSP6o~FLWdje3Ws-WEcDbC5zYSHUYnl~1YTPaPKXs27o04fYThIas5BIM8sONkuOWQJniCbtB6EIzggHPC9F0nmkhL1lomzMawKkt~Icr14q0eTLf46agHjIl9Ql5TOFxo0t1lKZ2h6aogHDZyoMvJbnxx1csBW-ByyV~1fUt~QRMgfPefnH8WW6FNawL4fJ-3d~JAz3mpElpCXj-Fp-8yeY9~a2M24ysTeLt2iAseFUb2XerQYZwFv-j6zK5wUx32A8YTEm~W7bu3g211ZuRuKVAnWz~knLyQ__",
      description: t(
        "利用鋁合金的高導熱性與低密度特性，實現輕量化且高效能的散熱模組。",
        "Leveraging aluminum alloy's high thermal conductivity and low density to achieve lightweight, high-performance heat dissipation modules."
      ),
      details: t(
        "我們的輕量化結構設計充分利用鋁合金的優異特性。通過優化鰭片設計與熱管佈局，在保證散熱效能的同時，最大化降低模組重量。採用先進的 CFD 模擬技術，精確計算最優的鰭片間距、厚度與高度，確保在最小化重量的同時達到最大散熱面積。整合熱管 (Heat Pipe) 與均溫板 (Vapor Chamber) 等相變化元件，進一步提升散熱效率。我們的輕量化設計方案平均可降低模組重量 30-40%，同時提升散熱效能 25-35%，為筆記本電腦的輕薄化設計提供完美解決方案。",
        "Our lightweight structure design fully leverages aluminum alloy's excellent properties. By optimizing fin design and heat pipe layout, we maximize weight reduction while maintaining thermal performance. Using advanced CFD simulation to precisely calculate optimal fin spacing, thickness, and height, ensuring maximum heat dissipation area at minimum weight. Integrating Heat Pipes and Vapor Chambers for enhanced thermal efficiency. Our lightweight design achieves 30-40% weight reduction while improving thermal performance by 25-35%, providing the perfect solution for thin and light laptop designs."
      ),
      applications: language === "en" ? ["Ultra-light Laptop Design", "Portable Workstation", "High-performance Tablet", "Edge Computing Device"] : ["超輕薄筆電設計", "便攜式工作站", "高性能平板電腦", "邊緣計算設備"],
    },
    {
      id: 3,
      title: t("先進製造工藝", "Advanced Manufacturing Process"),
      subtitle: "Advanced Manufacturing Process",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/aWh25CCAzOEVEA23UVSeIs/sandbox/x74W8yGhLIm4swOilNjPYT-img-3_1771158987000_na1fn_YWx1bWludW0tbW9kdWxlLW1hbnVmYWN0dXJpbmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYVdoMjVDQ0F6T0VWRUEyM1VWU2VJcy9zYW5kYm94L3g3NFc4eUdoTEltNHN3T2lsTmpQWVQtaW1nLTNfMTc3MTE1ODk4NzAwMF9uYTFmbl9ZV3gxYldsdWRXMHRiVzlrZFd4bExXMWhiblZtWVdOMGRYSnBibWMucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=CxRsCq5liqTLfkUK6GKRDVrrmx26CIsCHmqR5y59oKhKL3uRFKeqCEWJmLcHQ9NJ6KHLOyU0lDISQv383F62ZJwP2U1Vwywvg7g9ADfYQPunRkKjyNEgaAu3S-mQbXwLVOuX35CxSTLWLltmDKUhuA1N72IgcLTqXcy1pCvxHZYLY5SRzikG3dEX9LkXa9GlIpf4oQRYSVGUB18jpehFeyM57hvps5Ds-UIGxXNGQHpXsVSKwrqw-201LCmG314jzr~qp-ixSgwt~JWZUKIfpcOzo3QleghrDKNn0r-X75M7QgSP6GnDSMgIPfqQ12bjjZJdB94etulOlaMluVF9mQ__",
      description: t(
        "導入先進製造工藝，降低生產成本同時保證品質與精度。",
        "Implementing advanced manufacturing processes to reduce production costs while maintaining quality and precision."
      ),
      details: t(
        "我們採用業界最先進的鋁合金加工工藝。包括精密 CNC 加工、高速銑削、精密鑽孔等技術，確保每個模組都達到微米級精度。採用先進的陽極氧化 (Anodizing) 工藝，提升鋁合金的耐腐蝕性與美觀度。導入自動化組裝線，確保生產效率與產品一致性。建立完善的品質控制體系，包括尺寸檢測、漏水測試、性能驗證等多道檢測工序。與全球優質供應商建立長期合作關係，確保原材料穩定供應。我們的製造工藝已通過 ISO 9001、ISO 14001 等國際認證，確保產品品質與環保標準。",
        "We employ the most advanced aluminum alloy processing techniques in the industry. Including precision CNC machining, high-speed milling, and precision drilling to ensure micron-level accuracy for every module. Advanced anodizing processes enhance corrosion resistance and aesthetics. Automated assembly lines ensure production efficiency and product consistency. A comprehensive quality control system includes dimensional inspection, leak testing, and performance verification. Long-term partnerships with global quality suppliers ensure stable raw material supply. Our manufacturing processes are certified to ISO 9001, ISO 14001, and other international standards."
      ),
      applications: language === "en" ? ["Precision CNC Machining", "Anodizing Treatment", "Automated Assembly", "Quality Certification"] : ["精密 CNC 加工", "陽極氧化處理", "自動化組裝", "品質檢測認證"],
    },
    {
      id: 4,
      title: t("完全客製化方案", "Fully Customized Solutions"),
      subtitle: "Fully Customized Solutions",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/aWh25CCAzOEVEA23UVSeIs/sandbox/x74W8yGhLIm4swOilNjPYT-img-4_1771158983000_na1fn_YWx1bWludW0tbW9kdWxlLXBlcmZvcm1hbmNl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYVdoMjVDQ0F6T0VWRUEyM1VWU2VJcy9zYW5kYm94L3g3NFc4eUdoTEltNHN3T2lsTmpQWVQtaW1nLTRfMTc3MTE1ODk4MzAwMF9uYTFmbl9ZV3gxYldsdWRXMHRiVzlrZFd4bExYQmxjbVp2Y20xaGJtTmwucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fy3Hm96XX-su-iWIxUC8bYSEwFhbU8gVEJGOJGD7TN2m6woYrfuuoa~jANCt3vs4hhc4v2PU30WKa-6dgCIsQbJM-478OcI0WYS0-JfapNor-UKXV5u3qpXoAtB3CM7BUuRDnivKkidg4N9gBogIxdaeMoYps1ZfmdCOnusFCimx1Z0Jt5hPzQstuuKgOYZ62eBO5K2IqP70M89dCpCzE01yb~fKeSY0x6JtGD7uI4HerwlEzD882tcl77qu0wYo-rgLUlJ1RO5cCgSiIpwx07laNbl9s1pF5AmT5FEgswAPXKwMDhvPwPhQVzT~Z6efSjxJLh3sxjiCPxPVFa6UmA__",
      description: t(
        "根據筆記本電腦的特定規格與散熱需求，提供完全客製化的鋁合金模組設計。",
        "Providing fully customized aluminum module designs based on specific laptop specifications and thermal requirements."
      ),
      details: t(
        "我們提供完全客製化的鋁合金模組設計方案。每個項目都由經驗豐富的工程團隊進行深入分析，考慮您的筆記本電腦特性、CPU/GPU 功耗、機殼空間限制、散熱需求等因素。根據您的具體需求，我們可以提供多種鋁合金材料選擇 (Al 6063、Al 7075、Al 5052 等)，以及不同的設計方案 (單層、多層、集成式等)。提供完整的技術文檔、設計圖紙、製造指南與組裝手冊。長期技術支援與升級方案確保您的產品在整個生命週期內保持最佳效能。我們已為全球 50+ 家筆記本電腦製造商提供客製化鋁合金模組設計，累計出貨量超過 500 萬套。",
        "We provide fully customized aluminum module design solutions. Each project is deeply analyzed by our experienced engineering team, considering your laptop characteristics, CPU/GPU power consumption, chassis space constraints, and thermal requirements. Based on your specific needs, we offer multiple aluminum alloy material options (Al 6063, Al 7075, Al 5052, etc.) and various design approaches (single-layer, multi-layer, integrated, etc.). Complete technical documentation, design drawings, manufacturing guides, and assembly manuals are provided. Long-term technical support and upgrade plans ensure your product maintains optimal performance throughout its lifecycle. We have served 50+ global laptop manufacturers with customized aluminum module designs, with cumulative shipments exceeding 5 million units."
      ),
      applications: language === "en" ? ["Ultra-thin Laptop Design", "High-performance Gaming Notebook", "Workstation-grade Laptop", "Business Laptop Cooling"] : ["超薄筆電設計", "高性能遊戲本", "工作站級筆電", "商務本散熱"],
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
              <span className="text-xs font-mono text-primary tracking-wider">
                {t("鋁合金模組設計服務", "ALUMINUM MODULE DESIGN SERVICES")}
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight">
                {t("輕量化", "Lightweight")} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
                  {t("鋁合金散熱", "Aluminum Cooling")}
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed border-l-2 border-primary/30 pl-6">
                {t(
                  "Therlect 汎海科技專注於筆記本電腦的鋁合金模組設計與優化，提供從概念設計到量產的完整解決方案。",
                  "Therlect specializes in aluminum module design and optimization for laptops, providing complete solutions from concept design to mass production."
                )}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 group">
                {t("立即諮詢", "Inquire Now")}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 hover:text-primary rounded-sm px-8">
                  {t("預約洽談", "Schedule Consultation")}
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block animate-in zoom-in-95 duration-1000 delay-300 fade-in">
            <div className="relative w-full aspect-square max-w-[600px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-full blur-[100px] animate-pulse" />
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/aWh25CCAzOEVEA23UVSeIs/sandbox/x74W8yGhLIm4swOilNjPYT-img-1_1771158973000_na1fn_YWx1bWludW0tbW9kdWxlLXByZWNpc2lvbi1kZXNpZ24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYVdoMjVDQ0F6T0VWRUEyM1VWU2VJcy9zYW5kYm94L3g3NFc4eUdoTEltNHN3T2lsTmpQWVQtaW1nLTFfMTc3MTE1ODk3MzAwMF9uYTFmbl9ZV3gxYldsdWRXMHRiVzlrZFd4bExYQnlaV05wYzJsdmJpMWtaWE5wWjI0LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=FmjvuVMGV-sZ5uK~c7vjFV0gJobxqXwtERwX2uaUHxM-WnhrKbQda0t0G4-14JIL8mpeeRkx71RAXjF3deoDL-1tSPQGKaHn1reXPw2CPEEEmEx9INu0bIljvV8IfN5PinVJu-sSIoB96EiBQGHQbqgLR22KYXRX3ZtdexemZrbRRu26zXYzWrqYAa-5Vllcr7tkdKFD61G6qY58xpI9heeDHwsXttAqXgaXw~R7rAMOjA4fXsRPKNUSBz6Q1WsLs93-Ss61a1miWbjSFePb-LBiKpiCgZkGwetJaCk-F014gDUiyzynDvor0iOlNMy7Z0z0O8CYvYB3f6voxkC6aw__" 
                alt={t("鋁合金模組設計", "Aluminum Module Design")}
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_50px_rgba(0,240,255,0.3)] rounded-2xl border border-white/10"
              loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* Design Options Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10" />
        </div>

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-4xl md:text-5xl">{t("鋁合金模組設計方案", "Aluminum Module Design Solutions")}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
            <p className="text-muted-foreground text-lg">
              {t("針對不同的產品需求，設計高效、滿足且結構緊湊的客製化筆記本模組", "Designing efficient, compact, and customized laptop modules tailored to different product requirements")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {designOptions.map((option) => (
              <div key={option.id} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="relative p-8 rounded-2xl border border-white/10 bg-card/50 group-hover:bg-card/80 transition-all duration-500">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-3xl group-hover:text-primary transition-colors">{option.title}</h3>
                      <p className="text-sm text-muted-foreground font-mono">{option.subtitle}</p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {option.description}
                    </p>

                    <div className="space-y-4">
                      <button
                        onClick={() => setExpandedOption(expandedOption === option.id ? null : option.id)}
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
                      >
                        {expandedOption === option.id ? (
                          <>
                            <ChevronUp className="w-5 h-5" />
                            {t("收起詳情", "Collapse")}
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-5 h-5" />
                            {t("了解更多", "Learn More")}
                          </>
                        )}
                      </button>

                      {expandedOption === option.id && (
                        <div className="space-y-4 pt-4 border-t border-white/10 animate-in fade-in slide-in-from-top-4 duration-300">
                          <p className="text-muted-foreground leading-relaxed">
                            {option.details}
                          </p>

                          <div className="space-y-2">
                            <h4 className="font-semibold text-sm">{t("核心特色：", "Key Features:")}</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {option.highlights.map((highlight, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                  {highlight}
                                </div>
                              ))}
                            </div>
                          </div>

                          <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-sm mt-4">
                            {t("立即諮詢此方案", "Inquire About This Solution")}
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aluminum Modules Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
        </div>

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-4xl md:text-5xl">{t("設計方案詳解", "Design Solutions in Detail")}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
            <p className="text-muted-foreground text-lg">
              {t("我們提供四種專業的鋁合金模組設計方案，滿足不同筆記本電腦的散熱需求", "We offer four professional aluminum module design solutions to meet different laptop thermal requirements")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {aluminumModules.map((module, index) => (
              <div key={module.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  <img 
                    src={module.image} 
                    alt={module.title}
                    className="relative z-10 w-full h-auto rounded-2xl border border-white/10 group-hover:border-primary/50 transition-all duration-500 shadow-2xl group-hover:shadow-[0_0_40px_rgba(0,240,255,0.3)]"
                  loading="lazy" decoding="async" />
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-3xl">{module.title}</h3>
                    <p className="text-sm text-muted-foreground font-mono">{module.subtitle}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {module.description}
                  </p>

                  <div className="space-y-4">
                    <button
                      onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
                    >
                      {expandedModule === module.id ? (
                        <>
                          <ChevronUp className="w-5 h-5" />
                          {t("收起詳情", "Collapse")}
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-5 h-5" />
                          {t("了解更多", "Learn More")}
                        </>
                      )}
                    </button>

                    {expandedModule === module.id && (
                      <div className="space-y-4 pt-4 border-t border-white/10 animate-in fade-in slide-in-from-top-4 duration-300">
                        <p className="text-muted-foreground leading-relaxed">
                          {module.details}
                        </p>

                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">{t("主要應用領域：", "Key Applications:")}</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {module.applications.map((app, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                {app}
                              </div>
                            ))}
                          </div>
                        </div>

                        <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-sm mt-4">
                          {t("諮詢此方案", "Inquire About This Solution")}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10" />
        </div>

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-4xl md:text-5xl">{t("性能指標", "Performance Metrics")}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
            <p className="text-muted-foreground text-lg">
              {t("我們的鋁合金模組設計方案已被全球頂級筆記本電腦製造商採用，性能指標行業領先。", "Our aluminum module design solutions have been adopted by top global laptop manufacturers, with industry-leading performance metrics.")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: t("散熱效率提升", "Thermal Efficiency Improvement"), value: "35-45%", icon: "🌡️" },
              { label: t("重量降低", "Weight Reduction"), value: "30-40%", icon: "⚖️" },
              { label: t("成本優化", "Cost Optimization"), value: "20-30%", icon: "💰" },
              { label: t("設計成功率", "Design Success Rate"), value: "99.8%", icon: "✓" },
            ].map((metric, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="relative p-8 rounded-xl border border-white/10 bg-card/50 group-hover:bg-card/80 transition-all duration-500 text-center">
                  <div className="text-4xl mb-4">{metric.icon}</div>
                  <div className="text-3xl font-display font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              {t("準備好升級您的筆記本散熱了嗎？", "Ready to Upgrade Your Laptop Cooling?")}
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {t(
                "Therlect 汎海科技的鋁合金模組設計方案已幫助全球 50+ 家筆記本電腦製造商優化產品性能。讓我們為您的下一代產品設計最佳的散熱解決方案。",
                "Therlect's aluminum module design solutions have helped 50+ global laptop manufacturers optimize product performance. Let us design the best thermal solution for your next-generation products."
              )}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 group">
                  {t("立即諮詢", "Inquire Now")}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/solutions">
                <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 hover:text-primary rounded-sm px-8">
                  {t("查看其他方案", "View Other Solutions")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
