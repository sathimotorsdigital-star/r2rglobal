import { Phone, MessageCircle } from 'lucide-react';
import { CALL_HREF, WHATSAPP_HREF } from '../data/site.js';
import Button from './Button.jsx';
import Reveal from './Reveal.jsx';

export default function CtaBand({
  title = 'Have a circuit or PCB requirement?',
  text = 'Call or message us on WhatsApp to discuss it.',
}) {
  return (
    <section aria-label="Contact us" className="section-y">
      <div className="container-r2r">
        <Reveal className="relative overflow-hidden rounded-3xl bg-r2r-navy px-6 py-10 text-center sm:px-12 sm:py-14">
          <h2 className="text-white">{title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">{text}</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={CALL_HREF} variant="secondary" className="!border-white !bg-white">
              <Phone size={18} aria-hidden="true" /> Call Now
            </Button>
            <Button href={WHATSAPP_HREF} variant="whatsapp" external>
              <MessageCircle size={18} aria-hidden="true" /> WhatsApp Us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
