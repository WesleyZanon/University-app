import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';


import Routes from './src/Routes/index'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#1d1d2e' barStyle="light-content" translucent={false} />
      <Routes/>
    </NavigationContainer>
  );
}

