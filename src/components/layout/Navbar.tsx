import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { cn } from '../../lib/utils';

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Memberships', href: '/memberships' },
  { name: 'Classes', href: '/classes' },
  { name: 'Personal Training', href: '/personal-training' },
  { name: 'Schedule', href: '/schedule' },
  { name: 'Trainers', href: '/trainers' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-neon rounded-lg flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform">
            <Dumbbell className="text-black w-6 h-6" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter uppercase italic">
            East Wake <span className="text-neon">Fitness Center</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'text-[11px] font-bold uppercase tracking-[0.2em] hover:text-neon transition-colors relative group',
                location.pathname === link.href ? 'text-neon' : 'text-zinc-200'
              )}
            >
              {link.name}
              <span className={cn(
                'absolute -bottom-1 left-0 w-0 h-0.5 bg-neon transition-all duration-300 group-hover:w-full',
                location.pathname === link.href ? 'w-full' : ''
              )} />
            </Link>
          ))}
          <Link
            to="/free-trial"
            className="bg-neon text-black px-5 py-2 rounded-full font-black uppercase text-[11px] tracking-[0.1em] hover:scale-105 transition-transform active:scale-95 neon-border-glow"
          >
            Free Trial
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white hover:text-neon transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-zinc-950 border-b border-white/10 p-6 flex flex-col gap-6 lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'text-lg font-medium uppercase tracking-widest hover:text-neon transition-colors',
                  location.pathname === link.href ? 'text-neon' : 'text-zinc-400'
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/free-trial"
              className="bg-neon text-black px-6 py-4 rounded-xl font-bold uppercase text-center tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              Start Free Trial
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
