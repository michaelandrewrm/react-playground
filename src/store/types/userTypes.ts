export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export const UserActionTypes = {
  FETCH_USER_REQUEST: 'FETCH_USER_REQUEST',
  FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
  FETCH_USER_FAILURE: 'FETCH_USER_FAILURE',
} as const;

interface FetchUserRequest {
  type: typeof UserActionTypes.FETCH_USER_REQUEST;
}

interface FetchUserSuccess {
  type: typeof UserActionTypes.FETCH_USER_SUCCESS;
  payload: User;
}

interface FetchUserFailure {
  type: typeof UserActionTypes.FETCH_USER_FAILURE;
  error: string;
}

export type UserAction = FetchUserRequest | FetchUserSuccess | FetchUserFailure;
