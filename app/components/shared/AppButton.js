import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { colors } from './config/customStyles'

let AppButton = (props) => {
    const { title, color = 'primary', onPress } = props;
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: colors[color] }]}
            onPress={onPress}
        >
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        color: colors.black,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    button: {
        borderRadius: 25,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 15,
        marginVertical: 10
    }
})

export default AppButton;