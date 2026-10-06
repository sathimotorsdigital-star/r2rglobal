export const SITE = {
  name: 'R2R Global',
  tagline: 'PCB Design Company',
  footerBlurb:
    'Electronic Circuit Design, PCB Development & Power Electronics Solutions.',
  contacts: [
    { name: 'Rahul Verma', display: '84760 24374', tel: '+918476024374', primary: true },
    { name: 'HRK', display: '98912 40633', tel: '+919891240633', primary: false },
  ],
  whatsappNumber: '918476024374',
  whatsappMessage:
    'Hello R2R Global,\nI would like to discuss a PCB / circuit development requirement.',
  addressLines: [
    'G/Floor, Plot No. A-83, Store No. 1',
    'Shalimar Garden Extn-II',
    'Ghaziabad, Uttar Pradesh, India',
  ],
  mapQuery:
    'G/Floor, Plot No. A-83, Store No. 1, Shalimar Garden Extn-II, Ghaziabad, Uttar Pradesh, India',
};

export const PRIMARY = SITE.contacts[0];
export const CALL_HREF = `tel:${PRIMARY.tel}`;
export const WHATSAPP_HREF = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
  SITE.whatsappMessage
)}`;
export const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  SITE.mapQuery
)}&output=embed`;

export const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/industries', label: 'Industries' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export const FOOTER_QUICK = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export const FOOTER_SERVICES = [
  { to: '/services/circuit-design', label: 'Circuit Design' },
  { to: '/services/pcb-design', label: 'PCB Design' },
  { to: '/solutions', label: 'Power Electronics' },
  { to: '/services/automation', label: 'Automation' },
];
