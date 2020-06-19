import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { primaryColor } from '../../Config/color';
import firestore from '@react-native-firebase/firestore';
import { LoginContext } from '../../Context/LoginProvider';
import AsyncStorage from '@react-native-community/async-storage';

const topicsCollection = firestore().collection('topics');

export default function NewTopic() {
    const {user , login } = React.useContext(LoginContext);
    const [userData, setUserData] = user;
    
    const [topic, setTopic] = useState("");
    const [loading, setLoading] = useState(false);

    const handleAddTopic = async () => {
        const uid = await AsyncStorage.getItem("uid");
        console.log(uid)
        if(!uid){
            alert("you need to login first");
            return;
        }
        if (topic && uid) {
            setLoading(true);
            addData(uid);
        }
    }

    const addData = (uid) => {
        topicsCollection
            .add({
                name: topic,
                addedBy: uid,
            })
            .then(() => {
                console.log('User added!');
                setLoading(false);
                alert("topic added")
            });
    }
    return (
        <View style={styles.contianer}>
            <TextInput
                style={styles.textInput}
                placeholder="Topic Title"
                value={topic}
                onChangeText={(e) => setTopic(e)}
            />
            <TouchableOpacity style={styles.btn} onPress={handleAddTopic}>
                {!loading ? <Text style={styles.textbtn}>Create Topic</Text>
                    : <ActivityIndicator size={30} />}
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        width: '95%',
        justifyContent: "space-around",
        alignSelf: 'center'
    },
    textInput: {
        borderColor: 'black',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    btn: {
        borderColor: primaryColor,
        borderWidth: 3,
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 10,
        borderBottomWidth: 5
    },
    textbtn: {
        fontSize: 28,
        color: primaryColor
    }
})