import React from 'react';
import expect from 'expect';
import { mount }  from 'enzyme';
import { QuizPage } from './QuizPage.js';

describe('Game page tests:', () => {
  const component = mount(<QuizPage />);

  it('Should render Game page container', () => {
    expect(component.length).toBeTruthy();
  });

  it('Should have child', () => {
    expect(component.find('div').length).toEqual(1);
  });

  it('Should show div wrapper', () => {
    expect(component.find('div').text()).toBe(true);
  });

  it('Should not show loading', () => {
    expect(component.find('div.loading').exists()).toBe(false);
  });
});
