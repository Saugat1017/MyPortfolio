import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Icon,
  VStack,
  HStack,
  Circle,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaAws,
  FaDatabase,
  FaGitAlt,
  FaBrain,
  FaMobile,
  FaCode,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPytorch,
  SiScikitlearn,
  SiSpring,
  SiAndroid,
  SiDocker,
  SiGo,
  SiFlask,
} from "react-icons/si";

const MotionBox = motion(Box);

const expertiseData = [
  {
    category: "Programming Languages",
    icon: FaCode,
    skills: [
      { name: "Java", level: 90, icon: FaJava },
      { name: "Python", level: 90, icon: FaPython },
      { name: "JavaScript/TypeScript", level: 85, icon: SiJavascript },
      { name: "C/C++", level: 80, icon: FaDatabase },
      { name: "Go", level: 60, icon: SiGo },
      { name: "R", level: 70, icon: FaDatabase },
    ],
  },
  {
    category: "Web Development",
    icon: FaReact,
    skills: [
      { name: "React", level: 75, icon: FaReact },
      { name: "Spring Boot", level: 90, icon: SiSpring },
      { name: "Flask/FastAPI", level: 85, icon: SiFlask },
      { name: "HTML5/CSS3", level: 90, icon: FaReact },
      { name: "RESTful APIs", level: 90, icon: FaReact },
    ],
  },
  {
    category: "Mobile & Databases",
    icon: FaMobile,
    skills: [
      { name: "Android SDK", level: 85, icon: SiAndroid },
      { name: "MySQL", level: 90, icon: SiMysql },
      { name: "SQLite", level: 85, icon: SiPostgresql },
      { name: "MongoDB", level: 80, icon: SiMongodb },
      { name: "SQL", level: 90, icon: FaDatabase },
    ],
  },
  {
    category: "AI/ML & Cloud",
    icon: FaBrain,
    skills: [
      { name: "Hugging Face", level: 85, icon: FaBrain },
      { name: "scikit-learn", level: 90, icon: SiScikitlearn },
      { name: "PyTorch", level: 80, icon: SiPytorch },
      { name: "AWS (RDS, Glue)", level: 85, icon: FaAws },
      { name: "Apache Kafka", level: 75 },
      { name: "Docker", level: 80, icon: SiDocker },
      { name: "Git", level: 90, icon: FaGitAlt },
    ],
  },
];

const Expertise = () => {
  return (
    <Box
      id="expertise"
      minH="100vh"
      py={{ base: 16, md: 24 }}
      bg="#0a0a0a"
      position="relative"
      overflow="hidden"
    >
      {/* Subtle background patterns */}
      <Box position="absolute" top="0" left="0" right="0" bottom="0" zIndex={0}>
        {/* Circuit board pattern */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          opacity={0.02}
          backgroundImage="linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)"
          backgroundSize="40px 40px"
        />
        {/* Dots at intersections */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          opacity={0.03}
          backgroundImage="radial-gradient(circle at 40px 40px, rgba(255, 255, 255, 0.4) 1px, transparent 0)"
          backgroundSize="40px 40px"
        />
        {/* Gradient overlay */}
        <Box
          position="absolute"
          top="30%"
          right="20%"
          w="600px"
          h="600px"
          borderRadius="50%"
          bgGradient="radial(circle, rgba(255, 255, 255, 0.02), transparent)"
          filter="blur(120px)"
        />
      </Box>
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <VStack spacing={4} mb={16} textAlign="center">
            <Heading
              fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
              fontWeight="700"
              letterSpacing="0.1em"
              textTransform="uppercase"
              fontFamily="'Space Grotesk', sans-serif"
              color="white"
            >
              Expertise
            </Heading>
            <Text
              color="gray.400"
              fontSize={{ base: "md", md: "lg" }}
              maxW="2xl"
            >
              Skills and technologies I work with
            </Text>
          </VStack>
        </motion.div>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {expertiseData.map((category, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
                _hover={{
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 20px 60px rgba(255, 255, 255, 0.1)",
                  transform: "translateY(-4px)",
                }}
                transition="all 0.4s ease"
              >
                {/* Category Header */}
                <HStack spacing={4} mb={8}>
                  <Circle
                    size="60px"
                    bgGradient="linear(135deg, #ffffff, #e5e5e5)"
                    p={3}
                  >
                    <Icon as={category.icon} boxSize={8} color="white" />
                  </Circle>
                  <Heading size="lg" color="white" fontWeight="700">
                    {category.category}
                  </Heading>
                </HStack>

                {/* Skills List */}
                <VStack align="stretch" spacing={6}>
                  {category.skills.map((skill, skillIndex) => {
                    // Colorful progress bars - highlight Java, Python, and ML skills
                    let barColor = "#ffffff"; // default white
                    let barGradient = "linear(to-r, #ffffff, #e5e5e5)";

                    // Special colors for key skills
                    if (skill.name === "Java") {
                      barColor = "#ed8b00"; // Java orange
                      barGradient = "linear(to-r, #ed8b00, #f8981d)";
                    } else if (skill.name === "Python") {
                      barColor = "#3776ab"; // Python blue
                      barGradient = "linear(to-r, #3776ab, #4b8bbe)";
                    } else if (
                      skill.name === "Machine Learning" ||
                      skill.name.includes("ML") ||
                      skill.name === "Hugging Face" ||
                      skill.name === "scikit-learn" ||
                      skill.name === "PyTorch"
                    ) {
                      barColor = "#ff6b6b"; // ML red/pink
                      barGradient = "linear(to-r, #ff6b6b, #ee5a6f)";
                    } else if (skill.level >= 90) {
                      barColor = "#4ecdc4"; // High skill - teal
                      barGradient = "linear(to-r, #4ecdc4, #44a08d)";
                    } else if (skill.level >= 85) {
                      barColor = "#95e1d3"; // Very good - light teal
                      barGradient = "linear(to-r, #95e1d3, #7dd3c0)";
                    } else if (skill.level >= 75) {
                      barColor = "#a8e6cf"; // Good - mint
                      barGradient = "linear(to-r, #a8e6cf, #88d8a3)";
                    } else {
                      barColor = "#d4d4d4"; // Lower - gray
                      barGradient = "linear(to-r, #d4d4d4, #a3a3a3)";
                    }

                    return (
                      <Box key={skillIndex}>
                        <HStack justify="space-between" mb={3}>
                          <HStack spacing={3}>
                            {skill.icon && (
                              <Icon as={skill.icon} boxSize={5} color="white" />
                            )}
                            <Text color="white" fontSize="md" fontWeight="600">
                              {skill.name}
                            </Text>
                          </HStack>
                          <Text color="gray.400" fontSize="sm" fontWeight="700">
                            {skill.level}%
                          </Text>
                        </HStack>
                        <Box
                          w="100%"
                          h="12px"
                          bg="rgba(255, 255, 255, 0.05)"
                          borderRadius="full"
                          overflow="hidden"
                          position="relative"
                        >
                          <MotionBox
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1,
                              delay: skillIndex * 0.1,
                            }}
                            viewport={{ once: true }}
                            h="100%"
                            bgGradient={barGradient}
                            borderRadius="full"
                            boxShadow={`0 0 15px ${barColor}80, 0 0 30px ${barColor}40`}
                          />
                        </Box>
                      </Box>
                    );
                  })}
                </VStack>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Expertise;
