import { Box, Container, Heading, Text, Tag, Icon, Button, VStack, HStack, Link, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTasks, FaMobile, FaServer, FaJava, FaHome, FaBrain } from 'react-icons/fa';
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
    description: "Built a full-stack university discussion platform for 200+ simulated users with anonymous threaded conversations, secure JWT authentication, and a point tracking system. Handled 5K+ API calls during load testing with zero data collisions using UUID-based mapping.",
    technologies: ["Java", "React", "Spring Boot", "MySQL", "JWT", "AWS RDS", "SLF4J"],
    icons: [FaJava, SiReact],
    category: "Full Stack",
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
      py={20}
      bgGradient="linear(to-b, #0a0e1a, #0f172a)"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="radial(circle at 50% 50%, rgba(59, 130, 246, 0.15), transparent)"
        opacity={0.3}
      />

      <Container maxW="container.xl" position="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Heading
            mb={16}
            fontSize={{ base: "4xl", md: "5xl" }}
            textAlign="center"
            bgGradient="linear(to-r, #3b82f6, #6366f1)"
            bgClip="text"
          >
            Featured Projects
          </Heading>
        </motion.div>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
          {projects.map((project, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                className="modern-card"
                h="100%"
              >
                <VStack align="stretch" h="100%" spacing={6}>
                  <HStack spacing={4} justify="space-between" flexWrap="wrap">
                    <HStack spacing={4}>
                      <Box
                        p={3}
                        borderRadius="xl"
                        bg="rgba(59, 130, 246, 0.1)"
                        border="1px solid rgba(59, 130, 246, 0.3)"
                      >
                        <Icon as={project.categoryIcon} boxSize={6} color="#3b82f6" />
                      </Box>
                      <Tag 
                        size="md" 
                        bg="rgba(99, 102, 241, 0.2)" 
                        color="#6366f1"
                        border="1px solid rgba(99, 102, 241, 0.4)"
                        borderRadius="full"
                        px={4}
                        py={2}
                      >
                        {project.category}
                      </Tag>
                    </HStack>
                    {project.period && (
                      <Text color="gray.400" fontSize="sm" fontWeight="500">
                        {project.period}
                      </Text>
                    )}
                  </HStack>

                  <Heading 
                    size="lg" 
                    color="white"
                    bgGradient="linear(to-r, #3b82f6, #ffffff)"
                    bgClip="text"
                  >
                    {project.title}
                  </Heading>

                  <Text color="gray.300" lineHeight="1.8" fontSize="md">
                    {project.description}
                  </Text>

                  <Box flex="1">
                    <VStack align="stretch" spacing={3}>
                      {project.highlights.map((highlight, i) => (
                        <HStack key={i} spacing={3} align="flex-start">
                          <Box
                            w="6px"
                            h="6px"
                            borderRadius="full"
                            bg="#3b82f6"
                            mt={2}
                            flexShrink={0}
                            boxShadow="0 0 10px rgba(59, 130, 246, 0.6)"
                          />
                          <Text color="gray.300" fontSize="sm" lineHeight="1.7" flex={1}>
                            {highlight}
                          </Text>
                        </HStack>
                      ))}
                    </VStack>
                  </Box>

                  <VStack spacing={4} align="stretch">
                    <HStack spacing={2} flexWrap="wrap">
                      {project.technologies.map((tech, i) => (
                        <Tag
                          key={i}
                          size="sm"
                          bg="rgba(59, 130, 246, 0.1)"
                          color="#3b82f6"
                          border="1px solid rgba(59, 130, 246, 0.3)"
                          borderRadius="md"
                          px={3}
                          py={1}
                        >
                          {tech}
                        </Tag>
                      ))}
                    </HStack>

                    <HStack spacing={4}>
                      <Link href={project.links.github} isExternal flex="1">
                        <Button
                          leftIcon={<FaGithub />}
                          w="100%"
                          variant="outline"
                          borderColor="#3b82f6"
                          color="#3b82f6"
                          borderRadius="xl"
                          py={6}
                          _hover={{
                            bg: "#3b82f6",
                            color: "#0a0e1a",
                            transform: "translateY(-2px)",
                            boxShadow: "0 8px 25px rgba(59, 130, 246, 0.4)",
                          }}
                          transition="all 0.3s ease"
                        >
                          View Code
                        </Button>
                      </Link>
                      <Link href={project.links.demo} isExternal flex="1">
                        <Button
                          leftIcon={<FaExternalLinkAlt />}
                          w="100%"
                          bgGradient="linear(to-r, #3b82f6, #6366f1)"
                          color="white"
                          borderRadius="xl"
                          py={6}
                          _hover={{
                            bgGradient: "linear(to-r, #2563eb, #4f46e5)",
                            transform: "translateY(-2px)",
                            boxShadow: "0 8px 25px rgba(99, 102, 241, 0.4)",
                          }}
                          transition="all 0.3s ease"
                        >
                          Live Demo
                        </Button>
                      </Link>
                    </HStack>
                  </VStack>
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
