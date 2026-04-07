import { motion } from 'motion/react';
import { Navigation, LocateFixed, Cloud, Building2, Map as MapIcon, ArrowRight, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function AerialMapping() {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative px-8 md:px-16 py-20 overflow-hidden technical-grid min-h-[70vh] flex flex-col justify-center">
        <div className="max-w-4xl relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-primary"></div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-tertiary">{t('aerial.hero.tag')}</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold text-on-surface tracking-tight mb-8 leading-[0.95]">
            {t('aerial.hero.title').split(' ')[0]} <br/> <span className="text-primary italic">{t('aerial.hero.title').split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-xl mb-12 leading-relaxed">
            {t('aerial.hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="px-8 py-4 bg-primary text-on-primary font-bold text-sm tracking-wider uppercase flex items-center gap-3 hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(0,255,194,0.3)]">
              {t('aerial.hero.cta1')}
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 bg-surface-container-high border border-outline-variant/30 text-on-surface font-bold text-sm tracking-wider uppercase hover:bg-surface-container-highest transition-colors">
              {t('aerial.hero.cta2')}
            </button>
          </div>
        </div>
        
        <div className="absolute right-[-10%] top-[20%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div 
          className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none"
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCVgktdVC6Sm8JXoP02s55PjeesTWqTcAMYVBNP6z_xmk4shHJkg7-GXaGbXIGrc31X1G_OK-fuFVcwHRVV1VgN2hta6StqxBaAqcm62UKvp7xWYZ1sxMZw8emJchxaF3jRhsv6Df-jCBiHxJ1VAVM84FIfyxnIeQI2pPQSYGxGIviUf5jNwI_J3W289bb4ZdBfWNGU6mz9_3pcr2gJFUVGKX76326EPYrGYfsiumNVIevk-P_tl2D53bXCz_Hp0BNjKDBlmwLkv5Wg')`, backgroundSize: 'cover' }}
        ></div>
      </section>

      {/* Stats */}
      <section className="px-8 md:px-16 py-32 bg-surface">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
          <div className="md:col-span-2 bg-surface-container-low p-10 flex flex-col justify-between border-t border-primary/20">
            <div>
              <LocateFixed className="text-primary mb-6" size={40} />
              <h3 className="text-3xl font-bold mb-4">{t('aerial.stats.rtk.title').split(' ').slice(0, 3).join(' ')} <br/> {t('aerial.stats.rtk.title').split(' ').slice(3).join(' ')}</h3>
            </div>
            <p className="text-on-surface-variant text-sm">{t('aerial.stats.rtk.desc')}</p>
          </div>
          <div className="bg-surface-container p-10 text-center flex flex-col justify-center gap-2">
            <div className="text-primary text-5xl font-black">0.5<span className="text-xl">cm</span></div>
            <div className="text-[10px] uppercase tracking-widest text-on-surface/50">{t('aerial.stats.gsd.label')}</div>
          </div>
          <div className="bg-primary p-10 text-on-primary flex flex-col justify-center text-center gap-2">
            <div className="text-5xl font-black">99%</div>
            <div className="text-[10px] uppercase tracking-widest text-on-primary/70">{t('aerial.stats.accuracy.label')}</div>
          </div>
          <div className="bg-surface-container-high p-10 md:col-span-1">
            <Building2 className="text-tertiary mb-4" size={40} />
            <h4 className="text-lg font-bold">{t('aerial.stats.agro.title')}</h4>
            <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">{t('aerial.stats.agro.desc')}</p>
          </div>
          <div className="bg-surface-container p-10 md:col-span-3 flex items-center justify-between gap-8">
            <div className="max-w-xs">
              <h4 className="text-lg font-bold">{t('aerial.stats.cloud.title')}</h4>
              <p className="text-xs text-on-surface-variant mt-2">{t('aerial.stats.cloud.desc')}</p>
            </div>
            <div className="hidden md:block w-48 h-32 bg-surface-container-lowest overflow-hidden rounded">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgGufBBaX_z_IvlvtPMv3Xt1xGQ9qM78fMPAy5maAMdaS0BaQd86DlDbBBqUW9lKahJNyqNbSMN8qkPwWCtBPpcjl9EmMhc7H_ISU8ZIicX1GyB8vVFZ8JfkFjqUqIPpRTeZHnXMZ66MGNnGa54NiWP-19jIDUzoMG7_acmzVXHXyg0TuSqPVQoggpV1TyNXRQeCu54EsbCM6cn2XrifeFxsrZt1F66vm43jwivXvLGjJrI8U6Rjs7MXvrtdrY8dpqK8jT2iabW8uM" 
                alt="Dashboard" 
                className="w-full h-full object-cover grayscale opacity-50"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Viewport */}
      <section className="px-8 md:px-16 py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative bg-surface-container-lowest p-1 border border-outline-variant/20 shadow-2xl">
              <div className="absolute top-4 right-4 z-20 flex flex-col items-end">
                <span className="text-[10px] uppercase tracking-widest text-tertiary bg-surface/80 px-2 py-1 backdrop-blur-sm">Lat: -23.550520</span>
                <span className="text-[10px] uppercase tracking-widest text-tertiary bg-surface/80 px-2 py-1 backdrop-blur-sm mt-1">Lng: -46.633308</span>
              </div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCcXzKK0P3qcPibXemMsNgnot96E1YqfJQ5xwRUN21i4B1KDV4MB3OvNs86Yp-y0iTLhR-dV_JEeRchK5fsLMW0Zq569kFiEH-0k6n7LO50O57paA9XKNY68nLY_Co7YLNGJkAn1q_OEr5CWaC5NWuz7Pb5m6_bWscAlNsb9CUamtxkb_F9yCpkI8JFMmOm5ey26dG3BsOEg1IiCntim0m_zregI1bpwd4JtNkmBnr7RyN01ngbSzgaiHl87okikB_m8rvsxib2F37" 
                alt="Construction Site" 
                className="w-full grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <div className="flex items-center gap-2 bg-primary/90 px-3 py-1 text-on-primary text-[10px] font-bold uppercase tracking-widest">
                  <Navigation size={12} /> 3D MESH ACTIVE
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-8 leading-tight">{t('aerial.viewport.title').split(' ').slice(0, 3).join(' ')} <br/><span className="text-primary">{t('aerial.viewport.title').split(' ').slice(3).join(' ')}</span></h2>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              {t('aerial.viewport.desc')}
            </p>
            <ul className="space-y-6">
              {[
                { title: t('aerial.viewport.list1.title'), desc: t('aerial.viewport.list1.desc') },
                { title: t('aerial.viewport.list2.title'), desc: t('aerial.viewport.list2.desc') }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 border border-primary/40 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary"></div>
                  </div>
                  <div>
                    <h5 className="font-bold text-sm uppercase tracking-wide">{item.title}</h5>
                    <p className="text-xs text-on-surface-variant mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 md:px-16 py-32 bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 technical-grid pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">{t('aerial.cta.title').split(' ').slice(0, 4).join(' ')} <span className="text-primary">{t('aerial.cta.title').split(' ').slice(4).join(' ')}</span></h2>
          <p className="text-on-surface-variant text-lg mb-12 max-w-2xl mx-auto">{t('aerial.cta.subtitle')}</p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="bg-surface p-6 flex flex-col items-center gap-2 border border-outline-variant/20 min-w-[240px]">
              <Mail className="text-primary" size={24} />
              <span className="text-xs font-bold uppercase tracking-widest">contato@involv3d.com</span>
            </div>
            <div className="bg-surface p-6 flex flex-col items-center gap-2 border border-outline-variant/20 min-w-[240px]">
              <Phone className="text-tertiary" size={24} />
              <span className="text-xs font-bold uppercase tracking-widest">+55 11 9999-9999</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
