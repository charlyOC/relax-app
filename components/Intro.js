import React from "react";
import {View, StyleSheet, Text, Image} from 'react-native';
import BubbleTwo from '../images/graph.png';
import BubbleThree from '../images/graph_2.png';
import BubbleFour from '../images/graph_3.png';
import BubbleFive from '../images/graph_5.png';
import BubbleSix from '../images/graph_6.png';
import BubbleSeven from '../images/graph_7.png';


export default function Welcome() {

    return(
        <View style={style.container}>
           <Text style={style.intro}>This 40 seconds sophrology experience will help you to release stress only with your breath</Text>
           <View style={style.bubbles}>
                <Image source={BubbleTwo} resizeMode="cover" style={style.bubbleTwo} />
                <Image source={BubbleThree} resizeMode="cover" style={style.bubbleThree} />
                <Image source={BubbleFour} resizeMode="cover" style={style.bubbleFour} />
                <Image source={BubbleFive} resizeMode="cover" style={style.bubbleFive} />
                <Image source={BubbleSix} resizeMode="cover" style={style.bubbleSix} />
                <Image source={BubbleSeven} resizeMode="cover" style={style.BubbleSeven} />
           </View>

        </View>
    );
}
  

const style = StyleSheet.create({

    container: {
        height: "100%",
        backgroundColor: "#099ae4",
    },

    intro: {
        color:"whitesmoke",
        fontFamily: 'ArialRoundedMTBold',
        textAlign: "center",
        lineHeight: 47,
        fontSize: 25,
        margin: 20,
        marginTop: 50, 
    },

    bubbleOne: {
        width: 40, 
        height:40,
        position: "absolute",
        left: '40%',
    },

    bubbleTwo: {
        width: 40,
        height: 40
    },

    bubbleThree: {
        width: 40,
        height: 40
    },

    bubbleFour: {
        width: 40,
        height: 40   
    },

    bubbleFive: {
        width: 40,
        height: 40   
    },

    bubbleSix: {
        width: 40,
        height: 40   
    },

    BubbleSeven: {
        width: 40,
        height: 40   
    },
})