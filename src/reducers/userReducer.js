import * as types from "../actions/actionTypes";

export default function userReducer(state = {}, action) {
  let prepare = {};

  switch (action.type) {
    case types.FETCH_LOGIN:
      prepare = {
        isFetching: true,
      };

      return Object.assign({}, action.payload, prepare);

    case types.RECEIVED_LOGIN:
      prepare = {
        isFetching: false,
        error: null,
        username: action.user.username,
        score: action.user.score,
        isAuthenticated: action.user.isAuthenticated,
      };

      return Object.assign({}, action.user, state, prepare);

    case types.FAILURE_LOGIN:
      prepare = {
        isFetching: false,
        username: null,
        score: null,
        isAuthenticated: false,
        error: action.error,
      };

      return Object.assign({}, state, prepare);

    case types.FETCH_LOGOUT:
      prepare = {
        isFetching: true,
      };

      return Object.assign({}, action.payload, prepare);

    case types.RECEIVED_LOGOUT:
      prepare = {
        id: null,
        isFetching: false,
        error: null,
        username: null,
        score: null,
        isAuthenticated: false,
      };

      return Object.assign({}, state, prepare);

    case types.FAILURE_LOGOUT:
      prepare = {
        isFetching: false,
        error: action.error,
      };

      return Object.assign({}, state, prepare);

    case types.ADD_POINTS:
      prepare = {
        isFetching: true,
      };

      return Object.assign({}, action.payload, prepare);

    case types.RECEIVED_ADD_POINTS:
      prepare = {
        isFetching: false,
      };

      return Object.assign({}, state, action.user, prepare);

    case types.FAILURE_ADD_POINTS:
      prepare = {
        isFetching: false,
        error: action.error,
      };

      return Object.assign({}, state, prepare);


    default:
      return state;
  }
}
