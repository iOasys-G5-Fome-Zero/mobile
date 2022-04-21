import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ProfileConsumerHome from '../../screens/Profile/Profile';
// import ProfileConsumerMessages from '../../screens/Messages/Messages'; // TODO: proxima feature

export type TopTabProfileProducerStackParams = {
  ProfileProducerHome: undefined;
  ProfileProducerMessages: undefined;
};

const TopTab = createMaterialTopTabNavigator();

const TopTabProfileConsumer = () => {
  return (
    <TopTab.Navigator
      initialRouteName='ProfileConsumerHome'
      screenOptions={{
        swipeEnabled: false,
        tabBarStyle: { display: 'none' }
      }}
    >
      <TopTab.Screen name='ProfileConsumerHome' component={ProfileConsumerHome} />
    </TopTab.Navigator>
  );
};

export default TopTabProfileConsumer;
