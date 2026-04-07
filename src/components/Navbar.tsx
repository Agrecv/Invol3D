import { Link, useLocation } from 'react-router-dom';
import { Menu, Layers, X, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.portfolio'), path: '/' },
    { name: t('nav.3d-tours'), path: '/3d-tours' },
    { name: t('nav.aerial'), path: '/aerial-mapping' },
    { name: t('nav.video'), path: '/video-production' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-surface/80 backdrop-blur-xl shadow-lg shadow-primary/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <Layers className="text-primary group-hover:rotate-12 transition-transform" size={28} />
          <span className="text-2xl font-bold tracking-tighter text-primary font-headline">Involv3D</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-headline tracking-tight">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm uppercase tracking-widest transition-colors hover:text-primary ${
                location.pathname === link.path ? 'text-primary' : 'text-on-surface-variant'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-on-surface-variant hover:text-primary transition-colors"
            >
              <Globe size={14} />
              {language === 'en' ? 'PT' : 'EN'}
            </button>
            <button className="bg-primary/10 text-primary px-6 py-2 rounded-md font-medium hover:bg-primary/20 hover:scale-[1.02] transition-all duration-300 border border-primary/30">
              {t('nav.book')}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="p-2 text-primary"
          >
            <Globe size={20} />
          </button>
          <button className="text-primary" onClick={() => setIsOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-surface-container-lowest flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-3">
                <Layers className="text-primary" size={28} />
                <span className="text-2xl font-bold tracking-tighter text-primary font-headline">Involv3D</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-primary">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl font-bold font-headline tracking-tighter ${
                    location.pathname === link.path ? 'text-primary' : 'text-on-surface'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button className="mt-4 bg-primary text-on-primary px-8 py-4 rounded-md font-bold tracking-widest uppercase text-sm">
                {t('nav.quote')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
