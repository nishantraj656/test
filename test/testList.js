import React ,{Component} from 'react';
import { Text,View,FlatList,StyleSheet,TouchableOpacity,Image} from 'react-native';
import { createStackNavigator} from 'react-navigation';
import Test from './test' 


// Logo class
class LogoTitle extends React.Component {
    render() {

        
       
      return (
        <View style={stylesLG.contener}>
            <View >
                <Image
                    source={require('../ViewFolder/student/app.png')}
                    style={{ width: 50, height: 30,paddingLeft:20}}
                />
                <Text style={stylesLG.logoTitle} >Bihari Legent</Text>
            </View>

            <View style={stylesLG.Title}><Text style={stylesLG.titleName}>Test List</Text></View>
        </View>
      );
    }
  }

  const stylesLG=StyleSheet.create({
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

   //beeru class


class myapp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[]
        } 
        this.fire();
    }
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <LogoTitle/>,
        };
    };
    ShowList(item){
        console.log(item);
        return(
            <View>
                <Text >{item.name}</Text>
                <Text >{item.date}</Text>
            </View>
        );
        console.log(item);
    }
    fire = () =>{      
        let sql = 'select * from testList_table where STATUS='+true;
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
                   // console.log(responseJson);
                    this.setState({data:responseJson});
                }).catch((error) => {
                    alert("updated slow network");
                    console.log(error);
                    this.setState({submitButtonDisable:false});
                });
    }
    render(){
        //console.log(this.state.data);
        return(
            <View> 
                <FlatList 
                    data = {this.state.data}
                        renderItem={({item}) =><TouchableOpacity style={styles.tabIteam}
                                                onPress = {() => this.props.navigation.navigate('Test',{num:item.test_id})}
                                                >
                                                <Text style={styles.item}>{item.name}</Text>
                                                <Text style={styles.date}>Date :{item.date}</Text>
                                                </TouchableOpacity>}
                        keyExtractor={item => item.test_id}
                        ItemSeparatorComponent={()=>(<View style={{height:1,width:'80%',marginLeft:"20%",padding:3,borderBottomColor:"#000000",borderTopWidth:2}}/>)}
                >
                </FlatList>
            </View>
        );    
    }
}

const RootStack = createStackNavigator(
    {
            ShowItem:{screen:myapp},
            Test:{screen:Test},
        },
        {
          initialRouteName: 'ShowItem',
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

      let styles = StyleSheet.create({
        date:{
            textAlign:'center',
            color:'#0f0406',
            fontSize: 20,
            fontWeight:'300',
            height: 30
        },
        item: {
            textAlign:'center',
            fontSize: 25,
            fontWeight:'300',
            height:35
        },
        tabIteam:{
            justifyContent:'space-around',
            borderBottomWidth: 1,
            borderColor: 'black',
            padding:10,
        },
    });
    
    export default class App extends React.Component {
        render() {
          return <RootStack />;
        }
    }

