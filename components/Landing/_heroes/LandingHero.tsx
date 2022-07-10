import { Box, Typography } from '@mui/material';
import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

const LandingHero: NextPage = () => {
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
        },
      }}
    >
      <Image
        src="/images/landing/logo.png"
        alt="LanguageIO"
        width={500}
        height={500}
      />
      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.05rem',
          fontSize: 16,

          '@media (min-width: 768px)': {
            maxWidth: '800px',
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
    </Box>
  );
};

export default LandingHero;
