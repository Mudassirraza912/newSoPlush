// import React, { Component } from "react";
// import { AppRegistry } from "react-native";
import React from 'react';
import { Container, Header, Content, Item, Input, Icon, Label, Form, Body } from 'native-base';
import {Avatar, Button} from 'react-native-elements'
import {View, Text, TouchableOpacity,} from 'react-native'

import Splash from '../components/Splash/splash'
import ProLogin from '../components/Authentication/proLogin'
import ProSignUp from '../components/Authentication/proSignup'
import ForgotPassword from '../components/Authentication/forgotPassword'
import ProHome from '../components/Pro/proHome'
import ServiceList from '../components/Pro/serviceList'
import BookingReq from '../components/Pro/bookingReq'
import BookingDetail from '../components/Pro/bookingDetail'
import DrawerMenu from '../Navigation/prodrawerMenu'
import Notification from '../components/Pro/notification'
import ProProfile from '../components/Pro/profile'
import EditProProfile from '../components/Pro/editProfile'
import AddService from '../components/Pro/addService'
import ViewBooking from '../components/Pro/viewBooking'

import { createStackNavigator, createDrawerNavigator, createAppContainer, DrawerItems, createSwitchNavigator } from "react-navigation";
import PassChange from '../components/Pro/passChange'
import ServingHistory from '../components/Pro/servingHistory'
import About from '../components/Pro/about'
import Term from  '../components/Pro/termCondition'
import BookingHistory from '../components/Pro/bookingHIstory'
import UserNavigator from '../UserNavigator/userNavigator'
import Home from '../components/Home/home'
import Walkthrogh from '../components/Walk through/walkthrogh';
import UserLogin from '../components/Authentication/userLogin';
import UserSignUp from '../components/Authentication/userSignup';
import AddServiceDetails  from '../components/Pro/addSevicesDetails'
const Drawer = createDrawerNavigator(
    {


        Main: { 
            screen: ProHome,
            navigationOptions: () => ({
                title:"HOME",
                headerTitleStyle: {
                    fontFamily:"Poppins-Regular_0",
                    // fontSize:30
                },
                header:null
        }),
         },

         ServiceList: { 
            screen: ServiceList,
            navigationOptions: () => ({
                title:"Service List",
                headerTitleStyle: {
                    fontFamily:"Poppins-Regular_0",
                    // fontSize:30
                },
                headerMode: 'none',
                headerVisible: false,
                header: null,
        }),
         },


         BookingReq: { 
            screen: BookingReq,
            navigationOptions: () => ({
                title:"Booking Request",
                headerTitleStyle: {
                    fontFamily:"Poppins-Regular_0",
                    // fontSize:30
                },
                headerMode: 'none',
                headerVisible: false,
                header: null,
        }),
         },

         BookingDetail: { 
            screen: BookingDetail,
            navigationOptions: () => ({
                title:"Booking Request",
                headerTitleStyle: {
                    fontFamily:"Poppins-Regular_0",
                    // fontSize:30
                },
                headerMode: 'none',
                headerVisible: false,
                header: null,
        }),
         },

         Notification: { 
            screen: Notification,
            navigationOptions: () => ({
                title:"Booking Request",
                headerTitleStyle: {
                    fontFamily:"Poppins-Regular_0",
                    // fontSize:30
                },
                headerMode: 'none',
                headerVisible: false,
                header: null,
        }),
         },


         ProProfile: { 
            screen: ProProfile,
            navigationOptions: () => ({
                title:"Booking Request",
                headerTitleStyle: {
                    fontFamily:"Poppins-Regular_0",
                    // fontSize:30
                },
                headerMode: 'none',
                headerVisible: false,
                header: null,
        }),
         },


         EditProProfile: { 
            screen: EditProProfile,
            navigationOptions: () => ({
                title:"Booking Request",
                headerTitleStyle: {
                    fontFamily:"Poppins-Regular_0",
                    // fontSize:30
                },
                headerMode: 'none',
                headerVisible: false,
                header: null,
        }),
         },


         AddService: { 
            screen: AddService,
            navigationOptions: () => ({
                title:"Booking Request",
                headerTitleStyle: {
                    fontFamily:"Poppins-Regular_0",
                    // fontSize:30
                },
                headerMode: 'none',
                headerVisible: false,
                header: null,
        }),
         },


         ViewBooking: { 
            screen: ViewBooking,
            navigationOptions: () => ({
                title:"Booking Request",
                headerTitleStyle: {
                    fontFamily:"Poppins-Regular_0",
                    // fontSize:30
                },
                headerMode: 'none',
                headerVisible: false,
                header: null,
        }),
         },


         PassChange: { 
            screen: PassChange,
            navigationOptions: () => ({
                title:"Booking Request",
                headerTitleStyle: {
                    fontFamily:"Poppins-Regular_0",
                    // fontSize:30
                },
                headerMode: 'none',
                headerVisible: false,
                header: null,
        }),
         },


         ServingHistory: { 
            screen: ServingHistory,
            navigationOptions: () => ({
                title:"Booking Request",
                headerTitleStyle: {
                    fontFamily:"Poppins-Regular_0",
                    // fontSize:30
                },
                headerMode: 'none',
                headerVisible: false,
                header: null,
        }),
         },


         About: { 
            screen: About,
            navigationOptions: () => ({
                title:"About",
                headerTitleStyle: {
                    fontFamily:"Poppins-Regular_0",
                    // fontSize:30
                },
                headerMode: 'none',
                headerVisible: false,
                header: null,
        }),
         },


         Term: { 
            screen: Term,
            navigationOptions: () => ({
                title:"About",
                headerTitleStyle: {
                    fontFamily:"Poppins-Regular_0",
                    // fontSize:30
                },
                headerMode: 'none',
                headerVisible: false,
                header: null,
        }),
         },

        
         BookingHistory: { 
            screen: BookingHistory,
            navigationOptions: () => ({
                title:"Booking History",
                headerTitleStyle: {
                    fontFamily:"Poppins-Regular_0",
                    // fontSize:30
                },
                headerMode: 'none',
                headerVisible: false,
                header: null,
        }),
         },

    },
    {
        // initialRouteName: 'Main',
        contentComponent: DrawerMenu,
        drawerBackgroundColor: '#f5f5dc',
        contentOptions: {
            activeBackgroundColor: 'lightgray',
            activeTintColor: 'black',
            style: {
                borderRightColor: 'orange'
            },
            inactiveTintColor: 'black'
        },
        // resetOnBlur:true,
        drawerType:"slide",
        overlayColor:"transparent",
        // minSwipeDistance: 0,
        drawerPosition: 'left',
        drawerLockMode: "unlocked"
        
    }
);

const MainScreenNavigator = createStackNavigator({
  

    // ProLogin: {
    //     screen: ProLogin,
    //     // navigationOptions: () => ({
    //     //     headerBackTitle: null,
    //     //     headerStyle: {
    //     //         backgroundColor: "#f55f2a"
    //     //     },
    //     // }),
    //     headerMode: 'none',
    // navigationOptions: {
    //     headerVisible: false,
    // }
    // },


    // ProSignUp: {
    //     screen: ProSignUp,
    //     // navigationOptions: () => ({
    //     //     headerBackTitle: null,
    //     //     headerStyle: {
    //     //         backgroundColor: "#f55f2a"
    //     //     },
    //     // }),
    //     headerMode: 'none',
    // navigationOptions: {
    //     headerVisible: false,
    // }
    // },

    // ForgotPassword: {
    //     screen: ForgotPassword,
    //     headerMode: 'none',
    // navigationOptions: {
    //     headerVisible: false,
    // }
    // },

    Main: {
        screen: Drawer,
        headerMode: 'none',
    navigationOptions: {
        headerMode: 'none',
        headerVisible: false,
        header: null,
    }
    },

    AddServiceDetails: {
        screen: AddServiceDetails,
        headerMode: 'none',
    navigationOptions: {
        headerMode: 'none',
        headerVisible: false,
        header: null,
    }
    },

    // ServiceList: {
    //     screen: ServiceList,
    //     headerMode: 'none',
    // navigationOptions: {
    //     headerVisible: false,
    //     headerTitle:"Service"
    // }
    // },

   
}, {headerLayoutPreset: 'center'});


const AuthStack = createStackNavigator({
    
    Home: Home,
    UserLogin: {
        screen: UserLogin,
        headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
        // navigationOptions: () => ({
        //     headerBackTitle: null,
        //     headerStyle: {
        //         backgroundColor: "#f55f2a"
        //     },
        // }),
    },

    // UserHome: {screen:UserHome,
    
    //     headerMode: 'none',
    //     navigationOptions: {
    //         headerVisible: false,
    //     }
    // },

    UserSignUp: {
        screen: UserSignUp,
        // navigationOptions: () => ({
        //     headerBackTitle: null,
        //     headerStyle: {
        //         backgroundColor: "#f55f2a"
        //     },
        // }),
        headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
    },


    ForgotPassword: {
        screen: ForgotPassword,
        headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
    },

    ProLogin: {
        screen: ProLogin,
        // navigationOptions: () => ({
        //     headerBackTitle: null,
        //     headerStyle: {
        //         backgroundColor: "#f55f2a"
        //     },
        // }),
        headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
    },


    ProSignUp: {
        screen: ProSignUp,
        // navigationOptions: () => ({
        //     headerBackTitle: null,
        //     headerStyle: {
        //         backgroundColor: "#f55f2a"
        //     },
        // }),
        headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
    },
})



const SwitchNavigator = createSwitchNavigator({
    Splash: Splash,
    WalkThrough: Walkthrogh,
    Authentication: {
        screen: AuthStack
    },
    // Home: {
    //     screen: Home
    // },
    ProNavigator: {
        screen: MainScreenNavigator
    },
    UserNavigator: {
        screen: UserNavigator
    },
})



const Navigator = createAppContainer(SwitchNavigator);

export default Navigator;