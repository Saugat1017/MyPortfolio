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
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaBrain,
  FaCloud,
} from "react-icons/fa";

const MotionBox = motion(Box);

const About = () => {
  const skills = [
    {
      title: "Full Stack Development ",
      icon: FaLaptopCode,
      description:
        "Java (Spring Boot), Python (Flask, FastAPI), React, Node.js, TypeScript, JavaScript, HTML5, CSS3, Chakra UI",
    },
    {
      title: "Backend & APIs",
      icon: FaCode,
      description: "Java, Python, Flask, FastAPI, RESTful APIs, JWT, SLF4J",
    },
    {
      title: "Database & Cloud",
      icon: FaCloud,
      description: "MySQL, SQLite, AWS (RDS, Glue), MongoDB, Docker, CI/CD",
    },
    {
      title: "AI/ML & Data",
      icon: FaBrain,
      description:
        "Hugging Face, scikit-learn, PyTorch, Apache Kafka, Data Mining, NLP",
    },
  ];

  return (
    <Box
      id="about"
      minH="100vh"
      py={20}
      bg="#000000"
      position="relative"
      overflow="hidden"
    >
      {/* Subtle geometric patterns */}
      <Box position="absolute" top={0} left={0} right={0} bottom={0} zIndex={0}>
        {/* Dot pattern */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          opacity={0.03}
          backgroundImage="radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.5) 1px, transparent 0)"
          backgroundSize="40px 40px"
        />
        {/* Diamond pattern */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          opacity={0.02}
          backgroundImage="repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255, 255, 255, 0.05) 20px, rgba(255, 255, 255, 0.05) 21px), repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255, 255, 255, 0.05) 20px, rgba(255, 255, 255, 0.05) 21px)"
        />
        {/* Radial gradient accent */}
        <Box
          position="absolute"
          top="-20%"
          right="-10%"
          w="800px"
          h="800px"
          borderRadius="50%"
          bgGradient="radial(circle, rgba(255, 255, 255, 0.03), transparent)"
          filter="blur(100px)"
        />
      </Box>

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
                fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
                color="white"
                fontWeight="700"
                letterSpacing="0.1em"
                textTransform="uppercase"
                fontFamily="'Space Grotesk', sans-serif"
              >
                About
              </Heading>
              <Text
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                color="gray.400"
                maxW="4xl"
                mx="auto"
                lineHeight="1.8"
                letterSpacing="0.05em"
                textTransform="uppercase"
                fontFamily="'Space Grotesk', sans-serif"
              >
                I'm a Computer Science student at the University of Texas at
                Arlington with a passion for building scalable full-stack
                (Java/Python) applications and exploring AI/ML technologies. With a
                CGPA of 3.73, I'm committed to creating impactful software
                solutions that make a difference.
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
                  bg="rgba(20, 20, 20, 0.8)"
                  backdropFilter="blur(20px)"
                  border="1px solid"
                  borderColor="rgba(255, 255, 255, 0.2)"
                  borderRadius="2xl"
                  _hover={{
                    borderColor: "rgba(255, 255, 255, 0.4)",
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 60px rgba(255, 255, 255, 0.1)",
                  }}
                  transition="all 0.4s ease"
                >
                  {/* Top accent line */}
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    h="3px"
                    bgGradient="linear(to-r, transparent, #ffffff, transparent)"
                    opacity={0.5}
                  />
                  <VStack
                    spacing={4}
                    align="start"
                    position="relative"
                    zIndex={1}
                  >
                    <HStack spacing={4}>
                      <Box
                        p={3}
                        borderRadius="xl"
                        bg="rgba(255, 255, 255, 0.1)"
                        border="2px solid"
                        borderColor="rgba(255, 255, 255, 0.3)"
                        boxShadow="0 8px 25px rgba(255, 255, 255, 0.1)"
                      >
                        <Icon as={skill.icon} w={8} h={8} color="white" />
                      </Box>
                      <Heading as="h3" size="md" color="white" fontWeight="700">
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
              bg="rgba(20, 20, 20, 0.8)"
              backdropFilter="blur(20px)"
              border="1px solid"
              borderColor="rgba(255, 255, 255, 0.2)"
              borderRadius="2xl"
              position="relative"
            >
              {/* Corner accent */}
              <Box
                position="absolute"
                top={0}
                left={0}
                w="100px"
                h="100px"
                borderTop="3px solid"
                borderLeft="3px solid"
                borderColor="rgba(255, 255, 255, 0.3)"
                borderRadius="2xl 0 0 0"
              />
              <VStack spacing={6} align="start" position="relative" zIndex={1}>
                <HStack spacing={4}>
                  <Box
                    p={4}
                    borderRadius="xl"
                    bg="rgba(255, 255, 255, 0.1)"
                    border="2px solid"
                    borderColor="rgba(255, 255, 255, 0.3)"
                    boxShadow="0 8px 25px rgba(255, 255, 255, 0.1)"
                  >
                    <Icon as={FaGraduationCap} w={10} h={10} color="white" />
                  </Box>
                  <Heading as="h3" size="lg" color="white" fontWeight="700">
                    Education & Background
                  </Heading>
                </HStack>
                <VStack align="start" spacing={4} color="gray.300">
                  <Text lineHeight="1.8" fontSize="md">
                    Currently pursuing a{" "}
                    <strong style={{ color: "#ffffff", fontWeight: 700 }}>
                      Bachelor of Science in Computer Science
                    </strong>{" "}
                    at the
                    <strong style={{ color: "#e5e5e5", fontWeight: 700 }}>
                      {" "}
                      University of Texas at Arlington
                    </strong>
                    , expected to graduate in December 2026. Maintaining a CGPA
                    of 3.73 while actively engaging in research, internships,
                    and real-world projects.
                  </Text>
                  <Text lineHeight="1.8" fontSize="md">
                    My experience spans from building full-stack (Python)
                    applications like{" "}
                    <strong style={{ color: "#ffffff", fontWeight: 700 }}>
                      MavThread
                    </strong>{" "}
                    (a university discussion platform) to developing Android
                    applications and working on AI/ML research projects. I'm
                    passionate about creating scalable, efficient solutions that
                    solve real-world problems.
                  </Text>
                  <HStack spacing={3} flexWrap="wrap" pt={2}>
                    <Badge
                      bg="rgba(255, 255, 255, 0.1)"
                      color="#ffffff"
                      border="1px solid"
                      borderColor="rgba(255, 255, 255, 0.3)"
                      fontSize="sm"
                      px={4}
                      py={2}
                      borderRadius="full"
                      fontWeight="600"
                    >
                      Full Stack Development (Python)
                    </Badge>
                    <Badge
                      bg="rgba(229, 229, 229, 0.1)"
                      color="#e5e5e5"
                      border="1px solid"
                      borderColor="rgba(229, 229, 229, 0.3)"
                      fontSize="sm"
                      px={4}
                      py={2}
                      borderRadius="full"
                      fontWeight="600"
                    >
                      AI/ML Research
                    </Badge>
                    <Badge
                      bg="rgba(212, 212, 212, 0.1)"
                      color="#d4d4d4"
                      border="1px solid"
                      borderColor="rgba(212, 212, 212, 0.3)"
                      fontSize="sm"
                      px={4}
                      py={2}
                      borderRadius="full"
                      fontWeight="600"
                    >
                      Cloud Computing
                    </Badge>
                    <Badge
                      bg="rgba(163, 163, 163, 0.1)"
                      color="#a3a3a3"
                      border="1px solid"
                      borderColor="rgba(163, 163, 163, 0.3)"
                      fontSize="sm"
                      px={4}
                      py={2}
                      borderRadius="full"
                      fontWeight="600"
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
