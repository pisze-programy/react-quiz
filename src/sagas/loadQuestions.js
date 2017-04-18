import {call, put, takeEvery} from "redux-saga/effects";
import {fetchQuestions} from "../api/getQuestions";
import * as types from "../actions/actionTypes";

export function* loadQuestions(action) {
  try {
    const questions = yield call(fetchQuestions, action.payload);

    yield put({type: types.RECEIVED_QUESTIONS, questions: questions});
    yield put({type: types.ADD_SUCCESS});
  } catch (error) {
    yield put({type: types.FAILURE_LOAD_QUESTIONS, error});
    yield put({type: types.ADD_ERROR, error});
  }
}

export function* watchLoadQuestions() {
  yield takeEvery(types.LOAD_QUESTIONS, loadQuestions);
}
