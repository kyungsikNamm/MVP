import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Modal, Alert, ImageBackground, TouchableHighlight, TouchableOpacity } from 'react-native';
import { height, width } from '../globalstyles'; //width,height 받아오기
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons'

export type RootStackParam = {
    Home: undefined
    More: undefined;
};

function HomeScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
    const nfc = () => Alert.alert('nfc찍기')
    const More = () => navigation.navigate('More')

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                <View style={{ height: height * 98.5 }} />
                <View style={{ marginLeft: width * 21, flexDirection: "row", alignItems: 'center' }}>
                    <Image source={require('../../assets/drawable-xxxhdpi/4782.png')}
                        style={{ width: width * 84, height: height * 31.9, resizeMode: 'contain' }} />
                    <View style={{ width: width * 219.2 }} />
                    <Image source={require('../../assets/drawable-xxxhdpi/5013.png')}
                        style={{ width: width * 19.3, height: height * 23.1, resizeMode: 'contain' }} />
                    <View style={{ width: width * 11.5 }} />
                    <TouchableOpacity onPress={More}>

                        <Image source={require('../../assets/drawable-xxxhdpi/426.png')}
                            style={{ width: width * 19.9, height: height * 18.1, resizeMode: 'contain' }} />
                    </TouchableOpacity>
                </View>
                {/* 로고, 종, 더보기 뷰 끝 */}
                <View style={{ height: height * 18.6 }} />

                <View style={{ marginLeft: width * 18 }}>
                    <View style={styles.nfcview}>
                        <View style={{ height: height * 24 }} />
                        <Text style={styles.txt1}>
                            찍쿵 적립 후 혜택받아가세요
                        </Text>
                        <View style={{ height: height * 11 }} />
                        <Image source={require('../../assets/drawable-xxxhdpi/1.png')}
                            style={{ height: height * 294, width: width * 294, resizeMode: "contain" }} />
                        <TouchableOpacity onPress={nfc}>
                            <View style={styles.nfcbutton}>
                                <Text style={styles.txt2}>
                                    찍쿵 NFC 태깅
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: height * 18.6 }} />
                <View style={{ marginLeft: width * 18 }}>
                    <Image source={require('../../assets/drawable-xxxhdpi/2.png')}
                        style={{ width: width * 357, height: height * 153.4, borderRadius: 10, resizeMode: "cover" }} />
                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fcf9f9",
    },
    view: {
        width: '100%',
    },
    nfcview: {
        width: width * 357,
        height: height * 429.4,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        elevation: 3,
        alignItems: "center"
    },
    txt1: {
        fontFamily: "NotoSansKR-Bold",
        fontSize: width * 16,
        lineHeight: height * 24,
        letterSpacing: width * -0.64,
        color: "#7e7e7e"
    },
    nfcbutton: {
        width: width * 317,
        height: height * 50,
        borderRadius: 5,
        backgroundColor: "#ffa42c",
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt2: {
        fontFamily: "NotoSansKR-Bold",
        fontSize: width * 16,
        lineHeight: height * 24,
        letterSpacing: width * -0.64,
        color: "#ffffff"
    }

})

export default HomeScreen