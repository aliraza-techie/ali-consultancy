import { Quote } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const testimonials = [
  {
    quote: 'The takeoffs are accurate, organized, and delivered exactly when we need them. Our estimating process has become significantly faster since working with Quantify.',
    name: 'M. Thompson',
    role: 'General Contractor',
    region: 'Northeast USA',
    initials: 'MT',
    color: '#E8912D',
    demo: true,
  },
  {
    quote: 'We use Quantify for our commercial bidding pipeline. The color-coded markups alone save our team hours on every project. Solid service, fast turnaround.',
    name: 'D. Hargrove',
    role: 'Commercial Subcontractor',
    region: 'Southeast USA',
    initials: 'DH',
    color: '#1976D2',
    demo: true,
  },
  {
    quote: 'Excellent estimating support. We were skeptical at first, but the detail and accuracy of the BOQ reports changed how we approach bid prep. Highly recommended.',
    name: 'J. Brennan',
    role: 'Construction Manager',
    region: 'Canada',
    initials: 'JB',
    color: '#2E8B57',
    demo: true,
  },
  {
    quote: 'Fast, professional, and thorough. Quantify handles our residential takeoffs and the estimates are always well-organized and ready to use in our bids.',
    name: 'R. Patel',
    role: 'Residential Developer',
    region: 'West Coast USA',
    initials: 'RP',
    color: '#7357D8',
    demo: true,
  },
  {
    quote: 'Our team relies on Quantify for structural and MEP takeoffs on commercial projects. Consistently accurate, and the support team is always responsive.',
    name: 'S. Williams',
    role: 'Project Estimator',
    region: 'Australia',
    initials: 'SW',
    color: '#18A8C7',
    demo: true,
  },
  {
    quote: 'We submit drawings and get a complete, professional estimate back the next day. That kind of turnaround is invaluable when you are bidding multiple projects.',
    name: 'A. Morales',
    role: 'Mechanical Contractor',
    region: 'Midwest USA',
    initials: 'AM',
    color: '#E85D5D',
    demo: true,
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="section-padding" style={{ background: '#F5F7FA' }}>
      <div ref={ref} className="container-width">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="eyebrow mb-3">TESTIMONIALS</p>
          <h2 className="section-heading mb-4">Trusted by Contractors Across Three Countries</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Hear from the contractors, developers, and managers who rely on Quantify for their estimating needs.
          </p>
          <div className="mt-3 inline-block bg-amber-brand/10 text-amber-brand text-xs font-semibold px-3 py-1 rounded-full border border-amber-brand/20">
            Placeholder testimonials — real reviews coming soon
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Quote size={28} className="mb-4 opacity-20" style={{ color: t.color }} />
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-navy text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role} · {t.region}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
