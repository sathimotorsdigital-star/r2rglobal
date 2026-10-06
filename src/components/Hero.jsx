import { motion, useReducedMotion } from 'framer-motion';
import Button from './Button.jsx';
import TraceBackground from './TraceBackground.jsx';
import PcbVisual from './PcbVisual.jsx';

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 15 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.55, delay } };

  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-gradient-to-b from-white to-r2r-sky">
      <TraceBackground className="opacity-70" />
      <div className="container-r2r relative grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:py-28">
        <div>
          <motion.p
            {...fade(0)}
            className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-r2r-tealdark"
          >
            <span className="h-px w-6 bg-r2r-teal" aria-hidden="true" />
            R2R Global · PCB Design Company
          </motion.p>
          <motion.h1 id="hero-heading" {...fade(0.05)}>
            Electronic Circuit Design
            <br className="hidden sm:block" /> &amp; PCB Development Solutions
          </motion.h1>
          <motion.p {...fade(0.12)} className="mt-5 max-w-xl text-base text-r2r-muted sm:text-lg">
            Engineering reliable electronic circuits, PCB designs and power electronics solutions for EV, solar,
            lighting, automation and industrial applications.
          </motion.p>
          <motion.div {...fade(0.2)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/services" variant="primary">
              Explore Our Services
            </Button>
            <Button to="/projects" variant="secondary">
              View Our Projects
            </Button>
          </motion.div>
        </div>

        <motion.div {...fade(0.15)} className="mx-auto w-full max-w-md lg:max-w-none">
          <PcbVisual />
        </motion.div>
      </div>
    </section>
  );
}
