import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
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
      <BrowserRouter>
      <ScrollToTop />
        <ReactNotification />
        <Route>
          <App />
        </Route>
      </BrowserRouter>
    </Provider>,
  document.getElementById('root'),
);
