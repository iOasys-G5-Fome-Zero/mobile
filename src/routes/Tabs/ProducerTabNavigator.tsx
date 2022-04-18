import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// icons
import HomeIcon from '../../assets/icons/home-icon.svg';
import DonationsIcon from '../../assets/icons/donations-icon.svg';
import ProfileIcon from '../../assets/icons/profile-icon.svg';

// screens
import { HomeProducer } from '../screens/Producer';

// top tabs
import { TopTabFinancialProducer, TopTabProfileProducer } from './topTabs';

export type BottomTabProducerParams = {
  HomeProducer: undefined;
  FinancialProducer: undefined;
  ProfileProducer: undefined;
};

const BottomTab = createMaterialBottomTabNavigator();

const retunrIconTab = ({ icon, focused }) => {
  switch (icon) {
    case 'home':
      return <HomeIcon fill={focused ? '#00A857' : '#3A3A3A'} />;
    case 'donations':
      return <DonationsIcon fill={focused ? '#00A857' : '#3A3A3A'} />;
    case 'profile':
      return <ProfileIcon fill={focused ? '#00A857' : '#3A3A3A'} />;
    default:
  }
};

const ProducerTabNavigator: React.FC = () => {
  return (
    <BottomTab.Navigator
      activeColor='#00A857'
      inactiveColor='#3A3A3A'
      barStyle={{ backgroundColor: '#FFFFFF' }}
      shifting={false}
    >
      <BottomTab.Screen
        name='HomeProducer'
        component={HomeProducer}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ focused }) => retunrIconTab({ icon: 'home', focused })
        }}
      />
      <BottomTab.Screen
        name='FinancialProducer'
        component={TopTabFinancialProducer}
        options={{
          tabBarLabel: 'Financeiro',
          tabBarIcon: ({ focused }) => retunrIconTab({ icon: 'donations', focused })
        }}
      />
      <BottomTab.Screen
        name='ProfileProducer'
        component={TopTabProfileProducer}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ focused }) => retunrIconTab({ icon: 'profile', focused })
        }}
      />
    </BottomTab.Navigator>
  );
};

export default ProducerTabNavigator;
