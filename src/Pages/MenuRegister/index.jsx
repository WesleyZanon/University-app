import React from 'react';
import { View, Text,Button,Pressable, StyleSheet } from "react-native-web";


export default function Menu(){
    return(
        <View style={styles.MenuContainer}>
            <Pressable style={styles.button}>ALUNO</Pressable>
            <Pressable style={styles.button}>PROFESSOR</Pressable>
            <Pressable style={styles.button}>CURSO</Pressable>
            <Pressable style={styles.button}>TURMA</Pressable>
            <Pressable style={styles.button}>HISTORICO</Pressable>
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