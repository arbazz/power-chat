import React, { useState, useReducer, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { primaryColor, secondaryColor } from '../../Config/color';
import { ScrollView, } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';

export default function AccountSettings({route}) {

    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [aboutMe, setAboutMe] = useState("");
    const [NotificationTag, setNotificationTag] = useState("");
    const [passwrod, setPaswword] = useState("");
    const [dob, setDob] = useState("");
    const [data, setData] = useState('');

    useEffect(()=>{
        // console.log(route.params.data);
        // getthing from route if data exist prefilling the fields
        if(route.params.data){
            const data = route.params.data;
            setData(route.params.data);
            setUserName(data.username);
            setName(data.firstName + " " + data.lastName);
            setAboutMe(data.aboutMe)
        }
    },[])

    const handleAccoutnSettingTap = async() =>{
        const docId = await AsyncStorage.getItem("docId");
        console.log(docId);
        if(!docId){
            alert("Please login first");
        }else if(!username){
            alert("username cannot be empty");
        }else if(!aboutMe){
            alert("about me cannot be empty");
        }else{
            var docRef = firestore().collection('Users').doc(docId);
            docRef
            .update({
                username,
                firstName: name,
                aboutMe
            }).then(()=>{
                alert("changes saved");
            }).catch((e)=>{
                alert(e);
            })
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.firstCPnmtoaenr}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/images/profile.jpeg')}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>Name</Text>
                    <TextInput
                        style={styles.textInp}
                        value={name}
                        onChangeText={(e) => setName(e)}
                    />
                    <Text style={styles.name}>Username</Text>
                    <TextInput
                        style={styles.textInp}
                        value={username}
                        onChangeText={(e) => setUserName(e)}
                    />
                </View>
            </View>
            <View style={styles.otherContaienr}>
                <Text style={[styles.extrafont]}>About Me</Text>
                <TextInput 
                    style={[styles.textInp, styles.textArea]}
                    multiline={true}
                    onChangeText={(e) => setAboutMe(e)}
                    value={aboutMe}
                />
            </View>
            <TouchableOpacity style={styles.btnAccount} onPress={handleAccoutnSettingTap}>
                <Text style={styles.textaccount}>save</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 160,
        height: 160,
        borderRadius: 360,
        borderColor: 'black',
        borderWidth: 1
    },
    nameCOntainer: {
        alignItems: 'center',
        marginTop: 20
    },
    name: {
        fontSize: 20,
        color: secondaryColor,
        marginTop: 10,
        marginBottom: 5
    },
    cases: {
        fontSize: 22,
        marginTop: 5,
    },
    otherContaienr: {
        marginTop: 30,
        width: '90%',
        alignSelf: 'center'
    },
    extrafont: {
        fontSize: 20,
        color: secondaryColor,
        marginTop: 5
    },
    aboutmr: {
        textDecorationLine: 'underline',
        paddingTop: 10
    },
    btnAccount: {
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        alignItems: 'center',
        borderColor: secondaryColor,
        borderWidth: 4,
        paddingVertical: 15,
        borderRadius: 14
    },
    textaccount: {
        color: secondaryColor,
        fontSize: 33
    },
    textInp: {
        borderColor: 'grey',
        borderWidth: 1,
        height: 35
    },
    firstCPnmtoaenr: {
        flexDirection: 'row',
        marginTop: 30,
        width: '90%',
        alignSelf: 'center',
    },
    textContainer: {
        width: '50%',
        marginLeft: 20,
        marginTop: -20
    },
    textArea: {
        height: 200,
        textAlignVertical: 'top'
    }
})