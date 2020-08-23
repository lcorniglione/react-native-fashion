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
}

const Header = ({ left, right, title }: HeaderProps) => {
  const insets = useSafeAreaInsets();
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
        size={24}
        color="white"
        backgroundColor="secondary"
        onPress={left.onPress}
      />
      <Text color="white" variant="header">
        {title.toUpperCase()}
      </Text>
      <RoundedIconButton
        name={right.icon}
        size={24}
        color="white"
        backgroundColor="secondary"
        onPress={right.onPress}
      />
    </Box>
  );
};

export default Header;
