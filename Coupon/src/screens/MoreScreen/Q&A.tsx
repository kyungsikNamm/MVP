import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { height, width } from '../globalstyles'; //width,height 받아오기
import { useState, useEffect } from 'react';

export type RootStackParam = {
    홈: undefined;
};
function QuestionScreen({ }) {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
    const onPress = () => navigation.navigate('홈')
    const onPress1 = () => Alert.alert('이동')

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerblank} />
                <View style={styles.naviview}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../assets/drawable-xxxhdpi/169.png')} style={styles.back} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onPress}>
                        <Image source={require('../../assets/drawable-xxxhdpi/383.png')} style={styles.home} />
                    </TouchableOpacity>
                </View>
                <View style={styles.headersub} />
                <View style={styles.headertxtview}>
                    <Text style={styles.headertxt}>
                        자주 묻는 질문
                    </Text>
                </View>
                <View style={styles.headerendline} />
            </View>
            <ScrollView>
                <TouchableOpacity onPress={toggleVisibility}>
                    <View style={styles.questionview}>
                        <View style={{ width: width * 357, height: '100%', justifyContent: 'center' }}>
                            <Text style={styles.questiontxt}>
                                질문
                            </Text>
                        </View>
                    </View>
                    <View style={styles.questionline} />
                </TouchableOpacity>
                {isVisible && (
                    <View style={styles.answerview}>
                        <View style={{ width: width * 340, marginLeft: width * 18, marginTop: height * 8 }}>
                            <Text style={styles.answertxt}>
                                질문답변질문답변질문답변질문답변질문답변질문답변
                                질문답변질문답변질문답변질문답변
                                질문답변질문답변질문답변질문답변
                            </Text>
                            <View style={{ height: height * 8 }} />
                        </View>
                    </View>
                )}
            </ScrollView>
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
        height: height * 156
    },
    headerblank: {
        width: '100%', //폭
        height: height * 26, //높이
    },
    naviview: {
        width: '100%',
        height: height * 20,
        flexDirection: 'row', //가로정렬
        alignItems: 'center',
    },
    back: {
        width: width * 24.5,
        height: height * 17,
        marginLeft: width * 19.5,
        resizeMode: 'contain'
    },
    home: {
        width: width * 21.9,
        height: height * 20,
        marginLeft: width * 309.1,
        resizeMode: 'contain',
    },
    headersub: {
        width: '100%',
        height: height * 47,
    },
    headertxtview: {
        width: '100%',
        justifyContent: 'center'
    },
    headertxt: {
        fontFamily: 'NotoSansKR-SemiBold',
        fontSize: width * 26,
        lineHeight: height * 37,
        letterSpacing: width * -0.91,
        color: '#1c1c1c',
        marginLeft: width * 16
    },
    headerendline: {
        width: '100%',
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#e7e7e7",
        marginTop: height * 26
    },
    questionview: {
        height: height * 65,
        alignItems: "center"
    },
    questionline: {
        width: '100%',
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#e7e7e7",
    },
    questiontxt: {
        fontFamily: 'NotoSansKR-SemiBold',
        fontSize: width * 16,
        lineHeight: height * 24,
        letterSpacing: width * -0.56,
        color: '#1c1c1c',
    },
    answerview: {
        backgroundColor: '#f5f5f5',
        width: '100%'
    },
    answertxt: {
        fontFamily: 'NotoSansKR-Regular',
        fontSize: width * 16,
        lineHeight: height * 24,
        letterSpacing: width * -0.56,
        color: '#1c1c1c',
    }


})
export default QuestionScreen