// import { combineReducers } from 'redux';
import types from '../actionTypes/actionTypes';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filteredContacts: [],
  filter: '',
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.deleteContact:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload,
        ),
      };
    case types.addLocalStorageContacts:
      return {
        ...state,
        contacts: action.payload,
      };
    case types.filterContacts:
      return {
        ...state,
        filteredContacts: action.payload,
      };
    case types.setFilteredContactsEmpty:
      return {
        ...state,
        filteredContacts: [],
      };
    case types.handleFilter:
      return {
        ...state,
        filter: action.payload,
      };
    case types.addContact:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    default:
      return state;
  }
};

export default contactsReducer;
