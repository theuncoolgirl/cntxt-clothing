import { createSlice } from '@reduxjs/toolkit';

const options = {
  name: 'user',
  initialState: {
    currentUser: null,
  },
  reducers: {
    setCurrentUser: (state, action) => ({
      ...state,
      currentUser: action.payload,
    }),
  },
};

const userSlice = createSlice(options);

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
