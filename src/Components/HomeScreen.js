import React from 'react';
import  LinearGradient from "react-native-linear-gradient";
import { View , Text , StyleSheet , FlatList } from 'react-native';
import { Button , Container , CheckBox , Body , Right } from 'native-base';
import Animated from 'react-native-reanimated'
function HomeScreen() {
    return (
        <Container>
            <Animated.View 
            style = {styles.Card} >
                <LinearGradient
                    colors = {[ '#42a9ed' , '#5942ed' , '#323aa8']} 
                    style = {styles.Box }
                >

                    <View style = {{ width:'70%' , alignItems: 'flex-start' }}> 
                        <Text style ={styles.CurrentBalance}>
                            Current Balance
                        </Text>
                        <Text style ={styles.Balance}>
                            ₨ 5,550
                        </Text>
                        <Text style={styles.CardNumber}>
                            4200 **** **** 6898
                        </Text>
                    </View>

                    <View style={{width: '100%', alignItems: 'flex-end' }}>
                        <Button rounded light style={styles.AddBtn}>
                            <Text style={styles.AddBtnText}>Add</Text>
                        </Button>
                    </View>

                </LinearGradient>
            </Animated.View>
        </Container>
    )
}

const styles = StyleSheet.create({
    Card:{
        flex:1,
        alignItems:'center',
        paddingVertical:10,
        paddingHorizontal:20
    },
    Box:{
        width:'100%' , 
        height:189 , 
        borderRadius:15 , 
        flexDirection: 'row' , 
        padding:20
    },
    CurrentBalance:{
        fontSize:15 , 
        fontFamily: 'Lato-Regular' ,
        fontWeight: '600',
        color: '#fff'
    },
    Balance:{
        fontSize:32 ,
        fontFamily: 'Lato-Medium' ,
        fontWeight: '700',
        color: '#fff'
    },
    CardNumber:{
        marginTop:65,
        fontSize:18 ,
        fontFamily: 'Lato-Medium' ,
        fontWeight: '700',
        color: '#bbbb'
    },
    AddBtn:{
        padding:15,
        marginTop:32,
        marginLeft:30,
        backgroundColor:'black',
        justifyContent:'center',
    },
    AddBtnText:{
        color:"#fff",
        fontSize:23,
    }
});

export default HomeScreen
