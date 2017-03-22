import React from "react";
import expect from "expect";
import {mount} from "enzyme";
import QuestionContainer from "./QuestionContainer.js";

describe('Quiz page tests:', () => {
  const questions = {
    list: [
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
    ],
    isFetching: false,
    error: false,
    current: {
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
  };

  const goToNextQuestion = () => false;

  const component = mount(
    <QuestionContainer
      questions={questions}
      goToNextQuestion={goToNextQuestion}
    />);

  it('Should render QuestionContainer component', () => {
    expect(component.length).toBeTruthy();
  });

  it('Should have child', () => {
    expect(component.find('div.question-container').length).toEqual(1);
  });
});
