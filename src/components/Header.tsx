import logoImage from 'figma:asset/26937fb990f844e3a6fa5bdf2c75ef442b91d5d9.png';

export function Header() {
  return (
    <header className="border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-8 py-6">
        <div className="grid grid-cols-12 gap-4 items-center">
          {/* Left: Logo */}
          <div className="col-span-6 flex items-center gap-3">
            <img 
              src={logoImage} 
              alt="Mirror: See you" 
              className="h-10 w-auto object-contain"
            />
          </div>
          
          {/* Right: Navigation */}
          <nav className="col-span-6 flex items-center justify-end gap-8">
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
      </div>
    </header>
  );
}