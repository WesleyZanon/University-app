import React from 'react';
import { View, Text, StyleSheet, Pressable  } from "react-native-web";
import AuthRoutes from '../../Routes/auth.routes';

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

export default function TabNavigation(props) {

  
  return (

    
    <View style={styles.TabNavigationContainer}>

      <Pressable  style={styles.button }>MENU</Pressable >
      <Pressable  style={styles.button }>HOME</Pressable >
      <Pressable  style={styles.button }>SETTINGS</Pressable >


    </View>

    

  );
}

const styles = StyleSheet.create({
  TabNavigationContainer:{
    flexDirection:'row',
    justifyContent:"space-around",
    alignItems:'center',
    marginTop:'auto',
    marginBottom:'auto',

    flex:"80px",
    backgroundColor: "#fff",
  },
  button :{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    
  }
 
})