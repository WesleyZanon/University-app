import React from 'react';
import { View, Text,Button,Pressable, StyleSheet } from "react-native-web";


export default function Menu(){
    return(
        <View style={styles.MenuContainer}>
            <Pressable style={styles.button}>HOME</Pressable>
            <Pressable style={styles.button}>CADASTRAR</Pressable>
            <Pressable style={styles.button}>VISUALIZAR</Pressable>
            <Pressable style={styles.button}>SETTINGS</Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    MenuContainer:{
        margin:'10px'
    },
    button :{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderWidth: 1,
      marginTop:"20px"
    }
   
  })