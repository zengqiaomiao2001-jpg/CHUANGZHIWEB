import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Target, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const AboutPage = () => {
  const { t } = useLanguage();
  const honors = [
    "国家高新技术企业",
    "湖南省专精特新中小企业",
    "湖南省智能制造系统解决供应商",
    "醴陵陶瓷制造装备协会副会长单位",
    "质量管理体系认证 (ISO9001)",
    "职业健康安全管理体系认证 (ISO45001)"
  ];

  return (
    <div className="pt-24">
      {/* Banner */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/assets/about-banner.jpg" 
          alt="About Us" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{t.nav.about}</h1>
          <p className="text-white/70 text-lg uppercase tracking-widest">About Chuangzhi Technology</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="section-title">{t.about.introTitle}</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>{t.about.introP1}</p>
                <p>{t.about.introP2}</p>
                <p>{t.about.introP3}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/tech1/400/300" alt="Tech" className="rounded-xl shadow-lg" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/tech2/400/300" alt="Tech" className="rounded-xl shadow-lg mt-8" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/tech3/400/300" alt="Tech" className="rounded-xl shadow-lg -mt-8" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/tech4/400/300" alt="Tech" className="rounded-xl shadow-lg" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">{t.about.strengthsTitle}</h2>
            <p className="text-slate-500">{t.about.strengthsDesc}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">{t.about.strength1Title}</h3>
              <p className="text-slate-500">{t.about.strength1Desc}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">{t.about.strength2Title}</h3>
              <p className="text-slate-500">{t.about.strength2Desc}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">{t.about.strength3Title}</h3>
              <p className="text-slate-500">{t.about.strength3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Honors */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">{t.about.honorsTitle}</h2>
            <p className="text-slate-500">{t.about.honorsDesc}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {honors.map((honor, index) => (
              <div key={index} className="border border-slate-100 p-6 rounded-xl flex items-center gap-4 hover:bg-slate-50 transition-colors">
                <Award className="text-secondary shrink-0" size={24} />
                <span className="font-medium text-slate-700">{honor}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
