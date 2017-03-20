import * as types from "../actions/actionTypes";

export default function quizReducer(state = [], action) {
  switch (action.type) {

    case types.START_QUIZ:
      return [
        ...state,
        Object.assign({}, action.payload)
      ];

    case types.FINISH_QUIZ:
      return [
        ...state,
        Object.assign({}, action.payload)
      ];

    default:
      return state;
  }
}
