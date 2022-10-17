import React from 'react';
import { NavigationContainer, StyleSheet} from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Pages/Home';
import Menu from '../Pages/Menu';
import MenuRegister from '../Pages/MenuRegister';
import Routes from './index.jsx';
import Task from '../Pages/Home/Task.jsx'

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function AuthRoutes(){
  return(

    <>

        <NavigationContainer independent={true}>
            <Tab.Navigator>
            <Tab.Screen name='home' component={Home} options={{headerShown: false}}/>
              <Tab.Screen name='menu' component={Menu} options={{headerShown: false}}/>
              <Tab.Screen name='settings' component={''} options={{headerShown: false}}/>  
            </Tab.Navigator>
            </NavigationContainer>

            <NavigationContainer independent={true}>
            <Stack.Navigator>
             
            </Stack.Navigator>
        </NavigationContainer>

           
      </>
      
  )
}
