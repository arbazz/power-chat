import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import { primaryColor } from '../../Config/color';
import auth from '@react-native-firebase/auth';
import { ScrollView } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';




export default function Register({navigation}) {
    const [email, setEmail] = useState("");
    const [confrimEmail, setConfirmEmail] = useState("");
    const [username, SetUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    useEffect(() => {
     
    }, [])


    const handleSignup = () => {
        if (email && confrimEmail && username && password) {
            if (email === confrimEmail) {
                setLoading(true)
                auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then((lo) => {
                        console.log('User account created & signed in!', lo.user.uid);
                        firestore()
                            .collection('Users').add({
                                username,
                                email,
                                uid: lo.user.uid,
                                firstName,
                                lastName
                            })
                            .then(() => {
                                console.log('User added!');
                                navigation.navigate("Home")
                            });
                    })
                    .catch(error => {
                        if (error.code === 'auth/email-already-in-use') {
                            console.log('That email address is already in use!');
                            setError('That email address is already in use!')
                            setLoading(false)
                        }

                        if (error.code === 'auth/invalid-email') {
                            console.log('That email address is invalid!');
                            setError('That email address is invalid!')
                            setLoading(false)
                        }
                        if (error.code === 'auth/weak-password') {
                            console.log('That email passwrod is invalid!');
                            setError(' Password should be at least 8 characters')
                            setLoading(false)
                        }

                        // console.error(error);
                        console.log(error)
                    });
            } else {
                setError("email does not match")
                setLoading(false)
            }
        } else {
            setError("Sorry, fields cannot be empty")
            setLoading(false)
        }
    }

    return (
        <ScrollView>
            {!!error && <View style={styles.errorConatienr}>
                <Text style={{ color: 'white' }}>{error}</Text>
            </View>}
            <View style={styles.container}>
                {!error && <Text style={styles.signup}>Sign up</Text>}
                <Text>Email</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter Email"
                    onChangeText={(e) => { setEmail(e) }}
                    value={email}
                    onFocus={() => setError("")}
                />
                <Text>Confrim Email</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Confirm Email"
                    onChangeText={(e) => { setConfirmEmail(e) }}
                    value={confrimEmail}
                    onFocus={() => setError("")}

                />
                <Text>Username</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Create Username"
                    onChangeText={(e) => { SetUsername(e) }}
                    value={username}
                    onFocus={() => setError("")}

                />
                <Text>First name</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Create First Name"
                    onChangeText={(e) => { setFirstName(e) }}
                    value={firstName}
                    onFocus={() => setError("")}

                />
                <Text>Last name</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Create Last Name"
                    onChangeText={(e) => { setLastName(e) }}
                    value={lastName}
                    onFocus={() => setError("")}

                />
                <Text>password</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Create Password"
                    onChangeText={(e) => { setPassword(e) }}
                    value={password}
                    onFocus={() => setError("")}

                />
                <TouchableOpacity style={styles.btnContainer} onPress={handleSignup}>
                    {!loading && <Text style={styles.btnText}>Sign Up</Text>}
                    {!!loading && <ActivityIndicator />}
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        width: '90%',
        alignSelf: 'center'
    },
    signup: {
        fontSize: 42,
        color: primaryColor,
        fontWeight: 'bold'
    },
    textInput: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        paddingRight: 5,
        marginBottom: 15
    },
    btnContainer: {
        marginTop: 14,
        borderColor: primaryColor,
        borderWidth: 3,
        alignItems: 'center',
        borderRadius: 10,
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 22,
        color: primaryColor,
        paddingVertical: 13
    },
    errorConatienr: {
        backgroundColor: 'tomato',
        width: '90%',
        alignSelf: 'center',
        marginTop: 30,
        padding: 10
    }
})