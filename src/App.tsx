/* eslint-disable react/style-prop-object */

import React from 'react';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { LogBox } from 'react-native';
import { Routes } from './routes';
import { defaultTheme } from './styles';
import { store } from './store/store';

const App = () => {
  const [fontsLoaded] = useFonts({
    // eslint-disable-next-line global-require
    HEADLINE: require('./assets/fonts/HEADLINE.ttf')
  });
  LogBox.ignoreLogs(['VirtualizedList']);
  if (!fontsLoaded) return null;

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StyledThemeProvider theme={defaultTheme}>
          <Routes />
          <StatusBar style='dark' animated={false} backgroundColor='#6CCD91' />
        </StyledThemeProvider>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
