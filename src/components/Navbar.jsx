import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo.jsx';
import MobileMenu from './MobileMenu.jsx';
import { NAV_LINKS } from '../data/site.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const buttonRef = useRef(null);
  const close = useCallback(() => setOpen(false), []);

  // Close on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close if the viewport grows into the desktop layout.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Return focus to the toggle after Escape closes the menu.
  const closeAndRestore = useCallback(() => {
    setOpen(false);
    buttonRef.current?.focus();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-r2r-line bg-white">
      <div className="container-r2r flex h-16 items-center justify-between">
        <Link to="/" aria-label="R2R Global home" className="rounded-lg">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `relative rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
                      isActive ? 'text-r2r-navy' : 'text-r2r-muted hover:text-r2r-navy'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-3.5 -bottom-[1px] h-0.5 rounded-full bg-r2r-teal transition-opacity ${
                          isActive ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-lg text-r2r-deep hover:bg-r2r-sky lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
      </div>

      <div className="lg:hidden">
        <MobileMenu id="mobile-menu" open={open} onClose={closeAndRestore} />
      </div>
    </header>
  );
}
