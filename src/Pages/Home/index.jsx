import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native-web";

import BasePage from "../../Components/BasePage";


import Avatar from '../../Assets/icons/avatar.svg';

import {getFirestore, collection, getDocs, setDoc, doc, deleteDoc, getDoc} from 'firebase/firestore';
import db from '../../Services/index'
import { async } from "@firebase/util";
import PacmanLoader from "react-spinners/PacmanLoader";
import ClockLoader from "react-spinners/ClockLoader";

export default function Home(){

    const [listAlunos, setListAlunos] = useState([])

    


    useEffect(async () => {

        const collecRef  = await collection(db, 'Alunos');


        //get collection data
        getDocs(collecRef)
          .then( (snapshot)=> {
            console.log(snapshot.docs)
        
            let items = []
            snapshot.docs.forEach((doc) => {
              items.push({...doc.data(), id:doc.id})
            })
            console.log(items)
            setListAlunos(items)
          })
          .catch(err => {
            console.log(err.message)
          })

          console.log(listAlunos.foto)
    
        },[collection]);

    return(

        <>

            <BasePage/>

            <View style={styles.container}>
                
            <Text style={{marginRight:'auto', marginLeft:"auto", fontSize:20, marginBottom:10, marginTop:20}}>Lista de Alunos</Text>
            <ScrollView  style={styles.listAlunos} >
                
                {listAlunos.map((item) =>(
                    <View style={styles.textListAlunos}>
                        <View style={{flexDirection:'row', marginRight:10}}>
                            <img style={{width:'20px'}} src={item.urlFoto}/>
                            <Text style={{ fontSize: 12}}> RA: {item.ra}</Text>
                        </View>
                        <Text style={{fontSize: 12}}>Nome:  {item.nome}</Text>
                    </View>
                    
                ))}
            </ScrollView >
            
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