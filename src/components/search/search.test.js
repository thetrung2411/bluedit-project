import React from 'react';
import {shallow} from 'enzyme';
import Search from './searching';
import Test from './test';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});

describe('Search page Component test', () => {
    test('Should render without errors', () => {
        const component = shallow (<Provider store ={store}><Search/></Provider>);
        expect(component.find(Search).length).toBe(1);
    })
})

describe('test page Component test', () => {
    test('Should render without errors', () => {
        const component = shallow (<Provider store ={store}><Test/></Provider>);
        expect(component.find(Test).length).toBe(1);
    })
})

