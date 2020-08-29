import React from "react";
import { StyleSheet, Image } from "react-native";
import { useTheme } from "@shopify/restyle";

import { Box, Theme } from "../../components";

const Background = () => {
  const theme = useTheme<Theme>();
  return (
    <Box style={{ ...StyleSheet.absoluteFillObject }}>
      <Box flex={1 / 3} backgroundColor="lightBlue">
        <Box flex={1} backgroundColor="white" borderBottomRightRadius="xl" />
      </Box>
      <Box flex={1 / 3}>
        <Box flex={1} backgroundColor="white" />
        <Box flex={1} backgroundColor="secondary" />
        <Image
          source={require("./assets/background.png")}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
            borderTopLeftRadius: theme.borderRadii.xl,
            borderBottomRightRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
      <Box flex={1 / 3} backgroundColor="lightBlue">
        <Box flex={1} backgroundColor="secondary" borderTopLeftRadius="xl" />
      </Box>
    </Box>
  );
};

export default Background;