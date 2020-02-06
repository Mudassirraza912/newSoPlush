import React, { Component } from 'react'
import { Text, View, Image, AsyncStorage } from 'react-native'

export default class Splash extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    componentDidMount = async () => {
        // const alreadyOpen = await AsyncStorage.getItem("alreadyOpen")
        // console.log("alreadyOpen", alreadyOpen)
        // setTimeout(() => {
        //   alreadyOpen !== null ? this.props.navigation.navigate("Authentication") : this.props.navigation.navigate("WalkThrough")
        // }, 3000);

        try {
            const value = await AsyncStorage.getItem('User');
            console.log('value value value', value)
            if (value !== null) {
              // We have data!!
            var convertVal = JSON.parse(value)
            this.props.screenProps.fetchProfileData(convertVal)
            if (convertVal.role_id === '4') {
                this.props.navigation.navigate("UserNavigator")
            }else {
                this.props.navigation.navigate("ProNavigator")
            }
            console.log('enableButton getting data After JSON in SITEINFO =>',convertVal)
           
            }else {

                const alreadyOpen = await AsyncStorage.getItem("alreadyOpen")
                console.log("alreadyOpen", alreadyOpen)
                setTimeout(() => {
                  alreadyOpen !== null ? this.props.navigation.navigate("Authentication") : this.props.navigation.navigate("WalkThrough")
                }, 3000);
                
            }
          } catch (error) {
                console.log('Errr getting data =>', error)
    
          }
    }

    render() {
        return (
            <View style={{ flex: 1 }} >
                <Image style={{ width: '100%', height: '100%' }} source={require('../../../assets/splash.png')} />
            </View>
        )
    }
}