import { getIcon } from '../data/icons.js';
import Reveal from './Reveal.jsx';

export default function IndustryCard({ item, index = 0 }) {
  const Icon = getIcon(item.icon);
  return (
    <Reveal as="article" delay={(index % 3) * 0.05} className="h-full">
      <div className="card-r2r card-r2r-hover flex h-full items-start gap-4 p-5">
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-r2r-sky text-r2r-navy">
          <Icon size={22} aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-base">{item.title}</h3>
          <p className="mt-1 text-sm text-r2r-muted">{item.text}</p>
        </div>
      </div>
    </Reveal>
  );
}
