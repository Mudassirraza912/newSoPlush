import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, Alert, Picker, RefreshControl } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button, Item, Input, } from 'native-base';
import {Avatar, Header, Icon} from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'


const {width, height} = Dimensions.get("window")

export default class ServiceList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // services : [
            //     {service_name : "So Plush",
            //     service_cost:"20"
            // },
            // {service_name : "So Plush",
            //     service_cost:"20"
            // },
            // {service_name : "So Plush",
            //     service_cost:"20"
            // },
            // {service_name : "So Plush",
            //     service_cost:"20"
            // },

            // {service_name : "So Plush",
            //     service_cost:"20"
            // },
            // ],
            profileData : this.props.screenProps.profileData,
            services: [],
            edit: false,
            category: [],
            service: '',
            cost:'',
            select_category:'',
            index: '',
            value:'',
            refreshing: false,

        }
    }


    componentWillMount() {
        this.setState({
            profileData: this.props.screenProps.profileData
        })

        fetch("https://hnhtechsolutions.com/hassan/soplush/category/category.php?action=select_category", {
            method: 'GET',
            // dataType: "json",
            // headers: {
            //     'Accept' : 'application/json',
            //     'Content-Type': 'multipart/form-data'
            // },
            // body: ""
        }).then(res => res.json())
        .then(resp =>{
          console.log(JSON.stringify(resp))
          var successData =  resp
  
          if(successData.status === true){
              // console.log("successData.data[0].role_id === 3", successData.data[0].role_id === 3)
                this.setState({
                    category: successData.data
                })
                //   console.log("Category PRO", successData)
            // this.props.navigation.navigate("Main")
       
          }else {
            Alert.alert("Alert",successData.message)
          }
        })
        .catch(err => console.log("Category err err",err));
    }


    onRefresh = () => {

        const {profileData} = this.state
        console.log("user_id", profileData.user_id)
        const formData = new FormData();
        formData.append("id", profileData.user_id),

        
        this.setState({
            refreshing: true
        })



        fetch(`https://hnhtechsolutions.com/hassan/soplush/beautician/beautician_service.php?action=get_beautician_services&beautician_id=${profileData.user_id}`, {
            // method: 'POST',
            // // dataType: "json",
            // headers: {
            //     'Accept' : 'application/json',
            //     'Content-Type': 'multipart/form-data'
            // },
            // body: formData
        }).then(res => res.json())
        .then(resp =>{
          console.log(JSON.stringify(resp))
          var successData =  resp
  
          if(successData.status === true){
              console.log("successData.data[0].role_id === 3", successData.data)
              if(successData.data !== undefined){
              this.setState({
                  services: successData.data,
                  refreshing: false
              })
            }else {
                    this.setState({
                        services: [],
                        refreshing: false

                    })
            }

                //   console.log("SUCCESS PRO", successData)
                //   Alert.alert("Login successful")
            // this.props.navigation.navigate("Main")
       
          }else {
            Alert.alert("Alert",successData.message)
            this.setState({refreshing: false})
          }
        })
        .catch(err => console.log("err err err",err));

    }





    componentDidMount() {
        const {profileData} = this.state
        console.log("user_id", profileData.user_id)
        const formData = new FormData();
        formData.append("beautician_id", profileData.user_id),
       

        // console.log("email, password, address, name, phoneNo, profilePic", email, password)


        fetch(`https://hnhtechsolutions.com/hassan/soplush/beautician/beautician_service.php?action=get_beautician_services&beautician_id=${profileData.user_id}`, {
            // method: 'POST',
            // // dataType: "json",
            // headers: {
            //     'Accept' : 'application/json',
            //     'Content-Type': 'multipart/form-data'
            // },
            // body: formData
        }).then(res => res.json())
        .then(resp =>{
          console.log(JSON.stringify(resp))
          var successData =  resp
  
          if(successData.status === true){
              console.log("successData.data[0].role_id === 3", successData.data)
              if(successData.data !== undefined){
              this.setState({
                  services: successData.data
              })
            }else {
                    this.setState({
                        services: []
                    })
            }

                //   console.log("SUCCESS PRO", successData)
                //   Alert.alert("Login successful")
            // this.props.navigation.navigate("Main")
       
          }else {
            Alert.alert("Alert",successData.message)
          }
        })
        .catch(err => console.log("err err err",err));
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


    deleteService = (value, index) => {
        const { services} = this.state
        const formData = new FormData()
        formData.append('id', value.service_id)

        Alert.alert(
            'Services',
            'Are you sure you want to to delete this service?',
            [
                {
                text: 'No',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
                },
                {text: 'Yes', onPress: () => {
                    
                    fetch("https://hnhtechsolutions.com/hassan/soplush/beautician/beautician_service.php?action=delete_service", {
                        method: 'POST',
                        dataType: "json",
                        headers: {
                            'Accept' : 'application/json',
                            'Content-Type': 'multipart/form-data'
                        },
                        body: formData
                    }).then(res => res.json())
                    .then(resp =>{
                      console.log(JSON.stringify(resp))
                      var successData =  resp
                
                      if(successData.status === true){
                                             
                        services.splice(index, 1)
                        this.setState({services})
                        Alert.alert("Alert",successData.message)
                      }else {
                        Alert.alert("Alert",successData.message)
                      }
                    })
                    .catch(err => console.log("Category err err",err));
                }},
            ],
            {cancelable: false},
            )
    } 





    editService = () => {
        const {value, service, cost, index, services} = this.state
        const formData = new FormData()
        formData.append('id', value.service_id)
        formData.append('name', service)
        formData.append('cost', cost)

        console.log('value value value', index,formData, )

        Alert.alert(
            'Services',
            'Are you sure you want to to Edit this service?',
            [
                {
                text: 'No',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
                },
                {text: 'Yes', onPress: () => {
                    
                    fetch("https://hnhtechsolutions.com/hassan/soplush/beautician/beautician_service.php?action=edit_service", {
                        method: 'POST',
                        dataType: "json",
                        headers: {
                            'Accept' : 'application/json',
                            'Content-Type': 'multipart/form-data'
                        },
                        body: formData
                    }).then(res => res.json())
                    .then(resp =>{
                      console.log(JSON.stringify(resp))
                      var successData =  resp
                
                      if(successData.status === true){
                        value.service_name = service
                        value.service_cost = cost
                         services.splice(index, 1, value)
                        this.setState({services, edit: false, service:'', cost:'', value:'', index:''})
                        Alert.alert("Alert",successData.message)
                      }else {
                        Alert.alert("Alert",successData.message)
                      }
                    })
                    .catch(err => console.log("Category err err",err));
                }},
            ],
            {cancelable: false},
            )
    } 



    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
          drawerLockMode: 'locked-closed'
    })

    
    render() {
        console.log(this.state.service, this.state.cost)
        return (
            <View style={{flex:1, height: '100%', width: '100%', marginTop: -80}}>
                <ImageBackground source={require('../../../assets/inner.png')} style={{height:"100%", width:"100%"}}> 

                <Header
                        containerStyle={{marginTop:60, backgroundColor:"#fff"}}
                        placement="left"
                        leftComponent={<Icon onPress={() => {this.props.navigation.toggleDrawer()}} name="menu" color="#000" />}
                        centerComponent={<Text style={{alignSelf:'center',fontSize:20, fontFamily:"Poppins-Regular_0"}}>SERVICES LIST</Text>}
                        // rightComponent={{ icon: 'home', color: '#000' }}
                        />



                <View style={{flex: 1 ,height: '100%', width:'100%', justifyContent:"center"}}>

                <ScrollView refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />}  style={{height: '100%'}} contentContainerStyle={{ justifyContent:'center', alignContent:'center', paddingVertical:"5%", top: '3%'}}>

               <View style={{flex: 1,alignItems:'center', justifyContent:'center', alignContent:'center', }}>     

              {!this.state.edit ? <View style={{backgroundColor:"#fff", width:"90%",justifyContent:"center", alignContent:"center",borderRadius:10}}>
                   

            {this.state.services.length > 0 ?   <View style={{flex: 1}}>
                    {this.state.services.map((value, index) => {
                        return(
                        <List style={{flex:1, marginRight:18, width:'100%' }}> 
                            <ListItem>
                            <Left style={{width:"70%"}}>
                                <Text style={{fontFamily:"Poppins-Regular_0", fontSize:16, width:"100%"}}>{value.service_name}</Text>
                            </Left>
                            <Right style={{width:"30%"}}>
                            
                            {/* <TouchableOpacity onPress = {() => {
                                this.setState({
                                    service: value.service_name,
                                    cost: value.service_cost,
                                    select_category: value.category_id,
                                    index: index,
                                    edit: true,
                                    value: value
                                })
                            }}>
                            <Icon style={{
                            color: '#fc8b8c',
                            justifyContent: 'flex-end'
                             }} color='#fc8b8c' type="EvilIcons" name="edit" size={20} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress = {() => this.deleteService(value, index)}>
                             <Icon style={{
                            color: '#fc8b8c',
                            justifyContent: 'flex-end'
                             }}  color='#fc8b8c' type="EvilIcons" name="delete" size={20} />
                            </TouchableOpacity> */}

                            <Text style={{color:"#fc8b8c", fontFamily:"Poppins-Regular_0", fontSize:16}}>${value.service_cost}</Text>
                            </Right>
                            </ListItem>
                    </List>

                        )
                    })}
                         
              </View>   :   
            
            <View style={{alignContent:"center",alignItems:'center', alignSelf:'center', justifyContent:'center', height:100}}>
                <Text>
                    you are not provide any services yet.
                </Text>
            </View>
            
            
            }

<View style={{ alignContent: "center", alignItems: "center",paddingVertical: '5%'}}>
                                            <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }} colors={['#F9B1B0', '#FD8788', '#FF7173']}  style={{ width: "90%", borderRadius: 5 }}>
                                                <TouchableOpacity onPress={() => {this.setState({renderEMail: false, renderCode: false, renderPassword:false}),
                this.props.navigation.navigate('Main')}} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 5 }}>
                                                    <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "Poppins-Regular_0", paddingVertical: 20, marginTop: -5  }}>
                                                    SAVE SERVICE
</Text>
                                                </TouchableOpacity>
                                            </LinearGradient>
                                        </View>
                      
                        
                  {/* <View style={{alignContent:"center", alignItems:"center", marginTop:"5%", paddingBottom:"5%"}}>
                    <Button onPress={() => {this.setState({renderEMail: false, renderCode: false, renderPassword:false}),
                this.props.navigation.navigate('Main')}} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#fc8b8c", width:"90%", borderRadius: 10, opacity:0.7}}> 
                     <Text style={{alignSelf:"center",color:"#fff", fontFamily:"Poppins-Regular_0", fontSize:20}}>
                       Save Service
                    </Text>   
                     </Button>
                </View> */}

                </View>
            
                
            :            
               
            <View style={{backgroundColor:"#fff", width:"80%",justifyContent:"center", alignContent:"center", alignSelf:"center",borderRadius:10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 157, 0.4)', marginTop: "10%", paddingBottom:10}}>
            <Item floatingLabel style={{ alignSelf: 'center', alignItems: 'center', alignContent: 'center' }}>
               
                <Input value={this.state.service} defaultValue={this.state.service} onChangeText={(e) => { this.setState({ service: e }) }} placeholder="Enter Service" />
            </Item>
            <Item floatingLabel>
                <Icon active name='currency-usd' type="MaterialCommunityIcons" />
                <Input value={this.state.cost} defaultValue={this.state.cost} keyboardType="number-pad" onChangeText={(e) => { this.setState({ cost: e }) }} placeholder="Enter Cost" />
            </Item>
            <View>
            {/* <Picker
                    selectedValue={this.state.select_category}
                    style={{height: 50, width: 280}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({select_category: itemValue})
                    }>
                        {this.state.category.map((value, index) => {
                            console.log("value.category_name", value.category_name)
                            return(<Picker.Item label={value.category_name} value={value.category_id}/>)
                        })}
            </Picker> */}
            </View>

            {/* <View style={{alignContent:"center", alignItems:'center'}}>

                    <Button onPress={this.editService} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#fc8b8c", width:"80%", borderRadius: 10, opacity:0.7, marginTop:"5%"}}> 
                    <Text style={{alignSelf:"center",color:"#fff", fontFamily:"Poppins-Regular_0", fontSize:20}}>
                    Ok
                    </Text>   
                    </Button>

                    <Button onPress={() => { this.setState({edit:false})}} style={{justifyContent:"center",alignContent:"center", alignItems:"center", backgroundColor:"#fc8b8c", width:"80%", borderRadius: 10, opacity:0.7, marginTop:"5%"}}> 
                    <Text style={{alignSelf:"center",color:"#fff", fontFamily:"Poppins-Regular_0", fontSize:20}}>
                    Cancel
                    </Text>   
                    </Button>
            </View> */}


<View style={{ display: "flex", flexDirection: "row", marginRight: "6%" ,  marginBottom:5}}>

<View style={{ alignContent: "center", alignItems: "center", marginTop: "5%", marginBottom:10,width: '50%' }}>
                                            <LinearGradient colors={['#fff', '#fc8b8c', '#fc8b8c']} style={{ width: "90%", borderRadius: 10 }}>
                                                <Button onPress={this.editService} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }}>
                                                    <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "Poppins-Regular_0", fontSize: 17 }}>
                                                        Ok
</Text>
                                                </Button>
                                            </LinearGradient>
                                        </View>


<View style={{ alignContent: "center", alignItems: "center", marginTop: "5%" }}>
    <Button onPress={() => { this.setState({edit:false})}} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "#ffff", width: "90%", borderRadius: 10, opacity: 0.7, borderColor: "#fc8b8c", borderWidth: 1 }}>
        <Text style={{ alignSelf: "center", color: "#000", fontFamily: "Poppins-Regular_0", fontSize: 17 }}>
        Cancel
</Text>
    </Button>
</View>
</View>

        </View>         
                           }

</View>


                </ScrollView>


                </View>
                </ImageBackground>
        </View>
        )
    }
}
