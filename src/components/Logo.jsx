// Placeholder wordmark + mark inspired by the R2R palette and PCB traces.
// Replace with the official logo file (e.g. src/assets/logo.svg) when available.
export default function Logo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="38" height="38" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        <rect width="64" height="64" rx="12" fill="#075783" />
        <path
          d="M14 44V20h14a8 8 0 0 1 0 16H14m14 0 10 8"
          fill="none"
          stroke="#fff"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="48" cy="20" r="4" fill="#20B7B2" />
        <path d="M48 24v10" stroke="#20B7B2" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-lg font-bold tracking-tight text-r2r-deep">
          R2R <span className="text-r2r-navy">GLOBAL</span>
        </span>
        <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-r2r-muted">
          Circuit Design Company
        </span>
      </span>
    </span>
  );
}
