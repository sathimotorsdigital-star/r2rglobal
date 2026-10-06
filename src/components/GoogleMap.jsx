import { MAP_SRC } from '../data/site.js';

export default function GoogleMap({ className = 'h-[320px] sm:h-[400px] lg:h-[480px]' }) {
  return (
    <div className={`w-full overflow-hidden rounded-2xl border border-r2r-line bg-r2r-sky shadow-card ${className}`}>
      <iframe
        title="R2R Global location map: Shalimar Garden Extn-II, Ghaziabad"
        src={MAP_SRC}
        width="100%"
        height="100%"
        style={{ border: 0, width: '100%', height: '100%', display: 'block' }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
