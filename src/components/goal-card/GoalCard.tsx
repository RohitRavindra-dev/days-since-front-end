import React from 'react';
import {View, Text} from 'react-native';
import {goalCardStyles as gs} from './styles';
export const GoalCard = () => {
  return (
    <View style={gs.card}>
      <Text style={gs.title} numberOfLines={1} ellipsizeMode="tail">
        Goal Alpha Beta Gama abadabfabdfbadfbafbdabfabfbfdbfabdb afbabdfad
      </Text>
    </View>
  );
};
