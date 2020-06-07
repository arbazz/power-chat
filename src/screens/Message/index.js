import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ImageBackgroundBase
} from 'react-native';
import { primaryColor } from '../../Config/color';


const Message = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.Message}>
                <View style={styles.messageCotnaier}>
                    <Text style={styles.meText}>Me - </Text>
                    <Text style={styles.hey}>Hey !!</Text>
                </View>
                <View style={styles.messageCotnaier}>
                    <Text style={styles.meText}>Me - </Text>
                    <Text style={styles.hey}>Hey !!</Text>
                </View>
            </View>
            <View style={styles.secondContainer}>
                <View style={styles.inputCOnteinr}>
                <TextInput style={styles.textInput}/>
                <Text style={styles.send}>send</Text>
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
    secondContainer:{
        marginBottom: 40
    },
    Message:{
        marginTop: 40,
        marginLeft: 30
    },
    meText:{
        color: primaryColor,
        fontWeight: 'bold',
        fontSize: 17
    },
    hey:{
        fontSize: 17
    },
    inputCOnteinr:{
        flexDirection: 'row',
        alignSelf: 'center'
    },
    textInput:{
        borderColor: 'black',
        borderWidth: 1,
        width: '70%',
        borderRadius: 10,
        marginRight: '5%',
        height: 50,
        paddingHorizontal: 10
    },
    send:{
        borderColor: primaryColor,
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 40,
        color: primaryColor
    },
    disconect:{
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
    textdis:{
        color: 'tomato',
        fontWeight: 'bold',

    }
})