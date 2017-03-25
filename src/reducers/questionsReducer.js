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
        list: action.questions,
        current: action.questions[0]
      };

      return Object.assign({}, action, prepare);

    case types.FAILURE_LOAD_QUESTIONS:
      prepare = {
        error: action.error,
        isFetching: false
      };

      return Object.assign({}, action, prepare);

    case types.RESET_QUESTIONS:
      prepare = {
        current: state.list[0]
      };

      return Object.assign({}, state, prepare);

    case types.NEXT_QUESTION:
      const currentIndex = state.list.indexOf(state.current);

      prepare = {
        current: state.list[currentIndex + 1]
      };

      return Object.assign({}, state, prepare);

    default:
      return state;
  }
}
