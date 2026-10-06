import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { getIcon } from '../data/icons.js';
import Reveal from './Reveal.jsx';

export default function SolutionCard({ item, index = 0 }) {
  const Icon = getIcon(item.icon);
  return (
    <Reveal as="article" delay={(index % 2) * 0.06} className="h-full">
      <div className="card-r2r card-r2r-hover flex h-full flex-col p-6 sm:p-7">
        <div className="flex items-start gap-4">
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-r2r-navy text-white">
            <Icon size={24} aria-hidden="true" />
          </span>
          <div>
            <h3>{item.title}</h3>
            <p className="mt-2 text-sm text-r2r-muted sm:text-base">{item.short}</p>
          </div>
        </div>
        <ul className="mt-5 space-y-2">
          {item.scope.slice(0, 3).map((s) => (
            <li key={s} className="flex gap-2 text-sm text-r2r-ink">
              <Check size={16} className="mt-0.5 shrink-0 text-r2r-tealdark" aria-hidden="true" />
              <span>{s}</span>
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
