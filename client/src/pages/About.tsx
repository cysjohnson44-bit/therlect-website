import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Lightbulb, History } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  const coreValues = [
    {
      icon: Lightbulb,
      titleKey: "about.innovation.title",
      descKey: "about.innovation.description",
      color: "text-yellow-400",
      bg: "bg-yellow-500/10"
    },
    {
      icon: Target,
      titleKey: "about.precision.title",
      descKey: "about.precision.description",
      color: "text-red-400",
      bg: "bg-red-500/10"
    },
    {
      icon: Users,
      titleKey: "about.partnership.title",
      descKey: "about.partnership.description",
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
            {t('about.pageTitle')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-5 fade-in duration-700 delay-100">
            {t('about.pageDescription')}
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
              {/* Stats Card */}
              <div className="absolute -bottom-8 -right-8 bg-card border border-white/10 p-6 rounded-xl shadow-xl hidden md:block">
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-primary mb-1">{t('about.foundedYearValue')}</div>
                  <div className="text-xs text-muted-foreground font-mono uppercase">{t('about.foundedYear')}</div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="font-display font-bold text-3xl md:text-4xl">{t('about.storyTitle')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.storyPart1')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.storyPart2')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.storyPart3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-secondary/5 border-y border-white/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl mb-4">{t('about.coreValuesTitle')}</h2>
            <p className="text-muted-foreground text-lg">{t('about.coreValuesSubtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, i) => (
              <div key={i} className="bg-card/50 border border-white/5 p-8 rounded-xl hover:bg-card/80 transition-all hover:-translate-y-1 hover:shadow-lg group">
                <div className={`w-14 h-14 rounded-xl ${value.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <value.icon className={`w-7 h-7 ${value.color}`} />
                </div>
                <h3 className="font-display font-bold text-2xl mb-4">{t(value.titleKey)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(value.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />
        <div className="container relative z-10 max-w-3xl">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">{t('about.ctaTitle')}</h2>
          <p className="text-muted-foreground text-lg mb-8">
            {t('about.ctaDescription')}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8">
              {t('nav.contact')} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Conflict-Free Minerals Policy */}
      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-8">{t('about.conflictFreeTitle')}</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t('about.conflictFreeIntro')}
            </p>
            
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-3">{t('about.backgroundTitle')}</h3>
                <p className="leading-relaxed">
                  {t('about.backgroundContent')}
                </p>
                <p className="leading-relaxed mt-3">
                  {t('about.commitmentContent')}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">{t('about.ourCommitmentTitle')}</h3>
                <p className="leading-relaxed">
                  {t('about.ourCommitmentContent')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
