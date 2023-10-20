import React from 'react';
import { View, Text, StyleSheet } from "react-native-web";
import logo from '../../Assets/icons/logo.png'

export default function BasePage(){
    return(
        <view style={styles.containerBasePage}>
            <View style={{width:'100%', backgroundColor:"#fff"}}>
                <img src={logo} style={{width:120, marginRight:'auto', marginLeft:"auto"}}/>
            </View>
        </view>
    )
}

const styles = StyleSheet.create({
    containerBasePage: {
        backgroundColor: "#fff",
        flex:1
    },

})