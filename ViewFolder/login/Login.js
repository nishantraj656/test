import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    ImageBackground,
    Picker, 
    KeyboardAvoidingView ,
} from 'react-native';
import { StackNavigator,createStackNavigator,TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import Env from '../env'
//import { Text,View , StyleSheet, TouchableHighlight,TouchableOpacity,TextInput,Switch } from 'react-native';
export default class Login extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            userType: 'student',
            user:0,
            pass:'',
            loding:false
        };
    
        
      }

       loginNow =(userType,user,pass) => {
        
        if(parseInt(user)){

        

        console.log('USer '+user+"  Pass :"+pass + "User type "+userType)

      var  query ='SELECT * FROM security_table where id='+user+" and password='"+pass+"' and userType='"+userType+"'" ;
      console.log("Query :"+query)
            fetch('https://3day.000webhostapp.com/run_query.php', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                query: query,
              }) 
            }).then((response) => response.json())
                  .then((responseJson) => {
                    //alert("Data Received");
                    console.log(Object.keys(responseJson).length)
                    if(Object.keys(responseJson).length){
                        //True part
                        //alert('correct password')
                        
                        if(userType=="student")
                        this.props.navigation.navigate('User')
                        else if(userType == "admin")
                        this.props.navigation.navigate('admin')

                    }
                    else{
                        //false
                        alert('Invalid Credentials')
                    }
                    //return(responseJson);       
                  }).catch((error) => {
                      
                    console.error(error);
                    
                  });
                }
                else{
                    alert('Enter corret password')
                }
         
    }
    
    render() {
        let pic = {
            uri: 'https://i.pinimg.com/236x/31/86/d4/3186d43532f63f5b8b9c8f1afa635bd9--heart-wallpaper-wallpaper-iphone.jpg'
          };
          

        

        return (
            <KeyboardAvoidingView behavior="padding" enabled>
             
                <View>
                        
                    <ImageBackground
                    style={{width: '100%', height: '100%'}}
                    source={pic}
                    >
                        <View style={styles.container}>
                            <Text 
                                style={styles.loginText}>
                                Login
                            </Text>
                            <View style = {styles.inputBox}>
                                <TextInput 
                                    style={styles.input } 
                                    underlineColorAndroid="transparent" 
                                    onChangeText={(text) => this.setState({user:text})}  
                                    value={this.setState.user} 
                                    placeholder='Username' 
                                />
                                <TextInput 
                                    style={styles.input} 
                                    underlineColorAndroid="transparent" 
                                    onChangeText={(text) => this.setState({pass:text})} 
                                    value ={this.setState.pass}
                                    placeholder='Password' 
                                    secureTextEntry = {true}
                                />
                                <View style={styles.picker}>
                                    <Text style={styles.TextLoginAs}>Login As:</Text>
                                    <Picker
                                        selectedValue={this.state.userType}
                                        style={styles.pickerStyle}
                                        onValueChange={(itemValue, itemIndex) => this.setState({userType: itemValue})}>
                                        <Picker.Item label="student" value="student" />
                                        <Picker.Item label="admin" value="admin" />
                                    </Picker>
                                </View>
                            </View>
                            
                            <View style={{margin:7}} />
                            <Button 
                                onPress={()=>this.loginNow(this.state.userType,this.state.user,this.state.pass)}
                                title="          Tap TO Login Me          "
                            />
                            <View style={{margin:3}} />
                            <Text style={styles.forgetPass}>           Forget Password?</Text>
                        </View>
                    </ImageBackground>
                </View>
            </KeyboardAvoidingView>
            
            )
    }
}


let styles = StyleSheet.create({

    container: {
        
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: '#ecf0f1',
        padding: 40,
      },
      input: {
        //backgroundImage: 'url(../image/loginBackground.jpg)' ,
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'white',
        marginBottom: 10,
        color:'white',
        backgroundColor:'black',
        fontWeight: '500',
      },
      inputBox:{
        marginTop: 20,
      },
      backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
      },
      loginText:{
        fontSize: 40,
        fontWeight: '800',
        color:'white',
      },
      buttonSytle:{
        color: 'black',
        textAlign: 'center',
        padding: 8,
        fontWeight: '500',
      },
      forgetPass:{
          color:'#3E83F3',
          alignSelf: 'flex-start',
          
      },
      picker:{
        flexDirection: 'row',
        
    },
      pickerStyle:{
        height: 50, 
        width: 20,
        color:'white',
        backgroundColor:'black',
        flex:1,
      },
      TextLoginAs:{
        height: 50, 
        width: 20,
        padding:12,
        fontSize: 20,
        fontWeight: '500',
        color:'white',
        flex:1
      },
      
 
    
  });