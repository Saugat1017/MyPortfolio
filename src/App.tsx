import { useEffect, useState, lazy, Suspense } from 'react';
import { ChakraProvider, Box, Container, theme as baseTheme, Spinner, Center } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import ChatBot from './components/ChatBot';
import './App.css';

// Custom theme with consistent colors and styling
const theme = {
  ...baseTheme,
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    ...baseTheme.colors,
    brand: {
      50: '#f7f7f7',
      100: '#ededed',
      200: '#d9d9d9',
      300: '#c4c4c4',
      400: '#9d9d9d',
      500: '#757575',
      600: '#545454',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    }
  },
  fonts: {
    ...baseTheme.fonts,
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  styles: {
    ...baseTheme.styles,
    global: {
      body: {
        bg: '#0a0a0a',
        color: '#ffffff',
        overflowX: 'hidden',
      },
    },
  },
};

// Animation variants
const pageTransition = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Lazy load components
const Journey = lazy(() => import('./components/Journey'));
const Projects = lazy(() => import('./components/Projects'));
const Expertise = lazy(() => import('./components/Expertise'));
const Contact = lazy(() => import('./components/Contact'));

const LoadingSpinner = () => (
  <Center h="100vh">
    <Spinner size="xl" color="blue.500" />
  </Center>
);

function App() {
  const [currentIntro, setCurrentIntro] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const intros = [
    "Full Stack Developer",
    "Creative Designer",
    "Problem Solver",
    "Tech Enthusiast"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentIntro((prev) => (prev + 1) % intros.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" position="relative">
        <Navigation />
        <Box as="main">
          {/* About Me Section */}
          <Box
            id="about"
            minH="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            overflow="hidden"
            py={{ base: 10, md: 20 }}
          >
            <div className="background-pattern" />
            
            <Container maxW="container.xl" position="relative">
              <motion.div
                variants={pageTransition}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              >
                <Box 
                  display="flex" 
                  flexDirection={{ base: "column", md: "row" }} 
                  alignItems="center" 
                  gap={{ base: 8, md: 12 }}
                  px={{ base: 4, md: 0 }}
                >
                  <motion.div
                    className="profile-picture-container"
                    whileHover={{ scale: 1.02, rotate: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <img
                      src="/images/profile.jpg"
                      alt="Profile"
                      className="profile-picture"
                      onError={(e) => {
                        e.currentTarget.src = "/images/placeholder.jpg";
                      }}
                    />
                  </motion.div>
                  <Box flex={1}>
                    <motion.h1
                      style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: '600',
                        background: 'linear-gradient(45deg, #ff00ff, #00ffff)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '1rem'
                      }}
                    >
                      Saugat Bhatta
                    </motion.h1>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentIntro}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        style={{
                          fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                          background: 'linear-gradient(45deg, #00ff87, #9d00ff)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          marginBottom: '1.5rem'
                        }}
                      >
                        {intros[currentIntro]}
                      </motion.div>
                    </AnimatePresence>
                    <motion.p
                      style={{ 
                        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                        lineHeight: '1.8',
                        color: 'rgba(255, 255, 255, 0.9)',
                        maxWidth: '600px'
                      }}
                    >
                      Welcome to my portfolio! I'm passionate about creating beautiful and functional web applications.
                      With expertise in both frontend and backend development, I strive to build seamless user experiences
                      that make a difference.
                    </motion.p>
                  </Box>
                </Box>
              </motion.div>
            </Container>
          </Box>

          {/* Other Sections with Consistent Spacing */}
          <Box py={0} mt={0}>
            <motion.div
              variants={pageTransition}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Suspense fallback={<LoadingSpinner />}>
                <Journey />
              </Suspense>
            </motion.div>
          </Box>

          <Box py={0} mt={0}>
            <motion.div
              variants={pageTransition}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Suspense fallback={<LoadingSpinner />}>
                <Projects />
              </Suspense>
            </motion.div>
          </Box>

          <Box py={0} mt={0}>
            <motion.div
              variants={pageTransition}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Suspense fallback={<LoadingSpinner />}>
                <Expertise />
              </Suspense>
            </motion.div>
          </Box>

          <Box py={0} mt={0}>
            <motion.div
              variants={pageTransition}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Suspense fallback={<LoadingSpinner />}>
                <Contact />
              </Suspense>
            </motion.div>
          </Box>
        </Box>

        {/* ChatBot */}
        <ChatBot />
      </Box>
    </ChakraProvider>
  );
}

export default App; 