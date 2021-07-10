import {Rocon, useRoutes} from "rocon/react";
import {TopPage} from "~/components/screens/TopPage";

const topLevelRoutes = Rocon.Path().exact({action: () => <TopPage></TopPage>})

export const Routes = () => {
  return useRoutes(topLevelRoutes);
}
