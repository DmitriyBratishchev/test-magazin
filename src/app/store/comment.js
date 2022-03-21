import { createSlice } from '@reduxjs/toolkit';
import commentService from '../services/comments.service';

const initialState = {
  entities: {},
  isLoading: true,
  error: null
};

const commentSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    commentRequested: (state) => {
      state.isLoading = true;
    },
    commentReceved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    commentRequestedFiled: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

const { actions, reducer: commentReducer } = commentSlice;
const { commentRequested, commentReceved, commentRequestedFiled } = actions;

export const loadComments = (idCart) => async (dispatch) => {
  dispatch(commentRequested());
  try {
    const comments = await commentService.getCommentsByIdCart(idCart);
    dispatch(commentReceved(comments));
  } catch (error) {
    dispatch(commentRequestedFiled(error.message));
  }
};

export const getCommentsById = (id) => (state) => state.comment.entities;
export const getIsLoadingComments = (id) => (state) => state.comment.isLoading;

export default commentReducer;
