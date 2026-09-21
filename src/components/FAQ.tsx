import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const faqs = [
  {
    q: 'What information do you need to provide a quote?',
    a: 'To get started, we typically need your construction drawings (PDF or DWG), project specifications, and a brief description of the scope. For a preliminary pricing discussion, even conceptual drawings or a project summary can be enough.',
  },
  {
    q: 'What types of projects do you estimate?',
    a: 'We estimate commercial buildings, residential developments, industrial facilities, healthcare facilities, educational buildings, civil and site work projects, and mixed-use developments across all major construction trades.',
  },
  {
    q: 'Do you work with General Contractors?',
    a: 'Yes. We regularly support general contractors with full project takeoffs, scope-by-scope cost estimates, and complete bid preparation packages for both public and private work.',
  },
  {
    q: 'Do you work with Subcontractors?',
    a: 'Absolutely. Many of our clients are specialty subcontractors who need accurate takeoffs and pricing for their specific trade scope. We provide trade-specific takeoffs for mechanical, electrical, plumbing, drywall, concrete, and more.',
  },
  {
    q: 'Do you provide material takeoffs?',
    a: 'Yes. Material takeoffs are a core part of our service. We deliver organized quantity lists broken down by material type, trade, and CSI division for accurate procurement and subcontractor pricing.',
  },
  {
    q: 'Do you provide material and labor pricing?',
    a: 'Yes. Our cost estimates include separate material and labor line items with current market rates applied. This breakdown helps you understand where your project costs are concentrated.',
  },
  {
    q: 'What files can I submit?',
    a: 'We accept PDF, DWG, DXF, ZIP, XLS, XLSX, DOC, DOCX, and common image formats. If your files are in a different format, contact us and we will let you know if we can work with them.',
  },
  {
    q: 'What will I receive?',
    a: 'Every estimate includes a detailed cost spreadsheet, quantity takeoff report, material quantity breakdown, material and labor cost breakdown, color-coded markup drawings, and a BOQ/cost summary. Additional deliverables are available on request.',
  },
  {
    q: 'Do you provide color-coded markup drawings?',
    a: 'Yes. Color-coded PDF markup drawings are included with every estimate, clearly highlighting all measured areas, lengths, counts, and quantities from your drawings.',
  },
  {
    q: 'Which trades do you cover?',
    a: 'We cover all major construction trades including structural, architectural, MEP (mechanical, electrical, plumbing, fire protection), civil, site work, and specialty trades. Contact us if you have a specific scope to confirm coverage.',
  },
  {
    q: 'Which countries do you serve?',
    a: 'We currently serve contractors and developers in the United States, Canada, and Australia. If your project is in another country, contact us to discuss your requirements.',
  },
  {
    q: 'How do I get started?',
    a: 'Simply fill out the Request Free Estimate form on this page, upload your project documents, and our team will review your submission and follow up within one business day to confirm scope and timeline.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="faq" className="section-padding" style={{ background: '#F5F7FA' }}>
      <div ref={ref} className="container-width max-w-4xl">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="eyebrow mb-3">FAQ</p>
          <h2 className="section-heading mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Everything you need to know about our estimating services and process.
          </p>
        </div>

        <div className={`space-y-3 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-heading font-semibold text-navy text-sm md:text-base leading-snug">{faq.q}</span>
                <span className="flex-shrink-0">
                  {open === i
                    ? <Minus size={18} className="text-amber-brand" />
                    : <Plus size={18} className="text-gray-400" />
                  }
                </span>
              </button>
              <div
                className="accordion-content"
                style={{ maxHeight: open === i ? '300px' : '0', opacity: open === i ? 1 : 0 }}
              >
                <div className="px-6 pb-5 pt-0">
                  <div className="h-px bg-gray-100 mb-4" />
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
