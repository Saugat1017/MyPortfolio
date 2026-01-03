import { Box, Container, VStack, HStack, Text, Button, Icon, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const MotionBox = motion(Box);

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const roles = [
    "Full Stack Developer",
    "AI/ML Enthusiast",
    "Software Engineer",
    "Problem Solver"
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Typing animation effect
  useEffect(() => {
    const fullText = roles[currentRole];
    let currentIndex = 0;
    setDisplayText('');

    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentRole]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Cursor blink animation
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <Box
      id="home"
      minH="100vh"
      display="flex"
      alignItems="center"
      position="relative"
      overflow="hidden"
      bg="#0a0e1a"
      pt={20}
    >
      {/* Subtle background gradient */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient="radial(circle at 30% 50%, rgba(59, 130, 246, 0.1), transparent)"
        zIndex={0}
      />

      <Container maxW="container.xl" position="relative" zIndex={1} px={{ base: 6, md: 8 }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center" minH="80vh">
          {/* Left Section - Text Content */}
          <VStack align="flex-start" spacing={8} textAlign="left">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Text
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                color="white"
                lineHeight="1.1"
              >
                Hi, I'm{' '}
                <Box as="span" bgGradient="linear(to-r, #3b82f6, #60a5fa)" bgClip="text">
                  Saugat Bhatta
                </Box>
              </Text>
            </MotionBox>

            {/* Animated Role with Typing Effect */}
            <MotionBox
              key={currentRole}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              h="50px"
            >
              <Text
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="600"
                bgGradient="linear(to-r, #3b82f6, #06b6d4)"
                bgClip="text"
              >
                {displayText}
                <Box
                  as="span"
                  display="inline-block"
                  w="3px"
                  h="1em"
                  bgGradient="linear(to-r, #3b82f6, #06b6d4)"
                  ml={2}
                  opacity={showCursor ? 1 : 0}
                  transition="opacity 0.3s"
                  verticalAlign="baseline"
                />
              </Text>
            </MotionBox>

            {/* Description */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              maxW="600px"
            >
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.300"
                lineHeight="1.8"
              >
                Computer Science student at UT Arlington (GPA: 3.73) | Building scalable full-stack applications 
                with React, Spring Boot & AWS | Passionate about AI/ML and creating impactful software solutions
              </Text>
            </MotionBox>

            {/* Call-to-Action Buttons */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <HStack spacing={4} flexWrap="wrap">
                <Button
                  bg="#3b82f6"
                  color="white"
                  size="lg"
                  px={8}
                  py={6}
                  borderRadius="md"
                  fontSize="md"
                  fontWeight="600"
                  onClick={scrollToContact}
                  cursor="pointer"
                  _hover={{
                    bg: "#2563eb",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 20px rgba(59, 130, 246, 0.4)",
                  }}
                  transition="all 0.3s ease"
                >
                  Hire Me
                </Button>
                <Button
                  variant="outline"
                  borderColor="#3b82f6"
                  color="#3b82f6"
                  bg="transparent"
                  size="lg"
                  px={8}
                  py={6}
                  borderRadius="md"
                  fontSize="md"
                  fontWeight="600"
                  onClick={scrollToContact}
                  cursor="pointer"
                  _hover={{
                    bg: "#3b82f6",
                    color: "white",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 20px rgba(59, 130, 246, 0.3)",
                  }}
                  transition="all 0.3s ease"
                >
                  Let's Talk
                </Button>
              </HStack>
            </MotionBox>

            {/* Social Media Icons */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <HStack spacing={4}>
                <Box
                  as="a"
                  href="https://github.com/Saugat1017"
                  target="_blank"
                  rel="noopener noreferrer"
                  w="45px"
                  h="45px"
                  borderRadius="50%"
                  border="2px solid"
                  borderColor="#3b82f6"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="#3b82f6"
                  _hover={{
                    bg: "#3b82f6",
                    color: "white",
                    transform: "translateY(-3px)",
                    boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)",
                  }}
                  transition="all 0.3s ease"
                >
                  <Icon as={FaGithub} boxSize={5} />
                </Box>
                <Box
                  as="a"
                  href="https://www.linkedin.com/in/saugat-bhatta-01a595217"
                  target="_blank"
                  rel="noopener noreferrer"
                  w="45px"
                  h="45px"
                  borderRadius="50%"
                  border="2px solid"
                  borderColor="#06b6d4"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="#06b6d4"
                  _hover={{
                    bg: "#06b6d4",
                    color: "white",
                    transform: "translateY(-3px)",
                    boxShadow: "0 5px 15px rgba(6, 182, 212, 0.4)",
                  }}
                  transition="all 0.3s ease"
                >
                  <Icon as={FaLinkedin} boxSize={5} />
                </Box>
                <Box
                  as="a"
                  href="mailto:saugatbhatta1234@gmail.com"
                  w="45px"
                  h="45px"
                  borderRadius="50%"
                  border="2px solid"
                  borderColor="#10b981"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="#10b981"
                  _hover={{
                    bg: "#10b981",
                    color: "white",
                    transform: "translateY(-3px)",
                    boxShadow: "0 5px 15px rgba(16, 185, 129, 0.4)",
                  }}
                  transition="all 0.3s ease"
                >
                  <Icon as={FaEnvelope} boxSize={5} />
                </Box>
              </HStack>
            </MotionBox>
          </VStack>

          {/* Right Section - Portrait with Glowing Lines */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            position="relative"
            display={{ base: "none", lg: "block" }}
          >
            <Box
              position="relative"
              w="100%"
              maxW="500px"
              mx="auto"
            >
              {/* Portrait Image */}
              <Box
                position="relative"
                borderRadius="lg"
                overflow="hidden"
                filter="brightness(0.7)"
              >
                <Box
                  as="img"
                  src="/images/profile.jpg"
                  alt="Saugat Bhatta"
                  w="100%"
                  h="auto"
                  objectFit="cover"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    e.currentTarget.src = "https://via.placeholder.com/500x600/1a2332/3b82f6?text=SB";
                  }}
                />
                
                {/* Glowing Blue Lines Overlay */}
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  pointerEvents="none"
                >
                  {/* Vertical line 1 - Left cheek */}
                  <MotionBox
                    position="absolute"
                    left="25%"
                    top="30%"
                    w="3px"
                    h="120px"
                    bg="#3b82f6"
                    boxShadow="0 0 20px #3b82f6, 0 0 40px #3b82f6"
                    animate={{
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  {/* Vertical line 2 - Middle */}
                  <MotionBox
                    position="absolute"
                    left="30%"
                    top="25%"
                    w="3px"
                    h="100px"
                    bg="#06b6d4"
                    boxShadow="0 0 20px #06b6d4, 0 0 40px #06b6d4"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  />
                  {/* Vertical line 3 - Right */}
                  <MotionBox
                    position="absolute"
                    left="35%"
                    top="35%"
                    w="3px"
                    h="90px"
                    bg="#10b981"
                    boxShadow="0 0 20px #10b981, 0 0 40px #10b981"
                    animate={{
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />
                  {/* Horizontal line near eye */}
                  <MotionBox
                    position="absolute"
                    left="20%"
                    top="40%"
                    w="60px"
                    h="2px"
                    bg="#ec4899"
                    boxShadow="0 0 15px #ec4899, 0 0 30px #ec4899"
                    animate={{
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  {/* Eye glow effect */}
                  <MotionBox
                    position="absolute"
                    left="22%"
                    top="38%"
                    w="8px"
                    h="8px"
                    borderRadius="50%"
                    bg="#6366f1"
                    boxShadow="0 0 20px #6366f1, 0 0 40px #6366f1"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Hero;
