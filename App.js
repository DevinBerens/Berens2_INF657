import Task from './app/components/Task/Task';
import TaskCategory from './app/components/Task/TaskCategory';
import AddTask from './app/components/Task/AddTask';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from "./app/components/shared/config/customStyles";
import { categoryItems } from "./app/components/Task/TaskData";

const Stack = createNativeStackNavigator();

const myTheme = {
    ...DefaultTheme,
    colors: colors
};

let App = () => {

    let categories = localStorage.getItem('categories');
    if (!categories) {
        localStorage.setItem('categories', JSON.stringify(categoryItems))
    }

    return (
        <NavigationContainer theme={myTheme}>
            <Stack.Navigator>
                <Stack.Screen name="Task List" component={Task}/>
                <Stack.Screen name="Task Category" component={TaskCategory}/>
                <Stack.Screen name="Add Task" component={AddTask} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;