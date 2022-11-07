import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, StyleSheet, Pressable, Button,Image,FlatList, ScrollView } from 'react-native';


import {getFirestore, collection, getDocs, setDoc, doc, deleteDoc, getDoc} from 'firebase/firestore';
import db from '../../Services/index'

import { RadioButton } from 'react-native-paper';

export default function CadastroTurmas(props){
  
  const [codigo, setCodigo] = useState(1);
  const [nome, setNome] = useState();
  const [cargaHoraria, setCargaHoraria] = useState();
  const [ano, setAno] = useState();
  const [idTurma ,setIdTurma] = useState(1);

  const [idCurso ,setIdCurso] = useState();
  const [curso ,setCurso] = useState();

  const [idProfessor ,setIdProfessor] = useState();
  const [professor ,setProfessor] = useState();

  const [listCurso, setListCurso] = useState([]);
  const [listTeacher, setListTeacher] = useState([]);


  const [checkedCurso, setCheckedCurso] = useState();
  const [checkedTeacher, setCheckedTeacher] = useState();

  
//Buscar id da turma
    useEffect(async() => {
   
      const collecRef  = await collection(db, 'Turmas');

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

    


//Preencher lista de Cursos
useEffect(() => {
   
  const collecRef  = collection(db, 'Cursos');

  getDocs(collecRef)
  .then( (snapshot)=> {
    //console.log("list = "+ snapshot.docs)

    const items = []
    
    snapshot.docs.forEach((doc) => {
      items.push({...doc.data(), id:doc.id})

      setListCurso(items)




      
    })
    //console.log('ra = ' + (items.length))
  })
  .catch(err => {
    console.log(err.message)
  })

},[]);


//Preencher lista de Professores
useEffect(() => {
   
  const collecRef  = collection(db, 'Professores');

  getDocs(collecRef)
  .then( (snapshot)=> {
    //console.log("list = "+ snapshot.docs)

    const items = []
    
    snapshot.docs.forEach((doc) => {
      items.push({...doc.data(), id:doc.id})

      setListTeacher(items)




      
    })
    //console.log('ra = ' + (items.length))
  })
  .catch(err => {
    console.log(err.message)
  })

},[]);

  function selecionaCurso(cursoSelect,horarioSelect){
    setCheckedCurso(cursoSelect); 
    setCargaHoraria(horarioSelect);
  }
 

  function salvar(){


    setDoc(doc(db, "Turmas", idTurma.toString()), {
      codigo: codigo,
      codigoDisciplina:checkedCurso,
      codigoProfessor:checkedTeacher,
      ano:ano,
      cargaHoraria:cargaHoraria
    });


    props.navigation.navigate('home')
  }



  const renderizaCurso = ({item})=>{


    return(
      <View style={styles.containerCurso}>
              <RadioButton value={item.codigo} status={ checkedCurso ===  (item.codigo)? 'checked' : 'unchecked' } onPress={() => selecionaCurso(item.codigo,item.carga_horaria)} style={styles.buttonRadio}/>
        <Text  style={styles.text}>{item.nome}</Text>
      </View>
      );
      }

      

      const renderizaTeacher = ({item})=>{
        return(
          <View style={styles.containerCurso}>
                  <RadioButton value={item.codigo} status={ checkedTeacher ===  (item.codigo)? 'checked' : 'unchecked' } onPress={() => setCheckedTeacher(item.codigo)} style={styles.buttonRadio}/>
            <Text  style={styles.text}>{item.nome}</Text>
          </View>
          );
          }


    return(
        <ScrollView style={styles.container}>

            <Text style={styles.text}>Digite as informações de Cadastro</Text>
            
            <Text style={styles.text}>Codigo: {codigo}</Text>

            <Text style={styles.text}>Escolha uma Disciplina</Text>
            <View>

            <ScrollView style={styles.scrollCurso}>
              {listCurso.length == 0 &&  <Text style={styles.text}>Não há cursos no sistema</Text>}
              <FlatList 
                  data ={listCurso} 
                  keyExtractor={(item)=>{item.id}}
                  renderItem={renderizaCurso}
                  />
              </ScrollView>
            </View>

            <View>

            </View>

            <Text style={styles.text}>Professor</Text>
            <View>

              <ScrollView style={styles.scrollCurso}>
              {listTeacher.length == 0 &&  <Text style={styles.text}>Não há professores no sistema</Text>}
                <FlatList 
                    data ={listTeacher} 
                    keyExtractor={(item)=>{item.id}}
                    renderItem={renderizaTeacher}
                    />
                </ScrollView>
                </View>

              
            <Text style={styles.text}>Ano</Text>
            <TextInput style={styles.input}
              onChangeText={(ano) => {setAno(ano)}}
              value={ano}/>

            <Text style={styles.text}>Horario: {cargaHoraria}</Text>


            
            <Pressable onPress={()=>salvar()} style={styles.button}>SALVAR</Pressable>
            
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