import { Rocon, useRoutes } from 'rocon/react';
import { TopPage } from '~/components/screens/TopPage';
import { ParallaxTest } from '~/components/screens/ParallaxTest';

export const topLevelRoutes = Rocon.Path()
  .exact({ action: () => <TopPage /> })
  .route('parallax', (route) => route.action(() => <ParallaxTest />));

export const Routes = () => {
  return useRoutes(topLevelRoutes);
};
