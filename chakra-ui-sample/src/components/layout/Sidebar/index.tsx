import Link from 'next/link';
import { Box } from '@chakra-ui/react';

export default function Sidebar() {
  return (
    <Box w="240px" h="100vh" p="32px" zIndex="10" borderRight="1px solid #eaeaea">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/dummy">
        <a>Dummy</a>
      </Link>
    </Box>
  );
}
