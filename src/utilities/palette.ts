import {useColorScheme} from 'react-native';
const Scema = () => {
  console.log('useColorScheme', useColorScheme());

  return useColorScheme() === 'dark';
};
export default {
  white: '#FFFFFF',
  black: '#000000',
  success: '#3adb76',
  yellow: '#ffcc33',
  placeholdeGrey: '#ccc',
  searchGrey: '#313131',
  red: '#EE4B2B',
  fontColor: '#FFFFFF',
};
