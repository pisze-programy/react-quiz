import * as types from "./actionTypes";

export function startQuiz(payload) {
  return { type: types.START_QUIZ, payload };
}

export function finishQuiz(payload) {
  return { type: types.FINISH_QUIZ, payload };
}
