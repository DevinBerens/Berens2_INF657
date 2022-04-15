import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
import { colors } from "../shared/config/customStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

let TaskCategory = (props) => {
  let [myCategories, setMyCategories] = useState({});

  useEffect(() => {
    AsyncStorage.getItem("categories")
      .then((categories) => {
        setMyCategories(JSON.parse(categories));
      })
      .catch((err) => {
        console.log(err, "error getting");
      });
  }, []);

  if (myCategories["School Work"] !== undefined) {
    return myCategories[props.route.params.category].map((item) => (
      <View style={styles.wrapper} key={item.title}>
        <View style={styles.secondWrapper}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.description}</Text>
        </View>
      </View>
    ));
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.secondary,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    borderRadius: 15,
  },
  secondWrapper: {
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 15,
    marginBottom: 10,
    flexDirection: "column",
    marginLeft: 10,
    justifyContent: "flex-start",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
  },
});

export default TaskCategory;
