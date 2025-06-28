import { Box, Container, Heading, SimpleGrid, Text, Tag, Icon, Button, VStack, HStack, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaBrain, FaTasks, FaLock } from 'react-icons/fa';
import { SiPython, SiReact, SiTensorflow } from 'react-icons/si';

const MotionBox = motion(Box);

const projects = [
  {
    title: "WhiteCoat AI - Medical Report Simplification Platform",
    description: "Built an AI-based tool to extract, summarize, and visualize complex medical documents with chart outputs and interactive Q&A. Simplified over 200 documents in early testing, enhancing patient understanding and user satisfaction.",
    technologies: ["Python", "Streamlit", "Google Gemini API", "MongoDB", "NLP"],
    icons: [SiPython, FaBrain],
    category: "Machine Learning",
    categoryIcon: FaBrain,
    links: {
      github: "https://github.com/Saugat1017/whiteCoatAI",
      demo: "https://whitecoatai-2xizuifvkdg64cgjvvk9kc.streamlit.app/"
    },
    highlights: [
      "Implemented advanced NLP for medical document processing",
      "Built interactive visualization dashboard",
      "Achieved significant improvement in patient understanding"
    ]
  },
  {
    title: "Gemini Alert - AI Stress Management System",
    description: "Created a full-stack app offering real-time AI-guided strategies for managing anxiety, conflict, and high-stress events. Processed over 300 session simulations, with user testing reporting a 40% decrease in stress response levels.",
    technologies: ["Vue.js", "Flask", "Gemini API", "Firebase"],
    icons: [SiReact, FaBrain],
    category: "Full Stack",
    categoryIcon: FaTasks,
    links: {
      github: "https://github.com/Saugat1017/gemini-alert-app",
      demo: "https://gemini-alert-app.vercel.app/"
    },
    highlights: [
      "Real-time AI stress monitoring and response",
      "40% reduction in user stress levels",
      "Integrated Gemini API for personalized strategies"
    ]
  },
  {
    title: "HealthCost AI Predictor",
    description: "Developed a predictive model using Random Forest Regression to estimate yearly healthcare costs with 0.83 R² accuracy. Implemented an interactive Streamlit interface to process input features and visualize model results for 1,000+ profiles.",
    technologies: ["Python", "Streamlit", "scikit-learn", "pandas"],
    icons: [SiPython, SiTensorflow],
    category: "Machine Learning",
    categoryIcon: FaBrain,
    links: {
      github: "https://github.com/axp8948/finhack-healthCostPredictor",
      demo: "https://github.com/axp8948/finhack-healthCostPredictor"
    },
    highlights: [
      "Achieved 0.83 R² accuracy in cost prediction",
      "Processed over 1,000 patient profiles",
      "Interactive visualization of prediction factors"
    ]
  },
  {
    title: "Java Game Development Project",
    description: "Designed a game to enhance problem-solving skills in game logic and AI behavior. Applied OOP principles to optimize game performance, reducing memory usage by 20% after code refactoring.",
    technologies: ["Java", "Object-Oriented Design", "Game Development"],
    icons: [FaTasks, FaBrain],
    category: "Game Development",
    categoryIcon: FaTasks,
    links: {
      github: "https://github.com/Saugat1017/Java-GamingProject",
      demo: "https://github.com/Saugat1017/Java-GamingProject"
    },
    highlights: [
      "20% reduction in memory usage",
      "Implemented AI behavior systems",
      "Applied OOP design patterns"
    ]
  },
  {
    title: "Trading Program for Farmers and Merchants",
    description: "Created a trading program using C++ to help farmers and merchants connect, reducing middlemen and increasing efficiency. Decreased simulated transaction time by 40% and improved user engagement with an intuitive menu-driven system.",
    technologies: ["C++", "Data Structures", "Algorithms"],
    icons: [FaTasks, FaLock],
    category: "Desktop Application",
    categoryIcon: FaTasks,
    links: {
      github: "https://github.com/Saugat1017/Trading-Program-for-Farmers-and-Merchants",
      demo: "https://github.com/Saugat1017/Trading-Program-for-Farmers-and-Merchants"
    },
    highlights: [
      "40% reduction in transaction time",
      "Intuitive menu-driven interface",
      "Efficient matching algorithm for traders"
    ]
  }
];

const Projects = () => {
  return (
    <Box
      id="projects"
      minH="100vh"
      py={20}
      bgGradient="linear(to-b, gray.900, gray.800)"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="radial(circle at 50% 50%, rgba(0, 255, 255, 0.1), transparent)"
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
            bgGradient="linear(to-r, cyan.400, purple.500)"
            bgClip="text"
          >
            Featured Projects
          </Heading>
        </motion.div>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
          {projects.map((project, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                p={8}
                h="100%"
                borderRadius="xl"
                bg="whiteAlpha.100"
                backdropFilter="blur(10px)"
                border="1px solid"
                borderColor="whiteAlpha.200"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "xl",
                }}
                transition="all 0.3s ease"
              >
                <VStack align="stretch" h="100%" spacing={6}>
                  <HStack spacing={4}>
                    <Icon as={project.categoryIcon} boxSize={6} color="cyan.400" />
                    <Tag size="md" colorScheme="purple" borderRadius="full">
                      {project.category}
                    </Tag>
                  </HStack>

                  <Heading size="lg" color="white">
                    {project.title}
                  </Heading>

                  <Text color="whiteAlpha.900">
                    {project.description}
                  </Text>

                  <Box flex="1">
                    <VStack align="stretch" spacing={2}>
                      {project.highlights.map((highlight, i) => (
                        <HStack key={i} spacing={2}>
                          <Box w="2" h="2" borderRadius="full" bg="cyan.400" />
                          <Text color="whiteAlpha.800" fontSize="sm">
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
                          colorScheme="cyan"
                          variant="subtle"
                          mt={1}
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
                          borderColor="cyan.400"
                          color="white"
                          _hover={{
                            bg: "cyan.400",
                          }}
                        >
                          Code
                        </Button>
                      </Link>
                      <Link href={project.links.demo} isExternal flex="1">
                        <Button
                          leftIcon={<FaExternalLinkAlt />}
                          w="100%"
                          variant="outline"
                          borderColor="purple.500"
                          color="white"
                          _hover={{
                            bg: "purple.500",
                          }}
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