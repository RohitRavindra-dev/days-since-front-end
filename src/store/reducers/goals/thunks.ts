import {createAsyncThunk} from '@reduxjs/toolkit';
import {goalsFetched, goalsFetchFailed, startGoalsFetch} from './goalReducer';
import {axiosInstance} from '../../../services/NetworkService';
import {extractGoalsFromFetched} from '../../../services/response/transformers/GoalsTransformer';

export const fetchGoalsList = createAsyncThunk(
  'goals/fetch-list',
  async (_, thunkApi) => {
    try {
      thunkApi.dispatch(startGoalsFetch());
      const {data, status, statusText} = await axiosInstance.get('/goals/list');
      console.log('Goals fetched: ', status, statusText);
      thunkApi.dispatch(
        goalsFetched({
          goals: extractGoalsFromFetched(data),
          responseStatus: {
            responseCode: status,
          },
        }),
      );
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
