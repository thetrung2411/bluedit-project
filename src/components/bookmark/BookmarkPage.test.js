import React from 'react';
import Enzyme, {configure, shallow, mount} from 'enzyme';
import Adapter from "enzyme-adapter-react-16"
import { Provider } from "react-redux";
import BookmarkPage from './BookmarkPage';
import configureMockStore from "redux-mock-store";
import * as types from "../../redux/types";

configure({ adapter: new Adapter() });
const mockStore = configureMockStore();
const store = mockStore({});

describe('Bookmark Layout should have a table', () => {
    test('bookmark test', () => {
        const component = shallow(<BookmarkPage/>);
        expect(component.exists()).toBe(true);
    })
})