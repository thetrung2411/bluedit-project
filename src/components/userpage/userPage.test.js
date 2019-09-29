import React from 'react';
import Enzyme, {configure, shallow, mount} from 'enzyme';
import Adapter from "enzyme-adapter-react-16"
import { Provider } from "react-redux";
import userpage from './userpage';
import userpageLayout from './userpageLayout';
import configureMockStore from "redux-mock-store";
import * as types from "../../redux/types";

configure({ adapter: new Adapter() });
const mockStore = configureMockStore();
const store = mockStore({});

describe('userpageLayout Component Test', () => {
    test('userpageLayout Component', () => {
        const component = shallow(<editProfileLayout/>);
        expect(component.exists()).toBe(true);
    })
})

describe('userpage Component Test', () => {
    test('userpage Component', () => {
        const component = shallow(<userpage/>);
        expect(component.exists()).toBe(true);
    });
})