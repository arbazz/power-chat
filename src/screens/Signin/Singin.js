import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { primaryColor } from '../../Config/color';
import { TouchableOpacity } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import { LoginContext } from '../../Context/LoginProvider';
import AsyncStorage from '@react-native-community/async-storage';
import { CommonActions } from "@react-navigation/native";
import firestore from '@react-native-firebase/firestore';

export default function SignIn({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { user, login } = useContext(LoginContext);
    const [userData, setUserData] = user
    const [isLogin, setIsLogin] = login

    useEffect(() => {
        console.log(login)
        check()
    }, [])

    const check = async () => {
        const uid = await AsyncStorage.getItem("uid");
        if (uid) {
            console.log(uid)
            setIsLogin(true)
        }
    }

    const saveDocId = async (uid) => {
        console.log(uid)
        firestore()
            .collection('Users')
            // Filter results
            .where('uid', '==', uid)
            .get()
            .then(querySnapshot => {
                /* ... */
                // console.log(querySnapshot._docs[0].id)
                AsyncStorage.setItem("docId", querySnapshot._docs[0].id);
            });
    }

    const handleLogin = () => {
        if (email && password) {
            auth()
                .signInWithEmailAndPassword(email, password)
                .then((res) => {
                    // console.log('User account created & signed in!', res.user._user);
                    setUserData(res.user._user)
                    AsyncStorage.setItem("uid", res.user._user.uid);
                    saveDocId(res.user._user.uid);
                    setIsLogin(true)
                    // navigation.navigate("Home");
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                        setError('That email address is already in use!')
                    }

                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                        setError('That email address is invalid!')
                    }

                    if (error.code === 'auth/wrong-password') {
                        console.log('wrong password');
                        setError('Incorrect password or email!')
                    }
                    if (error.code === 'auth/user-not-found') {
                        console.log('no user');
                        setError('Incorrect password or email!')
                    }

                    console.log(error);
                });
        } else {
            setError("Email or Paswrod cannot be Empty");
        }
    }

    return (
        <>
            {!!error && <View style={styles.errorConatienr}>
                <Text style={{ color: 'white' }}>{error}</Text>
            </View>}
            <View style={styles.container}>
                {!error && <Text style={styles.singText}>Sign in</Text>}
                <TextInput
                    style={styles.textInput}
                    onChangeText={(e) => { setEmail(e) }}
                    value={email}
                    placeholder="Email"
                    onFocus={() => { setError('') }}
                />
                <TextInput
                    style={styles.textInput}
                    value={password}
                    placeholder="Password"
                    onChangeText={(e) => { setPassword(e) }}
                    secureTextEntry
                    onFocus={() => { setError('') }}
                />
                <TouchableOpacity style={styles.smallBtnContianer}>
                    <Text style={styles.smlText}>Forget Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.smallBtnContianer} onPress={() => { navigation.navigate("Register") }}>
                    <Text style={styles.smlText}>Register Here</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnContainer} onPress={handleLogin}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnContainer} onPress={() => setIsLogin(true)}>
                    <Text style={styles.btnText}>Use Without Login</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1,
        width: "90%",
        alignSelf: 'center'
    },
    singText: {
        color: primaryColor,
        fontSize: 42,
        fontWeight: 'bold',
    },
    textInput: {
        borderColor: 'black',
        borderWidth: 1,
        alignSelf: 'center',
        width: "100%",
        marginTop: 30,
        borderRadius: 15,
        fontSize: 18,
        paddingLeft: 5
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
    smallBtnContianer: {
        marginTop: 10,
        marginLeft: 4
    },
    smlText: {
        color: primaryColor,
        fontSize: 18
    },
    errorConatienr: {
        backgroundColor: 'tomato',
        width: '90%',
        alignSelf: 'center',
        marginTop: 30,
        padding: 10
    }
})