import {Dimensions} from 'react-native';

//import {responsiveHeight,responsiveWidth,responsiveFontSize} from 'react-native-responsive-dimensions'
export const colors = {
  primary: '#EC8B57',
  black: '#191919',
  red: '#FF3636',
  lightBlue: '#36D2FF',
  green: '#8FEF73',
  grey: '#767676',
  borderGrey: '#C9C9C9',
  statusGrey: '#666666',
  textGrey: '#A2A2A2',
  darkBlue: '#83abeb',
};


export const basicDimensions = { // 디자이너가 작업하고 있는 XD파일 스크린의 세로,가로
  height: 852,
  width: 393,
};
export const width = parseFloat(
  (Dimensions.get('window').width * (1 / basicDimensions.width)).toFixed(2)
);

export const height = parseFloat(
  (Dimensions.get('window').height * (1 / basicDimensions.height)).toFixed(2)
);