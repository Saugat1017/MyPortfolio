import React, { useState } from 'react';
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
      return "Saugat completed his Bachelor of Science in Computer Science from Truman State University, graduating in May 2023. He was also recognized on the President's List!";
    }
    
    if (lowerQuestion.includes('skills') || lowerQuestion.includes('technologies')) {
      return "Saugat is skilled in:\n• Languages: Python, JavaScript, TypeScript, Java, C++\n• Web: React.js, Node.js, Express.js, HTML/CSS\n• Tools: Git, Docker, AWS, MongoDB\n• Machine Learning: TensorFlow, PyTorch, scikit-learn";
    }
    
    if (lowerQuestion.includes('projects')) {
      return "Here are some of Saugat's notable projects:\n1. Developed a Machine Learning model for Alzheimer's detection using MRI scans\n2. Created an AI-powered Resume Parser using Python and NLP\n3. Built a full-stack Task Management System with React and Node.js\n4. Implemented a Secure File Storage System using AWS S3";
    }
    
    if (lowerQuestion.includes('experience') || lowerQuestion.includes('work')) {
      return "Saugat's professional experience includes:\n• Software Engineer at Truman State University (Aug 2022 - May 2023)\n• Software Development Intern at Truman State University (May 2022 - Aug 2022)\n• Research Assistant at Truman State University (Jan 2022 - May 2022)";
    }

    if (lowerQuestion.includes('certificates') || lowerQuestion.includes('certifications')) {
      return "Saugat has earned several certifications including:\n• AWS Certified Cloud Practitioner\n• Microsoft Azure Fundamentals\n• Google IT Support Professional Certificate";
    }

    if (lowerQuestion.includes('contact') || lowerQuestion.includes('hire') || lowerQuestion.includes('email') || lowerQuestion.includes('linkedin') || lowerQuestion.includes('github')) {
      return "You can get in touch with Saugat through:\n• Email: saugatbhatta1217@gmail.com\n• GitHub: github.com/saugatbhatta1217\n• LinkedIn: linkedin.com/in/saugatbhatta1217";
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
        bgGradient="linear(45deg, #ff00ff, #00ffff)"
        color="white"
        _hover={{
          transform: 'scale(1.1)',
        }}
        onClick={onToggle}
        zIndex={9999}
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
              bg="rgba(0, 0, 0, 0.9)"
              borderRadius="xl"
              overflow="hidden"
              border="1px solid"
              borderColor="rgba(255, 255, 255, 0.1)"
              backdropFilter="blur(10px)"
              boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)"
            >
              <Flex 
                p={3} 
                bgGradient="linear(45deg, #ff00ff, #00ffff)"
                justify="space-between" 
                align="center"
              >
                <Text color="white" fontWeight="bold">Chat with AI Assistant</Text>
                <IconButton
                  aria-label="Close"
                  icon={<FaTimes />}
                  size="sm"
                  variant="ghost"
                  color="white"
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
                    background: 'rgba(255, 255, 255, 0.2)',
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
                      bg={msg.isBot ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 0, 255, 0.2)'}
                      color="white"
                      p={3}
                      borderRadius="lg"
                      maxW="80%"
                      marginLeft={msg.isBot ? 0 : 'auto'}
                      whiteSpace="pre-line"
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
                  border="none"
                  color="white"
                  _placeholder={{ color: 'rgba(255, 255, 255, 0.5)' }}
                  mr={2}
                />
                <IconButton
                  aria-label="Send"
                  icon={<FaPaperPlane />}
                  onClick={handleSend}
                  bgGradient="linear(45deg, #ff00ff, #00ffff)"
                  color="white"
                  _hover={{
                    transform: 'scale(1.05)',
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