import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../Pages/Home';


const Stack = createNativeStackNavigator();

export default function AuthRoutes(){

    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    )
}