import { Rocon, useRoutes } from 'rocon/react';
import { TopPage } from '~/components/screens/TopPage';
import { ParallaxTest } from '~/components/screens/ParallaxTest';
import { FramerMotion } from '~/components/screens/FramerMotion';

export const topLevelRoutes = Rocon.Path()
  .exact({ action: () => <TopPage /> })
  .route('parallax', (route) => route.action(() => <ParallaxTest />))
  .route('framer-motion', (route) => route.action(() => <FramerMotion />));

export const Routes = () => {
  return useRoutes(topLevelRoutes);
};
