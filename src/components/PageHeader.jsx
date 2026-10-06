import Reveal from './Reveal.jsx';
import TraceBackground from './TraceBackground.jsx';

export default function PageHeader({ eyebrow, title, text }) {
  return (
    <section className="relative overflow-hidden border-b border-r2r-line bg-gradient-to-b from-white to-r2r-sky">
      <TraceBackground className="opacity-60" />
      <div className="container-r2r relative py-12 sm:py-16 lg:py-20">
        <Reveal className="max-w-3xl">
          {eyebrow && (
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-r2r-tealdark">
              <span className="h-px w-6 bg-r2r-teal" aria-hidden="true" />
              {eyebrow}
            </p>
          )}
          <h1>{title}</h1>
          {text && <p className="mt-4 text-base text-r2r-muted sm:text-lg">{text}</p>}
        </Reveal>
      </div>
    </section>
  );
}
