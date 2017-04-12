import * as types from "../actions/actionTypes";

export default function answersReducer(state = {}, action) {
  let prepare;

  switch (action.type) {
    case types.CHECK_STATUS_ANSWER:
      prepare = {
        isFetching: true,
      };

      return Object.assign({}, action.payload, prepare);

    case types.RECEIVED_STATUS_ANSWER:
      prepare = {
        isFetching: false,
        current: {
          ...state.current,
          status: action.status
        }
      };

      return Object.assign({}, state, prepare);

    case types.FAILURE_STATUS_ANSWER:
      prepare = {
        error: action.error,
        isFetching: false,
      };

      return Object.assign({}, state, prepare);

    case types.CLEAR_ANSWER:
      prepare = {
        current: null,
        list: [
          ...action.payload.list,
          action.payload.current
        ],
      };

      return Object.assign({}, action.payload, prepare);

    case types.RESET_ANSWERS:
      prepare = {
        list: []
      };

      return Object.assign({}, action.payload, prepare);
    default:
      return state;
  }
}
