import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import Welcome from './screens/Welcome/Welcome';

import ProducerTabNavigator from './Tabs/ProducerTabNavigator';
import ConsumerTabNavigator from './Tabs/ConsumerTabNavigator';

// // producer screens
// import HomeProducer from './screens/Producer/HomeProducer/HomeProducer';
// import FinancialProducer from './screens/Producer/FinancialProducer/FinancialProducer';
// import AboutProducer from './screens/Producer/AboutProducer/AboutProducer';

// // consumer screens
// import HomeConsumer from './screens/Consumer/HomeConsumer/HomeConsumer';
// import FinancialConsumer from './screens/Consumer/FinancialConsumer/FinancialConsumer';
// import AboutConsumer from './screens/Consumer/AboutConsumer/AboutConsumer';

// types
export type MainStackParams = {
  Login: undefined;
  ProducerTabNavigator: undefined;
  ConsumerTabNavigator: undefined;
};

// export type TabProducerStackParams = {
//   HomeProducer: undefined;
//   FinancialProducer: undefined;
//   AboutProducer: undefined;
// };

// export type TabConsumerStackParams = {
//   HomeConsumer: undefined;
//   FinancialConsumer: undefined;
//   AboutConsumer: undefined;
// };

const Main = createNativeStackNavigator<MainStackParams>();
// const Tab = createMaterialBottomTabNavigator();

// const TabNavigatorProducer: React.FC = () => {
//   return (
//     <Tab.Navigator
//       activeColor='#262626'
//       inactiveColor='#C4C4C4'
//       barStyle={{ backgroundColor: '#FFFFFF' }}
//     >
//       <Tab.Screen name='Home' component={HomeProducer} />
//       <Tab.Screen name='Financial' component={FinancialProducer} />
//       <Tab.Screen name='About' component={AboutProducer} />
//     </Tab.Navigator>
//   );
// };

// const TabNavigatorConsumer: React.FC = () => {
//   return (
//     <Tab.Navigator
//       activeColor='#262626'
//       inactiveColor='#C4C4C4'
//       barStyle={{ backgroundColor: '#FFFFFF' }}
//     >
//       <Tab.Screen name='Home' component={HomeConsumer} />
//       <Tab.Screen name='Financial' component={FinancialConsumer} />
//       <Tab.Screen name='About' component={AboutConsumer} />
//     </Tab.Navigator>
//   );
// };

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
        <Main.Screen name='Login' component={Welcome} />
        <Main.Screen name='ProducerTabNavigator' component={ProducerTabNavigator} />
        <Main.Screen name='ConsumerTabNavigator' component={ConsumerTabNavigator} />
      </Main.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
