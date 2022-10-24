import React from 'react';

import { NavigationContainer} from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';





import Home from '../Pages/Home';
import Menu from '../Pages/Menu';
import Settings from '../Pages/settings';

import MenuRegister from '../Pages/MenuRegister';
import RegiterAlunos from '../Pages/Register/alunos';
import RegiterTeacher from '../Pages/Register/teachers';
import RegiterHistoric from '../Pages/Register/historico';
import RegiterTurmas from '../Pages/Register/turmas';
import RegiterDisciplina from '../Pages/Register/cursos';

import MenuVisualizations from '../Pages/MenuVisualizations';
import Alunos from '../Pages/Visualizations/alunos';
import Teacher from '../Pages/Visualizations/teacher';
import Historic from '../Pages/Visualizations/Historic';
import Turmas from '../Pages/Visualizations/Turmas';
import Disciplina from '../Pages/Visualizations/cursos';


const Tab = createBottomTabNavigator();


export default function TabRoutes(){
  return(

    <>
      <NavigationContainer independent={true}>

          <Tab.Navigator>
            <Tab.Screen name='home' component={Home} options={{headerShown: false}}/>
              <Tab.Screen name='menu' component={Menu} options={{headerShown: false}}/>
              <Tab.Screen name='settings' component={Settings} options={{headerShown: false}}/>  


              <Tab.Screen name='MenuRegister' component={MenuRegister} options={{headerShown: false,  tabBarButton: ()=>null, tabBarVisible: false}}/>
              <Tab.Screen name='MenuVisualizations' component={MenuVisualizations} options={{headerShown: false,  tabBarButton: ()=>null, tabBarVisible: false}}/>    
              <Tab.Screen name='RegiterAlunos' component={RegiterAlunos} options={{headerShown: false,  tabBarButton: ()=>null, tabBarVisible: false}}/>  
              {/*
              <Tab.Screen name='RegiterTeacher' component={RegiterTeacher} options={{headerShown: false,  tabBarButton: ()=>null, tabBarVisible: false}}/>  
              <Tab.Screen name='RegiterHistoric' component={RegiterHistoric} options={{headerShown: false,  tabBarButton: ()=>null, tabBarVisible: false}}/>  
             
              <Tab.Screen name='RegiterTurmas' component={RegiterTurmas} options={{headerShown: false,  tabBarButton: ()=>null, tabBarVisible: false}}/>  
              <Tab.Screen name='RegiterDisciplina' component={RegiterDisciplina} options={{headerShown: false,  tabBarButton: ()=>null, tabBarVisible: false}}/>  
              
              <Tab.Screen name='Alunos' component={Alunos} options={{headerShown: false,  tabBarButton: ()=>null, tabBarVisible: false}}/>  
              <Tab.Screen name='Teacher' component={Teacher} options={{headerShown: false,  tabBarButton: ()=>null, tabBarVisible: false}}/>  
              <Tab.Screen name='Historic' component={Historic} options={{headerShown: false,  tabBarButton: ()=>null, tabBarVisible: false}}/>  
              <Tab.Screen name='Turmas' component={Turmas} options={{headerShown: false,  tabBarButton: ()=>null, tabBarVisible: false}}/>  
  <Tab.Screen name='Disciplina' component={Disciplina} options={{headerShown: false,  tabBarButton: ()=>null, tabBarVisible: false}}/>   
  */}

            </Tab.Navigator>

            </NavigationContainer>

      </>
      
  )
}
