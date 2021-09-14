
import React from 'react';
import { StatusBar, View, Image, Button, StyleSheet, Text} from 'react-native';
import Intro from './components/Intro';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function WelcomeScreen({navigation}) {
  return(
    <View style={style.container}>
        <Text style={style.text}>Welcome To</Text>
        <Image source={require('./images/inwhale.png')} resizeMode="cover" style={style.image}/>
        <Button style={style.button} title="Start" 
          onPress={() => navigation.navigate('Intro')} />
    </View>
  );
}

function IntroScreen() {
  return(
    <Intro />
  );
}


const style = StyleSheet.create({

  container: {
    height: "100%",
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
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
        hidden={true} 
        animated={true}/>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
          <Stack.Screen 
          name="Welcome"
          component={WelcomeScreen}/>

          <Stack.Screen 
          name="Intro"
          component={IntroScreen}/>
        </Stack.Navigator>
    </NavigationContainer>

  );
}




