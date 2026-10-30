import { useEffect, useRef, useState, type ReactNode } from "react";
import { Box, Container, Grid, HStack } from "@chakra-ui/react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { FaAws } from "react-icons/fa";
import { SiPytorch } from "react-icons/si";
import { LuArrowDown, LuArrowRight, LuDownload, LuGithub, LuLinkedin, LuMail, LuMapPin } from "react-icons/lu";
import { heroStats, profile } from "../data/profile";
import { Counter, EASE, Magnetic } from "./ui/motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

const TypeRotator = ({ words }: { words: string[] }) => {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      const timer = window.setInterval(() => setIndex((i) => (i + 1) % words.length), 3000);
      return () => window.clearInterval(timer);
    }

    const full = words[index];
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const delay = !deleting && text === full ? 1900 : deleting ? 35 : 75;
    const timer = window.setTimeout(() => {
      if (!deleting && text === full) setDeleting(true);
      else setText(full.slice(0, deleting ? text.length - 1 : text.length + 1));
    }, delay);
    return () => window.clearTimeout(timer);
  }, [text, deleting, index, words, reduceMotion]);

  return (
    <span className="typed" aria-hidden="true">
      {reduceMotion ? words[index] : text}
      <span className="caret" />
    </span>
  );
};

const chips: { cls: string; icon: ReactNode; label: string }[] = [
  { cls: "a", icon: <SiPytorch />, label: "PyTorch · TensorRT" },
  { cls: "b", icon: <FaAws />, label: "AWS · Terraform" },
  { cls: "c", icon: <span className="pulse-dot" />, label: "Building an MCP server" },
];

const Portrait = ({ progress }: { progress: MotionValue<number> }) => {
  const reduceMotion = useReducedMotion();

  // Tilt toward the cursor
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltX, { stiffness: 150, damping: 18 });
  const rotateY = useSpring(tiltY, { stiffness: 150, damping: 18 });

  // Drift away as the hero scrolls out
  const y = useTransform(progress, [0, 1], [0, 160]);
  const scale = useTransform(progress, [0, 1], [1, 0.8]);
  const rotate = useTransform(progress, [0, 1], [0, -10]);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    tiltY.set(((event.clientX - rect.left) / rect.width - 0.5) * 16);
    tiltX.set(-((event.clientY - rect.top) / rect.height - 0.5) * 16);
  };
  const resetTilt = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <motion.div className="portrait-stage" style={reduceMotion ? undefined : { y, scale, rotate }}>
      <motion.div
        className="portrait"
        onMouseMove={handleMove}
        onMouseLeave={resetTilt}
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        initial={{ scale: 0.45, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 110, damping: 11, mass: 0.9, delay: 0.25 }}
      >
        <div className="portrait-glow" aria-hidden="true" />
        <svg className="portrait-orbit" viewBox="0 0 100 100" aria-hidden="true">
          <circle cx="50" cy="50" r="49.5" style={{ strokeWidth: 0.2, strokeDasharray: "0.4 1.4" }} />
        </svg>
        <div className="portrait-ring-spin" aria-hidden="true">
          <div className="portrait-ring" />
        </div>
        <div className="portrait-circle">
          <img src={profile.photo} alt={`Portrait of ${profile.name}`} width={1536} height={1024} />
        </div>

        {chips.map((chip, i) => (
          <motion.div
            key={chip.cls}
            className={`orbit-chip ${chip.cls}`}
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 15, delay: 0.95 + i * 0.15 }}
          >
            <div className="float-chip">
              {chip.icon}
              {chip.label}
            </div>
          </motion.div>
        ))}

        <motion.div
          className="portrait-tag"
          initial={{ opacity: 0, y: 14, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          transition={{ delay: 1.4, duration: 0.7, ease: EASE }}
        >
          <span className="pulse-dot" /> CS at UT Arlington · <em>Class of ’26</em>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const nameWords = profile.name.split(" ");

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const handleMove = (event: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--hx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--hy", `${event.clientY - rect.top}px`);
  };

  return (
    <section id="home" ref={ref} className="hero" onMouseMove={handleMove}>
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="glow glow-1" />
        <div className="glow glow-2" />
        <div className="glow glow-3" />
        <div className="hero-spotlight" />
        <div className="hero-fade" />
      </div>

      <Container maxW="6xl" px={{ base: 5, md: 8 }} position="relative" zIndex={1}>
        <Grid
          templateColumns={{ base: "minmax(0,1fr)", lg: "minmax(0,1.15fr) minmax(0,0.85fr)" }}
          gap={{ base: 10, lg: 14 }}
          alignItems="center"
        >
          <motion.div style={reduceMotion ? undefined : { y: textY, opacity: textOpacity }}>
            <motion.div {...fadeUp(0.05)}>
              <HStack spacing={3}>
                <Box className="mobile-avatar" display={{ base: "block", lg: "none" }}>
                  <img src={profile.photo} alt="" />
                </Box>
                <a href="#goals" className="status-pill">
                  <span className="status-badge">
                    <span className="pulse-dot" />
                    {profile.status.badge}
                  </span>
                  <Box as="span" display={{ base: "none", sm: "inline" }}>
                    {profile.status.text}
                  </Box>
                  <Box as="span" display={{ base: "inline", sm: "none" }}>
                    State Farm
                  </Box>
                  <LuArrowRight aria-hidden="true" />
                </a>
              </HStack>
            </motion.div>

            <h1 className="hero-name" aria-label={profile.name}>
              {nameWords.map((word, i) => (
                <motion.span
                  key={word}
                  className="hero-word"
                  aria-hidden="true"
                  initial={{ opacity: 0, y: "0.45em", filter: "blur(12px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1, delay: 0.15 + i * 0.12, ease: EASE }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p className="hero-tagline" {...fadeUp(0.45)}>
              Software engineer building <TypeRotator words={profile.roles} />
              <span className="sr-only">
                ML platforms, cloud automation, edge AI systems and full-stack products.
              </span>
            </motion.p>

            <motion.p className="hero-intro" {...fadeUp(0.55)}>
              I build the tools that help data scientists ship models faster — currently on the{" "}
              <strong>Property & Casualty Modeling</strong> team at <strong>State Farm</strong>, while
              researching real-time edge AI and finishing my <strong>B.S. in Computer Science</strong> at
              UT Arlington.
            </motion.p>

            <motion.div className="hero-actions" {...fadeUp(0.65)}>
              <Magnetic>
                <a href={profile.resume.pdf} download={profile.resume.fileName} className="btn btn-primary">
                  <LuDownload className="shift shift-down" aria-hidden="true" />
                  Download resume
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#experience" className="btn btn-ghost">
                  See my work
                  <LuArrowDown aria-hidden="true" />
                </a>
              </Magnetic>
            </motion.div>

            <motion.div className="hero-meta" {...fadeUp(0.75)}>
              <HStack spacing={2}>
                <a className="icon-btn" href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <LuGithub />
                </a>
                <a className="icon-btn" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <LuLinkedin />
                </a>
                <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email">
                  <LuMail />
                </a>
              </HStack>
              <span className="divider" aria-hidden="true" />
              <span className="location">
                <LuMapPin aria-hidden="true" />
                {profile.location}
              </span>
            </motion.div>
          </motion.div>

          <Box display={{ base: "none", lg: "block" }}>
            <Portrait progress={scrollYProgress} />
          </Box>
        </Grid>

        <motion.div {...fadeUp(0.9)}>
          <div className="stats">
            {heroStats.map((stat) => (
              <div className="stat" key={stat.label}>
                <div className="stat-value">
                  <Counter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>

      <a href="#about" className="scroll-cue" aria-label="Scroll to About">
        <span />
      </a>
    </section>
  );
};

export default Hero;
