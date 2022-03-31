import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import Login from './screens/Login/Login';

import ProducerTabNavigator from './Tabs/ProducerTabNavigator';
import ConsumerTabNavigator from './Tabs/ConsumerTabNavigator';

// types
export type MainStackParams = {
  Login: undefined;
  ProducerTabNavigator: undefined;
  ConsumerTabNavigator: undefined;
};

const Main = createNativeStackNavigator<MainStackParams>();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Main.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#fff' }
        }}
      >
        <Main.Screen name='Login' component={Login} />
        <Main.Screen name='ProducerTabNavigator' component={ProducerTabNavigator} />
        <Main.Screen name='ConsumerTabNavigator' component={ConsumerTabNavigator} />
      </Main.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
