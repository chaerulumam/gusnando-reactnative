import React, {Component} from 'react';
import {View, Text} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: 'crimson',
            paddingVertical: 20,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 3,
          }}>
          <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 20}}>
            Header
          </Text>
        </View>
      </View>
    );
  }
}

export default App;
