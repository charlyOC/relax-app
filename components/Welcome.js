import React from 'react';
import { View, StyleSheet, Button, Image, Text} from 'react-native';



export default function Welcome({navigation}) {
    return(
        <View style={style.container}>
            <Text style={style.text}>Welcome To</Text>
            <Image source={require('../images/inwhale.png')} resizeMode="cover" style={style.image}/>
            <Button style={style.button} title="Start" 
              onPress={() => navigation.navigate('Intro')} />
        </View>
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
  