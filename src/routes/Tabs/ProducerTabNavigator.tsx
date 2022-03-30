import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// screens
import HomeConsumer from '../screens/Consumer/HomeConsumer/HomeConsumer';
import FinancialConsumer from '../screens/Consumer/FinancialConsumer/FinancialConsumer';
import AboutConsumer from '../screens/Consumer/AboutConsumer/AboutConsumer';

export type TabProducerStackParams = {
  HomeProducer: undefined;
  FinancialProducer: undefined;
  AboutProducer: undefined;
};

const Tab = createMaterialBottomTabNavigator();

const ProducerTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      activeColor='#262626'
      inactiveColor='#C4C4C4'
      barStyle={{ backgroundColor: '#FFFFFF' }}
    >
      <Tab.Screen name='Home' component={HomeConsumer} />
      <Tab.Screen name='Financial' component={FinancialConsumer} />
      <Tab.Screen name='About' component={AboutConsumer} />
    </Tab.Navigator>
  );
};

export default ProducerTabNavigator;
