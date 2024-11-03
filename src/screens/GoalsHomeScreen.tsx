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

  useEffect(() => {
    dispatch(fetchGoalsList());
  }, [dispatch]);

  useEffect(() => {
    if (fetchStatus.status != API_STATUS.LOADING) {
      setRefreshing(false);
    }
    console.log('Goals home: ', goalsList);
  }, [fetchStatus]);

  const refreshHandler = () => {
    dispatch(fetchGoalsList());
  };

  return (
    <View style={[screenStyles.body, {opacity: isAddingGoal ? 0.75 : 1}]}>
      {fetchStatus.status === API_STATUS.ERROR ? (
        <TechnicalErrorScreen retryCallback={refreshHandler} />
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
