import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button } from 'native-base';
import { Avatar, Header, Icon, Card } from 'react-native-elements'


const { width, height } = Dimensions.get("window")

export default class Term extends Component {
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
            <View style={{ flex: 1, height:'100%', width:'100%', marginTop: -80 }}>
                <ImageBackground source={require('../../../assets/inner.png')} style={{ height: "100%", width: "100%" }}>

                    <Header
                        containerStyle={{ marginTop: 60, backgroundColor: "#fff" }}
                        placement="left"
                        leftComponent={<Icon onPress={() => { this.props.navigation.navigate('UserHome') }} name="arrow-back" color="#000" />}
                        centerComponent={<Text style={{ alignSelf: "center", fontSize: 20, fontFamily: "Poppins-Regular_0" }}>TERMS & CONDITIONS</Text>}
                        // rightComponent={<TouchableOpacity onPress={() => { this.props.navigation.navigate("Notification") }}>
                        //     <Image source={require('../../../assets/notification.png')} style={{ height:26, width:20 }} />
                        // </TouchableOpacity>}
                    />



                    <View style={{flex: 1 ,height:'100%', width:'100%', justifyContent: "center" }}>

                        <ScrollView style={{ height: height }}>

                            {/* <View style={{backgroundColor:"#fff", width:"80%",justifyContent:"center", alignContent:"center", alignSelf:"center",borderRadius:10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 157, 0.4)', marginTop: '10%', marginBottom:'5%'}}> */}

                            <View style={{flex: 1 ,marginTop: 20, marginHorizontal: "3%" }}>

                                <Text style={{ fontFamily: "Poppins-Regular_0", marginTop: "3%", fontSize: 13, textAlign: "justify", fontStyle: "normal", color: "#48576f", lineHeight: 20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>



                            <Text style={{ fontFamily: "Poppins-Regular_0", marginTop: "3%", fontSize: 13, textAlign: "justify", fontStyle: "normal", color: "#48576f", lineHeight: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>



                            <Text style={{ fontFamily: "Poppins-Regular_0", marginTop: "3%", fontSize: 13, textAlign: "justify", fontStyle: "normal", color: "#48576f", lineHeight: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                    
                 </View>




                        <View>
                            <Text></Text>
                            <Text></Text>
                            <Text></Text>
                            <Text></Text>
                            <Text></Text>
                            <Text></Text>
                            <Text></Text>
                        </View>



                </ScrollView>


                </View>
                </ImageBackground>
        </View >
        )
    }
}