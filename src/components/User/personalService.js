import React, { Component } from 'react';
import {
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  TextInput,
  BackHandler,
} from 'react-native';
// import {  } from 'react-native-gesture-handler';
import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  CheckBox,
  Button,
} from 'native-base';
import { Avatar, Header, Icon, Card, Divider } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { withNavigationFocus } from 'react-navigation';

const { width, height } = Dimensions.get('window');
var soplushData;
var plushData;
var filterplush = null;
var filterSoplush = null;
var category_name;

export default class PersonalService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          dateTime: 'Modnay - 14/08/2019',
          name: 'So plush',
          service: 'Hair Cutting',
          time: '02:00',
          date: '14-08-1900',
          cost: '$70',
        },
      ],
      plush: true,
      // plushData: [
      //     {service_name:"Blow out", service_cost:60, checked: false},
      //     {service_name:"Blow out w/ style", service_cost:70,checked: false},
      //     {service_name:"Braidede Style", service_cost:75, checked: false},
      //     {service_name:"Updo", service_cost:80,checked: false},
      //     {service_name:"Makeup & lashes", service_cost:90, checked: false},
      //     {service_name:"Makeup ( No lashes )", service_cost:70,checked: false},
      //     {service_name:"Airbrush Makeup & lash", service_cost:120, checked: false},
      //     {service_name:"Airbrush Makeup ( No lashes )", service_cost:105,checked: false},
      //     {service_name:"Add clip ins", service_cost:30,checked: false},

      //  ],
      //  soplushData:  [
      //     {service_name:"Blow out", service_cost:60, checked: false},
      //     {service_name:"Blow out w/ style", service_cost:70,checked: false},
      //     {service_name:"Braidede Style", service_cost:75, checked: false},
      //     {service_name:"Updo", service_cost:80,checked: false},
      //     {service_name:"Makeup & lashes", service_cost:90, checked: false},
      //     {service_name:"Makeup ( No lashes )", service_cost:70,checked: false},
      //     {service_name:"Airbrush Makeup & lash", service_cost:120, checked: false},
      //     {service_name:"Airbrush Makeup ( No lashes )", service_cost:105,checked: false},
      //     {service_name:"Add clip ins", service_cost:30,checked: false},

      //  ],
      cart: [],
      amount: 0,
      categoryId: this.props.navigation.getParam('category_id'),
      image: this.props.navigation.getParam('image'),
      selectDate: this.props.navigation.getParam('selectdate'),
      category_name: this.props.navigation.getParam('category_name'),
      faltu: true,
      focusOn: false,
      offFocus: true,
      text: '',
    };
    // this.workFunction = this.workFunction.bind(this)
  }

  // componentWillUnmount() {
  // //   console.log("WILLUNOUNT")
  // }

  // componentWillMount() {
  //         // console.log(" this.props.navigation.getParam('category_id')",  this.props.navigation.getParam('category_id'))
  // }

  static navigationOptions = () => ({
    headerMode: 'none',
    headerVisible: false,
    header: null,
    drawerLockMode: 'locked-closed'
  });

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = () => {
    // console.log('this.props.navigation.', this.props.navigation,"this.props.navigation.isFocused()", this.props.navigation.isFocused() )
    if(this.props.navigation.isFocused()) {
      // console.log('RUNNNING');
      filterSoplush = null;
      filterplush = null;
      this.props.navigation.state.params = {};
    }
    
  };

  // componentDidMount() {
  //     const {categoryId, image} = this.state
  //     console.log("user_id", categoryId)
  //         const formData = new FormData();
  //         formData.append("id",categoryId),

  //     // console.log("email, password, address, name, phoneNo, profilePic", email, password)

  // fetch("https://hnhtechsolutions.com/hassan/soplush/service/service.php?action=select_service", {
  //     method: 'POST',
  //     // dataType: "json",
  //     headers: {
  //         'Accept' : 'application/json',
  //         'Content-Type': 'multipart/form-data'
  //     },
  //     body: formData
  // }).then(res => res.json())
  // .then(resp =>{
  //   console.log(JSON.stringify(resp))
  //   var successData =  resp

  //   if(successData.status === true){
  //       // console.log("successData.data[0].role_id === 3", successData.data[0].role_id === 3)
  //       if (successData.data.length >=1) {
  //         this.setState({
  //             plushData: successData.data,
  //             soplushData: successData.data

  //         })
  //       }

  //           console.log("SUCCESS PRO", successData)
  //         //   Alert.alert("Login successful")
  //     // this.props.navigation.navigate("Main")

  //   }else {
  //     Alert.alert(successData.message)
  //   }
  // })
  // .catch(err => console.log("err err err",err));
  // }

  workFunction(val, type, ind) {
    let { plush, cart, amount } = this.state;
    console.log('val val', val);

    amount = 0;

    if (val.p_checked != 0) {
      // console.log("trueWala",type, val.p_checked, ind)
      plushData[ind].p_checked = false;
      filterplush = plushData;
      cart = [];

      plushData.map(val => {
        if (val.p_checked == 1 || val.p_checked == true) {
          console.log('trueWala LOOP');
          val.quantity = 1;
          cart.push(val);
        }
      });

      soplushData.map(val => {
        if (val.s_checked == 1 || val.s_checked == true) {
          console.log('LOOP', val.p_checked);
          val.quantity = 1;
          cart.push(val);
        }
      });

      amount = this.state.amount - val.amount;
      this.setState({ cart, amount: amount });
    } else {
      // console.log("FalseWala",type, val.checked, ind)
      plushData[ind].p_checked = true;
      filterplush = plushData;
      // console.log("OOOOOOOOOO",val)
      cart = [];

      plushData.map(val => {
        if (val.p_checked == 1 || val.p_checked == true) {
          console.log('LOOP', val.p_checked);
          val.quantity = 1;
          cart.push(val);
        }
      });

      soplushData.map(val => {
        if (val.s_checked == 1 || val.s_checked == true) {
          console.log('LOOP', val.p_checked);
          val.quantity = 1;
          cart.push(val);
        }
      });

      amount = this.state.amount + val.amount;
      this.setState({ cart, amount: amount });
    }
  }

  workFunction1(val, type, ind) {
    let { plush, cart, amount } = this.state;

    amount = 0;

    // console.log(type)

    if (val.s_checked != 0) {
      console.log('trueWala', type, val.checked, ind);
      soplushData[ind].s_checked = false;
      filterSoplush = soplushData;
      cart = [];

      plushData.map(val => {
        if (val.p_checked == 1 || val.p_checked == true) {
          console.log('LOOP', val.p_checked);
          val.quantity = 1;
          cart.push(val);
        }
      });
      soplushData.map(val => {
        if (val.s_checked == 1 || val.s_checked == true) {
          val.quantity = 1;
          cart.push(val);
        }
      });

      amount = this.state.amount - val.amount;
      this.setState({ cart, amount: amount });
    } else {
      console.log('FalseWala', type, val.checked, ind);
      soplushData[ind].s_checked = true;
      filterSoplush = soplushData;
      // console.log("!!!!!!!!!!!",val)
      cart = [];

      plushData.map(val => {
        if (val.p_checked == 1 || val.p_checked == true) {
          console.log('LOOP', val.p_checked);
          val.quantity = 1;
          cart.push(val);
        }
      });

      soplushData.map(val => {
        if (val.s_checked == 1 || val.s_checked == true) {
          val.quantity = 1;
          cart.push(val);
        }
      });

      amount = this.state.amount + val.amount;
      this.setState({ cart, amount: amount });
    }
  }

  FilterBeautician = () => {
    const { cart } = this.state;
    // console.log('FilterBeautician FilterBeautician FilterBeautician', cart)

    // this.props.navigation.navigate('SelectBeautician', {
    //     cart: this.state.cart,
    //     selectDate: this.state.selectDate
    // })

    const formData = new FormData();
    // formData.append("search", ["blow out"])

    // console.log("cart", cart)
    var filterName = [];
    cart.map(val => {
      filterName.push(val.service_name);
    });

    console.log('filterName', filterName);

    var params = JSON.stringify(filterName);
    console.log('json convert:' + params);

    formData.append('search', params);

    if (this.state.cart.length > 0) {
      fetch(
        'https://hnhtechsolutions.com/hassan/soplush/customer/search_beautcian.php?action=search_beautician',
        {
          method: 'POST',
          // dataType: "json",
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            // 'Content-Type': 'application/json'
          },
          body: formData,
        }
      )
        .then(res => res.json())
        .then(resp => {
          //   console.log(JSON.stringify(resp))
          var successData = resp;

          if (successData.status === true) {
            // console.log("successData.data[0].role_id === 3", successData.data[0].role_id === 3)
            console.log(
              ' successData.data SEARCH BEAUTICIAN',
              this.props.navigation.getParam('image')
            );

            //   Alert.alert("Login successful")
         
            filterSoplush = null;
            filterplush = null;
            this.props.navigation.navigate('SelectBeautician', {
            users: successData.data,
            cart: this.state.cart,
            category_id: this.props.navigation.getParam('category_id'),
            image: this.props.navigation.getParam('image'),
            service: this.props.navigation.getParam('service'),
            category_name: this.props.navigation.getParam('category_name')
            });
            // filterSoplush = null;
            // filterplush = null;
            // this.props.navigation.state.params = {};
          } else {
            console.log('Else', successData);
            Alert.alert('Alert', successData.message);
          }
        })
        .catch(err => console.log('err err SEARCH', err));
    } else {
      Alert.alert('Alert', 'Please select services');
    }
  };

  searchFilterFunction = text => {
    const { faltu } = this.state;
    if (text !== '') {
      if (plushData) {
        var newData = plushData.filter(item => {
          const itemData = `${item.service_name.toUpperCase()}`;

          const textData = text.toUpperCase();

          return itemData.indexOf(textData) > -1;
        });
      }

      if (soplushData) {
        var neSoplush = soplushData.filter(item => {
          const itemData = `${item.service_name.toUpperCase()}`;

          const textData = text.toUpperCase();

          return itemData.indexOf(textData) > -1;
        });
      }

      filterplush = newData;
      filterSoplush = neSoplush;
      this.setState({ faltu: !faltu });
      console.log('filterSoplush', filterSoplush);
    } else {
      filterplush = plushData;
      filterSoplush = soplushData;
      this.setState({ faltu: !faltu });
    }
    this.setState({ text: text });
  };

  render() {
    console.log("RENDER RENDER RENDER RENDER")
    // console.log("WORK",this.state.cart, this.state.selectDate)
    // console.log('CART', filterplush, filterSoplush, img, this.props.navigation.getParam('service'));
    var img = this.props.navigation.getParam('image');
    soplushData = this.props.navigation.getParam('service');
    plushData = this.props.navigation.getParam('service');
    category_name = this.props.navigation.getParam('category_name');

    if(this.props.navigation.getParam('service') !== undefined) {      
        if (filterSoplush == null) {
      filterSoplush = this.props.navigation.getParam('service');
      filterplush = this.props.navigation.getParam('service');
    }
  }

  
    return (
      <View style={{ flex: 1, height: '100%', width: '100%', marginTop: -80 }}>
        <ImageBackground
          source={require('../../../assets/inner.png')}
          style={{ height: '100%', width: '100%' }}>
          <Header
            containerStyle={{ marginTop: 60, backgroundColor: '#fff' }}
            placement="left"
            leftComponent={
              <Icon
                onPress={() => {
                  this.handleBackButton();
                  filterplush = null;
                  filterSoplush = null;
                  this.props.navigation.goBack();
                  this.setState({ categoryId: '', image: '' });
                }}
                name="arrow-back"
                color="#000"
              />
            }
            centerComponent={
              <View
                style={{
                  alignContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}>
                {!this.state.focusOn ? (
                  <Text
                    style={{
                      alignSelf: 'center',
                      fontSize: 20,
                      fontFamily: 'Poppins-Regular_0',
                      textTransform: 'uppercase',
                      textAlign:'center'
                    }}>
                    {category_name} Services
                    {/* Personal Services */}
                  </Text>
                ) : (
                    <View
                      style={{
                        backgroundColor: 'transparent',
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
                      <TextInput
                        style={{
                          height: 45,
                          flex: 1,
                        }}
                        value={this.state.text}
                        placeholder="Search"
                        onChangeText={text => this.searchFilterFunction(text)}
                        onBlur={() => {
                          this.setState({ focusOn: false });
                        }}
                        autoFocus={true}
                        ref={x => (this.input = x)}
                      />
                      <Icon
                        style={{
                          color: 'gray',
                          justifyContent: 'flex-end',
                        }}
                        type="EvilIcons"
                        name="search"
                        size={24}
                      />
                    </View>
                  )}
              </View>
            }
            rightComponent={
              <View style={{ flexDirection: 'row' }}>
                {/* {!this.state.focusOn && (
                  <TouchableOpacity
                    style={{ right: 20 }}
                    onPress={() => {
                      this.setState({ focusOn: true });
                      //  this.input.focus()
                    }}>
                    <Icon
                      style={{
                        color: 'gray',
                        justifyContent: 'flex-end',
                      }}
                      type="EvilIcons"
                      name="search"
                      size={24}
                    />
                  </TouchableOpacity>
                )} */}

                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('Notification');
                  }}>
                  <Image
                    source={require('../../../assets/notificationheader.png')}
                    style={{ height: 20, width: 20 }}
                  />
                </TouchableOpacity>
              </View>
            }
          />

          <View style={{ width: '100%' }}>
            <ScrollView
              contentContainerStyle={{
                alignItems: 'center',
                alignContent: 'center',
                width: '100%',
              }}>
              <View
                style={{ width: '90%', alignItems: 'center', marginTop: 20 }}>
                <View
                  key={1}
                  style={{
                    width: '100%',
                    padding: 0,
                    borderRadius: 10,
                    overflow: 'hidden',
                    alignContent: 'space-between',
                    borderColor: 'none',
                    borderWidth: 0,
                    backgroundColor: '#fff',
                  }}>
                  <View
                    style={{ width: '100%', marginLeft: 0, marginRight: 0 }}>
                    {/* <Image source={{uri:'https://cdn.vox-cdn.com/thumbor/XtwGXC-0GhXcDXiM0B0rjGAAxZE=/148x0:1768x1080/1200x800/filters:focal(148x0:1768x1080)/cdn.vox-cdn.com/uploads/chorus_image/image/45905674/3042430-poster-p-1-hello-barbie-talking-toy-toytalk.0.0.jpg'}} style={{ height: 200, width: "100%", }} /> */}

                    <Image
                      source={{ uri: img }}
                      style={{ height: 200, width: '100%' }}
                    />
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
                    </View>
 */}

                  {this.state.plush ? (
                    <View
                      style={{
                        width: '90%',
                        borderRadius: 20,
                        flexDirection: 'row',
                        borderColor: 'pink',
                        borderWidth: 1,
                        alignSelf: 'center',
                        overflow: 'hidden',
                        top: 20,
                      }}>
                      <View
                        style={{
                          backgroundColor: '#fc8b8c',
                          width: '50%',
                          padding: 15,
                        }}>
                        <TouchableOpacity
                          onPress={() => {
                            this.setState({ plush: true });
                          }}>
                          <Text
                            style={{
                              color: '#fff',
                              alignSelf: 'center',
                              fontWeight: 'bold',
                            }}>
                            Plush
                          </Text>
                        </TouchableOpacity>
                      </View>

                      <View
                        style={{
                          backgroundColor: '#fff',
                          width: '50%',
                          padding: 15,
                        }}>
                        <TouchableOpacity
                          onPress={() => {
                            this.setState({ plush: false });
                          }}>
                          <Text
                            style={{
                              color: 'pink',
                              alignSelf: 'center',
                              fontWeight: 'bold',
                            }}>
                            SoPlush
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ) : (
                      <View
                        style={{
                          width: '90%',
                          borderRadius: 20,
                          flexDirection: 'row',
                          borderColor: 'pink',
                          borderWidth: 1,
                          alignSelf: 'center',
                          overflow: 'hidden',
                          top: 20,
                        }}>
                        <View
                          style={{
                            backgroundColor: '#fff',
                            width: '50%',
                            padding: 15,
                          }}>
                          <TouchableOpacity
                            onPress={() => {
                              this.setState({ plush: true });
                            }}>
                            <Text
                              style={{
                                color: 'pink',
                                alignSelf: 'center',
                                fontWeight: 'bold',
                              }}>
                              Plush
                          </Text>
                          </TouchableOpacity>
                        </View>

                        <View
                          style={{
                            backgroundColor: '#fc8b8c',
                            width: '50%',
                            padding: 15,
                          }}>
                          <TouchableOpacity
                            onPress={() => {
                              this.setState({ plush: false });
                            }}>
                            <Text
                              style={{
                                color: '#fff',
                                alignSelf: 'center',
                                fontWeight: 'bold',
                              }}>
                              SoPlush
                          </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    )}

                  {this.state.plush ? (
                    <View>
                      {soplushData !== undefined ? (
                        <View style={{ marginTop: '5%' }}>
                          {filterplush.map((value, index) => {
                            if (value.p_checked === 0) {
                              var checked = false;
                            }
                            return (
                              <List
                                style={{
                                  width: '100%',
                                  borderBottomWidth: 0,
                                  borderBottomColor: '#bdbdbd',
                                  alignSelf: 'center',
                                  justifyContent: 'center',
                                  height: 60,
                                  padding: 5,
                                }}>
                                <ListItem key={index} avatar>
                                  {/* <Left style={{marginTop:'5%'}}>
                                                                    <CheckBox style={{ borderRadius: 5 }} checked={value.p_checked} color="pink" />
                                                                </Left>
                                                                <Body style={{ paddingHorizontal: "4%", borderBottomWidth: 0 }}>
                                                                    <Text note></Text>
                                                                    <Text note>{value.service_name}</Text>
                                                                </Body>
                                                                <Right style={{ display: "flex", flexDirection: "row", borderBottomWidth: 0 }}>
                                                                    <Text note style={{ color: "pink" }}> ${value.service_cost}</Text>

                                                                </Right> */}
                                  <View
                                    style={{
                                      flex: 1,
                                      flexDirection: 'row',
                                      paddingVertical: 10,
                                    }}>
                                    <View
                                      style={{ flex: 1, flexDirection: 'row' }}>
                                      {/* <TouchableOpacity onPress={() =>
                                            this.workFunction(
                                              value,
                                              'plush',
                                              index
                                            )
                                          }>
                                        <CheckBox
                                          onPress={() =>
                                            this.workFunction(
                                              value,
                                              'plush',
                                              index
                                            )
                                          }
                                          style={{
                                            borderRadius: 5,
                                            marginRight: '4%',
                                          }}
                                          checked={value.p_checked}
                                          color="pink"
                                        />
                                      </TouchableOpacity> */}

                                      <TouchableOpacity
                                        style={{
                                          borderColor: 'pink',
                                          borderWidth: 1,
                                          height: 20,
                                          width: 20,
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          borderRadius: 5
                                        }}
                                        onPress={() =>
                                          this.workFunction(
                                            value,
                                            'plush',
                                            index
                                          )
                                        } >
                                        {value.p_checked === true && <Icon size={15} name="check" color="pink" />}
                                      </TouchableOpacity>

                                      <View style={{ marginLeft: '4%' }}>
                                        <Text
                                          style={{
                                            textTransform: 'capitalize',
                                          }}
                                          note>
                                          {value.service_name}
                                        </Text>
                                      </View>
                                    </View>

                                    <View>
                                      <Text
                                        note
                                        style={{
                                          color: 'pink',
                                          paddingRight: 15,
                                        }}>
                                        {' '}
                                        ${value.service_cost}
                                      </Text>
                                    </View>
                                  </View>
                                </ListItem>
                                <Divider
                                  style={{
                                    backgroundColor: '#bdbdbd',
                                    width: '90%',
                                    marginLeft: '4%',
                                  }}
                                />
                              </List>
                            );
                          })}
                        </View>
                      ) : (
                          <View
                            style={{
                              flex: 1,
                              height: 300,
                              alignContent: 'center',
                              justifyContent: 'center',
                            }}>
                            <View
                              style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                alignSelf: 'center',
                              }}>
                              <Text style={{ alignSelf: 'center' }}>
                                No Services Found
                            </Text>
                            </View>
                          </View>
                        )}
                    </View>
                  ) : (
                      <View>
                        {plushData !== undefined ? (
                          <View style={{ marginTop: '5%' }}>
                            {filterSoplush.map((value, index) => {
                              return (
                                <List
                                  style={{
                                    width: '100%',
                                    borderBottomWidth: 0,
                                    borderBottomColor: '#bdbdbd',
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    height: 60,
                                    padding: 5,
                                  }}>
                                  <ListItem key={index} avatar>
                                    {/* <Left style={{ top: "8%" }}>
                                                                        <CheckBox style={{ borderRadius: 5 }} checked={value.s_checked} color="pink" />
                                                                    </Left>
                                                                    <Body style={{ paddingHorizontal: "4%", borderBottomWidth: 0 }}>
                                                                        <Text></Text>
                                                                        <Text note></Text>
                                                                        <Text note>{value.service_name}</Text>
                                                                    </Body>
                                                                    <Right style={{ display: "flex", flexDirection: "row", borderBottomWidth: 0 }}>
                                                                        <Text note style={{ color: "pink" }}> ${value.so_plush_cost}</Text>

                                                                    </Right> */}

                                    <View
                                      style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        paddingVertical: 10,
                                      }}>
                                      <View
                                        style={{ flex: 1, flexDirection: 'row' }}>
                                        {/* <TouchableOpacity onPress={() =>
                                          this.workFunction(
                                            value,
                                            'plush',
                                            index
                                          )
                                        }>
                                          <CheckBox
                                            onPress={() =>
                                              this.workFunction1(
                                                value,
                                                'soplush',
                                                index
                                              )
                                            }
                                            style={{ borderRadius: 5 }}
                                            checked={value.s_checked}
                                            color="pink"
                                          />
                                        </TouchableOpacity> */}

                                        <TouchableOpacity
                                          style={{
                                            borderColor: 'pink',
                                            borderWidth: 1,
                                            height: 20,
                                            width: 20,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 5
                                          }}
                                          onPress={() =>
                                            this.workFunction1(
                                              value,
                                              'soplush',
                                              index
                                            )
                                          } >
                                          {value.s_checked === true && <Icon size={15} name="check" color="pink" />}
                                        </TouchableOpacity>

                                        <View style={{ marginLeft: '4%' }}>
                                          <Text
                                            style={{
                                              textTransform: 'capitalize',
                                            }}
                                            note>
                                            {value.service_name}
                                          </Text>
                                        </View>
                                      </View>

                                      <View>
                                        <Text
                                          note
                                          style={{
                                            color: 'pink',
                                            paddingRight: 15,
                                          }}>
                                          {' '}
                                          ${value.service_cost}
                                        </Text>
                                      </View>
                                    </View>
                                  </ListItem>
                                  <Divider
                                    style={{
                                      backgroundColor: '#bdbdbd',
                                      width: '90%',
                                      marginLeft: '4%',
                                    }}
                                  />
                                </List>
                              );
                            })}
                          </View>
                        ) : (
                            <View
                              style={{
                                flex: 1,
                                height: 300,
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}>
                              <View
                                style={{
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  alignSelf: 'center',
                                }}>
                                <Text style={{ alignSelf: 'center' }}>
                                  No Services Found
                            </Text>
                              </View>
                            </View>
                          )}
                      </View>
                    )}

                  {/* () => {this.props.navigation.navigate('SelectBeautician', {
                                                        cart: this.state.cart,
                                                        selectDate: this.state.selectDate
                                                    })} */}

                  {soplushData !== undefined || plushData !== undefined ? (
                    //                                         <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%", marginBottom:10 }}>
                    //                                             <LinearGradient colors={['#fff', '#fc8b8c', '#fc8b8c']} style={{ width: "90%", borderRadius: 10 }}>
                    //                                                 <Button onPress={() => this.FilterBeautician()} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }}>
                    //                                                     <Text style={{ alignSelf: "center", color: "#fff", fontFamily: "Poppins-Regular_0", fontSize: 20 }}>
                    //                                                         Next
                    // </Text>
                    //                                                 </Button>
                    //                                             </LinearGradient>
                    //                                         </View>

                    <View style={{ marginVertical: '5%' }}>
                      <View
                        style={{
                          alignContent: 'center',
                          alignItems: 'center',
                          marginTop: '5%',
                        }}>
                        <LinearGradient
                          start={{ x: 0.0, y: 0.25 }}
                          end={{ x: 0.0, y: 1.0 }}
                          colors={['#F9B1B0', '#FD8788', '#FF7173']}
                          style={{ width: '90%', borderRadius: 10 }}>
                          <TouchableOpacity
                            onPress={() => this.FilterBeautician()}
                            style={{
                              justifyContent: 'center',
                              alignContent: 'center',
                              alignItems: 'center',
                              backgroundColor: 'none',
                              opacity: 0.7,
                              borderRadius: 10,
                            }}
                            style={{
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignContent: 'center',
                              alignItems: 'center',
                              backgroundColor: 'transparent',
                              opacity: 0.7,
                              borderRadius: 10,
                            }}>
                            <Text
                              style={{
                                alignSelf: 'center',
                                textAlignVertical: 'center',
                                color: '#fff',
                                fontFamily: 'Poppins-Regular_0',
                                // fontSize: 16,
                                paddingVertical: 15
                                , fontWeight: 'bold'
                              }}>
                              NEXT
                            </Text>
                          </TouchableOpacity>
                        </LinearGradient>
                      </View>
                    </View>
                  ) : (
                      <View>
                        <Text />
                      </View>
                    )}
                </View>

                <View>
                  <Text />
                  <Text />
                  <Text />
                  <Text />
                  <Text />
                  <Text />
                  <Text />
                  <Text />
                </View>
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
