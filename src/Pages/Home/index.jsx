import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet, Image,FlatList } from "react-native-web";

import BasePage from "../../Components/BasePage";


import Avatar from '../../Assets/icons/avatar.svg';

import {getFirestore, collection, getDocs, setDoc, doc, deleteDoc, getDoc} from 'firebase/firestore';
import db from '../../Services/index'
import { async } from "@firebase/util";
import PacmanLoader from "react-spinners/PacmanLoader";
import ClockLoader from "react-spinners/ClockLoader";

export default function Home(){

    const colecaoRef = collection(db, 'Alunos');
    const [listAlunos, setListAlunos] = useState([])

    useEffect(
      ()=>{
        retornaDados()
      },[]
    );
  
    //get collection data
    const retornaDados = async ()=>{

      try{
        const snapshot = await getDocs(colecaoRef)
  
        for(let i=0;i<snapshot.docs.length;i++){
          console.log('Dados[', i, ']: ', snapshot.docs[i].data())
  
          const dado = {id:snapshot.docs[i].id, ra:snapshot.docs[i].ra, nome:snapshot.docs[i].data().nome, urlFoto: snapshot.docs[i].data().urlFoto}
  
          listAlunos.push( dado )
        }
  
        
        const vetor2 = listAlunos.slice()
  
        setListAlunos(vetor2)
  
      }catch(erro) {
        console.log(erro.message)
      }
  
    }

    const separador = ()=>{
      return( 
          <View style={{height:3, backgroundColor:'black', width:'100%'}}></View>
       );
    }

    
  const renderiza = ({item})=>{
    return(
      <View style={styles.textListAlunos}>
      <View style={{flexDirection:'row', marginRight:10}}>
          <img style={{width:'20px'}} src={item.urlFoto}/>
          <Text style={{ fontSize: 12}}> RA: {(item.id)}</Text>
      </View>
      <Text style={{fontSize: 12}}>Nome:  {item.nome}</Text>
      </View>
    );
  }


    return(

        <>

            <BasePage/>

            <View style={styles.container}>
                
            <Text style={{marginRight:'auto', marginLeft:"auto", fontSize:20, marginBottom:10, marginTop:20}}>Lista de Alunos</Text>
            <ScrollView  style={styles.listAlunos} >


            <FlatList 
                data ={listAlunos} 
                keyExtractor={(item)=>{item.id}}
                renderItem={renderiza}
      />
                

            </ScrollView >

            {console.log(listAlunos)}
            
        </View>

                    

        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: "100%",
      backgroundColor: '#eaeaea',
    },
    listAlunos:{
        marginLeft: '15px',
        height:'60%'
    },
    textListAlunos:{
        flexDirection:'row',
        justifyContent:"flex-start",
        marginBottom:10,
        borderWidth: 1, 
        padding:5,
        font:5,
        marginRight:15,
        height:'auto'
    },


  });
