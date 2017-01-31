import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import CodeSharing from './app';
AppRegistry.registerComponent('CodeSharing', () => CodeSharing);

import styles from  './styles';

class ReactNativeWeb extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CodeSharing name="WebBabel" style={styles.cs} />
        <Text style={styles.cs}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.web.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload
        </Text>
      </View>
    );
  }
}


AppRegistry.registerComponent('ReactNativeWeb', () => ReactNativeWeb);
AppRegistry.runApplication('ReactNativeWeb', { rootTag: document.getElementById('react-app') });