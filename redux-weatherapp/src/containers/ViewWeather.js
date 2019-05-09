import { connect } from 'react-redux';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }
  getWeatherInfo = city => {
  return fetch(
    'https://openweathermap.org/data/2.5/forecast/daily/?appid=b6907d289e10d714a6e88b30761fae22&id=' + city.id + '&units=metric'
  )
    .then(res => res.json())
    .then(res => {
      console.log('res', res);
      this.setState({ data: res.list[0] })
    })
    .catch(err => console.log(err));
};

  componentDidMount() {
    this.getWeatherInfo(this.props.currCity);
  }

  componentDidUpdate(prevProps) {
    if (this.props.currCity != prevProps.currCity) {
      console.log(this.props.currCity);
      this.getWeatherInfo(this.props.currCity);
    }
  }

  render() {
    console.log('Data', this.state.data);
    if (typeof this.state.data !== "undefined" && Object.keys(this.state.data).length > 0) {
      return (
        <View style={styles.weatherInfo}>
          <Text
            style={{ fontSize: 20, fontWeight: '500', textAlign: 'center' }}>
            Weather in {this.props.currCity.name}
          </Text>
          <Image
            source={{
              uri: 'http://openweathermap.org/img/w/' + this.state.data.weather[0].icon + '.png',
            }}
            style={{ width: 100, height: 100 }}
          />
          <Text style={styles.weatherInfoComponent}>
            Temperture: {this.state.data.temp.day}&#176;C
          </Text>
          <Text style={styles.weatherInfoComponent}>
            Pressure: {this.state.data.pressure} hPa
          </Text>
          <Text style={styles.weatherInfoComponent}>
            Humidity: {this.state.data.humidity}%
          </Text>
          <Text style={styles.weatherInfoComponent}>
            Wind speed: {this.state.data.speed} meter/sec
          </Text>
        </View>
      );
      // return (
      //   <View style={styles.container}>
      //   {console.log(this.state.data)}
      //     <Text>Success !</Text>
      //   </View>
      // );
    }
    return (
      <View style={styles.weatherInfo}>
        <Text style={{ textAlign: "center", alignContent: 'center' }}>Loading...</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  currCity: state.currCity,
});

export default connect(mapStateToProps)(Weather);

const styles = StyleSheet.create({
  weatherInfo: {
    margin: 10,
    marginTop: 0,
    padding: 20,
    backgroundColor: '#59C4EB',
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
  },
  weatherInfoComponent: {
    color: '#e0f6ff',
    fontSize: 18,
  },
});
