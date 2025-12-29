export function Vantage() {
  const refractionPoints = [
    { time: '00:42.3', event: 'Cognitive Overload Threshold Exceeded', severity: 'critical' },
    { time: '00:38.1', event: 'Working Memory Saturation Detected', severity: 'warning' },
    { time: '00:29.7', event: 'Pattern Recognition Delta +0.31', severity: 'positive' },
    { time: '00:18.4', event: 'Processing Speed Acceleration 1.8x', severity: 'positive' }
  ];

  const cognitiveMapping = [
    { variable: 'Gf', baseline: '102.4', current: '114.8', delta: '+12.1%' },
    { variable: 'Gwm', baseline: '95.7', current: '87.3', delta: '-8.8%' },
    { variable: 'Gs', baseline: '108.2', current: '140.5', delta: '+29.9%' }
  ];

  const trace = [
    'INIT → Session #00142 | Cohort Alpha',
    'LOAD → Scenario: Recursive Problem Set Δ3',
    'T+18s → Gs acceleration detected',
    'T+29s → Gf pattern lock achieved',
    'T+38s → Gwm capacity warning',
    'T+42s → CRITICAL: Overload state',
    'HALT → Intervention recommended'
  ];

  return (
    <section className="border-b border-white/10">
      {/* Inject missing responsive classes manually */}
      <style>{`
        @media (min-width: 768px) {
          .md\\:col-span-4 { grid-column: span 4 !important; }
          .md\\:col-span-5 { grid-column: span 5 !important; }
          .md\\:gap-px { gap: 1px !important; }
          .md\\:bg-white\\/10 { background-color: rgba(255, 255, 255, 0.1) !important; }
          .md\\:p-8 { padding: 2rem !important; }
          .md\\:px-8 { padding-left: 2rem !important; padding-right: 2rem !important; }
          .md\\:py-24 { padding-top: 6rem !important; padding-bottom: 6rem !important; }
          .md\\:mb-16 { margin-bottom: 4rem !important; }
          .md\\:border-0 { border-width: 0 !important; }
          .md\\:text-4xl { font-size: 2.25rem !important; line-height: 2.5rem !important; }
          .md\\:text-xl { font-size: 1.25rem !important; line-height: 1.75rem !important; }
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-4 py-12 md:px-8 md:py-24">
        <div className="grid grid-cols-12 gap-4 mb-8 md:mb-16">
          <div className="col-span-12 md:col-span-5">
            <h2 className="text-3xl md:text-4xl tracking-tight mb-4">The Vantage</h2>
            <p className="text-lg md:text-xl text-white/60">
              The Truth is in the Reflection.
            </p>
          </div>
        </div>

        {/* Mobile: Gap-6 with borders | Desktop: Gap-px with bg-white/10 */}
        <div className="grid grid-cols-12 gap-6 bg-transparent md:gap-px md:bg-white/10">
          {/* Refraction Points */}
          <div className="col-span-12 md:col-span-4 bg-black p-6 md:p-8 border border-white/10 md:border-0">
            <h3 className="text-sm font-['JetBrains_Mono'] text-[#D4AF37] mb-6 tracking-wider">
              REFRACTION POINTS
            </h3>
            <div className="space-y-4">
              {refractionPoints.map((point, idx) => (
                <div key={idx} className="border-l-2 border-white/20 pl-4 py-2">
                  <div className="font-['JetBrains_Mono'] text-xs text-white/40 mb-1">
                    {point.time}
                  </div>
                  <div className={`text-sm ${
                    point.severity === 'critical' ? 'text-red-400' :
                    point.severity === 'warning' ? 'text-orange-400' :
                    'text-emerald-400'
                  }`}>
                    {point.event}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cognitive Mapping */}
          <div className="col-span-12 md:col-span-4 bg-black p-6 md:p-8 border border-white/10 md:border-0">
            <h3 className="text-sm font-['JetBrains_Mono'] text-[#D4AF37] mb-6 tracking-wider">
              COGNITIVE MAPPING
            </h3>
            <div className="space-y-6">
              {cognitiveMapping.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="font-['JetBrains_Mono'] text-xs text-white/40">
                    {item.variable}
                  </div>
                  <div className="grid grid-cols-3 gap-2 font-['JetBrains_Mono'] text-sm">
                    <div>
                      <div className="text-white/40 text-xs">BASE</div>
                      <div>{item.baseline}</div>
                    </div>
                    <div>
                      <div className="text-white/40 text-xs">NOW</div>
                      <div>{item.current}</div>
                    </div>
                    <div>
                      <div className="text-white/40 text-xs">Δ</div>
                      <div className={
                        item.delta.startsWith('+') ? 'text-emerald-400' : 'text-red-400'
                      }>
                        {item.delta}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The Trace */}
          <div className="col-span-12 md:col-span-4 bg-black p-6 md:p-8 border border-white/10 md:border-0">
            <h3 className="text-sm font-['JetBrains_Mono'] text-[#D4AF37] mb-6 tracking-wider">
              THE TRACE
            </h3>
            <div className="space-y-2 font-['JetBrains_Mono'] text-xs">
              {trace.map((line, idx) => (
                <div key={idx} className="text-white/60 hover:text-white transition-colors break-words">
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}