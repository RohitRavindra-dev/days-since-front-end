import React, {useEffect, useState} from 'react';
import {
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLOR_CONSTANTS} from '../assets/constants';
import {GoalCard} from '../components/goal-card/GoalCard';
import {dummyGoals} from '../assets/data/dummyGoals';
import {AddGoalFab} from '../components/fab/AddGoalFab';
import {AddModal} from '../components/add-modal/AddModal';
import {useDispatch, useSelector} from 'react-redux';
import {fetchGoalsList} from '../store/reducers/goals/thunks';
import {AppDispatch, RootState} from '../store/highCommand';
import {API_STATUS} from '../dtos/ApiStatusDto';
import {TechnicalErrorScreen} from './TechnicalErrorScreen';

export const GoalsHomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {goalsList, fetchStatus} = useSelector(
    (state: RootState) => state.goals,
  );
  const [isAddingGoal, setisAddingGoal] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(fetchGoalsList());
  }, []);

  const toggleAddModal = () => {
    console.log('Toggleing modal');
    setisAddingGoal(prev => !prev);
  };

  const createGoalCallback = (goalName: string, isAutoGoal: boolean) => {
    console.log('New goal data:', goalName, 'Auto:', isAutoGoal);
    setisAddingGoal(false);
  };

  //Todo
  const goalValidation = (goalName: string) => {
    return true;
  };

  useEffect(() => {
    dispatch(fetchGoalsList());
  }, [dispatch]);

  useEffect(() => {
    if (fetchStatus.status != API_STATUS.LOADING) {
      setRefreshing(false);
    }
    console.log('Goals home: ', goalsList);
  }, [fetchStatus]);

  return (
    <View style={[screenStyles.body]}>
      {isAddingGoal && <View style={screenStyles.opaqueView}></View>}
      {fetchStatus.status === API_STATUS.ERROR ? (
        <TechnicalErrorScreen retryCallback={onRefresh} />
      ) : (
        <ScrollView
          style={screenStyles.goalsList}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {fetchStatus.status === API_STATUS.LOADING ? (
            <Text>App is Loading!</Text>
          ) : (
            goalsList.map((goal, index) => (
              <View style={screenStyles.cardCntr} id={`${index}`}>
                <GoalCard {...goal} />
              </View>
            ))
          )}
          <View style={{height: 200}}></View>
        </ScrollView>
      )}
      {!isAddingGoal && <AddGoalFab onClick={toggleAddModal} />}
      <AddModal
        isOpen={isAddingGoal}
        onClose={toggleAddModal}
        onCreate={createGoalCallback}
        validator={goalValidation}
      />
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
  opaqueView: {
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
    zIndex: 10,
    opacity: 0.65,
  },
});
