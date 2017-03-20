import React from "react";
import expect from "expect";
import {mount} from "enzyme";
import {QuizPage} from "./QuizPage.js";

describe('Game page tests:', () => {
  const actions = {};
  const questions = [
    {
      title: 'What sound does a dog make?',
      id: 0,
      score: 100,
      answers: [
        {
          title: 'Meow',
          id: 0
        },
        {
          title: 'Woof',
          id: 1
        },
        {
          title: 'Hoo',
          id: 2
        }
      ]
    },
    {
      title: 'What sound does a cat make?',
      id: 1,
      score: 150,
      answers: [
        {
          title: 'Meow',
          id: 0
        },
        {
          title: 'Woof',
          id: 1
        },
        {
          title: 'Hoo',
          id: 2
        }
      ]
    }
  ];

  const component = mount(<QuizPage questions={questions} actions={actions} />);

  it('Should render Game page container', () => {
    expect(component.length).toBeTruthy();
  });

  it('Should have child', () => {
    expect(component.find('div').length).toEqual(1);
  });

  it('Should show div wrapper', () => {
    expect(component.find('div').length).toEqual(1);
  });

  it('Should not show loading', () => {
    expect(component.find('div.loading').exists()).toBe(false);
  });
});
