import React from 'react';
import {shallow} from 'enzyme';
import Searching from  './searching';
import Search from './search';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});

describe('Search page Component test', () => {
    test('Should render without errors', () => {
        const component = shallow (<Provider store ={store}><Searching/></Provider>);
        expect(component.find(Searching).length).toBe(1);
    })
})
