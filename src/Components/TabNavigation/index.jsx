import React from 'react';
import { View, Text, StyleSheet } from "react-native-web";



export default function TabNavigation() {
  return (
    <View style={styles.TabNavigationContainer}>

      <View style={styles.tab}>
        <Text style={styles.text}>MENU</Text>
      </View>

      <View style={styles.tab}>
        <Text style={styles.text}>HOME</Text>
      </View>

      <View style={styles.tab}>
        <Text style={styles.text}>SETTINGS</Text>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  TabNavigationContainer:{
    flexDirection:'row',
    justifyContent:"space-around",
    alignItems:'center',
    marginTop:'auto',
    marginBottom:'auto',
    borderWidth: 1,
    flex:"80px",
    backgroundColor: "#fff",
  },
  text:{
    fontSize:15,
    color: '#0000ff'
  }
 
})