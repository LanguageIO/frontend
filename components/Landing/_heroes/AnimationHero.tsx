import { NextPage } from 'next';
import React from 'react';
import Lottie from 'react-lottie';
import animationData from 'lotties/hello-bonjour-hola-guten-tag.json';
import { Box, Typography } from '@mui/material';
import type { ReactNode } from 'react';

const AnimationHero: NextPage = (props: ReactNode) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Box
      padding={'0px'}
      marginTop={4}
      display={'flex'}
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        '@media (min-width: 768px)': {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        },
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        sx={{
          maxWidth: '500px',
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.05rem',
          fontSize: 16,

          '@media (min-width: 768px)': {
            fontSize: 24,
            fontFamily: 'monospace',
            fontWeight: 600,
            letterSpacing: '.05rem',
            color: 'inherit',
            textDecoration: 'none',
            mx: 2,
          },
        }}
        align="center"
      >
        LanguageIO is a web application that helps you learn English. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. In, officia! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. In, officia! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. In, officia! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. In, officia!
      </Typography>
      <Box mt={20} mb={20} mr={0} ml={0}>
        <Lottie options={defaultOptions} height={400} width={400} />
      </Box>
    </Box>
  );
};

export default AnimationHero;
