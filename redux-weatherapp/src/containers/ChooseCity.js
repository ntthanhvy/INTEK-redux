import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Picker,
  StyleSheet,
  Image,
} from 'react-native';
import { Constants } from 'expo';

import { connect } from 'react-redux';
import { setCity } from '../actions';

const data = require('../data.json');

class ChooseCity extends React.Component {
  state = {
    text: data[0].name,
    id: data[0].id,
  };

  findCity = (text = null, id = null) => {
    let city = data[0];
    console.log(text);
    if (text) {
      city = data.find(c => c.name.toLowerCase().includes(text.toLowerCase()));
    }
    if (id) {
      city = data.find(c => c.id === id);
    }
    if (city) {
        this.setState({ id: city.id });
        this.props.dispatch(setCity(city));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.text}
          onChangeText={text => {
            this.setState({ text });
            this.findCity(this.state.text);
          }}
        />
        <Picker
          style={styles.picker}
          itemStyle={styles.itemPicker}
          onValueChange={(value, index) => {
            this.setState({ text: data[index].name, id: data[index].id });
            this.props.dispatch(setCity(data[index]));
          }}
          selectedValue={this.state.id}>
          {data.map(city => (
            <Picker.Item key={city.name} label={city.name} value={city.id} />
          ))}
        </Picker>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  currCity: state.currCity,
});

const mapDispatchToProps = dispatch => ({
  currCity: city => dispatch(setCity(city)),
});

export default connect(mapStateToProps.mapDispatchToProps)(ChooseCity);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 8,
    marginBottom: 0,
  },
  input: {
    margin: 12,
    marginBottom: 0,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  picker: {
    marginHorizontal: 20,
  },
  itemPicker: {
    height: 150,
  },
});
