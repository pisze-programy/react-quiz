import * as types from "../actions/actionTypes";

export default function appReducer(state = {}, action) {
  let prepare = {};

  switch (action.type) {

    case types.ADD_LOADER:
      prepare = {
        loader: true
      };

      return Object.assign({}, state, prepare);

    case types.REMOVE_LOADER:
      prepare = {
        loader: null
      };

      return Object.assign({}, state, prepare);

    case types.ADD_ERROR:
      prepare = {
        success: state.error
      };

      return Object.assign({}, state, prepare);

    case types.REMOVE_ERROR:
      prepare = {
        error: null
      };

      return Object.assign({}, state, prepare);

    case types.ADD_SUCCESS:
      prepare = {
        success: true
      };

      return Object.assign({}, state, prepare);

    case types.REMOVE_SUCCESS:
      prepare = {
        success: null
      };

      return Object.assign({}, state, prepare);

    default:
      return state;
  }
}
