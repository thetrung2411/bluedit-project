import React, { Component } from 'react'
import {shallow} from "enzyme";
import Login from "./login";
import Register from "./register";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

describe('HomePage Component test', () => {
    test('Should render without errors', () => {
        const component = shallow (<Provider store ={store}><Login/></Provider>);
        expect(component.find(Login).length).toBe(1);
    })
})

describe('HomePage Component test', () => {
    test('Should render without errors', () => {
        const component = shallow (<Provider store ={store}><Register/></Provider>);
        expect(component.find(Register).length).toBe(1);
    })
})