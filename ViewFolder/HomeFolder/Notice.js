import React from 'react';
import { StyleSheet, Text, View,AsyncStorage,ScrollView, Button,Image,FlatList,ActivityIndicator } from 'react-native';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from 'react-navigation';
import MyClock from '../Clock'
import {List,ListItem, SearchBar} from 'react-native-elements';

 

class LogoTitle extends React.Component {
    render() {

        
       
      return (
        <View style={styles.contener}>
            <View >
                <Image
                    source={require('../student/app.png')}
                    style={{ width: 50, height: 30,paddingLeft:20}}
                />
                <Text style={styles.logoTitle} >Bihari Legent</Text>
            </View>

            <View style={styles.Title}><Text style={styles.titleName}>Notice</Text></View>
        </View>
      );
    }
  }

  const styles=StyleSheet.create({
      contener:{
             flexDirection: 'row',
                flex:4,
                backgroundColor:'#003f17'           
        },
     logoTitle:{
            color:'#fcfffd'
     },
     Title:{
         flex:1,
         alignItems:'center'
    },
    titleName:{
        color:'#fcfffd',
        fontWeight:'800',
        fontSize:20,
        justifyContent:'center'
    }
     
  })
  
  //Home Screen 
  class HomeScreen extends React.Component {

            constructor(){
                super();
                this.state = {
                        data: []
                }

                this.fire();
            }

             //data base connection 
  fire = () =>{
        
    let sql = "select * from `notice`";
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
                //alert("changed password successfully"); 
                
                this.setState({data:responseJson});
                console.log("Response get ",this.state.data)

            }).catch((error) => {
                alert("updated slow network");
                console.log(error);
               

            });
}

            static navigationOptions = {
            // headerTitle instead of title
            headerTitle: <LogoTitle />,
        
            };

        

            _renderIteam=({item})=>{
                
                var yourBase64Icon = 'data:image/png;base64,'+item.Nimage;

                return(
                    <View>
                        <View style={styles1.contener}>
                            <View>
                                <Image style={{width: 80, height: 80}} source={{uri: yourBase64Icon}}/>
                            </View> 

                            <View style={styles1.Title}>
                                <Text style={styles1.titleName}>{item.Ntitle}</Text>
                                <Text>Date : {item.Ndate}</Text>
                            </View>
                           
                                
                            
                            
                        </View>
                        <Button
                            title="Go to Details"
                            onPress={() => {
                                this.props.navigation.navigate('Details', {
                                    itemId:item.id,
                                    otherParam: item.title,
                                  });
                            }}
                        />    
                    </View>             
                );
                
            }                
        
            _renderHeader=() =>{
                                return <SearchBar placeholder='Type here.....' lightTheme round/>
                             }

            _renderFoot =() =>{
                                return(
                                        <View style={{paddingVertical:20,borderTopWidth:1,borderTopColor:'#CED0CE'}}>
                                            <ActivityIndicator animating size="large"/>
                                        </View>
                                    )
                            }

            render() {
                return (
                        <ScrollView>
                            <FlatList
                                data={this.state.data}
                                renderItem={this._renderIteam}
                                ItemSeparatorComponent={()=>(<View style={{height:1,width:'80%',marginLeft:"20%",padding:3,borderBottomColor:"#000000",borderTopWidth:2}}/>)}
                                keyExtractor={item => item.id}
                                ListHeaderComponent={this._renderHeader}
                                ListFooterComponent={this._renderFoot}
                            />    
                        </ScrollView>
                   
                );
            }
     }



     //css flatlist
     const styles1=StyleSheet.create({
        contener:{
               flexDirection: 'row',
                  flex:4,
                  backgroundColor:'#fceff8'           
          },
       logoTitle:{
              color:'#fcfffd'
       },
       Title:{
           flex:1,
           alignItems:'center',
           marginLeft:10,
      },
      titleName:{
          color:'#000000',
          fontWeight:'800',
          fontSize:20,
          justifyContent:'center'
      }
       
    }) 

  
  //details Screen
  class DetailsScreen extends React.Component {

        constructor(){
            super();
            this.state={
                            title:'',
                            details:'',
                            date:'',
                            image:'',
                            flag:false
                        }
            
        }


        fire = (id) =>{
        
            let sql = "select * from `notice` where id="+id;
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
                       // alert("changed password successfully"); 
                        
                        this.setState({details:responseJson[0].Ndetails});
                        this.setState({image:responseJson[0].Nimage});
                        this.setState({date:responseJson[0].Ndate});
                        this.setState({flag:true})

                        console.log("Response get ",this.state.Ndata)
        
                    }).catch((error) => {
                        alert("updated slow network");
                        console.log(error);
                       
        
                    });
        }

    static navigationOptions = ({ navigation, navigationOptions }) => {
      console.log(navigationOptions);
      // Notice the logs ^
      // sometimes we call with the default navigationOptions and other times
      // we call this with the previous navigationOptions that were returned from
      // this very function
      return {
        title: navigation.getParam('otherParam', 'A Nested Details Screen'),
        headerStyle: {
          backgroundColor: navigationOptions.headerTintColor,
        },
        headerTintColor: navigationOptions.headerStyle.backgroundColor,
      };
    };
  
    render() {
      /* 2. Get the param, provide a fallback value if not available */
      const { navigation } = this.props;
      const itemId = navigation.getParam('itemId', 'NO-ID'); 
      const otherParam = navigation.getParam('otherParam', 'some default value');
      if(!this.state.flag){
        this.fire(itemId);
        return (
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <ActivityIndicator animating size="large"/>
                    </View>
                 );
      }    
        else{
            var yourBase64Icon = 'data:image/png;base64,'+this.state.image;
            return (
                    <ScrollView>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={styles1.contener}>
                                    <View>
                                        <Image style={{width: 200, height: 200}} source={{uri: yourBase64Icon}}/>
                                    </View>                                     
                            </View> 

                            <View style={styles1.Title}>
                                        <Text style={{fontSize:15}}>{this.state.details}</Text>
                            </View>
                        </View>
                    </ScrollView>
                    );
        }
    }
  }
  

const RootStack = createStackNavigator(
    {
      GK: HomeScreen,
      Details: DetailsScreen,
    },
    {
      initialRouteName: 'GK',
      /* The header config from HomeScreen is now here */
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#003f17',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    }
  );

 
export default class Notice extends React.Component{
    render(){
        return(
                <RootStack/>
        );
    }
}