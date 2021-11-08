import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import palette from 'palette';
import Navigation from '../../navigation/index';

import styles from './style';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'default'}
        backgroundColor={palette.black}
        drawBehind={true}
        visible={true}
      />
      {/* <Navigation /> */}
    </SafeAreaView>
  );
};
export default App;
