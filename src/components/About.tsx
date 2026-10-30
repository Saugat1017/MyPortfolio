import { useEffect, useState } from "react";
import { Box, Flex, Grid, GridItem, HStack, Text } from "@chakra-ui/react";
import {
  LuArrowUpRight,
  LuAward,
  LuBriefcase,
  LuClock,
  LuFlaskConical,
  LuGraduationCap,
  LuMapPin,
  LuUsers,
} from "react-icons/lu";
import { about, profile } from "../data/profile";
import { Rise, ScrollText } from "./ui/motion";
import { Section, SectionHeading, SpotlightCard } from "./ui/primitives";

const useLocalTime = (timeZone: string) => {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(timer);
  }, []);
  return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone }).format(now);
};

const CardLabel = ({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) => (
  <HStack spacing={3} mb={5}>
    <span className="icon-tile">
      <Icon aria-hidden="true" />
    </span>
    <span className="eyebrow">{children}</span>
  </HStack>
);

const About = () => {
  const localTime = useLocalTime(profile.timeZone);
  const { education } = about;

  return (
    <Section id="about">
      <SectionHeading
        index="01"
        eyebrow="About"
        title="Turning ML research into *reliable software*."
      />

      <Grid templateColumns={{ base: "minmax(0,1fr)", md: "repeat(2, minmax(0,1fr))", lg: "repeat(6, minmax(0,1fr))" }} gap={5}>
        {/* Bio */}
        <GridItem colSpan={{ base: 1, md: 2, lg: 4 }} rowSpan={{ lg: 2 }}>
          <Rise style={{ height: "100%" }}>
            <SpotlightCard p={{ base: 6, md: 9 }} h="100%" display="flex" flexDirection="column">
              <Box display="grid" gap={5} fontSize={{ base: "lg", md: "xl" }} lineHeight={1.65} color="var(--text)" sx={{ strong: { color: "var(--accent-ink)", fontWeight: 600 } }}>
                {about.paragraphs.map((p) => (
                  <ScrollText key={p.slice(0, 24)} text={p} />
                ))}
              </Box>
              <Box mt={8}>
                <Text className="eyebrow" mb={3}>
                  Focus areas
                </Text>
                <div className="chips">
                  {about.focus.map((f) => (
                    <span className="chip chip-lg" key={f}>
                      {f}
                    </span>
                  ))}
                </div>
              </Box>
              <Flex mt="auto" pt={8} gap={6} wrap="wrap" className="muted-sm">
                <span className="location">
                  <LuMapPin aria-hidden="true" />
                  {profile.location}
                </span>
                <span className="location">
                  <LuClock aria-hidden="true" />
                  {localTime} local time
                </span>
              </Flex>
            </SpotlightCard>
          </Rise>
        </GridItem>

        {/* Now */}
        <GridItem colSpan={{ base: 1, lg: 2 }}>
          <Rise index={1} style={{ height: "100%" }}>
            <SpotlightCard p={7} h="100%">
              <CardLabel icon={LuBriefcase}>Now</CardLabel>
              <Text fontFamily="var(--font-display)" fontSize="2xl" fontWeight={500} letterSpacing="-0.015em" lineHeight={1.2}>
                Software Engineer at State Farm
              </Text>
              <Text mt={2} color="var(--text-muted)" fontSize="sm" lineHeight={1.7}>
                Interning on Property & Casualty Modeling since June 2026 — and staying on full-time after graduation.
              </Text>
              <HStack mt={5}>
                <span className="badge badge-green">
                  <span className="pulse-dot" /> Offer accepted
                </span>
              </HStack>
            </SpotlightCard>
          </Rise>
        </GridItem>

        {/* Research */}
        <GridItem colSpan={{ base: 1, lg: 2 }}>
          <Rise index={2} style={{ height: "100%" }}>
            <SpotlightCard p={7} h="100%">
              <CardLabel icon={LuFlaskConical}>Research</CardLabel>
              <Text fontFamily="var(--font-display)" fontSize="2xl" fontWeight={500} letterSpacing="-0.015em" lineHeight={1.2}>
                Edge AI, in real time
              </Text>
              <Text mt={2} color="var(--text-muted)" fontSize="sm" lineHeight={1.7}>
                DeiT-Small compressed to run at 330 FPS on a Jetson Orin Nano. First-author paper in preparation.
              </Text>
              <a href="#experience" className="text-link" style={{ marginTop: 20 }}>
                Read more <LuArrowUpRight aria-hidden="true" />
              </a>
            </SpotlightCard>
          </Rise>
        </GridItem>

        {/* Education */}
        <GridItem colSpan={{ base: 1, md: 2, lg: 4 }}>
          <Rise style={{ height: "100%" }}>
            <SpotlightCard p={{ base: 6, md: 8 }} h="100%">
              <Flex justify="space-between" align="flex-start" gap={6} wrap="wrap">
                <Box>
                  <CardLabel icon={LuGraduationCap}>Education</CardLabel>
                  <Text fontFamily="var(--font-display)" fontSize={{ base: "2xl", md: "3xl" }} fontWeight={500} letterSpacing="-0.015em" lineHeight={1.15}>
                    {education.degree}
                  </Text>
                  <Text color="var(--text-muted)" mt={1}>
                    {education.school}
                  </Text>
                  <Text className="mono-sm" mt={2}>
                    {education.period}
                  </Text>
                </Box>
                <Box textAlign={{ base: "left", sm: "right" }}>
                  <Text fontSize="5xl" fontWeight={600} letterSpacing="-0.04em" lineHeight={1}>
                    {education.gpa}
                  </Text>
                  <Text className="mono-sm" mt={2}>
                    GPA
                  </Text>
                </Box>
              </Flex>
              <HStack spacing={2} mt={6} flexWrap="wrap">
                {education.honors.map((h) => (
                  <span className="badge badge-violet" key={h}>
                    <LuAward aria-hidden="true" /> {h}
                  </span>
                ))}
              </HStack>
              <Text className="eyebrow" mt={7} mb={3}>
                Relevant coursework
              </Text>
              <div className="chips">
                {education.coursework.map((c) => (
                  <span className="chip" key={c}>
                    {c}
                  </span>
                ))}
              </div>
              <Text className="muted-sm" mt={5}>
                {education.previous}
              </Text>
            </SpotlightCard>
          </Rise>
        </GridItem>

        {/* Leadership */}
        <GridItem colSpan={{ base: 1, md: 2, lg: 2 }}>
          <Rise index={1} style={{ height: "100%" }}>
            <SpotlightCard p={7} h="100%" display="flex" flexDirection="column">
              <CardLabel icon={LuUsers}>Leadership</CardLabel>
              <Text fontSize="5xl" fontWeight={600} letterSpacing="-0.04em" lineHeight={1}>
                35+
              </Text>
              <Text mt={3} color="var(--text-muted)" fontSize="sm" lineHeight={1.7}>
                Tutors I lead as LRC Tutors Team Lead at UT Arlington — scheduling, operations and performance analytics.
              </Text>
              <HStack mt="auto" pt={5}>
                <span className="badge badge-amber">
                  <LuAward aria-hidden="true" /> Mavs Up MVP
                </span>
              </HStack>
            </SpotlightCard>
          </Rise>
        </GridItem>
      </Grid>
    </Section>
  );
};

export default About;
