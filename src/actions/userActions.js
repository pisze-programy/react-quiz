import * as types from "./actionTypes";

export function login(payload) {
  return {type: types.FETCH_LOGIN, payload};
}

export function logout(payload) {
  return {type: types.FETCH_LOGOUT, payload};
}
