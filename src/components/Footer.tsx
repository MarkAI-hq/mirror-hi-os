import { useState, useRef } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    try {
      await emailjs.sendForm('service_1tjswy9', 'template_3ymtqjn', form.current!, 'pKeFltXKMQuCIRxJz');
      setSubmitted(true);
      setEmail('');
    } catch (error) {
      console.error('FAILED...', error);
      alert('Failed to send request.');
    } finally { setIsSubmitting(false); }
  };

  return (
    <footer id="accreditation" className="border-t border-white/10 w-full">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12 md:py-24">
        <div className="flex justify-center w-full">
          <div className="w-full max-w-2xl">
            {!submitted ? (
              <form ref={form} onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="text-center space-y-3 md:space-y-4">
                  <h3 className="text-xl md:text-2xl tracking-tight text-white">
                    Request Access
                  </h3>
                  <p className="text-white/60 font-['JetBrains_Mono'] text-xs md:text-sm">
                    Limited availability. Founding cohort only.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                  <input
                    type="email"
                    name="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ENTER EMAIL"
                    className="flex-1 bg-transparent border border-white/20 px-4 md:px-6 py-3 md:py-4 text-white placeholder:text-white/30 focus:border-[#D4AF37] focus:outline-none font-['JetBrains_Mono'] text-xs md:text-sm min-w-0"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#D4AF37] text-black px-6 md:px-8 py-3 md:py-4 hover:bg-[#E5C158] transition-colors flex items-center justify-center gap-2 tracking-wide text-sm md:text-base disabled:opacity-50 whitespace-nowrap"
                  >
                    {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <><ArrowRight className="w-4 h-4 order-last" /> INITIALIZE ACCESS</>}
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center space-y-4 md:space-y-6 py-6 py-6 md:py-8">
                <div className="text-[#D4AF37] text-4xl md:text-5xl mb-4">✓</div>
                <h3 className="text-xl md:text-2xl tracking-tight text-white">Connection Initialized.</h3>
                <p className="text-white/80 font-['JetBrains_Mono'] text-xs md:text-sm leading-relaxed max-w-md mx-auto">
                  Your seat in the Founding Cohort is being calibrated. Expect a Technical Briefing shortly.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 md:mt-2 pt-6 md:pt-8 border-white/10 text-center">
          <p className="text-xs md:text-sm text-white/40 font-['JetBrains_Mono']">
            {new Date().getFullYear()} © mirror.education
          </p>
        </div>
      </div>
    </footer>
  );
}