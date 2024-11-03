/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, View} from 'react-native';

import {COLOR_CONSTANTS} from './src/assets/constants';
import {AppHeader} from './src/components/header/AppHeader';
import {GoalsHomeScreen} from './src/screens/GoalsHomeScreen';
import {Provider} from 'react-redux';
import {store} from './src/store/highCommand';

const App = (): React.JSX.Element => {
  return (
    <Provider store={store}>
      <View style={{height: '100%', width: '100%'}}>
        <StatusBar backgroundColor={'#1A1A1D'} />
        <AppHeader />
        <GoalsHomeScreen />
      </View>
    </Provider>
  );
};

export default App;
