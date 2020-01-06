// import React, { Component } from 'react'
// import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
// // import {  } from 'react-native-gesture-handler';
// import { Container, Content, List, ListItem, Left, Right, Button } from 'native-base';
// import {Avatar, Header, Icon, Card} from 'react-native-elements'


// const {width, height} = Dimensions.get("window")

// export default class BookingHistory extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             services : [
//                 {
//                     dateTime:"Modnay - 14/08/2019",
//                     name: "So plush",
//                     service: "Hair Cutting",
//                     time: "02:00",
//                     date: "14-08-1900",
//                     cost: "$70"
//                 },
//                 {
//                     dateTime:"Modnay - 14/08/2019",
//                     name: "So plush",
//                     service: "Hair Cutting",
//                     time: "02:00",
//                     date: "14-08-1900",
//                     cost: "$70"
//                 },
//                 {
//                     dateTime:"Modnay - 14/08/2019",
//                     name: "So plush",
//                     service: "Hair Cutting",
//                     time: "02:00",
//                     date: "14-08-1900",
//                     cost: "$70"
//                 },
//                 {
//                     dateTime:"Modnay - 14/08/2019",
//                     name: "So plush",
//                     service: "Hair Cutting",
//                     time: "02:00",
//                     date: "14-08-1900",
//                     cost: "$70"
//                 },
//                 {
//                     dateTime:"Modnay - 14/08/2019",
//                     name: "So plush",
//                     service: "Hair Cutting",
//                     time: "02:00",
//                     date: "14-08-1900",
//                     cost: "$70"
//                 },
//                 {
//                     dateTime:"Modnay - 14/08/2019",
//                     name: "So plush",
//                     service: "Hair Cutting",
//                     time: "02:00",
//                     date: "14-08-1900",
//                     cost: "$70"
//                 },
//                 {
//                     dateTime:"Modnay - 14/08/2019",
//                     name: "So plush",
//                     service: "Hair Cutting",
//                     time: "02:00",
//                     date: "14-08-1900",
//                     cost: "$70"
//                 },
//                 {
//                     dateTime:"Modnay - 14/08/2019",
//                     name: "So plush",
//                     service: "Hair Cutting",
//                     time: "02:00",
//                     date: "14-08-1900",
//                     cost: "$70"
//                 },
//                 {
//                     dateTime:"Modnay - 14/08/2019",
//                     name: "So plush",
//                     service: "Hair Cutting",
//                     time: "02:00",
//                     date: "14-08-1900",
//                     cost: "$70"
//                 },
//                 {
//                     dateTime:"Modnay - 14/08/2019",
//                     name: "So plush",
//                     service: "Hair Cutting",
//                     time: "02:00",
//                     date: "14-08-1900",
//                     cost: "$70"
//                 },
//                 {
//                     dateTime:"Modnay - 14/08/2019",
//                     name: "So plush",
//                     service: "Hair Cutting",
//                     time: "02:00",
//                     date: "14-08-1900",
//                     cost: "$70"
//                 },
//                 {
//                     dateTime:"Modnay - 14/08/2019",
//                     name: "So plush",
//                     service: "Hair Cutting",
//                     time: "02:00",
//                     date: "14-08-1900",
//                     cost: "$70"
//                 },
                
               
//             ]
//         }
//     }



//     static navigationOptions = () => ({
//         headerMode: 'none',
//         headerVisible: false,
//         header: null,
//     })

    
//     render() {
//         return (
//             <View style={{flex:1, height, width, marginTop: -80}}>
//                 <ImageBackground source={require('../../../assets/opacity.jpg')} style={{height:"100%", width:"100%",opacity:0.9}}> 

//                 <Header
//                         containerStyle={{marginTop:60, backgroundColor:"#fff"}}
//                         placement="left"
//                         leftComponent={<Icon onPress={() => {this.props.navigation.navigate('Main')}} name="arrow-back" color="#000" />}
//                         centerComponent={<Text style={{alignSelf:"center", fontSize:30, fontFamily:"Poppins-Regular_0"}}>BOOKING HISTORY</Text>}
//                         // rightComponent={<TouchableOpacity onPress={() => {this.props.navigation.navigate("Notification")}}>
//                         //     <Image source={require('../../../assets/notification.png')} style={{height:20, width:20}} />
//                         // </TouchableOpacity>}
//                         />



//                 <View style={{ height, width, backgroundColor:"rgba(246, 232, 232, 0.7)",justifyContent:"center"}}>

//                 <ScrollView style={{height: height}}>

//                 {/* <View style={{backgroundColor:"#fff", width:"80%",justifyContent:"center", alignContent:"center", alignSelf:"center",borderRadius:10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 157, 0.4)', marginTop: '10%', marginBottom:'5%'}}> */}
                   
//                    <View style={{justifyContent:"center", alignContent:"center", alignItems:"center", marginTop:20}}>

//                 <View style={{backgroundColor:"#fff",borderRadius:10, width:"90%"}}>
//                     {this.state.services.map((value, index) => {
//                         return(
//                         <Card key={index} containerStyle={{backgroundColor:"transparent", borderColor:"#fff", borderWidth:3, borderRadius:10}}> 

//                            <View style={{display:"flex", flexDirection:"row"}}> 
//                                     <Text style={{marginLeft:"3%", fontFamily:"Poppins-Regular_0", color:"#fc8b8c", fontSize:25}}>{value.dateTime}</Text>
//                                 </View>




//                                 <View style={{display:"flex", flexDirection:"row"}}> 
//                                     <Text style={{width:"50%", fontFamily:"Poppins-Regular_0", fontSize:20}}>Service Name</Text>
//                                     <Text style={{marginLeft:"3%", fontFamily:"Poppins-Regular_0", fontSize:20}}>{value.service}</Text>
//                                 </View>


//                                 <View style={{display:"flex", flexDirection:"row"}}> 
//                                     <Text style={{width:"30%", fontFamily:"Poppins-Regular_0", fontSize:20}}>User Name</Text>
//                                     <Text style={{marginLeft:"3%", fontFamily:"Poppins-Regular_0", fontSize:20}}>{value.name}</Text>
//                                 </View>

                                

//                                 <View style={{display:"flex", flexDirection:"row"}}> 
//                                     <Text style={{width:"30%", fontFamily:"Poppins-Regular_0", fontSize:20}}>Time</Text>
//                                     <Text style={{marginLeft:"3%", fontFamily:"Poppins-Regular_0", fontSize:20}}>{value.time}</Text>
//                                 </View>

//                                  <View style={{display:"flex", flexDirection:"row"}}> 
//                                     <Text style={{width:"30%", fontFamily:"Poppins-Regular_0", fontSize:20}}>Date</Text>
//                                     <Text style={{marginLeft:"3%", fontFamily:"Poppins-Regular_0", fontSize:20}}>{value.date}</Text>
//                                 </View>

//                                 <View style={{display:"flex", flexDirection:"row"}}> 
//                                     <Text style={{width:"30%", fontFamily:"Poppins-Regular_0", fontSize:20}}>Cost</Text>
//                                     <Text style={{marginLeft:"3%", fontFamily:"Poppins-Regular_0", fontSize:20}}>{value.cost}</Text>
//                                 </View>

//                     </Card>

//                         )
//                     })}
                         
//               </View>
//          </View>
                                        
//                   {/* <View style={{alignContent:"center", alignItems:"center", marginTop:"5%"}}>
//                     <Button onPress={() => {this.setState({renderEMail: false, renderCode: false, renderPassword:false}),
//                 this.props.navigation.navigate(from)}} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#fc8b8c", width:"90%", borderRadius: 10, opacity:0.7}}> 
//                      <Text style={{alignSelf:"center",color:"#fff", fontFamily:"Poppins-Regular_0", fontSize:20}}>
//                        Submit
//                     </Text>   
//                      </Button>
//                 </View>  */}

//                 {/* </View> */}


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
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, Alert, RefreshControl,TextInput } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button } from 'native-base';
import {Avatar, Header, Icon, Card} from 'react-native-elements'
import moment from 'moment'


const {width, height} = Dimensions.get("window")

export default class BookingHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // services : [
            //     {
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900"
            //     },
            //     {
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900"
            //     },
            //     {
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900"
            //     },
            //     {
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900"
            //     },
            //     {
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900"
            //     },
            //     {
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900"
            //     },
            //     {
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900"
            //     },
            //     {
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900"
            //     },
            //     {
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900"
            //     },
            //     {
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900"
            //     },
            //     {
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900"
            //     },
            //     {
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900"
            //     },
            //     {
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900"
            //     },
            //     {
            //         name: "So plush",
            //         service: "Hair Cutting",
            //         time: "02:00",
            //         date: "14-08-1900"
            //     },
                
                
               
            // ]
            services: [],
            refreshing: false,
            data: [],
            focusOn: false,
            offFocus: true,
            text:'',
            beauticianName: this.props.screenProps.profileData.username
        }
    }




    componentDidMount() {
        fetch(`https://hnhtechsolutions.com/hassan/soplush/beautician/beautician_booking.php?action=get_beautician_bookings&beautician_id=${this.props.screenProps.profileData.user_id}&status=completed`, {

                }).then(res => res.json())
                    .then(resp => {
                        console.log(JSON.stringify(resp))
                        var successData = resp

                        if (successData.status === true) {
                            console.log("successData.data[0].role_id === 3", successData.data)
                            //   console.log("Category PRO", successData)
                   this.setState({
                       services:successData.data,
                       data:successData.data

                   })
                        

                        } else {
                            // Alert.alert(successData.message)
                            console.log("successData.message", successData.message)
                        }
                    })
                    .catch(err => console.log("Category err err", err));
    }


//    static navigationOptions = () => ({
//         // headerBackTitle: null,
//         title:"SERVICES LIST",
//         headerTitleStyle: {
//             fontFamily:"Poppins-Regular_0",
//             fontSize:30
//         }
//         // headerStyle: {
//         //     alignContent:"center",
//         //     justifyContent:"center",
//         //     alignItems:"center",
//         //     // alignSelf:"cneter"
//         // },
//     })

    // static navigationOptions = ({
    
    //     navigation, screenProps }) => ({
    //     drawerLabel: "SERVICES LIST",
    //     title:"SERVICES LIST",
    //     headerTintColor: 'white',
    //     headerTitleStyle: {
    //         fontFamily:"Poppins-Regular_0",
    //         fontSize:30
    //     },
    //     // title: "Service List",
    //     // headerTitleStyle: { 
    //     //     textAlign:"center", 
    //     //     flex:1 
    //     // },
        
    //     headerLeft: (
    //         console.log("navigation",navigation),
    //       <View style={{ paddingHorizontal: 10
    //        }}>
    //         <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
    //           <Icon name="menu" size={30} color="white" />
    //         </TouchableOpacity>
    //       </View>
    //     ),

    //   });

    onRefresh = () => {
        this.setState({refreshing: true})
        fetch(`https://hnhtechsolutions.com/hassan/soplush/beautician/beautician_booking.php?action=get_beautician_bookings&beautician_id=${this.props.screenProps.profileData.user_id}&status=completed`, {

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
                    Alert.alert("Alert",successData.message)
                    this.setState({
                        refreshing: false
                    })
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


    searchFilterFunction = text => {    
        const {services} = this.state
        if (text !== "") {
            const newData = services.filter(item => {      
                const itemData = `${item.services[0].service_name.toUpperCase()}`;
                
                 const textData = text.toUpperCase();
                  
                 return itemData.indexOf(textData) > -1;    
              });
              
              this.setState({ data: newData });  
        }else {
            this.setState({data: services })
        }
        this.setState({text: text})
        
      };



    
    render() {
        return (
            <View style={{flex:1, height:'100%', width:'100%', marginTop: -80}}>
                <ImageBackground source={require('../../../assets/inner.png')} style={{height:"100%", width:"100%",opacity:0.9}}> 

                <Header
                        containerStyle={{marginTop:60, backgroundColor:"#fff"}}
                        placement="left"
                        leftComponent={<Icon onPress={() => {this.props.navigation.navigate('Main')}} name="arrow-back" color="#000" />}
                        centerComponent={
                            <View style={{alignContent:"center", alignItems:"center", alignSelf:"center"}}>
                      {!this.state.focusOn  ? <Text style={{ alignSelf:'center',fontSize: 20, fontFamily: "Poppins-Regular_0" }}>BOOKING HISTORY</Text> 
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
    
                    }}
                    
                    >
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
                    // rightComponent={
                    //     <View style={{flexDirection:"row"}}>
                    //    {!this.state.focusOn && <TouchableOpacity style={{right: 20}} onPress={() => {this.setState({focusOn: true})
                    // //  this.input.focus()
                    //     }}>
                    //         <Icon style={{
                    //         color: 'gray',
                    //         justifyContent: 'flex-end'
                    //     }} type="EvilIcons" name="search" size={24} />
                    //     </TouchableOpacity>}
                        
                    //     {/* <TouchableOpacity onPress={() => { this.props.navigation.navigate("Notification") }}>
                    //         <Image source={require('../../../assets/notification.png')} style={{ height:26, width:20 }} />
                    //     </TouchableOpacity> */}
                    //     </View>}
                    rightComponent={
                        <View style={{flexDirection:"row"}}>

                     
                        <TouchableOpacity onPress={() => {Alert.alert("Warning", "Will be implemented")}}>
                            <Image source={require('../../../assets/filter.png')} style={{ height: 20, width: 20 }} />
                        </TouchableOpacity>
                        </View>}
                        />



                <View style={{flex: 1 ,height:'100%', width:'100%',justifyContent:"center"}}>

        <ScrollView refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />}style={{height: height}}>

            
                   
                   <View style={{flex: 1 ,justifyContent:"center", alignContent:"center", alignItems:"center", marginTop:20}}>

              {this.state.data.length > 0 ?  <View style={{ backgroundColor: "#fff", borderRadius: 20, width: "100%"}}>
                    {this.state.data.map((value, index) => {
                        // console.log('VALUE VALUE VALUE', value)
                        var formatDate = `${moment(value.service_date).format('dddd')} - ${ moment(value.service_date).format('DD/MM/YYYY')}`
                        return(
                            <View key={index} style={{width:'100%', padding: 20, alignSelf:'center', borderBottomColor:"#bdbdbd", borderBottomWidth:0.2}}>
                                {/* <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{width:"50%", fontFamily:"Poppins-Regular_0"}}>Name</Text>
                                    <Text style={{marginLeft:"3%", fontFamily:"Poppins-Regular_0", fontSize: 20}}>{value.username}</Text>
                                   
                                </View> */}
                                 <View style={{display:"flex", flexDirection:"row", paddingVertical: 10}}> 
                                    <Text style={{fontFamily:"Poppins-Regular_0", color:"#ff8385", fontSize:15}}>{formatDate}</Text>
                                </View>

                                <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{width:"50%", fontFamily:"Poppins-Regular_0", color:'#aaaaaa' }}>Service Name</Text>
                                    <Text style={{width:"50%", fontFamily:"Poppins-Regular_0", textAlign: 'right'}}>{value.service_name}</Text>
                                </View>
{/* 
                                <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{width:"50%", fontFamily:"Poppins-Regular_0"}}>Time</Text>
                                    <Text style={{marginLeft:"3%", fontFamily:"Poppins-Regular_0"}}>{value.time_slot}</Text>
                                </View> */}

                                {value.s_checked  == 1 ? 
                                 <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{width:"50%", fontFamily:"Poppins-Regular_0", color:'#aaaaaa' }}>Cost</Text>
                                    <Text style={{width:"50%",  fontFamily:"Poppins-Regular_0", textAlign: 'right'}}>${value.service_cost}</Text>
                                </View>  
                                
                            :
                            <View style={{display:"flex", flexDirection:"row"}}> 
                            <Text style={{width:"50%", fontFamily:"Poppins-Regular_0", color:'#aaaaaa' }}>Cost</Text>
                            <Text style={{width:"50%",  fontFamily:"Poppins-Regular_0", textAlign: 'right'}}>${value.so_plush_cost}</Text>
                            </View>  
                            
                            }



                                 <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{width:"50%", fontFamily:"Poppins-Regular_0", color:'#aaaaaa' }}>Beauticianist Name</Text>
                                    <Text style={{width:"50%", fontFamily:"Poppins-Regular_0", textAlign: 'right'}}>{this.state.beauticianName}</Text>
                                </View>

                                
                    </View>

                        )
                    })}
                         
              </View>  :
            

            <View style={{alignContent:"center",alignItems:'center', alignSelf:'center', justifyContent:'center', height:100}}>
            <Text>
                    Empty History
            </Text>
        </View>
            
            
            }
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
        </View>
        )
    }
}


