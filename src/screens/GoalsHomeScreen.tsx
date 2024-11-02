import React, {useState} from 'react';
import {Pressable, ScrollView, StyleSheet, View} from 'react-native';
import {COLOR_CONSTANTS} from '../assets/constants';
import {GoalCard} from '../components/goal-card/GoalCard';
import {dummyGoals} from '../assets/data/dummyGoals';
import {AddGoalFab} from '../components/fab/AddGoalFab';
import {AddModal} from '../components/add-modal/AddModal';
import {Counter} from '../components/dummyCounter/dummyCounter';

export const GoalsHomeScreen = () => {
  const [isAddingGoal, setisAddingGoal] = useState(false);
  const toggleAddModal = () => {
    console.log('Toggleing modal');
    setisAddingGoal(prev => !prev);
  };
  return (
    <View style={[screenStyles.body, {opacity: isAddingGoal ? 0.75 : 1}]}>
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
      {!isAddingGoal && <AddGoalFab onClick={toggleAddModal} />}
      <AddModal isOpen={isAddingGoal} onClose={toggleAddModal} />
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
