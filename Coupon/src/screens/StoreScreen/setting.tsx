import { View, Alert, TextInput, Dimensions, Modal, TouchableWithoutFeedback, Animated, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { height, width } from '../globalstyles'; //width,height 받아오기
import React, { useEffect, useRef, useState } from 'react';


export const JjikkungList = ({}) => {
    return (


        <View style={styles.JjikkungListview}>
            <View style={styles.JjikkungListlocation}>
                <View style={styles.JjikkungList}></View>
                <View style={styles.JjikkungList}></View>
                <View style={styles.JjikkungList}></View>
                <View style={styles.JjikkungList}></View>
                <View style={styles.JjikkungList}>
                    <Image source={require('../../assets/drawable-xxxhdpi/313.png')} style={styles.gift} />
                </View>
            </View>
            <View style={styles.JjikkungListlocation1}>
                <View style={styles.JjikkungList}></View>
                <View style={styles.JjikkungList}></View>
                <View style={styles.JjikkungList}></View>
                <View style={styles.JjikkungList}></View>
                <View style={styles.JjikkungList}>
                    <Image source={require('../../assets/drawable-xxxhdpi/313.png')} style={styles.gift} />
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    JjikkungListview: {
        width: width * 337,
        height: height * 143,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        elevation: 3
    },
    JjikkungListlocation: {
        width: width * 298,
        height: height * 38,
        marginTop: height * 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    JjikkungList: {
        width: width * 38,
        height: width * 38,
        borderWidth: 1,
        borderColor: "#cfcfcf",
        borderStyle: "dashed",
        borderRadius: 100 / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gift: {
        width: width * 22.9,
        height: height * 22.4,
        resizeMode: 'contain'
    },
    JjikkungListlocation1: {
        width: width * 298,
        height: height * 38,
        marginTop: height * 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    coupon5view: {
    width: width * 339,
    height: height * 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  coupongift: {
    width: width * 17.6,
    height: height * 17.2,
    resizeMode: 'contain'
  },
  couponcount: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: width * 14,
    lineHeight: height * 20,
    letterSpacing: width * -0.42,
    color: '#2d2d2d',
  },
  coupongifttxt: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: width * 14,
    lineHeight: height * 20,
    letterSpacing: width * -0.42,
    color: '#2d2d2d',
  },
  couponpricetxt: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: width * 14,
    lineHeight: height * 20,
    letterSpacing: width * -0.42,
    color: '#c7c7c7',
  },
  couponinfo: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: width * 14,
    lineHeight: height * 20,
    letterSpacing: width * -0.42,
    color: '#c7c7c7',
  },
})