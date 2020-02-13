import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import App from './App';
import 'react-native-gesture-handler';
import './config/ReactotronConfig';
import store from './store';

export default function Index() {
  return (
    <Provider store={store}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <App />
    </Provider>
  );
}
