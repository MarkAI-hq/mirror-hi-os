import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Bridge } from './components/Bridge';
import { Physics } from './components/Physics';
import { Telemetry } from './components/Telemetry';
import { Vantage } from './components/Vantage';
import { Footer } from './components/Footer';
import { ApplicationModal } from './components/ApplicationModal';
import { Analytics } from '@vercel/analytics/react';
import { useEffect, useState } from 'react';
import { SocialProof } from './components/SocialProof';


export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Mirror Reflection Effect on Scroll */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `linear-gradient(180deg, 
            rgba(212, 175, 55, 0) 0%, 
            rgba(212, 175, 55, ${Math.min(scrollY / 2000, 0.05)}) 30%,
            rgba(212, 175, 55, ${Math.min(scrollY / 1500, 0.08)}) 50%,
            rgba(212, 175, 55, ${Math.min(scrollY / 2000, 0.05)}) 70%,
            rgba(212, 175, 55, 0) 100%)`,
          transform: `perspective(1000px) rotateX(${Math.min(scrollY / 50, 5)}deg)`,
          opacity: 0.3
        }}
      />
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <Bridge />
        <SocialProof />
        <Physics />
        <Telemetry />
        <Vantage />
        <Footer />
        <Analytics />
      </div>
      
      <ApplicationModal />
    </div>
  );
}