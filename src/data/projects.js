import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';
import img6 from '../images/img6.png';
import img7 from '../images/img7.png';
import img8 from '../images/img8.png';

export const projectFilters = [
  'All',
  'PCB Design',
  'Power Electronics',
  'EV',
  'Solar',
  'LED',
  'Automation',
];

export const projects = [
  {
    id: 'led-reflector-board',
    name: 'LED Reflector Circuit Board',
    category: 'LED',
    tags: ['LED', 'PCB Design'],
    application: 'Reflector-based LED fixtures',
    tech: ['Constant-current drive', 'Custom LED layout'],
    description:
      'LED board and driver arrangement designed around a reflector housing.',
    variant: 'led',
    image: img1,
  },

  {
    id: 'smps-charger-pcb',
    name: 'SMPS Charger Circuit PCB',
    category: 'Power Electronics',
    tags: ['Power Electronics', 'PCB Design'],
    application: 'Battery charging',
    tech: ['Switch-mode power stage', 'Feedback regulation'],
    description:
      'Switch-mode charger circuit with protection stages and a power-oriented PCB layout.',
    variant: 'power',
    image: img2,
  },

  {
    id: 'ev-charger-board',
    name: 'EV Charger Control Board',
    category: 'EV',
    tags: ['EV', 'Power Electronics'],
    application: 'Electric scooty battery charging',
    tech: ['Charge control', 'Protection circuits'],
    description:
      'Charger circuit design for electric two-wheeler battery packs.',
    variant: 'power',
    image: img3,
  },

  {
    id: 'solar-mppt-board',
    name: 'Solar MPPT Controller Board',
    category: 'Solar',
    tags: ['Solar', 'Power Electronics'],
    application: 'Solar-to-battery charging',
    tech: ['MPPT control', 'Voltage and current sensing'],
    description:
      'Maximum power point tracking controller circuit for solar charging.',
    variant: 'solar',
    image: img4,
  },

  {
    id: 'running-indicator-board',
    name: 'Running Indicator LED Board',
    category: 'LED',
    tags: ['LED', 'PCB Design'],
    application: 'Sequential indicator lighting',
    tech: ['Sequencing logic', 'LED drive stages'],
    description:
      'Sequencing circuit for running and chasing LED indicators.',
    variant: 'led',
    image: img5,
  },

  {
    id: 'matrix-led-board',
    name: 'Matrix LED Display Board',
    category: 'LED',
    tags: ['LED', 'PCB Design'],
    application: 'Display and signage panels',
    tech: ['Row-column scanning', 'Modular layout'],
    description:
      'Matrix LED circuit with scanning drive for pattern displays.',
    variant: 'matrix',
    image: img6,
  },

  {
    id: 'pid-controller-board',
    name: 'PID Controller Board',
    category: 'Automation',
    tags: ['Automation', 'PCB Design'],
    application: 'Temperature and process regulation',
    tech: ['Sensor conditioning', 'PID control loop'],
    description:
      'PID-based controller circuit with sensor input and output stage.',
    variant: 'control',
    image: img7,
  },

  {
    id: 'metering-board',
    name: 'Metering Circuit Board',
    category: 'Automation',
    tags: ['Automation', 'PCB Design'],
    application: 'Voltage and current measurement',
    tech: ['Signal conditioning', 'Display interface'],
    description:
      'Measurement and metering electronics with conditioned sensing inputs.',
    variant: 'control',
    image: img8,
  },
];