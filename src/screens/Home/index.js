import React, {useContext, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LargeButton } from '../../Components/index'
import {LoginContext} from '../../Context/LoginProvider';

const Home = (props) => {
  
  useEffect(()=> {
    // console.log(login)
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <LargeButton title="I NEED ADVICE" toGo={"Topics"} props={props} width={"80%"} size={32}/>
        <View style={styles.seprator} />
        <LargeButton title="I WANT TO HELP"  toGo={"Help"} props={props} width={"80%"} size={32}/>
      </View>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginBottom: 50
  },
  btnContainer: {
    alignItems: 'center',
  },
  seprator: {
    marginTop: 100
  }
})