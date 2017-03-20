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
    expect(component.find('div').length).toEqual(1);
  });
});
