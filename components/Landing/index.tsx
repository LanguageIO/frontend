import { NextPage } from 'next';
import React, {useEffect} from 'react';
import smoothscroll from 'smoothscroll-polyfill';

import Image from 'next/image';
import { Box } from '@mui/material';
import LandingHero from './_heroes/LandingHero';
import AnimationHero from './_heroes/AnimationHero';
import CallToActionWithIllustration from './_heroes/CTAWithIllustration';
import CallToActionWithAnnotation from './_heroes/CTAWithAnnotation';
import CallToActionWithVideo from './_heroes/CTAWithVideoOrImage';
import SplitScreenWithImage from './_heroes/SplitScreenWithImage';
import WithBackgroundImageAndGradient from './_heroes/WithBackgroundImageAndGradient';
import SimpleThreeColumnGrid from './_heroes/SimpleThreeColumnGrid';

const Landing = () => {
  useEffect(() => smoothscroll.polyfill(), [])  
  return (
    <Box>
      <CallToActionWithIllustration />
      <LandingHero />
      <CallToActionWithAnnotation />
      <SimpleThreeColumnGrid />
      <CallToActionWithVideo />
      <AnimationHero />
      <SplitScreenWithImage />
      <WithBackgroundImageAndGradient />
    </Box>
  );
};

export default Landing;
