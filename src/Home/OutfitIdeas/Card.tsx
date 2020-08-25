import React from "react";
import Animated, { add } from "react-native-reanimated";
import { StyleSheet, Dimensions } from "react-native";
import {
  mixColor,
  mix,
  usePanGestureHandler,
  withSpring,
} from "react-native-redash";
import { useTheme } from "@shopify/restyle";
import { PanGestureHandler } from "react-native-gesture-handler";

import { Box, Theme } from "../../components";

const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.75;
const height = width * (425 / 294);

interface CardProps {
  position: Animated.Adaptable<number>;
}

const Card = ({ position }: CardProps) => {
  const theme = useTheme<Theme>();
  const backgroundColor = mixColor(position, "#C9E9E7", "#74BCB8");
  const translateYOffset = mix(position, 0, -50);
  const scale = mix(position, 1, 0.9);
  console.log(translateYOffset);
  const {
    gestureHandler,
    translation,
    velocity,
    state,
  } = usePanGestureHandler();
  const translateX = withSpring({
    value: translation.x,
    velocity: velocity.x,
    state,
    snapPoints: [-width, 0, width],
  });
  const translateY = add(
    translateYOffset,
    withSpring({
      value: translation.y,
      velocity: velocity.y,
      state,
      snapPoints: [0],
    })
  );
  return (
    <Box
      style={StyleSheet.absoluteFill}
      justifyContent="center"
      alignItems="center"
    >
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={{
            backgroundColor,
            width,
            height,
            borderRadius: theme.borderRadii.l,
            transform: [{ translateY }, { translateX }, { scale }],
          }}
        />
      </PanGestureHandler>
    </Box>
  );
};

export default Card;
