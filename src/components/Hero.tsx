export function Hero() {
  return (
    <section className="border-b border-white/10 relative overflow-hidden bg-black">
      {/* Increased padding for top and bottom breathing room, mobile optimized */}
      <div className="max-w-[1440px] mx-auto px-6 py-24 md:px-8 md:py-40 relative z-10">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <div className="text-center space-y-8 md:space-y-12">
              
              {/* H1: Dominant size to establish visual hierarchy */}
              <h1 className="font-['JetBrains_Mono'] text-5xl md:text-8xl tracking-tighter font-medium leading-[1.1] md:leading-[0.9]">
                Stop learning <br className="hidden md:block" /> by crashing.
              </h1>
              
              {/* Sub-headline: Scaled to support the H1 without competing */}
              <p className="font-['JetBrains_Mono'] text-lg md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
                Mirror is the first high-fidelity flight simulator for learning. Powered by Cognitive Physics.
              </p>
              
              <div className="pt-4 md:pt-8">
                <button 
                  onClick={() => {
                    const event = new CustomEvent('openApplicationModal');
                    window.dispatchEvent(event);
                  }}
                  className="bg-[#D4AF37] text-black px-12 py-4 rounded-full tracking-widest font-bold hover:bg-[#E5C158] transition-all hover:scale-105 uppercase text-[10px] md:text-sm"
                >
                  Apply for Founding Seat 1/10
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Restored: Mirror reflection effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent transform translate-y-full"></div>
      </div>
    </section>
  );
}