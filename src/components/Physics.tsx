export function Physics() {
  const variables = [
    {
      symbol: '∞',
      code: 'Gf',
      title: 'THE SHAPER',
      description: 'Fluid Reasoning',
      detail: 'The ability to identify patterns, solve novel problems, and adapt to new situations without prior knowledge.'
    },
    {
      symbol: '⊕',
      code: 'Gwm',
      title: 'THE HOLD',
      description: 'Working Memory',
      detail: 'The cognitive system that temporarily holds and manipulates information during complex tasks.'
    },
    {
      symbol: '⚡',
      code: 'Gs',
      title: 'PACE',
      description: 'Processing Speed',
      detail: 'The rate at which cognitive operations can be executed and information can be processed.'
    }
  ];

  return (
    <section id="science" className="border-b border-white/10">
      {/* Inject missing responsive classes manually */}
      <style>{`
        @media (min-width: 768px) {
          .md\\:col-span-4 { grid-column: span 4 !important; }
          .md\\:gap-px { gap: 1px !important; }
          .md\\:bg-white\\/10 { background-color: rgba(255, 255, 255, 0.1) !important; }
          .md\\:p-12 { padding: 3rem !important; }
          .md\\:px-8 { padding-left: 2rem !important; padding-right: 2rem !important; }
          .md\\:py-24 { padding-top: 6rem !important; padding-bottom: 6rem !important; }
          .md\\:mb-16 { margin-bottom: 4rem !important; }
          .md\\:border-0 { border-width: 0 !important; }
          .md\\:text-6xl { font-size: 3.75rem !important; line-height: 1 !important; }
          .md\\:text-4xl { font-size: 2.25rem !important; line-height: 2.5rem !important; }
          .md\\:text-2xl { font-size: 1.5rem !important; line-height: 2rem !important; }
          .md\\:text-base { font-size: 1rem !important; line-height: 1.5rem !important; }
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-4 py-12 md:px-8 md:py-24">
        <div className="grid grid-cols-12 gap-4 mb-8 md:mb-16">
          <div className="col-span-12">
            <h2 className="text-3xl md:text-4xl tracking-tight mb-4">The Physics</h2>
            <p className="text-white/60 font-['JetBrains_Mono'] text-sm md:text-base">
              CHC Variables — The fundamental architecture of human cognition.
            </p>
          </div>
        </div>
        
        {/* Mobile: Gap-6 with borders | Desktop: Gap-px with bg-white/10 */}
        <div className="grid grid-cols-12 gap-6 bg-transparent md:gap-px md:bg-white/10">
          {variables.map((variable, idx) => (
            <div 
              key={idx}
              className="col-span-12 md:col-span-4 bg-black p-6 md:p-12 border border-white/10 md:border-0 hover:bg-white/5 transition-colors font-['JetBrains_Mono']"
            >
              <div className="space-y-6">
                <div className="text-5xl md:text-6xl text-[#D4AF37]">{variable.symbol}</div>
                
                <div className="space-y-2">
                  <div className="font-['JetBrains_Mono'] text-sm text-white/40">
                    {variable.code}
                  </div>
                  <h3 className="text-xl md:text-2xl tracking-wide">
                    {variable.title}
                  </h3>
                  <p className="text-[#D4AF37] font-['JetBrains_Mono'] text-sm md:text-base">
                    {variable.description}
                  </p>
                </div>
                
                <p className="text-sm text-white/60 leading-relaxed">
                  {variable.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}