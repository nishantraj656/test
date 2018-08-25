import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from '../ViewFolder/Welcome';
import Login from '../ViewFolder/LoginFolder/Login'

export default class WelcomeCont extends React.Component {

    render() {

    _check = async () => {
            try {
              const value = await AsyncStorage.getItem('entryFlag');
              if (value !== null) {
                // We have data!!
                console.log('value change');
                return (
                    <Welcome/>
                 );
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

        return(<Login/>)
     
    }
  }