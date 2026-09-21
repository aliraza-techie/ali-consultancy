import { ArrowRight, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useCounter } from '@/hooks/useCounter';

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [visible, setVisible] = useState(false);
  const count = useCounter(value, visible, 2200);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-center sm:text-left">
      <div className="text-3xl md:text-4xl font-heading font-bold text-white">
        {count}{suffix}
      </div>
      <div className="text-xs font-semibold tracking-widest text-white/50 uppercase mt-1">{label}</div>
    </div>
  );
}

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a1f33 0%, #0F2B46 50%, #0d2540 100%)',
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/9616959/pexels-photo-9616959.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')`,
        }}
      />
      <div className="absolute inset-0 bg-navy/85" />

      {/* Blueprint grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(232,145,45,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232,145,45,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="animate-fade-up">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 bg-amber-brand/20 border border-amber-brand/40 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-brand animate-pulse" />
              <span className="text-amber-brand text-xs font-bold tracking-widest uppercase">
                Build Smarter. Bid Stronger.
              </span>
            </div>

            <h1 className="font-heading font-bold text-white leading-none mb-6">
              <span className="block text-5xl sm:text-6xl lg:text-7xl tracking-tight">PRECISION</span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl tracking-tight">ESTIMATING.</span>
              <span
                className="block text-5xl sm:text-6xl lg:text-7xl tracking-tight"
                style={{ color: '#E8912D' }}
              >
                STRONGER BIDS.
              </span>
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
              Professional quantity takeoffs, construction cost estimates, and bid preparation services for contractors across the USA, Canada, and Australia.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => handleScroll('#estimate')}
                className="group inline-flex items-center gap-2 bg-amber-brand hover:bg-amber-light text-white font-bold text-sm tracking-wider uppercase px-8 py-4 rounded transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
              >
                REQUEST FREE ESTIMATE
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => handleScroll('#services')}
                className="group inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-sm tracking-wider uppercase px-8 py-4 rounded transition-all duration-200"
              >
                VIEW OUR SERVICES
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/15">
              <AnimatedStat value={97} suffix="%" label="Accuracy" />
              <div className="hidden sm:block w-px bg-white/20 self-stretch" />
              <AnimatedStat value={10000} suffix="+" label="Projects Done" />
              <div className="hidden sm:block w-px bg-white/20 self-stretch" />
              <div className="text-center sm:text-left">
                <div className="text-3xl md:text-4xl font-heading font-bold text-white">24h</div>
                <div className="text-xs font-semibold tracking-widest text-white/50 uppercase mt-1">Turnaround</div>
              </div>
            </div>
          </div>

          {/* Right - visual panel */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="https://images.pexels.com/photos/9052461/pexels-photo-9052461.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Construction estimator reviewing architectural plans and blueprints"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

              {/* Floating card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-brand flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <path d="M9 11l3 3L22 4" />
                      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Estimate Ready</div>
                    <div className="text-white/60 text-xs">Delivered within 24 hours</div>
                  </div>
                  <div className="ml-auto text-amber-brand font-bold text-sm">24h</div>
                </div>
              </div>
            </div>

            {/* Decorative accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-2 border-amber-brand/30" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-amber-brand/10" />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 0C480 0 240 60 0 20L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
