import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'modern-normalize/modern-normalize.css';

// import rootContactFormReducer from './redux/reducers/ContactFormReducer';
import rootPhoneBookReducer from './redux/reducers/PhoneBookReducer';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  // rootContactFormReducer: rootContactFormReducer,
  rootPhoneBookReducer: rootPhoneBookReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
