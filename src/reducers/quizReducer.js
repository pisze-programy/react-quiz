import * as types from "../actions/actionTypes";

export default function quizReducer(state = {}, action) {
  let prepare = {};

  switch (action.type) {

    case types.START_QUIZ:
      prepare = {
        start: true,
      };

      return Object.assign({}, action.payload, prepare);

    case types.FINISH_QUIZ:
      prepare = {
        finish: true,
      };

      return Object.assign({}, action.payload, prepare);

    case types.RESET_QUIZ:
      return Object.assign({}, action.payload);

    default:
      return state;
  }
}
