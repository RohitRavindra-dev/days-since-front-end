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

const App = (): React.JSX.Element => {
  return (
    <View style={{height: '100%', width: '100%'}}>
      <StatusBar backgroundColor={COLOR_CONSTANTS.STATUS_BAR} />
      <AppHeader />
      <GoalsHomeScreen />
    </View>
  );
};

export default App;
