import {call, put, takeEvery} from "redux-saga/effects";
import {login} from "../api/login";
import {logout} from "../api/logout";
import {addPoints} from "../api/addPoints";
import * as types from "../actions/actionTypes";

export function* userLogin(action) {
  try {
    const user = yield call(login, action.payload);

    localStorage.setItem('token', JSON.stringify(user));

    yield put({type: types.RECEIVED_LOGIN, user: user});
  } catch (error) {

    localStorage.removeItem('token');

    yield put({type: types.FAILURE_LOGIN, error})
  }
}

export function* watchUserLogin() {
  yield takeEvery(types.FETCH_LOGIN, userLogin);
}

export function* userLogout(action) {
  try {
    const user = yield call(logout, action.payload);

    localStorage.removeItem('token');

    yield put({type: types.RECEIVED_LOGOUT, user: user});
  } catch (error) {

    yield put({type: types.FAILURE_LOGOUT, error})
  }
}

export function* watchUserLogout() {
  yield takeEvery(types.FETCH_LOGOUT, userLogout);
}

export function* userAddPoints(action) {
  try {
    const user = yield call(addPoints, action.payload);

    yield put({type: types.RECEIVED_ADD_POINTS, user: user});
  } catch (error) {

    yield put({type: types.FAILURE_ADD_POINTS, error})
  }
}

export function* watchUserAddPoints() {
  yield takeEvery(types.ADD_POINTS, userAddPoints);
}
