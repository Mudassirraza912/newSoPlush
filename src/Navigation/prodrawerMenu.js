import React, { Component } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View, Image
  , ImageBackground,
  ScrollView,
  Alert,
  AsyncStorage
} from "react-native";

import { NavigationActions } from "react-navigation";
import { Container, Header, Body, Content } from 'native-base'
import { Avatar, Button, Icon } from "react-native-elements"
import backgound from "../background";
// import { LinearGradient } from 'expo-linear-gradient';
const defaultImage = require('../../assets/default.png')
class DrawerMenu extends Component {


  static navigationOptions = () => ({
    headerMode: 'none',
    headerVisible: false,
    header: null,
  })


  render() {
    console.log(`https://hnhtechsolutions.com/hassan/soplush/profile_pics/${this.props.screenProps.profileData.profile_pic}`)
    return (

      <View style={{ flex: 1, justifyContent: "center", alignContent: "center", height: '100%', backgroundColor: 'rgba(246, 232, 232, 0.5)' }}>
        <Header style={{ height: 100, backgroundColor: '#F6E8E8', marginBottom: '0%', borderBottomColor: 'rgba(246, 232, 232, 0.5)', borderBottomWidth: 1, justifyContent: 'flex-start' }}>
          <TouchableOpacity onPress={() => { 
            this.props.navigation.navigate('ProProfile') 
            this.props.navigation.closeDrawer()
            }}>
            <View style={{ display: "flex", flexDirection: "row", marginTop: 20, marginRight: 25 }}>

            {this.props.screenProps.profileData.profile_pic !== "" ? 
            <View >
                <Avatar
                  overlayContainerStyle={{ backgroundColor: "#fff" }}
                  rounded
                  size="large"
                  source={{ uri: `https://hnhtechsolutions.com/hassan/soplush/profile_pics/${this.props.screenProps.profileData.profile_pic}` }}
                />

              </View> : 
              
              <View >
              <Avatar
                overlayContainerStyle={{ backgroundColor: "#fff" }}
                rounded
                size="large"
                source={defaultImage}
              />

            </View>
            }
              <View style={{ marginTop: 25, marginLeft: 20 }}>
                <Text style={{ fontFamily: "Poppins-Regular_0", fontSize: 15, fontWeight:'bold' }}>
                  {this.props.screenProps.profileData.username}
                </Text>

                {/* <Avatar
                        overlayContainerStyle={{backgroundColor:"#fff"}}
                        rounded
                        size="large"
                        source={{uri:`https://cdn.vox-cdn.com/thumbor/XtwGXC-0GhXcDXiM0B0rjGAAxZE=/148x0:1768x1080/1200x800/filters:focal(148x0:1768x1080)/cdn.vox-cdn.com/uploads/chorus_image/image/45905674/3042430-poster-p-1-hello-barbie-talking-toy-toytalk.0.0.jpg`}}
                    />
  
                  </View> 
                <View style={{marginTop:25, marginLeft:20}}>
                    <Text style={{fontFamily:"Poppins-Regular_0", fontSize: 25 }}>
                      John Doe
                    </Text> */}

              </View>

            </View>
          </TouchableOpacity>
        </Header>



        {/* <Content style={{ backgroundColor: '#fff', marginTop: 20,  height: "100%", }}> */}

        <ImageBackground source={require('../../assets/inner.png')} style={{ height: "100%", width: "100%", flex: 1, backgroundColor: "#fff" }} resizeMethod="auto">
          <ScrollView>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                this.props.navigation.navigate('Main')
                this.props.navigation.closeDrawer()
              }}
            >

              <View style={{ marginLeft: 10, width: 30 }}>
                <Image source={require('../../assets/home.png')} style={{ height: 20, width: 20 }} />
              </View>

              <View style={{ marginLeft: 20 }}>
                <Text style={styles.menuItemText}>Home</Text>
              </View>


            </TouchableOpacity>




            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                this.props.navigation.navigate('ProProfile')
                this.props.navigation.closeDrawer()
              }
              }
            >
              <View style={{ marginLeft: 10, width: 30 }}>
                <Image source={require('../../assets/user.png')} style={{ height: 20, width: 20 }} />
              </View>

              <View style={{ marginLeft: 20 }}>
                <Text style={styles.menuItemText}>My Profile</Text>
              </View>



            </TouchableOpacity>





            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                this.props.navigation.navigate('Notification')
                this.props.navigation.closeDrawer()
              }
              }
            >
              <View style={{ marginLeft: 10, width: 30 }}>
                <Image source={require('../../assets/notification.png')} style={{ height: 20, width: 20 }} />
              </View>

              <View style={{ marginLeft: 20 }}>
                <Text style={styles.menuItemText}>Notifications</Text>
              </View>



            </TouchableOpacity>













            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                this.props.navigation.navigate('ServingHistory')
                this.props.navigation.closeDrawer()
              }
              }
            >
              <View style={{ marginLeft: 10, width: 30 }}>
                <Image source={require('../../assets/history.png')} style={{ height: 20, width: 20 }} />
              </View>

              <View style={{ marginLeft: 20 }}>
                <Text style={styles.menuItemText}>Serving History</Text>
              </View>



            </TouchableOpacity>







            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                this.props.navigation.navigate('AddService')
                this.props.navigation.closeDrawer()
              }
              }
            >
              <View style={{ marginLeft: 10, width: 30 }}>
                <Image source={require('../../assets/more.png')} style={{ height: 20, width: 20 }} />
              </View>

              <View style={{ marginLeft: 20 }}>
                <Text style={styles.menuItemText}>Add Service</Text>
              </View>



            </TouchableOpacity>






            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                this.props.navigation.navigate('About')
                this.props.navigation.closeDrawer()
              }}

            >
              <View style={{ marginLeft: 10, width: 30 }}>
                <Image source={require('../../assets/info1.png')} style={{ height: 20, width: 20 }} />
              </View>

              <View style={{ marginLeft: 20 }}>
                <Text style={styles.menuItemText}>About App</Text>
              </View>



            </TouchableOpacity>





            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                this.props.navigation.navigate('ViewBooking')
                this.props.navigation.closeDrawer()
              }}

            >
              <View style={{ marginLeft: 10, width: 30 }}>
                <Image source={require('../../assets/document.png')} style={{ height: 20, width: 20 }} />
              </View>

              <View style={{ marginLeft: 20 }}>
                <Text style={styles.menuItemText}>View Booking</Text>
              </View>



            </TouchableOpacity>




            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                this.props.navigation.navigate('PassChange')
                this.props.navigation.closeDrawer()
              }}

            >
              <View style={{ marginLeft: 10, width: 30 }}>
                <Image source={require('../../assets/lockopen.png')} style={{ height: 20, width: 20 }} />
              </View>

              <View style={{ marginLeft: 20 }}>
                <Text style={styles.menuItemText}>Change Password</Text>
              </View>



            </TouchableOpacity>




            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                Alert.alert("Alert", "Will be impelmented")
                this.props.navigation.closeDrawer()
              }}
            >
              <View style={{ marginLeft: 10, width: 30 }}>
                <Image source={require('../../assets/trans.png')} style={{ height: 20, width: 20 }} />
              </View>

              <View style={{ marginLeft: 20 }}>
                <Text style={styles.menuItemText}> عربي - English </Text>
              </View>



            </TouchableOpacity>







            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                this.props.navigation.navigate('Term')
                this.props.navigation.closeDrawer()
              }}

            >
              <View style={{ marginLeft: 10, width: 30 }}>
                <Image source={require('../../assets/accept.png')} style={{ height: 20, width: 20 }} />
              </View>

              <View style={{ marginLeft: 20 }}>
                <Text style={styles.menuItemText}>Terms & Conditions</Text>
              </View>



            </TouchableOpacity>



            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                Alert.alert(
                  'Logout',
                  'Are you sure you want to Logout?',
                  [
                    {
                      text: 'No',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {
                      text: 'yes',
                      onPress: () => {
                        AsyncStorage.removeItem('User')
                        this.props.navigation.navigate('ProLogin')
                        this.props.navigation.closeDrawer()
                      }
                      ,
                      style: 'cancel',
                    },
                    { cancelable: false }
                  ]
                )

                // this.props.navigation.navigate('ProLogin')

              }}

            >
              <View style={{ marginLeft: 10, width: 30 }}>
                <Image source={require('../../assets/logout.png')} style={{ height: 20, width: 20 }} />
              </View>

              <View style={{ marginLeft: 20 }}>
                <Text style={styles.menuItemText}>Logout</Text>
              </View>



            </TouchableOpacity>


          </ScrollView>

        </ImageBackground>

        {/* </Content> */}
      </View>
    );



  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100
  },
  menuItem: {
    padding: 10,
    // justifyContent: "center",
    // backgroundColor: "rgba(12, 12, 12, 0.2)",
    marginBottom: 2,
    display: "flex",
    flexDirection: "row"
  },
  menuItemText: {
    fontSize: 15,
    top: 2,
    fontFamily: "Poppins-Regular_0"
  }
});

DrawerMenu.defaultProps = {};

DrawerMenu.propTypes = {};

export default DrawerMenu;