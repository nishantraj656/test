import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Component1 from '../Component/Component1'

export default class Welcome extends React.Component {
  render() {
    return (
        <Component1/>
    );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
