import {
  applyMiddleware,
  createStore,
  compose,
} from "redux";
import rootReducer from "../reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import Authentication from '../utils/authentication';

import root from "./../sagas/index";

const isAuthenticated = {
  user: Authentication()
};

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    isAuthenticated,
    compose(
      applyMiddleware(
        sagaMiddleware,
        reduxImmutableStateInvariant(),
        logger()
      )
    )
  );

  sagaMiddleware.run(root);

  return store;
};

export default configureStore;
