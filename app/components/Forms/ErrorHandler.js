import React from "react";
import { StyleSheet } from "react-native";
import CustomText from "../shared/CustomText";

let ErrorHandler = (props) => {
  const { visible, error } = props;
  if (!visible || !error) {
    return null;
  }
  console.log(error, "error");
  return <CustomText style={styles.error}>{error}</CustomText>;
};

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});

export default ErrorHandler;
