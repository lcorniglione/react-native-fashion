import React from "react";
import { Image, Dimensions } from "react-native";
import { useTheme } from "@shopify/restyle";

import { Box, Text } from "../components/Theme";
import { Button } from "../components";
import { Routes, StackNavigationProps } from "../components/Navigation";

const { width } = Dimensions.get("window");

const picture = {
  src: require("./assets/1.png"),
  width: 2791,
  height: 3744,
};

export const assets = [picture.src];

const Welcome = ({ navigation }: StackNavigationProps<Routes, "Welcome">) => {
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="gray"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height:
              (width - theme.borderRadii.xl) * (picture.height / picture.width),
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="gray"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          backgroundColor="white"
          justifyContent="space-evenly"
          borderTopLeftRadius="xl"
          alignItems="center"
          flex={1}
          padding="xl"
        >
          <Text variant="title2">Let's get Started</Text>
          <Text variant="text" textAlign="center">
            Login to your account below or signup for an amazing experience
          </Text>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={() => navigation.navigate("Login")}
          />
          <Button label="Join us, it's Free" onPress={() => null} />
          <Button
            variant="transparent"
            label="Forgot password?"
            onPress={() => null}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
