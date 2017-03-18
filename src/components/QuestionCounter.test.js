import React from 'react';
import expect from 'expect';
import { mount }  from 'enzyme';
import { QuestionCounter } from './QuestionCounter.js';

describe('Game page tests:', () => {
  let current = 1;
  let total = 2;

  const component = mount(<QuestionCounter current={current} total={total} />);

  it('Should render Game page container', () => {
    expect(component.length).toBeTruthy();
  });

  it('Should have child', () => {
    expect(component.find('div').length).toEqual(1);
  });

  it('Should have paragraph inside wrapper', () => {
    expect(component.find('div').find('p').length).toEqual(1);
  });

  it('Should render counter in paragraph', () => {
    expect(component.find('div').find('p').text()).toBe("1 / 2");
  });
});
