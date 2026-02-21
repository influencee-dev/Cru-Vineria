import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Chef', path: '/chef' },
  { name: 'Cucina', path: '/cucina' },
  { name: 'Vineria', path: '/vineria' },
  { name: 'Contatti', path: '/contatti' },
];

const LOGO_URL = 'https://cruvineriaecucina.it/wp-content/uploads/2022/05/logo-cru-maiusc.-nero-2.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const isDarkPage = location.pathname === '/' || location.pathname === '/chef';

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 md:px-12 flex justify-between items-center ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent'
        }`}
      >
        <Link to="/" className="flex items-center gap-4">
          <img 
            src={LOGO_URL} 
            alt="Cru Logo" 
            className={`h-12 md:h-16 transition-all duration-500 ${
              scrolled ? 'brightness-0' : (isDarkPage ? 'brightness-0 invert' : 'brightness-0')
            }`}
          />
        </Link>

        <button 
          onClick={() => setIsMenuOpen(true)}
          className={`flex items-center gap-2 group transition-colors duration-300 ${
            scrolled ? 'text-brand-dark' : (isDarkPage ? 'text-white' : 'text-brand-dark')
          }`}
        >
          <span className="text-sm font-medium tracking-widest uppercase hidden md:block group-hover:opacity-70 transition-opacity">Menu</span>
          <div className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <Menu className="w-6 h-6" />
          </div>
        </button>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full md:w-[400px] bg-brand-dark text-white z-[70] flex flex-col p-10"
            >
              <div className="flex justify-end mb-10">
                <button onClick={() => setIsMenuOpen(false)}>
                  <X className="w-8 h-8" />
                </button>
              </div>
              <nav className="flex-1 flex flex-col justify-center gap-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-4xl font-serif text-left hover:text-brand-burgundy transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
