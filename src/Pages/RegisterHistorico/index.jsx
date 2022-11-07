import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, StyleSheet, Pressable, Button,Image,FlatList, ScrollView } from 'react-native';


import {getFirestore, collection, getDocs, setDoc, doc, deleteDoc, getDoc} from 'firebase/firestore';
import db from '../../Services/index'

import { RadioButton } from 'react-native-paper';

import { RadioButton } from 'react-native-paper';

export default function Historico(props){
  

  const [state, setState] = useState(0);
  const [codigo, setCodigo] = useState(1);
  const [ra, setRa] = useState();

  const [aluno, setAluno] =useState([])
  const [turma, setTurma] = useState();
  const [frequencia, setFrequencia] = useState();
  const [nota, setNota] = useState();


  const [listAlunos, setListAlunos] = useState([]);
  const [listTurmas, setListTurmas] = useState([]);

  const [checkedTurma, setCheckedTurma] = useState();



  
//Buscar id da turma
    useEffect(async() => {
   
      const collecRef  = await collection(db, 'Historico');

      getDocs(collecRef)
      .then( (snapshot)=> {
        //console.log("list = "+ snapshot.docs)
    
        const items = []
        
        snapshot.docs.forEach((doc) => {
          items.push({...doc.data(), id:doc.id})

          const id = items.length

          setIdTurma(id+1)

          setCodigo(id+1)
        })
        //console.log('ra = ' + (items.length))
      })
      .catch(err => {
        console.log(err.message)
      })

    },[]);


    useEffect(async() => {
   
      const collecRef  = await collection(db, 'Alunos');

      getDocs(collecRef)
      .then( (snapshot)=> {
        //console.log("list = "+ snapshot.docs)
    
        const items = []
        
        snapshot.docs.forEach((doc) => {
          items.push({...doc.data(), id:doc.id})

          setListAlunos(items)

          


        })
        //console.log('ra = ' + (items.length))
      })
      .catch(err => {
        console.log(err.message)
      })

    },[]);


    useEffect(async() => {
   
      const collecRef  = await collection(db, 'Turmas');

      getDocs(collecRef)
      .then( (snapshot)=> {
        //console.log("list = "+ snapshot.docs)
    
        const items = []
        
        snapshot.docs.forEach((doc) => {
          items.push({...doc.data(), id:doc.id})

          setListTurmas(items)

        })
        //console.log('ra = ' + (items.length))
      })
      .catch(err => {
        console.log(err.message)
      })

    },[]);



  function search(){
    
    listAlunos.map((itemm)=>{
      
      if(itemm.ra == ra){

        setAluno(itemm)
        
      }

      
    })

      
  }

  function seleciona(codCurso, codTeacher, ){

  }



  function salvar(){


    setDoc(doc(db, "Historico", idTurma.toString()), {
      codigo: codigo,
      codigoDisciplina:checkedCurso,
      codigoProfessor:checkedTeacher,
      ano:ano,
      cargaHoraria:cargaHoraria
    });


    props.navigation.navigate('home')
  }


  const renderizaTurma= ({item})=>{

    return(
      <View style={styles.containerCurso}>
              <RadioButton value={item.codigo} status={ checkedCurso ===  (item.codigo)? 'checked' : 'unchecked' } onPress={() => seleciona(item.codigo,item.codigoDisciplina, item.codigoProfessor)} style={styles.buttonRadio}/>
        <Text  style={styles.text}>{item.codigo}</Text>
      </View>
      );
      }

    return(
        <ScrollView style={styles.container}>

            <Text style={styles.text}>Digite as informações de Cadastro</Text>
            
            <Text style={styles.text}>Codigo: {codigo}</Text>


            <Text style={styles.text}>RA do aluno</Text>
            <TextInput style={styles.input}
                          onChangeText={(ra) => {setRa(ra)}}
                          value={ra}/>

            {aluno.length == 0 && <Pressable onPress={()=>search()} style={styles.button}>PROUCURAR</Pressable>}
            {aluno.length != 0 && <>
              <Pressable onPress={()=>search()} style={styles.button}>SALVAR</Pressable>
                <Text style={styles.text}>Nome</Text>
                <TextInput style={styles.input}
                          value={aluno.nome}/>
                           <Text style={styles.text}>Escolha uma Disciplina</Text>
            <View>

            <ScrollView style={styles.scrollCurso}>
              {listCurso.length == 0 &&  <Text style={styles.text}>Não há cursos no sistema</Text>}
              <FlatList 
                  data ={listTurmas} 
                  keyExtractor={(item)=>{item.id}}
                  renderItem={renderizaTurma}
                  />
              </ScrollView>
            </View>
            </> }
           


            
          
            
        </ScrollView>
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
        marginTop:20,
        width:100,
        marginLeft:'auto',
        marginRight:'auto'

      },
      containerCurso:{
        flex:1,
        flexDirection:'row',
        alignItems:'center'

      },
      buttonRadio:{
        width:'50%'
      },
      scrollCurso:{
        flex:'150px',
        borderWidth: 1, 
        padding:10,
        margin:5
      }
     

  });