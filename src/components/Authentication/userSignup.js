import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, Alert } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Header, Content, Item, Input, Icon, Label, Form, Button, Spinner } from 'native-base';
import camicon from '../../../assets/camera.png'
import pro from '../../../assets/barbie.jpg'
import { Avatar, Badge, withBadge } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker'
import axios from 'axios'
import LinearGradient from 'react-native-linear-gradient'


import user from '../../../assets/user.png'
import home from '../../../assets/home.png'
import phone from '../../../assets/phone-call.png'
import envelop from '../../../assets/envelope1.png'
import lock from '../../../assets/lockopen.png'
import cake from '../../../assets/cake.png'
import museum from '../../../assets/museum.png'
import atmcard from '../../../assets/atm-card.png'
import photoCamera from '../../../assets/photo-camera.png'


const BadgedIcon = withBadge("X")(Avatar)
const { width, height } = Dimensions.get("window")

const options = {
    title: 'Select Avatar',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};


export default class UserSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // profilePic:[
            //     camicon,
            //     pro,
            //     // pro,
            //     // pro,
            //     // pro,
            //     // pro,

            // ],
            email: "",
            password: "",
            name: "",
            address: "",
            phoneNo: "",
            profilePic: false,
            fileName: "",
            fileUri: "",
            loader: false,
            emailErr: false,
            passwordErr: false,
            nameErr: false,
            addressErr: false,
            phoneNoErr: false,

        }
    }


    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
    })


    checkField = (key) => {
        if (key == "password") {
            if (this.state.password.length > 5) {
                this.setState({ passwordErr: false })
            }
            else {
                this.setState({ passwordErr: true })
            }
        } else {
            if (!this.state[key]) {
                this.setState({
                    [`${key}Err`]: true
                })
            } else {
                this.setState({
                    [`${key}Err`]: false
                })
            }
        }
    }

    openGallery = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                //   const source = { uri: response.uri };
                // You can also display the image using data:
                const source = { uri: 'data:image/jpeg;base64,' + response.data };
                console.log("uri: response.uri", source, response)

                this.setState({
                    profilePic: source,
                    fileName: response.fileName,
                    fileUri: response.uri
                });
            }
        });
    }






    // signUp = () => {
    //     this.setState({ loader: true })
    //     const { email, password, name, phoneNo, address, profilePic, fileName, fileUri } = this.state
    //     // this.props.successSign()
    //     console.log("SIGN UP jksdajkfajkshjghj")
    //     // this.props.navigation.navigate("UserLogin")
    //     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //     if (reg.test(email) === false) {
    //         this.setState({ loader: false })
    //         Alert.alert("Email is not correct")
    //     } else {

    //         const formData = new FormData();
            // if (fileUri != "") {
            //     var file = {
            //         uri: fileUri,
            //         name: fileName,
            //         type: 'image/png'
            //     }
            //     formData.append("file_upload", file)

            // }
    //         formData.append("email", email),
    //             formData.append("password", password),
    //             formData.append("address", address),
    //             formData.append("name", name),
    //             formData.append("phone_number", phoneNo),


    //             console.log("email, password, address, name, phoneNo, profilePic", email, password, address, name, phoneNo, profilePic)

    //         // axios.post("https://hnhtechsolutions.com/hassan/soplush/auth/signup.php?action=signup_customer",{
    //         //     email: email,
    //         //     password: password,
    //         //     address: address,
    //         //     name: name,
    //         //     phone_number : phoneNo,
    //         //     file_upload : file
    //         //   })
    //         //     .then((response) => {
    //         //      console.log("SIGN_UP_PROCESSED response",response)
    //         //     //   dispatch({type: "SIGN_UP_PROCESSED", payload: response.data});
    //         //     })
    //         //     .catch((err) => {
    //         //      console.log("SIGN_UP_ERROR response",err)

    //         //     //   dispatch({type: "Alert", payload: 'An unexpected error occured!'});dispatch({type: "CLEAR_PROCESSING"});
    //         //       // dispatch({type: "SIGN_UP_PROCESSED", payload: {error: 'An unexpected error occured!', status: 'error'}})
    //         //     })
    //         // }

    //         //     axios.post("https://hnh-crypto.herokuapp.com/api/activities/get-activity",{
    //         //   id: 1
    //         // })
    //         //   .then((response) => {
    //         //     console.log("SIGN_UP_PROCESSED response",response)
    //         //   })
    //         //   .catch((err) => {
    //         //     console.log("SIGN_UP_ERROR response",err)
    //         //     // dispatch({type: "ACTIVITIES_PROCESSED", payload: {error: 'An unexpected error occured!', status: 'error'}})
    //         //   })



    //         fetch("https://hnhtechsolutions.com/hassan/soplush/auth/signup.php?action=signup_customer", {
    //             method: 'POST',
    //             // dataType: "json",
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'multipart/form-data'
    //             },
    //             body: formData
    //         }).then(res => res.json())
    //             .then(resp => {
    //                 console.log(JSON.stringify(resp))
    //                 var successData = resp

    //                 if (successData.status) {
    //                     if (successData.status === true) {
    //                         Alert.alert("Signup successful")
    //                         this.setState({ loader: false })
    //                         this.props.navigation.navigate("UserLogin")
    //                     }
    //                 } else {
    //                     Alert.alert(successData.message)
    //                     this.setState({ loader: false })

    //                 }
    //                 console.log("Alert", successData, successData.status, successData.data)
    //             })
    //             .catch(err => {
    //                 // Alert.alert(err)
    //                 Alert.alert('Try Later')
    //                 console.log("err err err", err)
    //                 this.setState({ loader: false })

    //             });
    //     }
    // }



    signUp = () => {
        this.setState({ loader: true })
        const { email, password, name, phoneNo, address, profilePic, fileName, fileUri } = this.state
        // this.props.successSign()
        console.log("SIGN UP jksdajkfajkshjghj")
        // this.props.navigation.navigate("UserLogin")
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email && password && phoneNo && address && name.length >= 5 && phoneNo.length > 7) {
            if (reg.test(email) === false) {
                this.setState({ loader: false })
                Alert.alert("Alert","Please Enter Valid Email Address")
            } else {

                const formData = new FormData();


                if (fileUri != "") {
                    var file = {
                        uri: fileUri,
                        name: fileName,
                        type: 'image/png'
                    }
                    formData.append("file_upload", file)
    
                }

                formData.append("email", email.toLowerCase()),
                    formData.append("password", password),
                    formData.append("address", address),
                    formData.append("name", name),
                    formData.append("phone_number", phoneNo),
                    // formData.append("file_upload", file),

                    console.log("email, password, address, name, phoneNo, profilePic", email, password, address, name, phoneNo, profilePic)

                // axios.post("https://hnhtechsolutions.com/hassan/soplush/auth/signup.php?action=signup_customer",{
                //     email: email,
                //     password: password,
                //     address: address,
                //     name: name,
                //     phone_number : phoneNo,
                //     file_upload : file
                //   })
                //     .then((response) => {
                //      console.log("SIGN_UP_PROCESSED response",response)
                //     //   dispatch({type: "SIGN_UP_PROCESSED", payload: response.data});
                //     })
                //     .catch((err) => {
                //      console.log("SIGN_UP_ERROR response",err)

                //     //   dispatch({type: "Alert", payload: 'An unexpected error occured!'});dispatch({type: "CLEAR_PROCESSING"});
                //       // dispatch({type: "SIGN_UP_PROCESSED", payload: {error: 'An unexpected error occured!', status: 'error'}})
                //     })
                // }

                //     axios.post("https://hnh-crypto.herokuapp.com/api/activities/get-activity",{
                //   id: 1
                // })
                //   .then((response) => {
                //     console.log("SIGN_UP_PROCESSED response",response)
                //   })
                //   .catch((err) => {
                //     console.log("SIGN_UP_ERROR response",err)
                //     // dispatch({type: "ACTIVITIES_PROCESSED", payload: {error: 'An unexpected error occured!', status: 'error'}})
                //   })



                fetch("https://hnhtechsolutions.com/hassan/soplush/auth/signup.php?action=signup_customer", {
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

                        if (successData.status) {
                            if (successData.status === true) {
                                Alert.alert("Alert","Signup successful")
                                this.setState({ loader: false })
                                this.props.navigation.navigate("UserLogin")
                            }
                        } else {
                            Alert.alert("Alert",successData.message)
                            this.setState({ loader: false })

                        }
                        console.log("Alert", successData, successData.status, successData.data)
                    })
                    .catch(err => {
                        // Alert.alert(err)
                        Alert.alert("Alert",'Something went wrong!')
                        console.log("err err err", err)
                        this.setState({ loader: false })

                    });
            }
        } if (!email) {
            this.setState({ emailErr: true, loader: false })
        } if (!name || name.length < 5) {
            this.setState({ nameErr: true, loader: false })
        } if (!address) {
            this.setState({ addressErr: true, loader: false })
        } if (!phoneNo || phoneNo.length < 8) {
            this.setState({ phoneNoErr: true, loader: false })
        }
        if (password.length < 6) {
            this.setState({ passwordErr: true, loader: false })
        }
    }

    render() {
        const { email, password, name, address, phoneNo, loader, emailErr, passwordErr, nameErr, addressErr, phoneNoErr } = this.state
        console.log(email, password, name, address, phoneNo)
        return (
            <View style={{ flex: 1, height: '100%', width:'100%' }}>
                <ImageBackground source={require('../../../assets/inner.png')} style={{ height: "100%", width: "100%" }}>



                <View style={{flex: 1 ,width: '100%', height: '100%' }}>
                    <ScrollView>


                        <View style={{ flex:1 , height, width: '100%', justifyContent: "center" }}>

                        <View style={{ alignSelf: "center", alignContent: "center", alignItems: "center"}}>
                                <Image source={require('../../../assets/text.png')} style={{  alignSelf:'center', width:240, height: 100 }} />
                            </View>




                            <View style={{ marginTop: "5%", alignContent: "center", alignSelf: "center", alignItems: "center", width: "80%", backgroundColor: "#fff", borderRadius: 10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 157, 0.4)', paddingHorizontal: "5%", paddingVertical: 5 }}>

                                <View style={{marginVertical:10, marginTop: "5%"}}>
                                    <Text style={{ fontFamily: "Poppins-Regular_0", fontSize: 20, fontWeight: '600' }}>CREATE ACCOUNT</Text>
                                </View>

                                {/* <Item>
                                    <Image source={user} style={{ height: 15, width: 20 }} />
                                    <Input placeholderTextColor="#bdbdbd" onChangeText={(e) => { this.setState({ name: e }) }} placeholder=" Name" />
                                </Item>
                                <Item>
                                    <Image source={home} style={{ height: 15, width: 20 }} />
                                   
                                    <Input placeholderTextColor="#bdbdbd" onChangeText={(e) => { this.setState({ address: e }) }} placeholder="Address" />
                                </Item>
                                <Item>
                                    <Image source={phone} style={{ height: 15, width: 20 }} />
                                    <Input onChangeText={(e) => { this.setState({ phoneNo: e }) }} placeholder="Phone Number" />
                                </Item>
                                <Item>
                                    <Image source={envelop} style={{ height: 15, width: 20 }} />
                                    <Input placeholderTextColor="#bdbdbd" onChangeText={(e) => { this.setState({ email: e }) }} placeholder="Email Address" />
                                </Item>

                                <Item>
                                    <Image source={lock} style={{ height: 15, width: 20 }} />
                                    
                                    <Input style={{fontSize:20}}  placeholderTextColor="#bdbdbd" onChangeText={(e) => this.setState({ password: e })} placeholder="Password"secureTextEntry />
                                </Item>

                                <Item onPress={this.openGallery}>
                                    <Image source={camicon} style={{ height: 30, width: 30 }} />
                                    <Input placeholderTextColor="#bdbdbd" disabled keyboardType="number-pad" onChangeText={(e) => this.setState({ accountNo: e })} placeholder="Upload Pictures" />
                                </Item>
 */}

<Item error={nameErr}>
<View style={{ width: 30}}>
<Image source={user} style={{ height: 20, width: 20}} />
</View>
                                    {/* <Label>Name</Label> */}
                                    <Input placeholderTextColor="#bdbdbd" style={{width: '100%', fontSize: 15}} onChangeText={(e) => { this.setState({ name: e }) }} onBlur={() => this.checkField("name")} placeholder="Name" />
                                </Item>

                                {nameErr && <Text style={{ color: 'red', fontSize: 12, alignSelf: 'flex-end' }} >Username is required</Text>}
                                <Item error={addressErr} >
                                <View style={{ width: 30}}>
                                <Image source={home} style={{ height: 20, width: 20 }} />
                                </View>
                                    {/* <Label>Address</Label> */}
                                    <Input placeholderTextColor="#bdbdbd" style={{width: '100%', fontSize: 15}} onBlur={() => this.checkField("address")} onChangeText={(e) => { this.setState({ address: e }) }} placeholder="Address" />
                                </Item>
                                {addressErr && <Text style={{ color: 'red', fontSize: 12, alignSelf: 'flex-end' }} > Address is required</Text>}
                                <Item error={phoneNoErr} >
                                <View style={{ width: 30}}>
                                <Image source={phone} style={{  height: 20, width: 20}} />
                                </View>
                                    {/* <Label>Phone Number</Label> */}
                                    {/* 28644 */}
                                    <Input placeholderTextColor="#bdbdbd" style={{width: '100%', fontSize: 15}} keyboardType="number-pad" onBlur={() => this.checkField("phoneNo")} onChangeText={(e) => { this.setState({ phoneNo: e }) }} placeholder="Phone Number" />
                                </Item>
                                {phoneNoErr && <Text style={{ color: 'red', fontSize: 12, alignSelf: 'flex-end' }} >Phone number must be greater than 7 digits</Text>}
                                <Item error={emailErr} >
                                <View style={{ width: 30}}>
                                <Image source={envelop} style={{ height: 20, width: 20}} />
                                </View>
                                    {/* <Label>Email Address</Label> */}
                                    <Input placeholderTextColor="#bdbdbd" style={{width: '100%', fontSize: 15}} onBlur={() => this.checkField("email")} onChangeText={(e) => { this.setState({ email: e }) }} placeholder="Email Address" />
                                </Item>
                                {emailErr && <Text style={{ color: 'red', fontSize: 12, alignSelf: 'flex-end' }} >Email address is required</Text>}
                                
                                <Item error={passwordErr} >
                                <View style={{ width: 30}}>
                                <Image source={lock} style={{  height: 20, width: 20}} />
                                </View>
                                    {/* <Label>Password</Label> */}
                                    <Input placeholderTextColor="#bdbdbd" style={{width: '100%', fontSize: 15}}  onBlur={() => this.checkField("password")} onChangeText={(e) => { this.setState({ password: e }) }} placeholder="Password" secureTextEntry={true} />
                                </Item>
                                {passwordErr && <Text style={{ color: 'red', fontSize: 12, alignSelf: 'flex-end' }} >Password length must be greater than 6 digits</Text>}
                                <Item onPress={this.openGallery} >
                                <View style={{ width: 30}}>
                                <Image source={camicon} style={{  height: 20, width: 20 }} />
                                </View>
                                    <Input placeholderTextColor="#bdbdbd" style={{width: '100%', fontSize: 15}} disabled keyboardType="number-pad" onChangeText={(e) => this.setState({ accountNo: e })} placeholder="Upload Pictures" />
                                </Item>

                                {this.state.profilePic && <View style={{ display: "flex", flexDirection: "row", marginBottom: "3%", marginVertical: '3%', alignSelf: 'flex-start' }}>
                                    <Avatar onPress={this.openGallery} containerStyle={{ justifyContent:'center',alignItems:'center',height: 40, width: 40, marginTop: "1%", borderRadius: 5, backgroundColor:'#bdbdbd', }} source={photoCamera}  avatarStyle={{height:15, width: 15 }} overlayContainerStyle={{ height: 40, width: 40, marginTop: "30%", marginLeft:'60%', borderRadius: 5, }} />


                                    <TouchableOpacity style={{ height: 50, width: 50, borderTopLeftRadius: 5,borderBottomLeftRadius: 5, borderBottomRightRadius: 5,  }} onPress={() => {

                                        Alert.alert(
                                            'Profile',
                                            'Are you sure you want to remove picture?',
                                            [
                                                {
                                                    text: 'No',
                                                    onPress: () => console.log('Cancel Pressed'),
                                                    style: 'cancel',
                                                },
                                                {
                                                    text: 'yes',
                                                    onPress: () => this.setState({ profilePic: false })
                                                    ,
                                                    style: 'cancel',
                                                },
                                                { cancelable: false }
                                            ]
                                        )

                                    }}>
                                        <ImageBackground source={this.state.profilePic}  borderTopLeftRadius = {5}  borderBottomRightRadius= {5} borderBottomLeftRadius={5} style={{ height: 40, width: 40, margin: 3, display: "flex", backgroundColor: "lightgray",}}>
                                            <Text style={{ backgroundColor: "red", borderRadius: 100, color: "#fff", height: 15, width: 15, alignSelf: 'flex-end', textAlign: 'center', position: 'absolute', right: -7, top: -7, fontSize: 10 }}>X</Text>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                </View>}


                                {/* <Button onPress={this.signUp} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#fc8b8c", width:"90%", borderRadius: 10, opacity:0.7}}> 
                    <Text style={{alignSelf:"center",color:"#fff", fontFamily:"Poppins-Regular_0", fontSize:20}}>
                        Sign Up
                    </Text>
                </Button> */}



                                {!loader ?

                                    <View style={{ alignContent: "center", alignItems: "center", width: '100%',  paddingVertical:'5%' }}>
                                        <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }} colors={['#F9B1B0', '#FD8788', '#FF7173']} style={{ width: "100%", borderRadius: 10 }}>
                                            <TouchableOpacity onPress={this.signUp} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }}>
                                                <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "Poppins-Regular_0", paddingVertical: '7%', marginTop:-5 , fontWeight:'bold'}}>
                                                SIGN UP
</Text>
                                            </TouchableOpacity>
                                        </LinearGradient>
                                    </View>

                                    :

                                    <Spinner color="#fc8b8c" />

                                }


                            </View>


                        </View>
                    </ScrollView>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}
