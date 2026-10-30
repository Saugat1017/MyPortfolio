import { useRef } from "react";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { motion, useScroll, useSpring } from "framer-motion";
import { LuArrowUpRight, LuCpu } from "react-icons/lu";
import { earlierExperience, experience, type Job } from "../data/profile";
import { Rise } from "./ui/motion";
import { Flow, Rich, Section, SectionHeading, SpotlightCard, TechChip } from "./ui/primitives";

const JobCard = ({ job }: { job: Job }) => (
  <div className="timeline-item">
    {/* Dot lights up once the reader scrolls past it */}
    <motion.span
      className={`timeline-dot${job.current ? " is-current" : ""}`}
      aria-hidden="true"
      initial={{ backgroundColor: "#d6ccbd", scale: 0.75 }}
      whileInView={{ backgroundColor: "#bc6246", scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -45% 0px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    />
    <Rise>
    <SpotlightCard as="article" p={{ base: 5, md: 8 }}>
      <Flex justify="space-between" align="flex-start" gap={4} wrap="wrap">
        <HStack spacing={4} align="flex-start" minW={0}>
          <span className="org-mark" style={{ background: job.markColor }} aria-hidden="true">
            {job.mark}
          </span>
          <Box minW={0}>
            <h3 className="job-role">{job.role}</h3>
            <p className="job-org">
              {job.org}
              {job.team && (
                <>
                  <span className="sep">/</span>
                  {job.team}
                </>
              )}
            </p>
            {job.note && <p className="muted-sm" style={{ marginTop: 2 }}>{job.note}</p>}
          </Box>
        </HStack>
        <Box textAlign={{ base: "left", md: "right" }} pl={{ base: "64px", md: 0 }}>
          <Text className="mono-sm">{job.period}</Text>
          <Text className="muted-sm" mt={1}>
            {job.location}
          </Text>
        </Box>
      </Flex>

      {job.badges && (
        <HStack spacing={2} mt={5} flexWrap="wrap">
          {job.badges.map((b) => (
            <span key={b.label} className={`badge badge-${b.tone}`}>
              {b.tone === "green" && <span className="pulse-dot" />}
              {b.label}
            </span>
          ))}
        </HStack>
      )}

      {job.metrics && (
        <div className="metrics" style={{ marginTop: 24 }}>
          {job.metrics.map((m) => (
            <div className="metric" key={m.label}>
              <div className="metric-value">{m.value}</div>
              <div className="metric-label">{m.label}</div>
            </div>
          ))}
        </div>
      )}

      {job.pipeline && (
        <Box className="flow-panel" mt={4}>
          <div className="flow-label">
            <LuCpu aria-hidden="true" /> Optimization pipeline
          </div>
          <Flow nodes={job.pipeline} stackOnMobile />
        </Box>
      )}

      <Box mt={6}>
        <ul className="bullets">
          {job.bullets.map((b) => (
            <li key={b.slice(0, 32)}>
              <Rich text={b} />
            </li>
          ))}
        </ul>
      </Box>

      <Flex mt={6} gap={4} justify="space-between" align="center" wrap="wrap">
        <div className="chips">
          {job.stack.map((t) => (
            <TechChip key={t} name={t} />
          ))}
        </div>
        {job.link && (
          <a href={job.link.href} target="_blank" rel="noopener noreferrer" className="text-link">
            {job.link.label} <LuArrowUpRight aria-hidden="true" />
          </a>
        )}
      </Flex>
    </SpotlightCard>
    </Rise>
  </div>
);

const Experience = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <Section id="experience" alt>
      <SectionHeading
        index="02"
        eyebrow="Experience"
        title="Where I've *shipped*."
        subtitle="From enterprise ML platforms at State Farm to on-device research in the lab — plus the team I lead on campus."
      />

      <div className="timeline" ref={timelineRef}>
        <div className="timeline-rail" aria-hidden="true">
          <motion.div className="timeline-progress" style={{ scaleY }} />
        </div>
        {experience.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      <Rise>
        <Box mt={16}>
          <Text className="eyebrow" mb={4}>
            Earlier
          </Text>
          {earlierExperience.map((item) => (
            <div className="earlier-row" key={item.role}>
              <Box>
                <Text fontWeight={500}>
                  {item.role} <span style={{ color: "var(--text-faint)" }}>· {item.org}</span>
                </Text>
                <Text mt={1} fontSize="sm" color="var(--text-muted)" lineHeight={1.7} maxW="48rem">
                  {item.summary}
                </Text>
              </Box>
              <Text className="mono-sm" whiteSpace="nowrap">
                {item.period}
              </Text>
            </div>
          ))}
        </Box>
      </Rise>
    </Section>
  );
};

export default Experience;
