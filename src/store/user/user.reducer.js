import { createSlice } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';

const options = {
  name: 'user',
  initialState: {
    currentUser: null,
    error: null,
    isLoading: false,
  },
  reducers: {
    emailSignInStart: (state, action) => {},
    googleSignInStart: (state, action) => {},
    signInFailed: (state, action) => {
      state.error = action.payload;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
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
} = userSlice.actions;
export default userSlice.reducer;
