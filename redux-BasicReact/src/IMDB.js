import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

import { Constants } from 'expo';

import Content from './components/Content'

export class IMDB extends Component {
  data = require('./Info.json');
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Basic React Native App</Text>
        <ScrollView>
          <Text style={styles.h3}>Top 10 Movies of IMDB</Text>
          <Content data={this.data} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  h1: {
    alignContent: 'flex-end',
    padding: 20,
    paddingBottom: 0,
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: '#308DCC',
    color: '#fff',
  },
  h3: {
    margin: 15,
    fontSize: 24,
    textAlign: 'center',
  },
});