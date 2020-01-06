import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, Alert, RefreshControl, TextInput } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button } from 'native-base';
import {Avatar, Header, Icon, Card, Divider} from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import moment from 'moment'

const {width, height} = Dimensions.get("window")

// this.focusListner = this.props.navigation.addListener("willFocus",() => {
//     // Update your data
//   });

export default class ServingHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // services : [
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
            //     {
            //         dateTime:"Modnay - 14/08/2019",
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900",
            //         cost: "$70"
            //     },
                
               
            // ]
            services: false,
            refreshing: false,
            data: [],
            focusOn: false,
            offFocus: true,
            text:''
        }
    }

    markAsCompelet = (value,detail,index) => {
        const {services, data} = this.state
        const formData = new FormData()
        formData.append('cart_id', detail.cart_id)
        formData.append('service_id', detail.service_id)
        formData.append('status', value)
        fetch("https://hnhtechsolutions.com/hassan/soplush/cart/cart.php?action=change_cart_service_status", {
                                                method: 'POST',
                                                // dataType: "json",
                                                headers: {
                                                    'Accept': 'application/json',
                                                    'Content-Type': 'multipart/form-data'
                                                    // 'Content-Type': 'application/json'

                                                },
                                                body: formData
                                            }).then(res => res.json())
                                                .then(resp => {
                                                    //   console.log(JSON.stringify(resp))
                                                    var successData = resp

                                                    if (successData.status === true) {
                                                        // console.log("successData.data[0].role_id === 3", successData.data[0].role_id === 3)
                                                        console.log(" successData.data CHANGE STATUS", successData.data)
                                                        // this.state.services.splice(index, 1)
                                                        this.state.data.splice(index, 1)

                                                        this.setState({ services, data})
                                                        this.props.navigation.navigate('BookingHistory')

                                                    } else {
                                                        console.log("Else", successData)
                                                        Alert.alert("Alert",successData.message)
                                                    }
                                                })
                                                .catch(err => console.log("err err SEARCH", err));
    }


    

    componentDidMount() {
        console.log('componentDidMount')
        fetch(`https://hnhtechsolutions.com/hassan/soplush/beautician/beautician_booking.php?action=get_beautician_bookings&beautician_id=${this.props.screenProps.profileData.user_id}&status=accepted`, {

                }).then(res => res.json())
                    .then(resp => {
                        console.log(JSON.stringify(resp))
                        var successData = resp

                        if (successData.status === true) {
                            console.log("successData.data[0].role_id === 3", successData.data)
                            //   console.log("Category PRO", successData)
                   this.setState({
                       services:successData.data,
                       data:successData.data,
                   })
                        

                        } else {
                            // Alert.alert("Alert",successData.message)
                            console.log("successData.message", successData.message)
                        }
                    })
                    .catch(err => console.log("Category err err", err));
    }



    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
        drawerLockMode: 'locked-closed'
    })

    onRefresh = () => {
        this.setState({refreshing:true})
        fetch(`https://hnhtechsolutions.com/hassan/soplush/beautician/beautician_booking.php?action=get_beautician_bookings&beautician_id=${this.props.screenProps.profileData.user_id}&status=accepted`, {

                }).then(res => res.json())
                    .then(resp => {
                        console.log(JSON.stringify(resp))
                        var successData = resp

                        if (successData.status === true) {
                            console.log("successData.data[0].role_id === 3", successData.data)
                            //   console.log("Category PRO", successData)
                   this.setState({
                       services:successData.data,
                       data:successData.data,
                       refreshing: false
                   })
                        

                        } else {
                            Alert.alert("Alert",'No Service History ')
                            this.setState({
                        refreshing: false
                    })
                        }
                    })
                    .catch(err => console.log("Category err err", err));

    }


    searchFilterFunction = text => {    
        const {services} = this.state
        if(services) {
        if (text !== "") {
            const newData = services.filter(item => {      
                const itemData = `${item.service_name.toUpperCase()}`;
                
                 const textData = text.toUpperCase();
                  
                 return itemData.indexOf(textData) > -1;    
              });
              
              this.setState({ data: newData });  
        }else {
            this.setState({data: services })
        }
    }

        this.setState({text: text})
        
      };

    
    render() {
        console.log('length', this.state.data.length)
        return (
            <View style={{flex:1, height:'100%', width:'100%', marginTop: -80}}>
                <ImageBackground source={require('../../../assets/inner.png')} style={{height:"100%", width:"100%",}}> 

                <Header
                        containerStyle={{marginTop:60, backgroundColor:"#fff"}}
                        placement="left"
                        leftComponent={<Icon onPress={() => {this.props.navigation.navigate('Main')}} name="arrow-back" color="#000" />}
                        centerComponent={
                            <View style={{ alignItems:"center", alignSelf:"center"}}>
                      {!this.state.focusOn  ? <Text style={{ alignSelf: "center", fontSize: 20, fontFamily: "Poppins-Regular_0" }}>SERVICE HISTORY</Text> 
                      :
    
                      <View style={{
                        backgroundColor: "transparent",
                        borderColor: 'gray',
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 10,
                        height: 50,
                        marginTop: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignSelf: 'center',
                        width: '93%',
                        paddingHorizontal: 16,
                        paddingVertical: 10,
                        marginBottom: 10,
    
                    }}>
                        <TextInput style={{
                            height: 45,
                            flex: 1,
                        }}
                            value={this.state.text}
                            placeholder="Search"
                            onChangeText={(text) =>  this.searchFilterFunction(text)}
                            onBlur = {() => {this.setState({focusOn: false})} }
                            autoFocus = {true}
                            ref={x => this.input = x}
                        />
                        <Icon style={{
                            color: 'gray',
                            justifyContent: 'flex-end'
                        }} type="EvilIcons" name="search" size={24} />
                    </View>
    
                    }
                        </View>
                    }
                    rightComponent={
                        <View style={{flexDirection:"row"}}>
                       {/* {!this.state.focusOn && <TouchableOpacity style={{right: 20}} onPress={() => {this.setState({focusOn: true})
                        }}>
                            <Icon style={{
                            color: 'gray',
                            justifyContent: 'flex-end'
                        }} type="EvilIcons" name="search" size={24} />
                        </TouchableOpacity>} */}
                        
                        {/* <TouchableOpacity onPress={() => { this.props.navigation.navigate("Notification") }}>
                            <Image source={require('../../../assets/notification.png')} style={{ height:26, width:20 }} />
                        </TouchableOpacity> */}
                        </View>}
                        />



                <View style={{flex: 1 ,height:'100%', width:'100%',justifyContent:"center"}}>

                <ScrollView refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />} style={{height: height}}>

                {/* <View style={{backgroundColor:"#fff", width:"80%",justifyContent:"center", alignContent:"center", alignSelf:"center",borderRadius:10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 157, 0.4)', marginTop: '10%', marginBottom:'5%'}}> */}
                   
                   <View style={{flex: 1 ,justifyContent:"center", alignContent:"center", alignItems:"center", marginTop:20}}>
{this.state.data.length > 0 ?
                <View style={{backgroundColor:"#fff",borderRadius:10, width:"90%"}}>
                    {this.state.data.map((value, index) => {
                        console.log('value',value)
                        var date = moment(value.service_date).format('DD/MM/YYYY')
                        var formatDate = `${moment(value.service_date).format('dddd')} - ${ moment(value.service_date).format('DD/MM/YYYY')}`
                        return(
                            <View key={index} style={{width:'90%', padding: 10, alignSelf:'center'}}>

                           {/* <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{marginLeft:"20%", fontFamily:"Poppins-Regular_0", color:"#fc8b8c", fontSize:25}}>{value.dateTime}</Text>
                                </View> */}

<View style={{display:"flex", flexDirection:"row", paddingVertical: 5}}> 
                                    <Text style={{fontFamily:"Poppins-Regular_0", color:"#ff8385", fontSize:18}}>{formatDate}</Text>
                                </View>




                                <View style={{display:"flex", flexDirection:"row", justifyContent:'space-between', width:'100%'}}> 
                                    <Text style={{width:"50%", fontFamily:"Poppins-Regular_0", fontSize:17}}>Service Name</Text>
                                    <Text style={{ fontFamily:"Poppins-Regular_0", fontSize:15, textAlign:"right", width:'50%'}}>{value.service_name}</Text>
                                </View>


                               

                                

                                <View style={{display:"flex", flexDirection:"row", justifyContent:'space-between'}}> 
                                    <Text style={{width:"50%",fontFamily:"Poppins-Regular_0", fontSize:17}}>Time</Text>
                                    <Text style={{marginLeft:"20%", fontFamily:"Poppins-Regular_0", fontSize:15, textAlign:"right", justifyContent:"flex-end"}}>{value.time_slot}</Text>
                                </View>

                                 <View style={{display:"flex", flexDirection:"row", justifyContent:'space-between'}}> 
                                    <Text style={{width:"66%", fontFamily:"Poppins-Regular_0", fontSize:17}}>Date</Text>
                                    <Text style={{marginLeft:"3%", fontFamily:"Poppins-Regular_0", fontSize:15}}>{date}</Text>
                                </View>

                                <View style={{display:"flex", flexDirection:"row", justifyContent:'space-between'}}> 
                                    <Text style={{width:"50%", fontFamily:"Poppins-Regular_0", fontSize:18}}>User Name</Text>
                                    <Text style={{marginLeft:"20%", fontFamily:"Poppins-Regular_0", fontSize:15, textAlign:"right"}}>{value.username}</Text>
                                    {/* <TouchableOpacity onPress={() => {this.props.navigation.navigate('BookingDetail')}}>
                                    <Text  style={{marginLeft:"30%", color:"#fc8b8c", borderBottomColor:"#fc8b8c", borderBottomWidth:1, fontFamily:"Poppins-Regular_0", width:50}}>VIEW DETAILS</Text>
                                    </TouchableOpacity> */}
                                </View>

                              {value.s_checked  == 1 ? 
                                 <View style={{display:"flex", flexDirection:"row", justifyContent:'space-between'}}> 
                                    <Text style={{width:"50%", fontFamily:"Poppins-Regular_0", fontSize:18}}>Cost</Text>
                                    <Text style={{marginLeft:"20%",  fontFamily:"Poppins-Regular_0", fontSize:15, textAlign:'left'}}>${value.service_cost}</Text>
                                </View>  
                                
                            :
                            <View style={{display:"flex", flexDirection:"row", justifyContent:'space-between'}}> 
                            <Text style={{width:"50%", fontFamily:"Poppins-Regular_0", fontSize:18}}>Cost</Text>
                            <Text style={{marginLeft:"20%",  fontFamily:"Poppins-Regular_0", fontSize:15}}>${value.so_plush_cost}</Text>
                            </View>  
                            
                            }

                                <View style={{display:"flex", flexDirection:"row", marginRight:"15%"}}> 

                                        {/* <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                                            <Button onPress={() => {this.markAsCompelet('completed', value, index)}} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#fc8b8c", width:"100%", borderRadius: 10, opacity:0.7}}> 
                                            <Text style={{alignSelf:"center",color:"#fff", fontFamily:"Poppins-Regular_0", fontSize:20}}>
                                            Mark As Compelete
                                            </Text>   
                                            </Button>
                                        </View> */}

                                         <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%",width: "90%"}}>
                                            {/* <LinearGradient colors={['#fff', '#fc8b8c', '#fc8b8c']} style={{ width: "100%", borderRadius: 10 }}>
                                                <Button onPress={() => {this.markAsCompelet('completed', value, index)}} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 5 }}>
                                                    <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "Poppins-Regular_0", fontSize: 20 }}>
                                                    Mark As Compelete
</Text>
                                                </Button>
                                            </LinearGradient> */}

<LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }} colors={['#F9B1B0', '#FD8788', '#FF7173']} style={{ width: "100%", borderRadius: 10}}>
                                        <TouchableOpacity onPress={() => {this.markAsCompelet('completed', value, index)}}  style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }} style={{ flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "transparent", opacity: 0.7, borderRadius: 10 }}>
                                            <Text style={{ alignSelf: "center", textAlignVertical: "center", color: "#fff", fontFamily: "Poppins-Regular_0",  paddingVertical: 15, fontWeight:'bold' }}>
                                            MARK COMPELETE
                    </Text>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                        </View> 

                                        {/* <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                                            <Button style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#fc8b8c", borderRadius: 10, opacity:0.7, width:"60%"}}> 
                                            <Icon name="camera" type="font-awesome" color="#fff" />
                                            </Button>
                                        </View> */}


                                         <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%",width: "30%", marginLeft: 5}}>

                                            {/* <LinearGradient colors={['#fff', '#fc8b8c', '#fc8b8c']} style={{ width: "100%", borderRadius: 10 }}>
                                            <Button style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 5 }}>
                                                <Icon name="camera" type="font-awesome" color="#fff" />
                                                </Button>
                                            </LinearGradient> */}

<LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }} colors={['#F9B1B0', '#FD8788', '#FF7173']} style={{ width: "90%", borderRadius: 10}}>
                                        <TouchableOpacity onPress={() => Alert.alert("Alert", "Will be implmented")}  style={{ flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "transparent", opacity: 0.7, borderRadius: 10, paddingVertical: 12 }}>
                                        <Icon  name="camera" type="font-awesome" color="#fff" />
                                        </TouchableOpacity>
                                    </LinearGradient>

                                        </View> 
                                </View>

                            <Divider style={{backgroundColor:"#bdbdbd", top: 15}} />
                    </View>

                        )
                    })}
                         
              </View>  : 

                 
            <View style={{alignContent:"center",alignItems:'center', alignSelf:'center', justifyContent:'center', height:100}}>
            <Text>
            No Service History 
            </Text>
        </View>
            
            }
         </View>
                                        
                  {/* <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
                    <Button onPress={() => {this.setState({renderEMail: false, renderCode: false, renderPassword:false}),
                this.props.navigation.navigate(from)}} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#fc8b8c", width:"90%", borderRadius: 10, opacity:0.7}}> 
                     <Text style={{alignSelf:"center",color:"#fff", fontFamily:"Poppins-Regular_0", fontSize:20}}>
                       Submit
                    </Text>   
                     </Button>
                </View>  */}

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
