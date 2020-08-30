import React from "react";
import { Image, Dimensions } from "react-native";
import {
  DrawerActions,
  useNavigation,
  CommonActions,
} from "@react-navigation/native";

import { Box, Text, Header, useTheme } from "../../components";

import DrawerItem, { DrawerItemProps } from "./DrawerItem";

export const assets = [require("./assets/drawer.png")];
const { width } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
export const DRAWER_WIDTH = width * 0.8;
const height = DRAWER_WIDTH * aspectRatio;

const items: DrawerItemProps[] = [
  {
    icon: "zap",
    label: "Outfit Ideas",
    screen: "OutfitIdeas",
    color: "primary",
  },
  {
    icon: "heart",
    label: "Favourite Outfits",
    screen: "FavouriteOutfits",
    color: "drawer1",
  },
  {
    icon: "user",
    label: "Edit Profile",
    screen: "FavouriteOutfits",
    color: "drawer2",
  },
  {
    icon: "clock",
    label: "Transaction History",
    screen: "TransactionHistory",
    color: "drawer3",
  },
  {
    icon: "settings",
    label: "Notification Settings",
    screen: "FavouriteOutfits",
    color: "drawer4",
  },
  {
    icon: "log-out",
    label: "Logout",
    onPress: (navigation) =>
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Authentication" }],
        })
      ),
    color: "secondary",
  },
];

const Drawer = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="background">
        <Box
          position="absolute"
          top={0}
          left={0}
          bottom={0}
          right={0}
          borderBottomRightRadius="xl"
          backgroundColor="secondary"
        >
          <Header
            title="Menu"
            left={{
              icon: "x",
              onPress: () => navigation.dispatch(DrawerActions.closeDrawer()),
            }}
            right={{ icon: "shopping-bag", onPress: () => true }}
            dark
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secondary" />
        <Box
          position="absolute"
          top={0}
          left={0}
          bottom={0}
          right={0}
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl"
          backgroundColor="background"
          justifyContent="center"
          padding="xl"
        >
          <Box
            position="absolute"
            top={-50}
            left={DRAWER_WIDTH / 2 - 50}
            bottom={0}
            right={0}
            backgroundColor="primaryLight"
            height={100}
            width={100}
            style={{ borderRadius: 50 }}
          />
          <Box marginBottom="s" marginTop="xl">
            <Text variant="title1" textAlign="center">
              Mike Peter
            </Text>
            <Text variant="text" textAlign="center">
              mike@flexinstudio.com
            </Text>
          </Box>
          {items.map((item, i) => (
            <DrawerItem key={i} {...item} />
          ))}
        </Box>
      </Box>
      <Box
        backgroundColor="background"
        width={DRAWER_WIDTH}
        height={height * 0.41}
        overflow="hidden"
      >
        <Image
          source={assets[0]}
          style={{
            width: DRAWER_WIDTH,
            height,
            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
    </Box>
  );
};

export default Drawer;
