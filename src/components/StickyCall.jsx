import { Phone } from 'lucide-react';
import { CALL_HREF } from '../data/site.js';

export default function StickyCall() {
  return (
    <a
      href={CALL_HREF}
      aria-label="Call R2R Global now"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-r2r-navy px-4 py-3 text-sm font-semibold text-white shadow-lift transition hover:bg-r2r-deep sm:bottom-6 sm:right-6 sm:px-5"
    >
      <Phone size={20} aria-hidden="true" />
      <span>Call Now</span>
    </a>
  );
}
