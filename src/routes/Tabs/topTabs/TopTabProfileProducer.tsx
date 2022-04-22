import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ProfileProducerHome from '../../../screens/Profile/Profile';
// import ProfileProducerMessages from '../../screens/Messages/Messages'; // TODO: proxima feature

export type TopTabProfileProducerStackParams = {
  ProfileProducerHome: undefined;
  ProfileProducerMessages: undefined;
};

const TopTab = createMaterialTopTabNavigator();

const TopTabProfileProducer = () => {
  return (
    <TopTab.Navigator
      initialRouteName='ProfileProducerHome'
      screenOptions={{
        swipeEnabled: false,
        tabBarStyle: { display: 'none' }
      }}
    >
      <TopTab.Screen name='ProfileProducerHome' component={ProfileProducerHome} />
    </TopTab.Navigator>
  );
};

export default TopTabProfileProducer;
