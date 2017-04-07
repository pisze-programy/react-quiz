import * as types from "../actions/actionTypes";

export default function quizReducer(state = {}, action) {
  let prepare = {};

  switch (action.type) {

    case types.START_QUIZ:
      prepare = {
        start: true,
      };

      return Object.assign({}, action.payload, prepare);

    case types.RESET_QUIZ:
      return Object.assign({}, action.payload);

    case types.FETCH_QUIZ_LIST:
      prepare = {
        isFetching: true
      };

      return Object.assign({}, action.payload, prepare);

    case types.RECEIVED_QUIZ_LIST:
      prepare = {
        isFetching: false,
        ready: true,
        list: action.list
      };

      return Object.assign({}, state, prepare);

    case types.FAILURE_QUIZ_LIST:
      prepare = {
        error: action.error,
        ready: true,
        isFetching: false
      };

      return Object.assign({}, state, prepare);

    default:
      return state;
  }
}
