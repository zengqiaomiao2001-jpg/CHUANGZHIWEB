import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24">
      {/* Banner */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://picsum.photos/seed/contact/1920/600" 
          alt="Contact" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{t.nav.contact}</h1>
          <p className="text-white/70 text-lg uppercase tracking-widest">Contact Us</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="section-title">{t.contact.support}</h2>
              <p className="text-slate-500 mb-12">{t.contact.subtitle}</p>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">{t.contact.address}</h3>
                    <p className="text-slate-600">{t.contact.addressVal}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">{t.contact.phone}</h3>
                    <p className="text-slate-600">+86 18684687810 (肖信芳)</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">{t.contact.email}</h3>
                    <p className="text-slate-600">contact@hncamic.com</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">{t.contact.hours}</h3>
                    <p className="text-slate-600">{t.contact.hoursVal}</p>
                  </div>
                </div>
              </div>

              {/* QR Code Placeholder */}
              <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100 inline-flex items-center gap-6">
                <div className="w-24 h-24 bg-white border border-slate-200 rounded-lg flex items-center justify-center">
                  <span className="text-[10px] text-slate-400">微信扫码</span>
                </div>
                <div>
                  <div className="font-bold text-primary">{t.contact.follow}</div>
                  <div className="text-sm text-slate-500">{t.contact.followDesc}</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100">
              <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                <MessageSquare className="text-secondary" /> {t.contact.formTitle}
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">{t.contact.name}</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" placeholder={t.contact.namePh} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">{t.contact.tel}</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" placeholder={t.contact.telPh} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">{t.contact.mail}</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" placeholder={t.contact.mailPh} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">{t.contact.msg}</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" placeholder={t.contact.msgPh} />
                </div>
                <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-secondary transition-all shadow-lg flex items-center justify-center gap-2">
                  {t.contact.submit} <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] bg-slate-100 relative">
        <div className="absolute inset-0 flex items-center justify-center text-slate-400">
          <div className="text-center">
            <MapPin size={48} className="mx-auto mb-4 opacity-20" />
            <p className="font-medium">{t.contact.mapLoading}</p>
            <p className="text-sm">{t.contact.addressVal}</p>
          </div>
        </div>
      </section>
    </div>
  );
};
