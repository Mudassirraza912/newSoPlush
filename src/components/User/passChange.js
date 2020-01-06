import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, Alert, BackHandler} from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button, Item, Input, Label, Form, Icon, Spinner } from 'native-base';
import { Avatar, Header, Card, Divider } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'


const { width, height } = Dimensions.get("window")

export default class PassChange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPass: '',
            newPass: '',
            confirmPass: '',
            profileData: this.props.screenProps.profileData,
            currPassErr: false,
            newPassErr: false,
            confirmPassErr: false,
            matchErr: false,
            loader: false, 

        }
    }




    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
        drawerLockMode: 'locked-closed'
    })

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }


    handleBackButton = () => {
        console.log('this.props.isFocused ', this.props.isFocused)
            this.setState({
            currentPass: '',
            newPass: '',
            confirmPass: '',
            profileData: this.props.screenProps.profileData,
            currPassErr: false,
            newPassErr: false,
            confirmPassErr: false,
            matchErr: false,
            })
    };


    checkField = (key) => {
        if (key == "currPassword") {
            if (this.state.currentPass.length < 1) {
                this.setState({ currPassErr: "Current Password is required" })
            } else {
                if (this.state.currentPass.length > 5) {
                    this.setState({ currPassErr: false })
                }
                else {
                    this.setState({ currPassErr: "Password length must be greater than 6 digits" })
                }
            }
        }


        if (key == "newPass") {
            if (this.state.newPass.length < 1) {
                this.setState({ newPassErr: "New Password is required" })
            } else {
                if (this.state.newPass.length > 5) {
                    this.setState({ newPassErr: false })
                }
                else {
                    this.setState({ newPassErr: "Password length must be greater than 6 digits" })
                }
            }
        }


        if (key == "confirmPass") {
            if (this.state.confirmPass.length < 1) {
                this.setState({ confirmPassErr: "Confirm Password is required" })
            } else {
                if (this.state.confirmPass.length > 5) {
                    if (this.state.newPass != this.state.confirmPass) {
                        this.setState({ matchErr: true, confirmPassErr: false })
                    } else {
                        this.setState({ confirmPassErr: false, matchErr: false })
                    }
                }
                else {
                    this.setState({ confirmPassErr: 'Password length must be greater than 6 digits' })
                }
            }
        }

    }

    changePassword = async () => {
        const { currentPass, newPass, confirmPass, profileData } = this.state
        // console.log("FIKHSDJKDFJSN",code)


        this.setState({ loader: true })
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // this.setState({renderEMail: false, renderCode: false, renderPassword:false})
        var allCheck = false
        
            // http://192.168.0.120/29-may-2019/rest_api_for_plant_client/login_signup.php?action=login_user
        if  (currentPass.length < 1) {
            this.setState({currPassErr: "Current Password is required", loader: false})
        }
        if (newPass.length < 1) {
            this.setState({newPassErr: "New Password is required", loader: false})
        }
        if (confirmPass.length < 1) {
            this.setState({confirmPassErr: "Confirm Password is required", loader: false})
        }
        if (confirmPass.length < 1 || this.state.newPass != this.state.confirmPass) {
            this.setState({ matchErr: true, confirmPassErr: false, loader: false })
        }
        else{ 
            allCheck = true
        }


            const formData = new FormData();
            formData.append("current_password", currentPass)
            formData.append("new_password", confirmPass)
            formData.append("email", profileData.email)


            console.log("email, code, password", currentPass, newPass, profileData.email)

        if (allCheck === true) {
            
        
            fetch("https://hnhtechsolutions.com/hassan/soplush/auth/change_password.php?action=change_password", {
                method: 'POST',
                // dataType: "json",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data'
                },
                body: formData
            }).then(res => res.json())
                .then(resp => {
                    console.log(JSON.stringify(resp))
                    var successData = resp

                    if (successData.status === true) {
                        Alert.alert("Alert", "Password Changed successfully")
                        this.setState({ loader: false })
                        this.setState({
                            currentPass: '',
                            newPass: '',
                            confirmPass: '',
                            profileData: this.props.screenProps.profileData,
                            currPassErr: false,
                            newPassErr: false,
                            confirmPassErr: false,
                            matchErr: false,
                            })
                        // this.setState({renderEMail: false, renderCode: false, renderPassword:false}),
                        this.props.navigation.goBack()
                    } else {
                        this.setState({ loader: false })
                        Alert.alert("Alert", successData.message)
                    }
                    console.log("Alert", successData, successData.status, successData.data)
                })
                .catch(err => {
                    this.setState({ loader: false })
                    console.log("err err err", err)
                });

         }


    }





    render() {
        const { currentPass, newPass, confirmPass, currPassErr, newPassErr, confirmPassErr, matchErr , profileData} = this.state
        console.log("CONFIRM PASSWORD", currentPass, newPass, confirmPass, profileData)
        return (
            <View style={{ flex: 1, height: '100%', width: '100%', marginTop: -80 }}>
                <ImageBackground source={require('../../../assets/inner.png')} style={{ height: "100%", width: "100%", marginTop: 20 }}>


                    <Header
                        containerStyle={{ marginTop: 40, backgroundColor: "#fff" }}
                        placement="left"
                        leftComponent={<Icon onPress={() => { 
                            this.setState({
                                currentPass: '',
                                newPass: '',
                                confirmPass: '',
                                profileData: this.props.screenProps.profileData,
                                currPassErr: false,
                                newPassErr: false,
                                confirmPassErr: false,
                                matchErr: false,
                                })
                            this.props.navigation.navigate('UserHome') }} name="arrow-back" color="#000" />}
                        centerComponent={<Text style={{ alignSelf: 'center', fontSize: 20, fontFamily: "Poppins-Regular_0" }}>CHANGE PASSWORD</Text>}
                    // rightComponent={<TouchableOpacity onPress={() => {this.props.navigation.navigate("EditProfile")}}><Image source={require('../../../assets/edit.png')} style={{height:30, width:30}} /> 
                    // </TouchableOpacity> }
                    />

                    <View style={{ flex: 1, height: '100%', width: '100%', justifyContent: "center" }}>

                        <ScrollView style={{ height: height }}>

                            <View style={{ flex: 1, justifyContent: "center", alignContent: "center", alignItems: "center", marginTop: 20 }}>


                                <View style={{ backgroundColor: "#fff", borderRadius: 10, width: "90%", padding: 10 }}>


                                    {/* <Item  style={{width:"80%"}}>
                    <View style={{ width: 30}}>
                    <Image source={require("../../../assets/lockopen.png")} style={{ height: 20, width: 15 }} /> 
                    </View>
                        <Input secureTextEntry={true} style={{fontSize:15}} onChangeText={(e) => {this.setState({currentPass:e})}} placeholder="Current Password" />
                    </Item> */}


                                    <Item error={currPassErr} >
                                        <View style={{ width: 30 }}>
                                            <Image source={require("../../../assets/lockopen.png")} style={{ height: 20, width: 15 }} />
                                        </View>
                                        {/* <Label>Password</Label> */}
                                        <Input defaultValue={this.state.currentPass} style={{ width: '100%', fontSize: 15 }} onBlur={() => this.checkField("currPassword")} onChangeText={(e) => { this.setState({ currentPass: e }) }} placeholder="Current Password" secureTextEntry={true} />
                                    </Item>
                                    {currPassErr && <Text style={{ color: 'red', fontSize: 12, alignSelf: 'flex-end' }} >{currPassErr}</Text>}



                                    <Item error={newPassErr} >
                                        <View style={{ width: 30 }}>
                                            <Image source={require("../../../assets/lockopen.png")} style={{ height: 20, width: 15 }} />
                                        </View>
                                        {/* <Label>Password</Label> */}
                                        <Input defaultValue={this.state.newPass} style={{ width: '100%', fontSize: 15 }} onBlur={() => this.checkField("newPass")} onChangeText={(e) => { this.setState({ newPass: e }) }} placeholder="New Password" secureTextEntry={true} />
                                    </Item>
                                    {newPassErr && <Text style={{ color: 'red', fontSize: 12, alignSelf: 'flex-end' }} >{newPassErr}</Text>}

                                    <Item error={confirmPassErr} >
                                        <View style={{ width: 30 }}>
                                            <Image source={require("../../../assets/lockopen.png")} style={{ height: 20, width: 15 }} />
                                        </View>
                                        {/* <Label>Password</Label> */}
                                        <Input defaultValue={this.state.confirmPass} style={{ width: '100%', fontSize: 15 }} onBlur={() => this.checkField("confirmPass")} onChangeText={(e) => { this.setState({ confirmPass: e }) }} placeholder="Confirm Password" secureTextEntry={true} />
                                    </Item>
                                    {confirmPassErr && <Text style={{ color: 'red', fontSize: 12, alignSelf: 'flex-end' }} >{confirmPassErr}</Text>}
                                    {matchErr && <Text style={{ color: 'red', fontSize: 12, alignSelf: 'flex-end' }} > New Password and confirm Password doesn't match</Text>}

                                    {/* <View> 

                                        <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                                            <Button onPress={() => {this.props.navigation.navigate('Main')}} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#fc8b8c", width:"90%", borderRadius: 10, opacity:0.7}}> 
                                            <Text style={{alignSelf:"center",color:"#fff", fontFamily:"Poppins-Regular_0", fontSize:20}}>
                                                 Update Password
                                            </Text>   
                                            </Button>
                                        </View> 

                                </View> */}


                                    <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%", marginBottom: 10 }}>
                                        {/* <LinearGradient colors={['#fff', '#fc8b8c', '#fc8b8c']} style={{ width: "90%", borderRadius: 10 }}>
                                                <Button onPress={() => {this.props.navigation.navigate('UserHome')}} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }}>
                                                    <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "Poppins-Regular_0", fontSize: 20 }}>
                                                    Update Password
</Text>
                                                </Button>
                                            </LinearGradient> */}

                                    {!this.state.loader ?   <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }} colors={['#F9B1B0', '#FD8788', '#FF7173']} style={{ width: "100%", borderRadius: 10 }}>
                                            <TouchableOpacity onPress={() => { this.changePassword() }}style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }} style={{ flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "transparent", opacity: 0.7, borderRadius: 10 }}>
                                                <Text style={{ alignSelf: "center", textAlignVertical: "center", color: "#fff", fontFamily: "Poppins-Regular_0", paddingVertical: 15 , fontWeight:'bold'}}>
                                                    UPDATE PASSWORD
                    </Text>
                                            </TouchableOpacity>
                                        </LinearGradient> : 
                                        
                                        <Spinner color='#fc8b8c' />
                                        }

                                    </View>
                                </View>



                            </View>
                            {/* </View> */}

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
            </View>
        )
    }
}
