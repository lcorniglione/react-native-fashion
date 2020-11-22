import React from "react";
import { Dimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import { Box, useTheme } from "../../components";

const { width } = Dimensions.get("window");

const height = (682 * width) / 375;

const Cart = () => {
  const theme = useTheme();
  const translateY = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler({
    onActive: ({ translationY }) => {
      translateY.value = translationY;
    },
  });

  const style = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));
  return (
    <Box flex={1} backgroundColor="secondary">
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            {
              backgroundColor: "white",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height,
              borderBottomLeftRadius: theme.borderRadii.xl,
              borderBottomRightRadius: theme.borderRadii.xl,
            },
            style,
          ]}
        />
      </PanGestureHandler>
    </Box>
  );
};

export default Cart;
