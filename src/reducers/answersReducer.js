import * as types from "../actions/actionTypes";

export default function answersReducer(state = {}, action) {
  let prepare;

  switch (action.type) {
    case types.CHECK_STATUS_ANSWER:
      prepare = {
        isFetching: true,
      };

      return Object.assign({}, state, prepare);

    case types.RECEIVED_STATUS_ANSWER:
      prepare = {
        isFetching: false,
        status: action
      };

      return Object.assign({}, action, prepare);

    case types.FAILURE_STATUS_ANSWER:
      prepare = {
        error: action.error,
        isFetching: false,
      };

      return Object.assign({}, action, prepare);

    default:
      return state;
  }
}
