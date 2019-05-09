import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import WeatherApp from './src/WeatherApp';

import { Provider } from 'react-redux';
import store from './src/store';

const data = require('./src/data.json');


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Weather App</Text>
        <Text style={styles.title}>Weather Statistics</Text>
        <TouchableOpacity>
          <View style={styles.fbLogin}>
            <View style={{ alignSelf: 'flex-start', flex: 1, marginLeft: 6 }}>
              <Ionicons name="logo-facebook" size={30} color="#FFF" />
            </View>
            <Text style={styles.fbLoginComponent}>Login</Text>
          </View>
        </TouchableOpacity>
        <Provider store={store}>
          <WeatherApp />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 0,
    backgroundColor: '#e0f6ff',
  },
  header: {
    fontSize: 30,
    padding: 6,
    paddingTop: Constants.statusBarHeight + 6,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#0077B1',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    padding: 20,
  },
  fbLogin: {
    width: 200,
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: '#4366B2',
    padding: 6,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  fbLoginComponent: {
    flex: 2,
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
});
