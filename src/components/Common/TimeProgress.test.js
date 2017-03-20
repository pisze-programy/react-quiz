import React from "react";
import expect from "expect";
import {mount} from "enzyme";
import TimeProgress from "./TimeProgress.js";

describe('Game page tests:', () => {
  const percent = 50;

  const component = mount(<TimeProgress percent={percent} />);

  it('Should render TimeProgress component', () => {
    expect(component.length).toBeTruthy();
  });

  it('Should have child', () => {
    expect(component.find('div').length).toEqual(1);
  });
});
