import { motion, useReducedMotion } from 'framer-motion';
import { CircuitBoard } from 'lucide-react';

// Engineering placeholder artwork: replaced by `project.image` when a real photo is supplied.
function Placeholder({ variant, name }) {
  const accent = { led: '#20B7B2', power: '#075783', solar: '#20B7B2', matrix: '#075783', control: '#0B3657' }[variant] || '#075783';
  return (
    <svg
      viewBox="0 0 400 240"
      role="img"
      aria-label={`Placeholder illustration for ${name}`}
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="240" fill="#EDF7FA" />
      <defs>
        <pattern id={`g-${variant}`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="#075783" strokeOpacity="0.07" />
        </pattern>
      </defs>
      <rect width="400" height="240" fill={`url(#g-${variant})`} />
      <g fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6">
        <path d="M40 80H120L150 110H260" />
        <path d="M40 120H100L130 150H260" />
        <path d="M360 90H300L270 60H200" />
        <path d="M360 170H300L270 200H180" />
      </g>
      <rect x="150" y="82" width="100" height="76" rx="8" fill={accent} fillOpacity="0.9" />
      <g fill="#fff">
        <circle cx="40" cy="80" r="5" />
        <circle cx="40" cy="120" r="5" />
        <circle cx="360" cy="90" r="5" />
        <circle cx="360" cy="170" r="5" />
      </g>
      {variant === 'matrix' &&
        Array.from({ length: 12 }).map((_, i) => (
          <circle key={i} cx={166 + (i % 4) * 22} cy={98 + Math.floor(i / 4) * 22} r="5" fill="#DFF5F5" />
        ))}
    </svg>
  );
}

export default function ProjectCard({ project, index = 0 }) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      layout={!reduce}
      initial={reduce ? false : { opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index, 5) * 0.05 }}
      className="card-r2r card-r2r-hover flex h-full flex-col overflow-hidden"
    >
      <div className="aspect-[5/3] w-full overflow-hidden border-b border-r2r-line bg-r2r-sky">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} PCB`}
            loading="lazy"
            decoding="async"
            width="400"
            height="240"
            className="h-full w-full object-cover"
          />
        ) : (
          <Placeholder variant={project.variant} name={project.name} />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="chip">{project.category}</span>
          {!project.image && <span className="text-xs text-r2r-muted">Photo to be added</span>}
        </div>
        <h3 className="mt-3">{project.name}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-r2r-navy">
          <CircuitBoard size={15} aria-hidden="true" />
          {project.application}
        </p>
        <p className="mt-2 text-sm text-r2r-muted">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2 pt-1">
          {project.tech.map((t) => (
            <li key={t} className="rounded-md bg-r2r-paper px-2 py-1 text-xs text-r2r-muted ring-1 ring-r2r-line">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
