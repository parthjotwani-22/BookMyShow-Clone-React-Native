import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screens from '../utils/screens';

const Stack = createNativeStackNavigator();

const StackNavigation = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={screens.Start}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Confirmation"
          component={screens.Confirmation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={screens.Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={screens.Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Buzz"
          component={screens.Buzz}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={screens.Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PaymentComplete"
          component={screens.PaymentCompleteScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Purchases"
          component={screens.PurchasesScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Description"
          component={screens.MovieDescription}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EventDescription"
          component={screens.EventDescription}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Live"
          component={screens.Live}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Seatsel"
          component={screens.Seatsel}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={screens.Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainTab"
          component={screens.MainTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Booking"
          component={screens.BookingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PayContact"
          component={screens.PayContact}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
