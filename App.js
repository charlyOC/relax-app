
import React from 'react';
import { StatusBar, View, Image, Button, StyleSheet, Text} from 'react-native';
import Intro from './components/Intro';
import Main from './components/Main';
import Welcome from './components/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
        <StatusBar
        hidden={true}/>

        <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
          <Stack.Screen
          name="Welcome"
          component={Welcome}/>

          <Stack.Screen
          name="Intro"
          component={Intro}/>

          <Stack.Screen 
          name="Main"
          component={Main}/>
        </Stack.Navigator>

    </NavigationContainer>
  );
}




