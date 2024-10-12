import React from 'react';
import {View, Text} from 'react-native';
import {headerStyles as hs} from './styles';
import {HEADER} from '../../assets/constants';
import AppIcon from '../../assets/svgs/AppIcon';
export const AppHeader = () => {
  return (
    <View style={hs.header}>
      <AppIcon />
      <Text style={hs.headerText}>{HEADER.TITLE}</Text>
    </View>
  );
};
