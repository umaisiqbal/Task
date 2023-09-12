import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HooksScreen from './HooksScreen';
import MobXScreen from './MobXScreen';

const AppNavigator = createBottomTabNavigator(
  {
    Hooks: HooksScreen,
    MobX: MobXScreen,
  },
  {
    initialRouteName: 'Hooks', // You can choose the default tab
  }
);

export default createAppContainer(AppNavigator);
