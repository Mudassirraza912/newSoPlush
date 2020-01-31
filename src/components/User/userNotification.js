import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content,Left, Right, Button } from 'native-base';
import {Avatar, Header, Icon, Card, ListItem, Divider} from 'react-native-elements'
import img from '../../../assets/notiLogo.png'


const {width, height} = Dimensions.get("window")

export default class UserNotification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications :  [
                {
                    icon: img,
                    data: "Lorem Ipsum is simply dummy text of the printing ",
                    time: "8 May, 2018",
                },
              {
                    icon: img,
                    data: "Lorem Ipsum is simply dummy text of the printing ",
                    time: "8 May, 2018",
                },
                {
                    icon: img,
                    data: "Lorem Ipsum is simply dummy text of the printing ",
                    time: "8 May, 2018",
                },
                {
                    icon: img,
                    data: "Lorem Ipsum is simply dummy text of the printing ",
                    time: "8 May, 2018",
                },
                {
                    icon: img,
                    data: "Lorem Ipsum is simply dummy text of the printing ",
                    time: "8 May, 2018",
                },
                {
                    icon: img,
                    data: "Lorem Ipsum is simply dummy text of the printing ",
                    time: "8 May, 2018",
                },
                {
                    icon: img,
                    data: "Lorem Ipsum is simply dummy text of the printing ",
                    time: "8 May, 2018",
                },
                {
                    icon: img,
                    data: "Lorem Ipsum is simply dummy text of the printing ",
                    time: "8 May, 2018",
                },
                {
                    icon: img,
                    data: "Lorem Ipsum is simply dummy text of the printing ",
                    time: "8 May, 2018",
                },
                {
                    icon: img,
                    data: "Lorem Ipsum is simply dummy text of the printing ",
                    time: "8 May, 2018",
                },
                
                
               
            ]
        }
    }


    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
        drawerLockMode: 'locked-closed'
    })


    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => {
        let length = 70
        let mainItem = item.data
        if(item.data.length < length){
            mainItem = item.data
        } else { mainItem = `${item.data.substring(0, length)}...` }
        return(
        <View style={{flex: 1,backgroundColor:"transparent", width:'100%'}}>
        <ListItem
        containerStyle={{backgroundColor:"transparent", width:"100%"}}
          title={mainItem}
          subtitle={item.time}
          titleStyle = {{fontFamily:"Poppins-Regular_0", textAlignVertical: "top", fontSize: 14}}
          subtitleStyle={{color:"red", fontFamily:"Poppins-Regular_0", textAlignVertical: "bottom", marginTop: 8}}
          leftAvatar={{
            source: item.icon &&  item.icon ,
            titleStyle:{fontFamily:"Poppins-Regular_0"},
            // title: item.data[0],
            rounded:false,
            size:'large',
            containerStyle:{borderRadius: 10, backgroundColor:"transparent", overflow:'hidden'},
            iconStyle:{borderRadius: 20, overflow:'hidden'}, 
            avatarStyle:{borderRadius: 10, backgroundColor:"transparent", overflow:'hidden'}, 
          }}
          
        />
        <Divider style={{ backgroundColor: 'gray' }} />
        </View>
      )}

      

    
    render() {
        return (
            <View style={{flex:1, height:'100%', width:'100%', marginTop: -80}}>
                <ImageBackground source={require('../../../assets/inner.png')} style={{height:"100%", width:"100%"}}> 

                <Header
                    containerStyle={{marginTop:60, backgroundColor:"#fff"}}
                    placement="left"
                    leftComponent={<Icon onPress={() => {this.props.navigation.navigate('UserHome')}} name="arrow-back" color="#000" />}
                    centerComponent={<Text style={{alignSelf:"center",fontSize:20, fontFamily:"Poppins-Regular_0"}}>NOTIFICATIONS</Text>}
                    // rightComponent={  <Image source={require('../../../assets/notification.png')} style={{height:20, width:20}} />}
                    />



                <View style={{ flex:1,height:'100%', width:'100%',justifyContent:"center"}}>

                <ScrollView style={{height: height}}>

                {/* <View style={{backgroundColor:"#fff", width:"80%",justifyContent:"center", alignContent:"center", alignSelf:"center",borderRadius:10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 157, 0.4)', marginTop: '10%', marginBottom:'5%'}}> */}
                   
                   <View style={{flex: 1,justifyContent:"center", alignContent:"center", alignItems:"center", marginTop:20, width:'100%'}}>

                <View style={{width:'100%'}}>
                <FlatList
                    style={{backgroundColor:"transparent", width:'100%'}}
                    keyExtractor={this.keyExtractor}
                    data={this.state.notifications}
                    renderItem={this.renderItem}
                    />
              </View>
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