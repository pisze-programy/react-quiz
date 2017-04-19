import React from "react";
import expect from "expect";
import {mount} from "enzyme";
import Score from "./Score.js";

describe('Game page tests:', () => {
  const points = 123;

  const component = mount(<Score points={points} />);

  it('Should render Score component', () => {
    expect(component.length).toBeTruthy();
  });

  it('Should have child', () => {
    expect(component.find('span').length).toEqual(1);
  });

  it('Should show points', () => {
    expect(component.find('span').text()).toEqual("123");
  });
});
