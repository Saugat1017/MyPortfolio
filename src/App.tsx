import { useEffect } from "react";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import { MotionConfig } from "framer-motion";
import { theme } from "./theme";
import ScrollProgress from "./components/ScrollProgress";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import TechMarquee from "./components/TechMarquee";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import CareerGoals from "./components/CareerGoals";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CommandPalette from "./components/CommandPalette";
import ChatBot from "./components/ChatBot";
import "./App.css";

function App() {
  const palette = useDisclosure();
  const { onToggle } = palette;

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        onToggle();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onToggle]);

  return (
    <ChakraProvider theme={theme}>
      <MotionConfig reducedMotion="user">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div className="grain" aria-hidden="true" />
        <ScrollProgress />
        <Navigation onOpenPalette={palette.onOpen} />

        <main id="main">
          <Hero />
          <TechMarquee />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <CareerGoals />
          <Resume />
          <Contact />
        </main>

        <Footer onOpenPalette={palette.onOpen} />
        <CommandPalette isOpen={palette.isOpen} onClose={palette.onClose} />
        <ChatBot />
      </MotionConfig>
    </ChakraProvider>
  );
}

export default App;
