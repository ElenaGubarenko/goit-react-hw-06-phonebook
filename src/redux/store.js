import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './reducers/PhoneBookReducer';

const rootReducer = combineReducers({
  contactsReducer: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
