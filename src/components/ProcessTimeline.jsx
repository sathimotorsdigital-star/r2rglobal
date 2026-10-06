import { getIcon } from '../data/icons.js';
import { processSteps } from '../data/process.js';
import Reveal from './Reveal.jsx';

// Vertical on mobile/tablet, horizontal from lg up.
export default function ProcessTimeline() {
  return (
    <ol className="relative grid gap-0 lg:grid-cols-7 lg:gap-4">
      <span
        aria-hidden="true"
        className="absolute left-6 top-2 hidden h-[calc(100%-1rem)] w-0.5 bg-r2r-line max-lg:block lg:left-[7%] lg:right-[7%] lg:top-6 lg:h-0.5 lg:w-auto"
      />
      {processSteps.map((step, i) => {
        const Icon = getIcon(step.icon);
        return (
          <Reveal as="li" key={step.title} delay={i * 0.06} className="relative flex gap-4 pb-8 last:pb-0 lg:block lg:pb-0 lg:text-center">
            <span className="relative z-10 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-r2r-teal bg-white text-r2r-navy lg:mx-auto">
              <Icon size={22} aria-hidden="true" />
            </span>
            <div className="lg:mt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-r2r-tealdark">Step {i + 1}</p>
              <h3 className="mt-1 text-base">{step.title}</h3>
              <p className="mt-1 text-sm text-r2r-muted">{step.text}</p>
            </div>
          </Reveal>
        );
      })}
    </ol>
  );
}
