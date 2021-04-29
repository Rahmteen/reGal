import React from 'react';
import { mount, shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
import SignUp from "./SignUp"

describe('SignUp Component', () => {
    it('should render a sign up page with two buttons', () => {
        const wrapper = shallow(<SignUp/>);
        const buttons = wrapper.find(Button)
        expect(buttons.toHaveLength(2))
    })
});