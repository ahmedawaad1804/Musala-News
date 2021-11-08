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
        <Text style={styles.headerText}>{item.author || 'no Adress'}</Text>
        <Text style={styles.descriptionText}>{item.description}</Text>
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
      />
    </View>
  );
};
export default NewsList;
