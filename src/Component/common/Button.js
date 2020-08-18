import React from "react";
import {Text, TouchableOpacity} from "react-native";

const Button = ({onPress, children}) => {

    const {textStyle, buttonStyle} = styles;

    return(
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    textStyle: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        color: '#007aff'
    },
    buttonStyle: {
        alignSelf: 'stretch',
        borderColor: '#007aff',
        borderRadius: 2,
        borderWidth: 1,
        flex: 1,
        backgroundColor: '#fff',
        marginLeft: 5,
        marginRight: 5
    }
}

export {Button};