import axiosConfig from "../../axiosConfig";
import {
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  LOADING_USER,
  SET_UNAUTHENTICATED
} from "../types";

export const loginUser = (userData, history) => dispatch => {
  dispatch({ type: LOADING_UI });
  axiosConfig
    .post("/login", userData)
    .then(res => {
      setAuthourizationHeader(res.data.token);
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      history.push("/post");
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};

export const registerUser = (userData, history) => dispatch => {
  dispatch({ type: LOADING_UI });
  axiosConfig
    .post("/signup", userData)
    .then(res => {
      setAuthourizationHeader(res.data.token);
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      history.push("/post");
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};

export const changeUserData = (userData) => dispatch =>{
  dispatch({ type: LOADING_USER });
  axiosConfig
    .post("/editProfile", userData)
    .then(() => {
      dispatch(getUserData());
    },
    console.log(userData)
    )
    .catch(err => console.log("edit error"));
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem("FBToken");
  delete axiosConfig.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
};

export const getUserData = () => dispatch => {
  dispatch({ type: LOADING_USER });
  axiosConfig
    .get("/user")
    .then(res => {
      dispatch({
        type: SET_USER,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

const setAuthourizationHeader = token => {
  const FBToken = `Bearer ${token}`;
  localStorage.setItem("FBToken", FBToken);
  axiosConfig.defaults.headers.common["Authorization"] = FBToken;
};
