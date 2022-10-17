import React, { useState } from "react";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native-web";

import BasePage from "../../Components/BasePage";


import Avatar from '../../Assets/icons/avatar.svg';

export default function Home(props){

    const [listAlunos, setListAlunos] = useState([{
        ra:1,
        name:"lorem ipsum 1"
    },{        
        ra:2,
        name:"lorem ipsum 2",
    },{
        ra:3,
        name:"lorem ipsum 3"
    },{
        ra:4,
        name:"lorem ipsum 4"
    },{
        ra:5,
        name:"lorem ipsum 5"
    },{
        ra:6,
        name:"lorem ipsum 6"
    },{
        ra:7,
        name:"lorem ipsum 7"
    },{
        ra:8000,
        name:"lorem ipsum 8"
    },{
        ra:9,
        name:"lorem ipsum lorem ipsum "
    },{
        ra:1,
        name:"lorem ipsum 1"
    },{        
        ra:2,
        name:"lorem ipsum 2",
    },{
        ra:3,
        name:"lorem ipsum 3"
    },{
        ra:4,
        name:"lorem ipsum 4"
    },{
        ra:5,
        name:"lorem ipsum 5"
    },{
        ra:6,
        name:"lorem ipsum 6"
    },{
        ra:7,
        name:"lorem ipsum 7"
    },{
        ra:8,
        name:"lorem ipsum 8"
    },{
        ra:9,
        name:"lorem ipsum 9"
    },{
        ra:1,
        name:"lorem ipsum 1"
    },{        
        ra:2,
        name:"lorem ipsum 2",
    },{
        ra:3,
        name:"lorem ipsum 3"
    },{
        ra:4,
        name:"lorem ipsum 4"
    },{
        ra:5,
        name:"lorem ipsum 5"
    },{
        ra:6,
        name:"lorem ipsum 6"
    },{
        ra:7,
        name:"lorem ipsum 7"
    },{
        ra:8,
        name:"lorem ipsum 8"
    },{
        ra:9,
        name:"lorem ipsum 9"
    }
])

    return(

        <>

            <BasePage/>

            <View style={styles.container}>
                
            <Text style={{marginRight:'auto', marginLeft:"auto", fontSize:20, marginBottom:10, marginTop:20}}>Lista de Alunos</Text>
            <ScrollView  style={styles.listAlunos} >
                
                {listAlunos.map((item) =>(
                    <View style={styles.textListAlunos}>
                        <View style={{flexDirection:'row', marginRight:10}}>
                            <img style={{width:'20px'}} src={Avatar}/>
                            <Text style={{ fontSize: 12}}> RA: {item.ra}</Text>
                        </View>
                        <Text style={{fontSize: 12}}>Nome:  {item.name}</Text>
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