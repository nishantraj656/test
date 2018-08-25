import React from 'react';
import { StyleSheet, Text, View,AsyncStorage,Button,Image } from 'react-native';


export default class MyClock extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        currentTime: Date.now(),
      }; 
    }
  
    updateCurrentTime() {
      this.setState(state => ({
        ...state,
        currentTime: Date.now(),
      }));
      this.timeoutId = setTimeout(this.updateCurrentTime.bind(this), 1000);
    }
  
    // componentWillMount() {
    //   this.updateCurrentTime();
    //   document.addEventListener('visibilitychange', () => {
    //     if(document.hidden) {
    //       clearTimeout(this.timeoutId);
    //     } else {
    //       this.updateCurrentTime();
    //     }
    //   }, false);
    // }
  
    // componentWillUnmount() {
    //   clearTimeout(this.timeoutId);
    // }

    render(){

        var dt = Date.now();
        console.log(dt.getTime())
        return (<Text>{this.state.currentTime}</Text>)
    }
  } 