import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Products from './pages/Products';
import CreateProduct from './pages/Products/CreateProduct';
import EditProduct from './pages/Products/EditProduct';

import Stock from './pages/Stock';
import Sales from './pages/Sales';
import Configurations from './pages/Configurations';

const tabBarOptions = {
  keyboardHidesTabBar: true,
  activeTintColor: '#000',
  inactiveTintColor: '#fff',
  labelStyle: {
    fontSize: 12,
  },
  style: {
    backgroundColor: '#7098FF',
    height: 80,
    paddingBottom: 20,
    paddingTop: 10,
    margin: 0,
  },
};

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Products: {
        screen: createStackNavigator({
          Products,
          CreateProduct,
          EditProduct,
        }),
        navigationOptions: {
          tabBarVisible: true,
          tabBarLabel: 'Produtos',
          tabBarIcon: ({tintColor}) => (
            <Icon name="work" size={20} color={tintColor} />
          ),
        },
      },
      Stock: {
        screen: createStackNavigator({
          Stock,
        }),
        navigationOptions: {
          tabBarVisible: true,
          tabBarLabel: 'Estoque',
          tabBarIcon: ({tintColor}) => (
            <Icon name="assessment" size={20} color={tintColor} />
          ),
        },
      },
      Sales,
      Configurations,
    },
    {
      tabBarOptions,
    },
  ),
);

export default Routes;
