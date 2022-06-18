import { Button } from "components/button";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Container } from "@chakra-ui/react";
import { Header } from "components/Header";

const Home: NextPage = () => {
  return (
    <Container maxW="container.xl">
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Yapay Zeka ile terimsel ingilizce ogren"
        />
        <title>LanguageIO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Image
        src="/images/landing/logo.png"
        alt="LanguageIO"
        width={200}
        height={200}
      />
    </Container>
  );
};

export default Home;
