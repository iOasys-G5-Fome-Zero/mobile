import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { useAppSelector } from '../store/store';

// screens
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';

import ProducerTabNavigator from './tabs/ProducerTabNavigator';
import ConsumerTabNavigator from './tabs/ConsumerTabNavigator';

import { WebView } from '../components';

// types
export type MainStackParams = {
  Login: undefined;
  Register: undefined;
  ProducerTabNavigator: undefined;
  ConsumerTabNavigator: undefined;
};

const Main = createNativeStackNavigator<MainStackParams>();

const Routes: React.FC = () => {
  const goWeb = useAppSelector(state => state.webReducer.go);

  useEffect(() => {
    if (goWeb) {
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor('#262626');
    } else {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('#6CCD91');
    }
  });

  if (goWeb) return <WebView />;

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
        <Main.Screen name='Register' component={Register} />
        <Main.Screen name='ProducerTabNavigator' component={ProducerTabNavigator} />
        <Main.Screen name='ConsumerTabNavigator' component={ConsumerTabNavigator} />
      </Main.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
