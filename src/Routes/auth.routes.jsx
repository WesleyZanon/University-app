import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from '../Pages/Home';
import Menu from '../Pages/Menu';

const Pilha = createNativeStackNavigator();

export default function AuthRoutes(){
  return(

      <NavigationContainer independent={true}>
          <Pilha.Navigator>
              <Pilha.Screen name='Home' component={Home} options={{headerShown: false}}/>
              <Pilha.Screen name='Menu' component={Menu} options={{headerShown: false}}/>
          </Pilha.Navigator>
      </NavigationContainer>
      
  )
}