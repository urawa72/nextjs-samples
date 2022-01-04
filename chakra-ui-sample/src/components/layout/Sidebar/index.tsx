import NextLink from 'next/link';
import { Box, Flex, Link } from '@chakra-ui/react';

export default function Sidebar() {
  return (
    <Box w="240px" h="100vh" p="32px" zIndex="10" borderRight="1px solid #eaeaea">
      <Flex flexDirection="column">
        <NextLink href="/">
          <Link>Home</Link>
        </NextLink>
        <NextLink href="/about">
          <Link>About</Link>
        </NextLink>
        <NextLink href="/contact">
          <Link>Contact</Link>
        </NextLink>
        <NextLink href="/dummy">
          <Link>Dummy</Link>
        </NextLink>
      </Flex>
    </Box>
  );
}
