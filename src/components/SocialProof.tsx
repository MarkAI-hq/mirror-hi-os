export function SocialProof() {
  const stats = [
    { value: '139', label: 'Educators' },
    { value: '13', label: 'Institutions' },
    { value: '12', label: 'Countries' },
    { value: '847', label: 'Sessions Analyzed' }
  ];

  return (
    <section className="border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 text-center mb-8 md:mb-12">
            <p className="text-sm md:text-base text-white/40 tracking-wider uppercase font-['JetBrains_Mono']">
              Trusted By
            </p>
          </div>
          
          <div className="col-span-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
              {stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="bg-black p-8 md:p-12 text-center hover:bg-white/5 transition-colors"
                >
                  <div className="font-['JetBrains_Mono'] text-4xl md:text-5xl text-[#D4AF37] mb-3 md:mb-4">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-white/60 tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
