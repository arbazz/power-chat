import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { primaryColor } from '../../Config/color';


const Searching = (props) => {

    useEffect(()=>{
        props.navigation.navigate("Result")
    })
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
    cancelContianer:{
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
    },  
    btnContainer:{
        borderColor: 'red',
        borderWidth: 2,
        width: '60%',
        alignItems: 'center',
        height: 240,
        justifyContent: 'center',
        borderRadius: 360,
        borderBottomWidth: 4
    },
    btnText:{
        color: 'red',
        fontSize: 20
    }
})