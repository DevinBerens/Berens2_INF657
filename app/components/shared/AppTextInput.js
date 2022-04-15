import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import customStyles from "./config/customStyles";

let AppTextInput = (props) => {
  const { icon } = props;

  return (
    <View style={styles.wrapper}>
      <MaterialCommunityIcons
        name={icon}
        color={customStyles.colors.black}
        size={10}
        style={styles.icon}
      />
      <TextInput
        placholderTextColor={customStyles.colors.primary}
        style={customStyles.text}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: customStyles.colors.yellow,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
