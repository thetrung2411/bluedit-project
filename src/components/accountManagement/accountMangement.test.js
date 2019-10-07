import React, { Component } from "react";
import { shallow } from "enzyme";

import AccountManagement from "./accountManagement";
import ChangePassword from "./ChangePassword";
import DisableAccount from "./DisableAccount";
import ConfirmDialog from "./ConfirmDialog";

import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import uiReducers from "../../redux/reducers/uiReducers";
import * as types from "../../redux/types";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);
const store = mockStore({});

describe("AccountManagement component test", () => {
  test("Should render wihout errors", () => {
    const component = shallow(
      <Provider store={store}>
        <AccountManagement />
      </Provider>
    );
    expect(component.find(AccountManagement).length).toBe(1);
  });
});

describe("DisableAccount component test", () => {
  test("Should render wihout errors", () => {
    const component = shallow(
      <Provider store={store}>
        <DisableAccount />
      </Provider>
    );
    expect(component.find(DisableAccount).length).toBe(1);
  });
});

describe("ChangePassword component test", () => {
  test("Should render wihout errors", () => {
    const component = shallow(
      <Provider store={store}>
        <ChangePassword />
      </Provider>
    );
    expect(component.find(ChangePassword).length).toBe(1);
  });

  test("Should handle SET_MESSAGES", () => {
    expect(uiReducers({}, { type: types.SET_MESSAGES })).toEqual({
      loading: false,
      message: undefined
    });
  });

  test("Should handle CLEAR_MESSAGES", () => {
    expect(uiReducers({}, { type: types.CLEAR_MESSAGES })).toEqual({
      loading: false,
      message: null
    });
  });

  test("Should handle SET_ERRORS", () => {
    expect(uiReducers({}, { type: types.SET_ERRORS })).toEqual({
      loading: false,
      errors: undefined
    });
  });

  test("Should handle CLEAR_ERRORS", () => {
    expect(uiReducers({}, { type: types.CLEAR_ERRORS })).toEqual({
      loading: false,
      errors: null
    });
  });
});

describe("ConfirmDialog component test", () => {
  test("Should render wihout errors", () => {
    const component = shallow(
      <Provider store={store}>
        <ConfirmDialog />
      </Provider>
    );
    expect(component.find(ConfirmDialog).length).toBe(1);
  });

  test("Should handle CLEAR_ERRORS", () => {
    expect(uiReducers({}, { type: types.CLEAR_ERRORS })).toEqual({
      loading: false,
      errors: null
    });
  });
});
