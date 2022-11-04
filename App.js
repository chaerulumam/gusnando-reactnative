import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Switch,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'Home',
      switch: false,
      username: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#7b1fa2" />
        <View style={styles.header}>
          <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 20}}>
            {this.state.header}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => console.log('halo')}
          style={styles.imageHeader}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1662752531834-2d4606b7a27b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <View style={styles.switch}>
          <Switch
            value={this.state.switch}
            onValueChange={() => this.setState({switch: !this.state.switch})}
          />
        </View>

        <TextInput
          style={styles.textInput}
          value={this.state.username}
          onChangeText={value => this.setState({username: value})}
        />

        <ScrollView>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>Click Here</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>Click Here</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>Click Here</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>Click Here</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: '#212121',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 50,
    elevation: 3,
  },
  textInput: {
    borderBottomWidth: 1,
    marginHorizontal: 20,
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: '#9c27b0',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  image: {width: 300, height: 300},
  switch: {justifyContent: 'center', alignItems: 'center', marginTop: 20},
  imageHeader: {justifyContent: 'center', alignItems: 'center', marginTop: 20},
});

export default App;
