/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import MainStack from './src/Navigation/MainStack';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <MainStack />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
