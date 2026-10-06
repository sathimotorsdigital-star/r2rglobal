import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getIcon } from '../data/icons.js';
import Reveal from './Reveal.jsx';

// Used for both services and solutions (same data shape).
export default function ServiceCard({ item, index = 0 }) {
  const Icon = getIcon(item.icon);
  return (
    <Reveal as="article" delay={(index % 3) * 0.06} className="h-full">
      <div className="card-r2r card-r2r-hover flex h-full flex-col p-6">
        <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-r2r-cyan text-r2r-navy">
          <Icon size={24} aria-hidden="true" />
        </span>
        <h3>{item.title}</h3>
        <p className="mt-2 text-sm text-r2r-muted sm:text-base">{item.short}</p>

        <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-r2r-tealdark">Applications</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {item.applications.map((a) => (
            <li key={a} className="chip">
              {a}
            </li>
          ))}
        </ul>

        <Link
          to={`/services/${item.slug}`}
          className="mt-auto inline-flex min-h-[44px] items-center gap-1.5 pt-5 text-sm font-semibold text-r2r-navy hover:text-r2r-deep"
        >
          View details
          <ArrowRight size={16} aria-hidden="true" />
          <span className="sr-only"> about {item.title}</span>
        </Link>
      </div>
    </Reveal>
  );
}
