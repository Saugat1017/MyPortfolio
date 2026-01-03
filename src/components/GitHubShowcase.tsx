import { Box, Container, Heading, Text, VStack, HStack, Button, Link, Icon, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaStar, FaCodeBranch, FaArrowRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';

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
      bgGradient="linear(to-b, #0a0e1a, #0f172a)"
    >
      {/* Animated background elements */}
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
          bg="rgba(59, 130, 246, 0.1)"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
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
          bg="rgba(99, 102, 241, 0.1)"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
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
              <Icon as={FaGithub} boxSize={10} color="#3b82f6" />
              <Heading
                fontSize={{ base: "3xl", md: "5xl" }}
                fontWeight="bold"
                bgGradient="linear(to-r, #3b82f6, #6366f1)"
                bgClip="text"
              >
                Explore My GitHub
              </Heading>
            </HStack>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.300"
              maxW="2xl"
              mx="auto"
              lineHeight="1.8"
            >
              I've built numerous projects across different domains - from machine learning and full-stack applications 
              to mobile apps and web development. Each repository represents a learning journey and a solution to real-world problems.
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
                className="modern-card"
                textAlign="center"
              >
                <Icon as={FaCode} boxSize={12} color="#3b82f6" mb={4} />
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
                className="modern-card"
                textAlign="center"
              >
                <Icon as={FaStar} boxSize={12} color="#6366f1" mb={4} />
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
                className="modern-card"
                textAlign="center"
              >
                <Icon as={FaCodeBranch} boxSize={12} color="#818cf8" mb={4} />
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
                bgGradient="linear(to-r, #3b82f6, indigo.600)"
                color="white"
                _hover={{
                  bgGradient: "linear(to-r, blue.600, indigo.700)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)",
                }}
                transition="all 0.3s ease"
                px={8}
                py={6}
                fontSize="lg"
                borderRadius="xl"
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

