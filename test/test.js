import React ,{Component} from 'react';
import { Text,View,StyleSheet,Button,
    TouchableOpacity } from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

export default class Test extends React.Component{
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Test',
        };
    };
    constructor(props){
        super(props);
        this.state = {
            data: [],
            question:'',
                opt1:'',
                opt2:'',
                opt3:'',
                opt4:'',
                ans:0,
                num:0,
                max:4,
                correct:0,
                incorrect:0,
                flag:0,
                flag1:0,
                flag2:0,
                corr:null,
                comp:true,

        }
        this.onSelect = this.onSelect.bind(this);
        //console.log("Test Called.");
        const { navigation } = this.props;
        const num = navigation.getParam('num', 0);
        //console.log(num);
        this.fire(num);
    }
    fire = (num) =>{      
        let sql = 'SELECT * FROM `question_table` WHERE test_id ='+num;
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
                    this.setState({data:responseJson});
                    this.setState({max:Object.keys(responseJson).length});
                    this.setData();
                    this.setState({flag2:1});
                }).catch((error) => {
                    alert("updated slow network");
                    console.log(error);
                    this.setState({submitButtonDisable:false});
                });
    }
    
    setData(){
        this.setState({question:this.state.data[0].question});
        this.setState({opt1:this.state.data[0].opt1});
        this.setState({opt2:this.state.data[0].op2});
        this.setState({opt3:this.state.data[0].opt3});
        this.setState({opt4:this.state.data[0].opt4});
        this.setState({ans:this.state.data[0].ans});
    }

    onSelect(){
    
        if(this.state.flag == this.state.ans && this.state.flag1 == 0){
                this.setState({correct:this.state.correct+1});           
        }else{
            if(this.state.flag1 == 0){
                this.setState({incorrect:this.state.incorrect+1});
            }
            this.setState({corr:this.state.ans-1})
        }
        console.log('corr ' + this.state.corr);
        this.setState({flag1:1});
        //console.log('in submit :' + this.state.num);
        if(this.state.num < this.state.max-1){
           // this.setState({comp:false})
           this.nextQ();
        }
    }

    nextQ(){
        console.log('in nextq :' + this.state.num);
        if(this.state.num < this.state.max-1){
            var i = this.state.num+1;
            this.setState({num:i});
            this.setState({comp:this.state.comp+1});
            this.setState({question:this.state.data[i].question});
            this.setState({opt1:this.state.data[i].opt1});
            this.setState({opt2:this.state.data[i].op2});
            this.setState({opt3:this.state.data[i].opt3});
            this.setState({opt4:this.state.data[i].opt4});
            this.setState({ans:this.state.data[i].ans});
            this.setState({flag:0});
            this.setState({comp:true});
            this.setState({flag1:0});
            this.setState({corr:null});
        }
    };

    render(){
        //console.log(QList);
        if(this.state.flag2==0){
            return null
        }
        else{
        return(
            <View>
                <Text style={{fontSize:20,backgroundColor:'#55634c',textAlign:'center'}}>{this.state.num+1}/{this.state.max}</Text>
                <Text style={{fontSize:25,margin:10}}>Q{this.state.num+1} :{this.state.question}</Text>

                <RadioGroup
                    style={{margin:20,backgroundColor:'white'}}
                    onSelect = {(index) => this.setState({flag:index+1})}
                    selectedIndex={this.state.corr}
                    size={25}
                >
                    <RadioButton value={'item1'} 
                        style={{borderColor:'black',borderBottomWidth:1}}
                    >
                        <Text style={{fontSize:20}}> {this.state.opt1}</Text>
                    </RadioButton>

                    <RadioButton value={'item2'}
                        style={{borderColor:'black',borderBottomWidth:1}}
                    >
                        <Text style={{fontSize:20}}> {this.state.opt2}</Text>
                    </RadioButton>

                    <RadioButton value={'item3'}
                        style={{borderColor:'black',borderBottomWidth:1}}
                    >
                        <Text style={{fontSize:20}}> {this.state.opt3}</Text>
                    </RadioButton>

                    <RadioButton value={'item4'}
                        style={{backgroundColor:'white'}}

                    >
                        <Text style={{fontSize:20}}> {this.state.opt4}</Text>
                    </RadioButton>

                </RadioGroup>  
               
                <View style={{flexDirection:'row',margin:20}}>
                    {/* <Button style={{flex:1,}} 
                        title=" Check "
                        onPress={() => this.onSelect()}
                    /> */}
                    <Text style={{flex:2}}></Text>
                    <Button style={{flex:1,}} 
                        title="  Next  "
                       // disabled={this.state.comp}
                        onPress={() => this.onSelect()}
                    />
                </View>
                <View style={{height:60,marginTop:20}}>
                    <Text style={{fontSize:20,color:'green',textAlign:'center'}}>Correct : {this.state.correct}</Text>
                    <Text style={{fontSize:20,color:'red',textAlign:'center'}}>Incorrect : {this.state.incorrect}</Text>
                </View>
            </View>
        )}
    }
}

let styles = StyleSheet.create({
    text: {
        padding: 10,
        fontSize: 14,
    },
});

//module.exports = App
