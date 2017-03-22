import React from "react";
import expect from "expect";
import {mount} from "enzyme";
import AnswerOption from "./AnswerOption.js";

describe('Game page tests:', () => {
  const answer = {
    type: 'type',
    content: "This is answer",
  };

  const onClickHandle = () => false;

  const component = mount(
    <AnswerOption
      type={answer.type}
      id="cq1238s"
      content={answer.content}
      onClickHandle={onClickHandle} />);

  it('Should render AnswerOption component', () => {
    expect(component.length).toBeTruthy();
  });

  it('Should have child', () => {
    expect(component.find('div').length).toEqual(1);
  });

  it('Should show label with content', () => {
    expect(component.find('div').find('.label').text()).toBe("This is answer");
  });

  it('Should show radio input', () => {
    expect(component.find('div').find('input').length).toEqual(1);
  });
});
