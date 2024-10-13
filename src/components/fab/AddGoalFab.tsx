import React from 'react';
import {Alert, Pressable, View} from 'react-native';
import {addFabStyles as as} from './styles';
import AddIcon from '../../assets/svgs/AddIcon';

type AddGoalFabProps = {
  onClick: () => void;
};

export const AddGoalFab = ({onClick}: AddGoalFabProps) => {
  return (
    <Pressable style={as.fabCntr} onPress={onClick}>
      <AddIcon />
    </Pressable>
  );
};
