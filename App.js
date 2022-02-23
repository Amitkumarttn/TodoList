import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import Home from './src/screens/Home';
import store from './src/redux/store';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <Provider store={store}>
          <Home />
        </Provider>
      </SafeAreaView>
      <Toast />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C',
  },
});
