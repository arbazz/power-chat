import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { primaryColor } from '../../Config/color';



const Result = ({navigation}) =>{
    return(
        <>
            <View style={styles.container}>
                <Text style={styles.title}>PowerBuddy Found </Text>
                <Image source={require("../../../assets/images/profile.jpeg")} style={styles.image}/>
                <Text style={styles.name}>Micheal Ryan</Text>
                <Text>Start</Text>
                <Text style={styles.help}>Here to help</Text>
                <View style={styles.btnContaienr}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Message")}>
                        <Text style={styles.textbtn}>Accept</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, {borderColor: 'tomato'}]}>
                        <Text style={[styles.textbtn, {color: 'red'}]}>Decline</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.cancleBtn} onPress={() => navigation.goBack()}>
                <Text style={styles.cancel}>X</Text>
            </TouchableOpacity>
        </>
    )
}

export default Result;

const styles = StyleSheet.create({
    image:{
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    container:{
        justifyContent: 'center',
        height: "100%",
        alignItems: 'center'
    },
    title:{
        color: primaryColor,
        textDecorationColor: primaryColor,
        textDecorationLine: "underline",
        paddingBottom: 30,
        fontSize: 30,
        fontWeight: 'bold'
    },
    name:{
        color: primaryColor,
        marginTop: 30,
        fontSize: 24
    },
    help:{
        marginTop: 20,
        color: primaryColor,
        fontWeight: 'bold',
        fontSize: 20
    },
    btnContaienr:{
        flexDirection: "row",
        width: '60%',
        justifyContent: 'space-around',
        marginTop: 50
    },
    btn: {
        borderColor: 'green',
        borderWidth: 2,
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderBottomWidth: 4,
        borderTopWidth: 4
    },
    textbtn:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green'
    },
    cancleBtn:{
        backgroundColor: '#dee0e1',
        marginTop: -40,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cancel:{
        fontSize: 24,
        marginTop: -10,
        fontWeight: 'bold'
    }
})