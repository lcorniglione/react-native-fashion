import React from "react";
import { View, Text } from "react-native";

import { HomeNavigationProps } from "../../components/Navigation";
import { Box, Header } from "../../components";

const Settings = ({ navigation }: HomeNavigationProps<"Settings">) => {
  return (
    <Box flex={1} backgroundColor="background">
      <Header
        title="Transaction History"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "share", onPress: () => true }}
      />
    </Box>
  );
};

export default Settings;
