// import React, { Component } from "react";
// import { AppRegistry } from "react-native";
import React from 'react';
import { Container, Header, Content, Item, Input, Icon, Label, Form, Body } from 'native-base';
import {Avatar, Button} from 'react-native-elements'
import {View, Text, TouchableOpacity,} from 'react-native'

import UserLogin from '../components/Authentication/userLogin'
import UserSignUp from '../components/Authentication/userSignup'
import ForgotPassword from '../components/Authentication/forgotPassword'
// import Notification from '../components/Pro/notification'

import { createStackNavigator, createDrawerNavigator, createAppContainer, DrawerItems } from "react-navigation";
import PassChange from '../components/User/passChange'
import About from '../components/User/about'
import Term from  '../components/User/termCondition'

import UserHome from '../components/User/userHome'
import UserNotification from '../components/User/userNotification'
import UserProfile from '../components/User/userProfile'
import UserAppointment from '../components/User/userAppointment'
import UserDrawer from '../UserNavigator/userDrawer'
import BookingHistory from '../components/User/bookingHIstory'
import PersonalService from '../components/User/personalService'
import SelectBeautician from '../components/User/selectbeauticianist'
import SelectedProfile from '../components/User/selectedProfile'
import ConfirmBooking from '../components/User/confirmbooking'
import Payment from '../components/User/payment'
import Feedback from '../components/User/feedback'
import LoyalityPoints from '../components/User/loyality-points'
import EditUserProfile from '../components/User/useredit'
const Drawer = createDrawerNavigator(
    {

        UserHome: { 
            screen: UserHome,
            navigationOptions: () => ({
                title:"HOME",
                headerTitleStyle: {
                    fontFamily:"Poppins-Regular_0",
                    // fontSize:30
                },
                header:null
        }),
         },


         UserNotification: { 
            screen: UserNotification,
            navigationOptions: () => ({
                title:"User Notification",
                headerTitleStyle: {
                    fontFamily:"Poppins-Regular_0",
                    // fontSize:30
                },
                header:null
        }),
         },


         UserProfile: { 
            screen: UserProfile,
            navigationOptions: () => ({
                title:"User Profile",
                headerTitleStyle: {
                    fontFamily:"Poppins-Regular_0",
                    // fontSize:30
                },
                header:null
        }),
         },


         UserAppointment: { 
            screen: UserAppointment,
            navigationOptions: () => ({
                title:"User Profile",
                headerTitleStyle: {
                    fontFamily:"Poppins-Regular_0",
                    // fontSize:30
                },
                header:null
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
      

         Notification: { 
            screen: UserNotification,
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



         PersonalService: { 
            screen: PersonalService,
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


         EditUserProfile: { 
            screen: EditUserProfile,
            navigationOptions: () => ({
                title:"Edit Profilw",
                headerTitleStyle: {
                    fontFamily:"Poppins-Regular_0",
                    // fontSize:30
                },
                headerMode: 'none',
                headerVisible: false,
                header: null,
        }),
         },


         LoyalityPoints: { 
            screen: LoyalityPoints,
            navigationOptions: () => ({
                title:"Loyality Points",
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
        contentComponent: UserDrawer,
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

    

    // UserLogin: {
    //     screen: UserLogin,
    //     headerMode: 'none',
    // navigationOptions: {
    //     headerVisible: false,
    // }
    //     // navigationOptions: () => ({
    //     //     headerBackTitle: null,
    //     //     headerStyle: {
    //     //         backgroundColor: "#f55f2a"
    //     //     },
    //     // }),
    // },

    // // UserHome: {screen:UserHome,
    
    // //     headerMode: 'none',
    // //     navigationOptions: {
    // //         headerVisible: false,
    // //     }
    // // },

    // UserSignUp: {
    //     screen: UserSignUp,
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

    UserHome: {screen: Drawer,
        headerMode: 'none',
        navigationOptions: {
            headerMode: 'none',
            headerVisible: false,
            header: null,
        }
    },


    SelectBeautician: {
        screen: SelectBeautician,
        headerMode: 'none',
        navigationOptions: {
            headerMode: 'none',
            headerVisible: false,
            header: null,
        }
    },



    SelectedProfile: {
        screen: SelectedProfile,
        headerMode: 'none',
        navigationOptions: {
            headerMode: 'none',
            headerVisible: false,
            header: null,
        }
    },


    ConfirmBooking: {
        screen: ConfirmBooking,
        headerMode: 'none',
        navigationOptions: {
            headerMode: 'none',
            headerVisible: false,
            header: null,
        }
    },


    Payment: {
        screen: Payment,
        headerMode: 'none',
        navigationOptions: {
            headerMode: 'none',
            headerVisible: false,
            header: null,
        }
    },

    Feedback: {
        screen: Feedback,
        headerMode: 'none',
        navigationOptions: {
            headerMode: 'none',
            headerVisible: false,
            header: null,
        }
    },
   
   
}, {headerLayoutPreset: 'center'});



const UserNavigator = createAppContainer(MainScreenNavigator);
export default UserNavigator;