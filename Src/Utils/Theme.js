import {Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default Theme = {
  primary: '#0045A4',
  white: 'white',
  yellow: '#FF9D00',
  pink: '#E8027E',
  blue: '#05A2FF',
  purple: '#55208A',
  textColorLight: '#929292',
  orange: '#FF824C',

  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,

  heightPer: Dimensions.get('window').height / 100,
  widthPer: Dimensions.get('window').width / 100,
  wp,
  hp,
};
