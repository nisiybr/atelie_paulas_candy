import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

export default function Configurations() {
  return (
    <View>
      <Text>Configurations</Text>
    </View>
  );
}

Configurations.navigationOptions = {
  tabBarLabel: 'Configurações',
  tabBarIcon: ({tintColor}) => (
    <Icon name="settings" size={20} color={tintColor} />
  ),
};
