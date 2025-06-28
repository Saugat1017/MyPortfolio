import { Box, Container, Heading, SimpleGrid, Text, Icon, VStack, HStack, Tag } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaAws, 
  FaDatabase, FaGitAlt, FaBrain
} from 'react-icons/fa';
import { 
  SiJavascript, SiMongodb, SiPostgresql,
  SiPytorch, SiScikitlearn
} from 'react-icons/si';

const MotionBox = motion(Box);

const expertiseData = [
  {
    category: "Programming Languages",
    icon: FaPython,
    color: "#3776AB",
    skills: [
      { name: "Python", level: "Advanced", icon: FaPython },
      { name: "JavaScript", level: "Intermediate", icon: SiJavascript },
      { name: "Java", level: "Advanced", icon: FaJava },
      { name: "C++", level: "Intermediate" }
    ]
  },
  {
    category: "Web Development",
    icon: FaReact,
    color: "#61DAFB",
    skills: [
      { name: "React.js", level: "Intermediate", icon: FaReact },
      { name: "Node.js", level: "Intermediate", icon: FaNodeJs },
      { name: "HTML5/CSS3", level: "Intermediate" },
      { name: "RESTful APIs", level: "Intermediate" }
    ]
  },
  {
    category: "Machine Learning",
    icon: FaBrain,
    color: "#FF6B6B",
    skills: [
      { name: "PyTorch", level: "Intermediate", icon: SiPytorch },
      { name: "scikit-learn", level: "Advanced", icon: SiScikitlearn },
      { name: "Neural Networks", level: "Advanced" },
      { name: "Computer Vision", level: "Intermediate" }
    ]
  },
  {
    category: "Database & Cloud",
    icon: FaDatabase,
    color: "#4DB33D",
    skills: [
      { name: "MongoDB", level: "Intermediate", icon: SiMongodb },
      { name: "SQL", level: "Advanced", icon: SiPostgresql },
      { name: "AWS", level: "Advanced", icon: FaAws },
      { name: "Git", level: "Intermediate", icon: FaGitAlt }
    ]
  }
];

const Expertise = () => {
  return (
    <Box
      id="expertise"
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
            mb={12}
            fontSize={{ base: "4xl", md: "5xl" }}
            textAlign="center"
            bgGradient="linear(to-r, cyan.400, purple.500)"
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
                p={6}
                borderRadius="xl"
                bg="whiteAlpha.100"
                backdropFilter="blur(10px)"
                border="1px solid"
                borderColor="whiteAlpha.200"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: `0 0 20px ${category.color}40`,
                }}
                transition="all 0.3s ease"
              >
                <HStack mb={6}>
                  <Icon
                    as={category.icon}
                    boxSize={8}
                    color={category.color}
                  />
                  <Heading size="md" color="white">
                    {category.category}
                  </Heading>
                </HStack>

                <VStack align="stretch" spacing={4}>
                  {category.skills.map((skill, skillIndex) => (
                    <HStack key={skillIndex} justify="space-between">
                      <HStack spacing={3}>
                        {skill.icon && (
                          <Icon
                            as={skill.icon}
                            boxSize={5}
                            color={category.color}
                          />
                        )}
                        <Text color="whiteAlpha.900">
                          {skill.name}
                        </Text>
                      </HStack>
                      <Tag
                        size="sm"
                        variant="subtle"
                        colorScheme={skill.level === "Advanced" ? "cyan" : "purple"}
                      >
                        {skill.level}
                      </Tag>
                    </HStack>
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