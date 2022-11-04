import React from 'react';
import { View, Text,Button,Pressable, StyleSheet } from "react-native-web";


export default function Menu(props){
    return(
        <View style={styles.MenuContainer}>
            <Pressable onPress={()=>props.navigation.navigate('RegiterAlunos')} style={styles.button}>ALUNO</Pressable>
            <Pressable onPress={()=>props.navigation.navigate('RegiterTeacher')}  style={styles.button}>PROFESSOR</Pressable>
            <Pressable onPress={()=>props.navigation.navigate('RegiterDisciplina')}  style={styles.button}>CURSO</Pressable>
            <Pressable onPress={()=>props.navigation.navigate('RegiterTurmas')}  style={styles.button}>TURMA</Pressable>
            <Pressable onPress={()=>props.navigation.navigate('RegiterHistoric')}  style={styles.button}>HISTORICO</Pressable>
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