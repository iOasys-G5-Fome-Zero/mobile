import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// icons
import HomeIcon from '../../assets/icons/home-icon.svg';
import BasketIcon from '../../assets/icons/basket-icon.svg';
import DonationsIcon from '../../assets/icons/donations-icon.svg';
import ProfileIcon from '../../assets/icons/profile-icon.svg';

// screens
import {
  HomeConsumer,
  MyBasketConsumer,
  DonationsConsumer,
  ProfileConsumer
} from '../screens/Consumer';

export type TabConsumerStackParams = {
  HomeConsumer: undefined;
  MyBasketConsumer: undefined;
  DonationsConsumer: undefined;
  ProfileConsumer: undefined;
};

const Tab = createMaterialBottomTabNavigator();

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

const ConsumerTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      activeColor='#00A857'
      inactiveColor='#3A3A3A'
      barStyle={{ backgroundColor: '#F2F2F8' }}
      shifting={false}
    >
      <Tab.Screen
        name='HomeConsumer'
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ focused }) => retunrIconTab({ icon: 'home', focused })
        }}
        component={HomeConsumer}
      />
      <Tab.Screen
        name='MyBasketConsumer'
        options={{
          tabBarLabel: 'Minha cesta',
          tabBarIcon: ({ focused }) => retunrIconTab({ icon: 'basket', focused })
        }}
        component={MyBasketConsumer}
      />
      <Tab.Screen
        name='DonationsConsumer'
        options={{
          tabBarLabel: 'Doações',
          tabBarIcon: ({ focused }) => retunrIconTab({ icon: 'donations', focused })
        }}
        component={DonationsConsumer}
      />
      <Tab.Screen
        name='ProfileConsumer'
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ focused }) => retunrIconTab({ icon: 'profile', focused })
        }}
        component={ProfileConsumer}
      />
    </Tab.Navigator>
  );
};

export default ConsumerTabNavigator;
