
import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

export default class CodeSharing extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>So here it is: {this.props.name}</Text>
      </View>
      
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});