import React from 'react';
import { StyleSheet, Text, View,AsyncStorage,Button } from 'react-native';
import ButtonComponent from './ButtonComponent'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class Component1 extends React.Component {
  render() {
    _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('TASKS');
        if (value !== null) {
          // We have data!!
          console.log(value);
        }
       } catch (error) {
         // Error retrieving data
         console.log("Error in retrive ",error);
       }
    }
    return (
      <View style={styles.container}>
        <Text>Heloo this is first app</Text>
        <Text style={{color:'green'}}>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <View>
            <ButtonComponent/>
        </View>
        <Button
                onPress={_retrieveData}
                title="Get"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
      </View>
    );
  }
}

