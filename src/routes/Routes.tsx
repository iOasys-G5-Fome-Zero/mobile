import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { useAppSelector } from '../store/store';
import { IFriend } from '../@types/interfaces/Friend';

// screens
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import Onboarding from './screens/Onboarding/Onboarding';
import Chat from './screens/Chat/Chat';

import ProducerTabNavigator from './tabs/ProducerTabNavigator';
import ConsumerTabNavigator from './tabs/ConsumerTabNavigator';

import { WebView } from '../components';

// types
export type MainStackParams = {
  Login: undefined;
  Register: undefined;
  ProducerTabNavigator: undefined;
  ConsumerTabNavigator: undefined;
  Onboarding: undefined;
  WebView: undefined;
  Chat: IFriend;
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

  // if (goWeb) return <WebView />;

  return (
    <NavigationContainer>
      <Main.Navigator
        initialRouteName='Onboarding'
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#FFFFFF' }
        }}
      >
        <Main.Screen name='Login' component={Login} />
        <Main.Screen name='Register' component={Register} />
        <Main.Screen name='ProducerTabNavigator' component={ProducerTabNavigator} />
        <Main.Screen name='ConsumerTabNavigator' component={ConsumerTabNavigator} />
        <Main.Screen name='Onboarding' component={Onboarding} />
        <Main.Screen name='WebView' component={WebView} />
        <Main.Screen name='Chat' component={Chat} />
      </Main.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
