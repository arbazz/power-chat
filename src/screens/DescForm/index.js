import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { primaryColor } from '../../Config/color';
import { TextInput } from 'react-native-gesture-handler';


const DescForm = ({navigation}) => {

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titleText}>Describe your situation here</Text>
            <Text style={styles.titleText}>(be specific)</Text>

            <TextInput
                style={styles.input}
                multiline
                placeholder={"comp sci, homework, college, lab, assistance"}
            />
            <Text style={styles.titleText}>Age preference</Text>
            <TouchableOpacity style={styles.enterBtnContianer} onPress={()=>navigation.navigate("Searching")}>
                <Text style={styles.textEnter}>Enter</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default DescForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        backgroundColor: "white"
    },
    titleText: {
        fontSize: 25,
        color: primaryColor,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginTop: 20
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        width: '90%',
        marginTop: 20,
        height: '40%',
        padding: 10,
        fontSize: 18
    },
    enterBtnContianer: {
        borderColor: primaryColor,
        borderWidth: 3,
        width: '40%',
        marginTop: 40,
        height: "20%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 360,
        borderBottomWidth: 7
    },
    textEnter: {
        fontSize: 26,
        color: primaryColor,
        fontWeight: 'bold'
    }
})