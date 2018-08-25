import React, { Component } from 'react';
import {
    AppRegistry,ScrollView,View,Button,TextInput,Picker,StyleSheet,Text,KeyboardAvoidingView,Platform
} from 'react-native';



export default class ChangePassword extends Component{

    constructor(props) {
        super(props);
        this.state = {
            userType: 'student',
            oldPassword:'',
            newPassword:'',
            confirmPassword:'',
            submitButtonDisable:false,
            userid:'1',

        };
    }
    submitForm = () => {
        this.setState({submitButtonDisable:true});

        
        if(this.state.newPassword != this.state.confirmPassword){
            alert("Password not same");
        this.setState({submitButtonDisable:false});
            

            return;
        }
        if(this.state.newPassword == ""|| this.state.oldPassword == ""){
            alert("Blanck Password not valid");
            this.setState({submitButtonDisable:false});
            
            return;
        }
        this.featchOldPassword(); //and change it
        
    }
    //for freaching old pas
    featchOldPassword = () =>{
        


        
            fetch('https://3day.000webhostapp.com/run_query.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: 'SELECT password FROM `security_table` WHERE id ='+this.state.userid,
            }) 
            }).then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson[0].password);
                    //alert("Data Received");
                    this.changePassword(responseJson[0].password);
                    return(responseJson[0].password);       
                }).catch((error) => {
                    console.error(error);
                });
        


    }
    changePassword = (featched_OldPassword) =>{
        if(this.state.oldPassword == featched_OldPassword){
            
            this.updatePassword(this.state.newPassword);
        }else{
            alert("Incorrent Old password");
        this.setState({submitButtonDisable:false});
            
            
            return;
        }
        
        
    }
    updatePassword = () =>{
        
        let sql = "UPDATE `security_table` SET `password`= '"+this.state.newPassword+"' WHERE `id` ="+this.state.userid;
        console.log(sql);
        fetch('https://3day.000webhostapp.com/run_query.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: sql,
            }) 
            }).then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson[0].password);
                    alert("changed password successfully"); 
                    this.setState({submitButtonDisable:false});

                }).catch((error) => {
                    alert("updated slow network");
                    console.log(error);
                    this.setState({submitButtonDisable:false});

                });
    }
    render(){
        return(
            <KeyboardAvoidingView 
                style={styles.container} 
                behavior="padding"
                windowSoftInputMode="adjustResize"
                keyboardVerticalOffset={Platform.select({ios: 0, android: 120})}
            enabled>
                <View style={styles.container}>
                    <View style = { styles.HeaderView}>
                        <Text style = { styles.Header}>Change Password</Text>
                    </View>
                    
                    <View style={{margin:7}} />
                    <View style = {styles.MainConteiner}>
                        
                        <View style = {styles.pickerParent}>
                            <Text>UserID:</Text>
                            <TextInput
                                editable = {false}
                                style = {styles.input} 
                                placeholder = "USER ID"
                                value = {this.state.userid}
                            />
                        </View>
                        <View style = {styles.pickerParent}>
                            <Text>Old Password:</Text>
                            <TextInput 
                                style = {styles.input} 
                                placeholder = "Enter Old Password"
                                secureTextEntry = {true}
                                underlineColorAndroid='transparent'
                                autoFocus = {true}
                                onChangeText={(text) => this.setState({oldPassword: text})}
                            />
                        </View>
                        <View style = {styles.pickerParent}>
                            <Text>New Password:</Text>
                            <TextInput 
                                style = {styles.input} 
                                placeholder = "Enter New Password"
                                secureTextEntry = {true}
                                underlineColorAndroid='transparent'
                                onChangeText={(text) => this.setState({newPassword: text})}
                            />
                        </View>
                        <View style = {styles.pickerParent}>
                            <Text>Confirm Password:</Text>
                            <TextInput 
                                style = {styles.input} 
                                placeholder = "Confirm New Password"
                                secureTextEntry = {true}
                                underlineColorAndroid='transparent'
                                onChangeText={(text) => this.setState({confirmPassword: text})}
                            />
                        </View>
                        
                        <View style = {styles.pickerParent}>
                            <Button
                                    onPress={this.submitForm}
                                    title="UPDATE"
                                    disabled = {this.state.submitButtonDisable}
                            />
                        </View>
                    </View>
                    
                </View>
            </KeyboardAvoidingView>
        );
    }
}

let styles = StyleSheet.create({
    container:{
        
        
        
    },
    MainConteiner:{
        padding: 20,
    },
    HeaderView:{
        padding:8,
        
        borderBottomWidth: 3,
        elevation:3,
        
    },
    pickerParent:{
        padding: 10,
    },
    pickerStyle:{
        
        width: '100%',
        //color: '#eaf1f4',
        backgroundColor:'#eaf1f4',
        
        flex:1,
        paddingBottom:10,
    },
    Header:{
        
        fontWeight: '500',
        fontSize:25,
    },
    input:{
       
        padding: 10,
        borderWidth: 1,
        borderColor: 'white',
        marginBottom: 10,
        fontWeight: '800',
        backgroundColor:'#eaf1f4',
    }

}); 