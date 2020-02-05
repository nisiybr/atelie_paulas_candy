import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

export default function Sales() {
  return (
    <View>
      <Text>Sales</Text>
    </View>
  );
}

Sales.navigationOptions = {
  tabBarLabel: 'Vendas',
  tabBarIcon: ({tintColor}) => (
    <Icon name="add-shopping-cart" size={20} color={tintColor} />
  ),
};
