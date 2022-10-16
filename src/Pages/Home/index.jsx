import React, { useState } from "react";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet } from "react-native-web";
import IconMenu from '../../Assets/icons/IconMenu.svg';
import BasePage from "../../Components/BasePage";
import TabNavigation from "../../Components/TabNavigation";

export default function Home(){

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
                
            <Text style={{marginRight:'auto', marginLeft:"auto", fontSize:20, marginBottom:5, marginTop:20}}>Lista de Alunos</Text>
            <ScrollView  style={styles.listAlunos} >
                
                {listAlunos.map((item) =>(
                    <View style={styles.textListAlunos}>
                        <Text style={{flex:1}}>Avatar  </Text>
                        <Text style={{flex:1, fontSize: 12}}> RA:  {item.ra}</Text>
                        <Text style={{flex:5, fontSize: 12}}>Nome:  {item.name}</Text>
                    </View>
                    
                ))}
            </ScrollView >

            <View style={styles.icon}>
                <img style={styles.iconImg} src={IconMenu} />
            </View>
            
        </View>

            <TabNavigation/>
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

    icon:{
        flex:'15px',
        alignItems: 'center',
        justifyContent:"center",

    },
    iconImg:{
        width:40
    },
    textListAlunos:{
        flexDirection:'row',
        justifyContent:"space-between",
        marginTop:10, 
        borderWidth: 1, 
        padding:5,
        font:5,
        marginRight:15

    },


  });