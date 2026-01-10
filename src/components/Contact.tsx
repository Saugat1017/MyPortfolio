import { Box, Container, Heading, VStack, Text, Link, Icon, Button, SimpleGrid, HStack, Circle } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const MotionBox = motion(Box);

const contactData = {
  email: "saugatbhatta1234@gmail.com",
  github: "Saugat1017",
  linkedin: "saugat-bhatta-01a595217",
  location: "Irving, Texas"
};

const Contact = () => {
  return (
    <Box
      id="contact"
      minH="100vh"
      py={{ base: 16, md: 24 }}
      bg="#000000"
      position="relative"
      overflow="hidden"
    >
      {/* Background Elements */}
      <Box
        position="absolute"
        top="20%"
        right="10%"
        w="400px"
        h="400px"
        borderRadius="50%"
        bgGradient="radial(circle, rgba(255, 255, 255, 0.05), transparent)"
        filter="blur(80px)"
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="20%"
        left="10%"
        w="300px"
        h="300px"
        borderRadius="50%"
        bgGradient="radial(circle, rgba(255, 255, 255, 0.03), transparent)"
        filter="blur(60px)"
        zIndex={0}
      />

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
              Get In Touch
            </Heading>
            <Text
              color="gray.400"
              fontSize={{ base: "md", md: "lg" }}
              maxW="2xl"
            >
              I'm always open to new opportunities, collaborations, and conversations about technology
            </Text>
          </VStack>
        </motion.div>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
          {/* Left Side - Info Cards */}
          <VStack spacing={6} align="stretch">
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Box
                p={8}
                borderRadius="2xl"
                bg="rgba(20, 20, 20, 0.8)"
                backdropFilter="blur(20px)"
                border="1px solid"
                borderColor="rgba(255, 255, 255, 0.2)"
                _hover={{
                  borderColor: "rgba(255, 255, 255, 0.4)",
                  transform: "translateY(-4px)",
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)",
                }}
                transition="all 0.4s ease"
              >
                <HStack spacing={4} mb={4}>
                  <Circle
                    size="50px"
                    bgGradient="linear(135deg, #ffffff, #e5e5e5)"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={FaEnvelope} boxSize={5} color="white" />
                  </Circle>
                  <VStack align="flex-start" spacing={1}>
                    <Text color="gray.400" fontSize="sm" fontWeight="600" textTransform="uppercase" letterSpacing="wide">
                      Email
                    </Text>
                    <Link
                      href={`mailto:${contactData.email}`}
                      color="white"
                      fontSize="md"
                      fontWeight="600"
                      _hover={{ color: "#e5e5e5", textDecoration: "none" }}
                    >
                      {contactData.email}
                    </Link>
                  </VStack>
                </HStack>
              </Box>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                p={8}
                borderRadius="2xl"
                bg="rgba(20, 20, 20, 0.8)"
                backdropFilter="blur(20px)"
                border="1px solid"
                borderColor="rgba(255, 255, 255, 0.2)"
                _hover={{
                  borderColor: "rgba(255, 255, 255, 0.4)",
                  transform: "translateY(-4px)",
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)",
                }}
                transition="all 0.4s ease"
              >
                <HStack spacing={4} mb={4}>
                  <Circle
                    size="50px"
                    bgGradient="linear(135deg, #e5e5e5, #d4d4d4)"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={FaMapMarkerAlt} boxSize={5} color="white" />
                  </Circle>
                  <VStack align="flex-start" spacing={1}>
                    <Text color="gray.400" fontSize="sm" fontWeight="600" textTransform="uppercase" letterSpacing="wide">
                      Location
                    </Text>
                    <Text color="white" fontSize="md" fontWeight="600">
                      {contactData.location}
                    </Text>
                  </VStack>
                </HStack>
              </Box>
            </MotionBox>
          </VStack>

          {/* Right Side - Action Buttons */}
          <VStack spacing={6} align="stretch">
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link
                href={`mailto:${contactData.email}?subject=Getting%20in%20Touch&body=Hi%20Saugat,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect%20about...`}
                w="100%"
                isExternal
                _hover={{ textDecoration: "none" }}
              >
                <Button
                  leftIcon={<FaPaperPlane />}
                  w="100%"
                  h="70px"
                  fontSize="lg"
                  fontWeight="700"
                  bgGradient="linear(to-r, #ffffff, #e5e5e5)"
                  color="#000000"
                  borderRadius="xl"
                  _hover={{
                    bgGradient: "linear(to-r, #e5e5e5, #d4d4d4)",
                    transform: "translateY(-4px)",
                    boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)",
                  }}
                  transition="all 0.3s ease"
                >
                  Send me an Email
                </Button>
              </Link>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={`https://github.com/${contactData.github}`}
                isExternal
                w="100%"
                _hover={{ textDecoration: "none" }}
              >
                <Button
                  leftIcon={<FaGithub />}
                  w="100%"
                  h="70px"
                  fontSize="lg"
                  fontWeight="700"
                  variant="outline"
                  borderColor="rgba(255, 255, 255, 0.3)"
                  borderWidth="2px"
                  color="#ffffff"
                  bg="transparent"
                  borderRadius="xl"
                  _hover={{
                    bg: "rgba(255, 255, 255, 0.1)",
                    borderColor: "#ffffff",
                    color: "#ffffff",
                    transform: "translateY(-4px)",
                  }}
                  transition="all 0.3s ease"
                >
                  View GitHub Profile
                </Button>
              </Link>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                href={`https://www.linkedin.com/in/${contactData.linkedin}`}
                isExternal
                w="100%"
                _hover={{ textDecoration: "none" }}
              >
                <Button
                  leftIcon={<FaLinkedin />}
                  w="100%"
                  h="70px"
                  fontSize="lg"
                  fontWeight="700"
                  variant="outline"
                  borderColor="rgba(255, 255, 255, 0.3)"
                  borderWidth="2px"
                  color="#e5e5e5"
                  bg="transparent"
                  borderRadius="xl"
                  _hover={{
                    bg: "rgba(255, 255, 255, 0.1)",
                    borderColor: "#ffffff",
                    color: "#ffffff",
                    transform: "translateY(-4px)",
                  }}
                  transition="all 0.3s ease"
                >
                  Connect on LinkedIn
                </Button>
              </Link>
            </MotionBox>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Contact;
