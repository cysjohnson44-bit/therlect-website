import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Settings, BarChart3, PenTool, Box, Award, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import React from "react";
import { useTranslation } from 'react-i18next';

export default function Solutions() {
  const { t } = useTranslation();
  const [expandedDomain, setExpandedDomain] = React.useState<string | null>(null);

  const processSteps = [
    {
      icon: PenTool,
      titleKey: "processSteps.conceptDesign.title",
      shortDescKey: "processSteps.conceptDesign.shortDesc",
      fullDescKey: "processSteps.conceptDesign.fullDesc",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/solution-concept-design-efapdzoNfAtZR5YiUiXEmp.webp",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      icon: BarChart3,
      titleKey: "processSteps.simulationAnalysis.title",
      shortDescKey: "processSteps.simulationAnalysis.shortDesc",
      fullDescKey: "processSteps.simulationAnalysis.fullDesc",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/solution-simulation-analysis-Rn2foMtm5DEkjiLoAyqXC5.webp",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20"
    },
    {
      icon: Box,
      titleKey: "processSteps.prototypeTesting.title",
      shortDescKey: "processSteps.prototypeTesting.shortDesc",
      fullDescKey: "processSteps.prototypeTesting.fullDesc",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/solution-prototype-testing-78jHJTmMvZwbpHDXrPXccA.webp",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20"
    },
    {
      icon: Settings,
      titleKey: "processSteps.productionManufacturing.title",
      shortDescKey: "processSteps.productionManufacturing.shortDesc",
      fullDescKey: "processSteps.productionManufacturing.fullDesc",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/solution-production-manufacturing-9MjHz5Ehra55U55Wp959pL.webp",
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20"
    },
    {
      icon: Award,
      titleKey: "processSteps.qualityOptimization.title",
      shortDescKey: "processSteps.qualityOptimization.shortDesc",
      fullDescKey: "processSteps.qualityOptimization.fullDesc",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663272903053/6a2H4uYcRvYtNrWj4wnxzN/solution-quality-optimization-nF48UjT7wHtG4mTN7CmQjh.webp",
      color: "text-green-400",
      bg: "bg-green-500/10",
      border: "border-green-500/20"
    }
  ];

  const applicationDomains = [
    {
      titleKey: "applications.consumerElectronics.title",
      descriptionKey: "applications.consumerElectronics.description",
      itemsKey: ["applications.consumerElectronics.app1", "applications.consumerElectronics.app2", "applications.consumerElectronics.app3", "applications.consumerElectronics.app4"],
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/HDbcUTVMVfBSqLfR.png"
    },
    {
      titleKey: "applications.unmanned.title",
      descriptionKey: "applications.unmanned.description",
      itemsKey: ["applications.unmanned.app1", "applications.unmanned.app2", "applications.unmanned.app3", "applications.unmanned.app4"],
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/rQWAiVQhssZTmvbh.png"
    },
    {
      titleKey: "applications.wearables.title",
      descriptionKey: "applications.wearables.description",
      itemsKey: ["applications.wearables.app1", "applications.wearables.app2", "applications.wearables.app3", "applications.wearables.app4"],
      images: ["https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/fxMQvLvpAagqRLpQ.png", "https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/KrFBaqwhQoUtisZY.png", "https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/FFaKfehtFLyjyDEE.png"],
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/fxMQvLvpAagqRLpQ.png"
    },
    {
      titleKey: "applications.industrial.title",
      descriptionKey: "applications.industrial.description",
      itemsKey: ["applications.industrial.app1", "applications.industrial.app2", "applications.industrial.app3", "applications.industrial.app4"],
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663272903053/LvFKRTfSfppXIELk.png"
    },
    {
      titleKey: "applications.automotive.title",
      descriptionKey: "applications.automotive.description",
      itemsKey: ["applications.automotive.app1", "applications.automotive.app2", "applications.automotive.app3", "applications.automotive.app4"],
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
            {t("applications.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-5 fade-in duration-700 delay-100">
            {t("applications.subtitle")}
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
                        <h3 className="font-display font-bold text-2xl mb-3 text-foreground">{t(step.titleKey)}</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{t(step.fullDescKey)}</p>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="flex-1">
                      <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                        <img 
                          src={step.image} 
                          alt={t(step.titleKey)}
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
            <h2 className="font-display font-bold text-4xl mb-4">{t("applications.title")}</h2>
            <p className="text-muted-foreground text-lg mb-4">{t("applications.subtitle")}</p>
          </div>

          <div className="space-y-24">
            {applicationDomains.map((app, i) => {
              const isExpanded = expandedDomain === t(app.titleKey);
              return (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                {/* Text Content */}
                <div className="flex-1">
                  <div className="space-y-4">
                    <button
                      onClick={() => setExpandedDomain(isExpanded ? null : t(app.titleKey))}
                      className="w-full text-left group hover:opacity-80 transition-opacity"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-display font-bold text-3xl text-foreground group-hover:text-primary transition-colors">{t(app.titleKey)}</h3>
                        <ChevronDown className={`w-6 h-6 text-primary transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                      </div>
                    </button>
                    <p className="text-muted-foreground leading-relaxed text-base">{t(app.descriptionKey)}</p>
                    
                    <div className="pt-4">
                      <h4 className="font-semibold text-foreground mb-3">{t("applications.title")}:</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {app.itemsKey.map((itemKey, j) => (
                          <div key={j} className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                            <span className="text-sm">{t(itemKey)}</span>
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
                            alt={`${t(app.titleKey)} - ${imgIdx + 1}`}
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
                        alt={t(app.titleKey)}
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
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">{t("cta.title")}</h2>
          <p className="text-muted-foreground text-lg mb-8">
            {t("cta.description")}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8">
              {t("cta.startProject")} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
