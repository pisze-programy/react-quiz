import {call, put, takeEvery} from "redux-saga/effects";
import {fetchStatusAnswer} from "../api/getAnswerStatus";
import * as types from "../actions/actionTypes";

export function* statusAnswer(action) {
  try {
    const status = yield call(fetchStatusAnswer, action.payload);

    yield put({type: types.RECEIVED_STATUS_ANSWER, status: status});
    yield put({type: types.ADD_SUCCESS});
  } catch (error) {
    yield put({type: types.FAILURE_STATUS_ANSWER, error});
    yield put({type: types.ADD_ERROR, error});
  }
}

export function* watchStatusAnswer() {
  yield takeEvery(types.CHECK_STATUS_ANSWER, statusAnswer);
}
