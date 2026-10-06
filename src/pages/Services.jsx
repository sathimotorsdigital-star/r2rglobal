import Seo from '../components/Seo.jsx';
import PageHeader from '../components/PageHeader.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { services } from '../data/services.js';

export default function Services() {
  return (
    <>
      <Seo
        title="Services | Circuit Design, PCB & LED Electronics | R2R Global"
        description="Circuit design, PCB design and development, LED PCB, reflector, running indicator and matrix LED circuits, control gear, PID controllers, metering and automation electronics."
      />
      <PageHeader
        eyebrow="Services"
        title="Electronic circuit design and PCB development services"
        text="Eleven focused service areas covering design, layout, prototype and testing of electronic circuits."
      />
      <section aria-label="All services" className="section-y">
        <div className="container-r2r grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} item={s} index={i} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
