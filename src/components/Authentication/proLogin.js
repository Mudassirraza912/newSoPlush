// import React, { Component } from 'react'
// import { Text, View, ImageBackground, Dimensions, Image, Keyboard, Animated, UIManager, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
// // import { nodeInternals } from 'stack-utils';
// import { Avatar } from 'react-native-elements'
// import { Container, Header, Content, Item, Input, Icon, Label, Form, Button, List, ListItem, Left, Body, Spinner } from 'native-base';
// import LinearGradient from 'react-native-linear-gradient'

// const { State: TextInputState } = TextInput;
// const { width, height } = Dimensions.get("window")

// export default class ProLogin extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             shift: new Animated.Value(0),
//             email: "Jenny@gmail.com",
//             password: "12345",
//             loader: false
//         }
//     }

//     componentWillMount() {
//         this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
//         this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);

//     }

//     static navigationOptions = () => ({
//         headerMode: 'none',
//         headerVisible: false,
//         header: null,
//     })

//     login = async () => {
//         this.setState({loader: true})
//         const { email, password } = this.state
//         console.log("FIKHSDJKDFJSN")

//         // this.props.navigation.navigate("Main")
//         let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//         if (reg.test(email) === false) {
//             this.setState({loader: false})

//             Alert.alert("Email is not correct")
//         } else {

//             // http://192.168.0.120/29-may-2019/rest_api_for_plant_client/login_signup.php?action=login_user


//             const formData = new FormData();
//             formData.append("email", email),
//                 formData.append("password", password),


//                 console.log("email, password, address, name, phoneNo, profilePic", email, password)


//             fetch("https://hnhtechsolutions.com/hassan/soplush/auth/login.php?action=signin", {
//                 method: 'POST',
//                 // dataType: "json",
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'multipart/form-data'
//                 },
//                 body: formData
//             }).then(res => res.json())
//                 .then(resp => {
//                     console.log(JSON.stringify(resp))
//                     var successData = resp

//                     if (successData.status === true) {
//                         // console.log("successData.data[0].role_id === 3", successData.data[0].role_id === 3)
//                         if (successData.data[0].role_id == 3) {
//                             this.props.screenProps.fetchProfileData(successData.data[0])
//                             Alert.alert("Login successful")
//                             this.setState({loader: false})

//                             this.props.navigation.navigate("Main")
//                         } else {
//                             Alert.alert("Email or Password is incorrect")
//                             this.setState({loader: false})

//                         }
//                     } else {
//                         this.setState({loader: false})
//                         Alert.alert(successData.message)
//                     }
//                     console.log("SUCCESS PRO", successData, successData.status, successData.data)
//                 })
//                 .catch(err => {
//                     console.log("err err err", err)
//                     this.setState({loader: false})

//                 });
//         }


//     }


//     render() {
//         const { email, password, loader } = this.state
//         console.log(email, password)
//         return (
//             <View style={{ flex: 1, height, width, marginTop: -80 }}>
//                 <ImageBackground source={require('../../../assets/opacity100.png')} style={{ height: "100%", width: "100%", }}>



//                     <ScrollView>
//                         <Animated.View style={[{ justifyContent: 'center', alignItems: "center" }, { transform: [{ translateY: this.state.shift }] }]} >
//                             <View style={{ marginTop: 100 }}>
//                                 <View style={{ alignContent: "center", alignSelf: "center", alignItems: "center" }}>
//                                     <Image source={require('../../../assets/text.png')} />
//                                 </View>

//                                 <View style={{ marginTop: "10%" }}>
//                                     <Text style={{ fontFamily: "Poppins-Regular_0", fontSize: 30, marginLeft: "10%" }}>Sign In</Text>
//                                     <Text style={{ fontFamily: "Poppins-Regular_0", marginLeft: "10%", fontSize: 20, marginTop: "4%", opacity: 0.6 }}>Sign in with your email ID and Password</Text>
//                                 </View>

//                                 <View style={{ marginTop: "10%", alignContent: "center", alignSelf: "center", alignItems: "center", width: "80%", backgroundColor: "#fff", borderRadius: 10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 157, 0.4)', overflow: "hidden" }}>
//                                     {/* // Text input box with icon aligned to the left */}
//                                     <View >
//                                     <List style={{ paddingVertical: "2%", borderBottomColor:'lightgray', borderBottomWidth:0.5 }}>
//                                             <ListItem avatar>

//                                                 <Left style={{ marginBottom: "5%" }}>
//                                                     <Icon style={{ fontSize: 20, height: 50 }} active name='email-outline' type="MaterialCommunityIcons" />
//                                                 </Left>
//                                                 <Item floatingLabel style={{ marginLeft: "5%",borderBottomWidth: 0 }}>
//                                                     <Label style={{fontSize:15}}>Email Address</Label>
//                                                     <Input value={this.state.email} style onChangeText={(e) => { this.setState({ email: e }) }} />
//                                                 </Item>
//                                             </ListItem>
//                                         </List>

//                                         {/* // Text input box with icon aligned to the right */}
//                                         <List style={{ marginTop: "5%" }}>
//                                             <ListItem avatar>

//                                                 <Left>
//                                                     <Icon style={{ fontSize: 20, height: 50 }} active name='lock-outline' type="MaterialCommunityIcons" />
//                                                 </Left>
//                                                 <Item floatingLabel style={{ marginLeft: "5%", borderBottomWidth: 0 }}>
//                                                     <Label style={{fontSize:15}}>Password</Label>
//                                                     <Input value={this.state.password} style onChangeText={(e) => { this.setState({ password: e }) }} secureTextEntry />
//                                                 </Item>
//                                             </ListItem>
//                                         </List>

//                                     </View>

//                                 </View>

//                                 <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%" }}>
//                                     <TouchableOpacity onPress={() => { this.props.navigation.navigate("ForgotPassword", { from: "ProLogin" }) }}>
//                                         <Text style={{ fontFamily: 'Poppins-Regular_0', fontSize: 20 }}>Forgot Password</Text>
//                                     </TouchableOpacity>
//                                 </View>

//                               {!loader ?  <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%" }}>
//                                     <LinearGradient colors={['#fff', '#fc8b8c', '#fc8b8c']} style={{ width: "90%", borderRadius: 10 }}>
//                                         <Button onPress={this.login} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }}>
//                                             <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "Poppins-Regular_0", fontSize: 20 }}>
//                                                 Login
//                     </Text>
//                                         </Button>
//                                     </LinearGradient>
//                                 </View> :

//                                 <Spinner color='#fc8b8c'/>

//                                 }

//                                 <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%" }}>
//                                     <Text style={{ fontFamily: 'Poppins-Regular_0', fontSize: 20 }}>Or Sign Up Using</Text>
//                                 </View>


//                                 <View style={{ display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center", marginTop: "5%", justifyContent: "space-between" }}>

//                                     <LinearGradient colors={['#fff', '#883cb6', '#883cb6']} style={{ width: "45%", borderRadius: 10 }}>
//                                         <Button style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", borderRadius: 10, opacity: 0.7 }}>
//                                             <Icon name="instagram" type="MaterialCommunityIcons" />
//                                             <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "Poppins-Regular_0", fontSize: 20, marginRight: "10%" }}>
//                                                 Instagram
// </Text>
//                                         </Button>
//                                     </LinearGradient>

//                                     <LinearGradient colors={['#fff', '#fc8b8c', '#fc8b8c']} style={{ width: "45%", borderRadius: 10 }}>
//                                         <Button style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", borderRadius: 10, opacity: 0.7 }}>
//                                             <Icon name="google" type="FontAwesome" />
//                                             <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "Poppins-Regular_0", fontSize: 20, marginRight: "10%" }}>
//                                                 Gmail
// </Text>
//                                         </Button>
//                                     </LinearGradient>
//                                 </View>

//                                 <View style={{ display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center", marginTop: "5%", justifyContent: "center" }}>

//                                     <Text style={{ alignSelf: "center", fontFamily: "Poppins-Regular_0", fontSize: 20 }}>
//                                         New to Soplush Beauty
//                     </Text>
//                                     <TouchableOpacity onPress={() => { this.props.navigation.navigate("ProSignUp") }} style={{ marginLeft: "3%" }}>
//                                         <Text style={{ alignSelf: "center", color: "#fc8b8c", fontFamily: "Poppins-Regular_0", fontSize: 20, borderBottomWidth: 1, borderBottomColor: "#fc8b8c" }}>Create Account</Text>
//                                     </TouchableOpacity>

//                                 </View>



//                             </View>
//                         </Animated.View>
//                     </ScrollView>
//                 </ImageBackground>
//             </View>
//         )
//     }

//     componentWillUnmount() {
//         this.keyboardDidShowSub.remove();
//         this.keyboardDidHideSub.remove();
//     }

//     handleKeyboardDidShow = (event) => {
//         const { height: windowHeight } = Dimensions.get('window');
//         const keyboardHeight = event.endCoordinates.height;
//         const currentlyFocusedField = TextInputState.currentlyFocusedField();
//         UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
//             const fieldHeight = height;
//             const fieldTop = pageY;
//             const gap = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight);
//             if (gap >= 0) {
//                 return;
//             }
//             Animated.timing(
//                 this.state.shift,
//                 {
//                     toValue: gap,
//                     duration: 1000,
//                     useNativeDriver: true,
//                 }
//             ).start();
//         });
//     }

//     handleKeyboardDidHide = () => {
//         Animated.timing(
//             this.state.shift,
//             {
//                 toValue: 0,
//                 duration: 1000,
//                 useNativeDriver: true,
//             }
//         ).start();
//     }
// }




import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, Keyboard, Animated, UIManager, TextInput, TouchableOpacity, ScrollView, Alert, BackHandler, AsyncStorage } from 'react-native'
// import { nodeInternals } from 'stack-utils';
import { Avatar } from 'react-native-elements'
import { Container, Header, Content, Item, Input, Icon, Label, Form, Button, List, ListItem, Left, Body, Spinner } from 'native-base';
import LinearGradient from 'react-native-linear-gradient'

const { State: TextInputState } = TextInput;
const { width, height } = Dimensions.get("window")

export default class ProLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shift: new Animated.Value(0),
            email: "",
            password: "",
            loader: false
        }
    }

    componentWillMount() {
        this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
        this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);

    }


    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
    })

    login = async () => {
        this.setState({ loader: true })
        const { email, password } = this.state
        console.log("FIKHSDJKDFJSN")

        // this.props.navigation.navigate("Main")
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (reg.test(email) === false) {
            this.setState({ loader: false })

            Alert.alert("Alert", "Please Enter Valid Email Address")
        }
        // 28638
        else if (password == '') {
            this.setState({ loader: false })
            Alert.alert("Alert", "Password is required")
        } else {

            // http://192.168.0.120/29-may-2019/rest_api_for_plant_client/login_signup.php?action=login_user


            const formData = new FormData();
            formData.append("email", email),
                formData.append("password", password),


                console.log("email, password, address, name, phoneNo, profilePic", email, password)


            fetch("https://hnhtechsolutions.com/hassan/soplush/auth/login.php?action=signin", {
                method: 'POST',
                // dataType: "json",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data'
                },
                body: formData
            }).then(res => res.json())
                .then(async (resp) => {
                    console.log(JSON.stringify(resp))
                    var successData = resp

                    if (successData.status === true) {
                        // console.log("successData.data[0].role_id === 3", successData.data[0].role_id === 3)
                        if (successData.data[0].role_id == 3) {
                            this.props.screenProps.fetchProfileData(successData.data[0])
                            AsyncStorage.setItem('User', JSON.stringify(successData.data[0]))
                            try {
                                await AsyncStorage.setItem('User', JSON.stringify(successData.data[0]));
                                console.log('enableButton =>')
                            } catch (error) {
                                console.log('error =>', error)

                            }
                            Alert.alert("Alert", "Login successful")
                            this.setState({ loader: false })

                            this.props.navigation.navigate("ProNavigator")
                        } else {
                            Alert.alert("Alert", "Email or Password is incorrect")
                            this.setState({ loader: false })

                        }
                    } else {
                        this.setState({ loader: false })
                        Alert.alert("Alert", "Email or Password is incorrect")

                    }
                    console.log("SUCCESS PRO", successData, successData.status, successData.data)
                })
                .catch(err => {
                    console.log("err err err", err)
                    Alert.alert("Alert", "Email Or Password Incorrect")
                    this.setState({ loader: false })

                });
        }


    }


    render() {
        const { email, password, loader } = this.state
        console.log(email, password)
        return (
            <View style={{ flex: 1, height: "100%", width: '100%', marginTop: -80 }}>
                <ImageBackground source={require('../../../assets/login.png')} style={{ height: "100%", width: "100%", }}>


                    <View style={{ width: '100%', height: '100%' }}>
                        <ScrollView>
                            <Animated.View style={[{ justifyContent: 'center', alignItems: "center" }, { transform: [{ translateY: this.state.shift }] }]} >
                                <View style={{ marginTop: 100 }}>
                                    <View style={{ alignContent: "center", alignSelf: "center", alignItems: "center" }}>
                                        <Image source={require('../../../assets/text.png')} />
                                    </View>

                                    <View style={{ marginTop: "10%", width: '80%', padding: 5 }}>
                                        <Text style={{ fontFamily: "Poppins-bold_0", fontSize: 20, fontWeight: '600', }}>Sign In</Text>
                                        <Text style={{ fontFamily: "Poppins-Regular_0", marginTop: "4%", opacity: 0.6 }}>Sign in with your email ID and Password</Text>
                                    </View>

                                    <View style={{ marginTop: "5%", alignContent: "center", alignSelf: "center", alignItems: "center", width: "80%", backgroundColor: "#fff", borderRadius: 10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 157, 0.4)', overflow: "hidden" }}>
                                        {/* // Text input box with icon aligned to the left */}
                                        <View >
                                            {/* <List style={{ paddingVertical: "2%", borderBottomColor:'lightgray', borderBottomWidth:0.5 }}>
                                            <ListItem avatar>

                                                <Left style={{ marginBottom: "5%" }}>
                                                    <Icon style={{ fontSize: 20, height: 50 }} active name='email-outline' type="MaterialCommunityIcons" />
                                                </Left>
                                                <Item floatingLabel style={{ marginLeft: "5%",borderBottomWidth: 0 }}>
                                                    <Label style={{fontSize:15}}>Email Address</Label>
                                                    <Input value={this.state.email} style onChangeText={(e) => { this.setState({ email: e }) }} />
                                                </Item>
                                            </ListItem>
                                        </List> */}

                                            {/* // Text input box with icon aligned to the right */}
                                            {/* <List style={{ marginTop: "5%" }}>
                                            <ListItem avatar>

                                                <Left>
                                                    <Icon style={{ fontSize: 20, height: 50 }} active name='lock-outline' type="MaterialCommunityIcons" />
                                                </Left>
                                                <Item floatingLabel style={{ marginLeft: "5%", borderBottomWidth: 0 }}>
                                                    <Label style={{fontSize:15}}>Password</Label>
                                                    <Input value={this.state.password} style onChangeText={(e) => { this.setState({ password: e }) }} secureTextEntry />
                                                </Item>
                                            </ListItem>
                                        </List> */}



                                            <View style={{ display: 'flex', flexDirection: 'row', borderBottomColor: '#bdbdbd', borderBottomWidth: 0.5, width: '100%', paddingVertical: 1 }} >
                                                <View style={{ width: '20%', alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
                                                    <Image source={require("../../../assets/envelope1.png")} style={{ height: 15, width: 20 }} />
                                                </View>
                                                <Item stackedLabel style={{ width: '80%', borderBottomWidth: 0 }}>
                                                    <Label style={{ marginLeft: 3, color: 'lightgray', fontSize: 12, marginTop: 10 }}>Email Address</Label>
                                                    <Input placeholderTextColor="gray"  value={this.state.email} placeholder="something@gmail.com" style={{ color: 'gray', width: '100%', marginBottom: 5 }} onChangeText={(e) => {
                                                        if (e.includes(' ')) {
                                                           let text = e.replace(' ', '')
                                                            this.setState({ email: text })
                                                            // Alert.alert("Alert!", "Please don't type space in email")
                                                        } else {
                                                            this.setState({ email: e })
                                                        }
                                                    }} />
                                                </Item>
                                            </View>


                                            <View style={{ display: 'flex', flexDirection: 'row', width: '100%', paddingVertical: 3 }} >
                                                <View style={{ width: '20%', alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
                                                    <Image source={require("../../../assets/lockopen.png")} style={{ height: 20, width: 15 }} />
                                                </View>
                                                <Item stackedLabel style={{ width: '80%', borderBottomWidth: 0 }}>
                                                    <Label style={{ marginLeft: 3, color: 'lightgray', fontSize: 12, marginTop: 10 }}>Password</Label>
                                                    <Input secureTextEntry value={this.state.password} placeholder="*******" style={{ color: 'gray', width: '100%', marginBottom: 5 }} onChangeText={(e) => { this.setState({ password: e }) }} />
                                                </Item>
                                            </View>


                                        </View>

                                    </View>

                                    <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%" , paddingVertical: 5}}>
                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("ForgotPassword", { from: "ProLogin" }) }}>
                                            <Text style={{ fontFamily: 'Poppins-Regular_0', opacity: 0.6 }}>Forgot Password?</Text>
                                        </TouchableOpacity>
                                    </View>

                                    {!loader ? <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%" }}>
                                        {/* <LinearGradient colors={['#fff', '#fc8b8c', '#fc8b8c']} style={{ width: "90%", borderRadius: 10 }}>
                                        <Button onPress={this.login} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }}>
                                            <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "Poppins-Regular_0", fontSize: 20 }}>
                                                LOGIN
                    </Text>
                                        </Button>
                                    </LinearGradient> */}

                                        <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }} colors={['#F9B1B0', '#FD8788', '#FF7173']} style={{ width: "95%", borderRadius: 5 }}>
                                            <TouchableOpacity onPress={this.login} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }} style={{ flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "transparent", opacity: 0.7, borderRadius: 10 }}>
                                                <Text style={{ alignSelf: "center", textAlignVertical: "center", color: "#fff", fontFamily: "Poppins-Regular_0", paddingVertical: 15 , fontWeight:'bold'}}>
                                                    LOGIN
                    </Text>
                                            </TouchableOpacity>
                                        </LinearGradient>
                                    </View> :

                                        <Spinner color='#fc8b8c' />

                                    }

                                    <View style={{ alignContent: "center", alignItems: "center", paddingVertical: 10 }}>
                                        <Text style={{ fontFamily: 'Poppins-Regular_0', opacity: 0.6 }}>Or Sign Up Using</Text>
                                    </View>


                                    <View style={{ display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center", marginTop: "5%", justifyContent: "space-between", width: '80%', alignSelf: 'center' }}>

                                        {/* <LinearGradient colors={['#fff', '#883cb6', '#883cb6']} style={{ width: "45%", borderRadius: 10 }}>
                                        <Button onPress={() => {
                                            Alert.alert("Alert", "Will be implemented")
                                        }} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", borderRadius: 10, opacity: 0.7 }}>
                                            <Icon name="instagram" type="MaterialCommunityIcons" />
                                            <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "Poppins-Regular_0", fontSize: 20, marginRight: "10%" }}>
                                                Instagram
</Text>
                                        </Button>
                                    </LinearGradient> */}

                                        <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }} colors={['#c79de0', '#883cb6', '#883cb6']} style={{ width: "48%", borderRadius: 5 }}>
                                            <TouchableOpacity onPress={() => {
                                                Alert.alert("Alert", "Will be implemented")
                                            }} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "transparent", opacity: 0.7, borderRadius: 10, flexDirection: 'row' }}>
                                                <Icon style={{ color: '#fff' }} name="instagram" type="MaterialCommunityIcons" />
                                                <Text style={{ alignSelf: "center", textAlignVertical: "center", color: "#fff", fontFamily: "Poppins-Regular_0", paddingVertical: 10, paddingHorizontal: 5, fontWeight:'bold' }}>
                                                    Instagram
                    </Text>
                                            </TouchableOpacity>
                                        </LinearGradient>

                                        {/* <LinearGradient colors={['#fff', '#fc8b8c', '#fc8b8c']} style={{ width: "45%", borderRadius: 10 }}>
                                        <Button onPress={() => {
                                            Alert.alert("Alert", "Will be implemented")
                                        }}  style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", borderRadius: 10, opacity: 0.7 }}>
                                            <Icon name="google" type="FontAwesome" />
                                            <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "Poppins-Regular_0", fontSize: 20, marginRight: "10%" }}>
                                                Gmail
</Text>
                                        </Button>
                                    </LinearGradient> */}


                                        <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }} colors={['#F9B1B0', '#FD8788', '#FF7173']} style={{ width: "48%", borderRadius: 5 }}>
                                            <TouchableOpacity onPress={() => {
                                                Alert.alert("Alert", "Will be implemented")
                                            }} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "transparent", opacity: 0.7, borderRadius: 10, flexDirection: 'row' }}>
                                                <Icon style={{ color: '#fff' }} name="google" type="FontAwesome" />
                                                <Text style={{ alignSelf: "center", textAlignVertical: "center", color: "#fff", fontFamily: "Poppins-Regular_0", paddingVertical: 10, paddingHorizontal: 5 , fontWeight:'bold'}}>
                                                    Gmail
                    </Text>
                                            </TouchableOpacity>
                                        </LinearGradient>
                                    </View>

                                    <View style={{ display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center", marginTop: "5%", justifyContent: "center", paddingVertical: 10 }}>

                                        <Text style={{ alignSelf: "center", fontFamily: "Poppins-Regular_0", opacity: 0.6 }}>
                                            New to Soplush Beauty?
                    </Text>
                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("ProSignUp") }} style={{ marginLeft: "3%" }}>
                                            <Text style={{ alignSelf: "center", color: "#fc8b8c", fontFamily: "Poppins-Regular_0", borderBottomWidth: 1, borderBottomColor: "#fc8b8c" }}>Create Account</Text>
                                        </TouchableOpacity>

                                    </View>



                                </View>
                            </Animated.View>
                        </ScrollView>
                        <Text></Text>

                    </View>
                </ImageBackground>
            </View>
        )
    }

    componentWillUnmount() {
        this.keyboardDidShowSub.remove();
        this.keyboardDidHideSub.remove();
    }

    handleKeyboardDidShow = (event) => {
        const { height: windowHeight } = Dimensions.get('window');
        const keyboardHeight = event.endCoordinates.height;
        const currentlyFocusedField = TextInputState.currentlyFocusedField();
        UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
            const fieldHeight = height;
            const fieldTop = pageY;
            const gap = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight);
            if (gap >= 0) {
                return;
            }
            Animated.timing(
                this.state.shift,
                {
                    toValue: gap,
                    duration: 1000,
                    useNativeDriver: true,
                }
            ).start();
        });
    }

    handleKeyboardDidHide = () => {
        Animated.timing(
            this.state.shift,
            {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }
        ).start();
    }
}