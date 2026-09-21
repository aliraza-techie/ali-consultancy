import { CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const benefits = [
  'Reduce your estimating workload and free up time for field operations',
  'Organize all project quantities with structured, trade-by-trade breakdowns',
  'Understand your true project costs before committing to a bid',
  'Prepare complete, professional bid packages that stand out',
  'Manage multiple trade scopes and complex projects simultaneously',
  'Focus more time on construction and growing your business',
];

export default function About() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className="section-padding" style={{ background: '#F5F7FA' }}>
      <div ref={ref} className="container-width">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Image side */}
          <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8482546/pexels-photo-8482546.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Construction estimator reviewing building plans with safety helmet"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/40 to-transparent" />
            </div>

            {/* Accent card */}
            <div className="absolute -bottom-6 -right-6 bg-navy rounded-xl p-5 shadow-2xl max-w-[200px]">
              <div className="text-3xl font-heading font-bold text-amber-brand mb-1">10,000+</div>
              <div className="text-white/70 text-xs font-semibold uppercase tracking-wider">Project Estimates Completed</div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full border-2 border-amber-brand/40" />
          </div>

          {/* Content side */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <p className="eyebrow mb-3">ABOUT QUANTIFY</p>
            <h2 className="section-heading mb-6">
              Estimating Support That Helps Contractors Win More Work
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Quantify Construction LLC provides professional construction estimating services to general contractors, subcontractors, developers, and builders across the United States, Canada, and Australia.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our estimating team delivers accurate quantity takeoffs, detailed cost estimates, and professional bid preparation support — giving you the numbers and documentation you need to bid with confidence and win more contracts.
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-success mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => document.querySelector('#estimate')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-bold text-sm tracking-wider uppercase px-8 py-4 rounded transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Request a Free Estimate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
