import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {GoalInfoDto} from '../../../dtos/GoalDto';
import {API_STATUS, ApiState} from '../../../dtos/ApiStatusDto';
import {
  failedGoalsFetchAction,
  setGoalsAction,
  startLoadingAction,
} from './actions';

export interface GoalsState {
  goalsList: GoalInfoDto[];
  fetchStatus: ApiState;
}

const initialState: GoalsState = {
  goalsList: [],
  fetchStatus: {
    status: API_STATUS.IDLE,
  },
};

export const goalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    startGoalsFetch: startLoadingAction,
    goalsFetched: setGoalsAction,
    goalsFetchFailed: failedGoalsFetchAction,
  },
});

// Action creators are generated for each case reducer function
export const {startGoalsFetch, goalsFetchFailed, goalsFetched} =
  goalsSlice.actions;

export default goalsSlice.reducer;
