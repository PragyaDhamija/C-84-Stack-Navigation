import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CreateStory from './screens/CreateStory';
import Feed from './screens/Feed';
import DrawerNavigator from './navigation/DrawerNavigator';


export default function App() {
  return (
    <NavigationContainer>
        <DrawerNavigator/>
    </NavigationContainer>
  )

}


