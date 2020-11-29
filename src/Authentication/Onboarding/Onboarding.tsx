/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import { interpolateColor } from "react-native-redash";

import { AuthNavigationProps } from "../../components/Navigation";
import { Theme, makeStyles, useTheme } from "../../components";

import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";
import Dot from "./Dot";

const { width } = Dimensions.get("window");

const slides = [
  {
    title: "Relaxed",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
    color: "#BFEAF5",
    picture: {
      uri: require("../assets/2.png"),
      width: 2513,
      height: 3583,
    },
  },
  {
    title: "Playful",
    subtitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
    color: "#BEECC4",
    picture: {
      uri: require("../assets/1.png"),
      width: 2791,
      height: 3744,
    },
  },
  {
    title: "Excentric",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday",
    color: "#FFE4D9",
    picture: {
      uri: require("../assets/3.png"),
      width: 2738,
      height: 3244,
    },
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#FFDDDD",
    picture: {
      uri: require("../assets/4.png"),
      width: 1757,
      height: 2551,
    },
  },
];

export const assets = slides.map((slide) => slide.picture.uri);

const Onboarding = ({ navigation }: AuthNavigationProps<"Onboarding">) => {
  const styles = useStyles();
  const theme = useTheme();
  const scrollRef = useRef<Animated.ScrollView>(null);
  const x = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      x.value = contentOffset.x;
    },
  });
  const backgroundColor = useDerivedValue(() =>
    interpolateColor(
      x.value,
      slides.map((_, i) => i * width),
      slides.map((slide) => slide.color)
    )
  );
  const slider = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
  }));
  const background = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
  }));
  const currentIndex = useDerivedValue(() => x.value / width);
  const footerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: -x.value }],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, slider]}>
        {slides.map(({ picture }, i) => {
          const style = useAnimatedStyle(() => ({
            opacity: interpolate(
              x.value,
              [(i - 0.5) * width, i * width, (i + 0.5) * width],
              [0, 1, 0],
              Extrapolate.CLAMP
            ),
          }));
          return (
            <Animated.View style={[styles.underlay, style]} key={i}>
              <Image
                source={picture.uri}
                style={{
                  width: width - theme.borderRadii.xl,
                  height:
                    (width - theme.borderRadii.xl) *
                    (picture.height / picture.width),
                }}
              />
            </Animated.View>
          );
        })}
        <Animated.ScrollView
          ref={scrollRef}
          horizontal
          snapToInterval={width}
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          bounces={false}
          onScroll={onScroll}
          scrollEventThrottle={16}
        >
          {slides.map((slide, i) => (
            <Slide key={i} title={slide.title} right={!!(i % 2)} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View style={[StyleSheet.absoluteFill, background]} />
        <View style={[styles.footerContent]}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} {...{ index }} currentIndex={currentIndex} />
            ))}
          </View>
          <Animated.View
            style={[
              {
                flex: 1,
                flexDirection: "row",
                width: width * slides.length,
              },
              footerStyle,
            ]}
          >
            {slides.map(({ subtitle, description }, i) => {
              const last = i === slides.length - 1;
              return (
                <Subslide
                  key={i}
                  onPress={() => {
                    if (last) {
                      navigation.navigate("Welcome");
                    } else {
                      scrollRef.current
                        ?.getNode()
                        .scrollTo({ x: width * (i + 1), animated: true });
                    }
                  }}
                  {...{ subtitle, description, last }}
                />
              );
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: theme.borderRadii.xl,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: theme.colors.background,
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: theme.borderRadii.xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    top: -10,
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomRightRadius: theme.borderRadii.xl,
    overflow: "hidden",
  },
}));

export default Onboarding;
