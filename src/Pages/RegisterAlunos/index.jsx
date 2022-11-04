import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, StyleSheet, Pressable, Button,Image } from 'react-native';

import {getFirestore, collection, getDocs, setDoc, doc, deleteDoc, getDoc} from 'firebase/firestore';
import db from '../../Services/index'

import { launchImageLibrary } from "react-native-image-picker";

export default function CadastroAlunos(props){
  
  const [ra, setRa] = useState(1);
  const [nome, setNome] = useState();
  const [cidade, setCidade] = useState();
  const [endereco, setEndereco] = useState();
  const [foto, setFoto] = useState();
  const [idAluno, setIdAluno] = useState(0);

  



  

    useEffect(() => {

   
    const collecRef  = collection(db, 'Alunos');

    getDocs(collecRef)
    .then( (snapshot)=> {
      //console.log("list = "+ snapshot.docs)
  
      const items = []
      
      snapshot.docs.forEach((doc) => {
        items.push({...doc.data(), id:doc.id})

        const id = items.length

        setIdAluno(id)

        setRa(id+1)

        
      })
      //console.log('ra = ' + (items.length))
    })
    .catch(err => {
      console.log(err.message)
    })

    },[]);

  function salvar(){


    setDoc(doc(db, "Alunos", idAluno.toString()), {
      ra:ra,
      nome: nome,
      cidade: cidade,
      endereco: endereco,
      urlFoto: foto
      
    });


    props.navigation.navigate('home')
  }






    return(
        <View style={styles.container}>

            <Text style={styles.text}>Digite as informações de Cadastro</Text>
            
            <Text style={styles.text}>RA: {ra}</Text>

            <Text style={styles.text}>Nome completo</Text>
            <TextInput style={styles.input}
              onChangeText={(nome) => {setNome(nome)}}
              value={nome}/>

            <Text style={styles.text}>Endereço</Text>
            <TextInput style={styles.input}
              onChangeText={(endereco) => {setEndereco(endereco)}}
              value={endereco}/>

            <Text style={styles.text}>Cidade</Text>
            <TextInput style={styles.input}
              onChangeText={(cidade) => {setCidade(cidade)}}
              value={cidade}/>
            

            <Text style={styles.text}>Cole o link da sua foto</Text>
            <TextInput style={styles.input}
              onChangeText={(foto) => {setFoto(foto)}}
              value={foto}/>

            <img  ser={foto}/>


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