import React from "react";

import { StackNavigationProps, Routes } from "../components/Navigation";
import {
  Container,
  Box,
  Text,
  Button,
  RoundedIcon,
  RoundedIconButton,
} from "../components";

const SIZE = 80;

const PasswordChanged = ({
  navigation,
}: StackNavigationProps<Routes, "PasswordChanged">) => {
  const footer = (
    <Box justifyContent="center" alignItems="center">
      <RoundedIconButton
        backgroundColor="white"
        color="secondary"
        name="x"
        size={60}
        onPress={() => navigation.pop()}
      />
    </Box>
  );

  return (
    <Container pattern={3} footer={footer}>
      <Box flex={1} justifyContent="center" alignItems="center" padding="s">
        <RoundedIcon
          backgroundColor="primaryLight"
          name="check"
          size={SIZE}
          color="primary"
        />
        <Text variant="title1" textAlign="center" marginVertical="l">
          Your password was successfully changed
        </Text>
        <Text variant="text" textAlign="center" marginBottom="l">
          Close this window and login again
        </Text>

        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            label="Reset password"
            onPress={() => navigation.navigate("Login")}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordChanged;
