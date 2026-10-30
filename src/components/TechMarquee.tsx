import { useRef, type ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { about, marqueeTech, techIcons } from "../data/profile";

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

/**
 * Infinite row that drifts on its own and speeds up / reverses with scroll velocity.
 * `render(hidden)` is called twice; the second copy is aria-hidden.
 */
const VelocityRow = ({ baseVelocity, render }: { baseVelocity: number; render: (hidden: boolean) => ReactNode }) => {
  const reduceMotion = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const direction = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduceMotion) return;
    let moveBy = direction.current * baseVelocity * (delta / 1000);
    const factor = velocityFactor.get();
    if (factor < 0) direction.current = -1;
    else if (factor > 0) direction.current = 1;
    moveBy += direction.current * moveBy * factor;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="marquee">
      <motion.div className="marquee-row" style={{ x }}>
        {render(false)}
        {render(true)}
      </motion.div>
    </div>
  );
};

const TechMarquee = () => (
  <Box as="section" aria-label="Focus areas and technologies" py={{ base: 12, md: 16 }} display="grid" gap={{ base: 6, md: 8 }} overflow="hidden">
    <VelocityRow
      baseVelocity={-1.6}
      render={(hidden) => (
        <Box as="span" display="inline-flex" alignItems="center" aria-hidden={hidden || undefined}>
          {about.focus.map((word, i) => (
            <Box as="span" key={word} display="inline-flex" alignItems="center">
              <span className={`marquee-big${i % 2 ? " outline" : ""}`}>{word}</span>
              <span className="marquee-sep" aria-hidden="true" />
            </Box>
          ))}
        </Box>
      )}
    />
    <VelocityRow
      baseVelocity={1.2}
      render={(hidden) => (
        <Box as="span" display="inline-flex" alignItems="center" aria-hidden={hidden || undefined}>
          {marqueeTech.map((name) => {
            const Icon = techIcons[name];
            return (
              <span className="marquee-item" key={name}>
                {Icon && <Icon aria-hidden="true" />}
                {name}
              </span>
            );
          })}
        </Box>
      )}
    />
  </Box>
);

export default TechMarquee;
