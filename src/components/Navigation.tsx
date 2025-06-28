import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Navigation: React.FC = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Journey', href: '#journey' },
    { name: 'Projects', href: '#projects' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <Box
      as="nav"
      position="fixed"
      w="100%"
      bg="rgba(0, 0, 0, 0.1)"
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
            fontWeight="bold"
            className="gradient-text"
            _hover={{ textDecoration: 'none' }}
          >
          </Link>
        </motion.div>

        <Flex gap={8}>
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="nav-item"
                _hover={{ textDecoration: 'none' }}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navigation; 