import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';

// import { watchLoadWord } from './../sagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  return {
    ...createStore(
      rootReducer,
      applyMiddleware(
        sagaMiddleware,
        reduxImmutableStateInvariant(),
        logger()
      )),
    // runSaga: sagaMiddleware.run(watchLoadWord)
  };
};

export default configureStore;