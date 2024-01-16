import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {height, width} from '../globalstyles'; //width,height 받아오기
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
// import { logout as kakaoLogout } from '@react-native-seoul/kakao-login'; 
// import auth from '@react-native-firebase/auth'; 


export type RootStackParam = {
  Service: undefined
  Alert: undefined
  Login: undefined;
  NicknameSetting: undefined;
};

function MoreScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const Service= () => navigation.navigate('Service')
  const onPress1= () => Alert.alert('공지사항')
  // const onKakaoLogout = async () => {
  //   try {
  //     // 카카오 로그아웃을 시도
  //     const result = await kakaoLogout();
  
  //     // Firebase 로그아웃을 시도
  //     await auth().signOut();
  
  //     // 로그아웃 후에는 로그인 화면 
  //     navigation.replace('Login'); 
  
  //     console.log(result); 
  //   } catch (error) {
  //     console.error('로그아웃 에러:', error);
  //   }
  // };
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerblank}/>
          <View style={styles.headertxtview}>
            <Text style={styles.headertxt}>
              더보기
            </Text>
          </View>
          <View style={styles.headerendline}/>
        </View>
        <View style={styles.main}>
          <TouchableOpacity onPress={Service}>
          <View style={styles.maintxtview}>
            <Image source={require('../../assets/drawable-xxxhdpi/514.png')} style={styles.img1}/>
            <Text style={styles.maintxt}>
              고객센터
            </Text>
            <Image source={require('../../assets/drawable-xxxhdpi/466.png')} style={styles.naviimg1}/>
          </View>
          </TouchableOpacity>

          <View style={styles.mainline}/>

          <TouchableOpacity onPress={()=> navigation.navigate('Alert')}>
          <View style={styles.maintxtview}>
            <Image source={require('../../assets/drawable-xxxhdpi/519.png')} style={styles.img2}/>
            <Text style={styles.maintxt}>
              알림 설정
            </Text>
            <Image source={require('../../assets/drawable-xxxhdpi/466.png')} style={styles.naviimg2}/>
          </View>
          </TouchableOpacity>

          <View style={styles.mainline}/>

          <TouchableOpacity onPress={onPress1}>
          <View style={styles.maintxtview}>
            <Image source={require('../../assets/drawable-xxxhdpi/521.png')} style={styles.img3}/>
            <Text style={styles.maintxt}>
              공지사항
            </Text>
            <Image source={require('../../assets/drawable-xxxhdpi/466.png')} style={styles.naviimg3}/>
          </View>
          </TouchableOpacity>

          <View style={styles.mainline}/>

          <TouchableOpacity onPress={onPress1}>
          <View style={styles.maintxtview}>
            <Image source={require('../../assets/drawable-xxxhdpi/517.png')} style={styles.img4}/>
            <Text style={styles.maintxt}>
              약관 및 정책
            </Text>
            <Image source={require('../../assets/drawable-xxxhdpi/466.png')} style={styles.naviimg4}/>
          </View>
          </TouchableOpacity>

          <View style={styles.mainline}/>

          <TouchableOpacity onPress={()=> navigation.navigate('NicknameSetting')}>
          <View style={styles.maintxtview}>
            <Image source={require('../../assets/drawable-xxxhdpi/5016.png')} style={styles.img4}/>
            <Text style={styles.maintxt}>
              닉네임 수정
            </Text>
            <Image source={require('../../assets/drawable-xxxhdpi/466.png')} style={styles.naviimg4}/>
          </View>
          </TouchableOpacity>

          <View style={styles.mainline}/>

        </View>
        <View style={styles.end}>
          <View style={styles.endtxtview}>
            <TouchableOpacity onPress={onPress1}>
            <Text style={styles.endtxt}>
              회원탈퇴
            </Text>
            </TouchableOpacity>

            {/* <TouchableOpacity onPress={onKakaoLogout}>
            <Text style={styles.logouttxt}>
              로그아웃
            </Text>
            </TouchableOpacity> */}

          </View>
        </View>
      </SafeAreaView>
    );
}
const styles= StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#ffffff'
  },
  header: {
    width:'100%',
    height:height*156
  },
  headerblank: {
    height:height*93,
  },
  headertxtview: {
    width:'100%',
    height:height*37,
    justifyContent:"center",
  },
  headertxt: {
    fontFamily:'NotoSansKR-SemiBold',
    fontSize:width*26,
    lineHeight:height*37,
    letterSpacing:width*-0.91,
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
    alignItems:'center',
  },
  maintxtview: {
    flexDirection: 'row', //가로정렬
    width:width*357,
    height:height*65,
    alignItems:'center',
  },
  img1: {
    width:width*26.8,
    height:height*26.1,
    resizeMode:'contain',
    marginRight:width*12.2
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
    marginLeft:width*239
  },
  mainline: {
    width:'100%',
    height:0,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#e7e7e7",
  },
  img2: {
    width:width*25.8,
    height:height*25.8,
    resizeMode:'contain',
    marginRight:width*13.2
  },
  naviimg2: {
    width:width*7,
    height:height*11,
    resizeMode:'contain',
    marginLeft:width*236
  },
  img3: {
    width:width*24.3,
    height:height*26.2,
    resizeMode:'contain',
    marginRight:width*14.7
  },
  naviimg3: {
    width:width*7,
    height:height*11,
    resizeMode:'contain',
    marginLeft:width*239
  },
  img4: {
    width:width*24.4,
    height:height*25.8,
    resizeMode:'contain',
    marginRight:width*14.6
  },
  naviimg4: {
    width:width*7,
    height:height*11,
    resizeMode:'contain',
    marginLeft:width*214
  },
  end: {
    width:'100%',
    height:height*100,
    alignItems:'center',
  },
  endtxtview: {
    width:width*225,
    height:height*26,
    marginTop:height*35,
    justifyContent:'space-between',
    flexDirection: 'row', //가로정렬
  },
  endtxt: {
    fontFamily:'NotoSansKR-Regular',
    fontSize:width*18,
    lineHeight:height*26,
    letterSpacing:width*-0.63,
    color: '#bebebe'
  },
  logouttxt: {
    fontFamily:'NotoSansKR-Regular',
    fontSize:width*18,
    lineHeight:height*26,
    letterSpacing:width*-0.63,
    color: '#ffa42c'
  }
})

export default MoreScreen