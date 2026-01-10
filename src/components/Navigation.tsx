import React, { useState, useEffect } from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('Home');
  
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#journey' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#expertise' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => {
        const id = item.href.substring(1);
        return { name: item.name, element: document.getElementById(id) };
      });

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.name);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      as="nav"
      position="fixed"
      w="100%"
      bg="rgba(0, 0, 0, 0.9)"
      className="blur-bg"
      zIndex={1000}
      py={4}
    >
      <Flex
        maxW="container.xl"
        mx="auto"
        px={6}
        align="center"
        justify="space-between"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="#home"
            fontSize="xl"
            fontWeight="700"
            color="white"
            _hover={{ textDecoration: 'none' }}
            transition="color 0.3s ease"
            fontFamily="'Space Grotesk', sans-serif"
            letterSpacing="0.1em"
            textTransform="uppercase"
          >
            SB
          </Link>
        </motion.div>

        <Flex gap={8} display={{ base: 'none', md: 'flex' }}>
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                color={activeSection === item.name ? '#ffffff' : '#d4d4d4'}
                fontSize="sm"
                fontWeight={activeSection === item.name ? '700' : '500'}
                letterSpacing="0.1em"
                textTransform="uppercase"
                fontFamily="'Space Grotesk', sans-serif"
                _hover={{ 
                  textDecoration: 'none',
                  color: '#ffffff',
                }}
                transition="all 0.3s ease"
                position="relative"
              >
                {item.name.toUpperCase()}
                {activeSection === item.name && (
                  <Box
                    position="absolute"
                    bottom="-4px"
                    left="0"
                    right="0"
                    h="2px"
                    bgGradient="linear(to-r, #ffffff, #e5e5e5, #d4d4d4)"
                    borderRadius="full"
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navigation;
