import React from "react";
import expect from "expect";
import {mount} from "enzyme";
import {QuizPage} from "./QuizPage.js";

describe('Game page tests:', () => {
  const quizActions = {};
  const questionsActions = {};
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

  const quiz = {
    loading: false,
    start: false,
    finish: false,
    score: 0,
  };

  const component = mount(<QuizPage
    questions={questions}
    questionsActions={questionsActions}
    quizActions={quizActions}
    quiz={quiz} />);

  it('Should render Game page container', () => {
    expect(component.length).toBeTruthy();
  });

  it('Should not show loading', () => {
    expect(component.find('.loading').exists()).toBe(false);
  });

  it('Should show finish state while quiz is finished', () => {
    const finishQuiz = Object.assign({}, quiz, {finish: true});
    const componentWithErrors = mount(
      <QuizPage
        questions={questions}
        questionsActions={questionsActions}
        quizActions={quizActions}
        quiz={finishQuiz}  />
    );

    expect(componentWithErrors.find('.finish').length).toEqual(1);
  });

  it('Should have start quiz href if quiz did not start yet', () => {
    expect(component.find('.start-quiz').length).toEqual(1);
  });

  it('Should show loader while quiz if loading', () => {
    const loadingQuiz = Object.assign({}, quiz, {start: true, loading: true});
    const componentWithLoader = mount(
      <QuizPage
        questions={questions}
        questionsActions={questionsActions}
        quizActions={quizActions}
        quiz={loadingQuiz}  />
    );

    expect(componentWithLoader.find('.loading').length).toEqual(1);
  });

  it('Should show information about no more questions', () => {
    const noCurrentQuestions = Object.assign({}, questions, {current: null});
    const startedQuiz = Object.assign({}, quiz, {start: true});
    const componentWithoutQuestions = mount(
      <QuizPage
        questions={noCurrentQuestions}
        questionsActions={questionsActions}
        quizActions={quizActions}
        quiz={startedQuiz}  />
    );

    expect(componentWithoutQuestions.find('.no-more-questions').length).toEqual(1);
  });

  it('Should show href to fetch data', () => {
    const noQuestions = Object.assign({}, questions, {list: null});
    const startedQuiz = Object.assign({}, quiz, {start: true});
    const componentWithFetching = mount(
      <QuizPage
        questions={noQuestions}
        questionsActions={questionsActions}
        quizActions={quizActions}
        quiz={startedQuiz}  />
    );

    expect(componentWithFetching.find('.fetch-questions').length).toEqual(1);
  });

  it('Should show href for fetching data', () => {
    const fetchingQuestions = Object.assign({}, questions, {isFetching: true});
    const startedQuiz = Object.assign({}, quiz, {start: true});
    const componentWithFetching = mount(
      <QuizPage
        questions={fetchingQuestions}
        questionsActions={questionsActions}
        quizActions={quizActions}
        quiz={startedQuiz}  />
    );

    expect(componentWithFetching.find('.is-fetching').length).toEqual(1);
  });
});
