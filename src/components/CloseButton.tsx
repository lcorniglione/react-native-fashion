import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

import { Box, Text } from "./Theme";

interface CloseButtonProps {
  onPress: () => void;
}

const SIZE = 60;

const CloseButton = ({ onPress }: CloseButtonProps) => {
  return (
    <RectButton onPress={onPress}>
      <Box
        backgroundColor="white"
        style={{ height: SIZE, width: SIZE, borderRadius: SIZE / 2 }}
        justifyContent="center"
        alignItems="center"
      >
        <Text color="secondary" textAlign="center">
          <Icon name="x" size={45} />
        </Text>
      </Box>
    </RectButton>
  );
};

export default CloseButton;
