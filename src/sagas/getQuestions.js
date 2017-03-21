import {call, put, take} from "redux-saga/effects";
import {fetchQuestions} from "../api/getQuestions";
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
  yield take(types.LOAD_QUESTIONS);
  yield call(loadQuestions);
}
