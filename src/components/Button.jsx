import { Link } from 'react-router-dom';

const base =
  'inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition duration-200 sm:text-base';

const variants = {
  primary: 'bg-r2r-navy text-white shadow-card hover:bg-r2r-deep',
  secondary: 'border border-r2r-navy/30 bg-white text-r2r-navy hover:border-r2r-navy hover:bg-r2r-sky',
  whatsapp: 'bg-[#128C4A] text-white shadow-card hover:bg-[#0E7A40]',
  call: 'bg-r2r-navy text-white shadow-card hover:bg-r2r-deep',
};

// `to` => internal route, `href` => external / tel link.
export default function Button({ to, href, variant = 'primary', external = false, children, className = '', ...rest }) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={cls}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
