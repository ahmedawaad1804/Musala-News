import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from 'src/screens/Home';
import NewsDetails from 'src/screens/NewsDetails';
import MyTabs from './tab';

const Stack = createStackNavigator();

const StackProvider = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="NewsDetails" component={NewsDetails} />
    </Stack.Navigator>
  );
};
export default StackProvider;
