// Illustrative PCB board for the hero. Pure inline SVG: no image download, no layout shift.
export default function PcbVisual() {
  return (
    <svg
      viewBox="0 0 520 420"
      role="img"
      aria-label="Illustration of a printed circuit board with traces, pads and components"
      className="h-auto w-full"
    >
      <defs>
        <pattern id="pcb-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="#075783" strokeOpacity="0.08" />
        </pattern>
        <linearGradient id="pcb-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0E6E94" />
          <stop offset="1" stopColor="#075783" />
        </linearGradient>
      </defs>

      <rect x="6" y="6" width="508" height="408" rx="22" fill="#EDF7FA" stroke="#DDE9ED" />
      <rect x="6" y="6" width="508" height="408" rx="22" fill="url(#pcb-grid)" />

      <rect x="40" y="44" width="440" height="332" rx="16" fill="url(#pcb-fill)" />
      <rect x="40" y="44" width="440" height="332" rx="16" fill="none" stroke="#fff" strokeOpacity="0.25" />

      {/* traces */}
      <g fill="none" stroke="#7FE0DC" strokeOpacity="0.85" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M70 100H150L180 130H230" />
        <path d="M70 130H120L150 160H230" />
        <path d="M70 160H100L130 190H230" />
        <path d="M290 130H350L380 100H450" />
        <path d="M290 160H360L390 190H450" />
        <path d="M290 190H340L370 220H450" />
        <path d="M260 240V290L230 320H110" />
        <path d="M260 240V290L290 320H410" />
        <path d="M70 250H190" />
        <path d="M70 280H150" />
        <path d="M450 270H340" />
        <path d="M450 300H380" />
      </g>

      {/* pads */}
      <g fill="#fff">
        {[
          [70, 100], [70, 130], [70, 160], [450, 100], [450, 190], [450, 220],
          [110, 320], [410, 320], [70, 250], [70, 280], [450, 270], [450, 300],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="5" />
        ))}
      </g>

      {/* IC */}
      <g>
        <rect x="230" y="110" width="60" height="100" rx="4" fill="#0B3657" stroke="#fff" strokeOpacity="0.35" />
        <circle cx="244" cy="124" r="3" fill="#20B7B2" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x="222" y={124 + i * 22} width="8" height="6" fill="#DDE9ED" />
            <rect x="290" y={124 + i * 22} width="8" height="6" fill="#DDE9ED" />
          </g>
        ))}
      </g>

      {/* capacitors / resistors */}
      <g>
        <rect x="170" y="236" width="30" height="14" rx="3" fill="#F8FBFC" />
        <rect x="120" y="266" width="30" height="14" rx="3" fill="#F8FBFC" />
        <rect x="340" y="256" width="30" height="14" rx="3" fill="#F8FBFC" />
        <rect x="370" y="294" width="30" height="14" rx="3" fill="#F8FBFC" />
        <circle cx="410" cy="150" r="14" fill="#DFF5F5" stroke="#0B3657" strokeOpacity="0.4" />
        <circle cx="410" cy="150" r="5" fill="#20B7B2" />
      </g>

      {/* LED */}
      <g>
        <rect x="250" y="276" width="20" height="28" rx="4" fill="#20B7B2" />
        <rect x="256" y="282" width="8" height="8" rx="2" fill="#fff" fillOpacity="0.8" />
      </g>
    </svg>
  );
}
