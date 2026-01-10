import { Box, Container, Heading, Text, Tag, Button, VStack, HStack, Link, SimpleGrid, Badge } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaTasks, FaMobile, FaServer, FaHome, FaBrain, FaArrowRight, FaJava } from 'react-icons/fa';
import { SiReact, SiAndroid, SiC, SiHtml5, SiCss3, SiJavascript, SiPython, SiFastapi } from 'react-icons/si';

const MotionBox = motion(Box);

const projects = [
  {
    title: "Insurance Early Claim Risk Prediction System",
    description: "A machine learning system that predicts claim severity (Low/Medium/High) at the moment a claim is filed, helping insurance companies prioritize resources and identify high-risk claims early. Uses only information available at claim filing time with no data leakage.",
    technologies: ["Python", "FastAPI", "Streamlit", "Machine Learning", "Logistic Regression", "scikit-learn"],
    icons: [SiPython, SiFastapi, FaBrain],
    category: "Machine Learning",
    categoryIcon: FaBrain,
    links: {
      github: "https://github.com/Saugat1017/Insurance_early_claim_risk_Prediction_System",
      demo: "https://github.com/Saugat1017/Insurance_early_claim_risk_Prediction_System"
    },
    highlights: [
      "Predicts claim severity using only intake information (premium, age, policy tenure, family size, insurance type)",
      "Decoupled architecture: FastAPI backend with ML model, Streamlit frontend",
      "Business decision logic separated from ML training for explainability",
      "Production-ready design with validated model and clean API endpoints"
    ]
  },
  {
    title: "MavThread - University Discussion Platform",
    description: "Built a full-stack (Python) university discussion platform for 200+ simulated users with anonymous threaded conversations, secure JWT authentication, and a point tracking system. Handled 5K+ API calls during load testing with zero data collisions using UUID-based mapping.",
    technologies: ["Java", "React", "Spring Boot", "MySQL", "JWT", "AWS RDS", "SLF4J"],
    icons: [FaJava, SiReact],
    category: "Full Stack (Python)",
    categoryIcon: FaServer,
    period: "Jun 2025 – Present",
    links: {
      github: "https://github.com/Saugat1017/MavThread",
      demo: "https://github.com/Saugat1017/MavThread"
    },
    highlights: [
      "Scalable Spring Boot + MySQL (AWS RDS) backend with JPA",
      "Zero data collisions with UUID-based mapping",
      "React-based UI with SLF4J logging, reducing error resolution time by 40%",
      "Handled 5K+ API calls during load testing"
    ]
  },
  {
    title: "Mortgage Website - Volunteer Project",
    description: "A modern, responsive mortgage website built as a volunteer project. Features interactive mortgage calculator, loan program information, and professional design with smooth animations. Fully responsive design that works seamlessly across desktop, tablet, and mobile devices.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Font Awesome", "Google Fonts"],
    icons: [SiHtml5, SiCss3, SiJavascript],
    category: "Web Development",
    categoryIcon: FaHome,
    links: {
      github: "https://github.com/Saugat1017/MortgageWebsite-Volunteer-Project",
      demo: "https://saugat1017.github.io/MortgageWebsite-Volunteer-Project"
    },
    highlights: [
      "Modern, responsive design with gradient backgrounds and smooth animations",
      "Interactive mortgage calculator with real-time payment calculations",
      "Professional UI with fixed navigation, mobile menu, and form validation",
      "Built as volunteer work to support company's digital presence"
    ]
  },
  {
    title: "Fitness Tracker App - Android Application",
    description: "Developed a comprehensive Android fitness tracker in Java with GPS integration and sensor-based step counting. Enabled accurate monitoring across 4+ activity types, supporting 1,000+ simulated workout records during testing with advanced analytics.",
    technologies: ["Java", "Android SDK", "MySQL", "Google Play Services", "Material Design 3", "MPAndroidChart"],
    icons: [FaJava, SiAndroid],
    category: "Mobile Development",
    categoryIcon: FaMobile,
    period: "Aug 2024 – Dec 2024",
    links: {
      github: "https://github.com/Saugat1017",
      demo: "https://github.com/Saugat1017"
    },
    highlights: [
      "GPS integration and sensor-based step counting",
      "Advanced analytics with weekly/daily progress visualization",
      "Increased user engagement by 35% in trials",
      "Normalized SQLite schema with dark/light mode support"
    ]
  },
  {
    title: "Farm Data Management System",
    description: "Developed a C-based trading system for farmers and merchants with secure registration, product listing, and request features. Supported 3+ product categories and handled 1,000+ simulated records with file-based data persistence.",
    technologies: ["C", "File I/O", "CSV", "Console Interface"],
    icons: [SiC],
    category: "Desktop Application",
    categoryIcon: FaTasks,
    period: "Aug 2022 – Dec 2022",
    links: {
      github: "https://github.com/Saugat1017/Trading-Program-for-Farmers-and-Merchants",
      demo: "https://github.com/Saugat1017/Trading-Program-for-Farmers-and-Merchants"
    },
    highlights: [
      "File-based data persistence using structured CSV and .dat files",
      "Secure, user-friendly console interface with input validation",
      "Password protection and dynamic menus",
      "Improved task completion by 40%"
    ]
  }
];

const Projects = () => {
  return (
    <Box
      id="projects"
      minH="100vh"
      py={{ base: 16, md: 24 }}
      bg="#000000"
      position="relative"
      overflow="hidden"
    >
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <VStack spacing={4} mb={16} textAlign="center">
            <Heading
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="800"
              letterSpacing="tight"
            >
              <Text as="span" bgGradient="linear(to-r, #ffffff, #e5e5e5)" bgClip="text">
                Featured
              </Text>{' '}
              <Text as="span" bgGradient="linear(to-r, #d4d4d4, #a3a3a3)" bgClip="text">
                Projects
              </Text>
            </Heading>
            <Text
              color="gray.400"
              fontSize={{ base: "md", md: "lg" }}
              maxW="2xl"
            >
              Showcasing my best work across various technologies and domains
            </Text>
          </VStack>
        </motion.div>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
          {projects.map((project, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                position="relative"
                borderRadius="2xl"
                bg="rgba(20, 20, 20, 0.8)"
                backdropFilter="blur(20px)"
                border="1px solid"
                borderColor="rgba(255, 255, 255, 0.2)"
                p={8}
                h="100%"
                display="flex"
                flexDirection="column"
                _hover={{
                  borderColor: "rgba(255, 255, 255, 0.4)",
                  boxShadow: "0 25px 50px rgba(255, 255, 255, 0.1)",
                  transform: "translateY(-8px)",
                }}
                transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                {/* Gradient Border Top */}
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  h="3px"
                  bgGradient="linear(to-r, #ffffff, #e5e5e5, #d4d4d4, #a3a3a3)"
                  borderRadius="2xl 2xl 0 0"
                />

                <VStack align="stretch" spacing={6} flex="1">
                  {/* Header */}
                  <HStack justify="space-between" align="flex-start" flexWrap="wrap" gap={4}>
                    <Badge
                      px={4}
                      py={2}
                      borderRadius="full"
                      bg="rgba(255, 255, 255, 0.1)"
                      color="#e5e5e5"
                      border="1px solid"
                      borderColor="rgba(255, 255, 255, 0.2)"
                      fontSize="xs"
                      fontWeight="700"
                      textTransform="uppercase"
                      letterSpacing="wide"
                    >
                      {project.category}
                    </Badge>
                    {project.period && (
                      <Text color="gray.500" fontSize="xs" fontWeight="600">
                        {project.period}
                      </Text>
                    )}
                  </HStack>

                  {/* Title */}
                  <Heading
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="700"
                    color="white"
                    lineHeight="1.3"
                  >
                    {project.title}
                  </Heading>

                  {/* Description */}
                  <Text
                    color="gray.300"
                    lineHeight="1.8"
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    {project.description}
                  </Text>

                  {/* Highlights */}
                  <Box flex="1">
                    <VStack align="stretch" spacing={3}>
                      {project.highlights.map((highlight, i) => (
                        <HStack key={i} spacing={3} align="flex-start">
                          <Box
                            w="6px"
                            h="6px"
                            borderRadius="full"
                            bg="#ffffff"
                            mt={2}
                            flexShrink={0}
                          />
                          <Text
                            color="gray.300"
                            fontSize={{ base: "xs", md: "sm" }}
                            lineHeight="1.7"
                            flex={1}
                          >
                            {highlight}
                          </Text>
                        </HStack>
                      ))}
                    </VStack>
                  </Box>

                  {/* Technologies */}
                  <Box>
                    <HStack spacing={2} flexWrap="wrap">
                      {project.technologies.map((tech, i) => (
                        <Tag
                          key={i}
                          size="sm"
                          bg="rgba(255, 255, 255, 0.1)"
                          color="#e5e5e5"
                          border="1px solid"
                          borderColor="rgba(255, 255, 255, 0.2)"
                          borderRadius="md"
                          px={3}
                          py={1}
                          fontSize="xs"
                          fontWeight="600"
                        >
                          {tech}
                        </Tag>
                      ))}
                    </HStack>
                  </Box>

                  {/* Action Buttons */}
                  <HStack spacing={4} pt={2}>
                    <Link href={project.links.github} isExternal flex="1">
                      <Button
                        leftIcon={<FaGithub />}
                        w="100%"
                        variant="outline"
                        borderColor="rgba(255, 255, 255, 0.3)"
                        color="#ffffff"
                        bg="transparent"
                        borderRadius="xl"
                        py={6}
                        fontSize="sm"
                        fontWeight="600"
                        _hover={{
                          bg: "rgba(59, 130, 246, 0.15)",
                          borderColor: "#ffffff",
                          color: "#ffffff",
                        }}
                        transition="all 0.3s ease"
                      >
                        View Code
                      </Button>
                    </Link>
                    <Link href={project.links.demo} isExternal flex="1">
                      <Button
                        rightIcon={<FaArrowRight />}
                        w="100%"
                        bgGradient="linear(to-r, #ffffff, #e5e5e5)"
                        color="#000000"
                        borderRadius="xl"
                        py={6}
                        fontSize="sm"
                        fontWeight="600"
                        _hover={{
                          bgGradient: "linear(to-r, #e5e5e5, #d4d4d4)",
                          transform: "translateY(-2px)",
                          boxShadow: "0 10px 25px rgba(255, 255, 255, 0.3)",
                        }}
                        transition="all 0.3s ease"
                      >
                        Live Demo
                      </Button>
                    </Link>
                  </HStack>
                </VStack>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Projects;
