import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import Logo from './Logo.jsx';
import GoogleMap from './GoogleMap.jsx';
import { SITE, FOOTER_QUICK, FOOTER_SERVICES } from '../data/site.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-r2r-line bg-r2r-sky">
      <div className="container-r2r py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" aria-label="R2R Global home" className="inline-block">
              <Logo />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-r2r-muted">{SITE.footerBlurb}</p>
          </div>

          <nav aria-label="Footer quick links">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-r2r-navy">Quick Links</h2>
            <ul className="mt-4 space-y-1">
              {FOOTER_QUICK.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="inline-block py-1.5 text-sm text-r2r-muted hover:text-r2r-navy">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer services">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-r2r-navy">Core Services</h2>
            <ul className="mt-4 space-y-1">
              {FOOTER_SERVICES.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="inline-block py-1.5 text-sm text-r2r-muted hover:text-r2r-navy">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-r2r-navy">Contact</h2>
            <ul className="mt-4 space-y-2 text-sm text-r2r-muted">
              {SITE.contacts.map((c) => (
                <li key={c.tel} className="flex items-center gap-2">
                  <Phone size={16} className="shrink-0 text-r2r-tealdark" aria-hidden="true" />
                  <a href={`tel:${c.tel}`} className="py-1 hover:text-r2r-navy">
                    {c.name} - {c.display}
                  </a>
                </li>
              ))}
              <li className="flex gap-2 pt-2">
                <MapPin size={16} className="mt-1 shrink-0 text-r2r-tealdark" aria-hidden="true" />
                <address className="not-italic">
                  G/Floor, Plot No. A-83, Store No. 1,
                  <br />
                  Shalimar Garden Extn-II,
                  <br />
                  Ghaziabad, Uttar Pradesh, India
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <GoogleMap className="h-[260px] sm:h-[320px]" />
        </div>
      </div>

      {/* Extra bottom padding keeps copyright clear of the sticky buttons. */}
      <div className="border-t border-r2r-line bg-white">
        <div className="container-r2r pb-24 pt-5 text-center text-sm text-r2r-muted sm:pb-24">
          © {year} R2R Global. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
