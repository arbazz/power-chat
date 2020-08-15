import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { primaryColor, secondaryColor } from '../../Config/color';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage'
import { add } from 'react-native-reanimated';

const width = Dimensions.get("window").width;


const topicCollection = firestore().collection('topics');
const addedTopic = firestore().collection("addedTopic");

// using class becuase complexity of state key

class AddInterestedTopics extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            topics: [],
            uid: false,
            added: false,
            selectedTopics: false,
            remove: false
        }
    }


    componentDidMount() {
        this.fetchData();
        this.fetchMyTopic();
    }

    fetchMyTopic = async () => {
        const uid = await AsyncStorage.getItem("uid");
        this.setState({ uid });
        const topics = await addedTopic
            .get();
        const data = topics._docs;
        this.setState({ selectedTopics: data });
        data.length && data.map((e) => {
            // console.log(e.id);
            this.setState({ [e._data.topicDocId]: true })
        })
    }

    handlePressTopic = (id, name) => {
        const { uid, selectedTopics } = this.state;
        // here is docId making it true will make the respective container selected
        if (!this.state[id]) {
            this.setState({ [id]: true });
            addedTopic.add({
                uid,
                topicDocId: id,
                name
            }).then(() => {
                this.setState({ added: name })
                setTimeout(() => { this.setState({ added: false }) }, 5000)
            })
        } else {
            this.setState({ [id]: false });
            this.setState({remove: name});
            setTimeout(() => { this.setState({ remove: false }) }, 5000)
            selectedTopics.length && selectedTopics.map((e)=>{
                console.log(e)
                if(e._data.topicDocId === id){
                    firestore().collection("addedTopic").doc(e.id).delete();
                }
            })
        }
    };

    fetchData = async () => {
        const topics = await topicCollection
            .get();
        this.setState({ topics: topics._docs });
        const data = topics._docs;

    };

    render() {
        const { topics, added, remove } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Select a topic you want to be match with.</Text>
                <Text style={!!added && styles.helper}> {!!added && added + " added"}</Text>
                <Text style={[!!remove && styles.helperm]}> {!!remove && remove + " remove"}</Text>
                <View style={styles.row}>
                    {!!topics.length && topics.map((e, i) => {
                        // console.log(e.id)
                        // if docId will be in the state change color 
                        return (
                            <TouchableOpacity key={e.id} style={[styles.container2, this.state[e.id] && styles.selected]} onPress={() => this.handlePressTopic(e.id, e._data.name)}>
                                <Text style={styles.title}>{e._data.name}</Text>
                            </TouchableOpacity>
                        )
                    })}
                    {!topics.length &&
                        <View>
                            <ActivityIndicator />
                        </View>}
                </View>
            </View>
        )
    };
};

export default AddInterestedTopics;


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        color: primaryColor,
        fontSize: 20,
        alignSelf: 'center',
        paddingTop: 30
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 20,
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    seprator: {
    },
    container2: {
        width: width / 2.2,
        borderColor: primaryColor,
        borderWidth: 2,
        justifyContent: 'center',
        height: 90,
        marginBottom: 20
    },
    title: {
        color: primaryColor,
        fontSize: 20,
        alignSelf: 'center'
    },
    selected: {
        backgroundColor: secondaryColor
    },
    helper: {
        textAlign: 'center',
        backgroundColor: '#25ada5',
        alignSelf: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 4,
        color: 'white',
        marginTop: 3
    },
    helperm: {
        textAlign: 'center',
        backgroundColor: 'tomato',
        alignSelf: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 4,
        color: 'white',
        marginTop: 3
    }
})