import React, { useEffect, useState } from 'react';

import AppRoutes from './app.routes';

import SplashScreen from '../pages/SplashScreen';

const Routes: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return loading ? <SplashScreen /> : <AppRoutes />;
};

export default Routes;
