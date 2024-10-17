import {configureStore} from '@reduxjs/toolkit';
import goalsReducer from './reducers/goals/goalReducer';

export const store = configureStore({
  reducer: {
    goals: goalsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
