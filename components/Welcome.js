import React from 'react';
import { View, StyleSheet, Button, Image, Text, Animated} from 'react-native';


export default class Welcome extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        entering: new Animated.Value(0)
    }
  }

  componentDidMount(){
    Animated.timing(this.state.entering, 
    {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false
    }).start()
  }

  render() {
    return(
        <Animated.View style={[style.container, {opacity: this.state.entering}]}>
          <Text style={style.text}>Welcome To</Text>
          <Image source={require('../images/inwhale.png')} resizeMode="cover" style={style.image}/>
          <Button title="Start"
            onPress={() => this.props.navigation.navigate('Intro')} />
        </Animated.View>

    );
  }
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