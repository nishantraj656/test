import React from 'react';
import { StyleSheet, Text, View,AsyncStorage,Button } from 'react-native';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator,
    createMaterialTopTabNavigator
 } from 'react-navigation';

 
 import ContactUs from '../ViewFolder/student/ContactUs'

 import GK from './HomeFolder/GK';
 import Notice from './HomeFolder/Notice';
 import Feedback from '../ViewFolder/student/feedback';

 import App from '../test/testList'

  class AskScreen extends React.Component{
                                            render(){
                                                return(<Feedback/>)
                                            }
                                        }

 class TestScreen extends React.Component{
                                                render(){
                                                    return(<App/>)
                                                }
                                            } 

 class NoticeScreen extends React.Component{
    static navigationOptions = {
        // headerTitle instead of title
        title:'Notice',
       // headerTitle: <LogoTitle />,
    
      };

     render(){
         return(<Notice/>)
     }
 }

 class ContactScreen extends React.Component{

    static navigationOptions = {
        // headerTitle instead of title
        title:'Contact',
       // headerTitle: <LogoTitle />,
    
      };

     render(){
         return(<ContactUs/>);
     }
 }

 class GKScreen extends React.Component{

    static navigationOptions = {
        // headerTitle instead of title
        title:'GK',
       // headerTitle: <LogoTitle />,
    
      };

     render(){
         return(<GK/>)
     }
 }

 class stScreen extends React.Component{
     render(){
         return(<View><Text>1st Date</Text></View>)
     }
 }

 class st2Screen extends React.Component{
    render(){
        return(<View><Text>1st Date</Text></View>)
    }
}



const Tab =createMaterialTopTabNavigator({
    st1 :stScreen,
    st2:st2Screen,
},{
    tabBarOptions: {
        labelStyle: {
          fontSize: 12,
        },
        tabStyle: {
          width: 100,
        },
        style: {
          backgroundColor: 'blue',
        },
      }

}) 

//Buttom tab 
export default createBottomTabNavigator(
    {
        GK:GKScreen,
      Ask: AskScreen,
      Test: TestScreen,
      Notice:NoticeScreen,
      Contact:ContactScreen,
      
        },
        {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Ask') {
                iconName = `help-box${focused ? '' : ''}`;
            } else if (routeName === 'Test') {
                iconName = `marker${focused ? '' : ''}`;
            }else if(routeName === 'Notice'){
                iconName = `message-alert${focused?'':''}`;
            }else if(routeName == 'Contact'){
                iconName =`contact-mail${focused?'':''}`;
            }else if(routeName == 'GK'){
                iconName =`newspaper${focused?'':''}`;
            }
    
            // You can return any component that you like here! We usually use an
            // icon component from react-native-vector-icons
            return <Icon name={iconName} size={25} color={tintColor} />;
            },
            
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: '#000000',
            style:{backgroundColor: '#c4f2e7'},
        },
        animationEnabled: false,
        swipeEnabled: true,
        initialRouteName :'GK',
        },   
  );