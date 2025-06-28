import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGraduationCap, FaCode, FaLaptopCode, FaDatabase } from 'react-icons/fa';

const About = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  const skills = [
    {
      title: 'Frontend Development',
      icon: FaLaptopCode,
      description: 'React, Vue.js, TypeScript, HTML5, CSS3, Tailwind CSS, Chakra UI',
    },
    {
      title: 'Backend Development',
      icon: FaCode,
      description: 'Python, Flask, Node.js, Express.js, RESTful APIs',
    },
    {
      title: 'Database & Cloud',
      icon: FaDatabase,
      description: 'MongoDB, Firebase, AWS, Git, Docker',
    },
    {
      title: 'Education',
      icon: FaGraduationCap,
      description: 'B.S. in Computer Science, University of Texas at Arlington',
    },
  ];

  return (
    <Box id="about" py={20} bg={bgColor}>
      <Container maxW="container.xl">
        <VStack spacing={12} align="stretch">
          <Box textAlign="center">
            <Heading
              as="h2"
              size="2xl"
              mb={4}
              bgGradient="linear(to-r, cyan.400, purple.500)"
              bgClip="text"
            >
              About Me
            </Heading>
            <Text fontSize="xl" color={textColor} maxW="3xl" mx="auto">
              I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies.
              My journey in software development is driven by a desire to create impactful solutions that make a difference.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {skills.map((skill, index) => (
              <Box
                key={index}
                p={6}
                bg={useColorModeValue('white', 'gray.700')}
                rounded="xl"
                shadow="lg"
                transition="all 0.3s ease"
                _hover={{
                  transform: 'translateY(-5px)',
                  shadow: 'xl',
                }}
              >
                <VStack spacing={4} align="start">
                  <Icon as={skill.icon} w={8} h={8} color="cyan.400" />
                  <Heading as="h3" size="md">
                    {skill.title}
                  </Heading>
                  <Text color={textColor}>{skill.description}</Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>

          <Box
            p={8}
            bg={useColorModeValue('white', 'gray.700')}
            rounded="xl"
            shadow="lg"
          >
            <VStack spacing={4} align="start">
              <Heading as="h3" size="lg">
                My Journey
              </Heading>
              <Text color={textColor}>
                With a Bachelor's degree in Computer Science from the University of Texas at Arlington,
                I've developed a strong foundation in software development principles and practices.
                My experience spans across various domains, from healthcare technology to financial systems,
                always focusing on creating efficient, scalable, and user-friendly solutions.
              </Text>
              <Text color={textColor}>
                I'm particularly passionate about AI and machine learning applications,
                as evidenced by my work on projects like WhiteCoat AI and Gemini Alert.
                I believe in continuous learning and staying updated with the latest technologies
                to deliver the best possible solutions.
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default About; 