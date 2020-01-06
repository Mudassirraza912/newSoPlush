import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button } from 'native-base';
import {Avatar, Header, Icon, Card} from 'react-native-elements'


const {width, height} = Dimensions.get("window")

export default class LoyalityPoints extends Component {
    constructor(props) {
        super(props);
        }


    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
        drawerLockMode: 'locked-closed'
    })

    
    render() {
        return (
            <View style={{flex:1, height, width}}>
                <Text style={{fontSize: 16, color: "#000"}}>Loyality Points</Text>
        </View>
        )
    }
}