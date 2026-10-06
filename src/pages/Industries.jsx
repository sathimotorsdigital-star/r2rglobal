import Seo from '../components/Seo.jsx';
import PageHeader from '../components/PageHeader.jsx';
import IndustryCard from '../components/IndustryCard.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { industries } from '../data/industries.js';

export default function Industries() {
  return (
    <>
      <Seo
        title="Industries We Serve | R2R Global"
        description="Electronic circuit and PCB development for electric vehicles, EV charging, solar energy, LED lighting, automotive, industrial electronics and automation."
      />
      <PageHeader
        eyebrow="Industries"
        title="Industries we serve"
        text="Circuit and PCB development across mobility, energy, lighting and industrial applications."
      />
      <section aria-label="Industry list" className="section-y">
        <div className="container-r2r grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((it, i) => (
            <IndustryCard key={it.title} item={it} index={i} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
