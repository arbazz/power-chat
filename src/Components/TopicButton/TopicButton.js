import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { primaryColor } from '../../Config/color';
import { TouchableOpacity } from 'react-native-gesture-handler';

const width = Dimensions.get("window").width;

const TopicButton = ({title, nav}) => {

    return(
        <TouchableOpacity style={styles.container} onPress={() => {nav.navigate("DescForm")}}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TopicButton;


const styles= StyleSheet.create({
    container: {
        width: width/2.2,
        borderColor: primaryColor,
        borderWidth: 2,
        justifyContent: 'center',
        height: 90,
        marginBottom: 20
    },
    title: {
        color: primaryColor,
        fontSize: 20,
        alignSelf: 'center'
    }
})