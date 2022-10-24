import React from 'react';
import { View, Text,Button,Pressable, StyleSheet } from "react-native-web";


export default function Menu(props){
    return(
        <View style={styles.MenuContainer}>

                    <Pressable onPress={()=>props.navigation.navigate('home')} style={styles.button}>HOME</Pressable>
                    <Pressable onPress={()=>props.navigation.navigate('MenuRegister')} style={styles.button}>CADASTRAR</Pressable>
                    <Pressable onPress={()=>props.navigation.navigate('MenuVisualizations')} style={styles.button}>VISUALIZAR</Pressable>
                    <Pressable onPress={()=>props.navigation.navigate('settings')} style={styles.button}>SETTINGS</Pressable>

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