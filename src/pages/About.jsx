import Seo from '../components/Seo.jsx';
import PageHeader from '../components/PageHeader.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import CapabilityCard from '../components/CapabilityCard.jsx';
import IndustryCard from '../components/IndustryCard.jsx';
import ProcessTimeline from '../components/ProcessTimeline.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Reveal from '../components/Reveal.jsx';
import { capabilities } from '../data/services.js';
import { industries } from '../data/industries.js';

const expertise = [
  'Electronic circuit design and schematic development',
  'PCB design and development',
  'Power electronics: charger, solar, MPPT / PWM and power supply circuits',
  'LED electronics: reflector, running indicator and matrix LED circuits',
  'PID controller, metering and automation electronics',
];

const approach = [
  { t: 'Start from the application', d: 'The circuit is designed around what it must do, the supply it runs from and the environment it works in.' },
  { t: 'Design and layout together', d: 'Schematic and PCB layout are developed together so current, heat and assembly are considered early.' },
  { t: 'Prove it on a prototype', d: 'Designs are prototyped and tested, then refined before the final design is released.' },
];

export default function About() {
  return (
    <>
      <Seo
        title="About Us | R2R Global PCB Design Company, Ghaziabad"
        description="R2R Global is an electronics engineering and PCB design company in Ghaziabad focused on circuit design, power electronics, LED and automation electronics."
      />
      <PageHeader
        eyebrow="About Us"
        title="An electronics engineering and PCB design company"
        text="R2R Global develops electronic circuits and PCB designs for lighting, power, solar, EV and automation applications."
      />

      <section aria-labelledby="who-heading" className="section-y">
        <div className="container-r2r grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 id="who-heading">Who We Are</h2>
            <p className="mt-4 text-r2r-muted sm:text-lg">
              R2R Global is a PCB design company based in Ghaziabad, Uttar Pradesh. We work on electronic circuit
              design and PCB development, with particular focus on power electronics and LED electronics.
            </p>
            <p className="mt-4 text-r2r-muted sm:text-lg">
              We provide circuit and design solutions. Our work covers the design, prototype and testing stages of a
              circuit; we are not a finished-product charger manufacturer.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-[length:clamp(1.3rem,1.1rem+1vw,1.75rem)]">Our Expertise</h2>
            <ul className="mt-4 space-y-3">
              {expertise.map((e) => (
                <li key={e} className="flex gap-3 rounded-xl border border-r2r-line bg-white p-4 text-sm sm:text-base">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-r2r-teal" aria-hidden="true" />
                  {e}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section aria-label="Our engineering approach" className="section-y bg-white">
        <div className="container-r2r">
          <SectionHeading eyebrow="Engineering Approach" title="Our Engineering Approach" />
          <div className="grid gap-5 md:grid-cols-3">
            {approach.map((a, i) => (
              <Reveal key={a.t} delay={i * 0.06} className="card-r2r p-6">
                <h3>{a.t}</h3>
                <p className="mt-2 text-sm text-r2r-muted sm:text-base">{a.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Our capabilities" className="section-y">
        <div className="container-r2r">
          <SectionHeading eyebrow="Capabilities" title="Our Capabilities" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c, i) => (
              <CapabilityCard key={c.title} item={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Industries we serve" className="section-y bg-white">
        <div className="container-r2r">
          <SectionHeading eyebrow="Industries" title="Industries We Serve" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((it, i) => (
              <IndustryCard key={it.title} item={it} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Development process" className="section-y">
        <div className="container-r2r">
          <SectionHeading eyebrow="Process" title="Development Process" />
          <ProcessTimeline />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
