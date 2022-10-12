import * as types from "./actionType";
const initialState = {
  posts: [],
  post: {},
  comments: [],
  loading: false,
};

const postsReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case types.PAGINATION_PAGE:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case types.GET_SINGLE_POST:
      return {
        ...state,
        post: action.payload,
        loading: false,
      };
    case types.GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        loading: false,
      };
    case types.DELETE_POST:
      return {
        ...state,
        loading: false,
      };
    case types.ADD_POST:
      return {
        ...state,
        loading: false,
      };
    case types.UPDATE_POST:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default postsReducers;
