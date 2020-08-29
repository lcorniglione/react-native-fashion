import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

import { Box, Theme, RoundedIcon, Text } from "../../components";
import { HomeRoutes } from "../../components/Navigation";

export interface DrawerItemProps {
  icon: string;
  label: string;
  screen: keyof HomeRoutes;
  color: keyof Theme["colors"];
}

const DrawerItem = ({ icon, color, label, screen }: DrawerItemProps) => {
  const theme = useTheme<Theme>();
  const { navigate } = useNavigation<
    DrawerNavigationProp<HomeRoutes, "OutfitIdeas">
  >();
  return (
    <RectButton
      style={{
        borderRadius: theme.borderRadii.m,
        backgroundColor: "white",
      }}
      onPress={() => navigate(screen)}
    >
      <Box flexDirection="row" alignItems="center" padding="s">
        <RoundedIcon
          name={icon}
          size={36}
          iconRatio={0.5}
          backgroundColor={color}
          color="white"
        />
        <Text variant="button" color="secondary" marginLeft="m">
          {label}
        </Text>
      </Box>
    </RectButton>
  );
};

export default DrawerItem;
