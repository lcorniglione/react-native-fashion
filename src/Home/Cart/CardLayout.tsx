import { BoxProps } from "@shopify/restyle";
import React, { ReactNode } from "react";
import { BorderlessButton } from "react-native-gesture-handler";

import { Box, Theme } from "../../components";

interface CardLayoutProps {
  children: ReactNode;
  onPress: () => void;
  backgroundColor: BoxProps<Theme>["backgroundColor"];
}

const CardLayout = ({
  children,
  onPress,
  backgroundColor,
}: CardLayoutProps) => {
  return (
    <BorderlessButton onPress={onPress}>
      <Box
        padding="m"
        marginLeft="m"
        borderRadius="m"
        width={120}
        height={160}
        backgroundColor={backgroundColor}
      >
        {children}
      </Box>
    </BorderlessButton>
  );
};

export default CardLayout;
