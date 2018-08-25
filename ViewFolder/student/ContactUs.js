import React, { Component } from 'react';
import {
    Image,View,Button,TextInput,Picker,StyleSheet,Text,KeyboardAvoidingView,Platform
} from 'react-native';

import { createStackNavigator } from 'react-navigation';


class LogoTitle extends React.Component {
    render() {  
      return (
        <View style={styles1.contener}>
            <View >
                <Image
                    source={require('../student/app.png')}
                    style={{ width: 50, height: 30,paddingLeft:20}}
                />
                <Text style={styles1.logoTitle} >Bihari Legent</Text>
            </View>

            <View style={styles1.Title}><Text style={styles1.titleName}>Contact Us</Text></View>
        </View>
      );
    }
  }

  const styles1=StyleSheet.create({
      contener:{
             flexDirection: 'row',
                flex:4,
                backgroundColor:'#003f17'           
        },
     logoTitle:{
            color:'#fcfffd'
     },
     Title:{
         flex:1,
         alignItems:'center'
    },
    titleName:{
        color:'#fcfffd',
        fontWeight:'800',
        fontSize:20,
        justifyContent:'center'
    }
     
  })

export default class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
     
        };
    }

    //Header title
    static navigationOptions = {
        // headerTitle instead of title
        headerTitle: <LogoTitle />,
    
        };

    render(){
        return(
            
                
            <View style={styles.MainContainer}>
                
                <Text style={styles.HeadText}>Contact us</Text>
                <Image source={require('./app.png')} />
                <View style={styles.AddresBox}>
                    <Text style={styles.h3}>Address:</Text>
                    <Text style={styles.h4}>BihariLengends.com</Text>
                    <Text style={styles.h5}>Adarsh Conely</Text>
                    <Text style={styles.h5}>Urdy Bazar Road,</Text>
                    <Text style={styles.h5}>Bhagalpur,Bihar - 812001</Text>
                    <Text style={styles.h3}>Call:</Text>
                    <Text style={styles.h5}>+91 8340669783</Text>
                    <Text style={styles.h3}>Email:</Text>
                    <Text style={styles.h5}>javaaprimer123@gmail.com</Text>                    
                </View>
            </View>
            
        );
    }
}


let styles = StyleSheet.create({
    MainContainer :{
        justifyContent: 'flex-start',
        alignSelf: 'center',
        flex:1,

    },
    HeadText:{
        fontSize: 40,
        fontWeight: '800',
        marginBottom: 15,
    },
    AddresBox:{
        marginTop: 50,
        
    },
    h3:{
       color:'#0c365a',
       fontWeight:'800',
       fontSize:20,
    },
    h4:{
        color:'#0c365a',
        fontWeight:'400',
        fontSize:15,
     },
     h5:{
        fontWeight:'300',
        fontSize:15,
     },
});