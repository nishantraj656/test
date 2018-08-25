import React, { Component } from 'react';
import {
    AutoGrowingTextInput,View,Button,TextInput,Picker,StyleSheet,Text,KeyboardAvoidingView,Platform
} from 'react-native';


export default class Feedback extends Component{
    constructor(props) {
        super(props);
        this.state = {
          userId: '1',
          subject:'',
          message:'',
          submitButtonDisable:false,
        };
    }
    sendFeedback = () =>{
        if(this.state.subject.length == 0 || this.state.message.length == 0 ){
            alert("All fields are mandatory");
            return;
        }
        this.setState({submitButtonDisable:true});
        let sql = "INSERT INTO `feedback_table`(`user_id`, `subject`, `message`) VALUES ('"+this.state.userId+"','"+this.state.subject+"','"+this.state.message+"')";
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
                    console.log(responseJson);
                    alert("Successfully Send To Community"); 
                    this.setState({
                        submitButtonDisable:false,
                        message:'',
                        subject:'',
                    });
                    
                }).catch((error) => {
                    alert("updated slow network");
                    console.log(error);
                    this.setState({submitButtonDisable:false});

                });
    }
    render(){
        return(
            <KeyboardAvoidingView behavior="padding" enabled>
                <View  style={styles.textAreaContainer} >
                    <Text  style={styles.HeadText}>Write For US</Text>
                    
                    <TextInput
                        style={styles.TextInputStyleClass}
                        underlineColorAndroid="transparent"
                        placeholder={"Subject"}
                        placeholderTextColor={"grey"}
                        onChangeText={(text) => this.setState({subject: text})}
                        value={this.state.subject}
                    />
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder={"Tell Us Something...."}
                        placeholderTextColor={"grey"}
                        numberOfLines={10}
                        multiline={true}
                        onChangeText={(text) => this.setState({message: text})}
                        value={this.state.message}
                    />
                
                    <Button
                        onPress={()=>{this.sendFeedback() }}
                        title="Send For a Review"
                        color="#841584"
                        accessibilityLabel="Send This Message"
                        disabled = {this.state.submitButtonDisable}
                        />
                </View>
            </KeyboardAvoidingView>
            
        );
    }
    
}


let styles = StyleSheet.create({
    MainContainer :{
        justifyContent: 'center',
        flex:1,
        margin: 10
    },
        
    TextInputStyleClass: {    
        textAlign: 'left',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
        // Set border Hex Color Code Here.
        borderColor: '#2196F3',
        
        // Set border Radius.
        borderRadius: 5 ,
        
        // Set border Radius.
        //borderRadius: 10 ,
    },
    
    textAreaContainer: {
        padding: 15,
        
    },
    textArea: {
        
        textAlign: 'auto',
        alignContent: 'flex-start',
        marginBottom: 7,
        
        borderWidth: 1,
        // Set border Hex Color Code Here.
        borderColor: '#2196F3',
        
        // Set border Radius.
        borderRadius: 5 ,
        
        // Set border Radius.
        //borderRadius: 10 ,
        
    },
   
    HeadText:{
        fontSize: 25,
        padding: 5,
        fontWeight: '800',
    },
}); 
