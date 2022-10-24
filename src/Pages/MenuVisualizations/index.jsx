import React from 'react';
import { View, Text,Button,Pressable, StyleSheet } from "react-native-web";


export default function MenuVisualizations(){
    return(
        <View style={styles.MenuContainer}>
            <Pressable onPress={()=>props.navigation.navigate('RegiterAlunos')} style={styles.button}>ALUNOS</Pressable>
            <Pressable style={styles.button}>PROFESSOR</Pressable>
            <Pressable style={styles.button}>CURSOS</Pressable>
            <Pressable style={styles.button}>TURMAS</Pressable>
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