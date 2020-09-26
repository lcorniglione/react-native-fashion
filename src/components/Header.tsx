import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";

import { Box, Text } from "./Theme";
import RoundedIconButton from "./RoundedIconButton";

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  };
  right?: {
    icon: string;
    onPress: () => void;
  };
  title: string;
  dark: boolean;
}

const Header = ({ left, right, title, dark }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const color = dark ? "background" : "secondary";
  const backgroundColor = dark ? "secondary" : undefined;
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      style={{ marginTop: insets.top }}
      paddingHorizontal="m"
    >
      <RoundedIconButton
        name={left.icon}
        size={44}
        iconRatio={0.4}
        align={typeof backgroundColor === "undefined" ? "flex-start" : "center"}
        {...{ color, backgroundColor }}
        onPress={left.onPress}
      />
      <Text {...{ color }} variant="header">
        {title.toUpperCase()}
      </Text>
      {right ? (
        <RoundedIconButton
          name={right.icon}
          align={typeof backgroundColor === "undefined" ? "flex-end" : "center"}
          size={44}
          iconRatio={0.4}
          {...{ color, backgroundColor }}
          onPress={right.onPress}
        />
      ) : (
        <View style={{ width: 44 }} />
      )}
    </Box>
  );
};

Header.defaultProps = {
  dark: false,
};

export default Header;
