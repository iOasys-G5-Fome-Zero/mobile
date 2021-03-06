import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { useAppSelector } from '../store/store';

// screens
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import Onboarding from '../screens/Onboarding/Onboarding';
import ConfirmRegister from '../screens/ConfirmRegister/ConfirmRegister';
import BasketProducer from '../screens/Producer/BasketProducer/BasketProducer';
import Splash from '../screens/Splash/Splash';
import ProducerTabNavigator from './tabs/ProducerTabNavigator';
import ConsumerTabNavigator from './tabs/ConsumerTabNavigator';

import { WebView } from '../components';

// types
export type MainStackParams = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
  ConfirmRegister: undefined;
  ProducerTabNavigator: undefined;
  ConsumerTabNavigator: undefined;
  Onboarding: undefined;
  BasketProducer: undefined;
  WebView: undefined;
};

const Main = createNativeStackNavigator<MainStackParams>();

const Routes: React.FC = () => {
  const goWeb = useAppSelector(state => state.webReducer.go);
  const user = useAppSelector(state => state.userReducer.user);
  const logged = useAppSelector(state => state.userReducer.logged);

  useEffect(() => {
    if (goWeb) {
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor('#262626');
    } else {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('#6CCD91');
    }
  });

  const returnMainSatck = () => {
    if (!logged) {
      return (
        <>
          <Main.Screen name='Splash' component={Splash} />
          <Main.Screen name='Login' component={Login} />
          <Main.Screen name='Register' component={Register} />
          <Main.Screen name='WebView' component={WebView} />
          <Main.Screen name='ConfirmRegister' component={ConfirmRegister} />
          <Main.Screen name='Onboarding' component={Onboarding} />
        </>
      );
    }

    if (logged && user.userType === 'producer') {
      return (
        <>
          <Main.Screen name='ProducerTabNavigator' component={ProducerTabNavigator} />
          <Main.Screen name='BasketProducer' component={BasketProducer} />
          <Main.Screen name='WebView' component={WebView} />
        </>
      );
    }

    return (
      <>
        <Main.Screen name='ConsumerTabNavigator' component={ConsumerTabNavigator} />
        <Main.Screen name='WebView' component={WebView} />
      </>
    );
  };

  return (
    <NavigationContainer>
      <Main.Navigator
        initialRouteName='Splash'
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#FFFFFF' }
        }}
      >
        {returnMainSatck()}
      </Main.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
