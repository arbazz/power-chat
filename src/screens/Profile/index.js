import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator, TouchableOpacityBase } from 'react-native';
import { primaryColor, secondaryColor } from '../../Config/color';
import { ScrollView } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';

const Profile = ({ navigation }) => {

    const [data, setData] = useState('')

    const handleAccoutnSettingTap = () => {
        navigation.navigate("AccountSettings", { data })
    }

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const uid = await checkLogin();
        const docId = await AsyncStorage.getItem("docId");
        if (!uid) {
            navigation.goBack();
            alert("Please login!");
            return;
        } else {
            firestore().collection("Users").doc(docId).get().then(function (doc) {
                if (doc.exists) {
                    // console.log("Document data:", doc.data());
                    setData(doc.data());
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                    alert("error occured")
                }
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });
        }
    }

    const checkLogin = async () => {
        const uid = await AsyncStorage.getItem("uid");
        return uid;
    };

    if (!data) {
        return (
            <ActivityIndicator />
        )
    } else {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/images/profile.jpeg')}
                />
                <View style={styles.nameCOntainer}>
                    <Text style={styles.name}>{data.firstName} {data.lastName}</Text>
                    <Text style={styles.cases}>{data.cases ? data.cases : 0} CASES</Text>
                </View>
                {/* interests button */}
                <View>
                    <TouchableOpacity style={styles.interestBtn}  onPress={()=>navigation.navigate("AddInterestedTopics")}>
                        <Text style={styles.textInt}>Interests</Text>
                    </TouchableOpacity>
                    {/* to-do:remove */}
                    <Text style={{textAlign: 'center'}}>Please suggest a name. its for adding the topics so one can match with those added topics</Text>
                </View>
                <View style={styles.otherContaienr}>
                    <Text style={[styles.extrafont, styles.aboutmr]}>About Me</Text>
                    <Text style={[styles.extrafont]}>{data.aboutMe}</Text>
                    <Text style={[styles.extrafont, styles.aboutmr]}>Comments</Text>
                    <Text style={[styles.extrafont]}>- This guy knows stuff!!!</Text>
                </View>
                <TouchableOpacity style={styles.btnAccount} onPress={() => handleAccoutnSettingTap()}>
                    <Text style={styles.textaccount}>Account Settings</Text>
                </TouchableOpacity>
                <View style={{ height: 30 }} />
            </ScrollView>
        )
    }
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    image: {
        width: 160,
        height: 160,
        alignSelf: 'center',
        marginTop: 30,
        borderRadius: 360,
        borderColor: 'black',
        borderWidth: 1
    },
    nameCOntainer: {
        alignItems: 'center',
        marginTop: 20
    },
    name: {
        fontSize: 30,
        color: secondaryColor,
        fontWeight: 'bold'
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
    interestBtn: {
        alignSelf: 'center',
        backgroundColor: primaryColor,
        marginTop: 10,
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10
    },
    textInt: {
        color: 'white',
        fontSize: 19,
        fontWeight: 'bold'
    }
})