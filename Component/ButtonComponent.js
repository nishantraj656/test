import {StyleSheet,Text,AsyncStorage,View,Button} from 'react-native';
import React from 'react';


export default class ButtonComponent extends React.Component{

    constructor(props) {
                            super(props);
                            this.state = {flag:false};
                        }
    render(){

         //Button action 
        const onPressLearnMore = ()=>{
                                      // this.setState(this.state.flag != this.state.flag); 
                                      alert("Press Click......");                                                     
                                     }

        //Storing data global
        _storeData = async () => {
            
            try {
              await AsyncStorage.setItem('TASKS', 'I like to save it.');
              alert("Button press")
            } catch (error) {
              // Error saving data
              console.log("Error ",error);
            }
          }
        return(<View style={{padding:20}}>
                <Button
                onPress={_storeData}
                title="Set"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            
            
          </View>)

            flag ?<View style={{color:'#ffeb0f'}}>Help</View>:''
    }
} 


   
