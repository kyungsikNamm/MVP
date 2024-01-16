import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import { height, width } from './screens/globalstyles'; //width,height 받아오기
import HomeScreen from './screens/HomeScreen'
import JjikkungScreen from './screens/JjikkungScreen';
import StoreScreen from './screens/StoreScreen';
import LoginScreen from './screens/LoginScreen';
import { MoreScreen, ServiceScreen, AlertScreen, QuestionScreen, NicknameSettingScreen } from './screens/MoreScreen/export'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="홈"
      screenOptions={() => ({
        tabBarActiveTintColor: '#3a3a3a',
        tabBarInactiveTintColor: '#999999',
        headerShown: false,
        // tabBarStyle: {height:responsiveHeight(9.8)}
      })}
    >
      <Tab.Screen name="홈" component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('./assets/drawable-xxxhdpi/5011.png') : require('./assets/drawable-xxxhdpi/5009.png')}
              style={{ width: width * 16.2, height: height * 18.4 }}
              resizeMode='contain'
            />
          ),
        }}
      />
      <Tab.Screen name="내 찍쿵함" component={JjikkungScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('./assets/drawable-xxxhdpi/5010.png') : require('./assets/drawable-xxxhdpi/5008.png')}
              style={{ width: width * 15.8, height: height * 19.1 }}
              resizeMode='contain'
            />
          ),
        }}
      />

    </Tab.Navigator>

  );

}

const Login = () => {
  return (
    <Stack.Navigator initialRouteName="Login"
      screenOptions={({ route }) => ({
        headerShown: false
      })}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={RootStackNavigator} />

    </Stack.Navigator>

  )

}


const RootStackNavigator = () => {
  return <Stack.Navigator
    screenOptions={({ route }) => ({
      headerShown: false
    })}>
    <Stack.Screen
      name="TabNavigation"
      component={TabNavigation}
    // stack navigator를 중첩할때마다 헤더가 하나씩 늘어나기 때문에 header hide처리
    // (추후 bottomTab 하위에 shared stack이 추가되는 케이스 고려) 
    />
    <Stack.Screen name="Store" component={StoreScreen} />
    <Stack.Screen name="More" component={MoreScreen} />
    <Stack.Screen name="Service" component={ServiceScreen} />
    <Stack.Screen name="Alert" component={AlertScreen} />
    <Stack.Screen name="Question" component={QuestionScreen}/>
    <Stack.Screen name="NicknameSetting" component={NicknameSettingScreen}/>
  </Stack.Navigator>
}

export default Login