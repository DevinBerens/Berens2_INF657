import { Platform } from 'react-native';

export const colors = {
    primary: "#F7F2D4",
    secondary: "#5A18C9",
    background: "#5A18C9",
    text: "#F7F2D4",
    border: "#F7F2D4",
    white: "#fff",
    black: "#000",
    yellow: '#FDDC22',
}

export default {
    text: {
        color: colors.black,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        width: '100%'
    },
    colors,
};