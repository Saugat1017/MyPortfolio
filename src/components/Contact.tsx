import { Box, Container, Heading, VStack, Text, Link, Icon, Button, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const MotionBox = motion(Box);

const contactData = {
  email: "saugatbhatta1234@gmail.com",
  github: "Saugat1017",
  linkedin: "saugat-bhatta-01a595217",
  website: "saugatdev.com",
  location: "Irving, Texas"
};

const Contact = () => {
  return (
    <Box
      id="contact"
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
        bgGradient="radial(circle at 50% 50%, rgba(255, 0, 255, 0.1), transparent)"
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
            mb={16}
            fontSize={{ base: "4xl", md: "5xl" }}
            textAlign="center"
            bgGradient="linear(to-r, #3b82f6, #6366f1)"
            bgClip="text"
          >
            Get In Touch
          </Heading>
        </motion.div>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <VStack align="flex-start" spacing={8}>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                color="whiteAlpha.900"
                lineHeight="1.8"
              >
                I'm always open to new opportunities, collaborations, and conversations about technology, 
                AI/ML, or software development. Whether you have a project in mind or just want to connect, 
                I'd love to hear from you!
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="100%">
                <Box
                  p={6}
                  className="glass-card"
                >
                  <VStack align="flex-start" spacing={3}>
                    <Icon as={FaEnvelope} boxSize={6} color="#3b82f6" />
                    <Text color="white" fontWeight="bold">Email</Text>
                    <Text color="whiteAlpha.900" fontSize="sm">{contactData.email}</Text>
                  </VStack>
                </Box>

                <Box
                  p={6}
                  className="glass-card"
                >
                  <VStack align="flex-start" spacing={3}>
                    <Icon as={FaMapMarkerAlt} boxSize={6} color="#6366f1" />
                    <Text color="white" fontWeight="bold">Location</Text>
                    <Text color="whiteAlpha.900" fontSize="sm">{contactData.location}</Text>
                  </VStack>
                </Box>
              </SimpleGrid>
            </VStack>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <VStack spacing={6} w="100%">
              <Link 
                href={`mailto:${contactData.email}?subject=Getting%20in%20Touch&body=Hi%20Saugat,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect%20about...`} 
                w="100%"
                isExternal
              >
                <Button
                  leftIcon={<FaEnvelope />}
                  w="100%"
                  h="70px"
                  fontSize="xl"
                  bgGradient="linear(to-r, #3b82f6, #6366f1)"
                  color="white"
                  _hover={{
                    bgGradient: "linear(to-r, blue.600, indigo.700)",
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.3s ease"
                >
                  Send me an email
                </Button>
              </Link>

              <Link href={`https://github.com/${contactData.github}`} isExternal w="100%">
                <Button
                  leftIcon={<FaGithub />}
                  w="100%"
                  h="70px"
                  fontSize="xl"
                  variant="outline"
                  borderColor="#3b82f6"
                  borderWidth="2px"
                  color="white"
                  _hover={{
                    bg: "#3b82f6",
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.3s ease"
                >
                  Check my GitHub
                </Button>
              </Link>

              <Link href={`https://www.linkedin.com/in/${contactData.linkedin}`} isExternal w="100%">
                <Button
                  leftIcon={<FaLinkedin />}
                  w="100%"
                  h="70px"
                  fontSize="xl"
                  variant="outline"
                  borderColor="#6366f1"
                  borderWidth="2px"
                  color="white"
                  _hover={{
                    bg: "#6366f1",
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.3s ease"
                >
                  Connect on LinkedIn
                </Button>
              </Link>
            </VStack>
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Contact; 