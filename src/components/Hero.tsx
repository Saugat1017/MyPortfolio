import { useEffect, useRef, useState } from "react";
import { Box, Container, Grid, HStack } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";
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
      <span className="grad-text">{reduceMotion ? words[index] : text}</span>
      <span className="caret" />
    </span>
  );
};

const Portrait = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.94, y: 24 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 1.1, delay: 0.35, ease: EASE }}
  >
    <div className="portrait">
      <div className="portrait-glow" aria-hidden="true" />
      <div className="portrait-frame">
        <img className="portrait-img" src={profile.photo} alt={`Portrait of ${profile.name}`} width={1536} height={1024} />
      </div>
      <div className="float-chip a" aria-hidden="true">
        <SiPytorch /> PyTorch · TensorRT
      </div>
      <div className="float-chip b" aria-hidden="true">
        <FaAws /> AWS · Terraform
      </div>
      <div className="float-chip c" aria-hidden="true">
        <span className="pulse-dot" /> Building an MCP server
      </div>
    </div>
  </motion.div>
);

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const nameWords = profile.name.split(" ");

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
        <div className="aurora aurora-1" />
        <div className="aurora aurora-2" />
        <div className="aurora aurora-3" />
        <div className="hero-spotlight" />
        <div className="hero-fade" />
      </div>

      <Container maxW="6xl" px={{ base: 5, md: 8 }} position="relative" zIndex={1}>
        <Grid
          templateColumns={{ base: "minmax(0,1fr)", lg: "minmax(0,1.3fr) minmax(0,0.7fr)" }}
          gap={{ base: 10, lg: 16 }}
          alignItems="center"
        >
          <Box>
            <motion.div {...fadeUp(0.05)}>
              <HStack spacing={3}>
                <Box as="img" src={profile.photo} alt="" className="mobile-avatar" display={{ base: "block", lg: "none" }} />
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
                  initial={{ opacity: 0, y: "0.45em", filter: "blur(14px)" }}
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
          </Box>

          <Box display={{ base: "none", lg: "block" }}>
            <Portrait />
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
