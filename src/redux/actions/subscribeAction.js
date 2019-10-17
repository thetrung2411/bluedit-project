import {
  LOADING_DATA,
  GET_SUBSCRIBE,
  GET_UNSUBSCRIBE,
  SET_SUBSCRIBE,
} from "../types";
import axiosConfig from '../../axiosConfig';

// for not sub
export const getSubscribe = () => dispatch => {
  dispatch({ type: LOADING_DATA });
  axiosConfig.get("/allSubscribe")
    .then((res) => {
      dispatch({
        type: GET_SUBSCRIBE,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_SUBSCRIBE,
        payload: []
      });
    });
};
// for has sub
export const getUnsubscribe = (subscribe) => dispatch => {
  dispatch({ type: LOADING_DATA }, subscribe);
  axiosConfig.post("/unSubscribe",subscribe)
    .then((res) => {
      window.location.reload();

    })
    .catch((err) => {
    });
}
// sub new user
export const setOnSubscribe = (subscribe) => dispatch => {
  dispatch({ type: LOADING_DATA }, subscribe);
  console.log('subscribe->:', subscribe)
  axiosConfig.post("/postSubscribe", subscribe)
    .then((res) => {
      window.location.reload();
    })
    .catch((err) => {

    });
}
