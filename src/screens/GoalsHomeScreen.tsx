import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {COLOR_CONSTANTS} from '../assets/constants';
import {GoalCard} from '../components/goal-card/GoalCard';
import {dummyGoals} from '../assets/data/dummyGoals';
import {AddGoalFab} from '../components/fab/AddGoalFab';

export const GoalsHomeScreen = () => {
  return (
    <View style={screenStyles.body}>
      <ScrollView style={screenStyles.goalsList}>
        {dummyGoals.map((goal, index) => (
          <View style={screenStyles.cardCntr} id={`${index}`}>
            <GoalCard {...goal} />
          </View>
        ))}
        {dummyGoals.map((goal, index) => (
          <View style={screenStyles.cardCntr} id={`${index}`}>
            <GoalCard {...goal} />
          </View>
        ))}

        <View style={{height: 100}}></View>
      </ScrollView>
      <AddGoalFab />
    </View>
  );
};

const screenStyles = StyleSheet.create({
  body: {
    backgroundColor: COLOR_CONSTANTS.PRIMARY,
    width: '100%',
    height: '100%',
  },
  goalsList: {
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 18,
  },
  cardCntr: {
    paddingBottom: 18,
  },
});
