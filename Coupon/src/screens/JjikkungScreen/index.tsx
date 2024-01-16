import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Modal, Alert, ImageBackground, TouchableHighlight, TouchableOpacity } from 'react-native';
import { height, width } from '../globalstyles'; //width,height 받아오기
import { SafeAreaView } from 'react-native-safe-area-context';
import { MyJjikkungList } from './setting';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParam = {
  Store: undefined
};


function JjikkungScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const Store = () => navigation.navigate('Store')


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        {/* ㅇㅇ님의 찍쿵함 뷰 */}
        <View style={{ marginLeft: width * 16 }}>
          <View style={{ height: height * 52 }} />
          <Text style={styles.nametxt}>
            ㅇㅇ님의 찍쿵함
          </Text>
          <View style={{height:height*14}}/>
        </View>


          <ScrollView>
            <MyJjikkungList
            name='가게이름'
            address='가게주소'
            date='저장날짜'
            total='전체쿠폰수'
            now='현재쿠폰수'
            onPress={Store}
            />

          </ScrollView>



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
  nametxt: {
    fontFamily: "NotoSansKR-Bold",
    fontSize: width * 20,
    lineHeight: height * 29,
    letterSpacing: width * -0.7,
    color: "#1c1c1c"
  }


})

export default JjikkungScreen