import React from 'react';
import { motion } from 'motion/react';
import { Camera, Users, Heart, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const CulturePage = () => {
  const { t, language } = useLanguage();
  const gallery = [
    { title: language === 'zh' ? "2023年参加广州陶瓷工业展现场" : "2023 Guangzhou Ceramic Industry Exhibition", image: "https://picsum.photos/seed/exhibition/600/400" },
    { title: language === 'zh' ? "总经理肖信芳先生荣获2022年株洲市青年科技之星" : "General Manager Xiao Xinfang won the 2022 Zhuzhou Youth Science and Technology Star", image: "https://picsum.photos/seed/award-ceo/600/400" },
    { title: language === 'zh' ? "成立中共醴陵创智机械党支部" : "Establishment of the CPC Branch of Liling Chuangzhi Technology", image: "https://picsum.photos/seed/party/600/400" },
    { title: language === 'zh' ? "员工子女升学奖励" : "Employee Children Education Awards", image: "https://picsum.photos/seed/employee-kids/600/400" },
    { title: language === 'zh' ? "省委巡视组走访调研" : "Provincial Inspection Team Visit and Research", image: "https://picsum.photos/seed/visit/600/400" },
    { title: language === 'zh' ? "团建现场" : "Team Building Event", image: "https://picsum.photos/seed/teambuilding/600/400" }
  ];

  return (
    <div className="pt-24">
      {/* Banner */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://picsum.photos/seed/culture/1920/600" 
          alt="Culture" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{t.nav.culture}</h1>
          <p className="text-white/70 text-lg uppercase tracking-widest">Corporate Culture</p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title">{t.culture.philosophyTitle}</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary shrink-0">
                    <Star size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{t.culture.visionTitle}</h3>
                    <p className="text-slate-600">{t.culture.visionDesc}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary shrink-0">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{t.culture.serviceTitle}</h3>
                    <p className="text-slate-600">{t.culture.serviceDesc}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{t.culture.teamTitle}</h3>
                    <p className="text-slate-600">{t.culture.teamDesc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <blockquote className="text-2xl font-serif italic text-primary leading-relaxed mb-6">
                {t.culture.quote}
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full" />
                <div>
                  <div className="font-bold text-primary">{t.culture.ceo}</div>
                  <div className="text-sm text-slate-500">{t.culture.ceoTitle}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">{t.culture.galleryTitle}</h2>
            <p className="text-slate-500">{t.culture.galleryDesc}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 shadow-sm group-hover:shadow-xl transition-all">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-center font-medium text-slate-700">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
