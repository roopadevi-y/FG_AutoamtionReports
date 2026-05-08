import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import fgLogo from '../assets/fgimage.png';
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Reports', to: '/reports' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-r from-[#0f2142]/95 via-[#163668]/92 to-[#0f4a66]/90 border-b border-blue-300/25 shadow-sm shadow-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={fgLogo} alt="FG logo" className="h-10 w-auto object-contain drop-shadow-[0_2px_10px_rgba(56,189,248,0.35)]" />
            <span className="font-bold text-xl tracking-wide text-blue-50 drop-shadow-[0_2px_10px_rgba(59,130,246,0.35)]">
              Accelerated with AI-Driven Testing Frameworks 🚀
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-blue-100 hover:text-cyan-200 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <Link
              to="/automation-stack"
              className="px-4 py-2 rounded-lg bg-cyan-500/85 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors"
            >
              Automation Stack
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 rounded-lg bg-cyan-500/85 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors"
            >
              Contact
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-blue-900/70 text-blue-100"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in fade-in duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block px-4 py-2 text-blue-100 hover:bg-blue-900/60 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
