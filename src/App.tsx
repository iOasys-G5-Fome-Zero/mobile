import React from 'react';
// import { useFonts } from "expo-font";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Routes } from './routes';
import { defaultTheme } from './styles';

import { store } from './store/store';

const App = () => {
  // const [fontsLoaded] = useFonts({
  //   pop_regular: require("./assets/fonts/Poppins-Regular.ttf"),
  //   pop_bold: require("./assets/fonts/Poppins-Bold.ttf"),
  // });
  // LogBox.ignoreLogs(["VirtualizedList"]);
  // if (!fontsLoaded) return null;
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StyledThemeProvider theme={defaultTheme}>
          <Routes />
          <StatusBar translucent />
        </StyledThemeProvider>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
