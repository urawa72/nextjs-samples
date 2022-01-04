import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import BaseLayout from '../components/layout/BaseLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </ChakraProvider>
  );
}

export default MyApp;
