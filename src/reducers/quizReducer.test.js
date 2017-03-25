import React from "react";
import expect from "expect";
import quizReducer from './quizReducer';
import * as types from '../actions/actionTypes';

describe('Quiz Actions tests:', () => {
  it('Start Quiz action should return payload', () => {
    const action = {
      type: types.START_QUIZ,
      payload: {
        start: false,
        finish: false,
      }
    };

    const state = {};

    const reducer = {
      start: true,
      finish: false,
    };

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
