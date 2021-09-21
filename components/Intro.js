import React from "react";
import {View, StyleSheet, Text, Image, Animated, Button} from 'react-native';



import BubbleTwo from '../images/graph.png';
import BubbleThree from '../images/graph_2.png';
import BubbleFour from '../images/graph_3.png';
import BubbleFive from '../images/graph_5.png';
import BubbleSix from '../images/graph_6.png';
import BubbleSeven from '../images/graph_7.png';




export default class Intro extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            topPosition: new Animated.Value(0)
        }
    }

    componentDidMount(){
        Animated.loop(
            Animated.sequence([
                Animated.timing(
                    this.state.topPosition, 
                    {
                        toValue: 20,
                        duration: 2000,
                        useNativeDriver: false
                    }
                ), 
    
                Animated.timing(
                    this.state.topPosition,
                    {
                        toValue: 0,
                        duration: 2000, 
                        useNativeDriver: false
    
                    }
                )
            ])
        ).start()   
    }

        render() {
            return(
                <View style={style.container}>
                    <Text style={style.intro}>This 40 seconds sophrology experience will help you to relax</Text>
                    <Animated.View style={[style.bubbles, {bottom: this.state.topPosition}]}>
                        <Image source={BubbleTwo} resizeMode="cover" style={style.bubbleTwo} />
                        <Image source={BubbleThree} resizeMode="cover" style={style.bubbleThree} />
                        <Image source={BubbleFour} resizeMode="cover" style={style.bubbleFour} />
                        <Image source={BubbleFive} resizeMode="cover" style={style.bubbleFive} />
                        <Image source={BubbleSix} resizeMode="cover" style={style.bubbleSix} />
                        <Image source={BubbleSeven} resizeMode="cover" style={style.BubbleSeven} />
                   </Animated.View>
                   <Button title="Next"
                    onPress={() => this.props.navigation.navigate('Main')} />

                </View>
    
            );
    
        }

}



const style = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: "#fbedeb",
    },

    intro: {
        color:"#0366CB",
        fontFamily: 'ArialRoundedMTBold',
        textAlign: "center",
        marginTop: '30%',
        lineHeight: 57,
        fontSize: 25,
    },


    bubbles: {
        height: '40%',
        width: '100%',
        marginTop: '-70%'     
    }, 

    bubbleTwo: {
        width: 40,
        height: 40,
        bottom: '60%',
        left: '40%'
    },

    bubbleThree: {
        width: 40,
        height: 40,
        bottom: '55%',
        left: '5%'
    },

    bubbleFour: {
        width: 40,
        height: 40,
        bottom: '30%',
        left: '80%'
    },

    bubbleFive: {
        width: 40,
        height: 40,
        bottom: '10%',
        left: '40%'

    },

    bubbleSix: {
        width: 40,
        height: 40,
        left: '70%',
        bottom: '-20%'
    },

    BubbleSeven: {
        width: 40,
        height: 40,
        bottom: '-30%',
        left: '10%'
    },


})