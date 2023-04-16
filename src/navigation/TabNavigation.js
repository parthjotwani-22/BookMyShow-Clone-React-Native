import React from 'react';
import {View, Text} from 'react-native';
import CustomTab from './CustomTab';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import screens from '../utils/screens';
const Tab = createBottomTabNavigator();
const TabNavigation = props => {
  return (
    <Tab.Navigator
      initialRouteName="TabHome"
      tabBar={props => <CustomTab {...props} />}>
      <Tab.Screen
        name="Home"
        component={screens.Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Live"
        component={screens.Live}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Buzz"
        component={screens.Buzz}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={screens.Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
