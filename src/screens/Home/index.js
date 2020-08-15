import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LargeButton } from '../../Components/index'
import { LoginContext } from '../../Context/LoginProvider';
import AsyncStorage from '@react-native-community/async-storage';

const Home = (props) => {
  const { user, login } = useContext(LoginContext);
  const [userData, setUserData] = user;
  const [isLogin, setIsLogin] = login;

  useEffect(() => {
    // console.log(login)
  }, [])

  const onTap = () =>{
    if(isLogin){
      AsyncStorage.removeItem("uid");
      AsyncStorage.removeItem("docId");
    }
    setIsLogin(false)
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.btnContainer}>
          <LargeButton title="I NEED ADVICE" toGo={"Topics"} props={props} width={"80%"} size={32} />
          <View style={styles.seprator} />
          <LargeButton title="I WANT TO HELP" toGo={"Help"} props={props} width={"80%"} size={32} />
        </View>
      </View>
      <View style={styles.login}>
        <TouchableOpacity onPress={() => { onTap() }}>
          <Text>{ isLogin ? "Logout" : "Login"}</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginBottom: 50,
    height: '100%'
  },
  btnContainer: {
    alignItems: 'center',
  },
  seprator: {
    marginTop: 100
  },
  login: {
    alignItems: 'center',
    marginTop: -50,
    marginBottom: 5,
    paddingTop: 4
  }
})