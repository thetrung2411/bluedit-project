import React, { Component } from "react";
import { shallow } from "enzyme";
import Login from "./login";
import Register from "./register";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import userReducers from "../../redux/reducers/userReducers";
import * as types from "../../redux/types";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);
const store = mockStore({});

describe("Login Component test", () => {
  test("Should render without errors", () => {
    const component = shallow(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    expect(component.find(Login).length).toBe(1);
  });

  test("Should return initial state", () => {
    expect(userReducers(undefined, {})).toEqual({
      authenticated: false,
      loading: false,
      userDetails: {}
    });
  });

  test("Should handle SET_AUTHENTICATED", () => {
    expect(userReducers({}, { type: types.SET_AUTHENTICATED })).toEqual({
      authenticated: true
    });
  });

  test("Should handle SET_USER", () => {
    expect(userReducers({}, { type: types.SET_USER })).toEqual({
      authenticated: true,
      loading: false,
      userDetails: undefined
    });
  });

  test("Should handle LOADING_USER", () => {
    expect(userReducers({}, { type: types.LOADING_USER })).toEqual({
      loading: true
    });
  });
});

describe("Register Component test", () => {
  test("Should render without errors", () => {
    const component = shallow(
      <Provider store={store}>
        <Register />
      </Provider>
    );
    expect(component.find(Register).length).toBe(1);
  });

  test("Should return initial state", () => {
    expect(userReducers(undefined, {})).toEqual({
      authenticated: false,
      loading: false,
      userDetails: {}
    });
  });

  test("Should handle SET_AUTHENTICATED", () => {
    expect(userReducers({}, { type: types.SET_AUTHENTICATED })).toEqual({
      authenticated: true
    });
  });

  test("Should handle SET_USER", () => {
    expect(userReducers({}, { type: types.SET_USER })).toEqual({
      authenticated: true,
      loading: false,
      userDetails: undefined
    });
  });

  test("Should handle LOADING_USER", () => {
    expect(userReducers({}, { type: types.LOADING_USER })).toEqual({
      loading: true
    });
  });
});
