import Seo from '../components/Seo.jsx';
import PageHeader from '../components/PageHeader.jsx';
import SolutionCard from '../components/SolutionCard.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { solutions } from '../data/solutions.js';

export default function Solutions() {
  return (
    <>
      <Seo
        title="Power Electronics Solutions | SMPS, EV Charger, Solar MPPT | R2R Global"
        description="SMPS charger circuit design, electric scooty / EV charger circuits, solar driver, MPPT and PWM controllers and custom power electronics development in Ghaziabad."
      />
      <PageHeader
        eyebrow="Solutions"
        title="Power electronics circuit solutions"
        text="Charger circuit design, power electronics development and custom charging circuit solutions. R2R Global provides circuit and design solutions, not finished chargers."
      />
      <section aria-label="All solutions" className="section-y">
        <div className="container-r2r grid gap-5 md:grid-cols-2">
          {solutions.map((s, i) => (
            <SolutionCard key={s.slug} item={s} index={i} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
