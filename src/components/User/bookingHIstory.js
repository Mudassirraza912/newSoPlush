import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView,TextInput, RefreshControl, Alert } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button } from 'native-base';
import {Avatar, Header, Icon, Card, Divider} from 'react-native-elements'
import moment from 'moment'

const {width, height} = Dimensions.get("window")

export default class BookingHistory extends Component {
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
            services: [],
            refreshing: false,
            data: [],
            focusOn: false,
            offFocus: true,
            text:''
        }
    }

    componentDidMount() {
        console.log('this.props.screenProps.profileData.user_id', this.props.screenProps.profileData.user_id)
        fetch(`https://hnhtechsolutions.com/hassan/soplush/user/user.php?action=get_user_bookings&user_id=${this.props.screenProps.profileData.user_id}&status=completed`, {

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
                            Alert.alert("Alert",successData.message)
                            console.log("successData.data[0].role_id === 3", successData)

                        }
                    })
                    .catch(err => console.log("Category err err", err));
    }



    onRefresh = () => {
        this.setState({refreshing: true})
        fetch(`https://hnhtechsolutions.com/hassan/soplush/user/user.php?action=get_user_bookings&user_id=${this.props.screenProps.profileData.user_id}`, {

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



    searchFilterFunction = text => {    
        const {services} = this.state
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
        this.setState({text: text})
        
      };





    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
        drawerLockMode: 'locked-closed'
    })

    
    render() {
        console.log('state',this.state.data)
        return (
            <View style={{flex:1, height:'100%', width:'100%', marginTop: -80}}>
                <ImageBackground source={require('../../../assets/inner.png')} style={{height:"100%", width:"100%"}}> 

                <Header
                        containerStyle={{marginTop:60, backgroundColor:"#fff"}}
                        placement="left"
                        leftComponent={<Icon onPress={() => {this.props.navigation.navigate('UserHome')}} name="arrow-back" color="#000" />}
                        centerComponent={
                            <View style={{alignContent:"center", alignItems:"center", alignSelf:"center"}}>
                      {!this.state.focusOn  ? <Text style={{alignSelf:'center', fontSize: 20, fontFamily: "Poppins-Regular_0" }}>BOOKING HISTORY</Text> 
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

                     
                        <TouchableOpacity onPress={() => {Alert.alert("Alert", "Will be implemented")}}>
                            <Image source={require('../../../assets/filter.png')} style={{ height: 20, width: 20 }} />
                        </TouchableOpacity>
                        </View>}


                    // rightComponent={<Icon name="filter" type = "material-community" containerStyle={{borderColor: "#000", }}  color="white" size={30}/>}
                        />



                <View style={{flex: 1 ,height:'100%', width:'100%',justifyContent:"center"}}>

                <ScrollView refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />} style={{height: height}}>

                {/* <View style={{backgroundColor:"#fff", width:"80%",justifyContent:"center", alignContent:"center", alignSelf:"center",borderRadius:10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 157, 0.4)', marginTop: '10%', marginBottom:'5%'}}> */}
                   
                   <View style={{flexL:1 ,justifyContent:"center", alignContent:"center", alignItems:"center", marginTop:20, borderRadius:20}}>

                <View style={{backgroundColor:"#fff",borderRadius:20, width:"90%"}}>

                {this.state.data.length > 0 ?       <View style={{ backgroundColor: "#fff", width: "100%", borderRadius:20, overflow:'hidden'}}> 
                    {this.state.data.map((value, index) => {
                        console.log("DAY NAME DAY NAME", )
                        var formatDate = `${moment(value.service_date).format('dddd')} - ${ moment(value.service_date).format('DD/MM/YYYY')}`
                        // console.log("DAY NAME DAY NAME", `${formatDate, moment(value.service_date).format('MMMM')} ${formatDate, moment(value.service_date).format('YYYY') }`  )

                        return(
                        <View key={index} style={{backgroundColor:'#fff', padding: 10}}> 

                           <View style={{display:"flex", flexDirection:"row", paddingVertical:"5%", justifyContent:'space-between'}}> 
                                    <Text style={{fontFamily:"Poppins-Regular_0", color:"#ff8385", fontSize:17}}>{formatDate}</Text>
                                </View>




                                <View style={{ display: "flex", flexDirection: "row" , justifyContent:'space-between'}}>
                                                    <Text style={{ width: "50%", fontFamily: "Poppins-Regular_0", color: '#bdbdbd' }}>Service Name</Text>
                                                    <Text style={{ marginLeft: "5%", fontFamily: "Poppins-Regular_0", fontSize:15  }}>{value.service_name}</Text>
                                    </View>


                              

                                
{/* 
                                <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{width:"30%", fontFamily:"Poppins-Regular_0", fontSize:20}}>Time</Text>
                                    <Text style={{marginLeft:"3%", fontFamily:"Poppins-Regular_0", fontSize:20}}>{value.time_slot}</Text>
                                </View>

                                 <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{width:"30%", fontFamily:"Poppins-Regular_0", fontSize:20}}>Date</Text>
                                    <Text style={{marginLeft:"3%", fontFamily:"Poppins-Regular_0", fontSize:20}}>{value.service_date}</Text>
                                </View> */}

{value.s_checked  == 1 ? 
                                 <View style={{display:"flex", flexDirection:"row"}}> 
                                    <Text style={{width:"50%", fontFamily:"Poppins-Regular_0", color:'#aaaaaa' }}>Cost</Text>
                                    <Text style={{width:"50%",  fontFamily:"Poppins-Regular_0", textAlign: 'right'}}>${value.soplush_cost}</Text>
                                </View>  
                                
                            :
                            <View style={{display:"flex", flexDirection:"row"}}> 
                            <Text style={{width:"50%", fontFamily:"Poppins-Regular_0", color:'#aaaaaa' }}>Cost</Text>
                            <Text style={{width:"50%",  fontFamily:"Poppins-Regular_0", textAlign: 'right'}}>${value.plush_cost}</Text>
                            </View>  
                            
                            }


                                <View style={{display:"flex", flexDirection:"row", justifyContent:'space-between'}}> 
                                <Text style={{ width: "50%", fontFamily: "Poppins-Regular_0", color: '#bdbdbd' }}>Beauticainist Name</Text>
                                                    <Text style={{ marginLeft: "5%", fontFamily: "Poppins-Regular_0", fontSize:15  }}>{value.beautician}</Text>
                                </View>

                                <Divider style={{backgroundColor:'#bdbdbd', top: 10, width:'95%'}} />
                                {/* {value.is_reviewed == '0' && 
                                <TouchableOpacity onPress={() => {
                                    this.props.navigation.navigate('Feedback', {
                                        bokingdetails : value
                                    })
                                }} style={{alignContent:'center',alignItems:'center', alignSelf:'center'}}>
                                <Text style={{color:"#fc8b8c", fontSize:15, paddingVertical:5}}>Click Here to Rating</Text> 
                                </TouchableOpacity>} */}

                    </View>

                        )
                    })}

    </View>   :
            

            <View style={{alignContent:"center",alignItems:'center', alignSelf:'center', justifyContent:'center', height:100}}>
            <Text>
                    No Booking History
            </Text>
        </View>}
                         
              </View>
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
