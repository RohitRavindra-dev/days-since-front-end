import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {COLOR_CONSTANTS} from '../assets/constants';
import {GoalCard} from '../components/goal-card/GoalCard';

export const GoalsHomeScreen = () => {
  return (
    <ScrollView style={screenStyles.body}>
      <View style={screenStyles.cardCntr}>
        <GoalCard />
      </View>
      <View style={screenStyles.cardCntr}>
        <GoalCard />
      </View>
      <View style={screenStyles.cardCntr}>
        <GoalCard />
      </View>
      <View style={screenStyles.cardCntr}>
        <GoalCard />
      </View>
      <View style={screenStyles.cardCntr}>
        <GoalCard />
      </View>
      <View style={{height: 100}}></View>
    </ScrollView>
  );
};

const screenStyles = StyleSheet.create({
  body: {
    backgroundColor: COLOR_CONSTANTS.PRIMARY,
    width: '100%',
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 18,
  },
  cardCntr: {
    paddingBottom: 16,
  },
});
