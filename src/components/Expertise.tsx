import { Box, Container, Heading, SimpleGrid, Text, Icon, VStack, HStack, Circle } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaAws, 
  FaDatabase, FaGitAlt, FaBrain, FaMobile, FaCode
} from 'react-icons/fa';
import { 
  SiJavascript, SiMongodb, SiPostgresql, SiMysql,
  SiPytorch, SiScikitlearn, SiSpring, SiAndroid,
  SiDocker, SiGo, SiFlask
} from 'react-icons/si';

const MotionBox = motion(Box);

const expertiseData = [
  {
    category: "Programming Languages",
    icon: FaCode,
    skills: [
      { name: "Java", level: 95, icon: FaJava },
      { name: "Python", level: 90, icon: FaPython },
      { name: "JavaScript/TypeScript", level: 85, icon: SiJavascript },
      { name: "C/C++", level: 80, icon: FaDatabase },
      { name: "Go", level: 60, icon: SiGo },
      { name: "R", level: 70, icon: FaDatabase },
    ]
  },
  {
    category: "Web Development",
    icon: FaReact,
    skills: [
      { name: "React", level: 85, icon: FaReact },
      { name: "Spring Boot", level: 90, icon: SiSpring },
      { name: "Node.js", level: 80, icon: FaNodeJs },
      { name: "Flask/FastAPI", level: 85, icon: SiFlask },
      { name: "HTML5/CSS3", level: 90, icon: FaReact },
      { name: "RESTful APIs", level: 90, icon: FaReact },
    ]
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
    ]
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
    ]
  }
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
              bgGradient="linear(to-r, #ffffff, #e5e5e5, #d4d4d4, #a3a3a3)"
              bgClip="text"
            >
              Technical Expertise
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
                    <Icon
                      as={category.icon}
                      boxSize={8}
                      color="white"
                    />
                  </Circle>
                  <Heading size="lg" color="white" fontWeight="700">
                    {category.category}
                  </Heading>
                </HStack>

                {/* Skills List */}
                <VStack align="stretch" spacing={6}>
                  {category.skills.map((skill, skillIndex) => {
                    const color = skill.level >= 85 
                      ? "#ffffff" 
                      : skill.level >= 75 
                      ? "#e5e5e5" 
                      : "#d4d4d4";
                    
                    return (
                      <Box key={skillIndex}>
                        <HStack justify="space-between" mb={3}>
                          <HStack spacing={3}>
                            {skill.icon && (
                              <Icon
                                as={skill.icon}
                                boxSize={5}
                                color={color}
                              />
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
                          h="10px"
                          bg="rgba(255, 255, 255, 0.05)"
                          borderRadius="full"
                          overflow="hidden"
                          position="relative"
                        >
                          <MotionBox
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                            h="100%"
                            bgGradient={`linear(to-r, ${color}, ${color}dd)`}
                            borderRadius="full"
                            boxShadow={`0 0 20px ${color}50`}
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
