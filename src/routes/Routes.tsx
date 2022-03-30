import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import Login from "../screens/Login/Login";
import HomeProducer from "../screens/Producer/Home/Home";
import FinancialProducer from "../screens/Producer/Financial/Financial";
import AboutProducer from "../screens/Producer/About/About";
import HomeConsumer from "../screens/Consumer/Home/Home";
import FinancialConsumer from "../screens/Consumer/Financial/Financial";
import AboutConsumer from "../screens/Consumer/About/About";

// types
export type MainStackParams = {
  Login: undefined;
  TabNavigatorProducer: undefined;
  TabNavigatorConsumer: undefined;
};

export type TabProducerStackParams = {
  HomeProducer: undefined;
  FinancialProducer: undefined;
  AboutProducer: undefined;
};

export type TabConsumerStackParams = {
  HomeConsumer: undefined;
  FinancialConsumer: undefined;
  AboutConsumer: undefined;
};

const Main = createNativeStackNavigator<MainStackParams>();
const Tab = createMaterialBottomTabNavigator();

const TabNavigatorProducer: React.FC = () => {
  return (
    <Tab.Navigator
      activeColor="#262626"
      inactiveColor="#C4C4C4"
      barStyle={{ backgroundColor: "#FFFFFF" }}
    >
      <Tab.Screen name="Home" component={HomeProducer} />
      <Tab.Screen name="Financial" component={FinancialProducer} />
      <Tab.Screen name="About" component={AboutProducer} />
    </Tab.Navigator>
  );
};

const TabNavigatorConsumer: React.FC = () => {
  return (
    <Tab.Navigator
      activeColor="#262626"
      inactiveColor="#C4C4C4"
      barStyle={{ backgroundColor: "#FFFFFF" }}
    >
      <Tab.Screen name="Home" component={HomeConsumer} />
      <Tab.Screen name="Financial" component={FinancialConsumer} />
      <Tab.Screen name="About" component={AboutConsumer} />
    </Tab.Navigator>
  );
};

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Main.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#fff" },
        }}
      >
        <Main.Screen name="Login" component={Login} />
        <Main.Screen
          name="TabNavigatorProducer"
          component={TabNavigatorProducer}
        />
        <Main.Screen
          name="TabNavigatorConsumer"
          component={TabNavigatorConsumer}
        />
      </Main.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
