import * as types from "./actionTypes";

export function statusAnswer(payload) {
  return { type: types.CHECK_STATUS_ANSWER, payload };
}

export function receivedStatusAnswer(payload) {
  return { type: types.RECEIVED_STATUS_ANSWER, payload };
}

export function failureStatusAnswer(payload) {
  return { type: types.FAILURE_STATUS_ANSWER, payload };
}
