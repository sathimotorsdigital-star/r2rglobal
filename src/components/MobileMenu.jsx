import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV_LINKS } from '../data/site.js';

export default function MobileMenu({ open, onClose, id }) {
  const firstLink = useRef(null);

  // Lock background scroll while open.
  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Escape closes; focus moves into the menu on open.
  useEffect(() => {
    if (!open) return undefined;
    firstLink.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-x-0 bottom-0 top-16 z-40 bg-r2r-deep/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            key="panel"
            id={id}
            className="fixed inset-x-0 top-16 z-50 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-r2r-line bg-white shadow-lift"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <nav aria-label="Mobile" className="container-r2r py-3">
              <ul className="flex flex-col">
                {NAV_LINKS.map((link, i) => (
                  <li key={link.to} className="border-b border-r2r-line last:border-0">
                    <NavLink
                      to={link.to}
                      end={link.end}
                      ref={i === 0 ? firstLink : null}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `flex min-h-[52px] items-center justify-between px-2 text-base font-semibold ${
                          isActive ? 'text-r2r-navy' : 'text-r2r-ink'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span>{link.label}</span>
                          {isActive && <span className="h-2 w-2 rounded-full bg-r2r-teal" aria-hidden="true" />}
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
