import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ProfileConsumerHome from '../../screens/Profile/Profile';
import ProfileConsumerMessages from '../../screens/Messages/Messages';

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
      <TopTab.Screen name='ProfileConsumerMessages' component={ProfileConsumerMessages} />
    </TopTab.Navigator>
  );
};

export default TopTabProfileConsumer;
