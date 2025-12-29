import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceLine } from 'recharts';
import { AlertTriangle } from 'lucide-react';

export function Telemetry() {
  // Generate waveform data with a spike at t=42.3s
  const data = Array.from({ length: 100 }, (_, i) => {
    const t = i * 0.6;
    let value = 50 + Math.sin(t / 5) * 20 + Math.random() * 10;
    
    // Create spike at t≈42.3s (index ≈70)
    if (i >= 68 && i <= 72) {
      value = 50 + (i - 68) * 20 + Math.random() * 10;
    }
    if (i === 70) {
      value = 135; // Peak spike
    }
    if (i > 72 && i <= 76) {
      value = 90 - (i - 72) * 10 + Math.random() * 5;
    }
    
    return {
      t: t.toFixed(1),
      value: Math.max(0, Math.min(150, value))
    };
  });

  const metrics = [
    { label: 'CLARITY', value: '+0.47', change: 'positive' },
    { label: 'Gf DELTA', value: '+12%', change: 'positive' },
    { label: 'Gwm LOAD', value: '87.3', change: 'warning' },
    { label: 'Gs VELOCITY', value: '2.6x', change: 'positive' }
  ];

  return (
    <section id="simulator" className="border-b border-white/10">
      {/* Inject missing responsive classes manually */}
      <style>{`
        @media (min-width: 768px) {
          .md\\:px-8 { padding-left: 2rem !important; padding-right: 2rem !important; }
          .md\\:py-24 { padding-top: 6rem !important; padding-bottom: 6rem !important; }
          .md\\:mb-16 { margin-bottom: 4rem !important; }
          .md\\:p-12 { padding: 3rem !important; }
          .md\\:text-4xl { font-size: 2.25rem !important; line-height: 2.5rem !important; }
          .md\\:text-base { font-size: 1rem !important; line-height: 1.5rem !important; }
          .md\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)) !important; }
          .md\\:w-fit { width: fit-content !important; }
          .md\\:ml-auto { margin-left: auto !important; }
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-4 py-12 md:px-8 md:py-24">
        <div className="grid grid-cols-12 gap-4 mb-8 md:mb-16">
          <div className="col-span-12">
            <h2 className="text-3xl md:text-4xl tracking-tight mb-4">The Surface</h2>
            <p className="text-white/60 font-['JetBrains_Mono'] text-sm md:text-base">
              Real-time cognitive telemetry — precision instrumentation for learning.
            </p>
          </div>
        </div>

        {/* Dashboard */}
        <div className="grid grid-cols-12 gap-px bg-white/10">
          <div className="col-span-12 bg-black p-4 md:p-12">
            {/* Alert Box - Full width on mobile, Right aligned on desktop */}
            <div className="mb-6 bg-red-900/20 border border-red-500 px-4 py-3 md:px-6 md:py-4 flex items-center gap-3 w-full md:w-fit md:ml-auto">
              <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
              <span className="font-['JetBrains_Mono'] text-xs md:text-sm text-red-400">
                ⚠ COGNITIVE OVERLOAD DETECTED @ t=42.3s
              </span>
            </div>
            
            {/* Waveform */}
            <div className="mb-8">
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis 
                    dataKey="t" 
                    stroke="#666"
                    tick={{ fill: '#666', fontFamily: 'JetBrains Mono', fontSize: 10 }}
                    label={{ value: 'TIME (s)', position: 'insideBottom', offset: -5, fill: '#666', fontFamily: 'JetBrains Mono', fontSize: 10 }}
                  />
                  <YAxis 
                    stroke="#666"
                    tick={{ fill: '#666', fontFamily: 'JetBrains Mono', fontSize: 10 }}
                    label={{ value: 'COGNITIVE LOAD', angle: -90, position: 'insideLeft', fill: '#666', fontFamily: 'JetBrains Mono', fontSize: 10 }}
                  />
                  <ReferenceLine y={100} stroke="#ff0000" strokeDasharray="3 3" />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#D4AF37" 
                    strokeWidth={2}
                    fill="url(#waveGradient)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Metrics Grid - Stacked on mobile, 4-cols on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10 border border-white/10 md:border-0">
              {metrics.map((metric, idx) => (
                <div key={idx} className="bg-black p-6">
                  <div className="font-['JetBrains_Mono'] text-xs text-white/40 mb-2">
                    {metric.label}
                  </div>
                  <div className={`font-['JetBrains_Mono'] text-2xl ${
                    metric.change === 'positive' ? 'text-[#D4AF37]' : 
                    metric.change === 'warning' ? 'text-orange-400' : 
                    'text-white'
                  }`}>
                    {metric.value}
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