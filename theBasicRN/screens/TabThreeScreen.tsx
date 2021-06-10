import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default class TabThreeScreen extends Component {
  render() {
  return (
    <WebView source={{ uri: 'https://thebasicmoda.com.br/account' }} />
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
