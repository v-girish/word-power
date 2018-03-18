import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../../app/components/HomePage';

describe('Home Page', () => {
  it('should render Home Page', () => {
    const homePage = shallow(<HomePage />);
    expect(homePage.length).toBe(1);
    expect(homePage.text()).toEqual('Hello World');
  });
});
