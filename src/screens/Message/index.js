import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ImageBackgroundBase,
} from 'react-native';
import { primaryColor } from '../../Config/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';

const message = firestore().collection("messages");

const Message = ({ navigation, route }) => {

    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState('');
    const [uid, setUid] = useState('');

    useEffect(() => {
        fetchMessages()
    }, [])

    const fetchMessages = async () => {
        const uid = await AsyncStorage.getItem("uid");
        console.log(route.params.topic.data.name);
        const topicName = route.params.topic.data.name;
        setUid(uid);
        let temp = []
        message.where("groupId", "==", uid + route.params.data.uid + route.params.topic.data.name)
            .get()
            .then((snap) => {
                snap.forEach(function (doc) {
                    temp.push({ docId: doc.id, data: doc.data() });
                });
                setMessages(temp);
                // console.log(temp)
            })
    }

    const handleMessageSend = () => {
        if (currentMessage) {
            setMessages(e => [...e, {data: {message: currentMessage}}]);
            console.log(messages);
            // groupid will be user and matched user uid when retrieving
            message.add({
                message: currentMessage,
                uid,
                matchUid: route.params.data.uid,
                groupId: uid + route.params.data.uid + route.params.topic.data.name
            })
            setCurrentMessage('');
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.Message}>
                {!!messages.length && messages.map((e, i) => {
                    // console.log(e)
                    return (
                        <View key={i} style={styles.messageCotnaier}>
                            <Text style={styles.meText}>Me - </Text>
                            <Text style={styles.hey}>{e.data.message}</Text>
                        </View>
                    )
                })}
            </ScrollView>
            <View style={styles.secondContainer}>
                <View style={styles.inputCOnteinr}>
                    <TextInput style={styles.textInput}
                        onChangeText={e => setCurrentMessage(e)}
                        value={currentMessage}
                    />
                    <TouchableOpacity onPress={handleMessageSend} style={styles.sendBtnCont} >
                        <AntDesign style={styles.send} name="arrowup" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.disconect}>
                    <Text style={styles.textdis}>Disconnect</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Message;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },
    messageCotnaier: {
        flexDirection: 'row',
        marginTop: 20
    },
    secondContainer: {
        marginBottom: 40
    },
    Message: {
        // marginTop: 40,
        marginLeft: 30
    },
    meText: {
        color: primaryColor,
        fontWeight: 'bold',
        fontSize: 17
    },
    hey: {
        fontSize: 17
    },
    inputCOnteinr: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    textInput: {
        borderColor: 'black',
        borderWidth: 1,
        width: '70%',
        borderRadius: 10,
        marginRight: '5%',
        height: 50,
        paddingHorizontal: 10
    },
    send: {
        alignSelf: 'center',
        color: primaryColor,
        fontSize: 22
    },
    disconect: {
        width: '90%',
        borderColor: 'tomato',
        borderWidth: 2,
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 10,
        height: 50,
        justifyContent: 'center',
        borderBottomWidth: 5,
        borderTopWidth: 4,
        borderLeftWidth: 3,
        borderRightWidth: 3
    },
    textdis: {
        color: 'tomato',
        fontWeight: 'bold',

    },
    sendBtnCont: {
        borderColor: primaryColor,
        borderWidth: 3,
        justifyContent: 'center',
        borderRadius: 65,
        width: '12%',
    }
})