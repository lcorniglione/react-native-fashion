import React from "react";
import Animated, {
  Extrapolate,
  useDerivedValue,
  useAnimatedStyle,
  interpolate,
  useAnimatedGestureHandler,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { StyleSheet, Dimensions, ImageRequireSource } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import { mix, mixColor, snapPoint } from "react-native-redash";

import { Box, useTheme } from "../../components";

const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.75;
const height = width * (425 / 294);
const snapPoints = [-wWidth, 0, width];

interface CardProps {
  position: Animated.Node<number>;
  onSwipe: () => void;
  source: ImageRequireSource;
  step: number;
  index: number;
  aIndex: Animated.SharedValue<number>;
}

const Card = ({ index, aIndex, onSwipe, source, step }: CardProps) => {
  const theme = useTheme();
  const translateY = useSharedValue(0);
  const translateX = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler<{ y: number; x: number }>({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
      ctx.y = translateY.value;
    },
    onActive: ({ translationX, translationY }, ctx) => {
      translateX.value = translationX + ctx.x;
      translateY.value = translationY + ctx.y;
    },
    onEnd: ({ velocityX, velocityY }) => {
      translateY.value = withSpring(0, {
        velocity: velocityY,
      });
      const dest = snapPoint(translateX.value, velocityX, snapPoints);
      translateX.value = withSpring(
        dest,
        {
          overshootClamping: dest === 0 ? false : true,
          restSpeedThreshold: dest === 0 ? 0.01 : 100,
          restDisplacementThreshold: dest === 0 ? 0.01 : 100,
        },
        () => dest !== 0 && onSwipe()
      );
    },
  });
  const position = useDerivedValue(() => index * step - aIndex.value);
  const imageStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          position.value,
          [0, step],
          [1.2, 1],
          Extrapolate.CLAMP
        ),
      },
    ],
  }));
  const cardStyle = useAnimatedStyle(() => {
    const scale = mix(position.value, 1, 0.9);

    return {
      transform: [
        { translateY: translateY.value },
        { translateX: translateX.value },
        { scale },
      ],
      backgroundColor: mixColor(position.value, "#C9E9E7", "#74BCB8"),
    };
  });

  return (
    <Box
      style={StyleSheet.absoluteFill}
      justifyContent="center"
      alignItems="center"
    >
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            {
              width,
              height,
              borderRadius: theme.borderRadii.l,
              overflow: "hidden",
            },
            cardStyle,
          ]}
        >
          <Animated.Image
            {...{ source }}
            style={[
              {
                ...StyleSheet.absoluteFillObject,
                width: undefined,
                height: undefined,
              },
              imageStyle,
            ]}
          />
        </Animated.View>
      </PanGestureHandler>
    </Box>
  );
};

export default Card;
