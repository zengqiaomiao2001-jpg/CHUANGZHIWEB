import React from 'react';
import { motion } from 'motion/react';
import { Settings, Zap, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Product {
  title: string;
  model: string;
  specs: { label: string; value: string }[];
  image: string;
  features: string[];
}

const ProductCard: React.FC<Product> = ({ title, model, specs, image, features }) => {
  const { t } = useLanguage();
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all">
      <div className="aspect-video overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-1">{title}</h3>
            <span className="text-sm font-bold text-secondary uppercase tracking-widest">{model}</span>
          </div>
          <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-primary">
            <Settings size={24} />
          </div>
        </div>
        
        <div className="space-y-4 mb-8">
          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t.products.advantage}</h4>
          <ul className="grid grid-cols-1 gap-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-slate-600 text-sm">
                <CheckCircle2 size={16} className="text-secondary shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t.products.params}</h4>
          <div className="grid grid-cols-2 gap-4">
            {specs.map((spec, index) => (
              <div key={index} className="bg-slate-50 p-3 rounded-lg">
                <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">{spec.label}</div>
                <div className="text-sm font-bold text-primary">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductsPage = () => {
  const { t, language } = useLanguage();
  const products: Product[] = [
    {
      title: language === 'zh' ? "智能双色上釉线" : "Intelligent Dual-Color Glazing Line",
      model: "BZ-220F4",
      image: "https://picsum.photos/seed/glazing1/800/600",
      features: language === 'zh' 
        ? ["自动扫灰、精口、喷内釉、擦口", "上外釉、擦底等连续工序", "高产量、釉面质量稳定"]
        : ["Auto dusting, cleaning, interior glazing", "Exterior glazing, bottom cleaning", "High yield, stable quality"],
      specs: [
        { label: language === 'zh' ? "模具尺寸" : "Mold Size", value: "60-145mm" },
        { label: language === 'zh' ? "产能" : "Capacity", value: "≤ 23 Pcs/Min" },
        { label: language === 'zh' ? "总功率" : "Total Power", value: "5.5KW" },
        { label: language === 'zh' ? "适用机型" : "Application", value: language === 'zh' ? "杯/碗/盘" : "Cup/Bowl/Plate" }
      ]
    },
    {
      title: language === 'zh' ? "单色捞釉机" : "Single Color Dipping Machine",
      model: "1015 / 7102",
      image: "https://picsum.photos/seed/glazing2/800/600",
      features: language === 'zh'
        ? ["全器型、全釉面使用", "实现自动捞釉，减轻劳动强度", "质量稳定、运营成本低"]
        : ["All shapes, all glazing surfaces", "Auto dipping, reduces labor", "Stable quality, low cost"],
      specs: [
        { label: language === 'zh' ? "适用尺寸" : "Applicable Size", value: "H125*D100" },
        { label: language === 'zh' ? "产能" : "Capacity", value: "≤ 20 Pcs/Min" },
        { label: language === 'zh' ? "总功率" : "Total Power", value: "9.5KW" },
        { label: language === 'zh' ? "安装尺寸" : "Installation", value: language === 'zh' ? "根据需求定制" : "Customized" }
      ]
    },
    {
      title: language === 'zh' ? "AI 智能喷釉机" : "AI Intelligent Spraying Machine",
      model: "P 型",
      image: "https://picsum.photos/seed/glazing3/800/600",
      features: language === 'zh'
        ? ["使用工业手枪对产品喷釉", "满足对釉面要求高的产品生产", "记忆模仿功能，只需人工操作一遍"]
        : ["Industrial spray gun for glazing", "High quality surface finish", "Memory mimicry function"],
      specs: [
        { label: language === 'zh' ? "模具尺寸" : "Mold Size", value: "D≤350 H≤300" },
        { label: language === 'zh' ? "产能" : "Capacity", value: "≤ 8 Pcs/Min" },
        { label: language === 'zh' ? "总功率" : "Total Power", value: "6KW" },
        { label: language === 'zh' ? "安装尺寸" : "Installation", value: "L1800*W1550*H2300" }
      ]
    },
    {
      title: language === 'zh' ? "托盘滚压线" : "Tray Rolling Line",
      model: "25 / 30 / 40 / 50 单滚",
      image: "https://picsum.photos/seed/rolling/800/600",
      features: language === 'zh'
        ? ["全自动生产，适用各种陶瓷产品成型", "特别适用超大器型产品", "性价比高，性价比较高"]
        : ["Full auto, for various ceramic forming", "Special for extra large shapes", "High cost-performance ratio"],
      specs: [
        { label: language === 'zh' ? "模具尺寸" : "Mold Size", value: "125-386mm" },
        { label: language === 'zh' ? "产能" : "Capacity", value: "≤ 22 Pcs/Min" },
        { label: language === 'zh' ? "总功率" : "Total Power", value: "25KW - 33KW" },
        { label: language === 'zh' ? "安装尺寸" : "Installation", value: "L10000-14500" }
      ]
    },
    {
      title: language === 'zh' ? "空心注浆机" : "Hollow Casting Machine",
      model: "二工位 / 四工位",
      image: "https://picsum.photos/seed/casting1/800/600",
      features: language === 'zh'
        ? ["用于陶瓷酒瓶的注浆成型", "实现自动注浆、倒浆、烘干等连续工序", "减轻人工劳动强度"]
        : ["For ceramic wine bottle forming", "Auto casting, pouring, drying", "Reduces labor intensity"],
      specs: [
        { label: language === 'zh' ? "模具尺寸" : "Mold Size", value: "L320-230" },
        { label: language === 'zh' ? "产能" : "Capacity", value: "≤ 8 Pcs/Min" },
        { label: language === 'zh' ? "总功率" : "Total Power", value: "30KW - 35KW" },
        { label: language === 'zh' ? "安装尺寸" : "Installation", value: "L20500-27100" }
      ]
    },
    {
      title: language === 'zh' ? "超高压注浆机" : "Ultra-High Pressure Casting Machine",
      model: "ZJ-KP",
      image: "https://picsum.photos/seed/casting2/800/600",
      features: language === 'zh'
        ? ["运用新型复合材料代替传统的石膏模具", "提高产品密度，减少产品变形", "能适用小批量、多产品订单生产"]
        : ["Composite materials instead of plaster", "Higher density, less deformation", "For small batch, multi-product orders"],
      specs: [
        { label: language === 'zh' ? "产品尺寸" : "Product Size", value: "6 / 9 / 13 / 16 Inch" },
        { label: language === 'zh' ? "产能" : "Capacity", value: "1.5-7 Pcs/Min" },
        { label: language === 'zh' ? "总功率" : "Total Power", value: "25KW" },
        { label: language === 'zh' ? "模具数量" : "Mold Qty", value: "6 Sets" }
      ]
    }
  ];

  return (
    <div className="pt-24">
      {/* Banner */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://picsum.photos/seed/products/1920/600" 
          alt="Products" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{t.products.title}</h1>
          <p className="text-white/70 text-lg uppercase tracking-widest">Product Catalog</p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">{t.products.coreTitle}</h2>
            <p className="text-slate-500">{t.products.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard 
                key={index} 
                title={product.title}
                model={product.model}
                specs={product.specs}
                image={product.image}
                features={product.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.products.customTitle}</h2>
              <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
                {t.products.customDesc}
              </p>
              <div className="flex justify-center gap-4">
                <button className="bg-secondary text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                  {t.products.getSolution}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
