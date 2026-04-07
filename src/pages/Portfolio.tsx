import { motion } from 'motion/react';
import { ArrowUpRight, MapPin, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Portfolio() {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Skyline Industrial Park",
      client: "Horizon Logistics Group",
      category: t('nav.aerial'),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkXqsgFcbZvYPbQvW30HCMUNFQ3qrbfmxdR5oLQp3xwv9qD9Mz4dUlZLAV8BlokEwcRi5UPYewhFVE9bD2-H3MknUAIaYdruV0odYj-3BXA-eXHwU7JQY7gnt-kLWEHpSZCgkty4Gz8-VHiWgUVYmHahOthQTM8aYNvWFdry2S4OegUyK4s0vp0DimHj16m_bnJ-LXWQPRlmB9vdSw7xyh7-pLMeaq4fbA_H0ajVLyHcEjgTi6sjJW0XeVuAdfrFwWe-F4DErtlAZl",
      tag: "DATA_SET_042 • 4K_RENDER",
      color: "tertiary"
    },
    {
      title: "The Azure Penthouse",
      client: "Stellar Realty Intl.",
      category: t('nav.3d-tours'),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDBthiEUG3V9G54GGD3lhF8hSZAytS6Bvqc4e1qSY73VQtXpNhIq_AJAvZT2Gup4PhakJmq8WyG37HHrSVcBfEoq1xPG6TogcFuZpwbDpTujSHfKVcKVZtA6SCylPmNFOyj0KNfCMfKyXtgVBZSCRqKzcU-qBwp9xlWv9ByAYUxFW8rBUOTzyyJ-WnCcVVZ-JncK40gjKt4Yp3-0pc7MauDKOz8FjgHzF5iFoePlm0dDBxgZLs6AK1OOqhkcUNlnGjRh-J4V2_59rA",
      tag: "SCAN_M_99 • DIGITAL_TWIN",
      color: "primary"
    },
    {
      title: "BioTech HQ Launch",
      client: "OmniLabs Global",
      category: t('nav.video'),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxouhFSxMq2lPt_Uti-aTsEJatjwh6011petkAFDTt_qEeUuGiKw69Mp4TWxjwmkwiPZffXhh0nAWedppJDhe9t6EEzuDSFrRQS66Hlbq8nh0_ulrC248NSHidk0BFO9mP8ChqChhwBInaXJoltLBAlbNNP5y_3OJA6SNUHaFsGAEGrzrLGJiz6W15HWPdDL8D3UiImB-xwccWEiNBtnMf6k9hFh2Dh4eohxz-nCITPwxhqMOngrs0FZYcyUW0qFbIeruD_2j2rls5",
      tag: "REC_LOG_V2 • 8K_OUTPUT",
      color: "on-surface"
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Hero */}
      <header className="mb-16 md:mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-6 leading-[0.9]"
            >
              {t('portfolio.hero.title')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-on-surface-variant text-lg md:text-xl font-light leading-relaxed max-w-lg"
            >
              {t('portfolio.hero.subtitle')}
            </motion.p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex items-center gap-2 text-tertiary font-mono text-sm tracking-widest uppercase">
              <MapPin size={14} />
              40.7128° N, 74.0060° W
            </div>
            <button className="bg-primary text-on-primary px-8 py-4 rounded-md font-bold tracking-wide hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20">
              {t('portfolio.hero.cta')}
            </button>
          </div>
        </div>
      </header>

      {/* Filter */}
      <section className="mb-12 overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex items-center gap-3 md:gap-6 min-w-max">
          <button className="px-6 py-2 rounded-full text-xs uppercase tracking-widest bg-primary text-on-primary font-bold">{t('portfolio.filter.all')}</button>
          {[t('nav.video'), t('nav.3d-tours'), t('nav.aerial')].map(cat => (
            <button key={cat} className="px-6 py-2 rounded-full text-xs uppercase tracking-widest border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-colors">
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.article 
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-surface-container-high overflow-hidden transition-all duration-500 hover:translate-y-[-4px]"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <span className={`text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 bg-${project.color}/10 text-${project.color} border border-${project.color}/20`}>
                  {project.category}
                </span>
                <ArrowUpRight className="text-outline-variant group-hover:text-primary transition-colors" size={20} />
              </div>
              <h3 className="text-2xl font-bold mb-2 tracking-tight">{project.title}</h3>
              <p className="text-on-surface-variant text-sm font-light">{t('portfolio.card.client')}: {project.client}</p>
              <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4 text-xs font-mono text-tertiary/60">
                <span>{project.tag}</span>
              </div>
            </div>
          </motion.article>
        ))}

        {/* Large Featured Card */}
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative md:col-span-2 bg-surface-container-high overflow-hidden transition-all duration-500 hover:translate-y-[-4px]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZmCUI0uSckIjYMBIPpAnwTd1ExV4_Mt8Iwhs4mjRxO1UTZC3tGtJKTc23TYlJLH9bllgr8qcfEgM5Ksv4nVlnb4d2jeHbLnXwOV_MtUOHbfmUPc3lW7D9mNAooHGmq48hyMx8SKquJ09TuZhMCLkGL9iEofd8sEbDgnEsc-7-Lue90jTkEDh3kIkhEsuRXUOehbRmM3mfvFicaEJgzhcX1A7LD0mIweUUvoYvu_ZkjOEnTWZk1kTs_dBpwLkGzsrMB825npker7d_" 
                alt="University Mapping" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 bg-tertiary/10 text-tertiary border border-tertiary/20">Institutional Mapping</span>
                <ArrowUpRight className="text-outline-variant group-hover:text-primary transition-colors" size={24} />
              </div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight">{t('portfolio.featured.title')}</h3>
              <p className="text-on-surface-variant text-lg font-light leading-relaxed mb-8">
                {t('portfolio.featured.desc')}
              </p>
              <p className="text-on-surface-variant text-sm font-light mb-8">{t('portfolio.card.client')}: Department of Education</p>
              <div className="pt-8 border-t border-white/5 flex items-center gap-6 text-xs font-mono text-tertiary/60">
                <span>SURVEY_COMPLETE</span>
                <span>PRECISION: 0.5CM</span>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Card 5 */}
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative bg-surface-container-high overflow-hidden transition-all duration-500 hover:translate-y-[-4px]"
        >
          <div className="aspect-[16/10] overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfsBTCtlEdzAR0tI937hyWdNeAPYsdf8TuDfyJJ1GIpntS8CCSbzdTvnMo-hUaGI5EJ3BLtntUvhoSPK1A71sb8ErUAXz8iEetUW6YIC6QFq0PaIMzawjNhQ7XnsQR5k4_WBuIbPraSwO5LibdY0irWuo-sFXWVsAltjhrQ1l6TBho6kbli4FH4LvkEHqYkkrwngjkB6qRdS32ezIEkaQdgNC5CeyxRD2DGGcoy87mdMYttDLn3ExgHrtUOlYAS1sDfFfsmpNGGulL" 
              alt="Retail 3D" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 bg-primary/10 text-primary border border-primary/20">{t('nav.3d-tours')}</span>
              <ArrowUpRight className="text-outline-variant group-hover:text-primary transition-colors" size={20} />
            </div>
            <h3 className="text-2xl font-bold mb-2 tracking-tight">Velvet & Vine Boutique</h3>
            <p className="text-on-surface-variant text-sm font-light">{t('portfolio.card.client')}: V&V Retail Partners</p>
            <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4 text-xs font-mono text-tertiary/60">
              <span>SCAN_RT_02 • COMMERCIAL</span>
            </div>
          </div>
        </motion.article>
      </section>

      {/* CTA */}
      <section className="mt-32 p-12 md:p-24 bg-surface-container-low relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <Globe className="text-primary w-[400px] h-[400px] translate-x-1/2 -translate-y-1/4" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">{t('portfolio.cta.title')}</h2>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-primary text-on-primary px-10 py-4 rounded-md font-bold text-lg hover:scale-[1.05] transition-transform">{t('portfolio.cta.button1')}</button>
            <button className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition-colors">{t('portfolio.cta.button2')}</button>
          </div>
        </div>
      </section>
    </div>
  );
}
