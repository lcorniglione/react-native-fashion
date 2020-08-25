import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Box, Text } from "./Theme";
import RoundedIconButton from "./RoundedIconButton";

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  };
  right: {
    icon: string;
    onPress: () => void;
  };
  title: string;
  dark: boolean;
}

const Header = ({ left, right, title, dark }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const color = dark ? "white" : "secondary";
  const backgroundColor = dark ? "secondary" : "lightGray";
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
        {...{ color, backgroundColor }}
        onPress={left.onPress}
      />
      <Text {...{ color }} variant="header">
        {title.toUpperCase()}
      </Text>
      <RoundedIconButton
        name={right.icon}
        size={44}
        iconRatio={0.4}
        {...{ color, backgroundColor }}
        onPress={right.onPress}
      />
    </Box>
  );
};

Header.defaultProps = {
  dark: false,
};

export default Header;
