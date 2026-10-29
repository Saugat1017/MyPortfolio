import { Box, Container } from "@chakra-ui/react";
import { marqueeTech, techIcons } from "../data/profile";

const TechMarquee = () => {
  const renderItems = (hidden: boolean) =>
    marqueeTech.map((name) => {
      const Icon = techIcons[name];
      return (
        <span className="marquee-item" key={`${name}-${hidden}`} aria-hidden={hidden || undefined}>
          {Icon && <Icon aria-hidden="true" />}
          {name}
        </span>
      );
    });

  return (
    <Box as="section" aria-label="Technologies I work with" py={{ base: 10, md: 14 }} position="relative">
      <Container maxW="6xl" px={{ base: 5, md: 8 }}>
        <Box className="eyebrow" mb={6} justifyContent="center" w="100%">
          Tools I ship with
        </Box>
      </Container>
      <div className="marquee">
        <div className="marquee-track">
          {renderItems(false)}
          {renderItems(true)}
        </div>
      </div>
    </Box>
  );
};

export default TechMarquee;
