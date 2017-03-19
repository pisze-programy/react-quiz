import * as types from './actionTypes';

export function startQuiz(payload) {
  return { type: types.START_QUIZ, payload };
}

export function finishQuiz(payload) {
  return { type: types.FINISH_QUIZ, payload };
}

export function loadQuiz(payload) {
  return { type: types.LOAD_QUIZ, payload };
}

export function resetQuiz(payload) {
  return { type: types.RESET_QUIZ, payload };
}
