import React from 'react';
import { Text, TextInput, View, StyleSheet, Pressable } from 'react-native';

export default function RegisterHistorico(){
    return(
        <View style={styles.container}>

            <Text style={styles.text}>Digite as informações de Cadastro</Text>
            
            <Text style={styles.text}>Ra: xx</Text>

            <Text style={styles.text}>Ra do Aluno</Text>
            <TextInput style={styles.input}/>

            <Text style={styles.text}>Turma</Text>
            <TextInput style={styles.input}/>

            <Text style={styles.text}>Frequencia</Text>
            <TextInput style={styles.input}/>

            <Text style={styles.text}>Nota</Text>
            <TextInput style={styles.input}/>


            <Pressable style={styles.button}>SALVAR</Pressable>
            
        </View>
    )
}

const styles = StyleSheet.create({
    
    container: {
        flex: "100%",
        backgroundColor: '#eaeaea',
      },
      text:{
        margin:10,
        fontSize:18,
      },
      input:{
        borderWidth: 1, 
        height:30,
        margin:10
      },
      button :{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderWidth: 1,
        marginTop:100,
        width:100,
        marginLeft:'auto',
        marginRight:'auto'

      }
     

  });