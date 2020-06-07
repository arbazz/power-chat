import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { primaryColor } from '../../Config/color';
import { LargeButton } from '../../Components/index'


const CreateTopic = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.btnContainer}>
        <LargeButton title="NEW TOPICS" toGo={"NewTopic"} props={props} width={"80%"} size={32}/>
        <View style={styles.seprator} />
        <LargeButton title="MY TOPICS"  toGo={"Help"} props={props} width={"80%"} size={32}/>
      </View>
        </View> 
    )
}

export default CreateTopic;

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