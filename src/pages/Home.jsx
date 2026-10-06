import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Seo from '../components/Seo.jsx';
import Hero from '../components/Hero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import CapabilityCard from '../components/CapabilityCard.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import SolutionCard from '../components/SolutionCard.jsx';
import IndustryCard from '../components/IndustryCard.jsx';
import ProcessTimeline from '../components/ProcessTimeline.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import WhyGrid from '../components/WhyGrid.jsx';
import FAQ from '../components/FAQ.jsx';
import ContactSection from '../components/ContactSection.jsx';
import { capabilities, services } from '../data/services.js';
import { solutions } from '../data/solutions.js';
import { industries } from '../data/industries.js';
import { projects } from '../data/projects.js';

function MoreLink({ to, children }) {
  return (
    <div className="mt-10 text-center">
      <Link to={to} className="inline-flex min-h-[48px] items-center gap-2 font-semibold text-r2r-navy hover:text-r2r-deep">
        {children} <ArrowRight size={18} aria-hidden="true" />
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Seo title="R2R Global | PCB Design & Electronic Circuit Development" />
      <Hero />

      <section aria-label="Core capabilities" className="section-y">
        <div className="container-r2r">
          <SectionHeading
            eyebrow="Core Capabilities"
            title="What we engineer"
            text="Circuit design, PCB development, power electronics and automation electronics."
            as="h2"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c, i) => (
              <CapabilityCard key={c.title} item={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Services" className="section-y bg-white">
        <div className="container-r2r">
          <SectionHeading
            eyebrow="Services"
            title="Electronic circuit and PCB services"
            text="From schematic to prototype for lighting, control, metering and automation electronics."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <ServiceCard key={s.slug} item={s} index={i} />
            ))}
          </div>
          <MoreLink to="/services">View all services</MoreLink>
        </div>
      </section>

      <section aria-label="Solutions" className="section-y">
        <div className="container-r2r">
          <SectionHeading
            eyebrow="Solutions / Applications"
            title="Power electronics circuit solutions"
            text="Charger circuit design, solar controllers and power supply development."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {solutions.slice(0, 4).map((s, i) => (
              <SolutionCard key={s.slug} item={s} index={i} />
            ))}
          </div>
          <MoreLink to="/solutions">View all solutions</MoreLink>
        </div>
      </section>

      <section aria-label="Industries" className="section-y bg-white">
        <div className="container-r2r">
          <SectionHeading eyebrow="Industries" title="Industries we serve" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((it, i) => (
              <IndustryCard key={it.title} item={it} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Development process" className="section-y">
        <div className="container-r2r">
          <SectionHeading
            eyebrow="Development Process"
            title="From requirement to final design"
            text="A structured path from understanding your need to a tested, finalised design."
          />
          <ProcessTimeline />
        </div>
      </section>

      <section aria-label="Featured projects" className="section-y bg-white">
        <div className="container-r2r">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Selected PCB and circuit work"
            text="Project photos will be added here. Confidential schematics are not published."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
          <MoreLink to="/projects">View all projects</MoreLink>
        </div>
      </section>

      <section aria-label="Why choose R2R Global" className="section-y">
        <div className="container-r2r">
          <SectionHeading eyebrow="Why R2R Global" title="Why choose R2R Global" />
          <WhyGrid />
        </div>
      </section>

      <section aria-label="Frequently asked questions" className="section-y bg-white">
        <div className="container-r2r">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <FAQ />
        </div>
      </section>

      <ContactSection />
    </>
  );
}
