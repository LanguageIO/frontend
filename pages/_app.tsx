import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: `"TTNorms", "Roboto", "Helvetica", "Arial", sans-serif`,
    body: `"TTNorms", "Roboto", "Helvetica", "Arial", sans-serif`,
  },
});

function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <Component {...pageProps} />;
  </ChakraProvider>;
}

export default App;
