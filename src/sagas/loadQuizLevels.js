import {call, put, takeEvery} from "redux-saga/effects";
import {fetchQuizLevels} from "../api/getQuizLevels";
import * as types from "../actions/actionTypes";

export function* loadQuizLevels(action) {
  try {
    const levels = yield call(fetchQuizLevels, action.payload);

    yield put({type: types.RECEIVED_QUIZ_LEVELS, levels: levels});
    yield put({type: types.ADD_SUCCESS});
  } catch (error) {
    yield put({type: types.FAILURE_QUIZ_LEVELS, error});
    yield put({type: types.ADD_ERROR, error});
  }
}

export function* watchQuizLevels() {
  yield takeEvery(types.FETCH_QUIZ_LEVELS, loadQuizLevels);
}
