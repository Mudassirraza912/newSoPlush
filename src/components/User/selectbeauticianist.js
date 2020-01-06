        import React, { Component } from 'react'
        import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, FlatList, TextInput , BackHandler} from 'react-native'
        // import {  } from 'react-native-gesture-handler';
        import { Container, Content, Left, Right, Button, Item, Input, Icon } from 'native-base';
        import { Avatar, Header, Card, ListItem, Divider, Rating } from 'react-native-elements'
        import img from '../../../assets/barbie.jpg'
        import StarRating from 'react-native-star-rating';

        const { width, height } = Dimensions.get("window")

        export default class SelectBeautician extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    // notifications : [
                    //     {
                    //         icon: img,
                    //         data: "Jane",
                    //         time: "02:00",
                    //     },
                    //   {
                    //         icon: img,
                    //         data: "Hair Cutting",
                    //         time: "02:00",
                    //     },
                    //     {
                    //         icon: img,
                    //         data: "Hair Cutting",
                    //         time: "02:00",
                    //     },
                    //     {
                    //         icon: img,
                    //         data: "Hair Cutting",
                    //         time: "02:00",
                    //     },
                    //     {
                    //         icon: img,
                    //         data: "Hair Cutting",
                    //         time: "02:00",
                    //     },
                    //     {
                    //         icon: img,
                    //         data: "Hair Cutting",
                    //         time: "02:00",
                    //     },
                    //     {
                    //         icon: img,
                    //         data: "Hair Cutting",
                    //         time: "02:00",
                    //     },
                    //     {
                    //         icon: img,
                    //         data: "Hair Cutting",
                    //         time: "02:00",
                    //     },
                    //     {
                    //         icon: img,
                    //         data: "Hair Cutting",
                    //         time: "02:00",
                    //     },
                    //     {
                    //         icon: img,
                    //         data: "Hair Cutting",
                    //         time: "02:00",
                    //     },




                    // ],
                    filerUser: this.props.navigation.getParam('users'),
                    notifications: this.props.navigation.getParam('users'),
                    starCount: 3,
                    cart: this.props.navigation.getParam('cart'),
                    selectDate: this.props.navigation.getParam('selectDate')


                }
            }


            // componentWillMount() {
            //     console.log('componentWillMount')
            //     BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
        
            // }
        
            // // componentWillUnmount() {
            // //     console.log('componentWillUnmount')
            // //     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
            // // }
            

            // handleBackButton = () => {
            //     if (this.props.navigation.isFocused) {
            //         this.props.navigation.navigate('PersonalService', {
            //             category_id: this.props.navigation.getParam('category_id'),
            //             image: this.props.navigation.getParam('image'),
            //             service: this.props.navigation.getParam('service'),
            //             category_name: this.props.navigation.getParam('category_name') 
            //             })
            //         return true;
            //     }
            // };


            static navigationOptions = () => ({
                headerMode: 'none',
                headerVisible: false,
                header: null,
                drawerLockMode: 'locked-closed'
            })

            searchFilterFunction = text => {
                const { notifications, filerUser } = this.state
                if (text !== "") {
                    const newData = notifications.filter(item => {
                        const itemData = `${item.username.toUpperCase()}`;

                        const textData = text.toUpperCase();

                        return itemData.indexOf(textData) > -1;
                    });



                    this.setState({ filerUser: newData })
                } else {

                    this.setState({ filerUser: notifications })

                }

            };


            keyExtractor = (item, index) => index.toString()

            renderItem = ({ item }) => {
                let length = 70
                let mainItem = item.data
                // if(item.length < length){
                //     mainItem = item.data}
                // } else { mainItem = `${item.data.substring(0, length)}...` }
                return (
                    <View style={{flex: 1 , backgroundColor: "transparent", width: '100%' }}>
                        <ScrollView>
                        <TouchableOpacity   onPress={() => {
                            this.props.navigation.navigate('SelectedProfile', {
                                selectedUser: item,
                                cart: this.state.cart,
                                selectDate: this.state.selectDate,
                                category_id: this.props.navigation.getParam('category_id'),
                                image: this.props.navigation.getParam('image'),
                                service: this.props.navigation.getParam('service'),
                                category_name: this.props.navigation.getParam('category_name')
                            })
                        }}> 
                        <ListItem 
                        // onPress={() => {
                        //     this.props.navigation.navigate('SelectedProfile', {
                        //         selectedUser: item,
                        //         cart: this.state.cart,
                        //         selectDate: this.state.selectDate
                        //     })
                        // }}
                            rightTitleStyle={{fontWeight:'bold'}}
                            containerStyle={{ backgroundColor: "transparent", width: "100%" }}
                            title={item.username}

                            subtitle={<StarRating
                                containerStyle={{ width: 100 }}
                                
                                starSize={15}
                                disabled={true}
                                maxStars={5}
                                fullStarColor="#fc8b8c"
                                rating={this.state.starCount}
                                // selectedStar={(rating) => this.setState({ starCount: rating })}
                                emptyStarColor="pink"
                            />}
                            titleStyle={{ fontFamily: "Poppins-Regular_0", fontWeight:'bold' }}
                            subtitleStyle={{ color: "red", fontFamily: "Poppins-Regular_0" }}
                            leftAvatar={{
                                source: item.profile_pic && { uri: `https://hnhtechsolutions.com/hassan/soplush/profile_pics/${item.profile_pic}` },
                                titleStyle: { fontFamily: "Poppins-Regular_0" },
                                // title: item.data[0],
                                rounded: true,
                                size: "medium",
                                containerStyle: { borderRadius: 10, backgroundColor: "none" },
                                iconStyle: { borderRadius: 20 },
                                avatarStyle: { backgroundColor: "none" },
                            }}
                            rightIcon={{ color: 'black', name: "chevron-right", type: "material-community" }}
                        />
                        <Divider style={{ backgroundColor: 'black' }} />
                        </TouchableOpacity>
                    </ScrollView>
                    </View>
                )
            }




            render() {
                // console.log("SelectBeautician", this.state.cart, this.state.selectDate)
                var  params =  this.props.navigation.getParam('image')
                 console.log('params',   params)
                return (
                    <View style={{ flex: 1, height: '100%', width:'100%', marginTop: -80, backgroundColor: "rgb(200, 165, 212)" }}>
                        <ImageBackground source={require('../../../assets/inner.png')} style={{ height: "100%", width: "100%" }}>

                            <Header
                                containerStyle={{ marginTop: 60, backgroundColor: "#fff" }}
                                placement="left"
                                leftComponent={<Icon onPress={() => { this.props.navigation.goBack() }} name="arrow-back" color="#000" />}
                                centerComponent={<Text style={{alignSelf:'center',fontSize: 20, fontFamily: "Poppins-Regular_0" }}>SELECT BEAUTICIANIST</Text>}
                                // rightComponent={<Image source={require('../../../assets/notification.png')} style={{ height:26, width:20 }} />}
                            />


                            <View style={{ flex: 1, height: '100%', width:'100%', backgroundColor: "rgba(246, 232, 232, 0.4)", justifyContent: "center" }}>

                                <ScrollView style={{  }}>

                                    <View style={{
                                        backgroundColor: "transparent",
                                        borderColor: 'gray',
                                        borderWidth: 1,
                                        borderColor: 'gray',
                                        borderRadius: 10,
                                        height: 50,
                                        marginTop: 15,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        alignSelf: 'center',
                                        width: '93%',
                                        paddingHorizontal: 16,
                                    }}>
                                        <TextInput style={{
                                            height: 45,
                                            flex: 1,
                                        }}
                                            value={this.state.search}
                                            placeholder="Search"
                                            onChangeText={(text) => this.searchFilterFunction(text)}
                                        />
                                        <Icon style={{
                                            color: 'gray',
                                            justifyContent: 'flex-end'
                                        }} type="EvilIcons" name="search" size={24} />
                                    </View>

                                    {/* <View style={{alignContent:"flex-end", alignItems:"flex-end", paddingHorizontal:10, justifyContent:"center",margin:2}}>
                                        <Button transparent onPress={() => {
                                    this.props.navigation.navigate('SelectedProfile', {
                                    selectedUser: null,
                                    cart: this.state.cart,
                                    selectDate: this.state.selectDate
                                    })}} 
                            style={{justifyContent:"center",alignContent:"center", alignItems:"center",width:"40%", borderRadius: 10, backgroundColor:"transparent", borderBottomColor:"#000", borderBottomWidth:3}}> 
                                                        <Text style={{alignSelf:"center",color:"#000", fontFamily:"Poppins-Regular_0", fontSize:20}}>
                                                            Skip
                                                        </Text>   
                                                        </Button>
                                    </View> */}

                                    {/* <View style={{backgroundColor:"#fff", width:"80%",justifyContent:"center", alignContent:"center", alignSelf:"center",borderRadius:10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 157, 0.4)', marginTop: '10%', marginBottom:'5%'}}> */}

                                    <View style={{ justifyContent: "center", alignContent: "center", alignItems: "center", marginTop: 15 }}>

                                        <View style={{ width: '100%' }}>
                                            <FlatList
                                                style={{ backgroundColor: "transparent", width: '100%' }}
                                                keyExtractor={this.keyExtractor}
                                                data={this.state.filerUser}
                                                renderItem={this.renderItem}
                                            />
                                        </View>


                                    </View>

                                    {/* <View style={{flex: 1 ,bottom: 0, position: "relative" }}>
                                        <Text>Skip</Text>
                                    </View> */}


                                    {/* <View>
                                        <Text></Text>
                                        <Text></Text>
                                        <Text></Text>
                                        <Text></Text>
                                        <Text></Text>
                                        <Text></Text>
                                        <Text></Text>
                                    </View> */}



                                </ScrollView>


                            </View>
                        </ImageBackground>
                    </View>
                )
            }
        }
