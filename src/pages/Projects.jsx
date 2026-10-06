import { useState } from 'react';
import Seo from '../components/Seo.jsx';
import PageHeader from '../components/PageHeader.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { projects, projectFilters } from '../data/projects.js';

export default function Projects() {
  const [active, setActive] = useState('All');
  const visible = active === 'All' ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <>
      <Seo
        title="Projects | PCB & Circuit Development Work | R2R Global"
        description="Selected PCB design and electronic circuit development work by R2R Global: LED, power electronics, EV, solar and automation boards."
      />
      <PageHeader
        eyebrow="Projects"
        title="PCB and circuit development work"
        text="Project photos will replace the placeholders as they are supplied. Confidential schematics and proprietary files are not published."
      />
      <section aria-label="Project portfolio" className="section-y">
        <div className="container-r2r">
          <div role="group" aria-label="Filter projects" className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
            {projectFilters.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={active === f}
                onClick={() => setActive(f)}
                className={`min-h-[44px] shrink-0 rounded-full border px-4 text-sm font-semibold transition ${
                  active === f
                    ? 'border-r2r-navy bg-r2r-navy text-white'
                    : 'border-r2r-line bg-white text-r2r-muted hover:border-r2r-navy hover:text-r2r-navy'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {visible.length ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
          ) : (
            <p className="text-r2r-muted">No projects in this category yet.</p>
          )}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
