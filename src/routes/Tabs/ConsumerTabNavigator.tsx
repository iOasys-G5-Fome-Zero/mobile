import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// screens
import HomeProducer from '../screens/Producer/HomeProducer/HomeProducer';
import FinancialProducer from '../screens/Producer/FinancialProducer/FinancialProducer';
import AboutProducer from '../screens/Producer/AboutProducer/AboutProducer';

export type TabConsumerStackParams = {
  HomeConsumer: undefined;
  FinancialConsumer: undefined;
  AboutConsumer: undefined;
};

const Tab = createMaterialBottomTabNavigator();

const ConsumerTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      activeColor='#262626'
      inactiveColor='#C4C4C4'
      barStyle={{ backgroundColor: '#FFFFFF' }}
    >
      <Tab.Screen name='Home' component={HomeProducer} />
      <Tab.Screen name='Financial' component={FinancialProducer} />
      <Tab.Screen name='About' component={AboutProducer} />
    </Tab.Navigator>
  );
};

export default ConsumerTabNavigator;
