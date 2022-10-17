import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from '../Pages/Home';
import Menu from '../Pages/Menu';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function AuthRoutes(){
  return(

      <NavigationContainer independent={true}>
          <Tab.Navigator>
            <Tab.Screen name='MENU' component={Menu} options={{headerShown: false}}/>
            <Tab.Screen name='HOME' component={Home} options={{headerShown: false}}/>
            <Tab.Screen name='SETTINGS' component={''} options={{headerShown: false}}/>
              
          </Tab.Navigator>
      </NavigationContainer>
      
  )
}