import { View, Alert, TextInput, Dimensions, Modal, TouchableWithoutFeedback, Animated, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { height, width } from '../globalstyles'; //width,height 받아오기
import React, { useEffect, useRef, useState } from 'react';

interface MyJjikkungListProps {
    name: string;
    address: string;
    date: string;
    total: string
    now: string
    onPress: () => void;


}

export const MyJjikkungList: React.FC<MyJjikkungListProps> = ({ name, address, date, total, now, onPress }) => {
    return (

        <View style={{ marginLeft: width * 18 }}>
            <View style={{ height: height * 1 }} />
            <TouchableOpacity onPress={onPress}>
                <View style={styles.MyJikkungListView}>
                    <View style={styles.MyJikkungListimg}>
                        {/* 이미지 넣는곳 */}
                    </View>
                    <View style={styles.MyJjikkungListtxt}>
                        <Text style={styles.MyJikkungListStorename} numberOfLines={1} ellipsizeMode="tail">
                            {name}
                        </Text>
                        <Text style={styles.MyJikkungListStoreAddress} numberOfLines={1} ellipsizeMode="tail">
                            {address}
                        </Text>
                        <View style={{ height: height * 4 }} />
                        <Text style={styles.MyJikkungListStoreDate}>
                            {date}
                        </Text>
                        <View style={{ height: height * 7 }} />
                        <View style={{ flexDirection: "row" }}>
                            <Image source={require('../../assets/drawable-xxxhdpi/352.png')}
                                style={{ width: width * 15.2, height: height * 19.8, resizeMode: "contain" }} />
                            <View style={{ width: width * 5 }} />
                            <Text style={styles.MyJikkungListcouponcount}>
                                {total}/{now}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={{ height: height * 14 }} />
        </View>

    )
}

const styles = StyleSheet.create({
    MyJikkungListView: {
        width: width * 357,
        height: height * 119,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        elevation: 3,
        flexDirection: "row"
    },
    MyJikkungListimg: {
        width: width * 93,
        height: height * 90,
        borderRadius: 5,
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#e4e4e4",
        marginTop: height * 15,
        marginLeft: width * 15
    },
    MyJjikkungListtxt: {
        marginTop: height * 12,
        marginLeft: width * 12,
        width: width * 200
    },
    MyJikkungListStorename: {
        fontFamily: "NotoSansKR-SemiBold",
        fontSize: width * 16,
        lineHeight: height * 24,
        letterSpacing: width * -0.56,
        color: "#3b3b3b"
    },
    MyJikkungListStoreAddress: {
        fontFamily: "NotoSansKR-Medium",
        fontSize: width * 14,
        lineHeight: height * 20,
        color: "#b6b6b6"
    },
    MyJikkungListStoreDate: {
        fontFamily: "NotoSansKR-Regular",
        fontSize: width * 12,
        lineHeight: height * 17,
        letterSpacing: width * -0.42,
        color: "#b6b6b6"
    },
    MyJikkungListcouponcount: {
        fontFamily: "NotoSansKR-Medium",
        fontSize: width * 14,
        lineHeight: height * 20,
        color: "#555555"
    }

})