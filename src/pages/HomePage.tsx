import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Lightbulb, ShieldCheck, Users, Globe, ChevronRight, ChevronLeft, Heart, Flame, Trophy, Settings, Layers, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/home-hero.jpg" 
          alt="Innovation" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            {t.hero.title} <br />
            <span className="text-secondary">{t.hero.subtitle}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
            {t.hero.desc}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/products" className="bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2">
              {t.hero.more} <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
              {t.hero.contact}
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest">{t.hero.scroll}</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
};

const AboutSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold mb-4">
              {t.about.tag}
            </div>
            <h2 className="section-title">{t.about.title}</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              {t.about.p1}
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              {t.about.p2}
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-1">40+</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">{t.about.stat1}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-1">100+</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">{t.about.stat2}</div>
              </div>
            </div>
            <Link to="/about" className="mt-10 inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors">
              {t.about.detail} <ChevronRight size={20} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/office-team/800/800" 
                alt="Our Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/20 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProductSection = () => {
  const { t } = useLanguage();
  const series = [
    {
      icon: <Droplets className="text-secondary" size={32} />,
      title: t.products.series1,
      desc: t.products.series1Desc,
      image: "https://picsum.photos/seed/glazing/600/400"
    },
    {
      icon: <Layers className="text-secondary" size={32} />,
      title: t.products.series2,
      desc: t.products.series2Desc,
      image: "https://picsum.photos/seed/roller/600/400"
    },
    {
      icon: <Settings className="text-secondary" size={32} />,
      title: t.products.series3,
      desc: t.products.series3Desc,
      image: "https://picsum.photos/seed/casting/600/400"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold mb-4">
            {t.products.title}
          </div>
          <h2 className="section-title">{t.products.homeTitle}</h2>
          <p className="section-subtitle">
            {t.products.homeSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {series.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  {item.desc}
                </p>
                <Link to="/products" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                  {t.hero.more} <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CasesSection = () => {
  const { t } = useLanguage();
  const scrollRef = React.useRef<HTMLDivElement>(null);
  
  const cases = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    company: `合作企业 ${i + 1}`,
    equipment: `智造装备系列 ${i + 1}`,
    image: `https://picsum.photos/seed/case${i + 1}/400/300`
  }));

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold mb-4">
              {t.cases.tag}
            </div>
            <h2 className="section-title mb-0">{t.cases.title}</h2>
            <p className="text-slate-500 mt-4 max-w-2xl">
              {t.cases.subtitle}
            </p>
          </div>
          <Link to="/culture" className="group flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors">
            {t.cases.viewMore} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 group/carousel">
        {/* Navigation Buttons Overlay */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 lg:left-12 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity hidden md:block">
          <button 
            onClick={() => scroll('left')}
            className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-xl border border-white/20"
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4 lg:right-12 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity hidden md:block">
          <button 
            onClick={() => scroll('right')}
            className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-xl border border-white/20"
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 no-scrollbar snap-x snap-mandatory scroll-smooth"
        >
          {cases.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="min-w-[320px] md:min-w-[500px] aspect-[16/10] rounded-[2rem] overflow-hidden relative group shadow-xl snap-start"
            >
              <img 
                src={item.image} 
                alt={item.company} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{item.equipment}</p>
                <h3 className="text-xl font-bold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.company}</h3>
              </div>
              <Link to="/culture" className="absolute inset-0 z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CultureSection = () => {
  const { t } = useLanguage();
  const values = [
    {
      icon: <Lightbulb className="text-secondary" size={32} />,
      title: t.culture.v1Title,
      desc: t.culture.v1Desc
    },
    {
      icon: <ShieldCheck className="text-secondary" size={32} />,
      title: t.culture.v2Title,
      desc: t.culture.v2Desc
    },
    {
      icon: <Globe className="text-secondary" size={32} />,
      title: t.culture.v3Title,
      desc: t.culture.v3Desc
    },
    {
      icon: <Flame className="text-secondary" size={32} />,
      title: t.culture.v4Title,
      desc: t.culture.v4Desc
    },
    {
      icon: <Trophy className="text-secondary" size={32} />,
      title: t.culture.v5Title,
      desc: t.culture.v5Desc
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4">
            {t.culture.tag}
          </div>
          <h2 className="section-title">{t.culture.title}</h2>
          <p className="section-subtitle">
            {t.culture.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{value.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const HomePage = () => {
  const { t } = useLanguage();
  return (
    <>
      <Hero />
      <AboutSection />
      <ProductSection />
      <CasesSection />
      <CultureSection />
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            {t.cta.title}
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            {t.cta.desc}
          </p>
          <Link to="/contact" className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all shadow-xl">
            {t.cta.btn}
          </Link>
        </div>
      </section>
    </>
  );
};
