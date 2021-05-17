import { combineReducers } from 'redux';
// import types from '../actionTypes/actionTypes';
import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions/actions';

const contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const filteredContacts = [];
const filter = '';

const contactsReducer = createReducer(contacts, {
  [actions.deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
  [actions.addLocalStorageContacts]: (state, action) => action.payload,
  [actions.addContact]: (state, action) => [action.payload, ...state],
});

const filterReducer = createReducer(filter, {
  [actions.handleFilter]: (state, action) => action.payload,
});

const filteredContactsReducer = createReducer(filteredContacts, {
  [actions.filterContacts]: (state, action) => action.payload,
  [actions.setFilteredContactsEmpty]: (state, action) => action.payload,
});

export default combineReducers({
  contactsReducer,
  filterReducer,
  filteredContactsReducer,
});

// const contactsReducer = (state = contacts, action) => {
//   switch (action.type) {
//     case types.deleteContact:
//       return state.filter(contact => contact.id !== action.payload);
//     case types.addLocalStorageContacts:
//       return action.payload;
//     case types.addContact:
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

// const filterReducer = (state = filter, action) => {
//   switch (action.type) {
//     case types.handleFilter:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// const filteredContactsReducer = (state = filteredContacts, action) => {
//   switch (action.type) {
//     case types.filterContacts:
//       return action.payload;
//     case types.setFilteredContactsEmpty:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// const filterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case types.deleteContact:
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload,
//         ),
//       };
//     case types.addLocalStorageContacts:
//       return {
//         ...state,
//         contacts: action.payload,
//       };
//     case types.filterContacts:
//       return {
//         ...state,
//         filteredContacts: action.payload,
//       };
//     case types.setFilteredContactsEmpty:
//       return {
//         ...state,
//         filteredContacts: [],
//       };
//     case types.handleFilter:
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     case types.addContact:
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     default:
//       return state;
//   }
// };
