import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Switch, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import {height, width} from '../globalstyles'; //width,height 받아오기
import { useState, useEffect } from 'react';
// import firestore from '@react-native-firebase/firestore';
// import auth from '@react-native-firebase/auth';


export type RootStackParam = {
    홈: undefined;
  };
function NicknameSettingScreen({}) {
    // 여기부터 
    const [displayName, setDisplayName] = useState('');
    const [newDisplayName, setNewDisplayName] = useState('');


    // useEffect(() => {
    //     // 현재 로그인된 사용자의 정보를 가져옵니다.
    //     const user = auth().currentUser;
    //     if (user) {
    //       // Firestore에서 사용자의 displayName을 가져옵니다.
    //       const userDocRef = firestore().collection('users').doc(user.uid);
    //       userDocRef.get()
    //         .then((doc) => {
    //           if (doc.exists) {
    //             setDisplayName(doc.data()?.displayName); // 현재 displayName을 상태에 저장합니다.
    //           } else {
    //             Alert.alert("사용자 정보를 찾을 수 없습니다.");
    //           }
    //         })
    //         .catch((error) => {
    //           console.error("Error fetching user data: ", error);
    //           Alert.alert("사용자 정보를 가져오는 데 실패했습니다.");
    //         });
    //     }
    //   }, []);

    //   const handleNewDisplayNameChange = (text : string) => {
    //     setNewDisplayName(text);
    // };
    
    //   const handleUpdateDisplayName = () => {
    //     // 닉네임 길이 유효성 검사
    //     if (newDisplayName.length < 2 || newDisplayName.length > 10) {
    //         Alert.alert("닉네임을 2~10자로 입력해주세요.");
    //         return;
    //     }

    //     const user = auth().currentUser;
    //     if (user) {
    //         firestore().collection('users').doc(user.uid).update({ displayName: newDisplayName })
    //             .then(() => {
    //                 Alert.alert("닉네임이 성공적으로 업데이트되었습니다.");
    //                 setDisplayName(newDisplayName); // UI 업데이트
    //                 navigation.goBack();
    //             })
    //             .catch((error) => {
    //                 console.error("Error updating displayName: ", error);
    //                 Alert.alert("닉네임 업데이트에 실패했습니다.");
    //             });
    //     }
    // };


    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
    const [nickname, setNickname]= useState('')
    const [isnickname, setIsNickname]= useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const onPress1= () => Alert.alert('변경 완료되었습니다.')

    const handleNickname = (nickname: string) => {
        setNickname(nickname);

    // 닉네임 길이 유효성 검사
    if (nickname.length >= 2 && nickname.length <= 10) {
      setIsNickname(true);
      setError('');
    } else {
      setIsNickname(false);
      setError('닉네임을 2~10자로 입력해주세요.');
    }
  };

    const [isDisabled, setIsDisabled] = useState(true) //변경완료 버튼 활성화
    const buttonStyle = isDisabled 
            ? styles.buttonDisabled 
            : styles.buttonEnabled;
    React.useEffect(() => {
        if(nickname) {
            setIsDisabled(false)
            return
        }
        setIsDisabled(true)

    },[nickname])


    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <View style={styles.headerblank}/>
            <View style={styles.naviview}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Image source={require('../../assets/drawable-xxxhdpi/169.png')} style={styles.back}/>
                </TouchableOpacity>
                <Text style={styles.headertxt}>
                    닉네임 변경
                </Text>
                <TouchableOpacity onPress={()=> navigation.navigate('홈')}>
                    <Image source={require('../../assets/drawable-xxxhdpi/383.png')} style={styles.home}/>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.main}>
            <View style={styles.mainblank}/>
            <View style={styles.maintxtview}>
                <Text style={styles.maintxt}>
                    변경할 닉네임을 입력해주세요
                </Text>
            </View>
            <View style={styles.maininputview}>
                <TextInput style={styles.input}
                    value={newDisplayName}
                    // onChangeText={handleNewDisplayNameChange}
                    >
                    
                </TextInput>
                {/* {nickname.length > 0 && (
                    <TouchableOpacity onPress={handleUpdateDisplayName}>
                        <Image source={require('../../assets/drawable-hdpi/12.png')}
                            style={styles.inputimg} />
                    </TouchableOpacity>
                )} */}
            </View>
            <View style={styles.errorview}>
            {error.length > 0 && <Text style={styles.errorText}>{error}</Text>}
            </View>
            <TouchableOpacity
                    disabled={newDisplayName.length < 2 || newDisplayName.length > 10} // 버튼 활성화 조건 수정
                    style={newDisplayName.length < 2 || newDisplayName.length > 10 ? styles.buttonDisabled : styles.buttonEnabled}
                    // onPress={handleUpdateDisplayName}
                    >
                    <Text style={styles.buttontxt}>
                        변경 완료
                    </Text>
                </TouchableOpacity>
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
        height: height*51,
    },
    headerblank: {
        width: '100%', //폭
        height: height*22, //높이
    },
    naviview: {
        width:'100%',
        height:height*29,
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
        marginLeft: width*109,
        resizeMode:'contain',
      },
    headertxt : {
        fontFamily: 'NotoSansKR-SemiBold',
        fontSize: width*20,
        lineHeight: height*29,
        letterSpacing: width*-0.7,
        color: '#1c1c1c',
        marginLeft:width*106
    },
    main: {
        width:'100%',
        height:height*400,
        alignItems:'center',
    },
    mainblank: {
        width:'100%',
        height:height*56,
    },
    maintxtview: {
        width:width*357,
        height:height*24,
    },
    maintxt: {
        fontFamily: 'NotoSansKR-Medium',
        fontSize: width*16,
        lineHeight: height*24,
        letterSpacing: width*-0.56,
        color: '#525252',
    },
    maininputview: {
        width:width*357,
        height:height*49,
        backgroundColor:'#f3f3f3',
        borderRadius:5,
        marginTop:height*10,
        flexDirection: 'row', //가로정렬
    },
    input: {
        width: width*300,
        color: 'black',
    },
    inputimg: {
        width:width*31.5,
        height:height*31.5,
        resizeMode:'contain',
        marginTop:height*8.8,
        marginLeft:width*15
    },
    errorview: {
        width:width*357,
        height:height*20,
        marginTop:height*3,
    },
    errorText: {
        fontFamily: 'NotoSansKR-Regular',
        fontSize: width*14,
        lineHeight: height*20,
        letterSpacing: width*-0.49,
        color: '#fd3636',
    },
    end: {
        width:'100%',
        height:height*52,
        marginBottom:height*26,
        alignItems:'flex-end',
        backgroundColor:'#ffa42c'
    },
    buttonEnabled: {
        backgroundColor: '#ffa42c',
        height: height*52,
        marginTop:height*561,
        width:'100%',
        justifyContent: 'center',
        alignItems:'center'
      },
      buttonDisabled: {
        backgroundColor: '#d6d6d6',
        height: height*52,
        marginTop:height*561,
        width:'100%',
        justifyContent: 'center',
        alignItems:'center'
      },
      buttontxt: {
        fontFamily : 'NotoSansKR-Bold',
        color: '#ffffff',
        fontSize: width*18,
        letterSpacing: width*-0.72,
        lineHeight: height*26,
      }
    
    
    })
export default NicknameSettingScreen