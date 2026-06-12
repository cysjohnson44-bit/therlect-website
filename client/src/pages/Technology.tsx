import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Wind, Layers, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Technology() {
  const { t } = useTranslation();
  const [passiveExpanded, setPassiveExpanded] = useState(false);
  const [activeExpanded, setActiveExpanded] = useState(false);

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
            {t('technology.pageTitle')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-5 fade-in duration-700 delay-100">
            {t('technology.pageDescription')}
          </p>
        </div>
      </section>

      {/* Thermodynamic Engineering Section */}
      <section className="py-20 relative">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="/assets/thermal_analysis.jpg" 
                  alt="Thermodynamic Engineering" 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  style={{ contentVisibility: 'auto', willChange: 'transform' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

              </div>
            </div>
            
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                  <Cpu className="w-6 h-6 text-cyan-400" />
                </div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-cyan-400">{t('technology.thermodynamicsTitle')}</h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('technology.thermodynamicsDescription')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="bg-card/30 border border-white/5 p-5 rounded-xl hover:bg-card/50 transition-colors">
                  <Wind className="w-8 h-8 text-cyan-400 mb-3" />
                  <h3 className="font-bold text-lg mb-2">{t('technology.cfdAnalysis')}</h3>
                  <p className="text-sm text-muted-foreground">{t('technology.cfdDescription')}</p>
                </div>
                
                <div className="bg-card/30 border border-white/5 p-5 rounded-xl hover:bg-card/50 transition-colors">
                  <Layers className="w-8 h-8 text-cyan-400 mb-3" />
                  <h3 className="font-bold text-lg mb-2">{t('technology.heatModuleDesign')}</h3>
                  <p className="text-sm text-muted-foreground">{t('technology.heatModuleDescription')}</p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>



      {/* Core Technologies Section */}
      <section className="py-20 relative">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl mb-4">{t('technology.coreTechnologiesTitle')}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t('technology.coreTechnologiesSubtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Passive Cooling */}
            <div className="bg-card/30 border border-white/5 p-8 rounded-xl hover:bg-card/50 transition-colors">
              <Link href="/technology/passive-cooling">
                <button
                  onClick={() => setPassiveExpanded(!passiveExpanded)}
                  className="w-full flex items-center justify-between mb-4 hover:text-cyan-300 transition-colors"
                >
                  <h3 className="font-display font-bold text-2xl text-cyan-400">{t('technology.passiveCoolingTitle')}</h3>
                  <ChevronDown className={`w-6 h-6 text-cyan-400 transition-transform duration-300 ${passiveExpanded ? 'rotate-180' : ''}`} />
                </button>
              </Link>
              <p className="text-muted-foreground mb-4">{t('technology.passiveCoolingShortDesc')}</p>
              {passiveExpanded && (
                <div className="mt-6 space-y-4 pt-6 border-t border-white/10 animate-in fade-in duration-300">
                  <div className="space-y-3">
                    <h4 className="font-bold text-cyan-300">{t('technology.passiveCoolingFeatures')}</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• {t('technology.passiveCoolingFeature1')}</li>
                      <li>• {t('technology.passiveCoolingFeature2')}</li>
                      <li>• {t('technology.passiveCoolingFeature3')}</li>
                      <li>• {t('technology.passiveCoolingFeature4')}</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-cyan-300">{t('technology.passiveCoolingApplications')}</h4>
                    <p className="text-sm text-muted-foreground">{t('technology.passiveCoolingApplicationsDesc')}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Active Cooling */}
            <div className="bg-card/30 border border-white/5 p-8 rounded-xl hover:bg-card/50 transition-colors">
              <Link href="/technology/active-cooling">
                <button
                  onClick={() => setActiveExpanded(!activeExpanded)}
                  className="w-full flex items-center justify-between mb-4 hover:text-purple-300 transition-colors"
                >
                  <h3 className="font-display font-bold text-2xl text-purple-400">{t('technology.activeCoolingTitle')}</h3>
                  <ChevronDown className={`w-6 h-6 text-purple-400 transition-transform duration-300 ${activeExpanded ? 'rotate-180' : ''}`} />
                </button>
              </Link>
              <p className="text-muted-foreground mb-4">{t('technology.activeCoolingShortDesc')}</p>
              {activeExpanded && (
                <div className="mt-6 space-y-4 pt-6 border-t border-white/10 animate-in fade-in duration-300">
                  <div className="space-y-3">
                    <h4 className="font-bold text-purple-300">{t('technology.activeCoolingFeatures')}</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• {t('technology.activeCoolingFeature1')}</li>
                      <li>• {t('technology.activeCoolingFeature2')}</li>
                      <li>• {t('technology.activeCoolingFeature3')}</li>
                      <li>• {t('technology.activeCoolingFeature4')}</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-purple-300">{t('technology.activeCoolingApplications')}</h4>
                    <p className="text-sm text-muted-foreground">{t('technology.activeCoolingApplicationsDesc')}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container max-w-3xl">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">{t('technology.ctaTitle')}</h2>
          <p className="text-muted-foreground text-lg mb-8">
            {t('technology.ctaDescription')}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8">
              {t('nav.contact')} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
