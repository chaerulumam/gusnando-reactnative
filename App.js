import React, {Component} from 'react';
import {View, Text} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>Hello</Text>
        <Text>Umem</Text>
      </View>
    );
  }
}

export default App;
