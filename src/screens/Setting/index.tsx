import React from 'react';
import {View} from 'react-native';

import styles from './style';

import LanguageButton from 'src/components/LanguageButton';

const Setting = () => {
  return (
    <View style={styles.container}>
      <LanguageButton />
    </View>
  );
};
export default Setting;
