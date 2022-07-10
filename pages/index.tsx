import { Button } from 'components/button';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Container } from '@chakra-ui/react';
import Landing from 'components/Landing';

const Home: NextPage = () => {
  return (
    <Container fixed maxW="xxl" centerContent={true} padding={'0px'}>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Yapay Zeka ile terimsel ingilizce ogren"
        />
        <title>LanguageIO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </Container>
  );
};

export default Home;
