export const capabilities = [
  {
    icon: 'Cpu',
    title: 'Circuit Design',
    text: 'Schematic design of analog, digital and mixed-signal circuits built around your functional requirements.',
    to: '/services/circuit-design',
  },
  {
    icon: 'CircuitBoard',
    title: 'PCB Design & Development',
    text: 'PCB layout with attention to trace width, clearance, grounding, thermal paths and manufacturability.',
    to: '/services/pcb-design',
  },
  {
    icon: 'Zap',
    title: 'Power Electronics',
    text: 'Charger, solar, MPPT / PWM and power-supply circuit design for battery and load applications.',
    to: '/solutions',
  },
  {
    icon: 'Bot',
    title: 'Automation Electronics',
    text: 'Control, sensing and output-stage electronics for machine, process and panel automation.',
    to: '/services/automation',
  },
];

export const services = [
  {
    slug: 'circuit-design',
    icon: 'Cpu',
    title: 'Circuit Design',
    short:
      'Schematic-level design of analog, digital and mixed-signal circuits, built around the required function, supply conditions and operating environment.',
    applications: ['Sensor interfaces', 'Driver stages', 'Protection circuits', 'Control boards'],
    scope: [
      'Requirement-to-schematic circuit design',
      'Component selection and derating review',
      'Protection, filtering and supply-conditioning stages',
      'Design documentation prepared for PCB layout',
    ],
  },
  {
    slug: 'pcb-design',
    icon: 'CircuitBoard',
    title: 'PCB Design & Development',
    short:
      'PCB layout and development with attention to trace current capacity, clearances, grounding, thermal paths and ease of assembly.',
    applications: ['Control boards', 'LED boards', 'Power boards', 'Driver boards'],
    scope: [
      'Schematic capture and PCB layout',
      'Footprint creation and component placement planning',
      'Grounding, clearance and heat-dissipation considerations',
      'Fabrication and assembly file preparation',
    ],
  },
  {
    slug: 'led-pcb',
    icon: 'Lightbulb',
    title: 'LED PCB Design',
    short:
      'LED driver and LED board layouts for lighting products, covering current regulation, LED arrangement and thermal management.',
    applications: ['LED lamps and luminaires', 'Flood and street-light boards', 'Signage boards', 'Indicator lighting'],
    scope: [
      'Constant-current drive circuit design',
      'LED string arrangement and board layout',
      'Thermal path planning for LED and driver sections',
      'Custom board shapes to suit the fixture',
    ],
  },
  {
    slug: 'reflector-circuit',
    icon: 'Target',
    title: 'Reflector Circuit',
    short:
      'Driver and LED board circuits designed around reflector-based fixtures, matching LED arrangement and drive to the housing.',
    applications: ['Reflector lamps', 'Spot and flood fittings', 'Decorative reflector lights'],
    scope: [
      'LED layout matched to the reflector housing',
      'Driver circuit selection and design',
      'Board outline and mounting tailored to the fitting',
    ],
  },
  {
    slug: 'running-indicator-circuit',
    icon: 'Radio',
    title: 'Running Indicator Circuit',
    short:
      'Sequencing circuits for running and chasing LED indicators, with controlled switching order, timing and drive stages.',
    applications: ['Sequential indicator lamps', 'Direction and signage indicators', 'Decorative lighting'],
    scope: [
      'Sequence and timing logic design',
      'LED drive stages sized for the load',
      'Compact board layouts for indicator assemblies',
    ],
  },
  {
    slug: 'matrix-led-circuit',
    icon: 'Grid3x3',
    title: 'Matrix LED Circuit',
    short:
      'Row-and-column driven LED matrix boards with scanning logic and current control for pattern and message displays.',
    applications: ['Display boards', 'Signage panels', 'Indicator and message panels'],
    scope: [
      'Matrix scanning and drive circuit design',
      'Per-LED current control approach',
      'Modular board layouts for panel assembly',
    ],
  },
  {
    slug: 'control-gear-circuit',
    icon: 'SlidersHorizontal',
    title: 'Control Gear Circuit',
    short:
      'Control gear electronics that regulate and drive lamps and loads, including driver stages and protection.',
    applications: ['LED driver gear', 'Lighting control units', 'Load control electronics'],
    scope: [
      'Driver / control gear topology selection',
      'Protection stages for the supply and load side',
      'Layout for heat and isolation requirements',
    ],
  },
  {
    slug: 'pid-controller',
    icon: 'Gauge',
    title: 'PID Controller Solutions',
    short:
      'PID-based control circuits that regulate temperature, speed, level or other variables using sensor feedback and an output stage.',
    applications: ['Temperature control', 'Heater regulation', 'Process control panels'],
    scope: [
      'Sensor input conditioning',
      'PID control loop implementation',
      'Relay or solid-state output stage design',
      'Setpoint and display interface',
    ],
  },
  {
    slug: 'metering-circuits',
    icon: 'Activity',
    title: 'Metering Circuits',
    short:
      'Measurement and metering electronics: signal conditioning, sensing, and display or output interfaces.',
    applications: ['Voltage and current measurement', 'Energy monitoring modules', 'Battery monitors'],
    scope: [
      'Voltage and current sensing front ends',
      'Signal conditioning and measurement circuits',
      'Display and data-output interfaces',
    ],
  },
  {
    slug: 'automation',
    icon: 'Bot',
    title: 'Automation Electronics',
    short:
      'Control boards for automation: sensor inputs, timing and logic, and relay or MOSFET output stages.',
    applications: ['Machine control', 'Timer and sequencing boards', 'Sensor-triggered control', 'Control panels'],
    scope: [
      'Input conditioning for sensors and switches',
      'Control logic and timing circuits',
      'Output stages for relays, contactors and loads',
    ],
  },
  {
    slug: 'custom-circuit-development',
    icon: 'Wrench',
    title: 'Custom Electronic Circuit Development',
    short:
      'Circuit development from a functional description or an existing sample, taken through schematic, PCB and prototype.',
    applications: ['New product circuits', 'Circuits for an existing product function', 'Replacement or improved designs'],
    scope: [
      'Requirement discussion and feasibility review',
      'Design based on the required function or a working sample',
      'Prototype, testing and refinement',
    ],
  },
];
