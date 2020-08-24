import React from 'react';

import { Container } from './styles';

import splash from '../../assets/splash.png';

const SplashScreen: React.FC = () => {
  return <Container source={splash} resizeMode="cover" />;
};

export default SplashScreen;
