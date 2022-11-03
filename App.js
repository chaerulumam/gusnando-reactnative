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
            source={{
              uri: 'https://images.unsplash.com/photo-1662752531834-2d4606b7a27b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            }}
            style={{width: 300, height: 300}}
            resizeMode="cover"
          />
        </View>
      </View>
    );
  }
}

export default App;
