import React, { Component } from 'react';
import { Text } from 'react-native';

import { Provider } from 'react-redux';
import store from './src/store';

import { IMDB } from './src/IMDB';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <IMDB />
      </Provider>
    );
  }
} 

export default App;
