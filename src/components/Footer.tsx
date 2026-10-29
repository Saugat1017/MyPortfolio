import { Container, Flex, HStack, Text } from "@chakra-ui/react";
import { LuArrowUp } from "react-icons/lu";
import { profile } from "../data/profile";
import { paletteShortcut } from "./Navigation";

const Footer = ({ onOpenPalette }: { onOpenPalette: () => void }) => (
  <footer className="footer">
    <Container maxW="6xl" px={{ base: 5, md: 8 }}>
      <Flex justify="space-between" align={{ base: "flex-start", md: "center" }} direction={{ base: "column", md: "row" }} gap={5}>
        <Text>
          © {new Date().getFullYear()} {profile.name}. Built with React, Chakra UI & Framer Motion.
        </Text>
        <HStack spacing={5}>
          <button type="button" className="text-link" onClick={onOpenPalette}>
            Press <span className="kbd">{paletteShortcut}</span> to jump anywhere
          </button>
          <a href="#home" className="text-link">
            Back to top <LuArrowUp aria-hidden="true" />
          </a>
        </HStack>
      </Flex>
    </Container>
  </footer>
);

export default Footer;
