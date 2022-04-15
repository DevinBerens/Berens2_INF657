import React from "react";
import { StyleSheet, Image } from "react-native";

import AppScreen from "../shared/AppScreen";
import AppForm from "./AppForm";
import AppFormInput from "./AppFormInput";
import SubmitButton from "./SubmitButton";

import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(4).label("Password"),
});

let LoginForm = () => {
  return (
    <AppScreen>
      <Image style={styles.logo} source={require("../../assets/logo.jpg")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <AppFormInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Log In" />
      </AppForm>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginForm;
