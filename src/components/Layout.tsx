import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Facebook, Twitter, Linkedin, MapPin, Phone, Mail, Languages } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useLanguage } from '../contexts/LanguageContext';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.products, href: '/products' },
    { name: t.nav.culture, href: '/culture' },
    { name: t.nav.contact, href: '/contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        (isScrolled || !isHome) ? "bg-white shadow-md py-3" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="创智科技" 
              className={cn(
                "h-10 md:h-12 w-auto transition-all",
                (!isScrolled && isHome) && "brightness-0 invert"
              )} 
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={cn(
                  "nav-link",
                  (isScrolled || !isHome) ? "text-slate-700" : "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Language Toggle */}
            <button 
              onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
              className={cn(
                "flex items-center gap-1 px-3 py-1 rounded-full border transition-all text-xs font-bold",
                (isScrolled || !isHome) 
                  ? "border-slate-200 text-slate-600 hover:bg-slate-50" 
                  : "border-white/20 text-white hover:bg-white/10"
              )}
            >
              <Languages size={14} />
              {language === 'zh' ? 'EN' : '中文'}
            </button>

            <button className="bg-secondary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all">
              {t.nav.consult}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
              className={cn(
                "p-2 rounded-full border",
                (isScrolled || !isHome) ? "border-slate-200 text-primary" : "border-white/20 text-white"
              )}
            >
              <Languages size={20} />
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={(isScrolled || !isHome) ? "text-primary" : "text-white"}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className="block text-slate-700 font-medium text-lg hover:text-secondary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button className="w-full bg-primary text-white py-3 rounded-lg font-medium">
                {t.nav.consult}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  const { t, language } = useLanguage();
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="创智科技" className="h-10 md:h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-white/60 leading-relaxed">
              {t.footer.desc}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">{t.footer.links}</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link to="/about" className="hover:text-white transition-colors">{t.nav.about}</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">{t.nav.products}</Link></li>
              <li><Link to="/culture" className="hover:text-white transition-colors">{t.nav.culture}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">{t.footer.business}</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link to="/products" className="hover:text-white transition-colors">{language === 'zh' ? '智能上釉线' : 'Intelligent Glazing Line'}</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">{language === 'zh' ? '托盘滚压线' : 'Tray Rolling Line'}</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">{language === 'zh' ? '注浆成型机' : 'Casting Machine'}</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">{language === 'zh' ? '智能烘房' : 'Intelligent Drying Room'}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">{t.nav.contact}</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-secondary shrink-0" />
                <span>{t.contact.addressVal}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-secondary shrink-0" />
                <span>+86 18684687810 ({language === 'zh' ? '肖信芳' : 'Xiao Xinfang'})</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-secondary shrink-0" />
                <span>contact@hncamic.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>{t.footer.rights}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.icp}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
