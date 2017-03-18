import React from 'react';
import expect from 'expect';
import { mount }  from 'enzyme';
import { Question } from './Question.js';

describe('Game page tests:', () => {
  const component = mount(<Question content="This is content"/>);

  it('Should render Question component', () => {
    expect(component.length).toBeTruthy();
  });

  it('Should have child', () => {
    expect(component.find('div').length).toEqual(1);
  });

  it('Should show content in h2', () => {
    expect(component.find('div').find('h2').text()).toBe("This is content");
  });
});
