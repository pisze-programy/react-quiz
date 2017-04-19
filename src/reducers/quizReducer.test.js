import React from "react";
import expect from "expect";
import quizReducer from './quizReducer';
import * as types from '../actions/actionTypes';

describe('Quiz Actions tests:', () => {
  it('Quiz Reducer should return default payload', () => {
    const action = {};

    const state = {};

    const reducer = {};

    expect(quizReducer(state, action)).toEqual(reducer);
  });

  it('Finish Quiz action should return payload', () => {
    const action = {
      type: types.FINISH_QUIZ,
      payload: {
        start: false,
        finish: false,
      }
    };

    const state = {};

    const reducer = {
      start: false,
      finish: true,
    };

    expect(quizReducer(state, action)).toEqual(reducer);
  });

  it('Reset Quiz action should return payload', () => {
    const action = {
      type: types.RESET_QUIZ,
      payload: {
        start: false,
        finish: false,
      }
    };

    const state = {};

    const reducer = {
      start: false,
      finish: false,
    };

    expect(quizReducer(state, action)).toEqual(reducer);
  });
});
