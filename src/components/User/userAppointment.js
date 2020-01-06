import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView, Picker, PickerItem, Alert } from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Right, Button, Item, Input, Label, Form, Icon } from 'native-base';
import { Avatar, Header, Card, Divider } from 'react-native-elements'
// import  CalendarPicker from 'react-native-calendar-picker';
// import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
// import Calendar from 'react-native-calendar'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import moment from 'moment'

const { width, height } = Dimensions.get("window")

const customStyle = {
  hasEventCircle: {
    backgroundColor: 'blue',
  },
  hasEventDaySelectedCircle: {
    backgroundColor: 'red',
  },
}

export default class UserAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customDates:{
        '2019-11-16': { selected: true, selectedColor: '#FFB9BA' },
        '2019-11-17': { selected: true, selectedColor: '#FFB9BA' },
        
      }
    }

  }


  static navigationOptions = () => ({
    headerMode: 'none',
    headerVisible: false,
    header: null,
    drawerLockMode: 'locked-closed'
  })


//   componentDidMount = () => {
// this.calendar.cu
//   }


componentDidMount() {
  const { customDates } = this.state
  fetch(`https://hnhtechsolutions.com/hassan/soplush/user/user.php?action=get_user_bookings&user_id=${this.props.screenProps.profileData.user_id}&status=accepted`, {

          }).then(res => res.json())
              .then(resp => {
                  console.log(JSON.stringify(resp))
                  var successData = resp

                  if (successData.status === true) {
                      console.log("successData.data[0].role_id === 3", successData.data)

                      successData.data.map((value, index) => {
                        var date = moment(value.service_date).format('YYYY-MM-DD')
                        customDates[date] = { selected: true, selectedColor: '#FFB9BA' }
                        // console.log("date date date",customDates)
                        this.setState({customDates})
                      })
                      //   console.log("Category PRO", successData)
                      

             this.setState({
                 services:successData.data,
                 data:successData.data,
             })
                  

                  } else {
                      // Alert.alert("Alert",successData.message)
                      console.log("successData.message", successData.message)
                  }
              })
              .catch(err => console.log("Category err err", err));
}



  render() {
    const { customDates } = this.state
    return (
      <View style={{ flex: 1, height, width: '100%', marginTop: -80 }}>
        {/* <ImageBackground source={require('../../../assets/opacity.jpg')} style={{height:"100%", width:"100%",opacity:0.9, marginTop: 20}}>  */}


        <Header
          containerStyle={{ marginTop: 40, backgroundColor: "#fff", borderBottomColor: "#000", borderBottomWidth: 1, height: 100 }}
          placement="left"
          leftContainerStyle={{ marginTop: 10 }}
          centerContainerStyle={{ marginTop: 10 }}
          leftComponent={<Icon onPress={() => { this.props.navigation.navigate('UserHome') }} name="arrow-back" color="#000" />}
          centerComponent={<Text style={{ alignSelf: "center", fontSize: 20, fontFamily: "Poppins-Regular_0" }}>BOOK APPOINTMENT</Text>}
        />

        <Header containerStyle={{ backgroundColor: "#fff", height: 60, width: '100%' }}
          placement="left">
          <View style={{ display: "flex", flexDirection: "row", marginTop: -20, alignItems: 'center', alignContent: 'center', width: '100%' }}>

            <View style={{ display: "flex", flexDirection: "column", borderRightWidth: 1, borderRightColor: "#000", height: 35, width: "25%", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() =>
                Alert.alert("Alert","Will be impelmented")
              }>
                <Image source={require('../../../assets/envelope.png')} style={{ height: 22, width: 22 }} />
                {/* <Icon name="call" /> */}
                <Text>
                  Email
                                          </Text>
              </TouchableOpacity>
            </View>

            <View style={{ display: "flex", flexDirection: "column", borderRightWidth: 1, borderRightColor: "#000", height: 35, width: "25%", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() =>
                Alert.alert("Alert","Will be impelmented")
              } >
                <Image source={require('../../../assets/phone-call.png')} style={{ height: 22, width: 22 }} />
                {/* <Icon name="call" /> */}
                <Text>
                  Call Us
                                          </Text>
              </TouchableOpacity>
            </View>


            <View style={{ display: "flex", flexDirection: "column", borderRightWidth: 1, borderRightColor: "#000", height: 35, width: "25%", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => { this.props.navigation.navigate('BookingHistory') }}>
                <Image source={require('../../../assets/Apphistory.png')} style={{ height: 22, width: 22, transform: [{ rotate: "120deg" }] }} />
                {/* <Icon name="call" /> */}
                <Text>
                  History
                                          </Text>
              </TouchableOpacity>
            </View>

            <View style={{ height: 35, width: "25%", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() =>
                Alert.alert("Alert","Will be impelmented")
              }>
                {/* <Icon name="call" /> */}
                <Image source={require('../../../assets/placeholder.png')} style={{ height: 22, width: 22 }} />
                <Text>
                  Location
                                          </Text>
              </TouchableOpacity>
            </View>



          </View>
        </Header>

        <View style={{ flex: 1, width: '100%', backgroundColor: "rgba(246, 232, 232, 0.7)", justifyContent: "center" }}>

          <ScrollView style={{  }}>

            <View style={{ flex: 1, justifyContent: "center", alignContent: "center", alignItems: "center", marginTop: 20 }}>


              <Card containerStyle={{ backgroundColor: "#fff", borderRadius: 10, width: "95%", overflow: 'hidden' }}>

                <View >
                </View>

                <View >

                  {/* <CalendarPicker
                                          selectedDayColor="#fc8b8c"
                                          todayBackgroundColor="transparent"
                                          enableDateChange={true}
                                          customDatesStyles={customDatesStyles}
                                          onDateChange={(date) => {
                                              var newdate = moment(date).format("MM-DD-YYYY")
                                              console.log("JSJDGJHKSDJHSDHSDKG", moment(date).format("MM-DD-YYYY"))
                                              this.props.navigation.navigate('PersonalService', {
                                                  selectdate: newdate
                                              })
                                          }}
                                      /> */}

                  {/* 
                                          <Calendar
                                          // Collection of dates that have to be colored in a special way. Default = {}
                                          markedDates={{
                                              '2012-05-20': {textColor: 'green'},
                                              '2012-05-22': {startingDay: true, color: 'green'},
                                              '2012-05-23': {selected: true, endingDay: true, color: 'green', textColor: 'gray'},
                                              '2012-05-04': {disabled: true, startingDay: true, color: 'green', endingDay: true}
                                          }}
                                          // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
                                          // markingType={'period'}
                                          /> */}





                  {/* <Calendar
                    onDateSelect={(date) => {
                      var newdate = moment(date).format("MM-DD-YYYY")
                      // console.log("JSJDGJHKSDJHSDHSDKG",date, moment(date).format("MM-DD-YYYY"))
                      this.props.navigation.navigate('PersonalService', {
                        selectdate: date
                      })
                    }}
                    // renderDay={(days) => {
                    //   console.log(days)
                    // }}
                    nextButtonText="agay"
                    prevButtonText="peechay"
                    showEventIndicators
                    showControls
                    // scrollEnabled
                    eventDates={['2019-11-25', '2019-11-27', '2019-11-29']}
                    customStyle={{
                      // dayCircleFiller: {
                      //     backgroundColor: 'blue',
                      //   },
                      hasEventCircle: {
                        backgroundColor: '#FE7678',
                        color: "white"
                      },
                      hasEventText: {
                        color: '#fff'
                      },
                      // dayButton: {
                      //   width: "100%",
                      //   padding: "2.5%"
                      // },
                      title:{
                        color: '#FE7678',
                        fontWeight: 'bold',
                        borderBottomColor: 'gray',
                        borderBottomWidth: 0.5
                      },
                      controlButtonText:{
                        color: 'gray',
                        fontSize: 15
                      },
                      currentDayText: {
                        color: '#000'
                      },
                      dayHeading:{ 
                        fontSize: 12,
                        color: '#000',
                        fontWeight: 'bold'
                      }
                    }} /> */}


                  <Calendar
                    // Specify style for calendar container element. Default = {}
                    ref={ref => this.calendar = ref}
                    style={{
                      // borderWidth: 1,
                      // borderColor: 'gray',
                      height: 300
                    }}
                    // scrollEnabled
                    // Specify theme properties to override specific styles for calendar parts. Default = {}
                    // renderArrow={(dir) => {
                    //   if (dir === "left") {
                    //     return <Text style={{ color: 'gray' }}>peechay</Text>
                    //   } else {
                    //     return <Text style={{ color: 'gray' }}>agay</Text>
                    //   }
                    // }}
                    
                    theme={{
                      backgroundColor: '#ffffff',
                      calendarBackground: '#ffffff',
                      textSectionTitleColor: '#000',
                      selectedDayBackgroundColor: '#00adf5',
                      selectedDayTextColor: '#ffffff',
                      todayTextColor: '#000',
                      dayTextColor: '#2d4150',
                      textDisabledColor: '#d9e1e8',
                      dotColor: '#00adf5',
                      selectedDotColor: '#ffffff',
                      arrowColor: 'orange',
                      monthTextColor: '#FE7678',
                      indicatorColor: 'blue',
                      textDayFontFamily: '',
                      textMonthFontFamily: 'Poppins-Regular_0',
                      textDayHeaderFontFamily: 'Poppins-Regular_0',
                      textDayFontWeight: '300',
                      textMonthFontWeight: 'bold',
                      textDayHeaderFontWeight: 'bold',
                      textDayFontSize: 14,
                      textMonthFontSize: 15,
                      textDayHeaderFontSize: 14,
                      arrowStyle: {
                        justifyContent: 'flex-end'
                      },
                      
                    }}
                    markedDates={customDates}

                  />

                </View>

                <View style={{ marginTop: '10%' }}>
                  <View style={{ flexDirection: "row", justifyContent: 'space-between', width: '100%', paddingHorizontal: 15 }}>

                    <View style={{ width: '60%' }} >
                      <Text style={{ fontSize: 18, fontFamily: "Poppins-Regular_0", marginTop: 15, color: 'gray' }}>
                        Available Time
                                              </Text>
                    </View>

                    <View style={{ borderTopColor: "transparent", borderLeftColor: "transparent", borderRightColor: "transparent", width: '40%', }}>
                      <View style={{
                        // borderColor: 'blur',
                        // borderWidth: 1,
                        backgroundColor: "transparent",
                        // borderRadius: 4
                        borderBottomWidth: 1,
                        borderBottomColor: 'gray',
                        height:40
                        // paddingBottom: 50
                      }}>
                        <Icon
                          name="arrow-drop-down"
                          type="MaterialIcons"
                          style={{
                            color: "#FE7678",
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            fontSize: 25
                          }}
                        />
                        <Picker
                          selectedValue={this.state.language}
                          style={{ width: '100%', borderBottomColor: "#fc8b8c", borderBottomWidth: 1, backgroundColor: 'transparent', color: '#FE7678' }}
                          itemStyle={{ backgroundColor: "grey", color: "blue", fontSize: 15, borderBottomColor: "#fc8b8c", borderBottomWidth: 1 }}
                          onValueChange={(itemValue, itemIndex) =>
                            this.setState({ language: itemValue })
                          }>
                          <Picker.Item label="11:00 am" value="11:00 am" />
                          <Picker.Item label="11:30 am" value="11:30 am" />
                          <Picker.Item label="12:00 am" value="12:00 am" />
                          <Picker.Item label="01:00 pm" value="01:00 pm" />
                          <Picker.Item label="02:00 pm" value="02:00 pm" />
                        </Picker>
                      </View>
                    </View>

                  </View>
                </View>
              </Card>



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
        {/* </ImageBackground> */}
      </View>
    )
  }
}