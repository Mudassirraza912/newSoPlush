import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, Alert } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button, Item, Input, Label, Form, Icon } from 'native-base';
import { Avatar, Header, Card, Divider } from 'react-native-elements'


const { width, height } = Dimensions.get("window")

export default class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            creditCard:"",
            expireDate:"",
            cvv:"",
            name:""

        }
    }


    componentWillUnmount() {
        console.log("componentWillUnmount componentWillUnmount componentWillUnmount")
    }



    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
        drawerLockMode: 'locked-closed'
    })


    render() {
        return (
            <View style={{ flex: 1, height, width, marginTop: -80 }}>
                <ImageBackground source={require('../../../assets/opacity100.png')} style={{ height: "100%", width: "100%", opacity: 0.9, marginTop: 20 }}>


                    <Header
                        containerStyle={{ marginTop: 40, backgroundColor: "#fff" }}
                        placement="left"
                        leftComponent={<Icon onPress={() => { this.props.navigation.navigate('Main') }} name="arrow-back" color="#000" />}
                        centerComponent={<Text style={{alignSelf:'center',fontSize: 20, fontFamily: "Poppins-Regular_0" }}>PAYMENT</Text>}
                    />

                    <View style={{ height, width, backgroundColor: "rgba(246, 232, 232, 0.7)"}}>

                        <ScrollView style={{ height: height }}>


                            <View style={{width:width}}>

                            <View style={{marginTop:"15%"}}>
                                <Text style={{alignSelf:"center",color:"#000", fontFamily:"Poppins-Regular_0", fontSize:20}}>
                                    ENTER CARD DETAILS
                                </Text>
                            </View>

                                <View style={{ width: "80%", alignContent: "center", alignItems: "center", justifyContent: "center", alignSelf: 'center', backgroundColor:"#fff", marginTop:"2%", borderRadius:10}}>


                                    <Item floatingLabel style={{ alignSelf: 'center', alignItems: 'center', alignContent: 'center', width:"80%"}}>
                                        <Input onChangeText={(e) => { this.setState({ creditCard: e }) }} placeholder="Credit Card Number" />
                                    </Item>

                                    <Item floatingLabel style={{width:"80%"}}>
                                        <Input onChangeText={(e) => { this.setState({ expireDate: e }) }} placeholder="Expiration Date" />
                                    </Item>

                                    <Item floatingLabel style={{width:"80%"}}>
                                        <Input onChangeText={(e) => { this.setState({ cvv: e }) }} placeholder="CVV" />
                                    </Item>

                                    <Item floatingLabel style={{width:"80%", marginBottom:15}}>
                                        <Input onChangeText={(e) => { this.setState({ name: e }) }} placeholder="Card Holder Name" />
                                    </Item>
                                   

                                           
                                </View>



                                <View style={{width:"80%",justifyContent:"center",alignContent:"center", alignSelf:"center", }}>
                                
                                        <Button onPress={() => {{Alert.alert(
                                        'Thank You',
                                        'Thank You For Your Payment',
                                        [
                                            {text: 'Ok', onPress: () => {this.props.navigation.navigate('BookingHistory')}},
                                        ],
                                        {cancelable: false},
                                        )}}}  style={{backgroundColor:"#fc8b8c", width:"100%", borderRadius: 10, opacity:0.7, marginTop:"5%", alignContent:"center", justifyContent:"center"}}> 
                                                    <Text style={{alignSelf:"center",color:"#fff", fontFamily:"Poppins-Regular_0", fontSize:16}}>
                                                   PROCEED TO PAYMENT
                                            </Text>   
                                            </Button>
                              </View>


                              


                                            </View>


                        </ScrollView>

                    </View>
                </ImageBackground>
            </View>
        )
    }
}
