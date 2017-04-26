/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
//import { Container, Header, Content, Card, CardItem, Text, Body, Left, Button, Icon, Title, Right } from 'native-base';
import App from './src/App.js';

export default class helloworld extends Component {
  render() {
    return (
      <App />
    );
  }
}


AppRegistry.registerComponent('helloworld', () => helloworld);