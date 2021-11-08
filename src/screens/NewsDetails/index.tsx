import React, {useEffect} from 'react';
import {SafeAreaView, Text, Image, View} from 'react-native';
import palette from 'palette';
import Navigation from '../../navigation/index';

import styles from './style';
import LanguageButton from 'src/components/LanguageButton';
const NewsDetails = ({route: {params}}) => {
  useEffect(() => {
    console.log(params);
  });
  return (
    <View style={styles.container}>
      <Image source={{uri: params.urlToImage}} style={styles.newsImage} />
      <Text style={styles.headerText}>{params.title || 'no title'}</Text>
      <Text style={styles.authorText}>{params.author}</Text>
      <Text style={styles.urlText}>{params.url}</Text>
      <Text style={styles.contentText}>{params.content}</Text>
      <LanguageButton />
    </View>
  );
};
export default NewsDetails;
