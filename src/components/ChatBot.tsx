import { useState } from 'react';
import { Box, IconButton, Input, VStack, Text, Flex, useDisclosure } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

const ChatBot = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "Hi! I'm Saugat's AI assistant. Ask me about his education, skills, projects, or experience!", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, isBot: false }]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const response = getBotResponse(input);
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 1000);
  };

  const getBotResponse = (question: string) => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('education')) {
      return "Saugat is currently pursuing a Bachelor of Science in Computer Science at the University of Texas at Arlington, expected to graduate in December 2026. He maintains a CGPA of 3.73 and has been recognized on the Honor Roll and Freshman Distinction Roll.";
    }
    
    if (lowerQuestion.includes('skills') || lowerQuestion.includes('technologies')) {
      return "Saugat is skilled in:\n• Languages: Java, Python, C/C++, SQL, JavaScript, HTML/CSS, Go, R\n• Frameworks: Spring Boot, React, Node.js, Flask, FastAPI, Android SDK\n• Data Tools: MySQL, SQLite, Apache Kafka, AWS Glue ETL\n• Cloud & Tools: AWS (RDS), Docker, Git, CI/CD Pipelines\n• ML/AI: Hugging Face, scikit-learn, PyTorch, NLP";
    }
    
    if (lowerQuestion.includes('projects')) {
      return "Here are Saugat's notable projects:\n1. MavThread - Full-stack (Python) university discussion platform (React, Spring Boot, AWS RDS)\n2. Fitness Tracker App - Android app with GPS and analytics (Java, Android SDK)\n3. Farm Data Management System - C-based trading system\n4. Dallas AI - Emotional eating support platform with ML models (87% accuracy)\n5. OURCS@DFW Research - Transformer-based summarization research";
    }
    
    if (lowerQuestion.includes('experience') || lowerQuestion.includes('work')) {
      return "Saugat's experience includes:\n• Dallas AI Summer Program (Jun 2025 - Aug 2025) - Built full-stack (Python) AI platform\n• OURCS@DFW Research Assistant at UT Arlington (Feb 2025 - Mar 2025)\n• Computer Lab Assistant at SUNY Oswego (Aug 2022 - Dec 2022) - 92% resolution rate";
    }

    if (lowerQuestion.includes('certificates') || lowerQuestion.includes('certifications')) {
      return "Saugat has earned:\n• CodePath: Intermediate Technical Interview Prep\n• Amazon: Application Development Certificate\n• Paycom: Technology Summer Engagement Program\n• Volunteer: IT Systems Monitoring – ASNEngr Program (NYC)";
    }

    if (lowerQuestion.includes('contact') || lowerQuestion.includes('hire') || lowerQuestion.includes('email') || lowerQuestion.includes('linkedin') || lowerQuestion.includes('github')) {
      return "Get in touch with Saugat:\n• Email: saugatbhatta1234@gmail.com\n• GitHub: github.com/Saugat1017\n• LinkedIn: linkedin.com/in/saugat-bhatta-01a595217\n• Website: saugatdev.com\n• Location: Irving, Texas";
    }

    return "I can tell you about Saugat's education, skills, projects, experience, or certifications. What would you like to know?";
  };

  return (
    <Box position="fixed" bottom={0} right={0} zIndex={9999}>
      <IconButton
        aria-label="Chat"
        icon={<FaRobot />}
        position="fixed"
        bottom="2rem"
        right="2rem"
        borderRadius="full"
        size="lg"
        bgGradient="linear(135deg, #ffffff, #e5e5e5)"
        color="#000000"
        _hover={{
          transform: 'scale(1.1)',
          bgGradient: "linear(135deg, #e5e5e5, #d4d4d4)",
          boxShadow: "0 8px 25px rgba(255, 255, 255, 0.3)",
        }}
        onClick={onToggle}
        zIndex={9999}
        border="2px solid"
        borderColor="rgba(0, 0, 0, 0.2)"
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.3 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              bottom: '6rem',
              right: '2rem',
              zIndex: 9999,
            }}
          >
            <Box
              width="300px"
              height="400px"
              bg="rgba(0, 0, 0, 0.95)"
              borderRadius="xl"
              overflow="hidden"
              border="2px solid"
              borderColor="rgba(255, 255, 255, 0.2)"
              backdropFilter="blur(10px)"
              boxShadow="0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 255, 255, 0.1)"
            >
              <Flex 
                p={3} 
                bgGradient="linear(135deg, #ffffff, #e5e5e5)"
                color="#000000"
                justify="space-between" 
                align="center"
              >
                <Text fontWeight="bold">Chat with AI Assistant</Text>
                <IconButton
                  aria-label="Close"
                  icon={<FaTimes />}
                  size="sm"
                  variant="ghost"
                  color="#000000"
                  onClick={onToggle}
                />
              </Flex>

              <VStack 
                h="calc(100% - 110px)" 
                p={4} 
                spacing={4} 
                overflowY="auto"
                css={{
                  '&::-webkit-scrollbar': {
                    width: '4px',
                  },
                  '&::-webkit-scrollbar-track': {
                    background: 'rgba(0, 0, 0, 0.1)',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    background: 'rgba(255, 255, 255, 0.3)',
                    borderRadius: '2px',
                  },
                }}
              >
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: '100%' }}
                  >
                    <Box
                      alignSelf={msg.isBot ? 'flex-start' : 'flex-end'}
                      bg={msg.isBot ? 'rgba(255, 255, 255, 0.1)' : 'rgba(229, 229, 229, 0.2)'}
                      color="white"
                      p={3}
                      borderRadius="lg"
                      maxW="80%"
                      marginLeft={msg.isBot ? 0 : 'auto'}
                      whiteSpace="pre-line"
                      border="1px solid"
                      borderColor={msg.isBot ? 'rgba(255, 255, 255, 0.1)' : 'rgba(229, 229, 229, 0.2)'}
                    >
                      {msg.text}
                    </Box>
                  </motion.div>
                ))}
              </VStack>

              <Flex p={3} borderTop="1px solid" borderColor="rgba(255, 255, 255, 0.1)" bg="rgba(0, 0, 0, 0.8)">
                <Input
                  placeholder="Type a message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  bg="rgba(255, 255, 255, 0.1)"
                  border="1px solid"
                  borderColor="rgba(255, 255, 255, 0.2)"
                  color="white"
                  _placeholder={{ color: 'rgba(255, 255, 255, 0.5)' }}
                  mr={2}
                />
                <IconButton
                  aria-label="Send"
                  icon={<FaPaperPlane />}
                  onClick={handleSend}
                  bgGradient="linear(135deg, #ffffff, #e5e5e5)"
                  color="#000000"
                  _hover={{
                    transform: 'scale(1.05)',
                    bgGradient: "linear(135deg, #e5e5e5, #d4d4d4)",
                  }}
                />
              </Flex>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default ChatBot;
