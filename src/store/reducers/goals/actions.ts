import {PayloadAction} from '@reduxjs/toolkit';
import {API_STATUS, ApiError, ApiRespStatus} from '../../../dtos/ApiStatusDto';
import {GoalInfoDto} from '../../../dtos/GoalDto';
import {GoalsState} from './goalReducer';

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes
export const startLoadingAction = (state: GoalsState) => {
  state.fetchStatus = {
    status: API_STATUS.LOADING,
  };
};

export type SetGoalsPayload = {
  goals: GoalInfoDto[];
  responseStatus?: ApiRespStatus;
};

export type SetErrorPayload = {
  apiError: ApiError;
};

export const setGoalsAction = (
  state: GoalsState,
  action: PayloadAction<SetGoalsPayload>,
) => {
  state.fetchStatus = {
    status: API_STATUS.SUCCESS,
    responseStatus: action.payload.responseStatus,
  };
  state.goalsList = action.payload.goals;
};

export const failedGoalsFetchAction = (
  state: GoalsState,
  action: PayloadAction<SetErrorPayload>,
) => {
  state.fetchStatus = {
    status: API_STATUS.ERROR,
    error: action.payload.apiError,
  };
};
