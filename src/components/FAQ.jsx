import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/faq.js';
import Reveal from './Reveal.jsx';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((item, i) => {
        const open = openIndex === i;
        return (
          <Reveal key={item.q} delay={Math.min(i, 4) * 0.04}>
            <div className="card-r2r overflow-hidden">
              <h3 className="text-base">
                <button
                  type="button"
                  id={`faq-btn-${i}`}
                  aria-expanded={open}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left font-heading font-semibold text-r2r-deep"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    size={20}
                    aria-hidden="true"
                    className={`shrink-0 text-r2r-navy transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                  />
                </button>
              </h3>
              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-btn-${i}`}
                hidden={!open}
                className="px-5 pb-5 text-sm text-r2r-muted sm:text-base"
              >
                {item.a}
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
