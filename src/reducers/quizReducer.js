import * as types from "../actions/actionTypes";

export default function quizReducer(state = {}, action) {
  let prepare = {};

  switch (action.type) {
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
        ready: false,
        isFetching: false
      };

      return Object.assign({}, state, prepare);


    case types.FETCH_QUIZ_LEVELS:
      prepare = {
        isFetching: true
      };

      return Object.assign({}, action.payload, prepare);

    case types.RECEIVED_QUIZ_LEVELS:
      prepare = {
        isFetching: false,
        ready: true,
        start: true,
        levels: action.levels
      };

      return Object.assign({}, state, prepare);

    case types.FAILURE_QUIZ_LEVELS:
      prepare = {
        error: action.error,
        ready: false,
        isFetching: false
      };

      return Object.assign({}, state, prepare);

    default:
      return state;
  }
}
