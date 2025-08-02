import type { Dispatch } from 'redux';
import {
  UserActionTypes,
  type User,
  type UserAction,
} from '../types/userTypes';

export default function fetchUser() {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({ type: UserActionTypes.FETCH_USER_REQUEST });

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const data: User = await res.json();
      dispatch({ type: UserActionTypes.FETCH_USER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: UserActionTypes.FETCH_USER_FAILURE,
        error: (error as Error).message,
      });
    }
  };
}
