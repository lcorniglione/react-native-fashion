import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeRoutes } from "../components/Navigation";

import OutfitIdeas from "./OutfitIdeas";
import FavouriteOutfits from "./FavouriteOutfits";
import TransactionHistory from "./TransactionHistory";
import EditProfile from "./EditProfile";
import Settings from "./Settings";
//import Cart from "./Cart";
import DrawerComp, { DRAWER_WIDTH } from "./Drawer";
export { assets } from "./Drawer";

const Drawer = createDrawerNavigator<HomeRoutes>();

export const HomeNavigator = () => (
  <Drawer.Navigator
    drawerContent={() => <DrawerComp />}
    drawerStyle={{ width: DRAWER_WIDTH }}
  >
    <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
    <Drawer.Screen name="FavouriteOutfits" component={FavouriteOutfits} />
    <Drawer.Screen name="TransactionHistory" component={TransactionHistory} />
    <Drawer.Screen name="EditProfile" component={EditProfile} />
    <Drawer.Screen name="Settings" component={Settings} />
    {/*<Drawer.Screen name="Cart" component={Cart} />*/}
  </Drawer.Navigator>
);
