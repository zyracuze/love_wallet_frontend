import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Hello from './../components/Hello';

Enzyme.configure({ adapter: new Adapter() });


describe('<Hello />', () => {
  it('renders "Hello_World"', () => {
    const expected = 'Hello_World';
    const wrapper = shallow(<Hello message={expected} />);
    expect(wrapper.text()).toEqual(expected);
  });
});
