import React, { forwardRef } from "react";
import {
  TextInput as TextField,
  StyleSheet,
  TextInputProps as TextFieldProps,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";

import { Box } from "../../../components";

interface TextInputProps extends TextFieldProps {
  icon: string;
  touched?: boolean;
  error?: string;
}

const TextInput = forwardRef<TextField, TextInputProps>(
  ({ icon, touched, error, ...props }, ref) => {
    const theme = useTheme();
    const SIZE = theme.borderRadii.m * 2.5;
    const reColor = !touched ? "text" : error ? "danger" : "primary";
    const color = theme.colors[reColor];

    return (
      <Box
        borderColor={reColor}
        borderRadius="s"
        height={48}
        flexDirection="row"
        alignItems="center"
        borderWidth={StyleSheet.hairlineWidth}
        padding="s"
      >
        <Box padding="s">
          <Icon name={icon} size={16} {...{ color }} />
        </Box>
        <Box flex={1}>
          <TextField
            ref={ref}
            placeholderTextColor={color}
            underlineColorAndroid="transparent"
            {...props}
          />
        </Box>
        {touched && (
          <Box
            height={SIZE}
            width={SIZE}
            justifyContent="center"
            alignItems="center"
            backgroundColor={!error ? "primary" : "danger"}
            style={{ borderRadius: SIZE / 2 }}
          >
            <Icon
              name={!error ? "check" : "x"}
              color="white"
              size={16}
              style={{ textAlign: "center" }}
            />
          </Box>
        )}
      </Box>
    );
  }
);

export default TextInput;
