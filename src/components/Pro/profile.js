import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
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
            
        }
    }


    componentWillMount() {
        this.setState({
            profileData: this.props.screenProps.profileData
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
        console.log('navigation.getParam',newData)
        if(newData !== undefined){
            if (newData !== this.state.profileData) {
                this.setState({
                    profileData:  newData
                })
                
            }

        }
        return (
            <View style={{flex:1, height:'100%', width:'100%', marginTop: -80}}>
                <ImageBackground source={require('../../../assets/inner.png')} style={{height:"100%", width:"100%",opacity:0.9, marginTop: 20}}> 

              
                <Header
                        containerStyle={{marginTop:40, backgroundColor:"#fff"}}
                        placement="left"
                        leftComponent={<Icon onPress={() => {this.props.navigation.goBack()}} name="arrow-back" color="#000" />}
                        centerComponent={<Text style={{alignSelf:"center", fontSize:20, fontFamily:"Poppins-Regular_0"}}>PROFILE</Text>}
                        rightComponent={<TouchableOpacity onPress={() => {this.props.navigation.navigate("EditProProfile")}}><Image source={require('../../../assets/edit.png')} style={{height:20, width:20}} /> 
                        </TouchableOpacity> }
                        />

                <View style={{flex: 1 ,height:'100%', width:'100%',justifyContent:"center"}}>

                <ScrollView style={{height: height}}>
                   
                   <View style={{flex: 1,justifyContent:"center", alignContent:"center", alignItems:"center", marginTop:10}}>

                {/* <View style={{backgroundColor:"#fff",borderRadius:10, width:"90%"}}> */}
                   
                        <View style={{backgroundColor:"#fff", borderRadius:10, width:"90%",padding:0}}> 
                            {/* <View style={{width:"100%"}}>
                                <Image resizeMode="cover" style={{width:"100%", height:300}} source={{uri:`https://hnhtechsolutions.com/hassan/soplush/profile_pics/${this.props.screenProps.profileData.profile_pic}`}} />
                            </View> */}
                          {this.props.screenProps.profileData.profile_pic !== "" ? 
                          <View style={{ width: "100%", marginLeft: 0, marginRight: 0, borderRadius: 10 }}>
                                            <Image source={{uri:`https://hnhtechsolutions.com/hassan/soplush/profile_pics/${this.props.screenProps.profileData.profile_pic}`}} style={{ height: 200, width: "100%", borderTopRightRadius: 10, borderTopLeftRadius: 10 }} />
                                        </View>
                                        
                                    :

                                    <View style={{ width: "100%", marginLeft: 0, marginRight: 0, borderRadius: 10 }}>
                                    <Image source={defaultImage} style={{ height: 200, width: "100%", borderTopRightRadius: 10, borderTopLeftRadius: 10 }} />
                                     </View>
                                    
                                    
                                    }


                                <View style={{display:"flex", flexDirection:"column", marginTop: 15, marginLeft: 15}}> 
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
                                    <Divider style={{ backgroundColor: '#bdbdbd', width:"95%" }} />
                                </View>

                                 <View style={{display:"flex", flexDirection:"column", marginTop: 15, marginLeft: 15}}> 
                                    <Text style={{width:"50%", fontFamily:"Poppins-Regular_0", fontSize:17, color: "#bdbdbd"}}>Gender</Text>
                                    <Text style={{ fontFamily:"Poppins-Regular_0", fontSize:15}}>{this.state.profileData.gender}</Text>
                                    <Divider style={{ backgroundColor: '#bdbdbd', width:"95%" }} />
                                </View>

                                <View style={{display:"flex", flexDirection:"column", marginTop: 15, marginLeft: 15}}> 
                                    <Text style={{width:"50%", fontFamily:"Poppins-Regular_0", fontSize:17, color: "#bdbdbd"}}>Expertise</Text>
                                    <Text style={{ fontFamily:"Poppins-Regular_0", fontSize:15}}>{this.state.profileData.expertise}</Text>
                                    <Divider style={{ backgroundColor: '#bdbdbd', width:"95%" }} />
                                </View>

                                <View style={{display:"flex", flexDirection:"column", marginTop: 15, marginLeft: 15}}> 
                                    <Text style={{width:"50%", fontFamily:"Poppins-Regular_0", fontSize:17, color: "#bdbdbd"}}>About me</Text>
                                    <Text style={{ fontFamily:"Poppins-Regular_0", fontSize:15}}>{this.state.profileData.about}</Text>
                                    {/* <Divider style={{ backgroundColor: '#bdbdbd' }} /> */}
                                </View>

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
                                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Main')}} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }} style={{ flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "transparent", opacity: 0.7, borderRadius: 10 }}>
                                            <Text style={{ alignSelf: "center", textAlignVertical: "center", color: "#fff", fontFamily: "Poppins-Regular_0", paddingVertical: 10, fontWeight:'bold' }}>
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
                                    <Divider style={{ backgroundColor: 'light#bdbdbd' }} />
                                </View>

                                <View style={{display:"flex", flexDirection:"column", marginTop: 15}}> 
                                    <Text style={{width:"30%", fontFamily:"Poppins-Regular_0", fontSize:20, color: "#bdbdbd"}}>Email</Text>
                                    <Text style={{ fontFamily:"Poppins-Regular_0", fontSize:15}}>John@example.com</Text>
                                    <Divider style={{ backgroundColor: 'light#bdbdbd' }} />
                                </View>

                                <View style={{display:"flex", flexDirection:"column", marginTop: 15}}> 
                                    <Text style={{width:"30%", fontFamily:"Poppins-Regular_0", fontSize:20, color: "#bdbdbd"}}>Mobile No</Text>
                                    <Text style={{fontFamily:"Poppins-Regular_0", fontSize:15}}>0900-78601</Text>
                                    <Divider style={{ backgroundColor: 'light#bdbdbd' }} />
                                </View>

                                 <View style={{display:"flex", flexDirection:"column", marginTop: 15}}> 
                                    <Text style={{width:"30%", fontFamily:"Poppins-Regular_0", fontSize:20, color: "#bdbdbd"}}>Gender</Text>
                                    <Text style={{ fontFamily:"Poppins-Regular_0", fontSize:15}}>Female</Text>
                                    <Divider style={{ backgroundColor: 'light#bdbdbd' }} />
                                </View>

                                <View style={{display:"flex", flexDirection:"column", marginTop: 15}}> 
                                    <Text style={{width:"30%", fontFamily:"Poppins-Regular_0", fontSize:20, color: "#bdbdbd"}}>About</Text>
                                    <Text style={{ fontFamily:"Poppins-Regular_0", fontSize:15}}>Copy the following link into the website you'll use this resource on. If you want to know more, </Text>
                                    <Divider style={{ backgroundColor: 'light#bdbdbd' }} />
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
