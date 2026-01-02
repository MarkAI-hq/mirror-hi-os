import { useState, useRef } from 'react';
import { Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function Protocol() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useRef<HTMLFormElement>(null);

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_1tjswy9',
        'template_3ymtqjn',
        form.current!,
        'pKeFltXKMQuCIRxJz'
      );
      
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    } catch (error) {
      console.error('FAILED...', error);
      alert('Failed to send request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openApplicationModal = () => {
    window.dispatchEvent(new Event('openApplicationModal'));
  };

  const infoCards = [
    {
      title: '[ WHAT IT IS ]',
      items: [
        '3-step sequence (CLEAR → PRIME → ANCHOR)',
        'Targets processing speed, working memory, fluid reasoning',
        'Based on 70 years of CHC cognitive science'
      ]
    },
    {
      title: '[ WHAT YOU GET ]',
      items: [
        'Complete step-by-step scripts',
        'Age adaptations (K-12)',
        'Subject variations (math, science, language arts)',
        'Research bibliography',
        'Quick reference card'
      ]
    },
    {
      title: '[ TIME REQUIRED ]',
      items: [
        '10 minutes to read',
        '3 minutes to implement',
        '0 tools needed'
      ]
    },
    {
      title: '[ RESULTS ]',
      items: [
        '20-40% improvement in comprehension',
        'Fewer "Can you repeat that?" questions',
        'Students stay focused longer'
      ]
    }
  ];

  const testimonials = [
    {
      quote: "I tried Step 2 before algebra. My students kept up for the first time all year.",
      author: "Award-winning STEAM teacher, Spain"
    },
    {
      quote: "I want to know what's going through someone's mind when I'm explaining. This Protocol shows me.",
      author: "Teacher, Kenya"
    }
  ];

  return (
    <section id="protocol" className="border-b border-white/10">
      {/* Inject missing responsive classes manually */}
      <style>{`
        @media (min-width: 768px) {
          .md\\:col-span-3 { grid-column: span 3 !important; }
          .md\\:col-span-6 { grid-column: span 6 !important; }
          .md\\:gap-px { gap: 1px !important; }
          .md\\:bg-white\\/10 { background-color: rgba(255, 255, 255, 0.1) !important; }
          .md\\:p-8 { padding: 2rem !important; }
          .md\\:p-12 { padding: 3rem !important; }
          .md\\:px-8 { padding-left: 2rem !important; padding-right: 2rem !important; }
          .md\\:py-24 { padding-top: 6rem !important; padding-bottom: 6rem !important; }
          .md\\:mb-16 { margin-bottom: 4rem !important; }
          .md\\:border-0 { border-width: 0 !important; }
          .md\\:text-4xl { font-size: 2.25rem !important; line-height: 2.5rem !important; }
          .md\\:text-5xl { font-size: 3rem !important; line-height: 1 !important; }
          .md\\:text-xl { font-size: 1.25rem !important; line-height: 1.75rem !important; }
          .md\\:text-lg { font-size: 1.125rem !important; line-height: 1.75rem !important; }
          .md\\:text-base { font-size: 1rem !important; line-height: 1.5rem !important; }
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-4 py-12 md:px-8 md:py-24">
        {/* Header */}
        <div className="mb-8 md:mb-16 text-center max-w-3xl mx-auto">
          <div className="font-['JetBrains_Mono'] text-xs md:text-sm text-[#D4AF37] mb-4 tracking-wider">
            FREE DOWNLOAD
          </div>
          <h2 className="text-3xl md:text-5xl mb-4 tracking-tight">
            Mirror Protocol
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-2">
            The 3-minute cognitive readiness system
          </p>
          <p className="text-base md:text-lg text-white/60">
            Before you teach, prepare minds.
          </p>
        </div>

        {/* Info Cards Grid - Mobile: Gap-6 with borders | Desktop: Gap-px with bg-white/10 */}
        <div className="grid grid-cols-12 gap-6 bg-transparent md:gap-px md:bg-white/10 mb-8 md:mb-16">
          {infoCards.map((card, idx) => (
            <div key={idx} className="col-span-12 md:col-span-6 bg-black p-6 md:p-8 border border-white/10 md:border-0">
              <h3 className="text-sm font-['JetBrains_Mono'] text-[#D4AF37] mb-6 tracking-wider">
                {card.title}
              </h3>
              <ul className="space-y-4">
                {card.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3">
                    <span className="text-[#D4AF37] mt-1 flex-shrink-0">→</span>
                    <span className="text-white/80 font-['JetBrains_Mono'] text-sm md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Email Capture Form */}
        <div className="grid grid-cols-12 gap-4 mb-8 md:mb-16">
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            {!isSubmitted ? (
              <form ref={form} onSubmit={handleDownload} className="space-y-6 md:space-y-8">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ENTER EMAIL"
                    required
                    className="flex-1 bg-transparent border border-white/20 px-4 md:px-6 py-3 md:py-4 text-white placeholder:text-white/30 focus:border-[#D4AF37] focus:outline-none font-['JetBrains_Mono'] text-xs md:text-sm"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#D4AF37] text-black px-6 md:px-8 py-3 md:py-4 hover:bg-[#E5C158] transition-colors flex items-center justify-center gap-2 tracking-wide text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        SENDING...
                      </>
                    ) : (
                      'REQUEST PROTOCOL'
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center space-y-4 md:space-y-6 py-6 md:py-8">
                <div className="text-[#D4AF37] text-4xl md:text-5xl mb-4">✓</div>
                <h3 className="text-xl md:text-2xl tracking-tight">
                  Connection Initialized.
                </h3>
                <p className="text-white/80 font-['JetBrains_Mono'] text-xs md:text-sm leading-relaxed max-w-2xl mx-auto px-4">
                  Your Protocol download is being prepared. Check your email shortly.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mb-8 md:mb-16">
          <p className="font-['JetBrains_Mono'] text-xs md:text-sm text-white/40 mb-8">
            Used by teachers in <span className="text-[#D4AF37]">6 countries</span>
          </p>

          {/* Testimonials Grid - Mobile: Gap-6 with borders | Desktop: Gap-px with bg-white/10 */}
          <div className="grid grid-cols-12 gap-6 bg-transparent md:gap-px md:bg-white/10 max-w-4xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="col-span-12 md:col-span-6 bg-black p-6 md:p-8 text-left border border-white/10 md:border-0">
                <p className="text-sm md:text-base text-white/80 mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <p className="font-['JetBrains_Mono'] text-xs text-white/40">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What's Next */}
        <div className="max-w-3xl mx-auto text-center">
          <h3 className=" font-['JetBrains_Mono'] text-base md:text-lg mb-6 text-[#D4AF37]">
            WHAT'S NEXT
          </h3>
          <div className="space-y-4 text-sm md:text-base text-white/80 mb-8">
            <p>
              <strong className="text-white">Mirror Protocol</strong> is manual. Mirror Platform is automated cognitive simulation.
              Practice your lesson with AI students. See exactly where it breaks down. Adjust and retry.
            </p>
          </div>
          <button 
            onClick={openApplicationModal}
            className="px-8 md:px-12 py-4 border border-[#D4AF37] text-[#D4AF37] font-['JetBrains_Mono'] text-sm hover:bg-[#D4AF37] hover:text-black transition-colors"
          >
            JOIN FOUNDING COHORT 2/10
          </button>
        </div>
      </div>
    </section>
  );
}