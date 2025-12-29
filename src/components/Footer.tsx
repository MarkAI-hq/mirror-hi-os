import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <footer id="accreditation" className="border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-8 py-24">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8 col-start-3">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl tracking-tight">
                    Request Access
                  </h3>
                  <p className="text-white/60 font-['JetBrains_Mono'] text-sm">
                    Limited availability. Founding cohort only.
                  </p>
                </div>
                
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ENTER ACCESS CODE / EMAIL"
                    className="flex-1 bg-transparent border border-white/20 px-6 py-4 text-white placeholder:text-white/30 focus:border-[#D4AF37] focus:outline-none font-['JetBrains_Mono'] text-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-[#D4AF37] text-black px-8 py-4 hover:bg-[#E5C158] transition-colors flex items-center gap-2 tracking-wide"
                  >
                    INITIALIZE ACCESS
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center space-y-6 py-8">
                <div className="text-[#D4AF37] text-5xl mb-4">✓</div>
                <h3 className="text-2xl tracking-tight">
                  Connection Initialized.
                </h3>
                <p className="text-white/80 font-['JetBrains_Mono'] text-sm leading-relaxed max-w-2xl mx-auto">
                  Your seat in the Founding Cohort is being calibrated against the Mirror Standard. 
                  Expect a Technical Briefing shortly.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-24 pt-8 border-t border-white/10">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 text-center">
              <p className="text-sm text-white/40 font-['JetBrains_Mono']">
                2025 © mirror.education
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
