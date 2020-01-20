import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, Alert, AsyncStorage, BackHandler } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button, Item, Input,  Label, Form, Icon, Spinner } from 'native-base';
import {Avatar, Header, Card, Divider} from 'react-native-elements'
import ImagePicker from 'react-native-image-picker'
import LinearGradient from 'react-native-linear-gradient'
import camicon from '../../../assets/photo-camera.png'
import user from '../../../assets/user.png'
import home from '../../../assets/home.png'
import phone from '../../../assets/phone-call.png'
import envelop from '../../../assets/envelope1.png'
import lock from '../../../assets/lock.png'
import cake from '../../../assets/cake.png'
import museum from '../../../assets/museum.png'
import atmcard from '../../../assets/atm-card.png'
const defaultImage = require('../../../assets/default.png')

const {width, height} = Dimensions.get("window")
const options = {
    title: 'Select Avatar',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
export default class EditUserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileData : this.props.screenProps.profileData,
            username:'',
            address:'',
            phoneNo:'',
            email:'',
            gender:'',
            expertise:'',
            about:'',
            bankName:'',
            accountNumber: '',
            profilePic: '',
            fileName: '',
            fileUri: '',
            userId:'',
            profilePic: false,
            loader: false,

          }
    }


    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }


    handleBackButton = () => {
        console.log('this.props.isFocused ', this.props.isFocused)
        this.setState({
            profileData: this.props.screenProps.profileData,
            username: this.props.screenProps.profileData.username,
            address:this.props.screenProps.profileData.address,
            phoneNo:this.props.screenProps.profileData.phone_number,
            email:this.props.screenProps.profileData.email,
            userId: this.props.screenProps.profileData.user_id,
            profilePic: false,
        })
    };


    componentWillMount() {
        this.setState({
            profileData: this.props.screenProps.profileData,
            username: this.props.screenProps.profileData.username,
            address:this.props.screenProps.profileData.address,
            phoneNo:this.props.screenProps.profileData.phone_number,
            email:this.props.screenProps.profileData.email,
            userId: this.props.screenProps.profileData.user_id
        })
    }

    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
        drawerLockMode: 'locked-closed'
    })


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
              console.log( "uri: response.uri", source, response)
          
              this.setState({
                profilePic: source,
                fileName: response.fileName,
                fileUri: response.uri
              });
            }
          });
    } 


    updateProfile = () => {
        this.setState({loader: true})
        const {profileData, username, phoneNo, address,userId,fileName, fileUri, gender,expertise, about,bankName,accountNumber} = this.state
        const formData = new FormData()
        const khalid = new FormData()
        
        if  (fileUri != "") {
            var file = {
                uri: fileUri,
                name: fileName,
                type: 'image/png'
            }
        formData.append('file_upload',file)
            // khalid.append('image',file)
            // khalid.append('upload','upload')
        }
        
        formData.append('name',username)
        formData.append('phone_number',phoneNo)
        formData.append('address',address)
        formData.append('user_id',userId)

        // console.log("profileData", khalid)

        // https://mobileappstore.co.uk/khalid/rest_api.php


        // fetch("https://mobileappstore.co.uk/khalid/rest_api.php", {
        //     method: 'POST',
        //     // dataType: "json",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'multipart/form-data'
        //     },
        //     body: khalid
        // }).then(res => res.json())
        //     .then(resp => {
        //         console.log("KHALID KHALID", resp)
        //         // var successData = resp

        //     })
        //     .catch(err => {
        //         console.log("err UPDATEPROFILE KhALID BHAI", err)});

        console.log('USER EDDIT formDataformData', formData)

        fetch("https://hnhtechsolutions.com/hassan/soplush/user/user.php?action=update_profile", {
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

                if (successData.status) {

                    if (successData.status === true) {
                        console.log("navigation successData", successData.data)
                        this.setState({loader: false})

                            this.props.screenProps.fetchProfileData(successData.data)
                            Alert.alert("Alert","Profile Updated Successfully")
                            this.props.navigation.navigate('UserProfile', {
                                profile: successData.data
                            })
                            try {
                                await AsyncStorage.setItem('User',JSON.stringify(successData.data));
                                   console.log('enableButton =>')
                             } catch (error) {
                               console.log('error =>' ,error)
                       
                             }

                            this.setState({profilePic: false, fileUri:"", fileName:""})
                        // this.props.navigation.navigate('UserHome')

                      
                    } else {
                        this.setState({loader: false})
                        Alert.alert("Alert","Something went wrong")
                    }
                } else {
                    this.setState({loader: false})
                    Alert.alert("Alert",successData.message)
                }
                console.log("SUCCESS USER", successData, successData.status, successData.data)
            })
            .catch(err => {
                this.setState({loader: false})
                console.log("err UPDATEPROFILE", err)});

    }

    
    render() {
        return (
            <View style={{flex:1, height:'100%', width:'100%', marginTop: -80}}>
                <ImageBackground source={require('../../../assets/inner.png')} style={{height:"100%", width:"100%", marginTop: 20}}> 

              
                <Header
                        containerStyle={{marginTop:40, backgroundColor:"#fff"}}
                        placement="left"
                        leftComponent={<Icon onPress={() => {
                            this.setState({
                                profileData: this.props.screenProps.profileData,
                                username: this.props.screenProps.profileData.username,
                                address:this.props.screenProps.profileData.address,
                                phoneNo:this.props.screenProps.profileData.phone_number,
                                email:this.props.screenProps.profileData.email,
                                userId: this.props.screenProps.profileData.user_id,
                                profilePic: false,
                            })
                            this.props.navigation.navigate('UserProfile')
                        }} name="arrow-back" color="#000" />}
                        centerComponent={<Text style={{alignSelf:'center',fontSize:20, fontFamily:"Poppins-Regular_0"}}>EDIT PROFILE</Text>}
                        // rightComponent={<TouchableOpacity onPress={() => {this.props.navigation.navigate("EditProfile")}}><Image source={require('../../../assets/edit.png')} style={{height:30, width:30}} /> 
                        // </TouchableOpacity> }
                        />

                <View style={{flex: 1 ,height:'100%', width:'100%',justifyContent:"center"}}>

                <ScrollView style={{height: height}}>
                   
                   <View style={{flex: 1 ,justifyContent:"center", alignContent:"center", alignItems:"center", marginTop:20}}>

                {/* <View style={{backgroundColor:"#fff",borderRadius:10, width:"90%"}}> */}
                   
                        <View style={{backgroundColor:"#fff", borderRadius:10, width:"90%", padding: 10}}> 

                       {!this.state.profilePic ?
                       <View> 
                     {this.props.screenProps.profileData.profile_pic !== "" ? <View style={{justifyContent:"center", alignContent:"center", alignItems:"center", paddingVertical:15, marginBottom:10}}>
                             <Avatar  onPress={this.openGallery} onEditPress={this.openGallery} containerStyle={{backgroundColor:"#fc8b8c",}} showEditButton  rounded size="xlarge" editButton={{name:"camera",type:"font-awesome", size:25, iconStyle:{marginTop:10} ,containerStyle:{backgroundColor:"#fc8b8c", borderRadius:50, height: 45, width: 45, borderColor:'#fff' , borderWidth:2 ,marginRight:60}, color:"#fff", underlayColor:"#fc8b8c", reverseColor:"#fc8b8c", }}  source={{uri:`https://hnhtechsolutions.com/hassan/soplush/profile_pics/${this.props.screenProps.profileData.profile_pic}`}} />
                        </View>  :
                        
                        <View style={{justifyContent:"center", alignContent:"center", alignItems:"center", paddingVertical:15, marginBottom:10}}>
                             <Avatar  onPress={this.openGallery} onEditPress={this.openGallery} containerStyle={{backgroundColor:"#fc8b8c",}} showEditButton  rounded size="xlarge" editButton={{name:"camera",type:"font-awesome", size:25, iconStyle:{marginTop:10} ,containerStyle:{backgroundColor:"#fc8b8c", borderRadius:50, height: 45, width: 45, borderColor:'#fff' , borderWidth:2 ,marginRight:60}, color:"#fff", underlayColor:"#fc8b8c", reverseColor:"#fc8b8c", }}  source={defaultImage} />
                        </View> 
                        }
                        </View>
                        :
                        <View style={{justifyContent:"center", alignContent:"center", alignItems:"center"}}>
                        <Avatar  onPress={this.openGallery} onEditPress={this.openGallery} containerStyle={{backgroundColor:"#fc8b8c",}} showEditButton  rounded size="xlarge" editButton={{name:"camera",type:"font-awesome", size:25, iconStyle:{marginTop:10, color:'#fff', borderColor:'#fff'} ,containerStyle:{backgroundColor:"#fc8b8c", borderRadius:50, height: 45, width: 45, borderColor:'#fff' , borderWidth:2 ,marginRight:60}, color:"#fff", underlayColor:"#fc8b8c", reverseColor:"#fc8b8c", }}  source={this.state.profilePic} />
                   </View>
                        
                        }
                            <Item>
                            <View style={{ width: 30}}>
                            <Image source={user} style={{ height: 20, width: 20 }} />
                            </View>
                        {/* <Label>Name</Label> */}
                        <Input style={{padding:5, fontSize:15}} defaultValue={this.state.username} onChangeText={(e) => {this.setState({username:e})}} placeholder="Name" />
                    </Item>
                    {/* <Item floatingLabel>
                        <Icon active name='home' type="FontAwesome" />
                        <Input defaultValue={this.state.address} onChangeText={(e) => {this.setState({address:e})}}  placeholder="Address" />
                    </Item> */}
                    
                    <Item>
                    <View style={{ width: 30}}>
                    <Image source={envelop}style={{ height: 20, width: 20 }} />
                    </View>
                        {/* <Label>Email Address</Label> */}
                        <Input style={{fontSize:15}} defaultValue={this.state.email} onChangeText={(e) => {this.setState({email:e})}} placeholder="Email Address" />
                    </Item>
                    <Item >
                    <View style={{ width: 30}}>
                    <Image source={phone} style={{ height: 20, width: 20 }}/>
                    </View>
                        {/* <Label>Phone Number</Label> */}
                        <Input keyboardType="phone-pad" style={{fontSize:15}} defaultValue={this.state.phoneNo} onChangeText={(e) => {this.setState({phoneNo:e})}} placeholder="Phone Number" />
                    </Item>
                    {/* <Item >
                    <Image source={user} style={{ height: 22, width: 22 }} />
                        <Input style={{fontSize:15}} defaultValue={this.state.gender}  onChangeText={(e) => {this.setState({gender:e})}} placeholder="Gender" />
                    </Item>
                    <Item >
                    <Image source={atmcard} style={{ height: 22, width: 22 }} />
                        <Input style={{fontSize:15}} defaultValue={this.state.expertise}  onChangeText={(e) => {this.setState({expertise:e})}} placeholder="Expertize" />
                    </Item>
                    <Item >
                    <Image source={user} style={{ height: 22, width: 22 }} />
                        <Input style={{fontSize:15}} defaultValue={this.state.about}  onChangeText={(e) => {this.setState({about:e})}} placeholder="About me" />
                    </Item> */}

                    <View style={{ display: "flex", flexDirection: "row", marginBottom: "3%",marginVertical:'3%', padding:5 }}>
                        
                        <View style={{ backgroundColor:'lightgray', height: 80, width: 80, borderRadius:5, justifyContent:'center', alignItems:"center"}}>
                                    <Avatar 
                                    // onPress={this.openGallery} 
                                    containerStyle={{  height: 40, width: 40, marginTop: "1%", borderRadius: 10 }} source={camicon} />
                          </View>
                                   
                            <TouchableOpacity onPress={this.openGallery} style={{borderRadius:5, marginHorizontal: 20}} 
                            >

                           <View style={{flexDirection:'column'}}>   
                             <ImageBackground source={''}  style={{height:80, width:80,borderRadius:5,marginLeft:3, display:"flex", alignContent:"center", backgroundColor:"lightgray", flexDirection:'column'}}> 
                              <Text style={{fontSize:50, textAlign:'center', justifyContent:'center', color:'#fff'}}>+</Text>

                     </ImageBackground>
                     <Text style={{textAlign:'center', justifyContent:'center'}}>Add more</Text>
                     </View>  

                     </TouchableOpacity> 
                                </View>


                               {!this.state.loader ? <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%", marginBottom:10 }}>
                                            {/* <LinearGradient colors={['#fff', '#fc8b8c', '#fc8b8c']} style={{ width: "90%", borderRadius: 10 }}>
                                                <Button onPress={() => {this.updateProfile()}} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }}>
                                                    <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "Poppins-Regular_0", fontSize: 20 }}>
                                                    Ok
</Text>
                                                </Button>
                                            </LinearGradient> */}
                                              <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }} colors={['#F9B1B0', '#FD8788', '#FF7173']} style={{ width: "90%", borderRadius: 10}}>
                                        <TouchableOpacity onPress={() => {this.updateProfile()}} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }} style={{ flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "transparent", opacity: 0.7, borderRadius: 10 }}>
                                            <Text style={{ alignSelf: "center", textAlignVertical: "center", color: "#fff", fontFamily: "Poppins-Regular_0", fontSize: 17, paddingVertical: 15 , fontWeight:'bold'}}>
                                            OK
                    </Text>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                        </View> :   <Spinner color="#fc8b8c" />   }      


                                
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
