import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import { colors } from '../shared/config/customStyles';
import Icon from "../shared/Icon";
import {taskCategories} from "./TaskData";

let Task = (props) => {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <TouchableOpacity style={styles.addTask} onPress={() =>
                    navigation.navigate('Add Task')
                }>
                    <Icon
                        name='plus'
                        backgroundColor={colors.secondary}
                    />
                    <Text style={styles.textWrapper}>Add Task</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Task Categories</Text>
            <View style={styles.wrapper}>
                <FlatList
                    data={taskCategories}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.secondWrapper} onPress={() =>
                            navigation.navigate('Task Category', { category: item.title })
                        }>
                            <Icon
                                name={item.icon.name}
                                backgroundColor={item.icon.backgroundColor}
                            />
                            <Text style={styles.textWrapper}>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary,
        flexDirection: "column",
        padding: 15,
        paddingTop: 25,
    },
    wrapper: {
        backgroundColor: colors.secondary,
        padding: 20,
        borderRadius: 15,
    },
    addTask: {
        flex: 1,
        backgroundColor: colors.primary,
        padding: 20,
        borderRadius: 15,
        flexDirection: "row",
        marginLeft: 10,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    secondWrapper: {
        flex: 1,
        backgroundColor: colors.primary,
        padding: 20,
        borderRadius: 15,
        marginBottom: 10,
        flexDirection: "row",
        marginLeft: 10,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    textWrapper: {
        fontWeight: "bold",
        fontSize: 20,
        padding: 20,
    },
    title: {
        fontWeight: "bold",
        fontSize: 25,
        padding: 5,
        paddingLeft: 30,
        color: colors.primary,
    },
})

export default Task;