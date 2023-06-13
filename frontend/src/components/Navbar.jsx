import { Box, Flex, Link } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import { AiFillHome, AiOutlineInfoCircle, AiFillAlipayCircle } from 'react-icons/ai';

function Navbar() {
  return (
    <Box bg="black" color="white" px={4} py={2}>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Link href="/">
            <img src="/path/to/logo.png" alt="Logo" width={32} height={32} />
          </Link>
          <Link href="/" fontWeight="bold" fontSize="xl" ml={2}>
            Home
          </Link>
        </Flex>

        <Flex alignItems="center">
          <Link href="/about" mr={4}>
            <Icon as={AiOutlineInfoCircle} boxSize={6} />
          </Link>
          <Link href="/services" mr={4}>
            <Icon as={AiFillAlipayCircle} boxSize={6} />
          </Link>
          <Link href="/signin">
            <Icon as={AiFillHome} boxSize={6} />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
