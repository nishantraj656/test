import React from 'react';
import { StyleSheet, Text, View,AsyncStorage } from 'react-native';
import WelcomeCont from './Controller/WelcomeCont'
import Welcome from './ViewFolder/Welcome';

import Login from './ViewFolder/login/Login'
import FtreScreen from './Component/Menu'
import HomeScreen from './ViewFolder/Home'

export default class App extends React.Component {
  render() {
     
      try {
        const value =  AsyncStorage.getItem('user');
        if (value !== null) {
          // We have data!!
          console.log('value change',value);
          // return (
          //   <FtreScreen pagekey={"uniquekey"} title={"categort title"} description={"topic description"}/>)
          
          return(<HomeScreen/>)
         //return(<Login/>)
        }
        else{
            console.log("In false Part")
          return (
             <Login/>
           );
        }
       } catch (error) {
         // Error retrieving data
         console.log("Error in retrive ",error);
         return(<View><Text>Somting went wrong </Text></View>);
       }
  

     
  }
}