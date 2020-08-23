import React from "react";

import { AuthNavigationProps } from "../components/Navigation";
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
}: AuthNavigationProps<"PasswordChanged">) => {
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
      <Box alignSelf="center">
        <RoundedIcon
          backgroundColor="primaryLight"
          name="check"
          size={SIZE}
          color="primary"
        />
      </Box>
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
    </Container>
  );
};

export default PasswordChanged;
