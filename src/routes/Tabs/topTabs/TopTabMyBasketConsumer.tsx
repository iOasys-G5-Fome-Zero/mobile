import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {
  MyBasketConsumerSignPlan,
  MyBasketConsumerSignFood,
  MyBasketConsumerSignPayment
} from '../../screens/Consumer';

export type TopTabMyBasketConsumerParams = {
  MyBasketConsumerSignPlan: undefined;
  MyBasketConsumerSignFood: undefined;
  MyBasketConsumerSignPayment: undefined;
};

const TopTab = createMaterialTopTabNavigator();

const TopTabMyBasketConsumer = () => {
  return (
    <TopTab.Navigator
      initialRouteName='MyBasketConsumerSignPlan'
      screenOptions={{
        swipeEnabled: false,
        tabBarStyle: { display: 'none' }
      }}
    >
      <TopTab.Screen name='MyBasketConsumerSignPlan' component={MyBasketConsumerSignPlan} />
      <TopTab.Screen name='MyBasketConsumerSignFood' component={MyBasketConsumerSignFood} />
      <TopTab.Screen name='MyBasketConsumerSignPayment' component={MyBasketConsumerSignPayment} />
    </TopTab.Navigator>
  );
};

export default TopTabMyBasketConsumer;
