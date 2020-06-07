import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { primaryColor } from '../../Config/color';


const NewTopic = (props) => {

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Topic title"
                style={styles.textInput}
            />
            <TouchableOpacity style={styles.btnContianer}>
                <Text style={styles.btnText}>CREATE TOPIC</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NewTopic;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-evenly'
    },
    textInput: {
        borderColor: 'grey',
        borderWidth: 1,
        width: '90%',
        alignSelf: 'center',
        padding: 14,
        height: 60,
        // marginTop: '30%',
    },
    btnContianer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: primaryColor,
        width: '90%',
        alignSelf: 'center',
        height: 60,
        borderBottomWidth: 4,
        borderRadius: 10
    },
    btnText: {
        color: primaryColor,
        fontSize: 30
    }

})