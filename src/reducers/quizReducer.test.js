import React from "react";
import expect from "expect";
import quizReducer from './quizReducer';
import * as types from '../actions/actionTypes';

describe('Quiz Actions tests:', () => {
  it('Start Quiz action should return payload', () => {
    const action = {
      type: types.START_QUIZ
    };

    const state = {
      payload: {}
    };

    const reducer = {
      start: true,
    };

    expect(quizReducer(state, action)).toEqual(reducer);
  });

  it('Finish Quiz action should return payload', () => {
    const action = {
      type: types.FINISH_QUIZ
    };

    const state = {
      payload: {}
    };

    const reducer = {
      start: false,
      finish: true,
    };

    expect(quizReducer(state, action)).toEqual(reducer);
  });
});
