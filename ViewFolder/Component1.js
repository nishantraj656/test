import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonComponent from './ButtonComponent'


export default class Component1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Heloo this is first app</Text>
        <Text style={{color:'green'}}>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <View>
            <ButtonComponent/>
        </View>
      </View>
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