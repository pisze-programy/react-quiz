import {call, put, fork, takeEvery} from "redux-saga/effects";
import {fetchQuizList} from "../api/getQuizList";
import {fetchQuestions} from "../api/getQuestions";
import {fetchStatusAnswer} from "../api/getAnswerStatus";
import * as types from "../actions/actionTypes";

export function* loadQuestions() {
  try {
    const questions = yield call(fetchQuestions);

    yield put({type: types.RECEIVED_QUESTIONS, questions: questions});
  } catch (error) {
    yield put({type: types.FAILURE_LOAD_QUESTIONS, error})
  }
}

export function* watchLoadQuestions() {
  yield takeEvery(types.LOAD_QUESTIONS, loadQuestions);
}

// TODO: Move to another saga file

export function* statusAnswer() {
  try {
    const status = yield call(fetchStatusAnswer);

    yield put({type: types.RECEIVED_STATUS_ANSWER, status: status});
  } catch (error) {
    yield put({type: types.FAILURE_STATUS_ANSWER, error})
  }
}

export function* watchStatusAnswer() {
  yield takeEvery(types.CHECK_STATUS_ANSWER, statusAnswer);
}

// TODO: Move to another saga file

export function* loadQuizList() {
  try {
    const list = yield call(fetchQuizList);

    yield put({type: types.RECEIVED_QUIZ_LIST, list: list});
  } catch (error) {
    yield put({type: types.FAILURE_QUIZ_LIST, error})
  }
}

export function* watchQuizList() {
  yield takeEvery(types.FETCH_QUIZ_LIST, loadQuizList);
}

// TODO: Move to another saga file

export default function* root() {
  yield [
    fork(watchQuizList),
    fork(watchLoadQuestions),
    fork(watchStatusAnswer)
  ];
}
