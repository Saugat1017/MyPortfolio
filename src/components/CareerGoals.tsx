import { Box, Flex, Grid, HStack, Text } from "@chakra-ui/react";
import { LuArrowDown, LuBadgeCheck, LuCheck, LuCompass, LuFlag, LuMountain, LuRocket, LuTarget } from "react-icons/lu";
import { careerGoals } from "../data/profile";
import { Reveal } from "./ui/motion";
import { Section, SectionHeading, SpotlightCard } from "./ui/primitives";

const phaseIcons = { now: LuFlag, next: LuRocket, later: LuMountain } as const;

const CareerGoals = () => {
  const { status, targetRoles, industries, values, roadmap } = careerGoals;

  return (
    <Section id="goals">
      <SectionHeading
        index="05"
        eyebrow="Career goals & what's next"
        title={
          <>
            Where I'm <span className="serif grad-text">headed</span>.
          </>
        }
        subtitle="The roles and industries I'm building toward, the values behind them, and my next steps."
      />

      {/* Job search status */}
      <Reveal>
        <div className="status-banner">
          <Grid templateColumns={{ base: "minmax(0,1fr)", lg: "minmax(0,1.4fr) minmax(0,0.6fr)" }} gap={8} alignItems="center">
            <Box>
              <HStack spacing={3} mb={5}>
                <span className="badge badge-green">
                  <LuBadgeCheck aria-hidden="true" /> {status.label}
                </span>
              </HStack>
              <h3>{status.title}</h3>
              <Text mt={4} color="var(--text-muted)" lineHeight={1.75} maxW="44rem">
                {status.body}
              </Text>
            </Box>
            <Box display="grid" gap={3}>
              {status.chips.map((chip) => (
                <HStack key={chip} spacing={3} className="chip chip-lg" justifyContent="flex-start" w="100%">
                  <LuCheck aria-hidden="true" color="var(--green)" />
                  <span>{chip}</span>
                </HStack>
              ))}
            </Box>
          </Grid>
        </div>
      </Reveal>

      {/* Target roles + industries */}
      <Grid templateColumns={{ base: "minmax(0,1fr)", lg: "minmax(0,1.5fr) minmax(0,1fr)" }} gap={5} mt={5}>
        <Reveal style={{ height: "100%" }}>
          <SpotlightCard p={{ base: 6, md: 8 }} h="100%">
            <HStack spacing={3} mb={6}>
              <span className="icon-tile">
                <LuTarget aria-hidden="true" />
              </span>
              <h3 className="mini-title">Target roles</h3>
            </HStack>
            <Grid templateColumns={{ base: "minmax(0,1fr)", sm: "repeat(2, minmax(0,1fr))" }} gap={5}>
              {targetRoles.map((role) => {
                const Icon = role.icon;
                return (
                  <Box key={role.title}>
                    <HStack spacing={2} mb={1.5} color="var(--text)">
                      <Icon aria-hidden="true" style={{ color: "var(--violet)", flexShrink: 0 }} />
                      <Text fontWeight={500} fontSize="md">
                        {role.title}
                      </Text>
                    </HStack>
                    <Text fontSize="sm" color="var(--text-muted)" lineHeight={1.65}>
                      {role.description}
                    </Text>
                  </Box>
                );
              })}
            </Grid>
          </SpotlightCard>
        </Reveal>

        <Reveal delay={0.08} style={{ height: "100%" }}>
          <SpotlightCard p={{ base: 6, md: 8 }} h="100%">
            <HStack spacing={3} mb={6}>
              <span className="icon-tile">
                <LuCompass aria-hidden="true" />
              </span>
              <h3 className="mini-title">Industries</h3>
            </HStack>
            <Box display="grid" gap={3}>
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <HStack key={industry.label} spacing={3} className="chip chip-lg" w="100%">
                    <Icon aria-hidden="true" />
                    <span>{industry.label}</span>
                  </HStack>
                );
              })}
            </Box>
            <Text mt={5} fontSize="sm" color="var(--text-muted)" lineHeight={1.7}>
              Insurance is where I've seen ML matter most at scale — every model decision touches real customers.
            </Text>
          </SpotlightCard>
        </Reveal>
      </Grid>

      {/* Values ↔ strengths */}
      <Reveal>
        <Text className="eyebrow" mt={16} mb={5}>
          What drives me — and how it shows up
        </Text>
      </Reveal>
      <Grid templateColumns={{ base: "minmax(0,1fr)", md: "repeat(2, minmax(0,1fr))", xl: "repeat(4, minmax(0,1fr))" }} gap={4}>
        {values.map((item, i) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.value} delay={i * 0.06} style={{ height: "100%" }}>
              <SpotlightCard p={6} h="100%" display="flex" flexDirection="column">
                <span className="icon-tile">
                  <Icon aria-hidden="true" />
                </span>
                <Text mt={5} fontSize="lg" fontWeight={600} letterSpacing="-0.02em" lineHeight={1.3}>
                  {item.value}
                </Text>
                <div className="value-arrow" style={{ marginTop: 12 }}>
                  <LuArrowDown aria-hidden="true" /> {item.strength}
                </div>
                <Text mt={3} fontSize="sm" color="var(--text-muted)" lineHeight={1.7}>
                  {item.evidence}
                </Text>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </Grid>

      {/* Roadmap */}
      <Reveal>
        <Text className="eyebrow" mt={16} mb={6}>
          Next steps
        </Text>
      </Reveal>
      <div className="roadmap">
        {roadmap.map((step, i) => {
          const Icon = phaseIcons[step.tone as keyof typeof phaseIcons];
          return (
            <Reveal key={step.phase} delay={i * 0.1}>
              <Flex direction={{ base: "row", lg: "column" }} gap={{ base: 5, lg: 5 }} align="flex-start">
                <span className={`roadmap-node ${step.tone}`}>
                  <Icon aria-hidden="true" />
                </span>
                <Box>
                  <HStack spacing={3}>
                    <Text fontWeight={600}>{step.phase}</Text>
                    <span className="mono-sm">{step.when}</span>
                  </HStack>
                  <Text mt={1} fontSize="xl" fontWeight={600} letterSpacing="-0.02em">
                    {step.title}
                  </Text>
                  <Box as="ul" mt={4} display="grid" gap={2.5} listStyleType="none">
                    {step.items.map((item) => (
                      <HStack as="li" key={item} spacing={2.5} align="flex-start" fontSize="sm" color="var(--text-muted)" lineHeight={1.6}>
                        <LuCheck aria-hidden="true" style={{ marginTop: 4, flexShrink: 0, color: "var(--text-faint)" }} />
                        <span>{item}</span>
                      </HStack>
                    ))}
                  </Box>
                </Box>
              </Flex>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};

export default CareerGoals;
