import React from "react";
import {View, StyleSheet, Text, Image, Animated, Button} from 'react-native';
import Whale from '../images/whale.png';


export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state ={ timer: 4}
      }
      
      componentDidMount(){
        this.interval = setInterval(
          () => this.setState((prevState)=> ({ timer: prevState.timer - 1 })),
          1000
        );
      }
      
      componentDidUpdate(){
        if(this.state.timer === 0){ 
          clearInterval(this.interval);
        }
      }
      
      componentWillUnmount(){
          if(this.state.timer === 0){
            clearInterval(this.interval);
          }

      }
      

    render(){
        return(
            <View style={style.container}>
                <Animated.View>
                    <Text> {this.state.timer} </Text>
                    <Image source={Whale} style={style.whale}  />
                </Animated.View>
            </View>
        )

    }

}


const style = StyleSheet.create({
    container: {
        backgroundColor: '#fbedeb',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    whale: {
        width: 150,
        height: 150,
        marginLeft: 50
    }

})