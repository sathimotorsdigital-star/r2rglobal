// R2R Global provides circuit / design solutions. It is not presented as a
// finished-charger manufacturer; wording stays on design and development.
export const solutions = [
  {
    slug: 'smps-charger-circuit',
    icon: 'PlugZap',
    title: 'SMPS Charger Circuit',
    short:
      'Charger circuit design for switch-mode battery charging, covering the power stage, feedback regulation and protection.',
    applications: ['Battery chargers', 'Adapter-type power stages', 'Charging modules'],
    scope: [
      'Topology selection to suit the power level and input range',
      'Feedback and charge-control circuit design',
      'Short-circuit, over-voltage and reverse protection stages',
      'PCB layout for the switching section',
    ],
  },
  {
    slug: 'ev-charger-circuit',
    icon: 'BatteryCharging',
    title: 'Electric Scooty / EV Charger Circuit',
    short:
      'Charger circuit design for electric two-wheeler battery packs, with charge control and protection stages.',
    applications: ['Electric scooty chargers', 'Light EV battery charging', 'Charge-control boards'],
    scope: [
      'Charge profile and control circuit design',
      'Protection and indication stages',
      'Board layout suited to the enclosure and heat paths',
    ],
  },
  {
    slug: 'solar-driver',
    icon: 'Sun',
    title: 'Solar Driver',
    short:
      'Driver circuits for solar-powered lighting and load applications, working from a panel and battery arrangement.',
    applications: ['Solar LED lighting', 'Solar-powered loads', 'Dusk-to-dawn control'],
    scope: [
      'Panel and battery interface design',
      'LED or load driver stage',
      'Light-sensing and switching logic',
    ],
  },
  {
    slug: 'solar-mppt',
    icon: 'Zap',
    title: 'MPPT Controller',
    short:
      'Maximum power point tracking controller circuit design for solar-to-battery charging.',
    applications: ['Solar charge controllers', 'Battery charging from panels'],
    scope: [
      'Power stage and tracking control design',
      'Voltage and current sensing circuits',
      'Battery protection and status indication',
    ],
  },
  {
    slug: 'pwm-controller',
    icon: 'Power',
    title: 'PWM Controller',
    short:
      'PWM-based controller circuits for solar charging, dimming and load regulation.',
    applications: ['PWM solar charge controllers', 'LED dimming', 'Load regulation'],
    scope: [
      'PWM generation and control circuit design',
      'Switching stage sized for the load',
      'Sensing and protection circuits',
    ],
  },
  {
    slug: 'power-supply-design',
    icon: 'Layers',
    title: 'Power Supply Circuit Design',
    short:
      'Power supply circuit design for electronic equipment, from conditioning stages to regulated outputs.',
    applications: ['Equipment power supplies', 'Control board supplies', 'Multi-output supplies'],
    scope: [
      'Supply architecture and regulation approach',
      'Filtering, protection and derating review',
      'PCB layout for low noise and good thermal behaviour',
    ],
  },
  {
    slug: 'custom-power-electronics',
    icon: 'Settings',
    title: 'Custom Power Electronics Solutions',
    short:
      'Custom charging and power-conversion circuit development for requirements that do not fit a standard design.',
    applications: ['Custom charging circuits', 'Application-specific converters', 'Special-purpose drivers'],
    scope: [
      'Requirement study and feasibility discussion',
      'Circuit design, prototype and testing',
      'Optimisation against the target application',
    ],
  },
];
