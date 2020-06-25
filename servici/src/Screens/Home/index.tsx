import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Home = props => {
  const onPress = () => {
    props.navigation.navigate('Search');
  };

  return (
    <View style={styles.mainContainer}>
      <Text>Home</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 30,
  },
});
export default Home;
