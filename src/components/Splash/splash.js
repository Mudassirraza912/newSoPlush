import React, { Component } from 'react'
import { Text, View, Image, AsyncStorage } from 'react-native'

export default class Splash extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    componentDidMount = async () => {
        const alreadyOpen = await AsyncStorage.getItem("alreadyOpen")
        console.log("alreadyOpen", alreadyOpen)
        setTimeout(() => {
          alreadyOpen !== null ? this.props.navigation.navigate("Authentication") : this.props.navigation.navigate("WalkThrough")
        }, 3000);
    }

    render() {
        return (
            <View style={{ flex: 1 }} >
                <Image style={{ width: '100%', height: '100%' }} source={require('../../../assets/splash.png')} />
            </View>
        )
    }
}