import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// icons
import HomeIcon from '../../assets/icons/home-icon.svg';
import BasketIcon from '../../assets/icons/basket-icon.svg';
import DonationsIcon from '../../assets/icons/donations-icon.svg';
import ProfileIcon from '../../assets/icons/profile-icon.svg';

// screens
import {
  HomeConsumer,
  MyBasketConsumerSignPlan,
  DonationsConsumer,
  ProfileConsumer,
  ProfileMessages,
  MyBasketConsumerSignFood,
  MyBasketConsumerSignPayment
} from '../screens/Consumer';

export type BottomTabConsumerStackParams = {
  HomeConsumer: undefined;
  MyBasketConsumer: undefined;
  DonationsConsumer: undefined;
  ProfileConsumer: undefined;
};

export type TopTabMyBasketConsumerStackParams = {
  MyBasketConsumerSignPlan: undefined;
  MyBasketConsumerSignFood: undefined;
  MyBasketConsumerSignPayment: undefined;
};

export type TopTabProfileConsumerStackParams = {
  ProfileConsumer: undefined;
  ProfileMessages: undefined;
};

const BottomTab = createMaterialBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const retunrIconTab = ({ icon, focused }) => {
  switch (icon) {
    case 'home':
      return <HomeIcon fill={focused ? '#00A857' : '#3A3A3A'} />;
    case 'basket':
      return <BasketIcon fill={focused ? '#00A857' : '#3A3A3A'} />;
    case 'donations':
      return <DonationsIcon fill={focused ? '#00A857' : '#3A3A3A'} />;
    case 'profile':
      return <ProfileIcon fill={focused ? '#00A857' : '#3A3A3A'} />;
    default:
  }
};

const ReturnTopTabMyBasketConsumer = () => {
  return (
    <TopTab.Navigator
      initialRouteName='MyBasketConsumerSignPlan'
      screenOptions={{
        swipeEnabled: false,
        tabBarStyle: { display: 'none' }
      }}
    >
      <TopTab.Screen name='MyBasketConsumerSignPlan' component={MyBasketConsumerSignPlan} />
      <TopTab.Screen name='MyBasketConsumerSignFood' component={MyBasketConsumerSignFood} />
      <TopTab.Screen name='MyBasketConsumerSignPayment' component={MyBasketConsumerSignPayment} />
    </TopTab.Navigator>
  );
};

const ReturnTopTabProfileConsumer = () => {
  return (
    <TopTab.Navigator
      initialRouteName='ProfileConsumer'
      screenOptions={{
        swipeEnabled: false,
        tabBarStyle: { display: 'none' }
      }}
    >
      <TopTab.Screen name='ProfileConsumer' component={ProfileConsumer} />
      <TopTab.Screen name='ProfileMessages' component={ProfileMessages} />
    </TopTab.Navigator>
  );
};

const ConsumerTabNavigator: React.FC = () => {
  return (
    <BottomTab.Navigator
      activeColor='#00A857'
      inactiveColor='#3A3A3A'
      barStyle={{ backgroundColor: '#F2F2F8' }}
      shifting={false}
    >
      <BottomTab.Screen
        name='HomeConsumer'
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ focused }) => retunrIconTab({ icon: 'home', focused })
        }}
        component={HomeConsumer}
      />
      <BottomTab.Screen
        name='MyBasketConsumer'
        options={{
          tabBarLabel: 'Minha cesta',
          tabBarIcon: ({ focused }) => retunrIconTab({ icon: 'basket', focused })
        }}
        component={ReturnTopTabMyBasketConsumer}
      />
      <BottomTab.Screen
        name='DonationsConsumer'
        options={{
          tabBarLabel: 'Doações',
          tabBarIcon: ({ focused }) => retunrIconTab({ icon: 'donations', focused })
        }}
        component={DonationsConsumer}
      />
      <BottomTab.Screen
        name='ProfileConsumer'
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ focused }) => retunrIconTab({ icon: 'profile', focused })
        }}
        component={ReturnTopTabProfileConsumer}
      />
    </BottomTab.Navigator>
  );
};

export default ConsumerTabNavigator;
