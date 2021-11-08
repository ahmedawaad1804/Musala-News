import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import palette from 'palette';
import Navigation from '../../navigation/index';

import styles from './style';
const NewsDetails = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'default'}
        backgroundColor={palette.black}
        drawBehind={true}
        visible={true}
      />
      {/* <Navigation /> */}
      <Text>NewsDetails</Text>
    </View>
  );
};
export default NewsDetails;
