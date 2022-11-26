import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import { Context } from '../context/authContext'
import CustomButton from '../components/CustomButton';

const Home = ({ navigation }) => {

  const { state, dispatch } = useContext(Context);

  return (
    <>
    <View style={styles.body}>
    <View style={styles.container}>
      <Text style={styles.text}>Hi, welcome, {state.name}</Text>
    </View>
      <View style={styles.buttons}>
        <CustomButton text="Institutes" onPress={() => navigation.navigate("Institutes")} />
        <CustomButton text="Donations" onPress={() => navigation.navigate("Donations")} />
        <CustomButton text="Users" onPress={() => navigation.navigate("Users")} />
      </View>
      </View>
      </>
  )
}

const styles = StyleSheet.create({
  body:{
    backgroundColor: '#E0FFFF',
    flex:1,
  },
  container: {
    // marginBottom:30,
    marginTop:'40%', 
    height: '20%',
    alignItems: "center",

  },
  buttons:{
    alignItems:'center',
    height: '70%',
    justifyContent:'center',
    
  },
  text: {
    fontSize: 25,
    //margin: 30
  }
})

export default Home;