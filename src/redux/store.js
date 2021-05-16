import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './reducers/PhoneBookReducer';

// const rootReducer = combineReducers({
//   contactsReducer: contactsReducer,
// });

const store = createStore(contactsReducer, composeWithDevTools());

export default store;
