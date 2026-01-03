import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Icon,
  SimpleGrid,
  HStack,
  Badge,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaLaptopCode, FaBrain, FaCloud } from 'react-icons/fa';

const MotionBox = motion(Box);

const About = () => {
  const skills = [
    {
      title: 'Full Stack Development',
      icon: FaLaptopCode,
      description: 'React, Spring Boot, Node.js, TypeScript, JavaScript, HTML5, CSS3, Chakra UI',
      gradient: 'linear-gradient(135deg, #3b82f6, #6366f1)',
    },
    {
      title: 'Backend & APIs',
      icon: FaCode,
      description: 'Java, Python, Flask, FastAPI, RESTful APIs, JWT, SLF4J',
      gradient: 'linear-gradient(135deg, #6366f1, #2563eb)',
    },
    {
      title: 'Database & Cloud',
      icon: FaCloud,
      description: 'MySQL, SQLite, AWS (RDS, Glue), MongoDB, Docker, CI/CD',
      gradient: 'linear-gradient(135deg, #2563eb, #818cf8)',
    },
    {
      title: 'AI/ML & Data',
      icon: FaBrain,
      description: 'Hugging Face, scikit-learn, PyTorch, Apache Kafka, Data Mining, NLP',
      gradient: 'linear-gradient(135deg, #818cf8, #3b82f6)',
    },
  ];

  return (
    <Box 
      id="about" 
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
        <VStack spacing={16} align="stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box textAlign="center">
              <Heading
                as="h2"
                size="2xl"
                mb={4}
                fontSize={{ base: "4xl", md: "5xl" }}
                bgGradient="linear(to-r, #3b82f6, #6366f1)"
                bgClip="text"
              >
                About Me
              </Heading>
              <Text 
                fontSize={{ base: "lg", md: "xl" }} 
                color="gray.300" 
                maxW="3xl" 
                mx="auto"
                lineHeight="1.8"
              >
                I'm a Computer Science student at the University of Texas at Arlington with a passion for 
                building scalable full-stack applications and exploring AI/ML technologies. With a CGPA of 3.73, 
                I'm committed to creating impactful software solutions that make a difference.
              </Text>
            </Box>
          </motion.div>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {skills.map((skill, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Box
                  position="relative"
                  p={8}
                  className="modern-card"
                >
                  <VStack spacing={4} align="start" position="relative" zIndex={1}>
                    <HStack spacing={4}>
                      <Box
                        p={3}
                        borderRadius="xl"
                        style={{ background: skill.gradient }}
                        boxShadow="0 8px 25px rgba(59, 130, 246, 0.3)"
                      >
                        <Icon as={skill.icon} w={8} h={8} color="white" />
                      </Box>
                      <Heading as="h3" size="md" color="white">
                        {skill.title}
                      </Heading>
                    </HStack>
                    <Text color="gray.300" lineHeight="1.7" fontSize="md">
                      {skill.description}
                    </Text>
                  </VStack>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Box
              p={10}
              className="modern-card"
            >
              <VStack spacing={6} align="start" position="relative" zIndex={1}>
                <HStack spacing={4}>
                  <Box
                    p={4}
                    borderRadius="xl"
                    bgGradient="linear-gradient(135deg, #3b82f6, #6366f1)"
                    boxShadow="0 8px 25px rgba(59, 130, 246, 0.3)"
                  >
                    <Icon as={FaGraduationCap} w={10} h={10} color="white" />
                  </Box>
                  <Heading as="h3" size="lg" color="white">
                    Education & Background
                  </Heading>
                </HStack>
                <VStack align="start" spacing={4} color="gray.300">
                  <Text lineHeight="1.8" fontSize="md">
                    Currently pursuing a <strong style={{ color: '#3b82f6' }}>Bachelor of Science in Computer Science</strong> at the 
                    <strong style={{ color: '#6366f1' }}> University of Texas at Arlington</strong>, expected to graduate in December 2026. 
                    Maintaining a CGPA of 3.73 while actively engaging in research, internships, and real-world projects.
                  </Text>
                  <Text lineHeight="1.8" fontSize="md">
                    My experience spans from building full-stack applications like <strong style={{ color: '#3b82f6' }}>MavThread</strong> (a university discussion platform) 
                    to developing Android applications and working on AI/ML research projects. I'm passionate about creating 
                    scalable, efficient solutions that solve real-world problems.
                  </Text>
                  <HStack spacing={3} flexWrap="wrap" pt={2}>
                    <Badge 
                      bg="rgba(59, 130, 246, 0.2)" 
                      color="#3b82f6" 
                      border="1px solid rgba(59, 130, 246, 0.4)"
                      fontSize="sm" 
                      px={4} 
                      py={2}
                      borderRadius="full"
                    >
                      Full Stack Development
                    </Badge>
                    <Badge 
                      bg="rgba(99, 102, 241, 0.2)" 
                      color="#6366f1" 
                      border="1px solid rgba(99, 102, 241, 0.4)"
                      fontSize="sm" 
                      px={4} 
                      py={2}
                      borderRadius="full"
                    >
                      AI/ML Research
                    </Badge>
                    <Badge 
                      bg="rgba(37, 99, 235, 0.2)" 
                      color="#2563eb" 
                      border="1px solid rgba(37, 99, 235, 0.4)"
                      fontSize="sm" 
                      px={4} 
                      py={2}
                      borderRadius="full"
                    >
                      Cloud Computing
                    </Badge>
                    <Badge 
                      bg="rgba(129, 140, 248, 0.2)" 
                      color="#818cf8" 
                      border="1px solid rgba(129, 140, 248, 0.4)"
                      fontSize="sm" 
                      px={4} 
                      py={2}
                      borderRadius="full"
                    >
                      Mobile Development
                    </Badge>
                  </HStack>
                </VStack>
              </VStack>
            </Box>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default About;
