import React, { Children, ReactNode, useState } from "react";
import { Dimensions } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { mix, useTiming } from "react-native-redash";

import { Box, Text, useTheme } from "../../components";

const { width } = Dimensions.get("window");

interface Tab {
  id: string;
  title: string;
}

interface TabsProps {
  tabs: Tab[];
  children: ReactNode;
}

const Tabs = ({ tabs, children }: TabsProps) => {
  const theme = useTheme();
  const [index, setIndex] = useState(0);
  const transition = useTiming(index);
  const dotStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: mix(transition.value, width * 0.25, width * 0.75) },
    ],
  }));

  const contentStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: -width * transition.value }],
  }));

  return (
    <Box flex={1}>
      <Box flexDirection="row">
        {tabs.map((tab, indx) => (
          <RectButton
            style={{ flex: 1 }}
            key={indx}
            onPress={() => setIndex(indx)}
          >
            <Box padding="m" style={{ paddingBottom: theme.spacing.m + 10 }}>
              <Text variant="title3" textAlign="center">
                {tab.title}
              </Text>
            </Box>
          </RectButton>
        ))}
        <Animated.View
          style={[
            {
              position: "absolute",
              bottom: 0,
              left: 0,
              backgroundColor: theme.colors.primary,
              width: 10,
              height: 10,
              borderRadius: 5,
            },
            dotStyle,
          ]}
        />
      </Box>
      <Animated.View
        style={[
          {
            flex: 1,
            width: width * tabs.length,
            flexDirection: "row",
          },
          contentStyle,
        ]}
      >
        {Children.map(children, (child, indx) => (
          <Box flex={1} key={indx} width={width}>
            {child}
          </Box>
        ))}
      </Animated.View>
    </Box>
  );
};

export default Tabs;
