import { Box, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Sidebar from '../Sidebar';

interface Props {
  children: ReactNode;
}

export default function BaseLayout({ children }: Props) {
  return (
    <Flex>
      <Sidebar />
      <Box w="calc(100% - 240px)" p="32px" overflowY="auto" background="#f6f8fa">
        {children}
      </Box>
    </Flex>
  );
}
