import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import ScrollToTop from './js/utils/ScrollToTop';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css/animate.min.css';

import store from './js/redux/store';
import App from './App';

import './sass/app.scss';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <ScrollToTop />
      <ReactNotification />
      <Route>
        <App />
      </Route>
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
