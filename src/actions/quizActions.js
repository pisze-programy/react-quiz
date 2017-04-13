import * as types from "./actionTypes";

export function resetQuiz(payload) {
  return { type: types.RESET_QUIZ, payload };
}

export function loadQuizList(payload) {
  return {type: types.FETCH_QUIZ_LIST, payload};
}

export function loadQuizLevels(payload) {
  return {type: types.FETCH_QUIZ_LEVELS, payload};
}

