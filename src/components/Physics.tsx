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
      <div className="max-w-[1440px] mx-auto px-8 py-24">
        <div className="grid grid-cols-12 gap-4 mb-16">
          <div className="col-span-12">
            <h2 className="text-4xl tracking-tight mb-4">The Physics</h2>
            <p className="text-white/60 font-['JetBrains_Mono']">
              CHC Variables — The fundamental architecture of human cognition.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-12 gap-px bg-white/10">
          {variables.map((variable, idx) => (
            <div 
              key={idx}
              className="col-span-4 bg-black p-12 hover:bg-white/5 transition-colors"
            >
              <div className="space-y-6">
                <div className="text-6xl text-[#D4AF37]">{variable.symbol}</div>
                
                <div className="space-y-2">
                  <div className="font-['JetBrains_Mono'] text-sm text-white/40">
                    {variable.code}
                  </div>
                  <h3 className="text-2xl tracking-wide">
                    {variable.title}
                  </h3>
                  <p className="text-[#D4AF37] font-['JetBrains_Mono']">
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
