import React from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList, Text } from 'react-native';
import { colors } from '../shared/config/customStyles'
import Icon from '../shared/Icon';
import { taskCategories } from './TaskData';

let TaskProperties = (props) => {
    const { navigation } = props;
    return (
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
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.secondary,
        padding: 20,
        borderRadius: 15,
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
});

export default TaskProperties;