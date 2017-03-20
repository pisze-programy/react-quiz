import * as types from "../actions/actionTypes";

export default function questionsReducer(state = {}, action) {
  let prepare;

  switch (action.type) {
    case types.LOAD_QUESTIONS:
      prepare = {
        isFetching: true
      };

      return Object.assign({}, action.payload, prepare);

    case types.RECEIVED_QUESTIONS:
      prepare = {
        isFetching: false,
        list: action.questions
      };

      return Object.assign({}, state, prepare);

    case types.FAILURE_LOAD_QUESTIONS:
      prepare = {
        error: action.error,
        isFetching: false
      };

      return Object.assign({}, state, prepare);

    default:
      return state;
  }
}
