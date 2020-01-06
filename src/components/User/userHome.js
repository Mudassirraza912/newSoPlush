import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, FlatList, StyleSheet, TextInput, Keyboard, BackHandler, Alert } from 'react-native'
// import {  } from 'react-native-gesture-handler';
// import { Container, Header, Content, Item, Input, Icon, Label, Form, Button, Body } from 'native-base';
import { Avatar, Header, Icon } from 'react-native-elements'
import Cover1 from '../../../assets/Cover1.png'
import Cover2 from '../../../assets/Cover2.png'
import Cover3 from '../../../assets/Cover3.png'
import Cover4 from '../../../assets/Cover4.png'
import { withNavigationFocus } from 'react-navigation'

const { width, height } = Dimensions.get("window")

 class UserHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigate: "PersonalService",
            // items: [
            //     {category_name:"Bridal", image:Cover1},
            //     {category_name:"Personal", image:Cover2},
            //     {category_name:"Television", image:Cover3},
            //     {category_name:"Bridal", image:Cover4},
            // ],
            profileData: this.props.screenProps.profileData,
            plush: [],
            SoPlush: [],
            items: [],
            searchText: '',
            categories: [],
            data: [],
            focusOn: false,
            offFocus: true,
            text: ''
        }
    }

    static navigationOptions = () => ({
        // headerBackTitle: null,
        title: "HOME",
        headerTitleStyle: {
            fontFamily: "Poppins-Regular_0",
            // fontSize: 30
        },
        headerMode: 'none',
        headerVisible: false,
        header: null,

    })


    componentWillMount() {
        console.log("this.props.screenProps.profileData", this.props.screenProps.profileData)
    }

    componentDidMount() {
        const { profileData, categories } = this.state
        console.log("user_id", profileData.user_id)
        const formData = new FormData();
        formData.append("id", profileData.user_id),


            // console.log("email, password, address, name, phoneNo, profilePic", email, password)


            fetch("https://hnhtechsolutions.com/hassan/soplush/category/category.php?action=select_category", {
                method: 'GET',
                // dataType: "json",
                // headers: {
                //     'Accept' : 'application/json',
                //     'Content-Type': 'multipart/form-data'
                // },
                // body: ""
            }).then(res => res.json())
                .then(resp => {
                    console.log(JSON.stringify(resp))
                    var successData = resp

                    if (successData.status === true) {
                        // console.log("successData.data[0].role_id === 3", successData.data[0].role_id === 3)
                        successData.data.map((value) => {
                            categories.push(value.category_name)
                        })
                        this.setState({
                            items: successData.data,
                            data: successData.data,
                            categories,
                        })
                        //   console.log("Category PRO", successData)
                        // this.props.navigation.navigate("Main")

                    } else {
                        Alert.alert("Alert",successData.message)
                    }
                })
                .catch(err => console.log("Category err err", err));
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton = () => {
        if (this.props.isFocused) {
            Alert.alert(
                'Exit App',
                'Are you sure you want to exit?',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel'
                    },
                    {
                        text: 'OK',
                        onPress: () => BackHandler.exitApp()
                    }
                ],
                {
                    cancelable: false
                }
            );
            return true;
        }
    };

    navigatingToOther = (item) => {

        const formData = new FormData();
        formData.append("id", item.category_id),
            // this.props.navigation.navigate(this.state.navigate)
            // this.props.navigation.navigate(this.state.navigate, {
            //     category_id: item.category_id,
            //     image: `https://hnhtechsolutions.com/hassan/soplush/images/${item.image}`,
            //     service: successData.data

            // })
            // console.log("SUCCESS PRO", successData)
            //   Alert.alert("Login successful")
            // this.props.navigation.navigate("Main")

            fetch("https://hnhtechsolutions.com/hassan/soplush/service/service.php?action=select_service", {
                method: 'POST',
                // dataType: "json",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data'
                },
                body: formData
            }).then(res => res.json())
                .then(resp => {
                    console.log(JSON.stringify(resp))
                    var successData = resp

                    if (successData.status === true) {
                        // console.log("successData.data[0].role_id === 3", successData.data[0].role_id === 3)
                        console.log(" successData.data PRO", successData.data, item.category_name)
                        this.props.navigation.navigate(this.state.navigate, {
                            category_id: item.category_id,
                            image: `https://hnhtechsolutions.com/hassan/soplush/images/${item.image}`,
                            service: successData.data,
                            category_name: item.category_name

                        })

                        //   Alert.alert("Login successful")
                        // this.props.navigation.navigate("Main")

                    } else {
                        Alert.alert("Alert",successData.message)
                    }
                })
                .catch(err => console.log("err err err", err));



    }


    searchFilterFunction = text => {
        const { items } = this.state
        if (text !== "") {
            const newData = items.filter(item => {
                const itemData = `${item.category_name.toUpperCase()}`;

                const textData = text.toUpperCase();

                return itemData.indexOf(textData) > -1;
            });

            this.setState({ data: newData });
        } else {
            this.setState({ data: items })
        }
        this.setState({ text: text })

    };



    render() {
        console.log("this.state.catrgotiies", this.state.categories)
        const { items } = this.state
        return (
            <View style={{ flex: 1, height: '100%', width:'100%' , marginTop: -80 }}>

                <Header
                    containerStyle={{ marginTop: 60, backgroundColor: "rgb(255,239,241)" }}
                    placement="left"
                    leftComponent={
                    <TouchableOpacity onPress={() => {Keyboard.dismiss(), this.props.navigation.toggleDrawer() }}>
                    <Icon name="menu" color="#000" />
                    </TouchableOpacity>}
                    centerComponent={
                        <View style={{ alignContent: "center", alignItems: "center", alignSelf: "center" }}>
                           <Text style={{alignSelf:'center',fontFamily: "Poppins-Regular_0",fontSize:20, fontWeight: "bold"}}>HOME</Text>

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
                                        value={this.state.text}
                                        placeholder="Search"
                                        onChangeText={(text) => this.searchFilterFunction(text)}
                                        onBlur={() => { this.setState({ focusOn: false }) }}
                                        autoFocus={true}
                                        ref={x => this.input = x}
                                    />
                                    <Icon style={{
                                        color: 'gray',
                                        justifyContent: 'flex-end'
                                    }} type="EvilIcons" name="search" size={24} />
                                </View> */}

                            {/* } */}
                        </View>
                    }
                    rightComponent={
                        <View style={{ flexDirection: "row" }}>
                            {/* {!this.state.focusOn && <TouchableOpacity style={{ right: 20 }} onPress={() => {
                                this.setState({ focusOn: true })
                                //  this.input.focus()
                            }}>
                                <Icon style={{
                                    color: 'gray',
                                    justifyContent: 'flex-end'
                                }} type="EvilIcons" name="search" size={24} />
                            </TouchableOpacity>} */}

                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Notification") }}>
                                <Image source={require('../../../assets/notificationheader.png')} style={{ height: 20, width: 20 }} />
                            </TouchableOpacity>
                        </View>}
                />


                <View style={{ flex: 1, backgroundColor: "rgb(255,239,241)", justifyContent: "center" }}>



                    <ScrollView >

                        <View style={{ alignSelf: "center", alignContent: "center", alignItems: "center", backgroundColor: "#fff", width: '100%' }}>
                            <Image source={require('../../../assets/Cover.png')} style={{ opacity: 2, width: '100%' }} />
                        </View>

                        <View style={{ width: width, marginVertical: "2%", marginLeft: "5%" }}>
                            <Text style={{ fontSize: 16, fontFamily: "Poppins-Regular_0", fontWeight: "bold" }}>SERVICES</Text>
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

                    }}>
                        <TextInput style={{
                            height: 45,
                            flex: 1,
                        }}
                            value={this.state.search}
                            placeholder="Search"
                            onChangeText={(text) =>  this.searchFilterFunction(text)}
                        />
                        <Icon style={{
                            color: 'gray',
                            justifyContent: 'flex-end'
                        }} type="EvilIcons" name="search" size={24} />
                    </View> */}



                        <View style={{ flex: 1, width: "100%", height: "100%", alignItems: 'center', marginLeft:5, }}>
                            <FlatList style={{ flex: 1 }}
                                data={this.state.data}
                                renderItem={({ item }) => {
                                    console.log("FlatList FlatList", `https://hnhtechsolutions.com/hassan/soplush/images/${item.image}`)
                                    return (<View style={{ flexDirection: "column", marginVertical: 6, height: '90%', width: "50%", alignContent: "center", alignItems: "center", alignSelf: "center", }}>
                                        <TouchableOpacity style={{width:'100%'}} onPress={() => this.navigatingToOther(item)}>
                                            <Image style={styles.imageThumbnail} source={{ uri: `https://hnhtechsolutions.com/hassan/soplush/images/${item.image}` }} />
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 17, color: "#000", opacity: 0.6, fontFamily: "Poppins-Regular_0", textTransform: 'capitalize', fontWeight:'900', marginVertical:5 }}>{item.category_name}</Text>
                                    </View>
                                    )
                                }
                                }
                                //Setting the number of column
                                numColumns={2}
                                key={2}
                                keyExtractor={(item, index) => index}
                            />
                        </View>




                    </ScrollView>
                </View>
            </View>
        )
    }
}





const styles = StyleSheet.create({
    btnContainer: {
        flexDirection: "row",
        // justifyContent:'space-between',
        alignContent: "center",



        width: "60%",
        right: "3%"

    },
    wordBold: {
        fontWeight: 'bold',
        color: 'black',
        alignContent: "center",
        alignItems: "center"

    },
    btnContainers: {
        borderWidth: 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',


        width: "30%"
    },
    imageStyle:
    {
        width: 150,
        height: 150,



        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        fontSize: 40



    },
    imageThumbnail: {
        //   justifyContent: 'center',
        //   alignItems: 'center',
        height: 160,
        width: "93%",
        borderRadius: 5,
        
    },

})


export default withNavigationFocus(UserHome)