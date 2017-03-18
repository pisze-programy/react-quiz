import React from 'react';
import expect from 'expect';
import { mount }  from 'enzyme';
import { Answer } from './Answer.js';

describe('Game page tests:', () => {
  const answer = {
    content: "This is answer",
  };

  const component = mount(<Answer answer={answer} />);

  it('Should render Answer component', () => {
    expect(component.length).toBeTruthy();
  });

  it('Should have child', () => {
    expect(component.find('div').length).toEqual(1);
  });

  it('Should show label with content', () => {
    expect(component.find('div').find('content').text()).toBe("This is content");
  });

  it('Should show radio input', () => {
    expect(component.find('div').find('input').length).toEqual(1);
  });
});
