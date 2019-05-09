import React, { Component } from 'react'
import {
  View, 
  StyleSheet, 
  Linking, 
  TouchableOpacity, 
  Dimensions,
  FlatList,
  Text,
  Image
} from 'react-native'

import { Card } from 'react-native-paper'


export default class Content extends Component {
  render() {
    return <FlatList data={this.props.data} renderItem={({ item }) => (
      <Card style={styles.card}>
      <Text style={styles.movieTitle}>{item.title}</Text>
      <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
        <Image
          source={{ uri: item.image }}
          style={{
            flex: 1,
            width: 350 - 20,
            height: 350,
            alignSelf: 'center',
          }}
          keyExtractor={(item, index) => index.toString()}
        />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
        <View style={styles.button}>
          <Text style={styles.btnTitle}>More Info</Text>
        </View>
      </TouchableOpacity>
    </Card>
    )} />;
  }
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    marginBottom: 24,
  },
  movieTitle: {
    textAlign: 'center',
    fontSize: 18,
    margin: 10,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#308DCC',
    margin: 10,
  },
  btnTitle: {
    margin: 4,
    padding: 6,
    textAlign: 'center',
    color: '#308DCC',
    fontSize: 15,
  },
});