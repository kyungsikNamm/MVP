import * as React from 'react';
import { StyleSheet, Text, TextLayoutEventData, NativeSyntheticEvent, View, ScrollView, findNodeHandle, Image, Modal, Alert, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { height, width } from '../globalstyles'; //width,height 받아오기
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useRef, useEffect, RefObject, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Swiper from 'react-native-swiper'
import { JjikkungList } from './setting';


export type RootStackParam = {
  홈: undefined
  팔레트: { storeName: string; imageUrl: string };
};



function StoreScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const Home = () => navigation.navigate('홈')
  const checkcoupon = () => Alert.alert('쿠폰내역 확인')


  //가게 이미지 슬라이드 설정
  const renderPagination1 = (index: number, total: number, context: Swiper) => {
    return (
      <View style={{
        position: 'absolute',
        width: width * 40,
        bottom: height * 10,
        right: width * 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Image
          source={require('../../assets/drawable-xxxhdpi/148.png')}
          style={{
            height: height * 14,
            width: width * 40,
            borderRadius: 50,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center'
          }} />

        <Text style={styles.paginationText}>
          <Text style={styles.paginationText}>{index + 1}</Text>/{total}
        </Text>

      </View>
    )
  }

  //요일정보 펼쳐보기 함수
  const [expanded, setExpanded] = useState(false);

  const schedule: { [key: string]: string } = {
    '월요일': '09:00 - 18:00',
    '화요일': '09:00 - 18:00',
    // ... 다른 요일 정보 추가
    '일요일': '09:00 - 18:00',
  };

  //옵션 펼쳐보기 함수
  const [expanded1, setExpanded1] = useState(false);

  const option: { [key: string]: string } = {
    '월요일': '09:00 - 18:00',
    '화요일': '09:00 - 18:00',
    // ... 다른 요일 정보 추가
    '일요일': '09:00 - 18:00',
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerimgview} //가게 이미지 들어가는 공간
      >
        {/* <Swiper renderPagination={renderPagination1}
          loop={false}>
        </Swiper> */}
        <View style={styles.naviview}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/drawable-xxxhdpi/381.png')} style={styles.back} />
          </TouchableOpacity>
          <TouchableOpacity onPress={Home}>
            <Image source={require('../../assets/drawable-xxxhdpi/384.png')} style={styles.home} />
          </TouchableOpacity>
        </View>

      </View>

      <View style={styles.headernaviview}>
        <View style={styles.nameview}>
          <Text style={styles.nametxt}>
            가게이름
          </Text>
        </View>
        <View style={{ height: height * 6 }} />
        <View style={{ marginLeft: width * 27 }}>
          <Text style={styles.storetypetxt}>
            가게종류
          </Text>
        </View>
      </View>

      <View style={{ height: height * 10 }} />
      <ScrollView>

        <View style={{ height: '100%', backgroundColor: '#ffffff' }}>
          <View style={{ marginLeft: width * 27 }}>
            <View style={{ marginTop: height * 12 }} />
            <View>

              <Text style={styles.maintxt}>
                내 쿠폰
              </Text>
              <View style={{ height: height * 13 }} />

              <TouchableOpacity onPress={checkcoupon}>
                <View style={styles.checkcouponview}>
                  <Text style={styles.checkcoupontxt}>
                    쿠폰 내역 확인하기
                  </Text>
                </View>
              </TouchableOpacity>

              <View>
                <View style={{ height: height * 22 }} />
                <Text style={styles.maintxt}>
                  찍쿵현황
                </Text>
                <View style={{ height: height * 11 }} />

                <JjikkungList />
              </View>
              <View style={{ height: height * 10 }} />
              {/* 쿠폰갯수, 유효사항 뷰 */}
              <View>
                <View style={styles.coupon5view}>
                  <Image source={require('../../assets/drawable-xxxhdpi/313.png')} style={styles.coupongift} />
                  <View style={{ width: width * 20, marginLeft: width * 3.4 }}>
                    <Text style={styles.couponcount}>
                      갯수
                    </Text>
                  </View>
                  <View style={{ width: width * 125 }}>
                    <Text style={styles.coupongifttxt}>
                      쿠폰혜택
                    </Text>
                  </View>
                  <View style={{ width: width * 148, marginLeft: width * 24, alignItems: 'flex-end' }}>
                    <Text style={styles.couponpricetxt}>
                      최소주문금액
                    </Text>
                  </View>
                </View>
                <View style={styles.coupon5view}>
                  <Image source={require('../../assets/drawable-xxxhdpi/313.png')} style={styles.coupongift} />
                  <View style={{ width: width * 20, marginLeft: width * 3.4 }}>
                    <Text style={styles.couponcount}>
                      갯수
                    </Text>
                  </View>
                  <View style={{ width: width * 125 }}>
                    <Text style={styles.coupongifttxt}>
                      쿠폰혜택
                    </Text>
                  </View>
                </View>
                <View style={{ width: '100%', marginTop: height * 12, marginBottom: height * 20 }}>
                  <Text style={styles.couponinfo}>
                    쿠폰 유효사항
                  </Text>
                </View>
                <View style={{ height: height * 25 }} />
              </View>
            </View>
            {/* 찍쿵현황 끝 */}

            <View>
              <Text style={styles.maintxt}>
                매장정보
              </Text>
              <View style={{height:height*14}}/>


<View>
  <View style={{ width: '100%', flexDirection: 'row' }}>
    <View style={{ marginTop: height * 3 }}>
      <Image source={require('../../assets/drawable-xxxhdpi/299.png')}
        style={{ width: width * 13.3, height: height * 13.3, resizeMode: 'contain' }} />
    </View>
    <View style={{ marginLeft: width * 11.7 }}>
      {/* 최초로 보여주는 요일 정보 */}
      <View style={styles.dayContainer}>
        <Text style={styles.dayText}>월요일(오늘)</Text>
        <Text style={styles.hoursText}>{schedule['월요일']}</Text>
        <TouchableOpacity onPress={() => setExpanded(!expanded)} >
          <Text style={styles.storesubtxt}>{expanded ? '접기' : '더보기'}</Text>
        </TouchableOpacity>
      </View>
      {/* '더보기'를 눌렀을 때 표시될 나머지 요일 정보 */}
      {expanded && Object.keys(schedule).slice(1).map((day, index) => (
        <View key={index} style={styles.dayContainer}>
          <Text style={styles.dayText}>{day}</Text>
          <Text style={styles.hoursText}>{schedule[day]}</Text>
        </View>
      ))}
    </View>
  </View>

  <View style={{ marginLeft: width * 25, flexDirection: 'row' }}>
    <View>
      <Text style={styles.storesubtxt}>
        브레이크타임
      </Text>
    </View>
    <View style={{ marginLeft: width * 24 }}>
      <Text style={styles.storesubtxt}>
        브레이크 시간
      </Text>
    </View>

  </View>
  <View style={{ marginLeft: width * 25, flexDirection: 'row' }}>
    <View>
      <Text style={styles.storesubtxt}>
        휴무일
      </Text>
    </View>
    <View style={{ marginLeft: width * 61 }}>
      <Text style={styles.storesubtxt}>
        휴무일
      </Text>
    </View>
  </View>

</View>
{/* 영업시간 뷰 끝*/}

<View style={{ height: height * 14 }} />
{/* 줄 여백*/}

<View>
  <View style={{ flexDirection: 'row' }}>
    <Image source={require('../../assets/drawable-xxxhdpi/297.png')}
      style={{ width: width * 14.9, height: height * 14.1, resizeMode: 'contain', marginTop: height * 2 }} />
    <View style={{ marginLeft: width * 11, width: width * 180 }}>
      <Text style={styles.storemaintxt} numberOfLines={1} ellipsizeMode="tail">
        주소
      </Text>
    </View>
    <View style={{ marginLeft: width * 25.1, flexDirection: 'row' }}>
      <Image source={require('../../assets/drawable-xxxhdpi/304.png')}
        style={{ width: width * 12.5, height: height * 15, resizeMode: 'contain' }} />
      <Text style={styles.copytxt}>
        복사
      </Text>
    </View>
    <View style={{ marginLeft: width * 16 }}>
      <Text style={styles.storesubtxt}>
        지도보기
      </Text>
    </View>
  </View>
</View>
{/* 주소 뷰 끝*/}

<View style={{ height: height * 14 }} />
{/* 줄 여백*/}

<View>
  <View style={{ flexDirection: 'row' }}>
    <Image source={require('../../assets/drawable-xxxhdpi/301.png')}
      style={{ width: width * 13.4, height: height * 16.7, resizeMode: 'contain' }} />
    <View style={{ marginLeft: width * 11.6 }}>
      <Text style={styles.storemaintxt}>
        전화번호
      </Text>
    </View>
  </View>
</View>
{/* 전화번호 뷰 끝*/}

<View style={{ height: height * 14 }} />
{/* 줄 여백*/}


<View style={{ height: height * 14 }} />
{/* 줄 여백*/}


            </View>


          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3"
  },
  headerimgview: {
    width: '100%',
    height: height * 231,
  },
  naviview: {
    width: '100%',
    height: height * 29,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: width * 27,
    marginTop: height * 22,
    position: 'absolute'
  },
  home: {
    width: width * 25,
    height: height * 22.8,
    resizeMode: 'contain',
    marginLeft: width * 289
  },
  storeimg: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch'
  },
  back: {
    width: width * 24.5,
    height: height * 17,
    resizeMode: 'contain',
  },
  headernaviview: {
    width: '100%',
    height: height * 94,
    backgroundColor: '#ffffff'
  },
  nameview: {
    width: width * 341,
    height: height * 37,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: height * 14,
    marginLeft: width * 24,
    justifyContent: 'space-between',
  },
  nametxt: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: width * 26,
    lineHeight: height * 30,
    color: '#2d2d2d'
  },
  storetypetxt: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: width * 16,
    lineHeight: height * 20,
    letterSpacing: width * -0.48,
    color: '#c7c7c7'
  },
  maintxt: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: width * 20,
    lineHeight: height * 30,
    letterSpacing: width * -0.6,
    color: '#2d2d2d'
  },
  checkcouponview: {
    width: width * 338,
    height: height * 52,
    borderRadius: 10,
    backgroundColor: "#ffa42c",
    alignItems: 'center',
    justifyContent: "center"
  },
  checkcoupontxt: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: width * 18,
    lineHeight: height * 26,
    letterSpacing: width * -0.72,
    color: '#ffffff'
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

  dayContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    // 여기에 원하는 스타일링 추가
  },
  dayText: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: width * 14,
    lineHeight: height * 20,
    letterSpacing: width * -0.42,
    color: '#2d2d2d',
    marginRight: width * 27
  },
  hoursText: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: width * 14,
    lineHeight: height * 20,
    letterSpacing: width * -0.42,
    color: '#2d2d2d',
    marginRight: width * 93
  },
  storesubtxt: {
    fontFamily: 'NotoSansKR-Medium',
    fontSize: width * 14,
    lineHeight: height * 20,
    letterSpacing: width * -0.42,
    color: '#a5a5a5',
  },
  storemaintxt: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: width * 14,
    lineHeight: height * 20,
    letterSpacing: width * -0.42,
    color: '#2d2d2d',
  },
  copytxt: {
    fontFamily: 'NotoSansKR-Medium',
    fontSize: width * 14,
    lineHeight: height * 20,
    letterSpacing: width * -0.42,
    color: '#ff9d00',
    marginLeft: width * 3
  },

  paginationText: {
    color: '#ffffff',
    fontSize: width * 13,
    letterSpacing: width * -0.35,
    lineHeight: height * 15
  },

})
export default StoreScreen