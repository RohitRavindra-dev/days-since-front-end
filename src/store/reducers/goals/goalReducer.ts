import {createSlice} from '@reduxjs/toolkit';
import {GoalInfoDto} from '../../../dtos/GoalDto';
import {API_STATUS, ApiState} from '../../../dtos/ApiStatusDto';
import {
  failedGoalsFetchAction,
  setGoalsAction,
  startLoadingAction,
  updatePorfolioAction,
} from './actions';
import {UpdatePortfolio, UpdateStatus} from '../../../dtos/AdditionStatus';

export interface GoalsState {
  goalsList: GoalInfoDto[];
  fetchStatus: ApiState;
  updatePorfolio: UpdatePortfolio;
}

const initialState: GoalsState = {
  goalsList: [],
  fetchStatus: {
    status: API_STATUS.IDLE,
  },
  updatePorfolio: {
    status: UpdateStatus.IDLE,
    type: null,
  },
};

export const goalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    startGoalsFetch: startLoadingAction,
    goalsFetched: setGoalsAction,
    goalsFetchFailed: failedGoalsFetchAction,
    updateStatus: updatePorfolioAction,
  },
});

// Action creators are generated for each case reducer function
export const {startGoalsFetch, goalsFetchFailed, goalsFetched, updateStatus} =
  goalsSlice.actions;

export default goalsSlice.reducer;
