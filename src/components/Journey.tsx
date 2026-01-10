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
    color: "cyan",
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
    color: "purple",
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
    color: "pink",
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
    color: "blue",
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
    color: "green",
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Heading
            mb={12}
            fontSize={{ base: "4xl", md: "5xl" }}
            textAlign="center"
            bgGradient="linear(to-r, #3b82f6, #6366f1)"
            bgClip="text"
          >
            My Journey
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
                className="modern-card"
                _hover={{
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 60px rgba(59, 130, 246, 0.3)",
                }}
                transition="all 0.4s ease"
                h="100%"
              >
                <VStack align="stretch" spacing={4}>
                  <HStack spacing={3} justify="space-between" flexWrap="wrap">
                    <HStack spacing={3}>
                      <Box
                        p={2}
                        borderRadius="lg"
                        bgGradient={`linear-gradient(135deg, ${item.color === 'cyan' ? '#3b82f6' : item.color === 'purple' ? '#6366f1' : item.color === 'pink' ? '#2563eb' : '#818cf8'}, ${item.color === 'cyan' ? '#6366f1' : item.color === 'purple' ? '#2563eb' : item.color === 'pink' ? '#818cf8' : '#3b82f6'})`}
                      >
                        <Icon as={item.icon} boxSize={6} color="white" />
                      </Box>
                      <VStack align="start" spacing={0}>
                        <Heading size="md" color="white">
                          {item.title}
                        </Heading>
                        <Text color={`${item.color}.300`} fontSize="sm" fontWeight="500">
                          {item.organization}
                        </Text>
                      </VStack>
                    </HStack>
                    {item.gpa && (
                      <Badge 
                      bg={`rgba(${item.color === 'cyan' ? '244, 114, 182' : item.color === 'purple' ? '167, 139, 250' : item.color === 'pink' ? '236, 72, 153' : '192, 132, 252'}, 0.2)`}
                      color={`${item.color === 'cyan' ? '#3b82f6' : item.color === 'purple' ? '#6366f1' : item.color === 'pink' ? '#2563eb' : '#818cf8'}`}
                      border={`1px solid rgba(${item.color === 'cyan' ? '244, 114, 182' : item.color === 'purple' ? '167, 139, 250' : item.color === 'pink' ? '236, 72, 153' : '192, 132, 252'}, 0.4)`}
                      fontSize="sm" 
                      px={3} 
                      py={1}
                      borderRadius="full"
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
                          w="2" 
                          h="2" 
                          borderRadius="full" 
                          bg={`${item.color}.400`} 
                          mt={2} 
                          flexShrink={0} 
                        />
                        <Text key={i} color="whiteAlpha.900" fontSize="sm" lineHeight="1.7">
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
