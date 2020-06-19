import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { primaryColor } from '../../Config/color';


const Help = ({navigation}) => {
    // console.log(navigation)
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>What would you like to do?</Text>

            <TouchableOpacity style={styles.btnContianer} onPress={() =>{ navigation.navigate("CreateTopic")}}>
                <Text style={styles.btnText}>SEARCH</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContianer}  onPress={() =>{ navigation.navigate("CreateTopic")}}>
                <Text style={styles.btnText}>CREATE TOPIC</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContianer} onPress={() => navigation.navigate("Profile")}>
                <Text style={styles.btnText}>PROFILE</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Help;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
    },
    titleText: {
        fontSize: 32,
            color: primaryColor
    },
    btnContianer: {
        borderColor: primaryColor,
        borderWidth: 2,
        height: '12%',
        justifyContent:'center',
        width: '80%',
        marginTop: 40,
        alignItems: 'center',

    },
    btnText: {
        fontSize: 30,
        color: primaryColor
    }
})