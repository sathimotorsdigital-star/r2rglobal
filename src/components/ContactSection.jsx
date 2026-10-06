import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { SITE, CALL_HREF, WHATSAPP_HREF } from '../data/site.js';
import Button from './Button.jsx';
import GoogleMap from './GoogleMap.jsx';
import Reveal from './Reveal.jsx';

export function ContactDetails() {
  return (
    <div className="space-y-4">
      <div className="card-r2r p-6">
        <div className="flex items-start gap-4">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-r2r-cyan text-r2r-navy">
            <Phone size={22} aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h3 className="text-base">Phone</h3>
            <ul className="mt-2 space-y-3">
              {SITE.contacts.map((c) => (
                <li key={c.tel}>
                  <p className="text-sm text-r2r-muted">{c.primary ? `${c.name} (Primary)` : c.name}</p>
                  <a
                    href={`tel:${c.tel}`}
                    className="inline-block py-1 font-heading text-lg font-semibold text-r2r-navy hover:text-r2r-deep"
                  >
                    {c.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="card-r2r p-6">
        <div className="flex items-start gap-4">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-r2r-cyan text-r2r-navy">
            <MapPin size={22} aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-base">Location</h3>
            <address className="mt-2 not-italic text-r2r-ink">
              {SITE.addressLines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button href={CALL_HREF} variant="call" className="sm:flex-1">
          <Phone size={18} aria-hidden="true" /> Call Now
        </Button>
        <Button href={WHATSAPP_HREF} variant="whatsapp" external className="sm:flex-1">
          <MessageCircle size={18} aria-hidden="true" /> WhatsApp Us
        </Button>
      </div>
    </div>
  );
}

// Homepage contact / location block (no form).
export default function ContactSection() {
  return (
    <section id="contact-section" aria-labelledby="contact-heading" className="section-y bg-r2r-sky">
      <div className="container-r2r">
        <Reveal className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-r2r-tealdark">Contact</p>
          <h2 id="contact-heading">Discuss your circuit or PCB requirement</h2>
          <p className="mt-4 text-r2r-muted sm:text-lg">
            Call or message us on WhatsApp to talk through what your circuit needs to do.
          </p>
        </Reveal>
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <ContactDetails />
          </div>
          <div className="lg:col-span-3">
            <GoogleMap className="h-[320px] sm:h-[400px] lg:h-full lg:min-h-[420px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
