import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import {height, width} from '../globalstyles'; //width,height 받아오기

export type RootStackParam = {
    홈: undefined;
    Question: undefined
  };
  
function ServiceScreen({}) {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
    const onPress = ()=> navigation.navigate('홈')
    const Question = ()=> navigation.navigate('Question')
    const onPress1= () => Alert.alert('이동')


    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <View style={styles.headerblank}/>
            <View style={styles.naviview}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Image source={require('../../assets/drawable-xxxhdpi/169.png')} style={styles.back}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPress}>
                <Image source={require('../../assets/drawable-xxxhdpi/383.png')} style={styles.home}/>
            </TouchableOpacity>
            </View>
            <View style={styles.headersub}/>
            <View style={styles.headertxtview}>
                <Text style={styles.headertxt}>
                    고객센터
                </Text>
            </View>
            <View style={styles.headerendline}/>
        </View>
        <View style={styles.main}>
          <TouchableOpacity onPress={Question}>
          <View style={styles.maintxtview}>
            <Image source={require('../../assets/drawable-xxxhdpi/523.png')} style={styles.img1}/>
            <Text style={styles.maintxt}>
              자주 묻는 질문
            </Text>
            <Image source={require('../../assets/drawable-xxxhdpi/466.png')} style={styles.naviimg1}/>
          </View>
          </TouchableOpacity>

          <View style={styles.mainline}/>

          <TouchableOpacity onPress={onPress1}>
          <View style={styles.maintxtview}>
            <Image source={require('../../assets/drawable-xxxhdpi/529.png')} style={styles.img2}/>
            <Text style={styles.maintxt}>
              광고 문의
            </Text>
            <Image source={require('../../assets/drawable-xxxhdpi/466.png')} style={styles.naviimg2}/>
          </View>
          </TouchableOpacity>

          <View style={styles.mainline}/>

          <TouchableOpacity onPress={onPress1}>
          <View style={styles.maintxtview}>
            <Image source={require('../../assets/drawable-xxxhdpi/527.png')} style={styles.img3}/>
            <Text style={styles.maintxt}>
              매장 제휴 문의
            </Text>
            <Image source={require('../../assets/drawable-xxxhdpi/466.png')} style={styles.naviimg3}/>
          </View>
          </TouchableOpacity>

          <View style={styles.mainline}/>


        </View>
    </SafeAreaView>

 )   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    header: {
        width: '100%',
        height: height*156
    },
    headerblank: {
        width: '100%', //폭
        height: height*26, //높이
    },
    naviview: {
        width:'100%',
        height:height*20,
        flexDirection: 'row', //가로정렬
        alignItems:'center',
    },
    back: {
        width:width*24.5,
        height:height*17,
        marginLeft:width*19.5,
        resizeMode:'contain'
    },
    home: {
        width:width*21.9,
        height:height*20,
        marginLeft: width*309.1,
        resizeMode:'contain',
      },
    headersub: {
        width:'100%',
        height:height*47,
    },
    headertxtview: {
        width:'100%',
        height:height*37,
        justifyContent:'center'
    },
    headertxt : {
        fontFamily: 'NotoSansKR-SemiBold',
        fontSize: width*26,
        lineHeight: height*37,
        letterSpacing: width*-0.91,
        color: '#1c1c1c',
        marginLeft:width*16
    },
    headerendline: {
        width:'100%',
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#e7e7e7",
        marginTop:height*26
    },
    main: {
        width:'100%',
        height:height*265,
        alignItems:'center',
      },
      maintxtview: {
        flexDirection: 'row', //가로정렬
        width:width*357,
        height:height*65,
        alignItems:'center',
      },
      img1: {
        width:width*23.8,
        height:height*18.6,
        resizeMode:'contain',
        marginRight:width*13.9
      },
      maintxt: {
        fontFamily:'NotoSansKR-Regular',
        fontSize:width*20,
        lineHeight:height*29,
        letterSpacing:width*-0.7,
        color: '#1c1c1c'
      },
      naviimg1: {
        width:width*7,
        height:height*11,
        resizeMode:'contain',
        marginLeft:width*197
      },
      mainline: {
        width:'100%',
        height:0,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#e7e7e7",
      },
      img2: {
        width:width*22.6,
        height:height*26.9,
        resizeMode:'contain',
        marginRight:width*13.1
      },
      naviimg2: {
        width:width*7,
        height:height*11,
        resizeMode:'contain',
        marginLeft:width*236
      },
      img3: {
        width:width*26.8,
        height:height*22.1,
        resizeMode:'contain',
        marginRight:width*12.2
      },
      naviimg3: {
        width:width*7,
        height:height*11,
        resizeMode:'contain',
        marginLeft:width*197
      },

    
    })
export default ServiceScreen