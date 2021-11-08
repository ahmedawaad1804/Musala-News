import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import palette from 'palette';

import styles from './style';
import dataService from 'src/services/dataService';
const Home = () => {
  useEffect(() => {
    dataService
      .getAllNews()
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.response.data);
      });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'default'}
        backgroundColor={palette.black}
        drawBehind={true}
        visible={true}
      />
      {/* <Navigation /> */}
      <Text>home</Text>
    </SafeAreaView>
  );
};
export default Home;
