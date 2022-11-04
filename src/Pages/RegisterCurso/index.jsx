import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, StyleSheet, Pressable, Button,Image } from 'react-native';

import {getFirestore, collection, getDocs, setDoc, doc, deleteDoc, getDoc} from 'firebase/firestore';
import db from '../../Services/index'



export default function CadastroCursos(props){
  
  const [codigo, setCodigo] = useState(1);
  const [nome, setNome] = useState();
  const [cargaHoraria, setCargaHoraria] = useState();
  const [idCurso ,setIdCurso] = useState(0);

  



  

    useEffect(() => {

   
    const collecRef  = collection(db, 'Cursos');

    getDocs(collecRef)
    .then( (snapshot)=> {
      //console.log("list = "+ snapshot.docs)
  
      const items = []
      
      snapshot.docs.forEach((doc) => {
        items.push({...doc.data(), id:doc.id})

        const id = items.length

        setIdProfessor(id)

        setCodigo(id+1)

        
      })
      //console.log('ra = ' + (items.length))
    })
    .catch(err => {
      console.log(err.message)
    })

    },[]);

  function salvar(){


    setDoc(doc(db, "Cursos", idCurso.toString()), {
      codigo:codigo,
      nome: nome,
      carga_horaria: cargaHoraria
    });


    props.navigation.navigate('home')
  }






    return(
        <View style={styles.container}>

            <Text style={styles.text}>Digite as informações de Cadastro</Text>
            
            <Text style={styles.text}>Codigo: {codigo}</Text>

            <Text style={styles.text}>Nome da disciplina</Text>
            <TextInput style={styles.input}
              onChangeText={(nome) => {setNome(nome)}}
              value={nome}/>

            <Text style={styles.text}>Carga Horaria</Text>
            <TextInput style={styles.input}
              onChangeText={(cargaHoraria) => {setCargaHoraria(cargaHoraria)}}
              value={cargaHoraria}/>

            



            <Pressable onPress={()=>salvar()} style={styles.button}>SALVAR</Pressable>
            
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