import { useState } from "react";
import { Box, Grid, HStack, Text } from "@chakra-ui/react";
import { LuArrowUpRight, LuCheck, LuCopy, LuGithub, LuLinkedin, LuMail, LuMapPin } from "react-icons/lu";
import { profile } from "../data/profile";
import { Magnetic, Rise, SplitHeading } from "./ui/motion";
import { Section } from "./ui/primitives";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <Section id="contact" pb={{ base: 16, md: 20 }}>
      <Rise>
        <div className="contact-card">
          <div className="eyebrow">
            <span className="eyebrow-index">07</span>
            <span className="eyebrow-line" />
            Contact
          </div>
          <Grid templateColumns={{ base: "minmax(0,1fr)", lg: "minmax(0,1.2fr) minmax(0,0.8fr)" }} gap={{ base: 10, lg: 16 }} mt={8} alignItems="end">
            <Box>
              <SplitHeading text="Let's *connect*." className="contact-title" />
              <Text mt={6} maxW="34rem" color="var(--text-muted)" fontSize={{ base: "md", md: "lg" }} lineHeight={1.75}>
                I'm joining State Farm full-time, so I'm not looking for new roles — but I love talking about ML platforms,
                edge AI research and helping students break into tech. My inbox is open.
              </Text>
              <Box mt={8}>
                <div className="email-row">
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  <button type="button" className="btn btn-sm btn-ghost" onClick={copyEmail} aria-live="polite">
                    {copied ? <LuCheck aria-hidden="true" /> : <LuCopy aria-hidden="true" />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              </Box>
            </Box>

            <Box display="grid" gap={3}>
              <Magnetic strength={0.15} block>
                <a href={`mailto:${profile.email}?subject=Hello%20Saugat`} className="btn btn-primary" style={{ width: "100%", justifyContent: "space-between" }}>
                  <HStack as="span" spacing={3}>
                    <LuMail aria-hidden="true" /> <span>Send an email</span>
                  </HStack>
                  <LuArrowUpRight className="shift" aria-hidden="true" />
                </a>
              </Magnetic>
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ justifyContent: "space-between" }}>
                <HStack as="span" spacing={3}>
                  <LuLinkedin aria-hidden="true" /> <span>Connect on LinkedIn</span>
                </HStack>
                <LuArrowUpRight className="shift" aria-hidden="true" />
              </a>
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ justifyContent: "space-between" }}>
                <HStack as="span" spacing={3}>
                  <LuGithub aria-hidden="true" /> <span>Follow on GitHub</span>
                </HStack>
                <LuArrowUpRight className="shift" aria-hidden="true" />
              </a>
              <Text className="location" mt={2}>
                <LuMapPin aria-hidden="true" /> {profile.location}
              </Text>
            </Box>
          </Grid>
        </div>
      </Rise>
    </Section>
  );
};

export default Contact;
