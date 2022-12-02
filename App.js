import React from 'react';
import { StyleSheet } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import GwNavigator from './navigation/Navigator';
import { Provider } from 'react-redux';
import {store} from './context/reducers/store';

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <GwNavigator />
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
