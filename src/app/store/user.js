import { createSlice } from '@reduxjs/toolkit';
import userService from '../services/user.service';

const initialState = {
  entities: [],
  selectedUser: [],
  isLoading: true,
  lastFetch: null,
  error: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userRequsted: (state) => {
      state.isLoading = true;
    },
    userReceved: (state, action) => {
      state.entities = action.payload;
      state.lastFetch = Date.now();
      state.isLoading = false;
    },
    editSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    userRequstedFiled: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

const { actions, reducer: userReducer } = userSlice;
const { userRequsted, userReceved, editSelectedUser, userRequstedFiled } = actions;

export const loadUsersList = () => async (dispatch, getState) => {
  console.log('&', `&`);
  const { lastFetch } = getState().user;
  if (Date.now() - lastFetch > 10 * 60 * 1000) {
    dispatch(userRequsted());
    try {
      const content = await userService.get();
      const userData = content.map(u => ({ _id: u.id.toString(), name: u.username }));
      console.log('content in loadUsersList', userData);
      dispatch(userReceved(userData));
      if (!lastFetch) {
        dispatch(editSelectedUser(userData.map(u => u._id)));
      }
    } catch (error) {
      dispatch(userRequstedFiled(error.message));
    }
  }
};

export const setSelectedUser = (usersIdArr) => (dispatch) => {
  dispatch(editSelectedUser(usersIdArr));
};

export const getLoadingUser = () => (state) => state.user.isLoading;
export const getUserList = () => (state) => state.user.entities;
export const getSelectedUser = () => (state) => state.user.selectedUser;

export default userReducer;
