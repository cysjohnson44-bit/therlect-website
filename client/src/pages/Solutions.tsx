import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Settings, PenTool, BarChart3, Box, Award, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import React from "react";
import { useLanguage } from "@/hooks/useLanguage";

export default function Solutions() {
  const [expandedDomain, setExpandedDomain] = React.useState<string | null>(null);
  const { currentLanguage } = useLanguage();
  const isEn = currentLanguage === 'en';

  const processSteps = [
    {
      icon: PenTool,
      title: isEn ? "Concept & Design" : "概念與設計",
      shortDesc: isEn ? "Conduct preliminary thermal assessment based on customer requirements and propose multiple feasible cooling solutions." : "根據客戶需求進行初步熱評估，提出多種可行的散熱方案。",
      fullDesc: isEn ? "In the early stages of a project, we deeply analyze your product characteristics, application scenarios, and performance requirements. Through detailed thermal assessment, we identify potential thermal management bottlenecks. We consider space constraints, cost budgets, manufacturing processes, and performance goals to plan multiple feasible solutions. Each solution undergoes preliminary verification to ensure technical feasibility and economic rationality. Our design team will work closely with you to select the optimal solution as the foundation for subsequent development." : "在專案初期，我們深入分析您的產品特性、應用場景與性能需求。通過詳細的熱評估，識別潛在的熱管理瓶頸。我們考量空間限制、成本預算、製造工藝與效能目標，為您規劃多個可行方案。每個方案都經過初步驗證，確保技術可行性與經濟合理性。我們的設計團隊將與您密切合作，選定最優方案作為後續開發的基礎。",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/solution-concept-design-efapdzoNfAtZR5YiUiXEmp.webp",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      icon: BarChart3,
      title: isEn ? "Simulation & Analysis" : "模擬與分析",
      shortDesc: isEn ? "Use professional software for detailed thermal simulation and structural analysis to predict potential issues." : "運用專業軟體進行詳細的熱模擬與結構分析，預測潛在問題。",
      fullDesc: isEn ? "Using industry-leading simulation software such as Ansys and Flotherm, we perform multi-physics coupled analysis. Through 3D CFD thermal-fluid analysis, we accurately predict temperature distribution, flow field characteristics, and thermal stress. Combined with structural FEA analysis, we evaluate material stress and deformation. Comprehensive design verification before tooling significantly reduces trial-and-error costs and development cycles. Simulation results include detailed reports and visual analysis, providing scientific basis for subsequent decisions." : "利用 Ansys、Flotherm 等業界領先的模擬軟體，我們進行多物理場耦合分析。通過三維熱流分析（CFD），精確預測溫度分佈、流場特性與熱應力。結合結構有限元分析（FEA），評估材料應力與變形。在開模前全面驗證設計，大幅降低試錯成本與開發週期。模擬結果包括詳細報告與可視化分析，為後續決策提供科學依據。",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/solution-simulation-analysis-Rn2foMtm5DEkjiLoAyqXC5.webp",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20"
    },
    {
      icon: Box,
      title: isEn ? "Prototyping" : "原型製作",
      shortDesc: isEn ? "Rapidly produce functional prototypes for real-world testing and result verification." : "快速製作功能原型，進行實機測試與驗證結果準確性。",
      fullDesc: isEn ? "Based on optimized designs, we rapidly produce functional prototypes for experimental verification. Using precision testing equipment (infrared thermal cameras, temperature sensor arrays), we collect temperature data under real operating conditions. Comparing simulation results with actual measurements validates model accuracy. If deviations are found, we perform root cause analysis and optimize model parameters. Prototype testing covers multiple conditions including normal, high, and low temperatures to ensure stable product performance across the full operating range." : "基於優化設計，我們快速製作功能原型進行實驗驗證。通過精密測試設備（紅外熱像儀、溫度傳感器陣列），採集真實工況下的溫度數據。對比模擬結果與實測數據，驗證模型準確性。若發現偏差，我們進行根因分析並優化模型參數。原型測試涵蓋常溫、高溫、低溫等多種工況，確保產品在全工作範圍內表現穩定。",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/solution-prototype-testing-78jHJTmMvZwbpHDXrPXccA.webp",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20"
    },
    {
      icon: Settings,
      title: isEn ? "Production & Manufacturing" : "生產與製造",
      shortDesc: isEn ? "Integrate supply chain resources to provide high-quality, efficient mass production services." : "整合供應鏈資源，提供高品質、高效率的量產服務。",
      fullDesc: isEn ? "We have established long-term partnerships with quality global suppliers to ensure stable raw material supply. From precision mold development, injection molding, machining to assembly testing, every step follows strict quality standards. Using advanced automation equipment and processes to improve production efficiency and product consistency. We have established a comprehensive logistics system to ensure timely delivery. We can provide flexible production solutions based on order volume, from small batch trial production to large-scale mass production." : "我們與全球優質供應商建立長期合作關係，確保原材料穩定供應。從精密模具開發、注塑成型、機械加工到組裝測試，每個環節都遵循嚴格的質量標準。採用先進的自動化設備與工藝，提高生產效率與產品一致性。建立完善的物流體系，確保及時交付。我們可根據訂單量提供靈活的生產方案，從小批量試產到大規模量產。",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/solution-production-manufacturing-9MjHz5Ehra55U55Wp959pL.webp",
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20"
    },
    {
      icon: Award,
      title: isEn ? "Quality & Optimization" : "品質與優化",
      shortDesc: isEn ? "Continuously track product quality and optimize designs based on market feedback." : "持續追蹤產品質量，根據市場反饋進行設計優化。",
      fullDesc: isEn ? "After product launch, we establish a complete quality tracking mechanism. Through customer feedback, field testing, and long-term reliability verification, we identify areas for improvement. Based on actual operational data and market demand changes, we perform continuous design optimization. Optimization includes material selection, process improvement, cost reduction, and performance enhancement. We are committed to pursuing excellence, ensuring products maintain optimal performance and competitiveness throughout their lifecycle. We regularly provide technical support and upgrade solutions." : "產品上市後，我們建立完整的品質追蹤機制。通過客戶反饋、現場測試與長期可靠性驗證，識別改進空間。根據實際運行數據與市場需求變化，進行持續的設計優化。優化內容包括材料選擇、工藝改進、成本降低與性能提升。我們致力於追求卓越，確保產品在整個生命週期內維持最佳效能與競爭力。定期提供技術支援與升級方案。",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/solution-quality-optimization-nF48UjT7wHtG4mTN7CmQjh.webp",
      color: "text-green-400",
      bg: "bg-green-500/10",
      border: "border-green-500/20"
    }
  ];

  const applicationDomains = [
    {
      title: isEn ? "Consumer Electronics" : "消費性電子",
      description: isEn ? "In the consumer electronics field, we focus on solving thermal challenges for laptops, smartphones, gaming consoles, and wearable devices. As electronic products continue to upgrade in functionality, heat generation increases accordingly. Through innovative thermal design, high-performance material selection, and precise thermal-fluid simulation, we ensure products maintain optimal temperature during high-performance operation." : "在消費性電子領域，我們專注於解決筆記型電腦、智慧型手機、遊戲主機和穿戴式裝置的散熱挑戰。隨著電子產品功能的不斷升級，發熱量也隨之增加。我們通過創新的散熱設計、高效能材料選擇和精密的熱流模擬，確保產品在高性能運行時保持最佳溫度。我們的解決方案不僅提升了產品的穩定性和壽命，還改善了用戶體驗。",
      detailedContent: isEn ? "Consumer electronics products have increasingly strict thermal performance requirements. We provide customized solutions for different product types:\n\n• Laptops: High-performance cooling modules ensuring sustained operation without throttling\n• Smartphones: Ultra-thin liquid cooling design achieving maximum thermal performance in limited space\n• Gaming Consoles: Multi-layer thermal architecture supporting extended high-performance gaming\n• Wearable Devices: Lightweight cooling solutions balancing comfort and performance\n\nOur solutions have been applied to globally renowned consumer electronics brands, helping them enhance product competitiveness." : "消費性電子產品對散熱效能要求日益嚴格。我們針對不同產品類型提供客製化方案：\n\n• 筆記型電腦：採用高效能散熱模組，確保長時間運行不降頻\n• 智慧型手機：超薄液冷設計，在有限空間內實現最大散熱效能\n• 遊戲主機：多層散熱架構，支持高性能遊戲長時間運行\n• 穿戴式裝置：輕量化散熱方案，兼顧舒適度與效能\n\n我們的解決方案已應用於全球知名消費電子品牌，幫助他們提升產品競爭力。",
      items: isEn ? ["Laptop Cooling", "Smartphone Cooling", "Gaming Console Cooling", "Wearable Device Thermal Management"] : ["筆記型電腦散熱", "智慧型手機散熱", "遊戲主機冷卻", "穿戴式裝置熱管理"],
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/HDbcUTVMVfBSqLfR.png"
    },
    {
      title: isEn ? "Unmanned Vehicles" : "無人載具",
      description: isEn ? "Drones, autonomous vehicles, and other unmanned platforms generate significant heat during high-performance operation. We provide professional thermal management solutions ensuring stable performance during extended flight or driving. Through optimized thermal design and material selection, we help clients extend range, improve safety, and enhance reliability." : "無人機、無人車等無人載具在高性能運行時產生大量熱量。我們提供專業的熱管理解決方案，確保無人載具在長時間飛行或行駛時保持穩定的性能。通過優化散熱設計和材料選擇，我們幫助客戶延長續航時間、提升安全性和可靠性。",
      detailedContent: isEn ? "Thermal management of unmanned vehicles directly affects range and safety. We provide comprehensive solutions:\n\n**Drone Series:**\n• Consumer Drones: Lightweight thermal design maximizing flight time\n• Industrial Drones: High-load cooling solutions supporting extended operations\n• Unmanned Helicopters: Complex thermal management systems adapting to various conditions\n\n**Autonomous Vehicle Series:**\n• Self-driving Vehicles: High-performance battery cooling ensuring extended driving\n• Delivery Vehicles: Stable powertrain temperature control\n• Special Purpose Vehicles: Extreme environment adaptability\n\n**Core Systems:**\n• Flight Control Systems: Precision temperature control ensuring flight stability\n• Power Batteries: Professional thermal management modules extending battery life\n• Communication Modules: High-reliability cooling design\n\nOur technology has been successfully applied to multiple unmanned vehicle manufacturers, significantly improving product performance and range." : "無人載具的熱管理直接影響續航能力和安全性。我們提供全面的解決方案：\n\n**無人機系列：**\n• 消費級無人機：輕量化散熱設計，最大化續航時間\n• 工業級無人機：高負載散熱方案，支持長時間作業\n• 無人直升機：複雜熱管理系統，適應多種工況\n\n**無人車系列：**\n• 自動駕駛車輛：高效能電池冷卻系統，確保長時間行駛\n• 物流配送車：穩定的動力系統溫控\n• 特種無人車：極端環境適應性\n\n**核心系統：**\n• 飛行控制系統：精密溫控，保證飛行穩定性\n• 動力電池：專業熱管理模組，延長電池壽命\n• 通訊模組：高可靠性散熱設計\n\n我們的技術已成功應用於多家無人載具製造商，顯著提升了產品性能和續航能力。",
      items: isEn ? ["Drone Cooling", "EV Battery Cooling", "Flight Control Thermal Management", "Power Battery Thermal Management"] : ["無人機散熱", "無人車電池冷卻", "飛行控制系統溫控", "動力電池熱管理"],
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/rQWAiVQhssZTmvbh.png"
    },
    {
      title: isEn ? "Wearable Products" : "穿戴式產品",
      description: isEn ? "Smart glasses and AR/VR wearable devices represent the next generation of computing platforms, posing unprecedented challenges for thermal technology. We have developed innovative cooling solutions specifically for smart glasses, achieving high-performance heat dissipation within extreme space constraints. Through advanced thermal conductive materials and precision thermal management design, we ensure comfortable temperature during extended wear without compromising the slim and elegant form factor." : "智慧眼鏡與 AR/VR 穿戴設備代表了下一代計算平台，對散熱技術提出了前所未有的挑戰。我們專門為智慧眼鏡開發了創新的散熱解決方案，在極限的空間限制下實現高效能散熱。通過先進的導熱材料與精密的熱管理設計，確保設備在長時間佩戴中保持舒適溫度，同時不影響產品的輕薄美觀外形。",
      detailedContent: isEn ? "Smart glasses thermal challenges are unique and complex. Our professional solutions include:\n\n**AR/VR Glasses Cooling System:**\n• Invisible cooling design: Integrating cooling modules into the glasses frame while maintaining aesthetics\n• Thermal path optimization: Using the glasses material itself for heat conduction, improving efficiency\n• Low-temperature operation: Ensuring comfortable temperature when glasses are close to skin\n• Lightweight design: Cooling module weight controlled at gram level, no added wearing burden\n\n**Core Technology Features:**\n• Precision thermal management chips for real-time temperature distribution monitoring\n• High thermal conductivity composite materials\n• Innovative micro-channel cooling technology\n• Low-power cooling solutions without affecting battery life\n\nOur innovative technology has been successfully applied to multiple commercial AR/VR glasses, providing users with comfortable extended wearing experience." : "智慧眼鏡的散熱挑戰獨特而複雜。我們的專業解決方案包括：\n\n**AR/VR 眼鏡散熱系統：**\n• 隱形散熱設計：將散熱模組集成於眼鏡框架，保持產品美觀\n• 導熱路徑優化：利用眼鏡材料本身進行熱傳導，提高散熱效率\n• 低溫工作環境：確保眼鏡貼近皮膚時保持舒適溫度\n• 輕量化設計：散熱模組重量控制在克級，不增加佩戴負擔\n\n**核心技術特點：**\n• 精密的熱管理芯片，實時監測溫度分佈\n• 採用高導熱係數的複合材料\n• 創新的微流道散熱技術\n• 低功耗冷卻方案，不影響電池續航\n\n我們的創新技術已成功應用於多款商用 AR/VR 眼鏡，為用戶提供舒適的長時間佩戴體驗。",
      items: isEn ? ["AR/VR Glasses Cooling", "Smart Glasses Thermal Control", "Wearable Device Cooling", "Thermal Conductive Module Design"] : ["AR/VR 眼鏡散熱", "智慧眼鏡溫控", "穿戴式設備冷卻", "導熱模組設計"],
      images: ["https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/fxMQvLvpAagqRLpQ.png", "https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/KrFBaqwhQoUtisZY.png", "https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/FFaKfehtFLyjyDEE.png"],
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/fxMQvLvpAagqRLpQ.png"
    },
    {
      title: isEn ? "Industrial & Communications" : "工業與通訊",
      description: isEn ? "The industrial and communications field has the most stringent thermal management requirements. Server cabinets, 5G base stations, industrial computers, and high-power supplies need to operate stably for extended periods in high-temperature, high-humidity, and high-dust environments. We provide enterprise-grade cooling solutions including fanless designs, liquid cooling systems, and modular heat sinks. These solutions not only improve equipment reliability but also reduce operating costs and energy consumption." : "工業與通訊領域對熱管理的要求最為嚴苛。伺服器機櫃、5G 基地台、工業電腦和大功率電源等設備需要在高溫、高濕、高塵環境下長期穩定運行。我們提供企業級的散熱解決方案，包括無風扇設計、液冷系統和模組化散熱器。這些方案不僅提高了設備的可靠性，還降低了運營成本和能耗。",
      detailedContent: isEn ? "Industrial and communications fields require 24/7 uninterrupted operation, making thermal management critical. Our enterprise-grade solutions include:\n\n• Server Cabinets: High-density cooling design supporting large-scale deployment\n• 5G Base Stations: Extreme environment adaptability ensuring signal stability\n• Industrial Computers: Fanless design reducing failure rate and maintenance costs\n• High-Power Supplies: Efficient cooling improving energy conversion efficiency\n\nOur solutions have been applied to global data centers and communications infrastructure." : "工業與通訊領域要求 24/7 不間斷運行，熱管理至關重要。我們的企業級解決方案包括：\n\n• 伺服器機櫃：高密度散熱設計，支持大規模部署\n• 5G 基地台：極端環境適應性，確保信號穩定\n• 工業電腦：無風扇設計，降低故障率與維護成本\n• 大功率電源：高效散熱，提升能源轉換效率\n\n我們的方案已應用於全球數據中心和通訊基礎設施。",
      items: isEn ? ["Server Cabinet Cooling", "5G Base Station Cooling", "Industrial PC Fanless Design", "High-Power Supply Cooling"] : ["伺服器機櫃散熱", "5G 基地台散熱", "工業電腦無風扇設計", "大功率電源散熱"],
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/LvFKRTfSfppXIELk.png"
    },
    {
      title: isEn ? "Automotive & Aerospace" : "汽車與航空",
      description: isEn ? "Thermal management in the automotive and aerospace fields involves extreme conditions. Applications such as EV battery cooling and aircraft electronics temperature control demand extremely high reliability and performance. We provide targeted solutions including high-performance cooling modules, advanced material applications, and innovative design concepts. These solutions help clients achieve higher efficiency, longer lifespan, and superior safety performance." : "汽車與航空領域的熱管理需求涉及極端條件。電動車電池散熱、飛行器電子設備溫控等應用對可靠性和性能要求極高。我們提供針對性的解決方案，包括高效能散熱模組、先進的材料應用和創新的設計理念。這些方案幫助客戶實現更高的效率、更長的使用壽命和更優的安全性能。",
      detailedContent: isEn ? "The automotive and aerospace fields have the highest reliability requirements, with thermal management directly related to safety. Our professional solutions include:\n\n• EV Batteries: Efficient cooling ensuring battery lifespan and safety\n• Aircraft Electronics: Temperature control management in high-altitude environments\n• Automotive Electronics: Automotive-grade reliability certification\n\nOur technology has passed the industry's most stringent certification standards." : "汽車與航空領域對可靠性要求最高，熱管理直接關係安全性。我們的專業方案包括：\n\n• 電動車電池：高效散熱確保電池壽命與安全性\n• 飛行器電子：高空環境下的溫控管理\n• 汽車電子：車規級可靠性認證\n\n我們的技術已通過業界最嚴格的認證標準。",
      items: isEn ? ["EV Battery Cooling", "Aircraft Electronics Thermal Control", "Automotive Electronics Cooling", "LEO Satellite Cooling"] : ["電動車電池散熱", "飛行器電子溫控", "汽車電子散熱", "低軌衛星散熱"],
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/FJCwCnjfWXtIndQX.webp"
    },
    {
      title: isEn ? "Semiconductor Equipment Cooling" : "半導體設備散熱",
      description: isEn ? "Semiconductor testing and Burn-in aging tests impose stringent requirements on thermal technology. In high-temperature, high-power-density testing environments, precise temperature control directly affects test yield and chip reliability verification accuracy. We provide thermal solutions for ATE test equipment, Burn-in systems, and power device testing, utilizing high-efficiency thermal interface materials and precision temperature control modules to ensure chips maintain stable temperatures during testing while meeting the demanding requirements of high power density and rapid temperature cycling." : "半導體測試與Burn-in老化測試對散熱技術提出了嚴苛要求。在高溫、高功率密度的測試環境下，精確的溫度控制直接影響測試良率與晶片可靠性驗證的準確性。我們提供針對ATE測試設備、Burn-in系統與功率元件測試的散熱解決方案，透過高效導熱介面材料與精密溫控模組，確保晶片在測試過程中維持穩定溫度，同時滿足高功率密度與快速溫度循環的嚴苛需求。",
      detailedContent: isEn ? "Semiconductor equipment thermal management is one of the most technically demanding fields. Our professional solutions include:\n\n• ATE Test Equipment Cooling: High-precision temperature control ensuring test accuracy and repeatability\n• Burn-in Aging Test Temperature Control: Stable thermal environment supporting long-duration high-temperature testing\n• Power Device (IGBT/SiC/GaN) Test Cooling: Rapid heat dissipation for high-power-density components\n• Thermal Socket Thermal Modules: Precision thermal interface design ensuring uniform heat transfer from chip to heat sink\n\nOur solutions have been adopted by leading semiconductor test equipment manufacturers worldwide, helping improve test yield and equipment uptime." : "半導體設備熱管理是技術要求最高的領域之一。我們的專業方案包括：\n\n• ATE測試設備散熱：高精度溫度控制，確保測試準確性與可重複性\n• Burn-in老化測試溫控：穩定的熱環境支持長時間高溫測試\n• 功率元件(IGBT/SiC/GaN)測試散熱：快速散熱應對高功率密度元件\n• 溫控插座(Thermal Socket)導熱模組：精密導熱介面設計，確保晶片到散熱器的均勻熱傳導\n\n我們的解決方案已被全球領先的半導體測試設備製造商採用，協助提升測試良率與設備稼動率。",
      items: isEn ? ["ATE Test Equipment Cooling", "Burn-in Aging Test Temperature Control", "Power Device (IGBT/SiC/GaN) Test Cooling", "Thermal Socket Thermal Module"] : ["ATE測試設備散熱", "Burn-in老化測試溫控", "功率元件(IGBT/SiC/GaN)測試散熱", "溫控插座(Thermal Socket)導熱模組"],
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/ZPTXrwILqdgETeky.png"
    },
    {
      title: isEn ? "Robot Thermal Management" : "機器人散熱解決方案",
      description: isEn ? "Robots under high-load operation face heat accumulation in motors, drivers, and control boards as the greatest threat to reliability. Therlect provides customized thermal designs for industrial robotic arms and service robots, ensuring long-duration continuous operation without performance degradation." : "機器人在高負載運作下，馬達、驅動器、控制板的熱累積是可靠度的最大威脅。汎海科技提供工業機械手臂與服務型機器人的客製化散熱設計，確保長時間連續運作不降效",
      detailedContent: isEn ? "Robot thermal management directly affects operational reliability and service life. Our professional solutions include:\n\n• Joint Motors: Long-duration high-torque heat generation management\n• Servo Drivers: High power density cooling in compact spaces\n• Main Control Boards / AI Chips: Dense computation with high peak thermal throughput\n\nOur customized thermal designs ensure robots maintain stable performance during extended high-load operation, significantly extending equipment lifespan and reducing downtime." : "機器人熱管理直接影響運作可靠度與使用壽命。我們的專業方案包括：\n\n• 關節馬達：長時間高扣矩發熱管理\n• 伺服驅動器：功率密度高、空間小的散熱設計\n• 主控板 / AI 晶片：運算密集、峰值熱通量高\n\n我們的客製化散熱設計確保機器人在長時間高負載運作下保持穩定性能，顯著延長設備壽命並降低停機時間。",
      items: isEn ? ["Joint Motor Cooling", "Servo Driver Cooling", "Main Control Board / AI Chip Cooling"] : ["關節馬達散熱", "伺服驅動器散熱", "主控板 / AI 晶片散熱"],
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/GBUNjgOAzvnhvaSz.webp"
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
            {isEn ? "Solutions" : "解決方案"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-5 fade-in duration-700 delay-100">
            {isEn ? "From concept to mass production, we provide one-stop thermal management services to help you shorten development cycles and enhance product competitiveness." : "從概念到量產，我們提供一站式的熱管理服務，助您縮短開發週期並提升產品競爭力。"}
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
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full ${step.bg.replace('/10', '')} ring-4 ring-background`} />
                    {index < processSteps.length - 1 && (
                      <div className="w-0.5 h-32 bg-gradient-to-b from-white/20 to-transparent mt-4" />
                    )}
                  </div>

                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center pl-16 md:pl-0`}>
                    <div className="flex-1">
                      <div className="p-6 rounded-xl border border-white/5 bg-card/30 hover:bg-card/50 transition-all duration-500 hover:border-white/10 hover:shadow-lg">
                        <div className={`inline-flex items-center justify-center p-3 rounded-lg ${step.bg} ${step.border} border mb-4`}>
                          <step.icon className={`w-6 h-6 ${step.color}`} />
                        </div>
                        <h3 className="font-display font-bold text-2xl mb-3 text-foreground">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{step.fullDesc}</p>
                      </div>
                    </div>

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

      {/* Applications Section */}
      <section className="py-24 bg-secondary/5 border-y border-white/5">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-4xl mb-4">{isEn ? "Diverse Application Fields" : "多元應用領域"}</h2>
            <p className="text-muted-foreground text-lg mb-4">{isEn ? "Our analysis experience covers high heat generation and precision electronics" : "我們的分析經驗涵蓋高發熱量與精密電子領域"}</p>
            <p className="text-muted-foreground text-base max-w-3xl mx-auto leading-relaxed">{isEn ? "Therlect has over 7 years of thermal management experience, accumulating rich technical knowledge and successful cases across consumer electronics, industrial communications, health & lifestyle, automotive, and other fields. Our solutions have been widely applied to globally renowned enterprises, helping them solve complex thermal management challenges and enhance product performance and market competitiveness." : "Therlect 汎海科技擁有超過7年的熱管理經驗，在消費性電子、工業通訊、健康與生活、汽車等多個領域積累了豐富的技術知識與成功案例。我們的解決方案已廣汎應用於全球知名企業，幫助他們解決複雜的熱管理挑戰，提升產品性能與市場競爭力。"}</p>
          </div>

          <div className="space-y-24">
            {applicationDomains.map((app, i) => {
              const isExpanded = expandedDomain === app.title;
              return (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
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
                    
                    {isExpanded && app.detailedContent && (
                      <div className="mt-6 p-6 bg-primary/10 rounded-lg border border-primary/20 animate-in fade-in duration-300">
                        <p className="text-foreground leading-relaxed whitespace-pre-line">{app.detailedContent}</p>
                        <Link href="/contact">
                          <Button size="sm" className="mt-4 bg-primary hover:bg-primary/90 text-white rounded-sm">
                            {isEn ? "Learn More" : "了解更多"} <ArrowRight className="ml-2 w-3 h-3" />
                          </Button>
                        </Link>
                      </div>
                    )}
                    
                    <div className="pt-4">
                      <h4 className="font-semibold text-foreground mb-3">{isEn ? "Key Applications:" : "主要應用領域："}</h4>
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

                <div className="flex-1">
                  {!app.image && !(app.images && app.images.length > 1) ? (
                    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-card/30 shadow-2xl flex items-center justify-center min-h-[200px]">
                      <p className="text-muted-foreground text-sm">{isEn ? 'Image coming soon' : '圖片即將上線'}</p>
                    </div>
                  ) : app.images && app.images.length > 1 ? (
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
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">{isEn ? "Looking for a Customized Solution?" : "尋找客製化解決方案？"}</h2>
          <p className="text-muted-foreground text-lg mb-8">
            {isEn ? "Every project is unique. Tell us your requirements, and we will tailor the most suitable thermal management solution for you." : "每個專案都是獨一無二的。告訴我們您的需求，我們將為您量身打造最適合的熱管理方案。"}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8">
              {isEn ? "Start Your Project" : "開始您的專案"} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
