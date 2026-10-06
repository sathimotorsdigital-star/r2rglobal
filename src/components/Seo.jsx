import { useEffect } from 'react';

const DEFAULT_DESC =
  'R2R Global provides PCB design, electronic circuit development, power electronics, EV charger circuits, solar electronics and automation solutions in Ghaziabad.';

export default function Seo({ title, description = DEFAULT_DESC }) {
  useEffect(() => {
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, [title, description]);
  return null;
}
