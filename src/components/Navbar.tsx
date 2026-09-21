import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'SERVICES', href: '#services' },
  { label: 'ABOUT', href: '#about' },
  { label: 'PROCESS', href: '#process' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button onClick={() => handleNavClick('#home')} className="focus:outline-none">
            <Logo variant={scrolled ? 'dark' : 'light'} />
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`text-xs font-semibold tracking-widest transition-colors duration-200 ${
                  scrolled
                    ? 'text-navy hover:text-amber-brand'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <button
              onClick={() => handleNavClick('#estimate')}
              className="bg-amber-brand hover:bg-amber-light text-white text-xs font-bold tracking-wider uppercase px-6 py-3 rounded transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              REQUEST FREE ESTIMATE
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-2 rounded transition-colors ${scrolled ? 'text-navy' : 'text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-navy border-t border-white/10 px-4 py-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-white/90 hover:text-white text-sm font-semibold tracking-widest text-left py-3 px-4 rounded hover:bg-white/5 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#estimate')}
              className="mt-3 bg-amber-brand hover:bg-amber-light text-white text-sm font-bold tracking-wider uppercase px-6 py-3 rounded transition-colors"
            >
              REQUEST FREE ESTIMATE
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
