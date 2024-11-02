import {createAsyncThunk} from '@reduxjs/toolkit';
import {goalsFetched, goalsFetchFailed, startGoalsFetch} from './goalReducer';
import {dummyGoals} from '../../../assets/data/dummyGoals';
import {axiosInstance} from '../../../services/NetworkService';

export const fetchGoalsList = createAsyncThunk(
  'goals/fetch-list',
  async (_, thunkApi) => {
    try {
      thunkApi.dispatch(startGoalsFetch());
      const {data, status, statusText} = await axiosInstance.get('/goals/list');
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
