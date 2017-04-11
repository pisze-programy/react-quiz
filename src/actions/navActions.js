import * as types from "./actionTypes";

export function clearNavActive(payload) {
  return {type: types.CLEAR_NAV_ACTIVE, payload};
}

export function setNavActive(payload) {
  return {type: types.SET_NAV_ACTIVE, payload};
}
