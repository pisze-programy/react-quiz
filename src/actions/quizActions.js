import * as types from "./actionTypes";

export function startQuiz(payload) {
  return { type: types.START_QUIZ, payload };
}

export function resetQuiz(payload) {
  return { type: types.RESET_QUIZ, payload };
}

export function loadQuizList(payload) {
  return {type: types.FETCH_QUIZ_LIST, payload};
}

export function failureQuizList(payload) {
  return {type: types.FAILURE_QUIZ_LIST, payload};
}

export function receivedQuizList(payload) {
  return {type: types.RECEIVED_QUIZ_LIST, payload};
}


