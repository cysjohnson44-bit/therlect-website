import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Lightbulb } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/hooks/useLanguage";

export default function About() {
  const { currentLanguage } = useLanguage();
  const isEn = currentLanguage === 'en';

  const coreValues = [
    {
      icon: Lightbulb,
      title: isEn ? "Innovation" : "創新 (Innovation)",
      desc: isEn ? "Never satisfied with the status quo, we continuously explore the boundaries of thermodynamics and apply new technologies to more possibilities." : "不滿足於現狀，持續探索熱力學的邊界，將新技術應用於更多可能性。",
      color: "text-yellow-400",
      bg: "bg-yellow-500/10"
    },
    {
      icon: Target,
      title: isEn ? "Precision" : "精準 (Precision)",
      desc: isEn ? "From simulation analysis to production manufacturing, we strive for perfection in every data point and every tolerance." : "從模擬分析到生產製造，我們對每一個數據、每一個公差都力求完美。",
      color: "text-red-400",
      bg: "bg-red-500/10"
    },
    {
      icon: Users,
      title: isEn ? "Partnership" : "夥伴 (Partnership)",
      desc: isEn ? "Working closely with clients to face challenges together. Your success is our greatest achievement." : "與客戶緊密合作，共同面對挑戰。您的成功，就是我們最大的成就。",
      color: "text-blue-400",
      bg: "bg-blue-500/10"
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
            {isEn ? "About Us" : "關於我們"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-5 fade-in duration-700 delay-100">
            {isEn ? "A group of engineers passionate about thermodynamics, dedicated to transforming complex theories into elegant solutions." : "一群對熱力學充滿熱情的工程師，致力於將複雜的理論轉化為優雅的解決方案。"}
          </p>
        </div>
      </section>

      {/* Company Intro Section */}
      <section className="py-20 relative">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-video">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/therlect_team_research-8qedcTBkV5kL8w2eHjnHq3.webp" 
                  alt="Therlect Team" 
                  className="w-full h-full object-cover"
                  loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-card border border-white/10 p-6 rounded-xl shadow-xl hidden md:block">
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-primary mb-1">2019</div>
                  <div className="text-xs text-muted-foreground font-mono uppercase">Founded</div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="font-display font-bold text-3xl md:text-4xl">{isEn ? "Our Story" : "我們的故事"}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {isEn ? "Therlect was founded in 2019 by a group of senior thermal fluid engineers. We firmly believe that thermal management is not only a science, but also an art." : "Therlect 汎海科技成立於 2019 年，由一群資深熱流工程師所創立。我們深信，熱管理不僅是一門科學，更是一門藝術。"}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {isEn ? "We have witnessed the rapid development of electronic product performance and solved the accompanying thermal challenges. From early passive cooling to today's active liquid cooling and phase change technologies, we have always been at the forefront of technology." : "我們見證了電子產品效能的快速發展，也解決了隨之而來的散熱挑戰。從早期的被動散熱到現在的主動式液冷與相變技術，我們始終走在技術的最前沿。"}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {isEn ? "Beyond thermal management, we have expanded our vision to far-infrared technology, exploring the broad applications of thermal energy in human health and industrial applications. We are not just your supplier, but your most trusted strategic partner in the thermal energy field." : "除了熱管理，我們更將視野拓展至遠紅外線技術，探索熱能對人體健康與工業應用的廣汎應用。我們不僅是您的供應商，更是您在熱能領域最值得信賴的策略夥伴。"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-secondary/5 border-y border-white/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl mb-4">{isEn ? "Core Values" : "核心價值"}</h2>
            <p className="text-muted-foreground text-lg">{isEn ? "The beliefs and principles that guide us forward" : "指引我們前進的信念與原則"}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, i) => (
              <div key={i} className="bg-card/50 border border-white/5 p-8 rounded-xl hover:bg-card/80 transition-all hover:-translate-y-1 hover:shadow-lg group">
                <div className={`w-14 h-14 rounded-xl ${value.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <value.icon className={`w-7 h-7 ${value.color}`} />
                </div>
                <h3 className="font-display font-bold text-2xl mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />
        <div className="container relative z-10 max-w-3xl">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">{isEn ? "Join Our Team" : "加入我們的行列"}</h2>
          <p className="text-muted-foreground text-lg mb-8">
            {isEn ? "We are always looking for talented individuals passionate about thermodynamics. If you want to drive technological progress, welcome to join Therlect." : "我們始終在尋找對熱力學充滿熱情的人才。如果您也想推動技術進步，歡迎加入 Therlect。"}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8">
              {isEn ? "Contact Us" : "聯絡我們"} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Conflict-Free Minerals Policy */}
      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-8">{isEn ? "Conflict-Free Minerals Policy" : "無衝突礦產政策"}</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {isEn ? "Therlect is committed to supporting responsible sourcing practices and pledges not to purchase or use conflict metals." : "汎海科技股份有限公司致力於支持負責任的採購實踐，並承諾不購入、不使用衝突金屬。"}
            </p>
            
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-3">{isEn ? "Background & Commitment" : "背景與承諾"}</h3>
                <p className="leading-relaxed">
                  {isEn ? "Armed rebel groups in the Democratic Republic of Congo (DRC) and surrounding countries have caused numerous social and environmental problems through metal mining and trade, including human rights violations and armed violence. These metals include: Tantalum (Ta), Tin (Sn), Tungsten (W), Cobalt (Co), and Gold (Au). These metals from the DRC and neighboring conflict regions are known as Conflict Minerals." : "非洲剛果民主共和國(DRC)及其周圍國家之武裝叛亂組織，透過金屬開採、貿易導致許多社會和環境問題，包括侵害人權及引發武裝暴力等。此類金屬礦產包括：鉭[Tantalum (Ta)]、錫[Tin (Sn)]、鎢[Tungsten (W)]、鈷[Cobalt (Co)]和金[Gold (Au)]。來自DRC及其鄰近衝突地區之上述金屬，被稱為衝突礦產(Conflict Minerals)。"}
                </p>
                <p className="leading-relaxed mt-3">
                  {isEn ? "To protect human rights and mitigate armed conflict in the DRC and neighboring countries, Therlect supports the Conflict-Free Sourcing Initiative (CFSI) established by the Electronic Industry Citizenship Coalition (EICC) and the Global e-Sustainability Initiative (GeSI)." : "為了捍衛人權和減緩剛果民主共和國及其鄰近國家之武裝衝突，我們汎海科技支持電子產業公民聯盟 (EICC, Electronic Industry Citizenship Coalition)及全球永續議題e化倡議組織(GeSi, the Global e-Sustainability Initiative)所創立之無衝突採購倡議 (CFSI, Conflict-Free Sourcing Initiative)。"}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">{isEn ? "Our Commitments" : "我們的承諾"}</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold min-w-fit">✓</span>
                    <span>{isEn ? "We do not purchase conflict metals produced in conflict regions of the DRC and surrounding countries." : "不購買來自剛果民主共和國及其周圍國家之衝突地區所生產之衝突金屬。"}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold min-w-fit">✓</span>
                    <span>{isEn ? "We require our suppliers not to use conflict metals from conflict regions. If sourced from conflict regions, they must come from third-party verified conflict-free mines. If conflict minerals are unintentionally used in our products, suppliers must notify us immediately so we can take necessary measures." : "要求我們的供應商不使用來自衝突地區之衝突金屬。若來自衝突地區，必須產自第三方驗證通過之無衝突礦場。若用於本公司之產品中非故意使用到衝突礦產，必須第一時間通知我方，以採取必要之措施。"}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold min-w-fit">✓</span>
                    <span>{isEn ? "We conduct due diligence on our suppliers' metal sources using CFSI's Conflict Minerals Reporting Template (CMRT) as a survey tool, requiring suppliers to disclose mineral sources and sign conflict-free mineral commitments. Through responsible procurement management, we ensure that our and our suppliers' sourcing does not come from conflict regions and complies with customer and regulatory requirements." : "本公司同時盡職調查我們的供應商金屬來源。採用CFSI之衝突金屬調查範本 (CMRT, Conflict Minerals Reporting Template)做為調查表，要求供應商披露礦產來源，及簽署無衝突礦產承諾書，期望我們的供應商共同遵守無衝突礦產的政策。透過負責任之採購管理，確保我們及供應商之採購來源非來自衝突地區並符合客戶及法規要求。"}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
