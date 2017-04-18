import * as types from "./actionTypes";

export function addError(payload) {
  return {type: types.ADD_ERROR, payload};
}

export function addLoader(payload) {
  return {type: types.ADD_LOADER, payload};
}

export function addSuccess(payload) {
  return {type: types.ADD_SUCCESS, payload};
}

export function removeError(payload) {
  return {type: types.REMOVE_ERROR, payload};
}

export function removeSuccess(payload) {
  return {type: types.REMOVE_SUCCESS, payload};
}

export function removeLoader(payload) {
  return {type: types.REMOVE_LOADER, payload};
}
