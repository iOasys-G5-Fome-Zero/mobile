import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {
  FinancialProducerHome,
  FinancialProducerExtract,
  FinancialProducerRegisterPix
} from '../../../screens/Producer';

export type TopTabFinancialProducerParams = {
  FinancialProducerHome: undefined;
  FinancialProducerExtract: undefined;
  FinancialProducerRegisterPix: undefined;
};

const TopTab = createMaterialTopTabNavigator();

const TopTabFinancialProducer = () => {
  return (
    <TopTab.Navigator
      initialRouteName='FinancialProducerHome'
      screenOptions={{
        swipeEnabled: false,
        tabBarStyle: { display: 'none' }
      }}
    >
      <TopTab.Screen name='FinancialProducerHome' component={FinancialProducerHome} />
      <TopTab.Screen name='FinancialProducerExtract' component={FinancialProducerExtract} />
      <TopTab.Screen name='FinancialProducerRegisterPix' component={FinancialProducerRegisterPix} />
    </TopTab.Navigator>
  );
};

export default TopTabFinancialProducer;
