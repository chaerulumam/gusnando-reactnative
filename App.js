import React, {Component} from 'react';
import {View, Text, StatusBar, Image} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="dark-content" backgroundColor="#7b1fa2" />
        <View
          style={{
            backgroundColor: '#9c27b0',
            paddingVertical: 20,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 3,
          }}>
          <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 20}}>
            Header
          </Text>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('./src/image/image1.jpg')}
            style={{width: 300, height: 300}}
          />
        </View>
      </View>
    );
  }
}

export default App;
