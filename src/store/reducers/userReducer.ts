import {
  UserActionTypes,
  type UserState,
  type UserAction,
} from '../types/userTypes';

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

export const UserReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER_REQUEST:
      return { ...state, loading: true, error: null };
    case UserActionTypes.FETCH_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case UserActionTypes.FETCH_USER_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
