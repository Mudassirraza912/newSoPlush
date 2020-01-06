import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, FlatList, TextInput, Alert } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button, DatePicker, Item, Label, Input } from 'native-base';
import { Avatar, Header, Icon, Card, Divider } from 'react-native-elements'
import Cover1 from '../../../assets/Cover1.png'
import Cover2 from '../../../assets/Cover2.png'
import Cover3 from '../../../assets/Cover3.png'
import Cover4 from '../../../assets/Cover4.png'
// import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment'
import LinearGradient from 'react-native-linear-gradient'


const { width, height } = Dimensions.get("window")

export default class SelectedProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileData: this.props.navigation.getParam('selectedUser'),
            selectedSlot: "",
            selectedUser: this.props.navigation.getParam('selectedUser'),
            cart: this.props.navigation.getParam('cart'),
            selectdate: this.props.navigation.getParam('selectDate'),
            works: [Cover1, Cover2, Cover3, Cover4, Cover1, Cover3, Cover2, Cover4],
            dateSlot: [{ id: 1, time: "11: 00 AM" }, { id: 2, time: "11: 30 AM" }, { id: 3, time: "12: 00 AM" }, { id: 4, time: "01: 00 PM" }, { id: 5, time: "02: 00 PM" }],
            note: ''


        }
    }

    // onDateChange = (date) => {
    //     const { profileData, selectedSlot } = this.state
    //     profileData.birthdate = date
    //     this.setState({
    //         profileData
    //     });
    // }


    workFunction = (item) => {
        const { profileData, selectedSlot } = this.state
        console.log("item", item)

        this.setState({ selectedSlot: item })


        // const index = selectedSlot.findIndex(x => x == item)
        //     // console.log("index",index)
        // if (index != -1) {
        //     selectedSlot.splice(index, 1)
        //     this.setState({selectedSlot})
        // }else {
        //     selectedSlot.push(item)
        //     this.setState({selectedSlot})
        // }

    }



    componentDidMount() {
        const { profileData } = this.state
        var sDate = this.props.navigation.getParam('selectdate')
        var newDate = moment(sDate).format("YYYY/MM/DD")
        console.log("asfasdjkfhasjkdjk", newDate)
        // this
        // this.state.profileData.birthdate = this.props.navigation.getParam('selectdate')
        this.setState({
            selectdate: newDate,
            profileData
        })
    }


    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
        drawerLockMode: 'locked-closed'
    })


    render() {
        const { selectedSlot, profileData, } = this.state
        var  params =  this.props.navigation.getParam('category_id')
        console.log('params',   params)
        var sDate = this.props.navigation.getParam('selectDate')
        var date = moment(sDate).format('DD')
        var month = moment(sDate).format('MM')
        var year = moment(sDate).format('YYYY')

        console.log("Date", date, month, year, sDate)
        return (
            <View style={{ flex: 1, height:'100%', width:'100%', marginTop: -80 }}>
                <ImageBackground source={require('../../../assets/inner.png')} style={{ height: "100%", width: "100%", marginTop: 20 }}>


                    <Header
                        containerStyle={{ marginTop: 40, backgroundColor: "#fff" }}
                        placement="left"
                        leftComponent={<Icon onPress={() => { this.props.navigation.goBack() }} name="arrow-back" color="#000" />}
                        centerComponent={<Text style={{ alignSelf: 'center', fontSize: 20, fontFamily: "Poppins-Regular_0" }}>PROFILE</Text>}
                        rightComponent={<TouchableOpacity onPress={() => {Alert.alert("Alert", "Will be implemented")}}><Image source={require('../../../assets/edit.png')} style={{height:20, width:20}} />
                        </TouchableOpacity>}
                    />

                    <View style={{ height:'100%', width:'100%', justifyContent: "center" }}>

                        <ScrollView style={{ height: height }}>

                            <View style={{ justifyContent: "center", alignContent: "center", alignItems: "center", paddingVertical: 20 }}>

                                {/* <View style={{backgroundColor:"#fff",borderRadius:10, width:"90%"}}> */}

                                {this.state.selectedUser !== null ?

                                    <View style={{ backgroundColor: "#fff", borderRadius: 20, width: "90%", padding: 0 }}>
                                        {/* <View style={{ width: "100%" }}>
                                            <Image resizeMode="cover" style={{ width: "100%", height: 300, borderRadius: 10 }} source={{ uri: `https://hnhtechsolutions.com/hassan/soplush/profile_pics/${this.state.profileData.profile_pic}` }} />
                                        </View> */}
                                        <View style={{ width: "100%", marginLeft: 0, marginRight: 0, borderRadius: 10 }}>
                                            <Image source={{ uri: `https://hnhtechsolutions.com/hassan/soplush/profile_pics/${this.state.profileData.profile_pic}` }} style={{ height: 200, width: "100%", borderTopRightRadius: 10, borderTopLeftRadius: 10 }} />
                                        </View>

                                        <View style={{ display: "flex", flexDirection: "column", marginTop: 15, marginLeft: 10, padding: 5 }}>
                                            <Text style={{ width: "30%", fontFamily: "Poppins-Regular_0", fontSize: 15, color: "gray" }}>Name</Text>
                                            <Text style={{ fontFamily: "Poppins-Regular_0", fontSize: 15 }}>{this.state.profileData.username}</Text>
                                            <Divider style={{ backgroundColor: 'lightgray' , width:"95%"}} />
                                        </View>

                                        <View style={{ display: "flex", flexDirection: "column", marginTop: 15, marginLeft: 10, padding: 5 }}>
                                            <Text style={{ width: "30%", fontFamily: "Poppins-Regular_0", fontSize: 15, color: "gray" }}>Email</Text>
                                            <Text style={{ fontFamily: "Poppins-Regular_0", fontSize: 15 }}>{this.state.profileData.email}</Text>
                                            <Divider style={{ backgroundColor: 'lightgray', width:"95%" }} />
                                        </View>

                                        {/* <View style={{
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
                                            marginLeft: 10

                                        }}>
                                            <TextInput style={{
                                                height: 45,
                                                flex: 1,
                                            }}
                                                value={this.state.search}
                                                placeholder="Define Your Important Notice"
                                                onChangeText={(text) => { this.setState({ note: text }) }}
                                            />
                                            <Icon style={{
                                                color: 'gray',
                                                justifyContent: 'flex-end'
                                            }} type="EvilIcons" name="search" size={24} />
                                        </View> */}





                                        <View style={{ display: "flex", flexDirection: "column", marginTop: 15, marginLeft: 10, padding: 5}}>
                                            <Text  style={{ width: "30%", fontFamily: "Poppins-Regular_0", fontSize: 15, color: "gray" }}>Gender</Text>
                                            <Text style={{ fontFamily: "Poppins-Regular_0", fontSize: 15 }}>{this.state.profileData.gender}</Text>
                                            <Divider style={{ backgroundColor: 'lightgray', width:"95%" }} />
                                        </View>





                                        {/* <Item floatingLabel style={{  marginLeft: "5%",borderBottomColor: 'lightgray', borderBottomWidth:1, marginTop:5}}>
                                                    <Label>Important Note</Label>
                                                    <Input value={this.state.email} style={{padding:10, margin:0}} onChangeText={(text) => { this.setState({ note: text }) }} />
                                                </Item> */}


                                        <View style={{ display: "flex", flexDirection: "column", marginTop: 15, marginLeft: 10 , padding: 5}}>
                                            <Text style={{ width: "30%", fontFamily: "Poppins-Regular_0", fontSize: 15, color: "gray" }}>Select Date</Text>
                                            <DatePicker
                                                // date={this.state.date} //initial date from state
                                                defaultDate={new Date()}
                                                // defaultDate={"1/23/3"}
                                                mode="date" //The enum of date, datetime and time
                                                placeholder="select date"
                                                format="DD-MM-YYYY"
                                                minDate="01-01-2019"
                                                maxDate="01-01-2050"
                                                confirmBtnText="Confirm"
                                                cancelBtnText="Cancel"
                                                customStyles={{
                                                    dateIcon: {
                                                        position: 'absolute',
                                                        left: 0,
                                                        top: 4,
                                                        marginLeft: 0
                                                    },
                                                    dateInput: {
                                                        marginLeft: 36
                                                    }
                                                }}
                                                formatChosenDate={date => { return moment(date).format('DD MMMM YYYY'); }}
                                                onDateChange={(date) => {
                                                    var newdate = moment(date.toString().substr(4, 12)).format("YYYY/MM/DD")
                                                    this.state.selectdate = newdate

                                                    this.setState({ selectdate: newdate })

                                                }}
                                                underlineColorAndroid="#f55f2a" />
                                            {/* <Text style={{fontFamily:"Poppins-Regular_0", fontSize:15}}>
                                    {this.state.profileData.birthdate}</Text> */}
                                            <Divider style={{ backgroundColor: 'lightgray', width:"95%" }} />
                                        </View>





                                        <View style={{ display: "flex", flexDirection: "column", marginTop: 15, marginLeft: 10, padding: 5}}>
                                            <Text style={{ width: "50%", fontFamily: "Poppins-Regular_0", fontSize: 15, color: "gray" }}>Available Slot</Text>

                                            <View style={{ flexDirection: "row", width: "100%" }}>
                                                <FlatList style={{ flex: 1, marginTop: "3%" }}
                                                    data={this.state.dateSlot}
                                                    renderItem={({ item, index }) => (
                                                        <View style={{ flexDirection: "column", margin: 2,width: "30%", borderRadius: 20, alignContent: "center", alignItems: "center", alignSelf: "center",}}>

                                                            {selectedSlot.time == item.time ?
                                                                <TouchableOpacity style={{ width: "100%", }} onPress={() => { this.workFunction(item) }}>
                                                                    <View style={{ backgroundColor: "#fc8b8c", height: 30, width: "100%", borderRadius: 20, alignSelf: "center", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                                                        <Text style={{ color: "#fff" }}>{item.time}</Text>
                                                                    </View>
                                                                </TouchableOpacity>

                                                                :
                                                                <TouchableOpacity style={{ width: "100%", }} onPress={() => { this.workFunction(item) }}>
                                                                    <View style={{ backgroundColor: "lightgray", height: 30, width: "100%", borderRadius: 20, alignSelf: "center", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                                                        <Text style={{ color: "#000" }}>{item.time}</Text>
                                                                    </View>
                                                                </TouchableOpacity>
                                                            }
                                                        </View>
                                                    )}
                                                    //Setting the number of column
                                                    numColumns={3}
                                                    key={2}
                                                    keyExtractor={(item, index) => index}
                                                />
                                            </View>
                                            <Divider style={{ backgroundColor: 'lightgray', width:"95%" }} />
                                        </View>



                                        <View style={{ display: "flex", flexDirection: "column", marginTop: 15, marginLeft: 10, padding: 5 }}>
                                            <Text style={{ width: "30%", fontFamily: "Poppins-Regular_0", fontSize: 15, color: "gray" }}>Expertise</Text>
                                            <Text style={{ fontFamily: "Poppins-Regular_0", fontSize: 15 }}>{this.state.profileData.expertise}</Text>
                                            <Divider style={{ backgroundColor: 'lightgray' , width:"95%"}} />
                                        </View>



                                        <View style={{ display: "flex", flexDirection: "column", marginTop: 15, marginLeft: 10, padding: 5 }}>
                                            <Text style={{ width: "30%", fontFamily: "Poppins-Regular_0", fontSize: 15, color: "gray" }}>About me</Text>
                                            <Text style={{ fontFamily: "Poppins-Regular_0", fontSize: 15 }}>{this.state.profileData.about}</Text>
                                            <Divider style={{ backgroundColor: 'lightgray', width:"95%" }} />
                                        </View>







                                        <View style={{ flex: 1,  alignItems: 'center', marginTop: 15, padding: 3, width:'100%'  }}>
                                            <Text style={{ width: "30%", marginLeft: 15, fontFamily: "Poppins-Regular_0", fontSize: 15, color: "gray", alignSelf: "flex-start" }}>
                                                Work</Text>
                                            <FlatList style={{ flex: 1, marginTop: "3%" }}
                                                data={this.state.works}
                                                renderItem={({ item }) => (
                                                    <View style={{ flexDirection: "column", padding:'1%', height: 125, width: "33%", borderRadius: 5, alignContent: "center", alignItems: "center", alignSelf: "center", paddingVertical: 7}}>
                                                        <TouchableOpacity style={{ borderRadius: 5, width:'100%', height:'100%' }}>
                                                            <Image style={{ height: "100%", width: "100%", borderRadius: 5 }} source={item} />
                                                        </TouchableOpacity>
                                                    </View>
                                                )}
                                                //Setting the number of column
                                                numColumns={3}
                                                key={2}
                                                keyExtractor={(item, index) => index}
                                            />
                                        </View>


                                        {/* 
                                        <View>

                                            <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%" }}>
                                                <Button onPress={() => {

                                                    // this.props.navigation.navigate('ConfirmBooking', {
                                                    //     beauticianData: this.state.profileData,
                                                    //     selectedSlot: this.state.selectedSlot,
                                                    //     cart: this.state.cart,
                                                    //     selectdate: this.state.selectdate,
                                                    //     note: this.state.note
                                                    // })


                                                    if (this.state.selectdate == undefined) {

                                                        this.props.navigation.navigate('ConfirmBooking', {
                                                            beauticianData: this.state.profileData,
                                                            selectedSlot: this.state.selectedSlot,
                                                            cart: this.state.cart,
                                                            selectdate: moment(new Date()).format("MM-DD-YYYY")
                                                        })

                                                        console.log('EMPTY DATE', moment().toDate())

                                                    } else {
                                                        this.props.navigation.navigate('ConfirmBooking', {
                                                            beauticianData: this.state.profileData,
                                                            selectedSlot: this.state.selectedSlot,
                                                            cart: this.state.cart,
                                                            selectdate: moment(this.state.selectdate).format("MM-DD-YYYY")
                                                        })

                                                        console.log('IS DATE')

                                                    }



                                                }} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "#fc8b8c", width: "90%", borderRadius: 10, opacity: 0.7 }}>
                                                    <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "Poppins-Regular_0", fontSize: 15 }}>
                                                        Book Now
</Text>
                                                </Button>
                                            </View>

                                        </View> */}



                                        {/* <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%", marginBottom: 10 }}> */}
                                        {/* <LinearGradient colors={['#fff', '#fc8b8c', '#fc8b8c']} style={{ width: "90%", borderRadius: 10, alignItems:'center', alignSelf:'center', marginBottom: '5%'}}>
                                                <Button onPress={() => {
                                                    // this.props.navigation.navigate('ConfirmBooking', {
                                                    //     beauticianData: this.state.profileData,
                                                    //     selectedSlot: this.state.selectedSlot,
                                                    //     cart: this.state.cart,
                                                    //     selectdate: this.state.selectdate,
                                                    //     note: this.state.note
                                                    // })


                                                    if (this.state.selectdate == undefined) {

                                                        this.props.navigation.navigate('ConfirmBooking', {
                                                            beauticianData: this.state.profileData,
                                                            selectedSlot: this.state.selectedSlot,
                                                            cart: this.state.cart,
                                                            selectdate: moment(new Date()).format("MM-DD-YYYY")
                                                        })

                                                        console.log('EMPTY DATE', moment().toDate())

                                                    } else {
                                                        this.props.navigation.navigate('ConfirmBooking', {
                                                            beauticianData: this.state.profileData,
                                                            selectedSlot: this.state.selectedSlot,
                                                            cart: this.state.cart,
                                                            selectdate: this.state.selectdate
                                                        })

                                                        console.log('IS DATE', this.state.selectdate)

                                                    }



                                                }} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10, width:'100%' }}>
                                                <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "Poppins-Regular_0", fontSize: 15 }}>
                                                        Book Now
</Text>
                                                </Button>
                                            </LinearGradient> */}


                                        <View style={{ alignContent: "center", alignItems: "center", marginTop: -10, paddingVertical:30 }}>
                                            <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }} colors={['#F9B1B0', '#FD8788', '#FF7173']} style={{ width: "90%", borderRadius: 10 }}>
                                                <TouchableOpacity onPress={() => {
                                                    // this.props.navigation.navigate('ConfirmBooking', {
                                                    //     beauticianData: this.state.profileData,
                                                    //     selectedSlot: this.state.selectedSlot,
                                                    //     cart: this.state.cart,
                                                    //     selectdate: this.state.selectdate,
                                                    //     note: this.state.note
                                                    // })

                                                    if(this.state.selectedSlot != "") {


                                                    if (this.state.selectdate == undefined) {

                                                        this.props.navigation.navigate('ConfirmBooking', {
                                                            beauticianData: this.state.profileData,
                                                            selectedSlot: this.state.selectedSlot,
                                                            cart: this.state.cart,
                                                            selectdate: moment(new Date()).format("MM-DD-YYYY"),
                                                            category_id: this.props.navigation.getParam('category_id'),
                                                            image: this.props.navigation.getParam('image'),
                                                            service: this.props.navigation.getParam('service'),
                                                            category_name: this.props.navigation.getParam('category_name')
                                                        })

                                                        console.log('EMPTY DATE', moment().toDate())

                                                    } else {
                                                        this.props.navigation.navigate('ConfirmBooking', {
                                                            beauticianData: this.state.profileData,
                                                            selectedSlot: this.state.selectedSlot,
                                                            cart: this.state.cart,
                                                            selectdate: this.state.selectdate,
                                                            category_id: this.props.navigation.getParam('category_id'),
                                                            image: this.props.navigation.getParam('image'),
                                                            service: this.props.navigation.getParam('service'),
                                                            category_name: this.props.navigation.getParam('category_name')
                                                        })

                                                        console.log('IS DATE', this.state.selectdate)

                                                    }

                                                }else{
                                                    Alert.alert("Alert", "Please select time slot")
                                                }



                                                }} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }} style={{ flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "transparent", opacity: 0.7, borderRadius: 10 }}>
                                                    <Text style={{ alignSelf: "center", textAlignVertical: "center", color: "#fff", fontFamily: "Poppins-Regular_0", paddingVertical: '6%', fontWeight:'bold'}}>
                                                        BOOK NOW
                    </Text>
                                                </TouchableOpacity>
                                            </LinearGradient>
                                        </View>
                                        {/* </View> */}
                                    </View>

                                    :


                                    <Card containerStyle={{ backgroundColor: "#fff", borderRadius: 10, width: "90%", }}>
                                        {/* <View style={{
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
                                                value={this.state.search}
                                                placeholder="Define Your Important Notice"
                                                onChangeText={this.updateSearch}
                                            />
                                            <Icon style={{
                                                color: 'gray',
                                                justifyContent: 'flex-end'
                                            }} type="EvilIcons" name="search" size={24} />
                                        </View> */}


                                        {/* <Item floatingLabel style={{  marginLeft: "5%",borderBottomColor: 'lightgray', borderBottomWidth:1, marginTop:5}}>
                                                    <Label>Important Note</Label>
                                                    <Input value={this.state.email} style={{padding:10, margin:0}} onChangeText={(text) => { this.setState({ note: text }) }} />
                                                </Item> */}

                                        <View style={{ display: "flex", flexDirection: "column", marginTop: 15 }}>
                                            <Text style={{ width: "30%", fontFamily: "Poppins-Regular_0", fontSize: 15, color: "gray" }}>Selected Date</Text>
                                            <DatePicker
                                                // date={this.state.date} //initial date from state
                                                defaultDate={new Date(year, month, date)}
                                                // defaultDate={"1/23/3"}
                                                mode="date" //The enum of date, datetime and time
                                                placeholder="select date"
                                                format="DD-MM-YYYY"
                                                minDate="01-01-2019"
                                                maxDate="01-01-2050"
                                                confirmBtnText="Confirm"
                                                cancelBtnText="Cancel"
                                                customStyles={{
                                                    dateIcon: {
                                                        position: 'absolute',
                                                        left: 0,
                                                        top: 4,
                                                        marginLeft: 0
                                                    },
                                                    dateInput: {
                                                        marginLeft: 36
                                                    }
                                                }}
                                                formatChosenDate={date => { return moment(date).format('DD MMMM YYYY'); }}
                                                onDateChange={(date) => {
                                                    var newdate = moment(date.toString().substr(4, 12)).format("YYYY/MM/DD")
                                                    this.state.selectdate = newdate

                                                    this.setState({ selectdate: newdate })

                                                }}
                                                underlineColorAndroid="#f55f2a" />
                                            {/* <Text style={{fontFamily:"Poppins-Regular_0", fontSize:15}}>
                                    {this.state.profileData.birthdate}</Text> */}
                                            <Divider style={{ backgroundColor: 'lightgray' }} />
                                        </View>


                                        <View style={{ display: "flex", flexDirection: "column", marginTop: 15 }}>
                                            <Text style={{ width: "50%", fontFamily: "Poppins-Regular_0", fontSize: 15, color: "gray" }}>Available Slot</Text>

                                            <View style={{ flexDirection: "row", width: "100%" }}>
                                                <FlatList style={{ flex: 1, marginTop: "3%" }}
                                                    data={this.state.dateSlot}
                                                    renderItem={({ item, index }) => (
                                                        <View style={{ flexDirection: "column", margin: 2, height: 60, width: "30%", borderRadius: 10, alignContent: "center", alignItems: "center", alignSelf: "center" }}>

                                                            {selectedSlot.time == item.time ?
                                                                <TouchableOpacity style={{ width: "100%", }} onPress={() => { this.workFunction(item) }}>
                                                                    <View style={{ backgroundColor: "#fc8b8c", height: 30, width: "100%", borderRadius: 10, alignSelf: "center", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                                                        <Text style={{ color: "#fff" }}>{item.time}</Text>
                                                                    </View>
                                                                </TouchableOpacity>

                                                                :
                                                                <TouchableOpacity style={{ width: "100%", }} onPress={() => { this.workFunction(item) }}>
                                                                    <View style={{ backgroundColor: "lightgray", height: 30, width: "100%", borderRadius: 10, alignSelf: "center", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                                                        <Text style={{ color: "#000" }}>{item.time}</Text>
                                                                    </View>
                                                                </TouchableOpacity>
                                                            }
                                                        </View>
                                                    )}
                                                    //Setting the number of column
                                                    numColumns={3}
                                                    key={2}
                                                    keyExtractor={(item, index) => index}
                                                />
                                            </View>
                                            <Divider style={{ backgroundColor: 'lightgray' }} />
                                        </View>




                                        {/* <View>

                                            <View style={{ alignContent: "center", alignItems: "center", justifyContent: "center", marginTop: "5%" }}>
                                                <Button onPress={() => {

                                                    // this.props.navigation.navigate('ConfirmBooking', {
                                                    //     beauticianData: this.state.profileData,
                                                    //     selectedSlot: this.state.selectedSlot,
                                                    //     cart: this.state.cart,
                                                    //     selectdate: this.state.selectdate,
                                                    //     note: this.state.note
                                                    // })


                                                    if (this.state.selectdate == undefined) {

                                                        this.props.navigation.navigate('ConfirmBooking', {
                                                            beauticianData: this.state.profileData,
                                                            selectedSlot: this.state.selectedSlot,
                                                            cart: this.state.cart,
                                                            selectdate: moment(new Date()).format("MM-DD-YYYY")
                                                        })

                                                        console.log('EMPTY DATE', moment().toDate())

                                                    } else {
                                                        this.props.navigation.navigate('ConfirmBooking', {
                                                            beauticianData: this.state.profileData,
                                                            selectedSlot: this.state.selectedSlot,
                                                            cart: this.state.cart,
                                                            selectdate: moment(this.state.selectdate).format("MM-DD-YYYY")

                                                        })

                                                        console.log('IS DATE')

                                                    }



                                                }} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "#fc8b8c", width: "90%", borderRadius: 10, opacity: 0.7 }}>
                                                    <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "Poppins-Regular_0", fontSize: 15 }}>
                                                        Book Now
                                            </Text>
                                                </Button>
                                            </View>

                                        </View> */}



                                        {/* <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%", marginBottom: 10 }}>
                                            <LinearGradient colors={['#fff', '#fc8b8c', '#fc8b8c']} style={{ width: "90%", borderRadius: 10 }}>
                                                <Button onPress={() => {

                                                    // this.props.navigation.navigate('ConfirmBooking', {
                                                    //     beauticianData: this.state.profileData,
                                                    //     selectedSlot: this.state.selectedSlot,
                                                    //     cart: this.state.cart,
                                                    //     selectdate: this.state.selectdate,
                                                    //     note: this.state.note
                                                    // })


                                                    if (this.state.selectdate == undefined) {

                                                        this.props.navigation.navigate('ConfirmBooking', {
                                                            beauticianData: this.state.profileData,
                                                            selectedSlot: this.state.selectedSlot,
                                                            cart: this.state.cart,
                                                            selectdate: moment(new Date()).format("MM-DD-YYYY")
                                                        })

                                                        console.log('EMPTY DATE', moment().toDate())

                                                    } else {
                                                        this.props.navigation.navigate('ConfirmBooking', {
                                                            beauticianData: this.state.profileData,
                                                            selectedSlot: this.state.selectedSlot,
                                                            cart: this.state.cart,
                                                            selectdate: this.state.selectdate

                                                        })

                                                        console.log('IS DATE')

                                                    }



                                                }} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }}>
                                                    <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "Poppins-Regular_0", fontSize: 15 }}>
                                                        Book Now
</Text>
                                                </Button>
                                            </LinearGradient>
                                        </View> */}



                                        <View style={{alignContent: "center", alignItems: "center", marginTop: "15%" }}>
                                            <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }} colors={['#F9B1B0', '#FD8788', '#FF7173']} style={{ width: "90%", borderRadius: 10 }}>
                                                <TouchableOpacity onPress={() => {

                                                    // this.props.navigation.navigate('ConfirmBooking', {
                                                    //     beauticianData: this.state.profileData,
                                                    //     selectedSlot: this.state.selectedSlot,
                                                    //     cart: this.state.cart,
                                                    //     selectdate: this.state.selectdate,
                                                    //     note: this.state.note
                                                    // })


                                                    if (this.state.selectdate == undefined) {
                                                        var formate = moment(new Date()).format("YYYY/MM/DD")
                                                        this.props.navigation.navigate('ConfirmBooking', {
                                                            beauticianData: this.state.profileData,
                                                            selectedSlot: this.state.selectedSlot,
                                                            cart: this.state.cart,
                                                            selectdate: formate
                                                        })

                                                        console.log('undefined DATE', formate)

                                                    } else {
                                                        this.props.navigation.navigate('ConfirmBooking', {
                                                            beauticianData: this.state.profileData,
                                                            selectedSlot: this.state.selectedSlot,
                                                            cart: this.state.cart,
                                                            selectdate: this.state.selectdate

                                                        })

                                                        console.log('IS DATE', this.state.selectdate)

                                                    }



                                                }} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }} style={{ flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "transparent", opacity: 0.7, borderRadius: 10 }}>
                                                    <Text style={{ alignSelf: "center", textAlignVertical: "center", color: "#fff", fontFamily: "Poppins-Regular_0", fontSize: 15, paddingVertical: 15 , fontWeight:'bold'}}>
                                                        Book Now
                    </Text>
                                                </TouchableOpacity>
                                            </LinearGradient>
                                        </View>
                                    </Card>







                                }



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
