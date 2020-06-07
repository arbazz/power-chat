import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { primaryColor } from '../../Config/color';
import { TopicButton } from '../../Components/index'

const Topics = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select a topic based on your issue</Text>
            <View style={styles.row}>
                <TopicButton title="Gaming" nav={navigation}/>
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