import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";

import { Box, Theme, RoundedIcon, Text } from "../../components";

export interface DrawerItemProps {
  icon: string;
  label: string;
  screen: string;
  color: keyof Theme["colors"];
}

const DrawerItem = ({ icon, color, label, screen }: DrawerItemProps) => {
  const theme = useTheme<Theme>();
  return (
    <RectButton
      style={{
        borderRadius: theme.borderRadii.m,
        backgroundColor: "white",
      }}
    >
      <Box flexDirection="row" alignItems="center" padding="m">
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
