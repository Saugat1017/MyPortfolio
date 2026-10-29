import { Fragment, useRef, type ReactNode } from "react";
import { Box, Container, type BoxProps } from "@chakra-ui/react";
import { techIcons } from "../../data/profile";
import { Reveal } from "./motion";

/** Renders `**bold**` segments of a string as <strong>. */
export const Rich = ({ text }: { text: string }) => (
  <>
    {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={i}>{part.slice(2, -2)}</strong>
      ) : (
        <Fragment key={i}>{part}</Fragment>
      )
    )}
  </>
);

type SectionProps = { id: string; children: ReactNode } & BoxProps;

export const Section = ({ id, children, ...rest }: SectionProps) => (
  <Box as="section" id={id} position="relative" py={{ base: 20, md: 28 }} {...rest}>
    <Container maxW="6xl" px={{ base: 5, md: 8 }} position="relative">
      {children}
    </Container>
  </Box>
);

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
};

export const SectionHeading = ({ index, eyebrow, title, subtitle }: SectionHeadingProps) => (
  <Reveal>
    <Box mb={{ base: 10, md: 14 }}>
      <div className="eyebrow">
        <span className="eyebrow-index">{index}</span>
        <span className="eyebrow-line" />
        {eyebrow}
      </div>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </Box>
  </Reveal>
);

/** Card with a cursor-following glow and border highlight. */
export const SpotlightCard = ({ className = "", children, ...rest }: BoxProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <Box ref={ref} className={`spotlight-card ${className}`} onMouseMove={handleMove} {...rest}>
      {children}
    </Box>
  );
};

export const TechChip = ({ name, large = false }: { name: string; large?: boolean }) => {
  const Icon = techIcons[name];
  return (
    <span className={`chip${large ? " chip-lg" : ""}`}>
      {Icon && <Icon aria-hidden="true" />}
      {name}
    </span>
  );
};

type FlowProps = {
  nodes: { label: string; tech?: string }[];
  vertical?: boolean;
  /** Horizontal on wide screens, vertical on phones. */
  stackOnMobile?: boolean;
};

/** A small animated pipeline diagram: node → node → node. */
export const Flow = ({ nodes, vertical = false, stackOnMobile = false }: FlowProps) => (
  <div className={`flow${vertical ? " vertical" : ""}${stackOnMobile ? " stack-sm" : ""}`} role="list">
    {nodes.map((node, i) => {
      const Icon = node.tech ? techIcons[node.tech] : undefined;
      return (
        <Fragment key={node.label}>
          <span className="flow-node" role="listitem">
            {Icon && <Icon aria-hidden="true" />}
            {node.label}
          </span>
          {i < nodes.length - 1 && (
            <span
              className="flow-link"
              aria-hidden="true"
              style={{ "--d": `${i * 0.3}s` } as React.CSSProperties}
            />
          )}
        </Fragment>
      );
    })}
  </div>
);
