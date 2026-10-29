import { Flex, Grid, HStack, Text } from "@chakra-ui/react";
import { skillGroups } from "../data/profile";
import { Reveal } from "./ui/motion";
import { Section, SectionHeading, SpotlightCard, TechChip } from "./ui/primitives";

const Skills = () => (
  <Section id="skills">
    <SectionHeading
      index="04"
      eyebrow="Skills"
      title={
        <>
          The <span className="serif grad-text">toolkit</span>.
        </>
      }
      subtitle="The languages, frameworks and platforms I use to take ideas from a notebook to production."
    />

    <Grid templateColumns={{ base: "minmax(0,1fr)", md: "repeat(2, minmax(0,1fr))", lg: "repeat(3, minmax(0,1fr))" }} gap={5}>
      {skillGroups.map((group, i) => {
        const Icon = group.icon;
        return (
          <Reveal key={group.title} delay={(i % 3) * 0.08} style={{ height: "100%" }}>
            <SpotlightCard p={7} h="100%">
              <Flex justify="space-between" align="flex-start" mb={5}>
                <HStack spacing={3}>
                  <span className="icon-tile">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3 className="mini-title">{group.title}</h3>
                </HStack>
                <span className="mono-sm">{String(group.items.length).padStart(2, "0")}</span>
              </Flex>
              <Text fontSize="sm" color="var(--text-muted)" mb={5}>
                {group.blurb}
              </Text>
              <div className="chips">
                {group.items.map((item) => (
                  <TechChip key={item} name={item} large />
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        );
      })}
    </Grid>
  </Section>
);

export default Skills;
