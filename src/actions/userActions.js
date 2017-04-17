import * as types from "./actionTypes";

export function login(payload) {
  return {type: types.FETCH_LOGIN, payload};
}

export function logout(payload) {
  return {type: types.FETCH_LOGOUT, payload};
}

export function addPoints(payload) {
  return {type: types.ADD_POINTS, payload};
}
