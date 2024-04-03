export interface UserInitialState {
  isAuthenticated: boolean;
  user: null | { firstName: string; lastName: string };
}

export interface UserSelector {
  auth: UserInitialState;
}
