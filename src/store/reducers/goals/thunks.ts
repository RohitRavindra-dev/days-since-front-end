import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  goalsFetched,
  goalsFetchFailed,
  GoalsState,
  startGoalsFetch,
  updateStatus,
} from './goalReducer';
import {axiosInstance} from '../../../services/NetworkService';
import {
  extractGoalsFromFetched,
  updateGoalsOnLoad,
} from '../../../services/response/transformers/GoalsTransformer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOCAL_STORAGE} from '../../../assets/constants';
import {GoalInfoDto} from '../../../dtos/GoalDto';
import {UpdateStatus, UpdateVariant} from '../../../dtos/AdditionStatus';

export const fetchGoalsList = createAsyncThunk(
  'goals/fetch-list',
  async (_, thunkApi) => {
    try {
      thunkApi.dispatch(startGoalsFetch());
      // const {data, status, statusText} = await axiosInstance.get('/goals/list');
      // console.log('Goals fetched: ', status, statusText);
      try {
        const storedData = await AsyncStorage.getItem(LOCAL_STORAGE.GOALS_LIST);
        console.log('Stored data: ', storedData);

        const goalsList: GoalInfoDto[] =
          storedData != null ? JSON.parse(storedData) : [];
        const updatedGoals = updateGoalsOnLoad(goalsList);

        thunkApi.dispatch(
          goalsFetched({
            goals: updatedGoals,
            responseStatus: {
              responseCode: 200,
            },
          }),
        );
      } catch (error) {
        console.error('Error while fetching local storage: ', error);
        throw new Error('Error while trying to fetch local storage');
      }
    } catch (error) {
      console.error('Error: ', error);
      thunkApi.dispatch(
        goalsFetchFailed({
          apiError: {
            errorCode: 500,
            errorMessage: `Fetch goals failed [${error}]`,
          },
        }),
      );
    }
  },
);

export const saveGoalsToStorage = createAsyncThunk(
  'goals/store-locally',
  async (_, thunkApi) => {
    try {
      //@ts-expect-error
      const {goals}: {goals: GoalsState} = thunkApi.getState();
      const {goalsList} = goals;
      console.log('In here!, saving goals');
      const stringifedGoals = JSON.stringify(goalsList);
      await AsyncStorage.setItem(LOCAL_STORAGE.GOALS_LIST, stringifedGoals);
    } catch (error) {
      console.error(
        'Error while trying to store the data into local storage!: ',
        error,
      );
    }
  },
);

export const addNewGoal = createAsyncThunk(
  'goals/add-goal',
  async (newGoal: GoalInfoDto, thunkApi) => {
    try {
      thunkApi.dispatch(
        updateStatus({
          updatePortfolio: {
            status: UpdateStatus.IN_PROGRESS,
            type: UpdateVariant.ADD_NEW,
          },
        }),
      );
      //@ts-expect-error
      const {goals}: {goals: GoalsState} = thunkApi.getState();
      const {goalsList} = goals;
      thunkApi.dispatch(
        goalsFetched({
          goals: [newGoal, ...goalsList],
          responseStatus: {
            responseCode: 200,
          },
        }),
      );

      thunkApi.dispatch(
        updateStatus({
          updatePortfolio: {
            status: UpdateStatus.SUCCESS,
            type: UpdateVariant.ADD_NEW,
          },
        }),
      );
      console.log('New goals data: ', newGoal);
    } catch (error) {
      thunkApi.dispatch(
        updateStatus({
          updatePortfolio: {
            status: UpdateStatus.FAILED,
            type: UpdateVariant.ADD_NEW,
            errorMessage: `${error}`,
          },
        }),
      );
    }
  },
);

export const resetGoal = createAsyncThunk(
  'goals/reset-goal',
  async (goalId: string, thunkApi) => {
    try {
      thunkApi.dispatch(
        updateStatus({
          updatePortfolio: {
            status: UpdateStatus.IN_PROGRESS,
            type: UpdateVariant.MODIFY_EXISTING,
          },
        }),
      );
      //@ts-expect-error
      const {goals}: {goals: GoalsState} = thunkApi.getState();
      const {goalsList} = goals;
      const myGoalIndex = goalsList.findIndex(goal => goal.goalId == goalId);
      if (myGoalIndex === -1) {
        throw new Error('Unable to reset goal, not found!');
      }
      thunkApi.dispatch(
        goalsFetched({
          goals: [
            ...goalsList.slice(0, myGoalIndex),
            {
              ...goalsList[myGoalIndex],
              currentStreak: 1,
              lastUpdated: `${Date.now()}`,
            },
            ...goalsList.slice(myGoalIndex + 1),
          ],
          responseStatus: {
            responseCode: 200,
          },
        }),
      );

      thunkApi.dispatch(
        updateStatus({
          updatePortfolio: {
            status: UpdateStatus.SUCCESS,
            type: UpdateVariant.ADD_NEW,
          },
        }),
      );
    } catch (error) {
      thunkApi.dispatch(
        updateStatus({
          updatePortfolio: {
            status: UpdateStatus.FAILED,
            type: UpdateVariant.MODIFY_EXISTING,
            errorMessage: `${error}`,
          },
        }),
      );
    }
  },
);

export const clearAllGoals = createAsyncThunk(
  'goals/clear-goals',
  async (__BUNDLE_START_TIME__, thunkApi) => {
    try {
      thunkApi.dispatch(
        goalsFetched({
          goals: [],
          responseStatus: {
            responseCode: 200,
          },
        }),
      );
    } catch (error) {
      console.error('Error while trying to clear all goals: ', error);
    }
  },
);
