import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isAuthenticated: boolean;
  user: null | { firstName: string; lastName: string };
}
const userInfo = JSON.parse(localStorage.getItem("user-info") as string);
const isUserLoggedIn = userInfo ? true : false;

const initialState: InitialState = {
  isAuthenticated: isUserLoggedIn,
  user: userInfo,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ firstName: string; lastName: string }>
    ) => {
      state.isAuthenticated = true || isUserLoggedIn;
      state.user = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("user-info");
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
