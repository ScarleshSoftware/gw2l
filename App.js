import React from 'react';
import dailiesReducers from './context/reducers/dailies';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import GwNavigator from './navigation/Navigator';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

const rootReducers = combineReducers({
  dailies: dailiesReducers,
})
const store = createStore(rootReducers, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <GwNavigator />
    </Provider>
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
