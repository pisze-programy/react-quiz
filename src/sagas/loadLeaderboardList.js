import {call, put, takeEvery} from "redux-saga/effects";
import {fetchLeaderboard} from "../api/getLeaderboardList";
import * as types from "../actions/actionTypes";

export function* loadLeaderboardList() {
  try {
    const list = yield call(fetchLeaderboard);

    yield put({type: types.RECEIVED_LEADERBOARD_LIST, list: list});
  } catch (error) {
    yield put({type: types.FAILURE_LEADERBOARD_LIST, error})
  }
}

export function* watchLeaderboardList() {
  yield takeEvery(types.FETCH_LEADERBOARD_LIST, loadLeaderboardList);
}
