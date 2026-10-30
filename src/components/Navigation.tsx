import { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { LuDownload, LuMenu, LuSearch } from "react-icons/lu";
import { navItems, profile, sectionIds } from "../data/profile";
import { scrollToSection, useActiveSection } from "../hooks/useActiveSection";

const isMac = typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.userAgent);
export const paletteShortcut = isMac ? "⌘K" : "Ctrl K";

const Navigation = ({ onOpenPalette }: { onOpenPalette: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);
  const drawer = useDisclosure();
  const pendingTarget = useRef<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMobileNav = (event: React.MouseEvent, id: string) => {
    event.preventDefault();
    pendingTarget.current = id;
    drawer.onClose();
  };

  return (
    <Box as="header" className={`nav${scrolled ? " scrolled" : ""}`}>
      <Container maxW="6xl" px={{ base: 5, md: 8 }}>
        <Flex h={{ base: "64px", md: "72px" }} align="center" justify="space-between" gap={4}>
          <a href="#home" className="logo" aria-label={`${profile.name}, back to top`}>
            <span className="logo-mark">{profile.initials}</span>
            <Box as="span" display={{ base: "none", sm: "inline" }}>
              {profile.name}
            </Box>
          </a>

          <Box as="nav" aria-label="Primary" display={{ base: "none", lg: "block" }}>
            <ul className="nav-links">
              {navItems.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`nav-link${isActive ? " active" : ""}`}
                      aria-current={isActive ? "location" : undefined}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="nav-pill"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Box>

          <HStack spacing={2}>
            <Box display={{ base: "none", md: "block" }}>
              <button type="button" className="nav-cmd" onClick={onOpenPalette} aria-label="Open command menu">
                <LuSearch aria-hidden="true" />
                <span className="kbd">{paletteShortcut}</span>
              </button>
            </Box>
            <a
              href={profile.resume.pdf}
              download={profile.resume.fileName}
              className="btn btn-sm btn-primary"
            >
              <LuDownload aria-hidden="true" />
              Resume
            </a>
            <Box display={{ base: "block", lg: "none" }}>
              <button
                type="button"
                className="icon-btn"
                onClick={drawer.onOpen}
                aria-label="Open menu"
                style={{ width: 38, height: 38 }}
              >
                <LuMenu />
              </button>
            </Box>
          </HStack>
        </Flex>
      </Container>

      <Drawer
        isOpen={drawer.isOpen}
        onClose={drawer.onClose}
        placement="right"
        size="full"
        returnFocusOnClose={false}
        onCloseComplete={() => {
          if (pendingTarget.current) {
            scrollToSection(pendingTarget.current);
            pendingTarget.current = null;
          }
        }}
      >
        <DrawerOverlay bg="rgba(41, 45, 42, 0.35)" backdropFilter="blur(6px)" />
        <DrawerContent bg="var(--card)" color="var(--text)">
          <DrawerCloseButton top={4} right={5} size="lg" aria-label="Close menu" />
          <DrawerBody px={6} pt={20} pb={10} display="flex" flexDirection="column">
            <nav aria-label="Mobile">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className="mobile-link"
                  onClick={(e) => handleMobileNav(e, item.id)}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#resume"
                className="mobile-link"
                onClick={(e) => handleMobileNav(e, "resume")}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + navItems.length * 0.05, duration: 0.5 }}
              >
                <span>{String(navItems.length + 1).padStart(2, "0")}</span>
                Resume
              </motion.a>
            </nav>
            <Box mt="auto" pt={10} className="mono-sm">
              {profile.email}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navigation;
