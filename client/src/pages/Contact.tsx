import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, Youtube } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const company = formData.get('company') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    
    try {
      const response = await fetch('/api/trpc/contact.submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          json: { name, email, phone, company, subject, message },
        }),
        credentials: 'include',
      });
      
      if (response.ok) {
        setIsSubmitting(false);
        toast.success(t('contact.successMessage'));
        (e.target as HTMLFormElement).reset();
      } else {
        setIsSubmitting(false);
        toast.error(t('contact.errorMessage'));
      }
    } catch (error) {
      setIsSubmitting(false);
      toast.error(t('contact.errorMessage'));
      console.error('Form submission error:', error);
    }
  };

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
            {t('contact.pageTitle')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-5 fade-in duration-700 delay-100">
            {t('contact.pageDescription')}
          </p>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display font-bold text-3xl mb-6">{t('contact.infoTitle')}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {t('contact.infoDescription')}
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-card/30 border border-white/5 hover:bg-card/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{t('contact.taipeiOffice')}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('contact.taipeiAddress')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-card/30 border border-white/5 hover:bg-card/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{t('contact.tainanOffice')}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('contact.tainanAddress')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-card/30 border border-white/5 hover:bg-card/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{t('contact.phoneLabel')}</h3>
                    <p className="text-muted-foreground font-mono text-lg">
                      {t('contact.phoneNumber')}
                    </p>
                  </div>
                </div>



                <div className="flex items-start gap-4 p-6 rounded-xl bg-card/30 border border-white/5 hover:bg-card/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{t('contact.businessHours')}</h3>
                    <p className="text-muted-foreground">
                      {t('contact.businessHoursTime')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[50px] -z-10" />
              
              <h2 className="font-display font-bold text-3xl mb-8">{t('contact.formTitle')}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-muted-foreground">{t('contact.nameLabel')}</label>
                    <Input id="name" name="name" required placeholder={t('contact.namePlaceholder')} className="bg-background/50 border-white/10 focus:border-primary/50" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-muted-foreground">{t('contact.companyLabel')}</label>
                    <Input id="company" name="company" placeholder={t('contact.companyPlaceholder')} className="bg-background/50 border-white/10 focus:border-primary/50" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground">{t('contact.emailLabel')}</label>
                    <Input id="email" name="email" type="email" required placeholder={t('contact.emailPlaceholder')} className="bg-background/50 border-white/10 focus:border-primary/50" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-muted-foreground">{t('contact.phoneLabel')}</label>
                    <Input id="phone" name="phone" type="tel" placeholder={t('contact.phonePlaceholder')} className="bg-background/50 border-white/10 focus:border-primary/50" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">{t('contact.subjectLabel')}</label>
                  <Input id="subject" name="subject" required placeholder={t('contact.subjectPlaceholder')} className="bg-background/50 border-white/10 focus:border-primary/50" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-muted-foreground">{t('contact.messageLabel')}</label>
                  <Textarea id="message" name="message" required placeholder={t('contact.messagePlaceholder')} className="min-h-[150px] bg-background/50 border-white/10 focus:border-primary/50 resize-none" />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">{t('contact.sending')}</span>
                  ) : (
                    <span className="flex items-center gap-2">{t('contact.sendButton')} <Send className="w-4 h-4" /></span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-20 border-t border-white/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl mb-6">{t('contact.youtubeTitle')}</h2>
            <p className="text-muted-foreground text-lg mb-8">{t('contact.youtubeDescription')}</p>
            <a 
              href="https://www.youtube.com/watch?v=aigp6jhZZnQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors duration-300"
            >
              <Youtube className="w-6 h-6" />
              {t('contact.youtubeButton')}
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-card/30 border-t border-white/5">
        <div className="container">
          <h2 className="font-display font-bold text-3xl mb-12 text-center">{t('contact.mapTitle')}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Taipei Office Map */}
            <div>
              <h3 className="font-bold text-xl mb-4">{t('contact.taipeiOffice')}</h3>
              <div className="h-[300px] w-full relative grayscale hover:grayscale-0 transition-all duration-700 rounded-xl overflow-hidden border border-white/5">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.467687926646!2d121.46966631500666!3d25.05212898396384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a870a133708f%3A0x6375628004216852!2zMjQx5paw5YyX5biC5LiJ6YeN5Y2A5YWJ5b6p6Lev5LiA5q61NjHlt7cyN-iZnw!5e0!3m2!1szh-TW!2stw!4v1645512345678!5m2!1szh-TW!2stw" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                />
              </div>
            </div>

            {/* Tainan Office Map */}
            <div>
              <h3 className="font-bold text-xl mb-4">{t('contact.tainanOffice')}</h3>
              <div className="h-[300px] w-full relative grayscale hover:grayscale-0 transition-all duration-700 rounded-xl overflow-hidden border border-white/5">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.8742842843897!2d120.29333!3d22.88333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e8c5c5c5c5c5d%3A0x5c5c5c5c5c5c5c5c!2z5Y2X5riv5biC5Y2X5riv5biC5Y2X5riv5biC5Y2X5riv5biC5Y2X5riv5biC5Y2X5riv5biC!5e0!3m2!1szh-TW!2stw!4v1645512345678!5m2!1szh-TW!2stw" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
