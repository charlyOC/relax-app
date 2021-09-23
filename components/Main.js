import React from "react";
import {View, StyleSheet, Text, Image, Animated, Button} from 'react-native';
import Whale from '../images/whale.png';


export default class Main extends React.Component {

    render(){
        return(
            <View style={style.container}>
                <Animated.View>
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