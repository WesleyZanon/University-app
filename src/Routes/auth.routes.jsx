import React from 'react';

import { NavigationContainer} from '@react-navigation/native';


import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Home from '../Pages/Home';
import Menu from '../Pages/Menu';
import Settings from '../Pages/settings';



const Stack = createNativeStackNavigator();

export default function AuthRoutes(){
  return(

    <>

        <NavigationContainer independent={true}>
            <Stack.Navigator>
            <Stack.Screen  name='home' component={Home} options={{headerShown: false}}/>
            </Stack.Navigator>
          </NavigationContainer> 
          


      </>
      
  )
}
