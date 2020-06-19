import React, { useEffect, useState, Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LargeButton } from '../../Components/index'
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import firestore from '@react-native-firebase/firestore';

export default function MyTopics(props) {

    const [topic, setTopics] = useState([]);

    useEffect(() => {
        fetchMyTopic();
    }, [])

    const fetchMyTopic = async () => {
        const uid = await AsyncStorage.getItem("uid");
        if (!uid) {
            alert("Please login!");
            return;
        } else if (uid) {

            firestore()
                .collection('topics')
                // Filter results
                .where('addedBy', '==', uid)
                .get()
                .then(querySnapshot => {
                    /* ... */
                    console.log(querySnapshot)
                    setTopics(querySnapshot._docs);
                });

        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.btnContainer}>
                {!!topic.length && topic.map((e, i) => {
                    return (
                        <React.Fragment key={i}>
                            <LargeButton title={e._data.name} toGo={"NewTopic"} props={props} width={"80%"} size={32} />
                            <View style={styles.seprator} />
                        </React.Fragment>
                    )
                })}
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    btnContainer: {
        alignItems: 'center',
        marginTop: 10
    },
    seprator: {
        marginTop: 100
    }

})