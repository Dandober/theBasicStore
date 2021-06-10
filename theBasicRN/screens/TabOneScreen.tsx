import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default class TabOneScreen extends Component {
  render() {
  return (
    <WebView source={{ uri: 'https://thebasicmoda.com.br/' }} />
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
