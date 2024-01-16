import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Switch} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import {height, width} from '../globalstyles'; //width,height 받아오기
import {useState} from 'react';

export type RootStackParam = {
    홈: undefined;
    PaletteColorSetting: undefined
    PaletteEdit: undefined
  };
function AlertScreen({}) {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
    const onPress = ()=> navigation.navigate('홈')
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

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
                    알림 설정
                </Text>
            </View>
            <View style={styles.headerendline}/>
        </View>
        <View style={styles.main}>
          <View style={styles.mainview}>
            <View style={styles.maintxtview}>
                <Text style={styles.maintxt}>
                    마케팅 정보 수신동의
                </Text>
            </View>
            <Switch
                trackColor={{false: '#d2d2d2', true: '#ff9d00'}}
                thumbColor={isEnabled ? '#ffffff' : '#ffffff'}
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                
            />
          </View>

          <View style={styles.mainline}/>

          <View style={styles.mainview}>
            <View style={styles.maintxtview}>
                <Text style={styles.maintxt}>
                    팔레트 매장 소식 알림
                </Text>
                <Text style={styles.subtxt}>
                    팔레트에 등록한 매장의 소식을 알려드립니다
                </Text>
            </View>
            <Switch
                trackColor={{false: '#d2d2d2', true: '#ff9d00'}}
                thumbColor={isEnabled ? '#ffffff' : '#ffffff'}
                onValueChange={toggleSwitch1}
                value={isEnabled1}
                style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                
            />
          </View>

          <View style={styles.mainline}/>

          <View style={styles.mainview}>
            <View style={styles.maintxtview}>
                <Text style={styles.maintxt}>
                    쿠폰 알림
                </Text>
                <Text style={styles.subtxt}>
                    쿠폰 유효기간을 알려드립니다
                </Text>
            </View>
            <Switch
                trackColor={{false: '#d2d2d2', true: '#ff9d00'}}
                thumbColor={isEnabled ? '#ffffff' : '#ffffff'}
                onValueChange={toggleSwitch2}
                value={isEnabled2}
                style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                
            />
          </View>

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
      mainview: {
        width:width*357,
        height:height*65,
        alignItems:'center',
        flexDirection: 'row', //가로정렬
        justifyContent:'space-between'
      },
      maintxtview: {
        width:width*260,
        height:height*50,
        justifyContent:'center'
      },
      maintxt: {
        fontFamily: 'NotoSansKR-Regular',
        fontSize: width*16,
        lineHeight: height*24,
        letterSpacing: width*-0.56,
        color: '#1c1c1c',
      },
      subtxt: {
        fontFamily: 'NotoSansKR-Regular',
        fontSize: width*14,
        lineHeight: height*20,
        letterSpacing: width*-0.49,
        color: '#b8b8b8',
      },
      mainline: {
        width:'100%',
        height:0,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#e7e7e7",
      },

    
    })
export default AlertScreen