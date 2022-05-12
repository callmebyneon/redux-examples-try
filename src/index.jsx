import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { getAllProducts } from './actions/CartActions';
import App from './containers/App';
import rootReducer, { rootSaga } from './reducers';

import { composeWithDevTools } from '@redux-devtools/extension';

import './assets/scss/index.scss';

const sagaMiddleware = createSagaMiddleware();

const middleware = [ thunk, sagaMiddleware ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      ...middleware
    )
  )
);

sagaMiddleware.run(rootSaga); // 스토어 생성 후 루트 사가 실행

store.dispatch(getAllProducts());

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  ,
  document.getElementById('app')
);
