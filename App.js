import Task from "./app/components/Task/Task";
import TaskCategory from "./app/components/Task/TaskCategory";
import AddTask from "./app/components/Task/AddTask";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "./app/components/shared/config/customStyles";
import { categoryItems } from "./app/components/Task/TaskData";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const myTheme = {
  ...DefaultTheme,
  colors: colors,
};

let App = () => {
  AsyncStorage.getItem("categories")
    .then((categories) => {
      if (!categories) {
        AsyncStorage.setItem("categories", JSON.stringify(categoryItems)).catch(
          (err) => {
            console.log(err, "error setting");
          }
        );
      }
    })
    .catch((err) => {
      console.log(err, "error getting");
    });

  return (
    <NavigationContainer theme={myTheme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.background,
            borderColor: colors.border,
          },
        }}
      >
        <Stack.Screen name="Task List" component={Task} />
        <Stack.Screen name="Task Category" component={TaskCategory} />
        <Stack.Screen name="Add Task" component={AddTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
