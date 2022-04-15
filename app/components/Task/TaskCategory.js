import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {colors} from "../shared/config/customStyles";

let TaskCategory = (props) => {
    let categories = localStorage.getItem('categories')
    categories = JSON.parse(categories);
    return (categories[props.route.params.category].map((item) => (
        <View style={styles.wrapper} key={item.title}>
            <View style={styles.secondWrapper}>
                <Text style={styles.title}>{item.title}</Text>
                <Text>{item.description}</Text>
            </View>
        </View>
    )))
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.secondary,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        borderRadius: 15,
    },
    secondWrapper: {
        flex: 1,
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
        paddingBottom: 10
    },
})

export default TaskCategory;