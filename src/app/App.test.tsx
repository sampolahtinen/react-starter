import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('displays a welcoming text', () => {
    expect(wrapper.find('h1').text()).toBe('Welcome to React Starter!');
  });
});
