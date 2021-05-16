import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import PhoneBookReducer from './reducers/PhoneBookReducer';

// const rootReducer = combineReducers({
//   contactsReducer: contactsReducer,
// });

// const store = createStore(contactsReducer, composeWithDevTools());
const store = configureStore({
  reducer: PhoneBookReducer,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
