import React from 'react';
import { StyleSheet, Text, View,Button,AsyncStorage } from 'react-native';


export default class Login extends React.Component {
    render() {

            //Login action boady
    _login = async () => {
        
                            try {
                            await AsyncStorage.setItem("user",'sushil');
                            console.log("Welcome data Save user, token ");
                            } catch (error) {
                            // Error saving data
                            console.log("Error ",error);
                            }
                        }
      return (
         <View style={{flexDirection:'column' ,flex:1,alignContent:'center',alignItems:'center',paddingTop:'30%'}}><Button title="Login" onPress={_login}/></View>
      );
    }
  }