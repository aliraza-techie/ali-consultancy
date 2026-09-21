import { useState } from 'react';
import { MapPin, Tag } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const categories = ['All', 'Commercial', 'Residential', 'Civil', 'MEP', 'Structural'];

const projects = [
  {
    id: 1,
    name: 'Office Complex – Sample Project',
    location: 'New York, NY',
    type: 'Commercial',
    scope: 'Full Quantity Takeoff',
    image: 'https://images.pexels.com/photos/37687676/pexels-photo-37687676.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'SAMPLE PROJECT',
  },
  {
    id: 2,
    name: 'Residential Development – Sample Project',
    location: 'Toronto, ON',
    type: 'Residential',
    scope: 'Cost Estimate & Bid Prep',
    image: 'https://images.pexels.com/photos/7108785/pexels-photo-7108785.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'SAMPLE PROJECT',
  },
  {
    id: 3,
    name: 'Industrial Facility – Sample Project',
    location: 'Chicago, IL',
    type: 'Civil',
    scope: 'Site & Civil Takeoff',
    image: 'https://images.pexels.com/photos/5505136/pexels-photo-5505136.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'SAMPLE PROJECT',
  },
  {
    id: 4,
    name: 'MEP Systems – Sample Project',
    location: 'Sydney, NSW',
    type: 'MEP',
    scope: 'MEP Quantity Takeoff',
    image: 'https://images.pexels.com/photos/946312/pexels-photo-946312.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'SAMPLE PROJECT',
  },
  {
    id: 5,
    name: 'Structural Estimate – Sample Project',
    location: 'Los Angeles, CA',
    type: 'Structural',
    scope: 'Structural Steel Takeoff',
    image: 'https://images.pexels.com/photos/1383866/pexels-photo-1383866.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'SAMPLE PROJECT',
  },
  {
    id: 6,
    name: 'Mixed-Use Building – Sample Project',
    location: 'Miami, FL',
    type: 'Commercial',
    scope: 'Full Preconstruction Estimate',
    image: 'https://images.pexels.com/photos/25461690/pexels-photo-25461690.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'SAMPLE PROJECT',
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const { ref, isVisible } = useIntersectionObserver();

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.type === activeFilter);

  return (
    <section className="section-padding bg-white">
      <div ref={ref} className="container-width">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="eyebrow mb-3">PROJECTS</p>
          <h2 className="section-heading mb-4">Estimating Across All Project Types</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We provide estimating services for commercial, residential, civil, MEP, and structural projects.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider border-2 transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-navy border-navy text-white'
                  : 'bg-white border-gray-200 text-gray-600 hover:border-navy/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {filtered.map((project) => (
            <div key={project.id} className="group relative rounded-xl overflow-hidden shadow-md card-hover">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/60 transition-colors duration-300" />

                {/* Sample label */}
                <div className="absolute top-3 left-3 bg-amber-brand text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                  {project.tag}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white px-4">
                    <div className="font-heading font-bold text-lg mb-2">{project.name}</div>
                    <div className="text-sm text-white/80">{project.scope}</div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white">
                <h3 className="font-heading font-semibold text-navy text-sm mb-2 leading-tight">{project.name}</h3>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <MapPin size={11} />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag size={11} />
                    {project.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          Sample projects shown for illustration purposes. Client information is kept confidential.
        </p>
      </div>
    </section>
  );
}
