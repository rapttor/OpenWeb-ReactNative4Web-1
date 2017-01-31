import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var btn = React.createClass({
  componentDidMount: function() {
    this.props.name="TEST";
  },
  render: function () {
    return (<div>
        <p>{this.props.name}</p>
      </div>)
  }
});

module.exports = btn;