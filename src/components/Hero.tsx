import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Button,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";

const MotionBox = motion(Box);

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const roles = [
    "Full Stack Developer",
    "Machine Learning Engineer",
    "AI/ML Enthusiast",
    "Software Engineer",
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // Typing animation effect
  useEffect(() => {
    const fullText = roles[currentRole];
    let currentIndex = 0;
    setDisplayText("");

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
      bg="#000000"
      pt={20}
    >
      {/* Subtle background patterns */}
      <Box position="absolute" top="0" left="0" right="0" bottom="0" zIndex={0}>
        {/* Grid pattern */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          opacity={0.03}
          backgroundImage="linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)"
          backgroundSize="60px 60px"
        />
        {/* Diagonal lines */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          opacity={0.02}
          backgroundImage="repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(255, 255, 255, 0.05) 100px, rgba(255, 255, 255, 0.05) 200px)"
        />
        {/* Radial gradient overlay */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bgGradient="radial(circle at 30% 50%, rgba(255, 255, 255, 0.03), transparent)"
        />
      </Box>

      <Container
        maxW="container.xl"
        position="relative"
        zIndex={1}
        px={{ base: 6, md: 8 }}
      >
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={12}
          alignItems="center"
          minH="80vh"
        >
          {/* Left Section - Text Content */}
          <VStack align="flex-start" spacing={8} textAlign="left">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Text
                fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
                fontWeight="700"
                color="white"
                lineHeight="1"
                letterSpacing="0.05em"
                textTransform="uppercase"
                fontFamily="'Space Grotesk', sans-serif"
              >
                SAUGAT BHATTA
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
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                fontWeight="500"
                color="gray.300"
                letterSpacing="0.1em"
                textTransform="uppercase"
                fontFamily="'Space Grotesk', sans-serif"
              >
                {displayText}
                <Box
                  as="span"
                  display="inline-block"
                  w="3px"
                  h="1em"
                  bg="#ffffff"
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
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                color="gray.400"
                lineHeight="1.8"
                letterSpacing="0.02em"
                textTransform="uppercase"
                fontFamily="'Space Grotesk', sans-serif"
                maxW="600px"
              >
                COMPUTER SCIENCE STUDENT AT UT ARLINGTON (GPA: 3.73) | BUILDING
                SCALABLE FULL-STACK APPLICATIONS WITH JAVA(SPRING BOOT), PYTHON(FLASK, FASTAPI) & AWS | PASSIONATE ABOUT MACHINE LEARNING, AI/ML
                BOOT, PYTHON & AWS 
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
                  bg="#ffffff"
                  color="#000000"
                  size="lg"
                  px={8}
                  py={6}
                  borderRadius="md"
                  fontSize="md"
                  fontWeight="600"
                  onClick={scrollToContact}
                  cursor="pointer"
                  _hover={{
                    bg: "#e5e5e5",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 20px rgba(255, 255, 255, 0.3)",
                  }}
                  transition="all 0.3s ease"
                >
                  Hire Me
                </Button>
                <Button
                  variant="outline"
                  borderColor="#ffffff"
                  color="#ffffff"
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
                    bg: "#ffffff",
                    color: "#000000",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 20px rgba(255, 255, 255, 0.2)",
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
                  borderColor="#ffffff"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="#ffffff"
                  _hover={{
                    bg: "#ffffff",
                    color: "#000000",
                    transform: "translateY(-3px)",
                    boxShadow: "0 5px 15px rgba(255, 255, 255, 0.3)",
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
                  borderColor="#ffffff"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="#ffffff"
                  _hover={{
                    bg: "#ffffff",
                    color: "#000000",
                    transform: "translateY(-3px)",
                    boxShadow: "0 5px 15px rgba(255, 255, 255, 0.3)",
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
                  borderColor="#ffffff"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="#ffffff"
                  _hover={{
                    bg: "#ffffff",
                    color: "#000000",
                    transform: "translateY(-3px)",
                    boxShadow: "0 5px 15px rgba(255, 255, 255, 0.3)",
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
              maxW="600px"
              mx="auto"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {/* Circular Portrait Image - Bright and Colorful */}
              <Box
                position="relative"
                w={{ base: "350px", md: "450px", lg: "550px" }}
                h={{ base: "350px", md: "450px", lg: "550px" }}
                borderRadius="50%"
                overflow="hidden"
                boxShadow="0 0 0 4px rgba(255, 255, 255, 0.1), 0 20px 60px rgba(0, 0, 0, 0.5)"
                border="2px solid"
                borderColor="rgba(255, 255, 255, 0.1)"
              >
                <Box
                  as="img"
                  src={`/images/profile.jpg?t=${Date.now()}`}
                  alt="Saugat Bhatta"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  style={{
                    filter: "brightness(1.1) saturate(1.2)",
                    display: "block",
                  }}
                  onError={(
                    e: React.SyntheticEvent<HTMLImageElement, Event>
                  ) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/500x500/1a1a1a/ffffff?text=SB";
                  }}
                />
              </Box>
            </Box>
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Hero;
