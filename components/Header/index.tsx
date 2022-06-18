import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "module";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <Flex direction="row" alignItems="center" minH={100}>
      <Link href="/">
        <Text cursor="true">Github</Text>
      </Link>
      <Spacer />
      <Link href="/">
        <Text>Github</Text>
      </Link>
      <Spacer />
      <Link href="/">
        <Text>Github</Text>
      </Link>
    </Flex>
  );
};
