import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { primaryColor } from '../../Config/color';
import { TopicButton } from '../../Components/index'
import firestore from '@react-native-firebase/firestore';

const topicCollection = firestore().collection('topics');

const Topics = ({ navigation }) => {

    const [topics, setTopics] = useState([])
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const topics = await topicCollection
            .get();
       console.log(topics._docs[0]._data)
       setTopics(topics._docs);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select a topic based on your issue</Text>
            <View style={styles.row}>
            {!!topics.length && topics.map((e, i) => {
                return(
                    <TopicButton title={e._data.name} nav={navigation} key={i}/>
                )
            })}
            {!topics.length &&
            <View>
                <ActivityIndicator />
                </View>}
            </View>
        </View>
    )
}

export default Topics;


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        color: primaryColor,
        marginTop: 20,
        fontSize: 20,
        alignSelf: 'center'
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 20,
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    seprator: {
    }
})