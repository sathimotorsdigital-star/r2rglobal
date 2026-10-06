import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import Seo from '../components/Seo.jsx';
import PageHeader from '../components/PageHeader.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Reveal from '../components/Reveal.jsx';
import NotFound from './NotFound.jsx';
import { services } from '../data/services.js';
import { solutions } from '../data/solutions.js';

// One template for every /services/:slug (services and power-electronics solutions).
export default function ServiceDetail() {
  const { slug } = useParams();
  const item = [...services, ...solutions].find((s) => s.slug === slug);
  if (!item) return <NotFound />;
  const isSolution = solutions.some((s) => s.slug === slug);

  return (
    <>
      <Seo
        title={`${item.title} | R2R Global`}
        description={`${item.short} R2R Global, Ghaziabad.`}
      />
      <PageHeader eyebrow={isSolution ? 'Solution' : 'Service'} title={item.title} text={item.short} />
      <section aria-label={`${item.title} details`} className="section-y">
        <div className="container-r2r grid gap-6 lg:grid-cols-2">
          <Reveal className="card-r2r p-6 sm:p-8">
            <h2 className="text-[length:clamp(1.25rem,1.1rem+0.8vw,1.6rem)]">What we develop</h2>
            <ul className="mt-4 space-y-3">
              {item.scope.map((s) => (
                <li key={s} className="flex gap-3">
                  <Check size={18} className="mt-1 shrink-0 text-r2r-tealdark" aria-hidden="true" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="card-r2r p-6 sm:p-8">
            <h2 className="text-[length:clamp(1.25rem,1.1rem+0.8vw,1.6rem)]">Typical applications</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.applications.map((a) => (
                <li key={a} className="chip">
                  {a}
                </li>
              ))}
            </ul>
            <Link
              to={isSolution ? '/solutions' : '/services'}
              className="mt-8 inline-flex min-h-[44px] items-center gap-2 font-semibold text-r2r-navy hover:text-r2r-deep"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Back to {isSolution ? 'solutions' : 'services'}
            </Link>
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
