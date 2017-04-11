import * as types from "./actionTypes";

export function loadQuestions(payload) {
  return { type: types.LOAD_QUESTIONS, payload };
}

export function receivedQuestions(payload) {
  return { type: types.RECEIVED_QUESTIONS, payload };
}

export function failureLoadQuestions(payload) {
  return { type: types.FAILURE_LOAD_QUESTIONS, payload };
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
