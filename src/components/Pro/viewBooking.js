// import React, { Component } from 'react'
// import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, Alert, RefreshControl,TextInput } from 'react-native'
// // import {  } from 'react-native-gesture-handler';
// import { Container, Content, List, ListItem, Left, Right, Button } from 'native-base';
// import {Avatar, Header, Icon, Card} from 'react-native-elements'


// const {width, height} = Dimensions.get("window")

// export default class ViewBooking extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             // services : [
//             //     {
//             //         name: "So plush",
//             //         service: "Hair Cutting",
//             //         time: "02:00",
//             //         date: "14-08-1900"
//             //     },
//             //     {
//             //         name: "So plush",
//             //         service: "Hair Cutting",
//             //         time: "02:00",
//             //         date: "14-08-1900"
//             //     },
//             //     {
//             //         name: "So plush",
//             //         service: "Hair Cutting",
//             //         time: "02:00",
//             //         date: "14-08-1900"
//             //     },
//             //     {
//             //         name: "So plush",
//             //         service: "Hair Cutting",
//             //         time: "02:00",
//             //         date: "14-08-1900"
//             //     },
//             //     {
//             //         name: "So plush",
//             //         service: "Hair Cutting",
//             //         time: "02:00",
//             //         date: "14-08-1900"
//             //     },
//             //     {
//             //         name: "So plush",
//             //         service: "Hair Cutting",
//             //         time: "02:00",
//             //         date: "14-08-1900"
//             //     },
//             //     {
//             //         name: "So plush",
//             //         service: "Hair Cutting",
//             //         time: "02:00",
//             //         date: "14-08-1900"
//             //     },
//             //     {
//             //         name: "So plush",
//             //         service: "Hair Cutting",
//             //         time: "02:00",
//             //         date: "14-08-1900"
//             //     },
//             //     {
//             //         name: "So plush",
//             //         service: "Hair Cutting",
//             //         time: "02:00",
//             //         date: "14-08-1900"
//             //     },
//             //     {
//             //         name: "So plush",
//             //         service: "Hair Cutting",
//             //         time: "02:00",
//             //         date: "14-08-1900"
//             //     },
//             //     {
//             //         name: "So plush",
//             //         service: "Hair Cutting",
//             //         time: "02:00",
//             //         date: "14-08-1900"
//             //     },
//             //     {
//             //         name: "So plush",
//             //         service: "Hair Cutting",
//             //         time: "02:00",
//             //         date: "14-08-1900"
//             //     },
//             //     {
//             //         name: "So plush",
//             //         service: "Hair Cutting",
//             //         time: "02:00",
//             //         date: "14-08-1900"
//             //     },
//             //     {
//             //         name: "So plush",
//             //         service: "Hair Cutting",
//             //         time: "02:00",
//             //         date: "14-08-1900"
//             //     },
                
                
               
//             // ]
//             services: [],
//             refreshing: false,
//             data: [],
//             focusOn: false,
//             offFocus: true,
//             text:''
//         }
//     }




//     componentDidMount() {
//         fetch(`https://hnhtechsolutions.com/hassan/soplush/beautician/beautician_booking.php?action=get_beautician_bookings&beautician_id=${this.props.screenProps.profileData.user_id}&status=completed`, {

//                 }).then(res => res.json())
//                     .then(resp => {
//                         console.log(JSON.stringify(resp))
//                         var successData = resp

//                         if (successData.status === true) {
//                             console.log("successData.data[0].role_id === 3", successData.data)
//                             //   console.log("Category PRO", successData)
//                    this.setState({
//                        services:successData.data,
//                        data:successData.data

//                    })
                        

//                         } else {
//                             Alert.alert(successData.message)
//                         }
//                     })
//                     .catch(err => console.log("Category err err", err));
//     }


// //    static navigationOptions = () => ({
// //         // headerBackTitle: null,
// //         title:"SERVICES LIST",
// //         headerTitleStyle: {
// //             fontFamily:"Poppins-Regular_0",
// //             fontSize:30
// //         }
// //         // headerStyle: {
// //         //     alignContent:"center",
// //         //     justifyContent:"center",
// //         //     alignItems:"center",
// //         //     // alignSelf:"cneter"
// //         // },
// //     })

//     // static navigationOptions = ({
    
//     //     navigation, screenProps }) => ({
//     //     drawerLabel: "SERVICES LIST",
//     //     title:"SERVICES LIST",
//     //     headerTintColor: 'white',
//     //     headerTitleStyle: {
//     //         fontFamily:"Poppins-Regular_0",
//     //         fontSize:30
//     //     },
//     //     // title: "Service List",
//     //     // headerTitleStyle: { 
//     //     //     textAlign:"center", 
//     //     //     flex:1 
//     //     // },
        
//     //     headerLeft: (
//     //         console.log("navigation",navigation),
//     //       <View style={{ paddingHorizontal: 10
//     //        }}>
//     //         <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
//     //           <Icon name="menu" size={30} color="white" />
//     //         </TouchableOpacity>
//     //       </View>
//     //     ),

//     //   });

//     onRefresh = () => {
//         this.setState({refreshing: true})
//         fetch(`https://hnhtechsolutions.com/hassan/soplush/beautician/beautician_booking.php?action=get_beautician_bookings&beautician_id=${this.props.screenProps.profileData.user_id}&status=completed`, {

//         }).then(res => res.json())
//             .then(resp => {
//                 console.log(JSON.stringify(resp))
//                 var successData = resp

//                 if (successData.status === true) {
//                     console.log("successData.data[0].role_id === 3", successData.data)
//                     //   console.log("Category PRO", successData)
//            this.setState({
//                services:successData.data,
//                data:successData.data,
//                refreshing: false
//            })
                

//                 } else {
//                     Alert.alert(successData.message)
//                     this.setState({
//                         refreshing: false
//                     })
//                 }
//             })
//             .catch(err => console.log("Category err err", err));
//     }



//     static navigationOptions = () => ({
//         headerMode: 'none',
//         headerVisible: false,
//         header: null,
//     })


//     searchFilterFunction = text => {    
//         const {services} = this.state
//         if (text !== "") {
//             const newData = services.filter(item => {      
//                 const itemData = `${item.services[0].service_name.toUpperCase()}`;
                
//                  const textData = text.toUpperCase();
                  
//                  return itemData.indexOf(textData) > -1;    
//               });
              
//               this.setState({ data: newData });  
//         }else {
//             this.setState({data: services })
//         }
//         this.setState({text: text})
        
//       };



    
//     render() {
//         return (
//             <View style={{flex:1, height, width, marginTop: -80}}>
//                 <ImageBackground source={require('../../../assets/opacity.jpg')} style={{height:"100%", width:"100%",opacity:0.9}}> 

//                 <Header
//                         containerStyle={{marginTop:60, backgroundColor:"#fff"}}
//                         placement="left"
//                         leftComponent={<Icon onPress={() => {this.props.navigation.navigate('Main')}} name="arrow-back" color="#000" />}
//                         centerComponent={
//                             <View style={{alignContent:"center", alignItems:"center", alignSelf:"center"}}>
//                       {!this.state.focusOn  ? <Text style={{ alignSelf: "center", fontSize: 30, fontFamily: "Poppins-Regular_0" }}>VIEW BOOKING</Text> 
//                       :
    
//                       <View style={{
//                         backgroundColor: "transparent",
//                         borderColor: 'gray',
//                         borderWidth: 1,
//                         borderColor: 'gray',
//                         borderRadius: 10,
//                         height: 50,
//                         marginTop: 10,
//                         flexDirection: 'row',
//                         alignItems: 'center',
//                         alignSelf: 'center',
//                         width: '93%',
//                         paddingHorizontal: 16,
//                         paddingVertical: 10,
//                         marginBottom: 10,
    
//                     }}>
//                         <TextInput style={{
//                             height: 45,
//                             flex: 1,
//                         }}
//                             value={this.state.text}
//                             placeholder="Search"
//                             onChangeText={(text) =>  this.searchFilterFunction(text)}
//                             onBlur = {() => {this.setState({focusOn: false})} }
//                             autoFocus = {true}
//                             ref={x => this.input = x}
//                         />
//                         <Icon style={{
//                             color: 'gray',
//                             justifyContent: 'flex-end'
//                         }} type="EvilIcons" name="search" size={24} />
//                     </View>
    
//                     }
//                         </View>
//                     }
//                     rightComponent={
//                         <View style={{flexDirection:"row"}}>
//                        {!this.state.focusOn && <TouchableOpacity style={{right: 20}} onPress={() => {this.setState({focusOn: true})
//                     //  this.input.focus()
//                         }}>
//                             <Icon style={{
//                             color: 'gray',
//                             justifyContent: 'flex-end'
//                         }} type="EvilIcons" name="search" size={24} />
//                         </TouchableOpacity>}
                        
//                         {/* <TouchableOpacity onPress={() => { this.props.navigation.navigate("Notification") }}>
//                             <Image source={require('../../../assets/notification.png')} style={{ height:26, width:20 }} />
//                         </TouchableOpacity> */}
//                         </View>}
//                         />



//                 <View style={{ height, width, backgroundColor:"rgba(246, 232, 232, 0.7)",justifyContent:"center"}}>

//         <ScrollView refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />}style={{height: height}}>

            
                   
//                    <View style={{justifyContent:"center", alignContent:"center", alignItems:"center", marginTop:20}}>

//               {this.state.data.length > 0 ?  <View style={{backgroundColor:"#fff",borderRadius:10, width:"90%"}}>
//                     {this.state.data.map((value, index) => {
//                         return(
//                             <View key={index} style={{width:'90%', padding: 10, alignSelf:'center'}}>
//                                 <View style={{display:"flex", flexDirection:"row"}}> 
//                                     <Text style={{width:"50%", fontFamily:"Poppins-Regular_0", fontSize: 20}}>Name</Text>
//                                     <Text style={{marginLeft:"3%", fontFamily:"Poppins-Regular_0", fontSize: 20}}>{value.username}</Text>
                                   
//                                 </View>

//                                 <View style={{display:"flex", flexDirection:"row"}}> 
//                                     <Text style={{width:"50%", fontFamily:"Poppins-Regular_0", fontSize: 20}}>Service</Text>
//                                     <Text style={{marginLeft:"3%", fontFamily:"Poppins-Regular_0", fontSize: 20}}>{value.services[0].service_name}</Text>
//                                 </View>

//                                 <View style={{display:"flex", flexDirection:"row"}}> 
//                                     <Text style={{width:"50%", fontFamily:"Poppins-Regular_0", fontSize: 20}}>Time</Text>
//                                     <Text style={{marginLeft:"3%", fontFamily:"Poppins-Regular_0", fontSize: 20}}>{value.time_slot}</Text>
//                                 </View>

//                                  <View style={{display:"flex", flexDirection:"row"}}> 
//                                     <Text style={{width:"50%", fontFamily:"Poppins-Regular_0", fontSize: 20}}>Date</Text>
//                                     <Text style={{marginLeft:"3%", fontFamily:"Poppins-Regular_0", fontSize: 20}}>{value.service_date}</Text>
//                                 </View>

                                
//                     </View>

//                         )
//                     })}
                         
//               </View>  :
            

//             <View style={{alignContent:"center",alignItems:'center', alignSelf:'center', justifyContent:'center', height:100}}>
//             <Text>
//                     Empty History
//             </Text>
//         </View>
            
            
//             }
//          </View>
                                        
             


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
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, Alert, TextInput } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button, } from 'native-base';
import { Avatar, Header, Icon, Card,Divider } from 'react-native-elements'
import Dialog, { DialogFooter, DialogButton, DialogContent, DialogTitle } from 'react-native-popup-dialog';
import constants from 'jest-haste-map/build/constants';
// import { thisExpression } from '@babel/types';
import LinearGradient from 'react-native-linear-gradient'


const { width, height } = Dimensions.get("window")

export default class ViewBooking extends Component {
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




            // ],
            accptVisible: false,
            rejectVisible: false,
            thankVisible: false,
            profileData: this.props.screenProps.profileData,
            services: [],
            data: [],
            focusOn: false,
            offFocus: true,
            text:''
        }
    }


    componentDidMount() {
        const { profileData } = this.state

        const formData = new FormData()
        formData.append("beautician_id", profileData.user_id)

        console.log('profileData.user_id', profileData.user_id)

        fetch(`https://hnhtechsolutions.com/hassan/soplush/beautician/beautician_booking.php?action=get_beautician_bookings&beautician_id=${profileData.user_id}&status=pending`, {

        }).then(res => res.json())
            .then(resp => {
                console.log(JSON.stringify(resp))
                var successData = resp

                if (successData.status === true) {
                    console.log("successData.data[0].role_id === 3", successData.data)
                    this.setState({ services: successData.data, data: successData.data, })
                    //   console.log("Category PRO", successData)
                    // this.props.navigation.navigate("Main")

                } else {
                    Alert.alert("Alert",successData.message)
                }
            })
            .catch(err => console.log("Category err err", err));
    }



    changeStatus = (value, detail, index) => {
        const { profileData, services, data } = this.state
        console.log('changeStatus', value, detail, profileData.user_id)
        const formData = new FormData()
        formData.append('booking_id', detail.booking_id)
        formData.append('beautician_id', profileData.user_id)
        formData.append('status', value)

        console.log(formData)


        // ACCEPT ALERT


        if (value === "accepted") {
            Alert.alert(
                'Booking',
                'Are you sure you want to accept?',
                [
                    {
                        text: 'No',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {
                        text: 'Yes', onPress: () => {
                            Alert.alert(
                                'Thank You',
                                'Thank you for accepting the booking',
                                [
                                    {
                                        text: 'OK', onPress: () => {
                                            fetch("https://hnhtechsolutions.com/hassan/soplush/booking/booking.php?action=change_booking_status", {
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
                                                        this.state.services.splice(index, 1)
                                                        this.state.data.splice(index, 1)

                                                        this.setState({ services, data })
                                                        fetch(`https://hnhtechsolutions.com/hassan/soplush/beautician/beautician_booking.php?action=get_beautician_bookings&beautician_id=${profileData.user_id}&status=accepted`, {

                                                        }).then(res => res.json())
                                                            .then(resp => {
                                                                console.log(JSON.stringify(resp))
                                                                var successData = resp

                                                                if (successData.status === true) {
                                                                    console.log("successData.data[0].role_id === 3", successData.data)
                                                                    //   console.log("Category PRO", successData)
                                                             this.props.navigation.navigate('ServingHistory', {
                                                                 services: successData.data
                                                             })
                                                                   

                                                                } else {
                                                                    Alert.alert("Alert",successData.message)
                                                                }
                                                            })
                                                            .catch(err => console.log("Category err err", err));
                                                        //   Alert.alert("Login successful")


                                                    } else {
                                                        console.log("Else", successData)
                                                        Alert.alert("Alert",successData.message)
                                                    }
                                                })
                                                .catch(err => console.log("err err SEARCH", err));
                                            // this.props.navigation.navigate('ServingHistory')




                                        }
                                    },
                                ],
                                { cancelable: false },
                            )
                        }
                    },
                ],
                { cancelable: false },
            )
        }




        if (value === "rejected") {
            Alert.alert(
                'Booking',
                'Are you sure you want to reject?',
                [
                    {
                        text: 'No',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {
                        text: 'Yes', onPress: () => {

                            fetch("https://hnhtechsolutions.com/hassan/soplush/booking/booking.php?action=change_booking_status", {
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
                                        this.state.services.splice(index, 1)
                                        this.state.data.splice(index, 1)

                                        this.setState({ services, data })
                                        
                                        fetch(`https://hnhtechsolutions.com/hassan/soplush/beautician/beautician_booking.php?action=get_beautician_bookings&beautician_id=${profileData.user_id}&status=accepted`, {

                                                        }).then(res => res.json())
                                                            .then(resp => {
                                                                console.log(JSON.stringify(resp))
                                                                var successData = resp

                                                                if (successData.status === true) {
                                                                    console.log("successData.data[0].role_id === 3", successData.data)
                                                                    //   console.log("Category PRO", successData)
                                                             this.props.navigation.navigate('ServingHistory', {
                                                                 services: successData.data
                                                             })
                                                                   

                                                                } else {
                                                                    Alert.alert("Alert",successData.message)
                                                                }
                                                            })
                                                            .catch(err => console.log("Category err err", err));


                                    } else {
                                        console.log("Else", successData)
                                        Alert.alert("Alert",successData.message)
                                    }
                                })
                                .catch(err => console.log("err err SEARCH", err));

                            // this.props.navigation.navigate('ServingHistory')
                        }
                    },
                ],
                { cancelable: false },
            )

        }






        // REJECT ALERT 

        // Alert.alert(
        //     'Booking',
        //     'Are you sure you want to reject?',
        //     [
        //         {
        //         text: 'No',
        //         onPress: () => console.log('Cancel Pressed'),
        //         style: 'cancel',
        //         },
        //         {text: 'Yes', onPress: () => {this.props.navigation.navigate('ServingHistory')}},
        //     ],
        //     {cancelable: false},
        //     )

    }


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



    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
        drawerLockMode: 'locked-closed'
    })


    render() {
        const { accptVisible, rejectVisible, thankVisible, services } = this.state
        console.log('services services services',services)
        return (
            <View style={{ flex: 1, height:'100%', width:'100%', marginTop: -80 }}>
                <ImageBackground source={require('../../../assets/inner.png')} style={{ height: "100%", width: "100%", opacity: 0.9 }}>

                    <Header
                        containerStyle={{ marginTop: 60, backgroundColor: "#fff" }}
                        placement="left"
                        leftComponent={<Icon onPress={() => { this.props.navigation.navigate('Main') }} name="arrow-back" color="#000" />}
                        centerComponent={
                            <View style={{alignContent:"center", alignItems:"center", alignSelf:"center"}}>
                      {!this.state.focusOn  ? <Text style={{alignSelf:'center',fontSize: 20, fontFamily: "Poppins-Regular_0" }}>VIEW BOOKING</Text> 
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
                        
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Notification") }}>
                        <Image source={require('../../../assets/notificationheader.png')} style={{ height:20, width:20 }} />
                        </TouchableOpacity>
                        </View>}
                    />



                    <View style={{flex: 1 ,height:'100%', width:'100%', justifyContent: "center" }}>

                        <ScrollView style={{ height: height }}>

                            {/* <View style={{backgroundColor:"#fff", width:"80%",justifyContent:"center", alignContent:"center", alignSelf:"center",borderRadius:10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 187, 0.4)', marginTop: '10%', marginBottom:'5%'}}> */}

                            <View style={{ justifyContent: "center", alignContent: "center", alignItems: "center", marginTop: 20 }}>

                             {this.state.data.length > 0 ?   <View style={{ backgroundColor: "#fff", borderRadius: 10, width: "95%" }}>
                                    {this.state.data.map((value, index) => {
                                        return (
                                            <View key={index} style={{width:'90%', padding: 10, alignSelf:'center'}}>
                                                <View style={{ display: "flex", flexDirection: "row" }}>
                                                    <Text style={{ width: "30%", fontFamily: "Poppins-Regular_0", fontSize:17, color:'#aaaaaa' }}>Name</Text>
                                                    <Text style={{ marginLeft: "3%", fontFamily: "Poppins-Regular_0" , fontSize:15}}>{value.username}</Text>
                                                    {/* <TouchableOpacity onPress={() => {
                                                        this.props.navigation.navigate('BookingDetail', {
                                                            bookinDetail: value,
                                                        })
                                                    }}>
                                                        <Text style={{ marginLeft: "30%", color: "#fc8b8c", borderBottomColor: "#fc8b8c", borderBottomWidth: 1, fontFamily: "Poppins-Regular_0", width: '40%', textAlign: "center", fontSize:15 }}>VIEW DETAILS</Text>
                                                    </TouchableOpacity> */}
                                                </View>

                                                <View style={{ display: "flex", flexDirection: "row" }}>
                                                    <Text style={{ width: "30%", fontFamily: "Poppins-Regular_0" , fontSize:17, color:'#aaaaaa'}}>Service</Text>
                                                    <Text style={{ marginLeft: "3%", fontFamily: "Poppins-Regular_0" , fontSize:15}}>{value.service_name}</Text>
                                                </View>

                                                <View style={{ display: "flex", flexDirection: "row" }}>
                                                    <Text style={{ width: "30%", fontFamily: "Poppins-Regular_0" , fontSize:17, color:'#aaaaaa'}}>Time</Text>
                                                    <Text style={{ marginLeft: "3%", fontFamily: "Poppins-Regular_0", fontSize:15 }}>{value.time_slot}</Text>
                                                </View>

                                                <View style={{ display: "flex", flexDirection: "row" }}>
                                                    <Text style={{ width: "30%", fontFamily: "Poppins-Regular_0", fontSize:17 , color:'#aaaaaa'}}>Date</Text>
                                                    <Text style={{ marginLeft: "3%", fontFamily: "Poppins-Regular_0", fontSize:15 }}>{value.service_date}</Text>
                                                </View>

                                                <View style={{ display: "flex", flexDirection: "row", marginRight: "6%", width:'100%', borderBottomColor:'#bdbdbd', borderBottomWidth: 0.2, paddingVertical: 15 }}>

                                                    {/* <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%" }}>
                                                        <Button onPress={() => { this.changeStatus('accepted', value, index) }} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "#fc8b8c", width: "90%", borderRadius: 10, opacity: 0.7 }}>
                                                            <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "Poppins-Regular_0", fontSize: 20 }}>
                                                                Accept
                                            </Text>
                                                        </Button>
                                                    </View> */}

<View style={{ alignContent: "center", alignItems: "center", marginTop: "5%", marginBottom:10,width: '50%'}}>
                                            {/* <LinearGradient colors={['#fff', '#fc8b8c', '#fc8b8c']} style={{ width: "90%", borderRadius: 10 }}>
                                                <Button onPress={() => { this.props.navigation.navigate('BookingReq')}} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 5 }}>
                                                    <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "Poppins-Regular_0", fontSize: 20 }}>
                                                    DONE
</Text>
                                                </Button>
                                            </LinearGradient> */}

<LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }} colors={['#F9B1B0', '#FD8788', '#FF7173']} style={{ width: "95%", borderRadius: 5}}>
                                        <TouchableOpacity  onPress={() => { this.props.navigation.navigate('BookingReq')}}  style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 5 }} style={{ flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "transparent", opacity: 0.7, borderRadius: 5, width:'100%' }}>
                                            <Text style={{ alignSelf: "center", textAlignVertical: "center", color: "#fff", fontFamily: "Poppins-Regular_0", fontSize: 17, paddingVertical: 10 , fontWeight:'bold'}}>
                                            DONE
                    </Text>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                        </View>
                                                    

                                                    <View style={{flex: 1 ,lignContent: "center", alignItems: "center", marginTop: "5%" }}>
                                                        <TouchableOpacity style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "#ffff", width: "95%", borderRadius: 5, opacity: 0.7, borderColor: "#fc8b8c", borderWidth: 1, paddingVertical: 10 }}>
                                                            <Text style={{ alignSelf: "center", color: "#000", fontFamily: "Poppins-Regular_0", fontSize: 17 }}>
                                                                CANCEL
                                            </Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>

                                        )
                                    })}

                                </View> : 
                            
                            <View style={{alignContent:"center",alignItems:'center', alignSelf:'center', justifyContent:'center', height:100}}>
                            <Text>
                                Empty Booking Request.
                            </Text>
                        </View>
                            
                            }
                            </View>


                            {accptVisible &&
                                <View>


                                    {Alert.alert(
                                        'Alert Title',
                                        'My Alert Msg',
                                        [
                                            { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                                            {
                                                text: 'Cancel',
                                                onPress: () => console.log('Cancel Pressed'),
                                                style: 'cancel',
                                            },
                                            { text: 'OK', onPress: () => console.log('OK Pressed') },
                                        ],
                                        { cancelable: false },
                                    )}

                                </View>}


                            {rejectVisible &&
                                <View>
                                    <Dialog
                                        visible={rejectVisible}
                                        footer={
                                            <DialogFooter>
                                                <DialogButton
                                                    textStyle={{ color: "#fc8b8c" }}
                                                    text="Yes"
                                                    onPress={() => { this.props.navigation.navigate('ServingHistory') }}
                                                />
                                                <DialogButton
                                                    textStyle={{ color: "#fc8b8c" }}
                                                    text="No"
                                                    onPress={() => { this.setState({ rejectVisible: !rejectVisible }) }}
                                                />
                                            </DialogFooter>
                                        }
                                        dialogTitle={<DialogTitle title="Booking" />}
                                    >
                                        <DialogContent>
                                            <Text style={{ marginTop: "2%" }}>Are You Sure You want to reject?</Text>
                                        </DialogContent>
                                    </Dialog>

                                </View>}


                            {thankVisible &&
                                <View>
                                    <Dialog
                                        visible={thankVisible}
                                        footer={
                                            <DialogFooter>
                                                <DialogButton
                                                    textStyle={{ color: "#fc8b8c" }}
                                                    text="Ok"
                                                    onPress={() => { this.setState({ thankVisible: !thankVisible }), this.props.navigation.navigate('ServingHistory') }}
                                                />
                                            </DialogFooter>
                                        }
                                        dialogTitle={<DialogTitle title="Thank You" />}
                                    >
                                        <DialogContent>
                                            <Text style={{ marginTop: "2%" }}>Thank you for accepting the booking</Text>
                                        </DialogContent>
                                    </Dialog>
                                </View>
                            }



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

