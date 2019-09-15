import React from 'react';
import {shallow} from 'enzyme';
import HomePageLayout from './HomePageLayout';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});

describe('HomePage Component test', () => {
    test('Should render without errors', () => {
        const component = shallow (<Provider store ={store}><HomePageLayout/></Provider>);
        expect(component.find(HomePageLayout).length).toBe(1);
    })
})