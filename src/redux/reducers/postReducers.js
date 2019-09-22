import {
  GET_POSTS,
  POST_POST,
  LOADING_DATA,
  POST_COMMENT,
  POST_BOOKMARK,
  GET_POST
} from "../types";
const initialState = {
  posts: [],
  post: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };

    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case GET_POST:
      return {
        ...state,
        post: action.payload
      };
    case POST_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case POST_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: [action.payload, ...state.post.comments]
        }
      };
    case POST_BOOKMARK:
      return {
        ...state,
        post: {
          ...state.post,
          bookmarks: [action.payload, ...state.post.bookmarks]
        }
      };

    default:
      return state;
  }
}
