import * as types from "./actionTypes";

export function loadLeaderboard(payload) {
  return { type: types.FETCH_LEADERBOARD_LIST, payload };
}
