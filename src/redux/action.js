import * as types from "./actionType";
import postsApi from "../api/postsApi";
import commentsApi from "../api/commentsApi";

export const loadPosts = () => async (dispatch) => {
  try {
    const resp = await postsApi.getAll();

    dispatch({
      type: types.GET_POSTS,
      payload: resp,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await postsApi.delete(id);
    dispatch({
      type: types.DELETE_POST,
    });
    dispatch(loadPosts());
  } catch (err) {
    console.log(err);
  }
};

export const addPost = (post) => async (dispatch) => {
  try {
    await postsApi.post(post);
    dispatch({
      type: types.ADD_POST,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getSinglePost = (id) => async (dispatch) => {
  try {
    const resp = await postsApi.get(id);
    dispatch({
      type: types.GET_SINGLE_POST,
      payload: resp,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getComments = (comments) => async (dispatch) => {
  try {
    const resp = await commentsApi.getAll(comments);
    dispatch({
      type: types.GET_COMMENTS,
      payload: resp,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updatePost = (post) => async (dispatch) => {
  try {
    await postsApi.put(post);
    dispatch({
      type: types.UPDATE_POST,
    });
  } catch (err) {
    console.log(err);
  }
};
