import React, { useEffect, useContext, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { primaryColor } from '../../Config/color';
import { SeachContext } from '../../Context/SearchProvide';
import firestore from '@react-native-firebase/firestore';

const topics = firestore().collection("addedTopic");

const Searching = (props) => {
    const { topic, desc } = useContext(SeachContext);
    const [searchTopic, setSearchTopic] = topic;
    const [searchDesc, setSearchDesc] = desc;
    const [match, setMatch] = useState([]);

    useEffect(() => {
        // console.log(searchTopic);
        // console.log(searchDesc);
        getMatch();

    },[])

    const getMatch = () => {
        let temp = []
        console.log(searchTopic)
        topics.where("name", "==", searchTopic)
            .get()
            .then((snap) => {
                snap.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                    // console.log(doc.id, " => ", doc.data());
                    temp.push({ docId: doc.id, data: doc.data() });
                });
                setMatch(temp);
                    props.navigation.navigate("Result", {data: temp})

            })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Searching...</Text>
            <View style={styles.cancelContianer}>
                <TouchableOpacity style={styles.btnContainer}>
                    <Text style={styles.btnText}>Cancel Search</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Searching;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: primaryColor,
        marginTop: 30,
        marginLeft: 30
    },
    cancelContianer: {
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnContainer: {
        borderColor: 'red',
        borderWidth: 2,
        width: '60%',
        alignItems: 'center',
        height: 240,
        justifyContent: 'center',
        borderRadius: 360,
        borderBottomWidth: 4
    },
    btnText: {
        color: 'red',
        fontSize: 20
    }
})