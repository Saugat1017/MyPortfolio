import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Link,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaCode,
  FaStar,
  FaCodeBranch,
  FaArrowRight,
} from "react-icons/fa";
import { useEffect, useState } from "react";

const MotionBox = motion(Box);

const GitHubShowcase = () => {
  const [repos, setRepos] = useState(20); // Approximate number
  const [stars, setStars] = useState(0);

  useEffect(() => {
    // Animate counters
    const timer1 = setTimeout(() => setRepos(20), 500);
    const timer2 = setTimeout(() => setStars(15), 800);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <Box
      id="github-showcase"
      py={20}
      position="relative"
      overflow="hidden"
      bg="#000000"
    >
      {/* Animated background elements - monochrome */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        overflow="hidden"
        zIndex={0}
      >
        <MotionBox
          position="absolute"
          top="10%"
          right="10%"
          w="300px"
          h="300px"
          borderRadius="50%"
          bg="rgba(255, 255, 255, 0.03)"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          filter="blur(60px)"
        />
        <MotionBox
          position="absolute"
          bottom="10%"
          left="10%"
          w="400px"
          h="400px"
          borderRadius="50%"
          bg="rgba(255, 255, 255, 0.02)"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.02, 0.04, 0.02],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          filter="blur(80px)"
        />
      </Box>

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <VStack spacing={12}>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            textAlign="center"
          >
            <HStack spacing={3} justify="center" mb={4}>
              <Icon as={FaGithub} boxSize={10} color="#ffffff" />
              <Heading
                fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                fontWeight="700"
                color="white"
                letterSpacing="0.1em"
                textTransform="uppercase"
                fontFamily="'Space Grotesk', sans-serif"
              >
                GitHub
              </Heading>
            </HStack>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.300"
              maxW="2xl"
              mx="auto"
              lineHeight="1.8"
            >
              I've built numerous projects across different domains - from
              machine learning and full-stack (Python) applications and
              Java(SpringBoot) to mobile apps and web development. Each
              repository represents a learning journey and a solution to
              real-world problems.
            </Text>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="100%">
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                p={8}
                bg="rgba(20, 20, 20, 0.8)"
                backdropFilter="blur(20px)"
                border="1px solid"
                borderColor="rgba(255, 255, 255, 0.2)"
                borderRadius="2xl"
                textAlign="center"
                _hover={{
                  borderColor: "rgba(255, 255, 255, 0.4)",
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 60px rgba(255, 255, 255, 0.1)",
                }}
                transition="all 0.4s ease"
              >
                <Icon as={FaCode} boxSize={12} color="#ffffff" mb={4} />
                <Text fontSize="4xl" fontWeight="bold" color="white" mb={2}>
                  {repos}+
                </Text>
                <Text color="gray.300" fontSize="lg">
                  Public Repositories
                </Text>
              </Box>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                p={8}
                bg="rgba(20, 20, 20, 0.8)"
                backdropFilter="blur(20px)"
                border="1px solid"
                borderColor="rgba(255, 255, 255, 0.2)"
                borderRadius="2xl"
                textAlign="center"
                _hover={{
                  borderColor: "rgba(255, 255, 255, 0.4)",
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 60px rgba(255, 255, 255, 0.1)",
                }}
                transition="all 0.4s ease"
              >
                <Icon as={FaStar} boxSize={12} color="#e5e5e5" mb={4} />
                <Text fontSize="4xl" fontWeight="bold" color="white" mb={2}>
                  {stars}+
                </Text>
                <Text color="gray.300" fontSize="lg">
                  Stars Received
                </Text>
              </Box>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Box
                p={8}
                bg="rgba(20, 20, 20, 0.8)"
                backdropFilter="blur(20px)"
                border="1px solid"
                borderColor="rgba(255, 255, 255, 0.2)"
                borderRadius="2xl"
                textAlign="center"
                _hover={{
                  borderColor: "rgba(255, 255, 255, 0.4)",
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 60px rgba(255, 255, 255, 0.1)",
                }}
                transition="all 0.4s ease"
              >
                <Icon as={FaCodeBranch} boxSize={12} color="#d4d4d4" mb={4} />
                <Text fontSize="4xl" fontWeight="bold" color="white" mb={2}>
                  Active
                </Text>
                <Text color="gray.300" fontSize="lg">
                  Continuous Development
                </Text>
              </Box>
            </MotionBox>
          </SimpleGrid>

          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="https://github.com/Saugat1017" isExternal>
              <Button
                size="lg"
                rightIcon={<FaArrowRight />}
                bgGradient="linear(to-r, #ffffff, #e5e5e5)"
                color="#000000"
                _hover={{
                  bgGradient: "linear(to-r, #e5e5e5, #d4d4d4)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 25px rgba(255, 255, 255, 0.3)",
                }}
                transition="all 0.3s ease"
                px={8}
                py={6}
                fontSize="lg"
                borderRadius="xl"
                fontWeight="700"
              >
                View All Projects on GitHub
              </Button>
            </Link>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default GitHubShowcase;
