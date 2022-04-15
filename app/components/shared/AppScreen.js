import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import { colors } from "./config/customStyles";

let AppScreen = (props) => {
  const { children } = props;

  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.StatusBarHeight,
    backgroundColor: colors.secondary,
    flex: 3,
    padding: 20,
  },
});

export default AppScreen;
