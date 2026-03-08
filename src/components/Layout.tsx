import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Instagram, Facebook, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Book Now', path: '/book', isButton: true },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 selection:bg-gold-500 selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-2xl font-serif font-semibold tracking-wider text-gold-300">
            LASKARINA
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isButton ? (
                <Link
                  key={link.path}
                  to={link.path}
                  className="px-6 py-2 bg-gold-500 hover:bg-gold-400 text-black font-medium rounded-full transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm tracking-widest uppercase hover:text-gold-300 transition-colors duration-300 ${
                    location.pathname === link.path ? 'text-gold-300' : 'text-zinc-400'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-zinc-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-zinc-900 border-b border-white/5 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-lg font-serif ${
                      link.isButton
                        ? 'bg-gold-500 text-black text-center py-3 rounded-lg font-sans font-medium'
                        : 'text-zinc-300 hover:text-gold-300'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-serif text-gold-300 mb-4">LASKARINA</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Experience premium hair care and styling in the heart of Tangier. 
              Where elegance meets expertise.
            </p>
            <div className="flex gap-4 text-zinc-400">
              <a href="#" className="hover:text-gold-300 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-gold-300 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-gold-500" />
                <span>27 Av. Moulay Hicham,<br />Tanger 90060, Morocco</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold-500" />
                <a href="tel:+212612465064" className="hover:text-white transition-colors">06 12 46 50 64</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Hours</h4>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li className="flex justify-between">
                <span>Monday - Saturday</span>
                <span className="text-white">10:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white">Closed</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-zinc-600 text-xs">
          © {new Date().getFullYear()} Laskarina Beauty Salon. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
