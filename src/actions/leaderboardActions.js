import * as types from "./actionTypes";

export function loadLeaderboard(payload) {
  return { type: types.FETCH_LEADERBOARD_LIST, payload };
}

export function receivedLeaderboard(payload) {
  return { type: types.RECEIVED_LEADERBOARD_LIST, payload };
}

export function failureLoadLeaderboard(payload) {
  return { type: types.FAILURE_LEADERBOARD_LIST, payload };
}
