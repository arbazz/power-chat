import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { primaryColor, secondaryColor } from '../../Config/color';
import { ScrollView } from 'react-native-gesture-handler';


const Profile = ({ navigation }) => {
    console.log(navigation)

    const handleAccoutnSettingTap = () => {
        navigation.navigate("AccountSettings")
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                style={styles.image}
                source={require('../../../assets/images/profile.jpeg')}
            />
            <View style={styles.nameCOntainer}>
                <Text style={styles.name}>Larry David</Text>
                <Text style={styles.cases}>100 CASES</Text>
            </View>
            <View style={styles.otherContaienr}>
                <Text style={[styles.extrafont, styles.aboutmr]}>About Me</Text>
                <Text style={[styles.extrafont]}>(18 year old)</Text>
                <Text style={[styles.extrafont]}>University with lnowlegde of python and java. Willing to help with assingments or answering any general questions</Text>
                <Text style={[styles.extrafont, styles.aboutmr]}>Comments</Text>
                <Text style={[styles.extrafont]}>- This guy knows stuff!!!</Text>
            </View>
            <TouchableOpacity style={styles.btnAccount} onPress={() => handleAccoutnSettingTap()}>
                <Text style={styles.textaccount}>Account Settings</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 160,
        height: 160,
        alignSelf: 'center',
        marginTop: 30,
        borderRadius: 360,
        borderColor: 'black',
        borderWidth: 1
    },
    nameCOntainer: {
        alignItems: 'center',
        marginTop: 20
    },
    name: {
        fontSize: 30,
        color: secondaryColor,
        fontWeight: 'bold'
    },
    cases: {
        fontSize: 22,
        marginTop: 5,
    },
    otherContaienr: {
        marginTop: 30,
        width: '90%',
        alignSelf: 'center'
    },
    extrafont: {
        fontSize: 20,
        color: secondaryColor,
        marginTop: 5
    },
    aboutmr: {
        textDecorationLine: 'underline',
        paddingTop: 10
    },
    btnAccount: {
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        alignItems: 'center',
        borderColor: secondaryColor,
        borderWidth: 4,
        paddingVertical: 15,
        borderRadius: 14
    },
    textaccount: {
        color: secondaryColor,
        fontSize: 33
    }
})