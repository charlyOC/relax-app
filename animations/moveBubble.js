import React from "react";
import { Animated, Dimensions } from 'react-native';

export default class MoveBubble extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            topPosition: new Animated.Value(0),
            bottomPosition: new Animated.Value(0)
        }
    }

    componentDidMount(){

        Animated.sequence([
            Animated.timing(
                this.state.topPosition, 
                {
                    toValue: 50,
                    duration: 2000
                }
            ),
            Animated.timing(
                this.state.bottomPosition,
                {
                    toValue: 50,
                    duration: 2000
                }
            )
        ]).start()

    }
}