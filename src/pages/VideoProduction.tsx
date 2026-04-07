import { motion } from 'motion/react';
import { Play, TrendingUp, Zap, ArrowRight, Video } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function VideoProduction() {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center px-8 py-24 overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCySeNdd55vV4CqHSJgoViJ4IKKjNIeJco_1HqqQMXI_1U6smHCRgbFOwIXPL_DG7s9Mvh78sATkAQhrrkyJFJC5xtfiuFCgfZiakRHRQNgpBBsg4VIol-bt6PsrgPW8r0OCApmtklJ41xff3AwODjQsAroJ17BbGvGSR2KCbJO0FGC0Z1g8zQKYu9tZMWSilj_fN7BZoQgorpkD-II7S1eY81Cv1TMAeC8kEqzv-KNJ6DhNqp-ZyHnLd7oE15bf5LR0h9yU3hvxbOs" 
            alt="Video Production" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl">
          <div className="inline-block px-3 py-1 mb-6 border border-primary/30 bg-primary/5 rounded-full">
            <span className="text-primary text-[10px] uppercase tracking-[0.2em] font-bold">{t('video.hero.tag')}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter text-on-surface mb-8">
            {t('video.hero.title').split(' ').slice(0, 3).join(' ')} <br/>
            <span className="text-primary italic">{t('video.hero.title').split(' ').slice(3).join(' ')}</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-xl mb-10 leading-relaxed">
            {t('video.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary text-on-primary px-8 py-4 font-bold rounded-md hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,253,193,0.3)]">
              {t('video.hero.cta1')}
            </button>
            <button className="bg-surface-container-high/40 backdrop-blur-md border border-outline-variant/30 text-on-surface px-8 py-4 font-bold rounded-md hover:bg-surface-container-highest transition-all">
              {t('video.hero.cta2')}
            </button>
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2 uppercase">{t('video.formats.title').split(' ').slice(0, 2).join(' ')} <span className="text-primary">{t('video.formats.title').split(' ').slice(2).join(' ')}</span></h2>
              <div className="w-12 h-1 bg-primary"></div>
            </div>
            <p className="text-on-surface-variant max-w-md text-sm">{t('video.formats.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: t('video.formats.reels.title'), icon: Video, color: "primary", desc: t('video.formats.reels.desc') },
              { title: t('video.formats.tiktok.title'), icon: Zap, color: "tertiary", desc: t('video.formats.tiktok.desc') },
              { title: t('video.formats.shorts.title'), icon: Play, color: "on-surface", desc: t('video.formats.shorts.desc') }
            ].map((item, i) => (
              <div key={i} className="group bg-surface-container p-8 rounded-xl hover:bg-surface-container-high transition-colors duration-500 relative overflow-hidden">
                <item.icon className={`text-${item.color} text-4xl mb-6`} size={40} />
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{item.desc}</p>
                <div className={`flex items-center gap-2 text-${item.color} text-[10px] font-bold tracking-widest uppercase`}>
                  <span>Performance Hub</span>
                  <ArrowRight size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-24 px-8 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tighter mb-6 leading-tight">
              {t('video.metrics.title').split(' ').slice(0, 2).join(' ')} <br/> <span className="text-primary">{t('video.metrics.title').split(' ').slice(2).join(' ')}</span>
            </h2>
            <p className="text-on-surface-variant mb-12 leading-relaxed">
              {t('video.metrics.subtitle')}
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-1">127%</div>
                <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">{t('video.metrics.engagement')}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-tertiary mb-1">3.4M</div>
                <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">{t('video.metrics.views')}</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-surface-container p-2">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd_zA-_Qkp8APH9hkhSl2n-yigHrroEC1hQBGky6__yv6anpRN6LTgaqi7EAV9AZw_rLzfkgq0UF_E7Rqsz4l3ILUVAHrl81djCwr5z49HnecgeyBU03E4nAiW4ZsjPYBzsj5gaTW6aK3cIC34eFFfoTMU6IavfCntHB3DxIMPus0E2LVzTnQBG2m6cbrvDAIx0lYUzCfrjfqVbOoWfVU-ALAOkbgR5ISE9PfinXpsIybluPbqCC8E2_NKVgi55F6OuvJqe7OnYWJi" 
                  alt="Analytics" 
                  className="w-full h-full object-cover grayscale brightness-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-surface/80 backdrop-blur-xl p-6 rounded-xl border border-white/10 shadow-2xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <TrendingUp className="text-primary" size={20} />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-tight">Social Health Index</div>
                        <div className="text-xl font-bold text-primary">+42.8%</div>
                      </div>
                    </div>
                    <div className="w-48 h-1 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-8 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,194,0.05)_0%,transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
            {t('video.cta.title').split(' ').slice(0, 2).join(' ')} <br/> <span className="text-primary italic">{t('video.cta.title').split(' ').slice(2).join(' ')}</span>
          </h2>
          <p className="text-on-surface-variant text-lg mb-12 max-w-xl mx-auto">
            {t('video.cta.subtitle')}
          </p>
          <div className="flex justify-center">
            <button className="group flex items-center gap-3 bg-primary text-on-primary px-10 py-5 font-black rounded-md hover:scale-105 transition-all shadow-[0_0_40px_rgba(0,253,193,0.2)] uppercase tracking-tighter">
              {t('video.cta.button')}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
