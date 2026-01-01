import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "首頁" },
    { href: "/technology", label: "核心技術" },
    { href: "/solutions", label: "解決方案" },
    { href: "/about", label: "關於我們" },
    { href: "/contact", label: "聯絡我們" },
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
            <div className="relative w-10 h-10 overflow-hidden rounded-sm bg-white/10 p-1 transition-transform group-hover:scale-105">
              <img 
                src="/assets/logo.png" 
                alt="Therlect Logo" 
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-wide text-foreground leading-none">
                THERLECT
              </span>
              <span className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase">
                泛海科技
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
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
          ))}
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
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
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
