import React, { useRef } from "react";
import { TextInput as TextField } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BorderlessButton } from "react-native-gesture-handler";
import { CompositeNavigationProp } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { StackNavigationProp } from "@react-navigation/stack";

import { AuthenticationRoutes, HomeRoutes } from "../components/Navigation";
import TextInput from "../components/Forms/TextInput";
import Checkbox from "../components/Forms/Checkbox";
import { Container, Button, Text, Box } from "../components";

import Footer from "./components/Footer";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long")
    .required("Required"),
});

interface LoginProps {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AuthenticationRoutes, "Login">,
    DrawerNavigationProp<HomeRoutes, "OutfitIdeas">
  >;
}

const Login = ({ navigation }: LoginProps) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    values,
    setFieldValue,
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { email: "", password: "", remember: true },
    onSubmit: () => navigation.navigate("OutfitIdeas"),
  });

  const footer = (
    <Footer
      title="Don't have an account?"
      action="Sign Up here"
      onPress={() => navigation.navigate("SignUp")}
    />
  );

  const passwordRef = useRef<TextField>(null);

  return (
    <Container pattern={0} {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome back
        </Text>
        <Text variant="text" textAlign="center" marginBottom="l">
          Use your credentials below and login to your account
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
            returnKeyType="done"
            returnKeyLabel="done"
            onSubmitEditing={() => handleSubmit()}
          />
          <Box
            flexDirection="row"
            justifyContent="space-between"
            marginVertical="m"
            alignItems="center"
          >
            <Checkbox
              label="Remember me"
              checked={values.remember}
              onChange={() => setFieldValue("remember", !values.remember)}
            />
            <BorderlessButton
              borderless={false}
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text variant="button" color="primary">
                Forgot password
              </Text>
            </BorderlessButton>
          </Box>
          <Box alignItems="center" marginTop="m">
            <Button
              variant="primary"
              label="Login to your Account"
              onPress={handleSubmit}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
