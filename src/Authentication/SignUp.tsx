import React, { useRef } from "react";
import { TextInput as TextField } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  StackNavigationProps,
  AuthenticationRoutes,
} from "../components/Navigation";
import TextInput from "../components/Forms/TextInput";
import { Container, Button, Text, Box } from "../components";

import Footer from "./components/Footer";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long")
    .required("Required"),
  passwordConfirmation: Yup.string()
    .equals([Yup.ref("password")], "Passwords don't match")
    .required("Required"),
});

const SignUp = ({
  navigation,
}: StackNavigationProps<AuthenticationRoutes, "SignUp">) => {
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      validationSchema: SignUpSchema,
      initialValues: { email: "", password: "", passwordConfirmation: "" },
      onSubmit: (values) => console.log(values),
    }
  );

  const footer = (
    <Footer
      title="Already have an account?"
      action="Login here"
      onPress={() => navigation.navigate("Login")}
    />
  );

  const passwordRef = useRef<TextField | null>(null);
  const passwordConfirmationRef = useRef<TextField | null>(null);

  return (
    <Container pattern={1} {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Create account
        </Text>
        <Text variant="text" textAlign="center" marginBottom="l">
          Let's us know what your name, email, and your password
        </Text>
        <Box>
          <Box marginBottom="m">
            <TextInput
              icon="mail"
              placeholder="Enter your Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={errors.email}
              touched={touched.email}
              keyboardType="email-address"
              autoCompleteType="email"
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => passwordRef.current?.focus()}
            />
          </Box>
          <Box marginBottom="m">
            <TextInput
              ref={passwordRef}
              icon="lock"
              placeholder="Enter your Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              error={errors.password}
              touched={touched.password}
              secureTextEntry={true}
              autoCompleteType="password"
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => passwordConfirmationRef.current?.focus()}
            />
          </Box>
          <Box marginBottom="m">
            <TextInput
              ref={passwordConfirmationRef}
              icon="lock"
              placeholder="Confirm your Password"
              onChangeText={handleChange("passwordConfirmation")}
              onBlur={handleBlur("passwordConfirmation")}
              error={errors.passwordConfirmation}
              touched={touched.passwordConfirmation}
              secureTextEntry={true}
              autoCompleteType="password"
              autoCapitalize="none"
              returnKeyType="done"
              returnKeyLabel="done"
              onSubmitEditing={() => handleSubmit()}
            />
          </Box>
          <Box alignItems="center" marginTop="m">
            <Button
              variant="primary"
              label="Create your Account"
              onPress={handleSubmit}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
