import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
    StyleSheet,
} from 'react-native';
 
import MainMenuAdmin from '../admin/Menu/MainMenuAdmin'
import MainMenuSeller from '../salesman/Menu/MainMenuSeller'
export default class Secured extends Component {


/*
<ChangePassword/>
<MenuTest/> 
<Button
                    onPress={this.props.onLogoutPress}
                    title="Logout"
                />

*/
    render() {

      /**  return (

            <ScrollView style={styles.conatiner}>
                
                
                
                <MenuTest/> 

                
            </ScrollView>
            

        )*/
        return(
            <MainMenuAdmin/>
        )
    }
}


let styles = StyleSheet.create({
    
    conatiner:{
        paddingTop: 20,
        flexDirection: 'column',
        //justifyContent: 'space-between',
        flex: 1,
    }

}); 
