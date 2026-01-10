import { Box, Container, Heading, VStack, Text, SimpleGrid, Badge, HStack, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';

const MotionBox = motion(Box);

const journeyData = [
  {
    title: "Bachelor of Science in Computer Science",
    organization: "University of Texas at Arlington",
    period: "Aug 2024 - Dec 2026 (Expected)",
    gpa: "CGPA: 3.73",
    icon: FaGraduationCap,
    description: [
      "Pursuing B.S. in Computer Science with focus on Full Stack Development (Python), AI/ML, and Software Engineering",
      "Relevant Coursework: Algorithms & Data Structures, Operating Systems, Database Systems, AI, Machine Learning, Computer Vision, Data Mining, Computer Networks, NLP",
      "Academic Honors: Honor Roll, Freshman Distinction Roll",
      "Active in research projects and internships while maintaining strong academic performance"
    ]
  },
  {
    title: "Dallas AI Summer Program",
    organization: "Dallas AI",
    period: "Jun 2025 - Aug 2025",
    icon: FaBriefcase,
    description: [
      "Built a secure full-stack (Python) platform using Spring Boot and React with JWT authentication",
      "Enabled real-time AI-powered chat guidance for 100+ simulated users in emotional eating support scenarios",
      "Researched and implemented ML models with Hugging Face Transformers",
      "Achieved 87% classification accuracy across 1,500+ annotated food-mood records for detecting emotional vs. physical hunger patterns"
    ]
  },
  {
    title: "OURCS@DFW Research Assistant",
    organization: "University of Texas at Arlington",
    period: "Feb 2025 - Mar 2025",
    icon: FaCode,
    description: [
      "Designed adversarial test cases for transformer-based summarization models",
      "Identified and fixed vulnerabilities that improved output robustness by 30%",
      "Evaluated 100+ summaries using custom heuristics and comparative metrics",
      "Contributed to Runner-Up award at regional research symposium"
    ]
  },
  {
    title: "Computer Lab Assistant",
    organization: "SUNY Oswego",
    period: "Aug 2022 - Dec 2022",
    icon: FaBriefcase,
    description: [
      "Delivered technical support to 100+ users weekly, resolving Java code, software, and connectivity issues",
      "Achieved 92% average resolution rate and reduced lab downtime by 25% through proactive diagnostics",
      "Trained 50+ students and faculty on IDEs, version control, and productivity tools",
      "Improved software proficiency by 40% and increased lab efficiency by 30%"
    ]
  },
  {
    title: "Previous Education",
    organization: "SUNY Oswego / Dallas College",
    period: "2022 - 2024",
    icon: FaGraduationCap,
    description: [
      "Completed foundational coursework in Computer Science",
      "Transferred credits to UT Arlington",
      "Gained experience in Data Structures, Algorithms, and Programming Fundamentals"
    ]
  }
];

const Journey = () => {
  return (
    <Box
      id="journey"
      minH="100vh"
      py={20}
      bg="#0a0a0a"
      position="relative"
      overflow="hidden"
    >
      {/* Subtle background patterns */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={0}
      >
        {/* Diagonal lines pattern */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          opacity={0.02}
          backgroundImage="repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 255, 255, 0.5) 10px, rgba(255, 255, 255, 0.5) 20px)"
        />
        {/* Cross pattern */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          opacity={0.015}
          backgroundImage="repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255, 255, 255, 0.1) 50px, rgba(255, 255, 255, 0.1) 51px), repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255, 255, 255, 0.1) 50px, rgba(255, 255, 255, 0.1) 51px)"
        />
        {/* Timeline-style dots */}
        <Box
          position="absolute"
          left="15%"
          top={0}
          bottom={0}
          w="2px"
          bgGradient="linear(to-b, transparent, rgba(255, 255, 255, 0.1), transparent)"
        />
      </Box>

      <Container maxW="container.xl" position="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Heading
            mb={12}
            fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
            textAlign="center"
            color="white"
            fontWeight="700"
            letterSpacing="0.1em"
            textTransform="uppercase"
            fontFamily="'Space Grotesk', sans-serif"
          >
            Journey
          </Heading>
        </motion.div>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
          {journeyData.map((item, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                p={8}
                bg="rgba(20, 20, 20, 0.8)"
                backdropFilter="blur(20px)"
                border="1px solid"
                borderColor="rgba(255, 255, 255, 0.2)"
                borderRadius="2xl"
                position="relative"
                _hover={{
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 60px rgba(255, 255, 255, 0.1)",
                  borderColor: "rgba(255, 255, 255, 0.4)",
                }}
                transition="all 0.4s ease"
                h="100%"
              >
                {/* Left border accent */}
                <Box
                  position="absolute"
                  left={0}
                  top="20%"
                  bottom="20%"
                  w="4px"
                  bgGradient="linear(to-b, transparent, #ffffff, transparent)"
                  opacity={0.5}
                  borderRadius="0 4px 4px 0"
                />
                <VStack align="stretch" spacing={4}>
                  <HStack spacing={3} justify="space-between" flexWrap="wrap">
                    <HStack spacing={3}>
                      <Box
                        p={2}
                        borderRadius="lg"
                        bg="rgba(255, 255, 255, 0.1)"
                        border="2px solid"
                        borderColor="rgba(255, 255, 255, 0.3)"
                        boxShadow="0 4px 15px rgba(255, 255, 255, 0.1)"
                      >
                        <Icon as={item.icon} boxSize={6} color="white" />
                      </Box>
                      <VStack align="start" spacing={0}>
                        <Heading size="md" color="white" fontWeight="700">
                          {item.title}
                        </Heading>
                        <Text color="gray.400" fontSize="sm" fontWeight="500">
                          {item.organization}
                        </Text>
                      </VStack>
                    </HStack>
                    {item.gpa && (
                      <Badge 
                        bg="rgba(255, 255, 255, 0.1)" 
                        color="#ffffff" 
                        border="1px solid"
                        borderColor="rgba(255, 255, 255, 0.3)"
                        fontSize="sm" 
                        px={3} 
                        py={1}
                        borderRadius="full"
                        fontWeight="600"
                      >
                        {item.gpa}
                      </Badge>
                    )}
                  </HStack>

                  <Text color="gray.400" fontSize="sm" fontWeight="500">
                    {item.period}
                  </Text>

                  <VStack align="start" spacing={2} pt={2}>
                    {item.description.map((desc, i) => (
                      <HStack key={i} spacing={2} align="flex-start">
                        <Box 
                          w="6px" 
                          h="6px" 
                          borderRadius="full" 
                          bg="#ffffff" 
                          mt={2} 
                          flexShrink={0}
                          boxShadow="0 0 8px rgba(255, 255, 255, 0.5)"
                        />
                        <Text color="whiteAlpha.900" fontSize="sm" lineHeight="1.7">
                          {desc}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                </VStack>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Journey;
