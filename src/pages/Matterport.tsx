import { motion } from 'motion/react';
import { Camera, Share2, Tag, ArrowRight, View, Ruler, Layout, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Matterport() {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center px-8 md:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent z-10"></div>
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB3WCvQCiH6424ofVcvyqnskbtsMi3qteI-tafLCvdObJswafxtC5uka-5yYdBIttGmwHf3VVm_X2sCq2RGoVIUcItbhsM4yXziqdoJ7gVNOfzd4PXl8EnLTq062TPy4pgEtS4ZWr7RTG0v56B8Fui4rGoSujckdAdKe7NyklCcaEVAUAI104LTVer_hip82RWmqk8t2BkvqNjJVGOnWlvRv-5F382AMe913caef6ooVb1rUMx4w06asjZ4dOwLK-GqoJq_v8nqx2G" 
            alt="Luxury penthouse" 
            className="w-full h-full object-cover grayscale opacity-40"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-20 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-primary"></span>
            <span className="uppercase tracking-widest text-primary text-xs font-bold">{t('matterport.hero.tag')}</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold text-on-surface tracking-tight mb-8 leading-[0.9]">
            {t('nav.3d-tours')} <span className="text-gradient italic">Matterport</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
            {t('matterport.hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="bg-primary text-on-primary px-8 py-4 font-bold uppercase tracking-widest text-sm hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(0,255,194,0.2)]">
              {t('matterport.hero.cta1')}
            </button>
            <button className="glass-panel border border-outline-variant/30 text-on-surface px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-surface-container-high transition-colors">
              {t('matterport.hero.cta2')}
            </button>
          </div>
        </div>
      </section>

      {/* Bento Showcase */}
      <section className="py-24 px-8 md:px-24 bg-surface-container-low">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-[1400px] mx-auto">
          <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-lowest h-[500px]">
            <div className="absolute top-4 right-4 z-20">
              <span className="bg-tertiary/20 text-tertiary px-3 py-1 text-[10px] tracking-widest uppercase backdrop-blur-md">Live Preview 4K</span>
            </div>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT9nryoEtKnO2ipkPzZS6RtZxiOfqmr78X8rgOJ21sR2jhgW740Y1FKGeJoReDb3gujbcGYU9ldPc1nnhfH_ZLkMawBm6StPeoet38fqBDaqFyHkDp1SIcLetKoWJzTEAYD7IOh5LXezHqIUzjEFtwuGtz-_f0h0OxtIt_7bdwEhUn4pq2vjHF6C-M7IZln9TPcHel2cUB7R5gTlnk9ZgEDcB9hsKMmWRm1aoBPMmqSi2wA3Sc5jEYQlAjhMbsDufCtZRPgaD38zkY" 
              alt="3D Tour" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-xl border border-primary/40 group-hover:scale-110 transition-transform">
                <View className="text-primary" size={40} />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 z-20">
              <h3 className="text-2xl font-bold text-on-surface mb-2">{t('matterport.bento.immersive.title')}</h3>
              <p className="text-sm text-on-surface-variant max-w-md">{t('matterport.bento.immersive.desc')}</p>
            </div>
          </div>

          <div className="md:col-span-4 bg-surface-container-high p-8 flex flex-col justify-between">
            <div>
              <Ruler className="text-tertiary mb-6" size={40} />
              <h3 className="text-3xl font-bold text-on-surface mb-4 leading-tight">{t('matterport.bento.precision.title')}</h3>
              <p className="text-on-surface-variant leading-relaxed">
                {t('matterport.bento.precision.desc')}
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-outline-variant/20">
              <div className="flex justify-between items-end mb-2">
                <span className="text-xs text-on-surface-variant tracking-wider uppercase">{t('matterport.bento.precision.label')}</span>
                <span className="text-2xl text-tertiary font-bold">&lt; 1%</span>
              </div>
              <div className="w-full h-1 bg-surface-container-highest">
                <div className="w-[99%] h-full bg-tertiary"></div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 bg-surface-container-high p-8 group overflow-hidden relative min-h-[300px]">
            <h3 className="text-2xl font-bold text-on-surface mb-4">{t('matterport.bento.floorplan.title')}</h3>
            <p className="text-sm text-on-surface-variant mb-6">{t('matterport.bento.floorplan.desc')}</p>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3lHwz4mXP4ZZ2wyyY91HjpesLKbLTtRFPQ89apOH73ZSvlEL5k2IUCYythtq6VMHlroomr9t7hoDSX2tdL1zFD4xnZ3hyNQ0TKZZ9IuBidC7PixyWIsGHN8oQa0GiekIu2wvQoIxg0sTl207gho-Q7JGwnaij01Y6XYb5qpc2aG_x4EQBjS75QMWa2DWOBMgSC870gNM0-guvPMuMr304iQtP52Skib_BCA41nXAhxunlFXFuYnIS6rIYKFnmhVt_t8Io9VEqRpPo" 
              alt="Floor plan" 
              className="absolute -bottom-10 -right-10 w-64 h-64 grayscale opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="md:col-span-7 bg-primary text-on-primary p-8 flex items-center gap-8 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 tracking-tight leading-none">{t('matterport.bento.sales.title')}</h3>
              <p className="text-on-primary/80 max-w-sm">{t('matterport.bento.sales.desc')}</p>
            </div>
            <div className="hidden sm:block relative z-10 ml-auto">
              <TrendingUp className="opacity-20" size={80} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container to-transparent opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 px-8 md:px-24">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1 space-y-12">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">{t('matterport.features.title')}</h2>
            <div className="space-y-8">
              {[
                { icon: Camera, title: t('matterport.features.1.title'), desc: t('matterport.features.1.desc') },
                { icon: Share2, title: t('matterport.features.2.title'), desc: t('matterport.features.2.desc') },
                { icon: Tag, title: t('matterport.features.3.title'), desc: t('matterport.features.3.desc') }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-on-surface-variant">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-square bg-surface-container-high rounded-full absolute -top-10 -left-10 w-full opacity-20 blur-3xl"></div>
            <div className="relative glass-panel p-4 rounded-xl border border-outline-variant/20">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDb1q044gV_7kndToZHIPfsTj0-9TP-zw-ukUouEYdc74QfIJGZuSYkbYq6Iv2SvfAZ4hfQvfE_rjV2wZfMn_Gkc8_N8xCPZd4R9oYj_fLU8EeB3M8VjF06A8aGlmSf3l_QiS_C1L_O3kBAoD556P5PPmhpoPjHJMcekDTx2ARzadCtXGakWS5uaic7aFYzBRTqVqQyxspHucNZZMhnp5O3M7FK1IzTApo7rgbZqPgJw3jfU87FbFHBkO7U53lH6w0w4g7MRw9u_CP" 
                alt="Camera" 
                className="rounded-lg shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 md:px-24 bg-surface-container-lowest text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-tertiary tracking-[0.3em] uppercase text-[10px] mb-8 block">{t('matterport.cta.tag')}</span>
          <h2 className="text-4xl md:text-7xl font-bold mb-12">{t('matterport.cta.title')}</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="inline-flex items-center justify-center bg-primary text-on-primary font-bold uppercase tracking-widest px-10 py-5 text-sm hover:scale-105 transition-transform">
              {t('matterport.cta.button')}
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
