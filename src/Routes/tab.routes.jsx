import React from 'react';

import { NavigationContainer} from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';





import Home from '../Pages/Home';
import Menu from '../Pages/Menu';
import Settings from '../Pages/settings';

import MenuRegister from '../Pages/MenuRegister';
import RegiterAlunos from '../Pages/RegisterAlunos';
import RegiterTeacher from '../Pages/RegisterTeachers';
import RegiterHistoric from '../Pages/RegisterHistorico';
import RegiterTurmas from '../Pages/RegisterTurmas';
import RegiterDisciplina from '../Pages/RegisterCurso';

import MenuVisualizations from '../Pages/MenuVisualizations';

import Teacher from '../Pages/Teacher';
import Historic from '../Pages/Historico';
import Turmas from '../Pages/Turmas';
import Disciplina from '../Pages/Cursos';


const Tab = createBottomTabNavigator();


export default function TabRoutes(){
  return(

    <>
      <NavigationContainer independent={true}>

          <Tab.Navigator>
         
          <Tab.Screen name='RegiterTurmas' component={RegiterTurmas} options={{headerShown: false,  tabBarButton: ()=>null, tabBarVisible: false}}/>  

            <Tab.Screen name='home' component={Home} options={{headerShown: false}}/>
              <Tab.Screen name='menu' component={Menu} options={{headerShown: false}}/>
              <Tab.Screen name='settings' component={Settings} options={{headerShown: false}}/>  


              <Tab.Screen name='MenuRegister' component={MenuRegister} options={{headerShown: false,  tabBarButton: ()=>null, tabBarVisible: false}}/>
              <Tab.Screen name='MenuVisualizations' component={MenuVisualizations} options={{headerShown: false,  tabBarButton: ()=>null, tabBarVisible: false}}/>    
            
              
             
              <Tab.Screen name='RegiterHistoric' component={RegiterHistoric} options={{headerShown: false,  tabBarButton: ()=>null, tabBarVisible: false}}/>  
             
              
             
              <Tab.Screen name='RegiterAlunos' component={RegiterAlunos} options={{headerShown: false,  tabBarButton: ()=>null, tabBarVisible: false}}/>  
              <Tab.Screen name='RegiterTeacher' component={RegiterTeacher} options={{headerShown: false,  tabBarButton: ()=>null, tabBarVisible: false}}/>  
              <Tab.Screen name='RegiterDisciplina' component={RegiterDisciplina} options={{headerShown: false,  tabBarButton: ()=>null, tabBarVisible: false}}/>  
              
              {/*
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
