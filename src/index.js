import React from 'react';
import {StatusBar} from 'react-native';
import App from './App';
import 'react-native-gesture-handler';

// import { Container } from './styles';

export default function Index() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <App />
    </>
  );
}
