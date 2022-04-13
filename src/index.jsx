import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { BrowserRouter } from "react-router-dom";

import App from './containers/App';
import rootReducer from './modules';

import './assets/scss/index.scss';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  rootReducer,
  applyMiddleware(
    ...middleware
  )
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  ,
  document.getElementById('app')
);
