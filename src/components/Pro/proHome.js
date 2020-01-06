import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, Alert, BackHandler } from 'react-native'
// import {  } from 'react-native-gesture-handler';
// import { Container, Header, Content, Item, Input, Icon, Label, Form, Button, Body } from 'native-base';
import { Avatar, Header, Icon } from 'react-native-elements'
import { withNavigationFocus } from 'react-navigation';

const { width, height } = Dimensions.get("window")

class ProHome extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = () => ({
        // headerBackTitle: null,
        title: "HOME",
        headerTitleStyle: {
            fontFamily: "Poppins-Regular_0",
            fontSize: 30
        }
        // headerStyle: {
        //     alignContent:"center",
        //     justifyContent:"center",
        //     alignItems:"center",
        //     // alignSelf:"cneter"
        // },
    })

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton = () => {
        console.log('this.props.isFocused ', this.props.isFocused)
        if (this.props.isFocused) {
            Alert.alert(
                'Exit App',
                'Are you sure you want to exit?',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel'
                    },
                    {
                        text: 'OK',
                        onPress: () => BackHandler.exitApp()
                    }
                ],
                {
                    cancelable: false
                }
            );
            return true;
        }
    };

    render() {
        return (
            <View style={{ flex: 1, height: '100%', width: '100%', marginTop: -80 }}>
                <ImageBackground source={require('../../../assets/inner.png')} style={{ height: "100%", width: "100%" }}>

                    {/* <Header  style={{backgroundColor: '#fff', marginTop:80}}>

             <View style={{display:"flex", flexDirection:"row"}}>
    
               <View style={{marginTop:25, marginLeft: -80}}>
                   <Text style={{fontFamily:"Poppins-Regular_0", fontSize: 25 }}>
                        Home
                   </Text>
               </View>

               <View style={{marginTop:25, marginLeft:20}}>
                   <Text style={{fontFamily:"Poppins-Regular_0", fontSize: 25 }}>
                        Home
                   </Text>
               </View>


               <View style={{marginTop:25, marginLeft:20}}>
                   <Text style={{fontFamily:"Poppins-Regular_0", fontSize: 25 }}>
                   </Text>
               </View>

             </View>

       </Header> */}


                    <Header
                        containerStyle={{ marginTop: 60, backgroundColor: "#fff" }}
                        placement="left"
                        leftComponent={<Icon onPress={() => { this.props.navigation.toggleDrawer() }} name="menu" color="#000" />}
                        centerComponent={<Text style={{ alignSelf: 'center', fontSize: 20, fontFamily: "Poppins-Regular_0" }}>HOME</Text>}
                    // rightComponent={{ icon: 'home', color: '#000' }}
                    />


                    <View style={{ height: '100%', width: '100%', paddingBottom:  30   }}>

                        <ScrollView contentContainerStyle={{ height, width: '100%', alignItems: 'center', marginVertical: '10%' }}>

                        <ImageBackground source={require('../../../assets/homeBackground.png')} style={{ height: "90%", width: "100%", borderRadius: 10 }}>


                                <View style={{ alignSelf: "center", alignContent: "center", alignItems: "center", marginTop: "10%", paddingVertical: 15 }}>
                                    <Image source={require('../../../assets/text.png')} style={{ opacity: 2 }} />
                                </View>

                                <View style={{ display: "flex", flexDirection: "row", padding: 10, width: "100%", justifyContent: 'space-around', marginTop: "7%", paddingVertical: 60 }}>

                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("ServiceList") }} style={{ width: '45%' }}>
                                        <View style={{ alignContent: "center", alignItems: "center", alignSelf: "center", backgroundColor: "transparent", width: "100%", height: 139, borderRadius: 5, borderColor: "#000", borderWidth: 1, justifyContent: "space-evenly" }}>

                                            <Image source={require('../../../assets/icon2.png')} style={{ height: 60, width: 60, marginTop: "10%" }} />
                                            <Text style={{ fontFamily: 'Poppins-Regular_0', fontWeight: "bold" }}>Services</Text>

                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("BookingReq") }} style={{ width: '45%' }}>
                                        <View style={{ alignContent: "center", alignItems: "center", alignSelf: "center", backgroundColor: "#fc8b8c", width: "100%", height: 139, borderRadius: 5, justifyContent: "space-evenly" }}>

                                            <Image source={require('../../../assets/book.png')} style={{ height: 60, width: 55, marginTop: "10%" }} />
                                            <Text style={{ fontFamily: 'Poppins-Regular_0', fontWeight: "bold", color: "#fff" }}>Bookings</Text>

                                        </View>
                                    </TouchableOpacity>

                                </View>

                            </ImageBackground>
                        </ScrollView>

                    </View>
                </ImageBackground>
            </View>
        )
    }
}

export default withNavigationFocus(ProHome)