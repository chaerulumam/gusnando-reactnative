import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'Home',
      switch: false,
    };
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
            {this.state.header}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => console.log('halo')}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1662752531834-2d4606b7a27b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            }}
            style={{width: 300, height: 300}}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Switch
            value={this.state.switch}
            onValueChange={() => this.setState({switch: !this.state.switch})}
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#9c27b0',
            paddingVertical: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            marginHorizontal: 20,
            borderRadius: 50,
            elevation: 3,
          }}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>Click Here</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
