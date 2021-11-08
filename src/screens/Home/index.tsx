import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import palette from 'palette';

import styles from './style';
import dataService from 'src/services/dataService';
import NewsList from 'src/components/NewsList';
import {News} from '../../types/news';

const Home = () => {
  const [news, setNews] = useState<News[]>([]);
  useEffect(() => {
    dataService
      .getAllNews()
      .then(res => {
        // console.log(res.data.articles.length);

        setNews(res.data.articles);
      })
      .catch(err => {
        console.log(err.response.data);
      });
  }, []);
  return (
    <View style={styles.container}>
      <NewsList news={news} />
    </View>
  );
};
export default Home;
