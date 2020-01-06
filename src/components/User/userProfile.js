// import React, { Component } from 'react'
// import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, Alert } from 'react-native'
// // import {  } from 'react-native-gesture-handler';
// import { Container, Content, List, ListItem, Left, Right, Button, Item, Input,  Label, Form, Icon, Spinner } from 'native-base';
// import {Avatar, Header, Card, Divider} from 'react-native-elements'
// import ImagePicker from 'react-native-image-picker'
// import LinearGradient from 'react-native-linear-gradient'


// const {width, height} = Dimensions.get("window")
// const options = {
//     title: 'Select Avatar',
//     storageOptions: {
//       skipBackup: true,
//       path: 'images',
//     },
//   };
// export default class UserProfile extends Component {
//     constructor(props) {
//         super(props);
        // this.state = {
        //     profileData : this.props.screenProps.profileData,
        //     fileName: '',
        //     fileUri: '',
        //     userId:'',
        //     profilePic: false,
        //     username: '',
        //     phoneNo : '',
        //     email: '',
        //     userId: '',
        //     address:'',
        //     loader: false
                
            
        // }
//     }

    // componentWillMount() {
    //     this.setState({
    //         profileData: this.props.screenProps.profileData,
    //         username: this.props.screenProps.profileData.username,
    //         phoneNo:this.props.screenProps.profileData.phone_number,
    //         email:this.props.screenProps.profileData.email,
    //         userId: this.props.screenProps.profileData.user_id,
    //         address:this.props.screenProps.profileData.address,
            
    //     })
    // }


//     static navigationOptions = () => ({
//         headerMode: 'none',
//         headerVisible: false,
//         header: null,
//     })



//     updateProfile = () => {
//         this.setState({loader: true})
//         const {username, phoneNo, address,userId,fileName, fileUri,} = this.state
//         const formData = new FormData()
        
//         if  (fileUri != "") {
//             var file = {
//                 uri: fileUri,
//                 name: fileName,
//                 type: 'image/png'
//             }
//         formData.append('file_upload',file)

//         }
        
//         formData.append('name',username)
//         formData.append('phone_number',phoneNo)
//         formData.append('user_id',userId)
//         formData.append('address',address)
        

//         console.log("profileData", formData)


//         fetch("https://hnhtechsolutions.com/hassan/soplush/user/user.php?action=update_profile", {
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
//                         console.log(" After Status SUCCESS USER", successData.data)

//                             this.props.screenProps.fetchProfileData(successData.data)
//                             Alert.alert("Alert","Profile Updated Successfully")
//                             this.setState({loader: false})
//                             this.setState({profilePic: false, fileUri:"", fileName:""})
//                         this.props.navigation.navigate('UseHome')

                      
//                     } else {
//                         this.setState({loader: false})
//                         Alert.alert("Alert","Email or Password is incorrect")
//                     }
//                 } else {
//                     this.setState({loader: false})

//                     Alert.alert("Alert",successData.message)
//                 }
//                 console.log("SUCCESS USER", successData, successData.status, successData.data)
//             })
//             .catch(err => {
//                 this.setState({loader: false})
//                 console.log("err UPDATEPROFILE", err)});

//     }


//     openGallery = () => {
//         ImagePicker.showImagePicker(options, (response) => {
//             console.log('Response = ', response);
          
//             if (response.didCancel) {
//               console.log('User cancelled image picker');
//             } else if (response.error) {
//               console.log('ImagePicker Error: ', response.error);
//             } else if (response.customButton) {
//               console.log('User tapped custom button: ', response.customButton);
//             } else {
//             //   const source = { uri: response.uri };
//               // You can also display the image using data:
//               const source = { uri: 'data:image/jpeg;base64,' + response.data };
//               console.log( "uri: response.uri", source, response)
          
//               this.setState({
//                 profilePic: source,
//                 fileName: response.fileName,
//                 fileUri: response.uri
//               });
//             }
//           });
//     } 

    
//     render() {
//         console.log("USERPROFILE",this.state.profileData)
//         return (
//             <View style={{flex:1, height:'100%', width:'100%', marginTop: -80}}>
//                 <ImageBackground source={require('../../../assets/opacity.jpg')} style={{height:"100%", width:"100%",opacity:0.9, marginTop: 20}}> 

              
//                 <Header
//                         containerStyle={{marginTop:40, backgroundColor:"#fff"}}
//                         placement="left"
//                         leftComponent={<Icon onPress={() => {this.props.navigation.navigate('UserHome')}} name="arrow-back" color="#000" />}
//                         centerComponent={<Text style={{alignSelf:'center',
//                          fontSize:20,
//                          fontFamily:"Poppins-Regular_0"
//                         //  , fontWeight:'bold'
//                         }}>EDIT PROFILE</Text>}
//                         // rightComponent={<TouchableOpacity onPress={() => {this.props.navigation.navigate("EditProfile")}}><Image source={require('../../../assets/edit.png')} style={{height:30, width:30}} /> 
//                         // </TouchableOpacity> }
//                         />

//                 <View style={{ height:'100%', width:'100%', backgroundColor:"rgba(246, 232, 232, 0.7)",justifyContent:"center"}}>

//                 <ScrollView style={{height: height}}>
                   
//                    <View style={{justifyContent:"center", alignContent:"center", alignItems:"center", marginTop:20}}>

//                 {/* <View style={{backgroundColor:"#fff",borderRadius:10, width:"90%"}}> */}
                   
//                         <Card containerStyle={{backgroundColor:"#fff", borderRadius:10, width:"90%",}}> 

//                         {!this.state.profilePic ? <View style={{justifyContent:"center", alignContent:"center", alignItems:"center"}}>
//                              <Avatar  editButton={{name:"camera",type:"font-awesome", size:25, iconStyle:{marginTop:10} ,containerStyle:{backgroundColor:"#fc8b8c", borderRadius:50, height: 45, width: 45, borderColor:'#fff' , borderWidth:2 ,marginRight:60}, color:"#fff", underlayColor:"#fc8b8c", reverseColor:"#fc8b8c", }}  onPress={this.openGallery} onEditPress={this.openGallery} containerStyle={{backgroundColor:"#fc8b8c",}} showEditButton  rounded size="xlarge" source={{uri:`https://hnhtechsolutions.com/hassan/soplush/profile_pics/${this.props.screenProps.profileData.profile_pic}`}} />
//                         </View> 
//                         :
//                         <View style={{justifyContent:"center", alignContent:"center", alignItems:"center"}}>
//                         <Avatar  onPress={this.openGallery} onEditPress={this.openGallery} containerStyle={{backgroundColor:"#fc8b8c",}} showEditButton  rounded size="xlarge" editButton={{name:"camera",type:"font-awesome", size:25, iconStyle:{marginTop:10} ,containerStyle:{backgroundColor:"#fc8b8c", borderRadius:50, height: 45, width: 45, borderColor:'#fff' , borderWidth:2 ,marginRight:60}, color:"#fff", underlayColor:"#fc8b8c", reverseColor:"#fc8b8c", }}  source={this.state.profilePic} />
//                    </View>
                        
//                         }
//                             <Item>
//                         <Icon  active name='user' type="FontAwesome" />
//                         {/* <Label>Name</Label> */}
//                         <Input  defaultValue={this.state.username} onChangeText={(e) => {this.setState({username:e})}} placeholder="Name" />
//                     </Item>

//                     <Item >
//                         <Icon active name='email' type="MaterialCommunityIcons" />
//                         {/* <Label>Email Address</Label> */}
//                         {/* <Input disabled  defaultValue={this.state.email} onChangeText={(e) => {this.setState({email:e})}} placeholder="Email Address" /> */}
//                         <Text style={{paddingVertical:15, fontSize:15}}>{this.state.email}</Text>
//                     </Item>
                    
//                     <Item floatingLabel>
//                         <Icon active name='phone' type="MaterialCommunityIcons" />
//                         {/* <Label>Phone Number</Label> */}
//                         <Input defaultValue={this.state.phoneNo} onChangeText={(e) => {this.setState({phoneNo:e})}} placeholder="Phone Number" />
//                     </Item>
                   
//                     {/* <Item floatingLabel>
//                         <Icon active name='home' type="FontAwesome" />
//                         <Input defaultValue={this.state.address} onChangeText={(e) => {this.setState({address:e})}}  placeholder="Address" />
//                     </Item> */}
                

//                                 {/* <View> 

//                                         <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
//                                             <Button onPress={() => {this.updateProfile()}} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#fc8b8c", width:"90%", borderRadius: 10, opacity:0.7}}> 
//                                             <Text style={{alignSelf:"center",color:"#fff", fontFamily:"Poppins-Regular_0", fontSize:20}}>
//                                             Update
//                                             </Text>   
//                                             </Button>
//                                         </View> 

//                                 </View> */}


//                                 {!this.state.loader ? <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%", marginBottom:10 }}>
//                                             {/* <LinearGradient colors={['#fff', '#fc8b8c', '#fc8b8c']} style={{ width: "90%", borderRadius: 10 }}>
//                                                 <Button onPress={() => {this.updateProfile()}} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }}>
//                                                     <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "Poppins-Regular_0", fontSize: 20 }}>
//                                                     Update
// </Text>
//                                                 </Button>
//                                             </LinearGradient> */}

// <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }} colors={['#F9B1B0', '#FD8788', '#FF7173']} style={{ width: "100%", borderRadius: 10}}>
//                                         <TouchableOpacity onPress={() => {this.updateProfile()}}style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }} style={{ flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "transparent", opacity: 0.7, borderRadius: 10 }}>
//                                             <Text style={{ alignSelf: "center", textAlignVertical: "center", color: "#fff", fontFamily: "Poppins-Regular_0", fontSize: 15, paddingVertical: 15 }}>
//                                             UPDATE
//                     </Text>
//                                         </TouchableOpacity>
//                                     </LinearGradient>
//                                         </View> : <Spinner color="#fc8b8c" />}
//                     </Card>

                       
                         
//               </View>
//          {/* </View> */}

//                 <View>
//                     <Text></Text>
//                     <Text></Text>
//                     <Text></Text>
//                     <Text></Text>
//                     <Text></Text>
//                     <Text></Text>
//                     <Text></Text>
//                 </View>



//                 </ScrollView>

//                 </View>
//                 </ImageBackground>
//         </View>
//         )
//     }
// }




import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button } from 'native-base';
import {Avatar, Header, Icon, Card, Divider} from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
const defaultImage = require('../../../assets/default.png')
const {width, height} = Dimensions.get("window")

export default class ProProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileData : this.props.screenProps.profileData,
            fileName: '',
            fileUri: '',
            userId:'',
            profilePic: false,
            username: '',
            phoneNo : '',
            email: '',
            userId: '',
            address:'',
            loader: false
                
            
        }
    }

    componentWillMount() {
        this.setState({
            profileData: this.props.screenProps.profileData,
            username: this.props.screenProps.profileData.username,
            phoneNo:this.props.screenProps.profileData.phone_number,
            email:this.props.screenProps.profileData.email,
            userId: this.props.screenProps.profileData.user_id,
            address:this.props.screenProps.profileData.address,
            
        })
    }



    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
        drawerLockMode: 'locked-closed'
    })

    
    render() {
        var newData =  this.props.navigation.getParam('profile')
        if(newData !== undefined){
            console.log('navigation',newData.phone_number, this.state.profileData.phone_number)

            if (newData !== this.state.profileData) {
                

                this.setState({
                    profileData:  newData
                })



            }
               
                

        }
        return (
            <View style={{flex:1, height:'100%', width:'100%', marginTop: -80}}>
                <ImageBackground source={require('../../../assets/inner.png')} style={{height:"100%", width:"100%", marginTop: 20}}> 

              
                <Header
                        containerStyle={{marginTop:40, backgroundColor:"#fff"}}
                        placement="left"
                        leftComponent={<Icon onPress={() => {this.props.navigation.navigate('UserHome')}} name="arrow-back" color="#000" />}
                        centerComponent={<Text style={{alignSelf:"center", fontSize:20, fontFamily:"Poppins-Regular_0"}}>PROFILE</Text>}
                        rightComponent={<TouchableOpacity onPress={() => {this.props.navigation.navigate("EditUserProfile")}}><Image source={require('../../../assets/edit.png')} style={{height:20, width:20}} /> 
                        </TouchableOpacity> }
                        />

                <View style={{flex: 1 ,height:'100%', width:'100%',justifyContent:"center"}}>

                <ScrollView style={{height: height}}>
                   
                   <View style={{flex: 1,justifyContent:"center", alignContent:"center", alignItems:"center", marginTop:10}}>

                {/* <View style={{backgroundColor:"#fff",borderRadius:10, width:"90%"}}> */}
                   
                        <View style={{backgroundColor:"#fff", borderRadius:10, width:"90%",padding:0, marginTop:"10%"}}> 
                            {/* <View style={{width:"100%"}}>
                                <Image resizeMode="cover" style={{width:"100%", height:300}} source={{uri:`https://hnhtechsolutions.com/hassan/soplush/profile_pics/${this.props.screenProps.profileData.profile_pic}`}} />
                            </View> */}
                          {this.props.screenProps.profileData.profile_pic !== "" ? 
                          <View style={{ width: "100%", marginLeft: 0, marginRight: 0, borderRadius: 10 }}>
                                            <Image source={{uri:`https://hnhtechsolutions.com/hassan/soplush/profile_pics/${this.props.screenProps.profileData.profile_pic}`}} style={{ height: 200, width: "100%", borderTopRightRadius: 10, borderTopLeftRadius: 10 }} />
                                        </View>
                                        
                                    :


                                    <View style={{ width: "100%", marginLeft: 0, marginRight: 0, borderRadius: 10 }}>
                                    <Image source={defaultImage} style={{ height: 200, width: "100%", borderTopRightRadius: 10, borderTopLeftRadius: 10 }}/>
                                </View>
                                    
                                    }


                                <View style={{display:"flex", flexDirection:"column", marginTop: 15, marginLeft: 15,}}> 
                                    <Text style={{width:"50%", fontFamily:"Poppins-Regular_0", fontSize:17, color: "#bdbdbd"}}>Name</Text>
                                    <Text style={{ fontFamily:"Poppins-Regular_0", fontSize:15}}>{this.state.profileData.username}</Text>
                                    <Divider style={{ backgroundColor: '#bdbdbd', width:"95%" }} />
                                </View>

                                <View style={{display:"flex", flexDirection:"column", marginTop: 15, marginLeft: 15}}> 
                                    <Text style={{width:"50%", fontFamily:"Poppins-Regular_0", fontSize:17, color: "#bdbdbd"}}>Email address</Text>
                                    <Text style={{ fontFamily:"Poppins-Regular_0", fontSize:15}}>{this.state.profileData.email}</Text>
                                    <Divider style={{ backgroundColor: '#bdbdbd', width:"95%" }} />
                                </View>

                                <View style={{display:"flex", flexDirection:"column", marginTop: 15, marginLeft: 15}}> 
                                    <Text style={{width:"50%", fontFamily:"Poppins-Regular_0", fontSize:17, color: "#bdbdbd"}}>Mobile Number</Text>
                                    <Text style={{fontFamily:"Poppins-Regular_0", fontSize:15}}>{this.state.profileData.phone_number}</Text>
                                    <Divider style={{ backgroundColor: '#bdbdbd' , width:"95%"}} />
                                </View>

                                 {/* <View style={{display:"flex", flexDirection:"column", marginTop: 15, marginLeft: 15}}> 
                                    <Text style={{width:"50%", fontFamily:"Poppins-Regular_0", fontSize:17, color: "#bdbdbd"}}>Gender</Text>
                                    <Text style={{ fontFamily:"Poppins-Regular_0", fontSize:15}}>{this.state.profileData.gender}</Text>
                                    <Divider style={{ backgroundColor: '#bdbdbd' }} />
                                </View>

                                <View style={{display:"flex", flexDirection:"column", marginTop: 15, marginLeft: 15}}> 
                                    <Text style={{width:"50%", fontFamily:"Poppins-Regular_0", fontSize:17, color: "#bdbdbd"}}>About me</Text>
                                    <Text style={{ fontFamily:"Poppins-Regular_0", fontSize:15}}>{this.state.profileData.address}</Text>
                                    <Divider style={{ backgroundColor: '#bdbdbd' }} />
                                </View> */}

                                <View> 


                                <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%", marginBottom:10 }}>
                                            {/* <LinearGradient colors={['#fff', '#fc8b8c', '#fc8b8c']} style={{ width: "90%", borderRadius: 10 }}>
                                                <Button onPress={() => {this.props.navigation.navigate('Main')}} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }}>
                                                    <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "Poppins-Regular_0", fontSize: 20 }}>
                                                        OK
</Text>
                                                </Button>
                                                
                                            </LinearGradient> */}


<LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }} colors={['#F9B1B0', '#FD8788', '#FF7173']} style={{ width: "90%", borderRadius: 10}}>
                                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('UserHome')}} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }} style={{ flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "transparent", opacity: 0.7, borderRadius: 10 }}>
                                            <Text style={{ alignSelf: "center", textAlignVertical: "center", color: "#fff", fontFamily: "Poppins-Regular_0", fontSize: 17, paddingVertical: 10 , fontWeight:'bold'}}>
                                            OK
                    </Text>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                        </View>

                                    

                                        {/* <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                                            <Button onPress={() => {this.props.navigation.navigate('Main')}} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#fc8b8c", width:"90%", borderRadius: 10, opacity:0.7}}> 
                                            <Text style={{alignSelf:"center",color:"#fff", fontFamily:"Poppins-Regular_0", fontSize:20}}>
                                            Ok
                                            </Text>   
                                            </Button>
                                        </View>  */}

                                </View>
                    </View>




{/* <Card containerStyle={{backgroundColor:"#fff", borderRadius:10, width:"90%",}}> 
                            <View style={{width:"100%"}}>
                                <Image resizeMode="cover" style={{width:"100%", height:300}} source={{uri:`https://cdn.vox-cdn.com/thumbor/XtwGXC-0GhXcDXiM0B0rjGAAxZE=/148x0:1768x1080/1200x800/filters:focal(148x0:1768x1080)/cdn.vox-cdn.com/uploads/chorus_image/image/45905674/3042430-poster-p-1-hello-barbie-talking-toy-toytalk.0.0.jpg`}} />
                            </View>
                                <View style={{display:"flex", flexDirection:"column", marginTop: 15}}> 
                                    <Text style={{width:"30%", fontFamily:"Poppins-Regular_0", fontSize:20, color: "#bdbdbd"}}>Name</Text>
                                    <Text style={{ fontFamily:"Poppins-Regular_0", fontSize:15}}>John Doe</Text>
                                    <Divider style={{ backgroundColor: '#bdbdbd' }} />
                                </View>

                                <View style={{display:"flex", flexDirection:"column", marginTop: 15}}> 
                                    <Text style={{width:"30%", fontFamily:"Poppins-Regular_0", fontSize:20, color: "#bdbdbd"}}>Email</Text>
                                    <Text style={{ fontFamily:"Poppins-Regular_0", fontSize:15}}>John@example.com</Text>
                                    <Divider style={{ backgroundColor: '#bdbdbd' }} />
                                </View>

                                <View style={{display:"flex", flexDirection:"column", marginTop: 15}}> 
                                    <Text style={{width:"30%", fontFamily:"Poppins-Regular_0", fontSize:20, color: "#bdbdbd"}}>Mobile No</Text>
                                    <Text style={{fontFamily:"Poppins-Regular_0", fontSize:15}}>0900-78601</Text>
                                    <Divider style={{ backgroundColor: '#bdbdbd' }} />
                                </View>

                                 <View style={{display:"flex", flexDirection:"column", marginTop: 15}}> 
                                    <Text style={{width:"30%", fontFamily:"Poppins-Regular_0", fontSize:20, color: "#bdbdbd"}}>Gender</Text>
                                    <Text style={{ fontFamily:"Poppins-Regular_0", fontSize:15}}>Female</Text>
                                    <Divider style={{ backgroundColor: '#bdbdbd' }} />
                                </View>

                                <View style={{display:"flex", flexDirection:"column", marginTop: 15}}> 
                                    <Text style={{width:"30%", fontFamily:"Poppins-Regular_0", fontSize:20, color: "#bdbdbd"}}>About</Text>
                                    <Text style={{ fontFamily:"Poppins-Regular_0", fontSize:15}}>Copy the following link into the website you'll use this resource on. If you want to know more, </Text>
                                    <Divider style={{ backgroundColor: '#bdbdbd' }} />
                                </View>

                                <View style={{marginRight:"6%"}}> 

                                        <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                                            <Button onPress={() => {this.props.navigation.navigate('Main')}} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#fc8b8c", width:"90%", borderRadius: 10, opacity:0.7}}> 
                                            <Text style={{alignSelf:"center",color:"#fff", fontFamily:"Poppins-Regular_0", fontSize:20}}>
                                            Ok
                                            </Text>   
                                            </Button>
                                        </View> 

                                </View>
                    </Card> */}

                       
                         
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

