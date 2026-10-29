import { Box, Grid, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { LuDownload, LuExternalLink, LuMaximize2 } from "react-icons/lu";
import { profile } from "../data/profile";
import { Magnetic, Reveal } from "./ui/motion";
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

  const openPreview = () => {
    if (inlineViewer) viewer.onOpen();
    else window.open(pdf, "_blank", "noopener,noreferrer");
  };

  return (
    <Section id="resume">
      <Grid templateColumns={{ base: "minmax(0,1fr)", lg: "minmax(0,1fr) minmax(0,0.85fr)" }} gap={{ base: 12, lg: 20 }} alignItems="center">
        <Box>
          <SectionHeading
            index="06"
            eyebrow="Resume"
            title={
              <>
                The <span style={{ whiteSpace: "nowrap" }}>one-page</span>{" "}
                <span className="serif grad-text">version</span>.
              </>
            }
            subtitle="Everything above, condensed for recruiters and hiring managers. Download the PDF or preview it right here."
          />
          <Reveal delay={0.1}>
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
          </Reveal>
        </Box>

        <Reveal delay={0.15}>
          <Box maxW="460px" mx="auto" px={{ base: 2, md: 0 }}>
            <button type="button" className="paper" onClick={openPreview} aria-label="Preview resume">
              <img src={preview} alt="First page of Saugat Bhatta's resume" width={888} height={1150} loading="lazy" />
              <span className="paper-overlay">
                <span className="btn btn-sm btn-primary">
                  <LuMaximize2 aria-hidden="true" /> Click to preview
                </span>
              </span>
            </button>
          </Box>
        </Reveal>
      </Grid>

      <Modal isOpen={viewer.isOpen} onClose={viewer.onClose} size="5xl" isCentered>
        <ModalOverlay bg="rgba(3,4,6,0.75)" backdropFilter="blur(8px)" />
        <ModalContent bg="#0d0e13" border="1px solid var(--border-strong)" borderRadius="20px" overflow="hidden" mx={4}>
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
