import React from "react";
import expect from "expect";
import {mount} from "enzyme";
import {QuizPage} from "./QuizPage.js";

describe('Game page tests:', () => {
  const actions = {};
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
    loading: false,
    error: false,
    isFetching: false,
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

  const component = mount(<QuizPage questions={questions} actions={actions} />);

  it('Should render Game page container', () => {
    expect(component.length).toBeTruthy();
  });

  it('Should have child', () => {
    expect(component.find('div.quiz-page').length).toEqual(1);
  });

  it('Should show loading element error', () => {
    const errorQuestions = Object.assign({}, questions, {error: true});
    const componentWithErrors = mount(
      <QuizPage
        questions={errorQuestions}
        actions={actions} />
    );

    expect(componentWithErrors.find('p.error').length).toEqual(1);
  });

  it('Should show information about no more questions', () => {
    const noCurrentQuestions = Object.assign({}, questions, {current: null});
    const componentWithoutQuestions = mount(
      <QuizPage
        questions={noCurrentQuestions}
        actions={actions} />
    );

    expect(componentWithoutQuestions.find('p').length).toEqual(1);
  });

  it('Should show href for fetching data', () => {
    const fetchingQuestions = Object.assign({}, questions, {isFetching: true});
    const componentWithFetching = mount(
      <QuizPage
        questions={fetchingQuestions}
        actions={actions} />
    );

    expect(componentWithFetching.find('p.isFetching').length).toEqual(1);
  });

  it('Should not show loading', () => {
    expect(component.find('div.loading').exists()).toBe(false);
  });
});
