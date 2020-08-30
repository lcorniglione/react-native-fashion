import React from "react";
import { StyleSheet, Image } from "react-native";

import { Box, useTheme } from "../../components";
import { palette } from "../../components/Theme";

const Background = () => {
  const theme = useTheme();
  return (
    <Box style={{ ...StyleSheet.absoluteFillObject }}>
      <Box flex={1 / 3} style={{ backgroundColor: palette.lightBlue }}>
        <Box
          flex={1}
          backgroundColor="background"
          borderBottomRightRadius="xl"
        />
      </Box>
      <Box flex={1 / 3}>
        <Box flex={1} backgroundColor="background" />
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
      <Box flex={1 / 3} style={{ backgroundColor: palette.lightBlue }}>
        <Box flex={1} backgroundColor="secondary" borderTopLeftRadius="xl" />
      </Box>
    </Box>
  );
};

export default Background;
