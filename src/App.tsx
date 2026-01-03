import { lazy, Suspense } from 'react';
import { ChakraProvider, Box, theme as baseTheme, Spinner, Center } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import ChatBot from './components/ChatBot';
import Hero from './components/Hero';
import ScrollProgress from './components/ScrollProgress';
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
        bg: '#0a0e1a',
        color: '#ffffff',
        overflowX: 'hidden',
        fontFamily: "'Inter', sans-serif",
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
const About = lazy(() => import('./components/About'));
const Journey = lazy(() => import('./components/Journey'));
const Projects = lazy(() => import('./components/Projects'));
const GitHubShowcase = lazy(() => import('./components/GitHubShowcase'));
const Expertise = lazy(() => import('./components/Expertise'));
const Contact = lazy(() => import('./components/Contact'));

const LoadingSpinner = () => (
  <Center h="100vh">
    <Spinner size="xl" color="blue.400" />
  </Center>
);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" position="relative">
        <div className="animated-bg" />
        <ScrollProgress />
        <Navigation />
        <Box as="main">
          {/* Hero Section */}
          <Hero />

          {/* About Section */}
          <Box py={0} mt={0}>
            <motion.div
              variants={pageTransition}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Suspense fallback={<LoadingSpinner />}>
                <About />
              </Suspense>
            </motion.div>
          </Box>

          {/* Journey Section */}
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
                <GitHubShowcase />
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