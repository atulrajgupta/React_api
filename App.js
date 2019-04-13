import React, {Component} from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';

export default class App extends Component {

  componentWillMount(){
    axios.get('http://www.json-generator.com/api/json/get/cfvICkxUKq?indent=2')
  .then(function (response) {
    console.warn(response);
  })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to React Native!</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

};
