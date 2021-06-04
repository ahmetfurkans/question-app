import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App';
import reducers from './reducers/index';

//React Redux store oluşturma
const middleware = [thunk];
const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middleware),
    //Its developer tool to show state rapidly
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
