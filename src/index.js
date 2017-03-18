import React from 'react';
import { render } from 'react-dom';
import configureStore from './store';
import { Provider } from 'react-redux';
import './styles/application.scss';

import QuizPage from './components/QuizPage';

const store = configureStore();

render (
  <Provider store={store}>
    <QuizPage />
  </Provider>,
  document.getElementById('root')
);
