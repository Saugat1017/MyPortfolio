import { Box, Grid, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { LuDownload, LuExternalLink, LuMaximize2 } from "react-icons/lu";
import { profile } from "../data/profile";
import { Magnetic, Rise } from "./ui/motion";
import { Section, SectionHeading } from "./ui/primitives";

const facts = [
  ["Format", `PDF · ${profile.resume.pages} page · ${profile.resume.size}`],
  ["Covers", "Education, experience, projects, leadership, skills"],
  ["Highlights", "State Farm, edge AI research, Dallas AI"],
];

const Resume = () => {
  const viewer = useDisclosure();
  const inlineViewer = useBreakpointValue({ base: false, md: true }, { ssr: false });
  const { pdf, preview, fileName } = profile.resume;

  // The page swings from a tilted angle to flat as it scrolls into view
  const paperRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: paperRef, offset: ["start end", "center 55%"] });
  const paperRotateX = useTransform(scrollYProgress, [0, 1], [18, 0]);
  const paperRotateY = useTransform(scrollYProgress, [0, 1], [-22, 0]);
  const paperRotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  const openPreview = () => {
    if (inlineViewer) viewer.onOpen();
    else window.open(pdf, "_blank", "noopener,noreferrer");
  };

  return (
    <Section id="resume" alt>
      <Grid templateColumns={{ base: "minmax(0,1fr)", lg: "minmax(0,1fr) minmax(0,0.85fr)" }} gap={{ base: 12, lg: 20 }} alignItems="center">
        <Box>
          <SectionHeading
            index="06"
            eyebrow="Resume"
            title="The one-page *version*."
            subtitle="Everything above, condensed for recruiters and hiring managers. Download the PDF or preview it right here."
          />
          <Rise index={1}>
            <HStack spacing={3} flexWrap="wrap" mt={-4}>
              <Magnetic>
                <a href={pdf} download={fileName} className="btn btn-primary">
                  <LuDownload className="shift shift-down" aria-hidden="true" />
                  Download PDF
                </a>
              </Magnetic>
              <Magnetic>
                <button type="button" className="btn btn-ghost" onClick={openPreview}>
                  <LuMaximize2 aria-hidden="true" />
                  Preview
                </button>
              </Magnetic>
            </HStack>
            <Box mt={10} maxW="30rem">
              {facts.map(([label, value]) => (
                <div className="fact-row" key={label}>
                  <span className="mono-sm">{label}</span>
                  <Text as="span" textAlign="right" color="var(--text)">
                    {value}
                  </Text>
                </div>
              ))}
            </Box>
          </Rise>
        </Box>

        <Rise index={2}>
          <motion.div
            ref={paperRef}
            style={reduceMotion ? { maxWidth: 460, margin: "0 auto" } : { maxWidth: 460, margin: "0 auto", rotateX: paperRotateX, rotateY: paperRotateY, rotate: paperRotate, transformPerspective: 1400 }}
          >
            <button type="button" className="paper" onClick={openPreview} aria-label="Preview resume">
              <img src={preview} alt="First page of Saugat Bhatta's resume" width={888} height={1150} loading="lazy" />
              <span className="paper-overlay">
                <span className="btn btn-sm btn-primary">
                  <LuMaximize2 aria-hidden="true" /> Click to preview
                </span>
              </span>
            </button>
          </motion.div>
        </Rise>
      </Grid>

      <Modal isOpen={viewer.isOpen} onClose={viewer.onClose} size="5xl" isCentered>
        <ModalOverlay bg="rgba(20, 18, 16,0.75)" backdropFilter="blur(8px)" />
        <ModalContent bg="#26231f" border="1px solid var(--border-strong)" borderRadius="20px" overflow="hidden" mx={4}>
          <ModalHeader display="flex" alignItems="center" gap={3} pr={14} py={3} borderBottom="1px solid var(--border)" fontSize="md" fontWeight={500}>
            {fileName}
            <HStack ml="auto" spacing={2}>
              <a href={pdf} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-ghost">
                <LuExternalLink aria-hidden="true" /> Open
              </a>
              <a href={pdf} download={fileName} className="btn btn-sm btn-primary">
                <LuDownload aria-hidden="true" /> Download
              </a>
            </HStack>
          </ModalHeader>
          <ModalCloseButton top={3.5} />
          <ModalBody p={0} flex="none">
            <iframe
              src={`${pdf}#view=FitH`}
              title="Saugat Bhatta resume"
              style={{ display: "block", width: "100%", height: "min(80vh, 1100px)", border: 0, background: "#fff" }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Section>
  );
};

export default Resume;
