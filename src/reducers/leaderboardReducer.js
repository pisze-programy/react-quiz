import * as types from "../actions/actionTypes";

export default function leaderboardReducer(state = {}, action) {
  let prepare = {};

  switch (action.type) {
    case types.FETCH_LEADERBOARD_LIST:
      prepare = {
        isFetching: true
      };

      return Object.assign({}, action.payload, prepare);

    case types.RECEIVED_LEADERBOARD_LIST:
      prepare = {
        isFetching: false,
        list: action.list
      };

      return Object.assign({}, state, prepare);

    case types.FAILURE_LEADERBOARD_LIST:
      prepare = {
        error: action.error,
        isFetching: false
      };

      return Object.assign({}, state, prepare);

    default:
      return state;
  }
}
