import { useState, useRef } from 'react';
import { Upload, X, FileText, ArrowRight, CheckCircle } from 'lucide-react';

const projectTypes = [
  'Commercial', 'Residential', 'Industrial', 'Healthcare', 'Education',
  'Civil / Site Work', 'Mixed-Use', 'Other',
];

interface FormState {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  projectType: string;
  projectDetails: string;
}

interface UploadedFile {
  name: string;
  size: number;
}

const ACCEPTED = '.pdf,.dwg,.dxf,.zip,.xls,.xlsx,.doc,.docx,.jpg,.jpeg,.png';

export default function EstimateForm() {
  const [form, setForm] = useState<FormState>({
    fullName: '', companyName: '', email: '', phone: '', projectType: '', projectDetails: '',
  });
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [dragging, setDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const fileRef = useRef<HTMLInputElement>(null);

  const addFiles = (fileList: FileList) => {
    const newFiles: UploadedFile[] = Array.from(fileList).map(f => ({ name: f.name, size: f.size }));
    setFiles(prev => [...prev, ...newFiles]);
  };

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.fullName.trim()) e.fullName = 'Required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.projectType) e.projectType = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  if (submitted) {
    return (
      <section id="estimate" className="section-padding" style={{ background: '#0F2B46' }}>
        <div className="container-width max-w-2xl text-center">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-14">
            <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-success" />
            </div>
            <h2 className="font-heading font-bold text-white text-2xl mb-4">Thank You!</h2>
            <p className="text-white/70 leading-relaxed">
              Your project information has been received. Our team will review your plans and contact you regarding the next steps.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="estimate" className="section-padding" style={{ background: '#0F2B46' }}>
      <div className="container-width max-w-4xl">
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">GET STARTED</p>
          <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            Request a <span style={{ color: '#E8912D' }}>Free Estimate</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Submit your project documents and our estimating team will review your scope and follow up within one business day.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={form.fullName}
                  onChange={set('fullName')}
                  className={`w-full border rounded-lg px-4 py-3 text-sm text-navy focus:outline-none transition-colors ${errors.fullName ? 'border-red-400' : 'border-gray-200 focus:border-amber-brand'}`}
                  placeholder="John Smith"
                />
                {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Company Name</label>
                <input
                  type="text"
                  value={form.companyName}
                  onChange={set('companyName')}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-navy focus:outline-none focus:border-amber-brand transition-colors"
                  placeholder="ABC Construction LLC"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={set('email')}
                  className={`w-full border rounded-lg px-4 py-3 text-sm text-navy focus:outline-none transition-colors ${errors.email ? 'border-red-400' : 'border-gray-200 focus:border-amber-brand'}`}
                  placeholder="john@company.com"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={set('phone')}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-navy focus:outline-none focus:border-amber-brand transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            {/* Project Type */}
            <div className="mb-5">
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                Project Type <span className="text-red-400">*</span>
              </label>
              <select
                value={form.projectType}
                onChange={set('projectType')}
                className={`w-full border rounded-lg px-4 py-3 text-sm text-navy focus:outline-none transition-colors appearance-none bg-white ${errors.projectType ? 'border-red-400' : 'border-gray-200 focus:border-amber-brand'}`}
              >
                <option value="">Select project type...</option>
                {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              {errors.projectType && <p className="text-red-400 text-xs mt-1">{errors.projectType}</p>}
            </div>

            {/* Project Details */}
            <div className="mb-5">
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Project Details</label>
              <textarea
                value={form.projectDetails}
                onChange={set('projectDetails')}
                rows={4}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-navy focus:outline-none focus:border-amber-brand transition-colors resize-none"
                placeholder="Describe your project: trade scope, special requirements, bid date, budget range, or any other relevant information..."
              />
            </div>

            {/* Upload Plans */}
            <div className="mb-7">
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Upload Plans</label>
              <div
                className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200 ${dragging ? 'border-amber-brand bg-amber-brand/5' : 'border-gray-200 hover:border-amber-brand/50 hover:bg-gray-50'}`}
                onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                onDragLeave={() => setDragging(false)}
                onDrop={(e) => { e.preventDefault(); setDragging(false); if (e.dataTransfer.files) addFiles(e.dataTransfer.files); }}
                onClick={() => fileRef.current?.click()}
              >
                <input
                  ref={fileRef}
                  type="file"
                  multiple
                  accept={ACCEPTED}
                  className="hidden"
                  onChange={(e) => { if (e.target.files) addFiles(e.target.files); }}
                />
                <Upload size={32} className="mx-auto mb-3 text-gray-300" />
                <div className="font-semibold text-navy text-sm mb-1">Drag & Drop or Click to Upload</div>
                <div className="text-gray-400 text-xs">Supports: PDF · DWG · DXF · ZIP · XLS/XLSX · DOC/DOCX · Images</div>
              </div>

              {files.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {files.map((f, i) => (
                    <li key={i} className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <FileText size={14} className="text-amber-brand" />
                        <span className="text-sm text-navy font-medium truncate max-w-[240px]">{f.name}</span>
                        <span className="text-xs text-gray-400">({(f.size / 1024).toFixed(0)} KB)</span>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setFiles(prev => prev.filter((_, idx) => idx !== i)); }}
                        className="text-gray-300 hover:text-red-400 transition-colors ml-2"
                      >
                        <X size={14} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <button
              type="submit"
              className="group w-full flex items-center justify-center gap-2 bg-amber-brand hover:bg-amber-light text-white font-bold text-sm tracking-wider uppercase px-8 py-5 rounded-xl transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
            >
              REQUEST FREE ESTIMATE
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-center text-gray-400 text-xs mt-4">
              We do not share your project information with third parties.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
