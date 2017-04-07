import React from "react";
import {render} from "react-dom";
import configureStore from "./store";
import {Provider} from "react-redux";
import {browserHistory, Router} from "react-router";
import routes from "./routes";
import "./styles/application.css";

import "./theme.css";
import theme from './theme';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

const store = configureStore();

render (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router routes={routes} history={browserHistory} />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
