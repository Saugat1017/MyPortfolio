import { Fragment, useEffect, useRef, type ReactNode } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type HTMLMotionProps,
  type MotionValue,
} from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1] as const;

type RiseProps = HTMLMotionProps<"div"> & { index?: number };

/**
 * Scroll-scrubbed entrance: the element rises, scales up and fades in as it
 * scrolls into view — and plays backwards when scrolling up.
 */
export const Rise = ({ index = 0, style, children, ...rest }: RiseProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const end = `start ${Math.max(58, 82 - index * 6)}%` as const;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", end] });
  const y = useTransform(scrollYProgress, [0, 1], [90, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.93, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [0, 1]);

  return (
    <motion.div ref={ref} style={reduceMotion ? style : { ...style, y, scale, opacity }} {...rest}>
      {children}
    </motion.div>
  );
};

/** Splits "Where I've *shipped*." into words; *starred* words get the accent style. */
const parseWords = (text: string) => {
  let accent = false;
  return text.split(" ").map((word) => {
    const parts: { text: string; accent: boolean }[] = [];
    word.split("*").forEach((part, i) => {
      if (i > 0) accent = !accent;
      if (part) parts.push({ text: part, accent });
    });
    return parts;
  });
};

const headingVariants = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const wordVariants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.9, ease: EASE } },
};

/** Heading whose words slide up out of a mask, one after another. */
export const SplitHeading = ({ text, className }: { text: string; className?: string }) => {
  const words = parseWords(text);
  return (
    <motion.h2
      className={className}
      aria-label={text.replace(/\*/g, "")}
      variants={headingVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {words.map((parts, i) => (
        <Fragment key={i}>
          <span className="split-mask" aria-hidden="true">
            <motion.span className="split-word" variants={wordVariants}>
              {parts.map((p, j) =>
                p.accent ? (
                  <span key={j} className="accent-word">
                    {p.text}
                  </span>
                ) : (
                  <Fragment key={j}>{p.text}</Fragment>
                )
              )}
            </motion.span>
          </span>
          {i < words.length - 1 && " "}
        </Fragment>
      ))}
    </motion.h2>
  );
};

const ScrollWord = ({
  progress,
  range,
  bold,
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  bold: boolean;
  children: string;
}) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return bold ? <motion.strong style={{ opacity }}>{children}</motion.strong> : <motion.span style={{ opacity }}>{children}</motion.span>;
};

/** Paragraph whose words light up one by one as it scrolls through the viewport. */
export const ScrollText = ({ text }: { text: string }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 90%", "end 55%"] });

  const tokens = text
    .split(/(\*\*[^*]+\*\*)/g)
    .filter(Boolean)
    .flatMap((segment) => {
      const bold = segment.startsWith("**");
      const clean = bold ? segment.slice(2, -2) : segment;
      return clean.split(/(\s+)/).filter(Boolean).map((w) => ({ w, bold }));
    });
  const total = tokens.filter((t) => t.w.trim()).length;
  let wordIndex = 0;

  return (
    <p ref={ref}>
      {tokens.map((t, i) => {
        if (!t.w.trim()) return <Fragment key={i}>{t.w}</Fragment>;
        const start = wordIndex / total;
        wordIndex += 1;
        if (reduceMotion) return t.bold ? <strong key={i}>{t.w}</strong> : <span key={i}>{t.w}</span>;
        return (
          <ScrollWord key={i} progress={scrollYProgress} range={[start, Math.min(1, start + 3 / total)]} bold={t.bold}>
            {t.w}
          </ScrollWord>
        );
      })}
    </p>
  );
};

type RevealProps = HTMLMotionProps<"div"> & { delay?: number; y?: number };

/** Fades + lifts its children in the first time they scroll into view. */
export const Reveal = ({ delay = 0, y = 28, children, ...rest }: RevealProps) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.8, delay, ease: EASE }}
    {...rest}
  >
    {children}
  </motion.div>
);

/** Pulls its child slightly toward the cursor. */
type MagneticProps = { children: ReactNode; strength?: number; block?: boolean };

export const Magnetic = ({ children, strength = 0.28, block = false }: MagneticProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 16, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 220, damping: 16, mass: 0.3 });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY, display: block ? "block" : "inline-block" }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  );
};

type CounterProps = { value: number; decimals?: number; suffix?: string; duration?: number };

/** Counts up from zero when scrolled into view. */
export const Counter = ({ value, decimals = 0, suffix = "", duration = 1.8 }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => `${v.toFixed(decimals)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      count.set(value);
      return;
    }
    const controls = animate(count, value, { duration, ease: EASE });
    return () => controls.stop();
  }, [inView, reduceMotion, count, value, duration]);

  return (
    <>
      <motion.span ref={ref} aria-hidden="true">
        {display}
      </motion.span>
      <span className="sr-only">{`${value.toFixed(decimals)}${suffix}`}</span>
    </>
  );
};
