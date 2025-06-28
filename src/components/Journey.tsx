import { Box, Container, Heading, VStack, Text, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const journeyData = [
  
  {
    title: "Bachelor of Science in Computer Science",
    organization: "University of Texas at Arlington",
    period: " Aug 2024 - Present",
    description: [
      "Conducted research on machine learning applications in healthcare",
      "Developed ML models for medical image analysis",
      "Published research findings and presented at academic conferences",
      "Work Experience : Student Researcher at UT Arlington , Math LRC Tutor, Student Enrollment Assistant"
    ]
  },
  {
    title: "Associates of Science in Computer Science",
    organization: "Dallas College",
    period: "Jan 2023 - May 2024",
    description: [
      "President's List Recognition",
      "Relevant Coursework: Data Structures, Algorithms, Machine Learning, Web Development"
    ]
  },
  {
    title: "Bachelor of Science in Computer Science",
    organization: "SUNY Oswego",
    period: "Jan 2022 - Dec 2022",
    description: [
      "Relevant Coursework: Data Structures, Algorithms, Web Development",
      "Work Experience: Managed tech support for 100+ faculty, staff, and students, Desk Attendant, Computer Lab Technician at CTS",
      "Collaborated with cross-functional Managed tech support for 100+ faculty, staff,and students"
    ] 
  }
];

const Journey = () => {
  return (
    <Box
      id="journey"
      minH="100vh"
      py={20}
      bgGradient="linear(to-b, gray.900, gray.800)"
      position="relative"
      overflow="hidden"
    >
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
            bgGradient="linear(to-r, cyan.400, purple.500)"
            bgClip="text"
          >
            My Journey
          </Heading>
        </motion.div>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {journeyData.map((item, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                p={6}
                borderRadius="xl"
                bg="whiteAlpha.100"
                backdropFilter="blur(10px)"
                border="1px solid"
                borderColor="whiteAlpha.200"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "xl",
                }}
                transition="all 0.3s ease"
              >
                <Heading size="md" color="cyan.400" mb={2}>
                  {item.title}
                </Heading>
                <Text color="purple.300" fontSize="sm" mb={4}>
                  {item.organization} | {item.period}
                </Text>
                <VStack align="start" spacing={2}>
                  {item.description.map((desc, i) => (
                    <Text key={i} color="whiteAlpha.900">
                      • {desc}
                    </Text>
                  ))}
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