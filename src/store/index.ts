import { configureStore } from '@reduxjs/toolkit';
import { UserReducer } from './reducers/userReducer';

export const store = configureStore({
  reducer: {
    userState: UserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
