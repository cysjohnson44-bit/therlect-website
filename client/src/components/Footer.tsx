import { Link } from "wouter";
import { MapPin, Phone, Mail, Facebook, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 pt-16 pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -top-[200px] -right-[200px] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 relative z-10">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-auto">
              <img src="/assets/logo.png" alt="Therlect Logo" className="h-full w-auto object-contain" />
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            專注於熱管理與遠紅外線技術的創新解決方案，為全球客戶提供從理論分析到市場應用的全方位服務。
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Youtube size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-foreground mb-6 text-lg">快速連結</h4>
          <ul className="space-y-3">
            <li><Link href="/"><span className="text-muted-foreground hover:text-primary text-sm cursor-pointer transition-colors">首頁</span></Link></li>
            <li><Link href="/technology"><span className="text-muted-foreground hover:text-primary text-sm cursor-pointer transition-colors">核心技術</span></Link></li>
            <li><Link href="/solutions"><span className="text-muted-foreground hover:text-primary text-sm cursor-pointer transition-colors">解決方案</span></Link></li>
            <li><Link href="/about"><span className="text-muted-foreground hover:text-primary text-sm cursor-pointer transition-colors">關於我們</span></Link></li>
            <li><Link href="/contact"><span className="text-muted-foreground hover:text-primary text-sm cursor-pointer transition-colors">聯絡我們</span></Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-foreground mb-6 text-lg">服務項目</h4>
          <ul className="space-y-3">
            <li className="text-muted-foreground text-sm">熱流體動力學分析</li>
            <li className="text-muted-foreground text-sm">散熱模組設計與優化</li>
            <li className="text-muted-foreground text-sm">遠紅外線應用開發</li>
            <li className="text-muted-foreground text-sm">熱管理顧問服務</li>
            <li className="text-muted-foreground text-sm">產品量產與製造</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-foreground mb-6 text-lg">聯絡資訊</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-muted-foreground text-sm">
                241557 新北市三重區<br />光復路一段61巷27號9樓之3
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <span className="text-muted-foreground text-sm">+886-2-2999-5596</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <span className="text-muted-foreground text-sm">jimmy.chen@therlect.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} Therlect Co., Ltd. All rights reserved.
        </p>
        <div className="flex gap-6">
          <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer">隱私權政策</span>
          <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer">使用條款</span>
        </div>
      </div>
    </footer>
  );
}
