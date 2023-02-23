import { createSlice } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  isLoading: false,
};

const options = {
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    emailSignInStart: (state, action) => {
      state.isLoading = true;
    },
    googleSignInStart: (state, action) => {
      state.isLoading = true;
    },
    signInFailed: (state, action) => {
      state.error = action.payload;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    signOutStart: (state, action) => {
      state.loading = true;
    },
    signOutFailed: (state, action) => {
      state.error = action.payload;
    },
    signOutSuccess: (state, action) => {
      state.currentUser = null;
      state.isLoading = false;
    },
    signUpFailed: (state, action) => {
      state.error = action.payload;
    },
    signUpStart: (state, action) => {
      state.loading = true;
    },
    signUpSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
  },
};

const userSlice = createSlice(options);

export const checkUserSession = createAction('user/checkUserSession');

export const {
  emailSignInStart,
  googleSignInStart,
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutStart,
  signOutSuccess,
  signUpFailed,
  signUpStart,
  signUpSuccess,
} = userSlice.actions;
export default userSlice.reducer;
