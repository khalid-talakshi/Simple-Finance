import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation'

import Landing from './src/Landing'

const AppNavigator = createStackNavigator({
  Landing: Landing
});

const AppContainter = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainter />
  }
}

