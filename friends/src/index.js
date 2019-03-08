import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import saveAuthToken from './middleware/save-auth-token';
import { friendsReducer, loginReducer } from './reducers/reducers';
import App from './App';

const rootReducer = combineReducers({ friendsReducer, loginReducer });

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(thunk, saveAuthToken),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
