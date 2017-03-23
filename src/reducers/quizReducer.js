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
        start: false,
        finish: true,
      };

      return Object.assign({}, action.payload, prepare);

    default:
      return state;
  }
}
