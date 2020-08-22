import React, { forwardRef } from "react";
import {
  TextInput as TextField,
  StyleSheet,
  TextInputProps as TextFieldProps,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";

import { Box } from "../Theme";
import RoundedIcon from "../RoundedIcon";

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
          <RoundedIcon
            name={!error ? "check" : "x"}
            size={SIZE}
            color={"white"}
            backgroundColor={!error ? "primary" : "danger"}
          />
        )}
      </Box>
    );
  }
);

export default TextInput;
