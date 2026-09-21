import { ArrowRight, Ruler, Calculator, FileText, Package, DollarSign, ClipboardList, Palette, Building } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const services = [
  {
    number: '01',
    icon: Ruler,
    title: 'Quantity Takeoffs',
    description: 'Precise material and quantity measurements extracted from your construction drawings and specifications.',
    color: '#E8912D',
    bg: '#E8912D15',
  },
  {
    number: '02',
    icon: Calculator,
    title: 'Construction Cost Estimating',
    description: 'Comprehensive cost analysis covering all trades, materials, and labor for accurate project budgeting.',
    color: '#1976D2',
    bg: '#1976D215',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Bid Preparation',
    description: 'Professional bid packages that help you submit competitive, well-organized proposals that win more work.',
    color: '#2E8B57',
    bg: '#2E8B5715',
  },
  {
    number: '04',
    icon: Package,
    title: 'Material Takeoffs',
    description: 'Detailed material quantity reports organized by category for accurate procurement and cost control.',
    color: '#18A8C7',
    bg: '#18A8C715',
  },
  {
    number: '05',
    icon: DollarSign,
    title: 'Labor & Material Pricing',
    description: 'Current market pricing for both labor and materials to support accurate and competitive bid values.',
    color: '#E85D5D',
    bg: '#E85D5D15',
  },
  {
    number: '06',
    icon: ClipboardList,
    title: 'BOQ / Detailed Estimates',
    description: 'Complete bill of quantities and detailed cost breakdowns meeting specification and procurement requirements.',
    color: '#7357D8',
    bg: '#7357D815',
  },
  {
    number: '07',
    icon: Palette,
    title: 'Color-Coded Markups',
    description: 'Annotated and color-coded construction drawings that clearly identify scope, quantities, and takeoff areas.',
    color: '#E8912D',
    bg: '#E8912D15',
  },
  {
    number: '08',
    icon: Building,
    title: 'Preconstruction Support',
    description: 'Early-phase estimating and budget guidance to inform project feasibility, design decisions, and planning.',
    color: '#1976D2',
    bg: '#1976D215',
  },
];

export default function Services() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="services" className="bg-white section-padding">
      <div ref={ref} className="container-width">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="eyebrow mb-3">OUR SERVICES</p>
          <h2 className="section-heading mb-4">Comprehensive Estimating Solutions</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From initial quantity takeoffs to complete bid packages, we provide the estimating support contractors need to win more work.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <div
              key={svc.number}
              className={`group bg-white border border-gray-100 rounded-xl p-6 shadow-sm card-hover cursor-pointer transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${i * 60}ms`,
                ['--hover-border' as string]: svc.color,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = svc.color;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '';
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                  style={{ background: svc.bg }}
                >
                  <svc.icon size={22} style={{ color: svc.color }} />
                </div>
                <span className="text-2xl font-heading font-bold text-gray-100">{svc.number}</span>
              </div>
              <h3 className="font-heading font-semibold text-navy text-base mb-2 leading-tight">{svc.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{svc.description}</p>
              <a
                href="#estimate"
                onClick={(e) => { e.preventDefault(); document.querySelector('#estimate')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-1 text-xs font-semibold transition-colors duration-200"
                style={{ color: svc.color }}
              >
                Learn More <ArrowRight size={13} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
