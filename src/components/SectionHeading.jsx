import Reveal from './Reveal.jsx';

export default function SectionHeading({ eyebrow, title, text, align = 'center', as: Tag = 'h2' }) {
  const alignCls = align === 'center' ? 'mx-auto text-center' : 'text-left';
  return (
    <Reveal className={`mb-10 max-w-3xl sm:mb-14 ${alignCls}`}>
      {eyebrow && (
        <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-r2r-tealdark">
          <span className="h-px w-6 bg-r2r-teal" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <Tag>{title}</Tag>
      {text && <p className="mt-4 text-base text-r2r-muted sm:text-lg">{text}</p>}
    </Reveal>
  );
}
