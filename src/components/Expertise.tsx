import { Box, Container, Heading, SimpleGrid, Text, Icon, VStack, HStack, Tag } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaAws, 
  FaDatabase, FaGitAlt, FaBrain, FaMobile
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
    icon: FaPython,
    color: "#3776AB",
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
    color: "#61DAFB",
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
    color: "#3DDC84",
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
    color: "#FF6B6B",
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
        bgGradient="radial(circle at 50% 50%, rgba(59, 130, 246, 0.1), transparent)"
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
            mb={12}
            fontSize={{ base: "4xl", md: "5xl" }}
            textAlign="center"
            bgGradient="linear(to-r, #3b82f6, #6366f1)"
            bgClip="text"
          >
            Technical Expertise
          </Heading>
        </motion.div>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {expertiseData.map((category, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                p={8}
                className="modern-card"
                _hover={{
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 60px rgba(59, 130, 246, 0.3)",
                }}
                transition="all 0.4s ease"
                h="100%"
              >
                <HStack mb={6}>
                  <Box
                    p={3}
                    borderRadius="xl"
                    bgGradient="linear-gradient(135deg, #3b82f6, #6366f1)"
                    boxShadow="0 8px 25px rgba(59, 130, 246, 0.3)"
                  >
                    <Icon
                      as={category.icon}
                      boxSize={8}
                      color="white"
                    />
                  </Box>
                  <Heading size="md" color="white">
                    {category.category}
                  </Heading>
                </HStack>

                <VStack align="stretch" spacing={4}>
                  {category.skills.map((skill, skillIndex) => (
                    <Box key={skillIndex}>
                      <HStack justify="space-between" mb={2}>
                        <HStack spacing={3}>
                          {skill.icon && (
                            <Icon
                              as={skill.icon}
                              boxSize={5}
                              color="#3b82f6"
                            />
                          )}
                          <Text color="whiteAlpha.900" fontSize="sm" fontWeight="500">
                            {skill.name}
                          </Text>
                        </HStack>
                        <Tag
                          size="sm"
                          variant="subtle"
                          bg={skill.level >= 85 ? "rgba(59, 130, 246, 0.2)" : skill.level >= 75 ? "rgba(99, 102, 241, 0.2)" : "rgba(156, 163, 175, 0.2)"}
                          color={skill.level >= 85 ? "#3b82f6" : skill.level >= 75 ? "#6366f1" : "#9ca3af"}
                          border={`1px solid ${skill.level >= 85 ? "rgba(59, 130, 246, 0.4)" : skill.level >= 75 ? "rgba(99, 102, 241, 0.4)" : "rgba(156, 163, 175, 0.4)"}`}
                          borderRadius="full"
                        >
                          {skill.level}%
                        </Tag>
                      </HStack>
                      <Box
                        w="100%"
                        h="8px"
                        bg="rgba(255, 255, 255, 0.1)"
                        borderRadius="full"
                        overflow="hidden"
                      >
                        <Box
                          h="100%"
                          bgGradient={skill.level >= 85 
                            ? "linear(to-r, #3b82f6, #2563eb)" 
                            : skill.level >= 75 
                            ? "linear(to-r, #6366f1, #8b5cf6)" 
                            : "linear(to-r, #9ca3af, #6b7280)"}
                          borderRadius="full"
                          w={`${skill.level}%`}
                          transition="width 0.5s ease"
                          boxShadow={skill.level >= 85 
                            ? "0 0 10px rgba(59, 130, 246, 0.5)" 
                            : skill.level >= 75 
                            ? "0 0 10px rgba(99, 102, 241, 0.5)" 
                            : "none"}
                        />
                      </Box>
                    </Box>
                  ))}
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
