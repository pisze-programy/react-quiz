import React from "react";
import expect from "expect";
import questionsReducer from './questionsReducer';
import * as types from '../actions/actionTypes';

const questions = [
  {
    title: 'What sound does a dog make?',
    id: 0,
    type: 'dog',
    score: 100,
    time: 5000,
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
    type: 'cat',
    score: 150,
    time: 10000,
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

describe('Quiz Actions tests:', () => {
  it('Load Questions action should return reducer', () => {
    const action = {
      type: types.LOAD_QUESTIONS
    };

    const state = {
      payload: {}
    };

    const reducer = {
      isFetching: true,
    };

    expect(questionsReducer(state, action)).toEqual(reducer);
  });

  it('Received Questions action should return reducer', () => {
    const action = {
      type: types.RECEIVED_QUESTIONS,
      questions
    };

    const state = {};

    const reducer = {
      type: types.RECEIVED_QUESTIONS,
      questions,
      isFetching: false,
      list: questions,
      current: questions[0]
    };

    expect(questionsReducer(state, action)).toEqual(reducer);
  });

  it('Failure Load Questions action should return reducer', () => {
    const error = "Error while fetching";

    const action = {
      type: types.FAILURE_LOAD_QUESTIONS,
      error
    };

    const state = {};

    const reducer = {
      error,
      isFetching: false
    };

    expect(questionsReducer(state, action)).toEqual(reducer);
  });

  it('Next Questions action should reducer', () => {
    const action = {
      type: types.NEXT_QUESTION,
    };

    const state = {
      list: questions,
      current: questions[0]
    };

    const reducer = {
      list: questions,
      current: questions[1]
    };

    expect(questionsReducer(state, action)).toEqual(reducer);
  });
});
