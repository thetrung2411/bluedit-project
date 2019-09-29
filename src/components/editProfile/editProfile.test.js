import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import { Provider } from "react-redux";
import editProfile from './editProfile';
import editProfileLayout from './editProfileLayout';
import configureMockStore from "redux-mock-store";
import userReducers from "../../redux/reducers/postReducers";
import * as types from "../../redux/types";

const mockStore = configureMockStore();
const store = mockStore({});

describe('editProfileLayout Component Test', () => {
    test('editProfile Component', () => {
        const component = shallow(<editProfileLayout/>);
        expect(component.exists()).toBe(true);
    })
})

describe('editProfile Component Test', () => {
    test('editProfile Component', () => {
        const component = shallow(<editProfile/>);
        expect(component.exists()).toBe(true);
    });
})
