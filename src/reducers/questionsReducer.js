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

      return Object.assign({}, state, prepare);

    case types.FAILURE_LOAD_QUESTIONS:
      prepare = {
        error: action.error,
        isFetching: false
      };

      return Object.assign({}, state, prepare);

    case types.RESET_QUESTIONS:
      return Object.assign({}, action.payload, prepare);

    case types.NEXT_QUESTION:
      const currentIndex = state.list.indexOf(state.current);

      prepare = {
        current: state.list[currentIndex + 1]
      };

      return Object.assign({}, state, prepare);

    case types.RESET_ACTIVE_QUESTIONS_LEVEL:
      prepare = {
        level: null
      };

      return Object.assign({}, action.payload, prepare);


    case types.RESET_CURRENT_QUESTION:
      prepare = {
        current: null
      };

      return Object.assign({}, action.payload, prepare);

    default:
      return state;
  }
}
