import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';

import { Card } from 'react-native-paper';
import ChooseCity from './containers/ChooseCity';
import ViewWeather from './containers/ViewWeather';

const data = require('./data.json');

class WeatherApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ChooseCity />
          <ViewWeather />
      </View>
    );
  }
}

export default WeatherApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
});
