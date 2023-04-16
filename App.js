import React from 'react';
import {View, Text, LogBox} from 'react-native';
import StackNavigation from './src/navigation/StackNavigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store from './src/services/redux/store';
const persistStore = store();

LogBox.ignoreAllLogs();

const App = props => {
  return (
    <Provider store={persistStore.store}>
      <PersistGate loading={null} persistor={persistStore.persistor}>
        <StackNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
