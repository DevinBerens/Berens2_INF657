import React, { useCallback, useState } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
  Text,
} from "react-native";
import { Picker } from "@react-native-community/picker";
import { colors } from "../shared/config/customStyles";
import { taskCategories, categoryItems } from "./TaskData";
import AsyncStorage from "@react-native-async-storage/async-storage";

let AddTask = (props) => {
  let { navigation } = props;
  let [taskName, setTaskName] = useState("");
  let [taskDescription, setTaskDescription] = useState("");
  let [selectedValue, setSelectedValue] = useState("School Work");
  let [error, setError] = useState(false);

  let submitTask = useCallback(() => {
    if (!taskName || !taskDescription) {
      setError(true);
    } else {
      setError(false);
      let myCategories = categoryItems;
      AsyncStorage.getItem("categories")
        .then((categories) => {
          if (categories) {
            myCategories = JSON.parse(categories);
            myCategories[selectedValue].push({
              title: taskName,
              description: taskDescription,
              category: selectedValue,
            });
            AsyncStorage.removeItem("categories")
              .then(() => {
                AsyncStorage.setItem(
                  "categories",
                  JSON.stringify(myCategories)
                ).catch((err) => {
                  console.log(err, "error setting");
                });
              })
              .catch((err) => {
                console.log(err, "error clearing");
              });
            navigation.navigate("Task List");
          }
        })
        .catch((err) => {
          console.log(err, "error getting");
        });
    }
  }, [taskName, taskDescription, selectedValue]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.formItem}
        placeholder="Task Name"
        onChangeText={(text) => setTaskName(text)}
      />
      {error && !taskName && (
        <Text style={{ color: "#f00", marginLeft: 10 }}>
          * Title is required
        </Text>
      )}
      <TextInput
        style={styles.formItem}
        placeholder="Task Description"
        multiline={true}
        numberOfLines={6}
        onChangeText={(text) => setTaskDescription(text)}
      />
      {error && !taskDescription && (
        <Text style={{ color: "#f00", marginLeft: 10 }}>
          * Description is required
        </Text>
      )}
      <Text style={styles.label}>Task Category</Text>
      <Picker
        style={styles.formItem}
        selectedValue={selectedValue}
        onValueChange={(value) => setSelectedValue(value)}
      >
        {taskCategories.map((category) => (
          <Picker.Item
            key={category.key}
            label={category.title}
            value={category.title}
            style={styles.pickerItem}
          />
        ))}
      </Picker>
      <TouchableOpacity style={styles.button} onPress={submitTask}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    flexDirection: "column",
    padding: 15,
  },
  formItem: {
    backgroundColor: colors.primary,
    padding: 15,
    margin: 10,
    borderRadius: 15,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    margin: 10,
    borderRadius: 15,
    textAlign: "center",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  label: {
    fontSize: 18,
    color: colors.primary,
    paddingLeft: 10,
    paddingTop: 10,
  },
});

export default AddTask;
