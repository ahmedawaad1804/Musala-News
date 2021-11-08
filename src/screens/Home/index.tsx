import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import palette from 'palette';

import styles from './style';
import dataService from 'src/services/dataService';
import NewsList from 'src/components/NewsList';
import {News} from '../../types/news';

const Home = () => {
  const [news, setNews] = useState<News[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await dataService
      .getAllNews()
      .then(res => {
        // console.log(res.data.articles.length);

        setNews(res.data.articles);
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  }, []);
  return (
    <View style={styles.container}>
      <NewsList news={news} refreshing={refreshing} onRefresh={onRefresh} />
    </View>
  );
};
export default Home;
