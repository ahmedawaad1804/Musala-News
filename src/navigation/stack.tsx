import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from 'src/screens/Home';

const Stack = createStackNavigator();

const StackProvider = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
export default StackProvider;
