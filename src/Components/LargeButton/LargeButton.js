import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { primaryColor } from '../../Config/color';


const LargeButton = ({title, props, toGo, width,size}) => {
    return(
        <TouchableOpacity style={[styles.container, {width}]} onPress={() => props.navigation.navigate(toGo)}>
            <Text style={[styles.text, {fontSize: size}]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default LargeButton;

const styles = StyleSheet.create({
    container: {
        width: '80%',
        borderColor: primaryColor,
        borderWidth: 2,
        alignItems: 'center',
        borderBottomWidth: 5
    },
    text: {
        fontSize: 32,
        color: primaryColor,
        height: 100,
        marginTop: 50,
        fontWeight: 'bold'
    }
})