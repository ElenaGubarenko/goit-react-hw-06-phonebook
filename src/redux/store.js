// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './reducers/PhoneBookReducer';
import { configureStore } from '@reduxjs/toolkit';

// const rootReducer = combineReducers({
//   contactsReducer: contactsReducer,
// });

const store = configureStore({
  reducer: contactsReducer,
});

// const store = createStore(contactsReducer, composeWithDevTools());

export default store;
