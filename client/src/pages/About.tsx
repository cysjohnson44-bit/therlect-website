import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Lightbulb, History } from "lucide-react";
import { Link } from "wouter";

export default function About() {
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
            關於我們
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-5 fade-in duration-700 delay-100">
            一群對熱力學充滿熱情的工程師，致力於將複雜的理論轉化為優雅的解決方案。
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
                  src="/assets/partnership_concept.jpg" 
                  alt="Therlect Team" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
              </div>
              {/* Stats Card */}
              <div className="absolute -bottom-8 -right-8 bg-card border border-white/10 p-6 rounded-xl shadow-xl hidden md:block">
                <div className="flex gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-display font-bold text-primary mb-1">15+</div>
                    <div className="text-xs text-muted-foreground font-mono uppercase">Years Exp.</div>
                  </div>
                  <div className="w-px bg-white/10" />
                  <div className="text-center">
                    <div className="text-3xl font-display font-bold text-primary mb-1">2009</div>
                    <div className="text-xs text-muted-foreground font-mono uppercase">Founded</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="font-display font-bold text-3xl md:text-4xl">我們的故事</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Therlect 汎海科技成立於 2009 年，由一群資深熱流工程師所創立。我們深信，熱管理不僅是一門科學，更是一門藝術。
              </p>
              <p className="text-muted-foreground leading-relaxed">
                在過去的十多年裡，我們見證了電子產品效能的快速發展，也解決了隨之而來的散熱挑戰。從早期的被動散熱到現在的主動式液冷與相變技術，我們始終走在技術的最前沿。
              </p>
              <p className="text-muted-foreground leading-relaxed">
                除了熱管理，我們更將視野拓展至遠紅外線技術，探索熱能對人體健康與工業應用的廣泛應用。我們不僅是您的供應商，更是您在熱能領域最值得信賴的策略夥伴。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-secondary/5 border-y border-white/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl mb-4">核心價值</h2>
            <p className="text-muted-foreground text-lg">指引我們前進的信念與原則</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "創新 (Innovation)",
                desc: "不滿足於現狀，持續探索熱力學的邊界，將新技術應用於更多可能性。",
                color: "text-yellow-400",
                bg: "bg-yellow-500/10"
              },
              {
                icon: Target,
                title: "精準 (Precision)",
                desc: "從模擬分析到生產製造，我們對每一個數據、每一個公差都力求完美。",
                color: "text-red-400",
                bg: "bg-red-500/10"
              },
              {
                icon: Users,
                title: "夥伴 (Partnership)",
                desc: "與客戶緊密合作，共同面對挑戰。您的成功，就是我們最大的成就。",
                color: "text-blue-400",
                bg: "bg-blue-500/10"
              }
            ].map((value, i) => (
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

      {/* Clients Logo Grid */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">我們的客戶</h2>
            <p className="text-muted-foreground text-lg">感謝這些優秀企業選擇汎海作為合作夥伴</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: "Foxconn", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/foxconn-logo-transparent-hxaGURFynnSAqphzQuQpbs.webp" },
              { name: "HP", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/hp-logo-transparent-LVwhjfN3ZoB5tPQwh32vPi.webp" },
              { name: "Audeo", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/audeo-logo-transparent-QSnP8aNfywz8dZiy8AUSB6.webp" },
              { name: "Arcadyan", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/arcadyan-logo-transparent-jugbYcjoSxfqdz7SFDbkam.webp" },
              { name: "FIH Mobile", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/fih-mobile-logo-transparent-AVoYXoJMs8ScjG4CSEYhB3.webp" },
              { name: "Gigatek", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/gigatek-logo-transparent-mybhB9T5JSQfrJZMwhynSB.webp" },
              { name: "AUO", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/auo-logo-transparent-aRwuPdZf53UBRSeHwLs8Po.webp" },
              { name: "Kenmec", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/kenmec-logo-transparent-25462zwjPgQdYadXSuhi4H.webp" },
              { name: "NTU", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/ntu-logo-transparent-Dxzq6MSSgii5Y9NyPX7JmM.webp" },
              { name: "PCEE", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/pcee-logo-transparent-BXn9KdtCYZd7sMZMiti4TE.webp" },
              { name: "Mytek", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/mytek-logo-transparent-a2UHZtFF8xo9KmtqwZ4qU9.webp" },
              { name: "Cruise", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/cruise-logo-transparent-27mWY5CNnKGYEC5wgMNrCp.webp" }
            ].map((client, i) => (
              <div key={i} className="h-32 flex flex-col items-center justify-center border border-white/10 rounded-xl bg-card/50 hover:bg-card/80 hover:border-primary/50 transition-all cursor-default group shadow-lg hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="w-20 h-20 object-contain mb-3 group-hover:scale-110 transition-transform"
                />
                <span className="font-display font-semibold text-xs text-muted-foreground group-hover:text-foreground transition-colors text-center px-2">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />
        <div className="container relative z-10 max-w-3xl">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">加入我們的行列</h2>
          <p className="text-muted-foreground text-lg mb-8">
            我們始終在尋找對熱力學充滿熱情的人才。如果您也想推動技術進步，歡迎加入 Therlect。
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8">
              聯絡我們 <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
