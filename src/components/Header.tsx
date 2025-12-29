import logoImage from 'figma:asset/26937fb990f844e3a6fa5bdf2c75ef442b91d5d9.png';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-white/10 font-['JetBrains_Mono']">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-4 md:py-6">
        <div className="flex items-center justify-between md:grid md:grid-cols-12 md:gap-4">
          {/* Left: Logo */}
          <div className="md:col-span-6 flex items-center gap-6 w-auto">
            <img 
              src={logoImage} 
              alt="Mirror: See you" 
              className="h-10 md:h-16 w-auto object-contain"
            />
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/60 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:col-span-6 items-center justify-end gap-8">
            <a href="#science" className="text-sm tracking-wide hover:text-[#D4AF37] transition-colors">
              The Science
            </a>
            <a href="#simulator" className="text-sm tracking-wide hover:text-[#D4AF37] transition-colors">
              The Simulator
            </a>
            <a href="#accreditation" className="text-sm tracking-wide hover:text-[#D4AF37] transition-colors">
              Accreditation
            </a>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-4">
            <a 
              href="#science" 
              className="text-sm tracking-wide hover:text-[#D4AF37] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              The Science
            </a>
            <a 
              href="#simulator" 
              className="text-sm tracking-wide hover:text-[#D4AF37] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              The Simulator
            </a>
            <a 
              href="#accreditation" 
              className="text-sm tracking-wide hover:text-[#D4AF37] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accreditation
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}