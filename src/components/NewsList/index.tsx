import React, {useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {News} from 'types/news';
import styles from './style';
import {useNavigation} from '@react-navigation/core';
interface Props {
  news: Array<News>;
  refreshing: boolean;
  onRefresh: () => void;
}

const NewsList = (props: Props) => {
  const {navigate} = useNavigation();

  const handleCarPress = item => {
    navigate('NewsDetails', item);
  };
  const newsCard = ({item}) => (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => {
        handleCarPress(item);
      }}>
      <View style={styles.innerContainer}>
        <Text style={styles.headerText}>{item.title || 'no title'}</Text>
        <Text style={styles.descriptionText}>{item.author}</Text>
      </View>
      <View style={styles.innerContainer}>
        <Image source={{uri: item.urlToImage}} style={styles.newsImage} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={props.news}
        renderItem={newsCard}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        refreshing={props.refreshing}
        onRefresh={props.onRefresh}
      />
    </View>
  );
};
export default NewsList;
