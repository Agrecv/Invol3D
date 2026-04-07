import { Link } from 'react-router-dom';
import { Share2, Video, Globe, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="text-2xl font-bold text-primary tracking-tighter font-headline">Involv3D</div>
          <p className="text-on-surface-variant font-light text-sm leading-relaxed max-w-xs">
            {t('footer.desc')}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-xs uppercase tracking-widest text-primary font-bold">{t('footer.solutions')}</h4>
          <Link to="/3d-tours" className="text-on-surface-variant hover:text-primary transition-colors text-sm">{t('nav.3d-tours')}</Link>
          <Link to="/aerial-mapping" className="text-on-surface-variant hover:text-primary transition-colors text-sm">{t('nav.aerial')}</Link>
          <Link to="/video-production" className="text-on-surface-variant hover:text-primary transition-colors text-sm">{t('nav.video')}</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-xs uppercase tracking-widest text-primary font-bold">{t('footer.company')}</h4>
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Case Studies</a>
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Privacy</a>
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Terms</a>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="text-xs uppercase tracking-widest text-primary font-bold">{t('footer.updates')}</h4>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-surface-container border-none text-sm w-full focus:ring-1 focus:ring-primary text-on-surface px-4 py-2"
            />
            <button className="bg-primary px-4 text-on-primary hover:bg-primary-container transition-colors">
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="flex gap-4">
            <Share2 className="text-on-surface-variant hover:text-on-surface cursor-pointer transition-colors" size={20} />
            <Video className="text-on-surface-variant hover:text-on-surface cursor-pointer transition-colors" size={20} />
            <Globe className="text-on-surface-variant hover:text-on-surface cursor-pointer transition-colors" size={20} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-on-surface-variant text-xs font-light tracking-wide">
          © 2024 Involv3D Visual Productions. {t('footer.rights')}
        </p>
        <div className="flex gap-8">
          <span className="text-[10px] text-on-surface-variant/40 tracking-widest uppercase">Version 4.0.1</span>
          <span className="text-[10px] text-on-surface-variant/40 tracking-widest uppercase">LAT: 40.7128 LON: -74.0060</span>
        </div>
      </div>
    </footer>
  );
}
