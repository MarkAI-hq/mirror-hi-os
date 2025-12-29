import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function ApplicationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    institution: '',
    country: '',
    telephone: '',
    email: '',
    reason: ''
  });

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openApplicationModal', handleOpen);
    return () => window.removeEventListener('openApplicationModal', handleOpen);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        institution: '',
        country: '',
        telephone: '',
        email: '',
        reason: ''
      });
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-black border border-white/20 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-black border-b border-white/20 px-8 py-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl tracking-tight">Founding Cohort Application</h2>
            <p className="text-sm text-white/40 font-['JetBrains_Mono'] mt-1">
              Seat 1/10 — Limited Availability
            </p>
          </div>
          <button
            onClick={handleClose}
            className="text-white/60 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-['JetBrains_Mono'] text-white/60 uppercase tracking-wider">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-['JetBrains_Mono'] text-white/60 uppercase tracking-wider">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Institution */}
              <div className="space-y-2">
                <label className="text-xs font-['JetBrains_Mono'] text-white/60 uppercase tracking-wider">
                  Institution / Organization *
                </label>
                <input
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
              </div>

              {/* Country & Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-['JetBrains_Mono'] text-white/60 uppercase tracking-wider">
                    Country *
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-['JetBrains_Mono'] text-white/60 uppercase tracking-wider">
                    Telephone *
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-[#D4AF37] focus:outline-none transition-colors font-['JetBrains_Mono']"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-xs font-['JetBrains_Mono'] text-white/60 uppercase tracking-wider">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-[#D4AF37] focus:outline-none transition-colors font-['JetBrains_Mono']"
                />
              </div>

              {/* Reason */}
              <div className="space-y-2">
                <label className="text-xs font-['JetBrains_Mono'] text-white/60 uppercase tracking-wider">
                  Why should you be considered? *
                </label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"
                  placeholder="Describe your background, research interests, and what you aim to achieve with Mirror..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#D4AF37] text-black px-8 py-4 hover:bg-[#E5C158] transition-colors tracking-wide"
                >
                  SUBMIT APPLICATION
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center space-y-6 py-12">
              <div className="text-[#D4AF37] text-6xl mb-6">✓</div>
              <h3 className="text-3xl tracking-tight">
                Connection Initialized.
              </h3>
              <p className="text-white/80 font-['JetBrains_Mono'] text-sm leading-relaxed max-w-xl mx-auto">
                Your seat in the Founding Cohort is being calibrated against the Mirror Standard. 
                Expect a Technical Briefing shortly.
              </p>
              <div className="pt-6">
                <button
                  onClick={handleClose}
                  className="text-white/60 hover:text-white transition-colors text-sm tracking-wider"
                >
                  CLOSE
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
