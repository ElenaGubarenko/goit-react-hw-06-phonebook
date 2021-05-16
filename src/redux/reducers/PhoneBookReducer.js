import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import types from '../actionTypes/actionTypes';
import actions from '../actions/actions';

const contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const filteredContacts = [];
const filter = '';

const toolkitContactsReducer = createReducer(contacts, {
  [actions.deleteContact]: (state, action) => [
    state.filter(contact => contact.id !== action.payload),
  ],
  [actions.addLocalStorageContacts]: (_, action) => [action.payload],
  [actions.addContact]: (state, action) => [...state, action.payload],
});

const toolkitFilteredContactsReducer = createReducer(filteredContacts, {
  [actions.filterContacts]: (_, action) => [action.payload],
  [actions.setFilteredContactsEmpty]: (_, action) => [action.payload],
});

const toolkitFilterReducer = createReducer(filter, {
  [actions.handleFilter]: (_, action) => [action.payload],
});

// const initialState = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filteredContacts: [],
//   filter: '',
// };

// const contactsReducer = (state = initialState, action) => {
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
//         filteredContacts: action.payload,
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

export default combineReducers({
  toolkitContactsReducer,
  toolkitFilteredContactsReducer,
  toolkitFilterReducer,
});
