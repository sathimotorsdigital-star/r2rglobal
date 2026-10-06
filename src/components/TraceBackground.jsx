// Subtle PCB-trace line pattern used as a decorative section background.
export default function TraceBackground({ className = '' }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 800 600"
    >
      <defs>
        <pattern id="r2r-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="#075783" strokeOpacity="0.06" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="800" height="600" fill="url(#r2r-grid)" />
      <g fill="none" stroke="#20B7B2" strokeOpacity="0.28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M0 120H180L220 160H420" />
        <path d="M0 160H120L160 200H300" />
        <path d="M800 440H620L580 400H460" />
        <path d="M800 480H700L660 520H540" />
        <path d="M520 0V80L560 120H800" />
      </g>
      <g fill="#fff" stroke="#20B7B2" strokeOpacity="0.4" strokeWidth="2">
        <circle cx="420" cy="160" r="5" />
        <circle cx="300" cy="200" r="5" />
        <circle cx="460" cy="400" r="5" />
        <circle cx="540" cy="520" r="5" />
        <circle cx="800" cy="120" r="5" />
      </g>
    </svg>
  );
}
