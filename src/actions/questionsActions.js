import * as types from "./actionTypes";

export function loadQuestions(payload) {
  return { type: types.LOAD_QUESTIONS, payload };
}

export function resetQuestions(payload) {
  return { type: types.RESET_QUESTIONS, payload };
}

export function nextQuestion(payload) {
  return { type: types.NEXT_QUESTION, payload };
}

export function resetActiveQuestionsLevel(payload) {
  return { type: types.RESET_ACTIVE_QUESTIONS_LEVEL, payload };
}
