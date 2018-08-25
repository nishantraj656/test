import {StyleSheet,Text,View,Button} from 'react-native';
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
        return(<View>
                <Button
                onPress={onPressLearnMore}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            
            
          </View>)

            flag ?<View style={{color:'#ffeb0f'}}>Help</View>:''
    }
} 


   
