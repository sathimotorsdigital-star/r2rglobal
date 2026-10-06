import { MessageCircle } from 'lucide-react';
import { WHATSAPP_HREF } from '../data/site.js';

export default function StickyWhatsApp() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with R2R Global on WhatsApp"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-4 z-40 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#128C4A] px-4 py-3 text-sm font-semibold text-white shadow-lift transition hover:bg-[#0E7A40] sm:bottom-6 sm:left-6 sm:px-5"
    >
      <MessageCircle size={20} aria-hidden="true" />
      <span className="sm:hidden">WhatsApp</span>
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
