import * as types from "../actions/actionTypes";

export default function navReducer(state = {}, action) {
  let prepare = {};

  switch (action.type) {
    case types.SET_NAV_ACTIVE:
      return Object.assign({}, action.payload, prepare);

    case types.CLEAR_NAV_ACTIVE:
      prepare = {
        active: null
      };

      return Object.assign({}, action.payload, prepare);

    default:
      return state;
  }
}
