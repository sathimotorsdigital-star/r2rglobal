import { Link } from 'react-router-dom';
import { getIcon } from '../data/icons.js';
import Reveal from './Reveal.jsx';

export default function CapabilityCard({ item, index = 0 }) {
  const Icon = getIcon(item.icon);
  return (
    <Reveal delay={index * 0.06} className="h-full">
      <Link to={item.to} className="card-r2r card-r2r-hover group block h-full p-6">
        <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-r2r-cyan text-r2r-navy transition-colors group-hover:bg-r2r-navy group-hover:text-white">
          <Icon size={24} aria-hidden="true" />
        </span>
        <h3>{item.title}</h3>
        <p className="mt-2 text-sm text-r2r-muted sm:text-base">{item.text}</p>
        <span className="mt-5 block h-0.5 w-8 rounded-full bg-r2r-teal transition-all group-hover:w-14" aria-hidden="true" />
      </Link>
    </Reveal>
  );
}
