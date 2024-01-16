import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground, Alert, TouchableHighlight, BackHandler, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {height, width} from '../globalstyles'; //width,height 받아오기
// import auth, { FirebaseAuthTypes, firebase } from '@react-native-firebase/auth';
// import { login, getProfile, getAccessToken} from '@react-native-seoul/kakao-login';
// import firestore from '@react-native-firebase/firestore';
// import functions from '@react-native-firebase/functions';


// const authService = auth();
// const fireStore = firestore();

export type RootStackParam = {
  Home: undefined
  Login: undefined;
};

function LoginScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const home = () => navigation.navigate('Home')

// 자동로그인 설정 (소셜 로그인 기능마무리 되면 주석해제)
//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged((user: FirebaseAuthTypes.User | null) => {
//       onAuthStateChanged(user);
//     });
//     return subscriber; // Firebase 인증 상태 해제 
//   }, []);

//   const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
//     if (user) {
//       // 사용자가 로그인되어 있다면, 메인 화면으로 이동
//       navigation.replace('Home');
//     }
//     // 로그인되어 있지 않은 경우, 로그인 화면 유지 
//   };

  
  
  
  // Firestore에 정보 저장
//   const setStoreUserInfo = async (email:string, uid:string, phoneNumber:any, nickname:string, birthday:string, gender:string, ageRange:any) => {
//     const userData = {
//     displayName: nickname || email.split("@")[0], // nickname이 없을 경우 email에서 추출한 값을 사용
//     email: email || null,
//     uid: uid || null,
//     phone_number: phoneNumber || null,
//     birthday: birthday || null,
//     gender: gender || null,
//     age_range: ageRange || null,
//   };


//     // Firestore에 유저 정보 저장
//     await fireStore.collection("users").doc(`${uid}`).set(userData, { merge: true });
//   };
  
//  // 카카오톡 로그인 
//   const onKakaoButtonPress = async (): Promise<void> => {
//     try {
//       const token = await login();
//       const profile = await getProfile();
//       const userInfoData = JSON.parse(JSON.stringify(profile));
      
//       const {
//         email = null,
//         id = null,
//         phoneNumber = null,
//         nickname = null,
//         birthday = null,
//         gender = null,
//         ageRange = null,
//       } = userInfoData;
//       // 작성한 cloud 함수 호출
//       const { data } = await functions().httpsCallable("customTokenLogin")({
//         email,
//         id,
//         phoneNumber,
//         nickname,
//         birthday,
//         gender,
//         ageRange
//       });

//       const { firebaseToken, newUser } = data;

//       // 발급받은 커스텀 토큰으로 파이어베이스 로그인 시키기
//       const signInWithCustomTokenResult = await authService.signInWithCustomToken(
//         firebaseToken
//       );

//       if (newUser) {
//         const kakaoEmail = `${email.split("@")[0]}@kakao.com`;
//          await setStoreUserInfo(
//         email,
//         signInWithCustomTokenResult.user.uid,
//         phoneNumber,
//         nickname,
//         birthday,
//         gender,
//         ageRange
//       );
//     }
//       navigation.replace('Login');
//     } catch (error) {
//       console.log(error);
//     }
// };

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerblank}/>
          <View style={styles.headerimgview}>
            <Image source={require('../../assets/drawable-xxxhdpi/577.png')} style={styles.headerimg}/>
          </View>
        </View>
        <View style={styles.main}>
            <Image source={require('../../assets/drawable-xxxhdpi/txt.png')} style={styles.txtimg}/>
        </View>
        <View style={styles.end}>
          <TouchableOpacity onPress={home}>
            <View style={styles.endbuttonview}>
              <Image source={require('../../assets/drawable-xxxhdpi/578.png')} style={styles.buttonimg}/>
              <Text style={styles.buttontxt}>
                카카오계정으로 로그인하기
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.finish}>
          <Image source={require('../../assets/drawable-xxxhdpi/4759.png')} style={styles.finishimg}/>
        </View>
      </SafeAreaView>
    );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffa42c",
  },
  header: {
    width: '100%',
      height: height*238.2,
  },
  headerblank: {
    width:'100%',
    height:height*179.8
  },
  headerimgview:{
    width:width*153.6,
    height:height*58.4,
    marginLeft:width*42.9
  },
  headerimg: {
    width:width*153.6,
    height:height*58.4,
    resizeMode:'contain'
  },
  main: {
    height:height*101,
    width:'100%',
    marginLeft:width*41,
    marginTop:height*29.8
  },
  txtimg: {
    width:width*210,
    height:height*101,
    resizeMode:'contain',
  },
  end: {
    width:'100%',
    height:height*52,
    marginTop:height*79
  },
  endbuttonview: {
    flexDirection:'row',
    width:width*311,
    height:height*52,
    marginLeft:width*41,
    borderRadius:10,
    backgroundColor:'#fee500',
    alignItems:'center',
  },
  buttonimg: {
    width:width*36,
    height:height*36,
    marginLeft:width*12,
    resizeMode:'contain',
  },
  buttontxt: {
    fontFamily:'NotoSansKR-Bold',
    fontSize:width*16,
    lineHeight:height*24,
    letterSpacing:width*-0.64,
    color:'#000000',
    marginLeft:width*29
  },
  finish: {
    width:'100%',
    height:height*352,
  },
  finishimg: {
    width:'100%',
    height:height*266.5,
    resizeMode:'contain',
    marginTop:height*150,
  }
  

})
export default LoginScreen