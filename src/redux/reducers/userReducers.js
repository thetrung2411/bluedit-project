import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  IS_SHOWPAGE
} from "../types";

const initState = {
  authenticated: false,
  loading: false,
  userDetails: {},
  isshowpage: false
};

export default function (state = initState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
    case SET_UNAUTHENTICATED:
      return initState;
    case SET_USER:
      return {
        authenticated: true,
        loading: false,
        ...action.payload
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true
      };
    case IS_SHOWPAGE:
      return {
        ...state,
        isshowpage: true
      };
    default:
      return state;
  }
}
