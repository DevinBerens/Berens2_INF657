import React from 'react';
import { Text } from 'react-native';

let CustomText = (props) => {
    const { children, style } = props;

    return (
        <Text style={style}>{children}</Text>
    );
}

export default CustomText;