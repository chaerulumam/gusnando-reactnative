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
  FlatList,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'Home',
      switch: false,
      username: '',
      data: [1, 2, 3, 4, 5, 6, 7],
      dataSayur: [
        {
          namaSayur: 'Kangkung',
          harga: 5000,
        },
        {
          namaSayur: 'Sop',
          harga: 7000,
        },
        {
          namaSayur: 'Jengkol',
          harga: 10000,
        },
      ],
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

        <FlatList
          style={{flex: 1, marginTop: 20}}
          data={this.state.dataSayur}
          renderItem={({item, index}) => (
            <View style={styles.flatListView}>
              <Text style={styles.flatListText}>{item.namaSayur}</Text>
              <Text style={styles.flatListText}>{item.harga}</Text>
            </View>
          )}
          keyExtractor={item => item.namaSayur}
        />
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
  flatListView: {
    marginBottom: 10,
    backgroundColor: 'crimson',
    marginHorizontal: 20,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  flatListText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
