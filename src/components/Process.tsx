import { Upload, Search, FileSpreadsheet, Send } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Upload Plans',
    desc: 'Submit your construction drawings, specifications, and project documents through our secure upload system.',
    color: '#E8912D',
    bg: '#E8912D15',
    border: '#E8912D40',
  },
  {
    number: '02',
    icon: Search,
    title: 'Scope Review',
    desc: 'Our estimating team reviews your documents, clarifies project scope, and confirms all trade requirements.',
    color: '#1976D2',
    bg: '#1976D215',
    border: '#1976D240',
  },
  {
    number: '03',
    icon: FileSpreadsheet,
    title: 'Estimate Preparation',
    desc: 'We perform a complete quantity takeoff, apply current pricing, and prepare your detailed estimate package.',
    color: '#2E8B57',
    bg: '#2E8B5715',
    border: '#2E8B5740',
  },
  {
    number: '04',
    icon: Send,
    title: 'Receive Your Estimate',
    desc: 'Your complete estimate — including spreadsheet, takeoff report, and color-coded markups — delivered within 24 hours.',
    color: '#7357D8',
    bg: '#7357D815',
    border: '#7357D840',
  },
];

export default function Process() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="process" className="section-padding" style={{ background: '#F5F7FA' }}>
      <div ref={ref} className="container-width">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="eyebrow mb-3">PROCESS</p>
          <h2 className="section-heading mb-4">From Plans to Estimate in 4 Steps</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A straightforward process designed to get accurate estimates into your hands as quickly as possible.
          </p>
        </div>

        {/* Desktop horizontal steps */}
        <div className="hidden md:grid grid-cols-4 gap-0 relative">
          {/* Connecting line */}
          <div className="absolute top-[52px] left-[12.5%] right-[12.5%] h-0.5 bg-gray-200 z-0">
            <div
              className="h-full bg-gradient-to-r from-amber-brand via-brand-blue to-brand-purple transition-all duration-1000"
              style={{ width: isVisible ? '100%' : '0%' }}
            />
          </div>

          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`flex flex-col items-center text-center px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Circle badge */}
              <div
                className="relative z-10 w-[104px] h-[104px] rounded-full flex flex-col items-center justify-center border-2 mb-6 shadow-lg bg-white"
                style={{ borderColor: step.color }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-1"
                  style={{ background: step.bg }}
                >
                  <step.icon size={22} style={{ color: step.color }} />
                </div>
                <span className="text-xs font-bold" style={{ color: step.color }}>{step.number}</span>
              </div>
              <h3 className="font-heading font-bold text-navy text-base mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden space-y-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`flex gap-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex flex-col items-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center border-2 bg-white flex-shrink-0 shadow"
                  style={{ borderColor: step.color }}
                >
                  <step.icon size={20} style={{ color: step.color }} />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 mt-2" style={{ background: `${step.color}40` }} />
                )}
              </div>
              <div className="pb-6">
                <div className="text-xs font-bold tracking-wider mb-1" style={{ color: step.color }}>STEP {step.number}</div>
                <h3 className="font-heading font-bold text-navy text-base mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
