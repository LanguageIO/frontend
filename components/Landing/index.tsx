import { NextPage } from 'next';
import React from 'react';
import Image from 'next/image';
import { Box, Container, Grid, Typography } from '@mui/material';

const Landing: NextPage = () => {
  return (
    <Box
      width="100%"
      padding={'0px'}
      marginTop={4}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
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
          maxWidth: '800px',
          fontSize: 24,
          fontFamily: 'monospace',
          fontWeight: 600,
          letterSpacing: '.05rem',
          color: 'inherit',
          textDecoration: 'none',
          mx: 2,
        }}

        align="center"

      >
        LanguageIO is a web application that helps you learn English.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, officia!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, officia!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, officia!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, officia!
      </Typography>
    </Box>
  );
};

export default Landing;
