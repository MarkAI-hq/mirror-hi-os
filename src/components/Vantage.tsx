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
      <div className="max-w-[1440px] mx-auto px-8 py-24">
        <div className="grid grid-cols-12 gap-4 mb-16">
          <div className="col-span-5">
            <h2 className="text-4xl tracking-tight mb-4">The Vantage</h2>
            <p className="text-xl text-white/60">
              The Truth is in the Reflection.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-px bg-white/10">
          {/* Refraction Points */}
          <div className="col-span-4 bg-black p-8">
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
          <div className="col-span-4 bg-black p-8">
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
          <div className="col-span-4 bg-black p-8">
            <h3 className="text-sm font-['JetBrains_Mono'] text-[#D4AF37] mb-6 tracking-wider">
              THE TRACE
            </h3>
            <div className="space-y-2 font-['JetBrains_Mono'] text-xs">
              {trace.map((line, idx) => (
                <div key={idx} className="text-white/60 hover:text-white transition-colors">
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
