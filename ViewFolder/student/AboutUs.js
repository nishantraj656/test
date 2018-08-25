import React, { Component } from 'react';
import {
    Image,View,ScrollView,TextInput,Picker,StyleSheet,Text,KeyboardAvoidingView,Platform
} from 'react-native';

export default class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
     
        };
    }
    render(){
        return(
                <ScrollView>
                <View  style={styles.ParentContainer}>
                    <View  style={styles.MainContainer}>
                        <Text style={styles.HeadText}>Abjout us</Text>
                        <Image source={require('./app.png')} />
                    </View>
                    
                    <View style={styles.AddresBox}>
                        <Text style={styles.h3}>Our Goal</Text>
                        <Text style={styles.h5}>
                            <Text style={styles.h4}>BihariLengends.com</Text> is a team which work as freelancer group.
                            The main goal of the team is to provide the best service to the world at very low cost we
                            we work all day and night to improve us so that we can give you the best. This will help you to 
                            grow your business more and more.So keep in Touch to get more and more.
                            
                        </Text>
                        <Text style={styles.h3}>What we Provide</Text>
                        <Text><Text style={styles.bullet}>-></Text>Mobile App Development</Text>
                        <Text><Text style={styles.bullet}>-></Text>Web & Mobile Development</Text>
                        <Text><Text style={styles.bullet}>-></Text>Customized Software Development</Text>
                        <Text><Text style={styles.bullet}>-></Text>WordPress Customization</Text>
                        <Text><Text style={styles.bullet}>-></Text>E-Commerce</Text>
                        <Text><Text style={styles.bullet}>-></Text>Hosting & Domain</Text>

                        <Text style={styles.h3}>Why Choose Us?</Text>

                        <Text style={styles.h4}><Text style={styles.bullet}>-></Text>Experienced team </Text>
                        <Text style={styles.h5}>
                            Access the experience of experts in their field, whether you need user interface design, modern infographics and animations, SEO, copywriting or social media management. We uncover the best solutions for the growth of your business through our proven experience in digital.
                        </Text>
                        <Text style={styles.h4}><Text style={styles.bullet}>-></Text>Creative solutions </Text>
                        <Text style={styles.h5}>
                            Make your vision and ideas reality with our top team of creative minds. Your custom website design will be attractive, user-friendly and deliver strong branding and a great user experience for your customers. Better yet, the design, management, development and hosting of all your online requirements is in the one place!
                        </Text>

                        <Text style={styles.h4}><Text style={styles.bullet}>-></Text>A caring and reliable team </Text>
                        <Text style={styles.h5}>
                            Embarking on a new project can be daunting. Knowing that you have a team on your side who care about the growth of your business makes it easier. We work harder to deliver a high standard of products and services that fit with your digital strategy and meet your campaign’s requirements.
                        </Text>


                        <Text style={styles.h4}><Text style={styles.bullet}>-></Text>Continuous improvement </Text>
                        <Text style={styles.h5}>
                            In the world of digital marketing and web design, a curiosity for what’s new and exciting should be accompanied by a wariness of trends and gimmicks. So, we always combine our previous wins, learning curves, industry knowledge and passion for innovation with tailored strategy – for proven results.
                        </Text>

                        <Text style={styles.h4}><Text style={styles.bullet}>-></Text>Clear communication </Text>
                        <Text style={styles.h5}>
                            Feel confident your thoughts are heard. We listen, and once we understand, we give our advice in a simple, concise and (relatively) jargon-free way. We think of ourselves as the most user-friendly digital team around, making sure our solutions solve your problems, support your branding and achieve the objectives that matter to you.
                        </Text>

                        
                          
                    </View>
                </View>
            </ScrollView>
        );
    }
}


let styles = StyleSheet.create({
    ParentContainer:{
        flex:1, 
    },
    MainContainer :{
        justifyContent: 'flex-start',
        alignSelf: 'center',
       

    },
    HeadText:{
        fontSize: 40,
        fontWeight: '800',
        marginBottom: 15,
    },
    AddresBox:{
        marginTop: 50,
        margin: 20,
        
    },
    h3:{
        marginTop:15,
        color:'#0c365a',
        fontWeight:'800',
        fontSize:20,
    },
    h4:{
        color:'#0c365a',
        fontWeight:'700',
        fontSize:18,
     },
     h5:{
        fontWeight:'300',
        fontSize:15,
        textAlign:'left',
        marginBottom:20,
     },
     bullet:{
        color:'#0c365a',
        fontWeight:'800',
        fontSize:20,
     }
});