import { Link } from "wouter";
import { MapPin, Phone, Mail, Facebook, Linkedin, Youtube, Copy, Check } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useState } from "react";

export default function Footer() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("jimmy.chen@therlect.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = "jimmy.chen@therlect.com";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <footer className="bg-background border-t border-border/50 pt-16 pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -top-[200px] -right-[200px] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 relative z-10">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-16 w-auto">
              <img src="/assets/logo.png" alt="Therlect Logo" className="h-full w-auto object-contain" />
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            {t('footer.description')}
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/Therlect" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="Facebook"><Facebook size={20} /></a>
            <a href="https://tw.linkedin.com/company/therlect-co-ltd" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="LinkedIn"><Linkedin size={20} /></a>
            <a href="https://www.youtube.com/watch?v=aigp6jhZZnQ" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="YouTube"><Youtube size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-foreground mb-6 text-lg">{t('footer.quickLinks')}</h4>
          <ul className="space-y-3">
            <li><Link href="/"><span className="text-muted-foreground hover:text-primary text-sm cursor-pointer transition-colors">{t('footer.home')}</span></Link></li>
            <li><Link href="/technology"><span className="text-muted-foreground hover:text-primary text-sm cursor-pointer transition-colors">{t('footer.coreTechnology')}</span></Link></li>
            <li><Link href="/solutions"><span className="text-muted-foreground hover:text-primary text-sm cursor-pointer transition-colors">{t('footer.solutions')}</span></Link></li>
            <li><Link href="/about"><span className="text-muted-foreground hover:text-primary text-sm cursor-pointer transition-colors">{t('footer.aboutUs')}</span></Link></li>
            <li><Link href="/contact"><span className="text-muted-foreground hover:text-primary text-sm cursor-pointer transition-colors">{t('footer.contactUs')}</span></Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-foreground mb-6 text-lg">{t('footer.services')}</h4>
          <ul className="space-y-3">
            <li className="text-muted-foreground text-sm">{t('footer.service1')}</li>
            <li className="text-muted-foreground text-sm">{t('footer.service2')}</li>
            <li className="text-muted-foreground text-sm">{t('footer.service3')}</li>
            <li className="text-muted-foreground text-sm">{t('footer.service4')}</li>
            <li className="text-muted-foreground text-sm">{t('footer.service5')}</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-foreground mb-6 text-lg">{t('footer.contactInfo')}</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div className="text-muted-foreground text-sm">
                <div className="font-medium text-foreground text-xs mb-1">{t('footer.newTaipeiOffice')}</div>
                <div>{t('footer.newTaipeiAddress')}</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div className="text-muted-foreground text-sm">
                <div className="font-medium text-foreground text-xs mb-1">{t('footer.tainanOffice')}</div>
                <div>{t('footer.tainanAddress')}</div>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <a href="tel:+886229995596" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                +886-2-2999-5596
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <div className="flex items-center gap-2">
                <a href="mailto:jimmy.chen@therlect.com" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  jimmy.chen@therlect.com
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="text-muted-foreground hover:text-primary transition-colors p-1 rounded hover:bg-primary/10"
                  title={copied ? (t('footer.copied') || 'Copied!') : (t('footer.copyEmail') || 'Copy email')}
                >
                  {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                </button>
              </div>
            </li>
          </ul>

          {/* Social Media Links in Contact Section */}
          <div className="mt-6 pt-4 border-t border-border/30">
            <p className="text-xs text-muted-foreground mb-3">{t('footer.followUs')}</p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/Therlect" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all" title="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://tw.linkedin.com/company/therlect-co-ltd" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all" title="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="https://www.youtube.com/watch?v=aigp6jhZZnQ" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all" title="YouTube">
                <Youtube size={16} />
              </a>
              <a href="mailto:jimmy.chen@therlect.com" className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all" title="Email">
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} Therlect Co., Ltd. All rights reserved.
        </p>
        <div className="flex gap-6">
          <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer">{t('footer.privacy')}</span>
          <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer">{t('footer.terms')}</span>
        </div>
      </div>
    </footer>
  );
}
