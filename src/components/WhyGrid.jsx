import { getIcon } from '../data/icons.js';
import { whyItems } from '../data/process.js';
import Reveal from './Reveal.jsx';

export default function WhyGrid() {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {whyItems.map((item, i) => {
        const Icon = getIcon(item.icon);
        return (
          <Reveal as="li" key={item.title} delay={(i % 3) * 0.06}>
            <div className="flex h-full gap-4 rounded-2xl border border-r2r-line bg-white p-5">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-r2r-cyan text-r2r-navy">
                <Icon size={22} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base">{item.title}</h3>
                <p className="mt-1 text-sm text-r2r-muted">{item.text}</p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </ul>
  );
}
