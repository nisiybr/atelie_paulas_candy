import React from 'react';
import {View, Text} from 'react-native';

// import { Container } from './styles';

export default function Stock() {
  return (
    <View>
      <Text>Stock</Text>
    </View>
  );
}

Stock.navigationOptions = {
  headerTitle: 'Estoque',
  headerLayoutPreset: 'center', // Deixa o titulo no centro por padrao
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#7098FF',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
