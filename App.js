
import React from 'react';
import { StatusBar, View, Image, Button, StyleSheet, Text} from 'react-native';
import Intro from './components/Intro';
import Main from './components/Main';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const waveAnimation = require('./images/Wave_Animation.mp4');


function WelcomeScreen({navigation}) {
  return(
    <View style={style.container}>
        <Text style={style.text}>Welcome To</Text>
        <Image source={require('./images/inwhale.png')} resizeMode="cover" style={style.image}/>
        <Button title="Next"
          onPress={() => navigation.navigate('Intro')} />

    </View>
  );
}


const style = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fbedeb'
  },



  text: {
    fontSize: 30,
    color: "#0366CB",
    fontFamily: 'ArialRoundedMTBold',
  },

  image: {
    width: 210,
    height: 200,
    marginLeft: 25,
  },

})


const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
        <StatusBar
        hidden={true}/>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
          <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}/>

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




