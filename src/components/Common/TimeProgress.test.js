import React from "react";
import expect from "expect";
import {mount} from "enzyme";
import TimeProgress from "./TimeProgress.js";

describe('Game page tests:', () => {
  const timer = {
    time: 1000,
    value: 50,
  };

  const component = mount(<TimeProgress time={timer.time} value={timer.value} />);

  it('Should render TimeProgress component', () => {
    expect(component.length).toBeTruthy();
  });

  it('Should have child', () => {
    expect(component.find('div').length).toEqual(1);
  });
});
