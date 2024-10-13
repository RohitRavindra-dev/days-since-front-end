import React from 'react';
import {Alert, Pressable, View} from 'react-native';
import {addFabStyles as as} from './styles';
import AddIcon from '../../assets/svgs/AddIcon';

export const AddGoalFab = () => {
  return (
    <Pressable
      style={as.fabCntr}
      onPress={() => {
        Alert.alert('Add clicked', 'Feature is upcoming');
      }}>
      <AddIcon />
    </Pressable>
  );
};
