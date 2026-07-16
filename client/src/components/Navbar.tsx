import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";

function LanguageSwitcher() {
  const { currentLanguage, switchLanguage } = useLanguage();
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => switchLanguage('zh')}
        className={cn(
          "text-xs font-medium px-2 py-1 rounded transition-colors",
          currentLanguage === 'zh'
            ? "text-primary bg-primary/10"
            : "text-muted-foreground hover:text-primary"
        )}
      >
        中文
      </button>
      <span className="text-muted-foreground/50">|</span>
      <button
        onClick={() => switchLanguage('en')}
        className={cn(
          "text-xs font-medium px-2 py-1 rounded transition-colors",
          currentLanguage === 'en'
            ? "text-primary bg-primary/10"
            : "text-muted-foreground hover:text-primary"
        )}
      >
        English
      </button>
    </div>
  );
}

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, currentLanguage } = useLanguage();
  const isEn = currentLanguage === 'en';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navLinks = [
    { href: "/", label: t('nav.home') },
    {
      label: t('nav.coreTechnology'),
      submenu: [
        { href: "/technology#passive", label: t('technology.passiveCooling') },
        { href: "/technology#active", label: t('technology.activeCooling') },
        { href: "/technology#liquid", label: t('nav.liquidCooling') },
      ],
    },
    {
      label: t('nav.solutions'),
      submenu: [
        { href: "/solutions#concept", label: isEn ? 'Concept & Design' : '概念與設計' },
        { href: "/solutions#simulation", label: isEn ? 'Simulation & Analysis' : '仿真與分析' },
        { href: "/solutions#prototyping", label: isEn ? 'Prototyping' : '原型製作' },
        { href: "/solutions#production", label: isEn ? 'Production & Manufacturing' : '生產製造' },
        { href: "/solutions#quality", label: isEn ? 'Quality & Optimization' : '品質與優化' },
      ],
    },
    { href: "/about", label: t('nav.about') },
    { href: "/contact", label: t('nav.contact') },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border/50 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="relative h-16 w-auto overflow-hidden transition-transform group-hover:scale-105">
              <img 
                src="/assets/logo.png" 
                alt="Therlect Logo" 
                className="h-full w-auto object-contain"
              />
            </div>

          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link: any) => (
            <div key={link.label || link.href} className="relative group">
              {link.submenu ? (
                <>
                  <button
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary cursor-pointer relative py-2 flex items-center gap-1",
                      "text-muted-foreground"
                    )}
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                  {/* Dropdown Menu */}
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-lg py-2 min-w-max">
                      {link.submenu.map((item: any) => (
                        <Link key={item.href} href={item.href}>
                          <span className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                            {item.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link href={link.href}>
                  <span
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary cursor-pointer relative group py-2",
                      location === link.href ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                    <span className={cn(
                      "absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 transition-transform duration-300 origin-right group-hover:scale-x-100 group-hover:origin-left",
                      location === link.href && "scale-x-100 origin-left"
                    )} />
                  </span>
                </Link>
              )}
            </div>
          ))}
          {/* Language Switcher */}
          <div className="flex items-center gap-2 pl-4 border-l border-border/30">
            <LanguageSwitcher />
          </div>
          <Link href="/contact">
            <Button variant="outline" size="sm" className="border-primary/50 hover:bg-primary/10 hover:text-primary font-mono text-xs tracking-wider">
              GET IN TOUCH
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link: any) => (
            <div key={link.label || link.href}>
              {link.submenu ? (
                <>
                  <button
                    className={cn(
                      "block w-full text-left text-lg font-medium py-2 border-b border-border/50 cursor-pointer flex items-center justify-between",
                      "text-foreground"
                    )}
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                  >
                    {link.label}
                    <ChevronDown className={cn("w-4 h-4 transition-transform", openDropdown === link.label && "rotate-180")} />
                  </button>
                  {openDropdown === link.label && (
                    <div className="bg-primary/5 py-2 pl-4">
                      {link.submenu.map((item: any) => (
                        <Link key={item.href} href={item.href}>
                          <span
                            className="block text-sm text-muted-foreground py-2 hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={link.href}>
                  <span
                    className={cn(
                      "block text-lg font-medium py-2 border-b border-border/50 cursor-pointer",
                      location === link.href ? "text-primary" : "text-foreground"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </span>
                </Link>
              )}
            </div>
          ))}
          <Link href="/contact">
            <Button className="w-full mt-4" onClick={() => setIsMobileMenuOpen(false)}>
              GET IN TOUCH
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
