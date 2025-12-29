export function Hero() {
  return (
    <section className="border-b border-white/10 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 py-32 relative z-10">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-10 col-start-2">
            <div className="text-center space-y-8">
              <h1 className="text-7xl tracking-tight animate-fade-in">
                Stop learning by crashing.
              </h1>
              
              <p className="text-2xl text-white/60 max-w-3xl mx-auto">
                The first high-fidelity flight simulator for learning. Powered by Cognitive Physics.
              </p>
              
              <div className="pt-8">
                <button 
                  onClick={() => {
                    const event = new CustomEvent('openApplicationModal');
                    window.dispatchEvent(event);
                  }}
                  className="bg-[#D4AF37] text-black px-12 py-4 rounded-full tracking-wide hover:bg-[#E5C158] transition-all hover:scale-105"
                >
                  Apply for Founding Seat 1/10
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mirror reflection effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent transform translate-y-full"></div>
      </div>
    </section>
  );
}